---
id: exercise5
title: Bonus - APIs
sidebar_position: 5
sidebar_label: 5. Bonus - APIs
hide_table_of_contents: true
draft: true
---

# Bonus Exercise 1: Integrating via APIs

**Duration: 45 minutes**

In this bonus exercise, we will use a real webservice API to update our list of airports which we previously imported via an excel spreadsheet. This will ensure that the locations all remain up to date with some additional data fields for tracking.

If you noticed in exercise 1, when we imported the Airports from the excel sheet, the **Lat** and **Lon** data is empty, we will go ahead and fix that.

![](images/latlonmiss.png)

*Note: This session will require you to use a 3rd party API service to get data. Your personal data will be required to sign up to this service. If you are not comfortable with exposing this data, skip this exercise or let your instructor know.*

## Part 1: Create an Integration Action

1. Go to https://airlabs.co/ and click **Sign Up**

![](images/airlabslanding.png)

1. Fill in the relevant details to sign up for an account

1. Verify your account with the email sent to the email address sent to your email account

![](images/confirmationair.png)

1. Sign in to your airlabs account on the next page

1. Click **Copy** next to **API Key**

![](images/airlandingpage.png)

1. Paste your copied **API Key** somewhere that you are able to retrieve later

1. Click **Documentation**, then **Airports**

1. Quickly read through this API documentation, notice that the API request has already been populated for you - We will rebuild this

1. Navigate back to your main ServiceNow interface, and search and click **Action Designer** under **All**

![](images/actiondesigner.png)

1. You are brough to the **Flow Designer** interface

1. Click the **New** button on the top right, then click **Action**

![](images/clickaction.png)

1. In the pop-up, enter **Get Airport Details** under *Action name*. For description, enter **Calls the Airlabs API to retrieve airport details**

![](images/actionprops.png)

1. Click **Submit**

1. Click **Create Input**

1. Under **Label**, enter **IATA Code**, then press enter

![](images/createinput.png)

1. Click on the **+** icon in between **Inputs** and **Error Evaluation** on the left sidebar

![](images/addstep1.png)

1. In the pop-up box, scroll down and click **REST**

![](images/rest.png)

1. Change **Connection** to **Define Connection Inline**

1. Copy this URL and paste it under **Base URL**:
    <br/>
    `https://airlabs.co/api/v9`

1. Enter **/airports** under **Resource Path**

1. Click on the **+** icon for **Query Parameters**

1. Enter **api_key** under **Name**, then paste your previously copied API Key under **Value**

1. 1. Click on the **+** icon for **Query Parameters**

1. Enter **iata_code** under **Name**, then drag and drop the **IATA Code** data pill on the right sidebar onto the **Value** field

1. Click on the **+** icon for **Headers**

1. Enter **User-Agent** under **Name**, and **XXXXXX** under **Value**

1. Your form should now look like this:

![](images/restcomplete.png)

1. Click **Save** at the top right

1. Click **Test** at the top right

1. Enter **SIN** under the IATA Code field, then click **Run Test**

1. Click **Your test has finished running. View the action execution details.**

![](images/iatatest.png)

1. The new tab shows every step of the execution so far. Expand **Steps** and scroll down to the line that shows **Response Body**

1. Click on the corresponding value and copy the entire block of text

![](images/copyoutput.gif)

1. Navigate back the the main **Action Get Aiport Details** tab

1. Close the pop-up

1. Click on the **+** icon on the left sidebar after **REST step**

![](images/afterrest.png)

1. Scroll down and click **JSON Parser**

1. Drag and drop the **Response Body** data pill from the right sidebar onto the **Source data** field

1. Paste what you copied onto the main body

1. Toggle the **Structured Payload View**

1. Click **Generate Target**

1. The **Target** on the right should be generated

1. Here are all the steps in sequence:

![](images/jsonparser.gif)

1. Click **Outputs** on the left sidebar

1. Click **Create Output**

![](images/output.png)

1. In the new row, change **Label** to **Output**, **Name** to **output** and **Type** to **Array.Object**

![](images/arrayobj.png)

1. Click **Exit Edit Mode**

1. On the right sidebar, expand **root** under **JSON Parser Step**

1. Drag and drop the **response** data pill onto the **Output** Value field

1. Click **Publish** on the top right

![](images/publishaction.gif)

1. Click **Test**

1. Enter **BKK** and run test, then **view execution details**

1. Ensure that the **Output** is defined, and when clicking on it you see a result similar to what is shown below

![](images/finaltest.png)

1. You've completed integration! Now let's use it in a workflow

<br/>

## Part 2: Using our integration action

1. Close all the pop-up boxes and click on the **+** tab

1. Click **Flow**

![](images/newflow.png)

1. Under **Flow name**, enter **Update airport information**

1. Set **Run As** to **System User**

![](images/updateairport.png)

1. Click **Submit**

1. Click **Add a trigger**, then select **Daily** under date. This will run this workflow everyday

![](images/daily.png)

1. Click **Done**

1. Click **Add an Action, Flow Logic, or Subflow**

1. Click **Action**

1. Search and select **Look Up Records** - Pay special attention to selecting **Look Up Records** and not **Look Up Record**

![](images/lookuprecords.png)

1. Search and select **Airport** under **Table**

1. Click **Done**

1. Click **Add an Action, Flow Logic, or Subflow**

1. Click **Flow Logic**

1. Click **For Each**

![](images/foreach.png)

1. Drag and drop the **Airport Records** data pill from the right sidebar onto the **Items** field


1. Click the **+** icon under the **For Each Item in** step

![](images/dropairports.png)

1. Click **Action**

1. Search and click **Get Airport Details** (this was the API integration action we just created)

![](images/getairdetails.png)

1. Expand **Airport Record** on the left sidebar under the **2 - For Each** section

1. Drag and drop the **Code** data pill onto the **IATA Code** field

1. Click **Done**

![](images/addstep.gif)

1. Add a new **For Each** Flow Logic under **Get Airport Details**

1. Drag and drop the **Output** data pill onto **Items**

1. Click the **+** under the new **For Each Item in** step

![](images/foreachairport.png)

1. Click **Action**, then search and select **Update Record**

1. Drag and drop the **Airport Record** data pill under **2 - For Each** onto the **Record** field

1. Click **+ Add field value**

1. Search and select **Lat**, expand the **response_object** data pill under **4 - For Each**

1. Drag and drop the **lat** data pill on the empty field

1. Click **+ Add field value**

1. Search and select **Lon**, expand the **response_object** data pill under **4 - For Each**

1. Drag and drop the **lng** data pill on the empty field

1. Refer to the full animation below:

![](images/latlon.gif)

1. Click **Done**

1. Click **Activate** on the top right

1. Click **Test**

1. Click **Run Test**

1. This will take a few minutes to run as we have 24 airports to update. Once done, click **Your test has finished running. View the flow execution details.**

1. Review the execution, take some time to expand each step to understand what has happened in this flow

![](images/fullexecution.png)

1. Go back to App Engine Studio and preview the **Airport** table

![](images/previewair.png)

1. This will open in a new tab, verify that all the **Lat** and **Lon** fields are now populated

![](images/latlonfinal.png)

This flow should now run everyday to update the latitude and longitude of each airport in your table. In a real life scenario, you could do so much more with the API, but this is just an example to show you the possibilites. For example, you could integrate with a complex booking API like Amadeus, and your users could search for flights and book flights and hotels directly from your custom application!