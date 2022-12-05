---
layout: default
title: Exercise 2 User Forms
nav_order: 3
parent: Travel Request Lab Introduction
---

# Exercise 2: Creating a form on the Portal

**Duration: 30 minutes**

For this exercise, we will focus on exposing your newly created table on one of the employee portals so that your employees can easily access and create a travel request for themselves.

1. Click the **App Home** tab to return to the main view

1. Click **Add** under **Experience**

    ![relative](images/addexp.png)

1. On the following screen, click **Record Producer**

    ![relative](images/selectrp.png) 

1. Click **Get started**

1. On the **ADD EXPERIENCE** screen, enter *Raise a travel request* under **Name**, and *Capture employee travel requests* for description

    ![relative](images/namerp.png)
    
1. Click **Continue**

1. Click **Edit record producer**

1. Under **Description**, enter the following text: "Use this form to raise a travel request for all international flights. Approval will be routed to your manager."

1. (Optional) Add an image if you wish (You can use anything you find online)

    ![relative](images/basicinforp.png)

1. On the left sidebar, click **Destination**

1. We will define where this form will route requests to. Search and select **Travel request**. This is the table we first created.

    ![relative](images/destination.png)

1. On the left sidebar, click **Location**. We will define which portal this form will be located in. A form can belong to multiple portals on ServiceNow

1. On the main area, click **Browse**

    ![relative](images/browse.png)

1. On the next screen, look for **Service Catalog** under the **Available** section and move it to the right (Your list might appear different from the screenshot below)

1. Ensure that **Service Catalog** now appears in the **Selected** section

1. On the bottom right, click **Save selections**

1. Click **Browse** under **Categories**

1. This time, do the same as before, and select **Can We Help You?** from the **Available** list

    ![relative](images/selectservicecat.gif)

1. On the left sidebar, select **Questions**

1. Click on the dropdown arrow next to **Insert new question**, and click **Single column container**

    ![relative](images/scc.png)

1. In the pop-up box, enter **Information** under **Title**

1. Click **Submit**

1. Repeat the top 3 steps again, but this time select **Two column container** and enter **Dates and locations**

    ![relative](images/addsections.gif)

1. Your screen should look like this
   
    ![relative](images/questionscolumn.png)

1. Expand the **Information** section, click the **Insert** icon, and select **New question**

    ![relative](images/newquesiton.png)

1. In the next form, fill it out as below

    Name | Selection
    -------------- | --------------
    Question type | Choice
    Question subtype | Dropdown (fixed values)
    Map to a specific field on the table | **Checked**
    Tabel field | Reason for travel
    Question label | What is the reason for travel?
    Mandatory | **Checked**

    ![relative](images/reasonfortravel1.gif)

1. Click **Choices**

1. Check **Include none choice**

1. Under **Available Choices**, add the 3 reasons you added during table creation: Internal meeting, Customer meeting, Training

    >The **Value** column is automatically populated, leave it as it is.

1. On the bottom right, click **Insert Question**

    ![relative](images/insertreason.gif)

1. Expand the **Dates and locations** section

1. On the left column, add a **New question**

    ![relative](images/datequestion.png)

1. Fill out the form as follows

    Name | Selection
    -------------- | --------------
    Question type | Date / Time
    Question subtype | Date
    Map to a specific field on the table | **Checked**
    Tabel field | Departure date
    Question label | When are you leaving?

1. Click **Insert Question** at the bottom right

1. Repeat the steps above again for **Return date**

    Name | Selection
    -------------- | --------------
    Question type | Date / Time
    Question subtype | Date
    Map to a specific field on the table | **Checked**
    Tabel field | Return date
    Question label | When do you return?

1. Now we will capture the locations by looking at the **Airport** table we created

1. Under the same **Dates and locations** section, add a new question

    Name | Selection
    -------------- | --------------
    Question type | Choice
    Question subtype | Record reference
    Map to a specific field on the table | **Checked**
    Tabel field | Travel from
    Question label | Where are you departing from?
    Mandatory | **Checked**

1. Click the **Additional details** tab

1. Under **Source table**, search and select **Airport** (This is the table you imported from the spreadsheet)

    ![relative](images/selectairport.png)

1. On the bottom right, click **Insert Question**

1. In the main screen, follow the steps above once more for **Travel to**

    Name | Selection
    -------------- | --------------
    Question type | Choice
    Question subtype | Record reference
    Map to a specific field on the table | **Checked**
    Tabel field | Travel to
    Question label | Where are you traveling to?
    Mandatory | **Checked**

1. Remember to choose **Airport** for the **Source table** under the **Additional details** tab

1. Your form should now look like this

    ![relative](images/clickpreview.png)

1. Preview how your form will look like by clicking on the **Preview** button on the top right
    
    ![relative](images/previewform.png)

1. Try filling in the form with any details, but you won't be able to submit the form as it is in preview mode only

1. Click **Now Mobile** on the left sidebar

    ![relative](images/nowmobile.png)

1. The experience also automatically gets added to the mobile catalog, so your users can request for travel on the go

1. Close the preview by clicking the cross icon on the top right

1. On the left sidebar, click **Review and submit**

1. Click the **Submit** button

We will test this form on the *Employee Center Portal* at the end of this session. Now it's time for us to create an approval workflow for this travel request!

<br>

[Previous exercise][Exercise1]{: .btn .mr-4 }
[Next exercise][Exercise3]{: .btn .btn-purple }


[OldTravelRequestLabLink]: https://shaoservicenow.github.io/travelrequest
[TravelRequestLabHome]: https://creatorworkflowsnow.github.io/travelrequest

[Exercise1]: https://creatorworkflowsnow.github.io/travelrequest/Exercise%201.html
[Exercise2]: https://creatorworkflowsnow.github.io/travelrequest/Exercise%202.html
[Exercise3]: https://creatorworkflowsnow.github.io/travelrequest/Exercise%203.html
[Exercise4]: https://creatorworkflowsnow.github.io/travelrequest/Exercise%204.html
[Exercise5]: https://creatorworkflowsnow.github.io/travelrequest/Exercise%205%20(Bonus).html
[Exercise6]: https://creatorworkflowsnow.github.io/travelrequest/Exercise%206%20(Bonus).html
[Exercise7]: https://creatorworkflowsnow.github.io/travelrequest/Exercise%207%20(Bonus)%20Chatbot.html