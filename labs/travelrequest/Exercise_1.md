---
id: exercise1
title: Exercise 1 Tables
sidebar_position: 1
sidebar_label: 1. Tables
hide_table_of_contents: false
---

# Exercise 1: Creating tables for our travel request application

**Duration: 20 minutes**

## Introduction

In the first section, we will create two tables. Our first table will be used to capture the Travel Requests coming in from employees, and our second table will be used to store all the major airports and cities that can be traveled to. We will assume that all Travel Requests will only be for air travel.

## Instructions

1. Click **All**, then search and click **App Engine Studio**
![](images/openaes.png)


2. Click **Create app** on the top right of the screen
![](images/createapp.png)


3. On the Create App page, name the app "Travel request", and for description, enter "Track travel requests from employees."
![](images/appname.png)


4. Click **Continue**


5. Leave the default roles - *admin* and *user*, and click **Continue**


6. Click **Go to app dashboard**

:::info
**What you've just done is create a scoped application. Scope uniquely identifies every application file, why is this important?**
- Scope protects an application, its files, and its data from conflicts with other applications.
- Scope determines which parts of an application are available for use by other applications in ServiceNow.
- Scope allows developers to configure which parts of their application can be acted on by other applications.
- Scope prevents work done in the main ServiceNow browser window (not in Studio) from becoming part of an application's files.
- Without Scope, it will be very difficult to govern new applications!
:::

## Create a Travel Request table

**We will now create a table to capture the travel requests.**

1. Under **Data**, click **Add**
![](images/addtable1.png)


2. On the *Add Data* page, click **Create a blank table**


3. Click **Continue**
![](images/existingtable.png)


4. On the next page, select **Create from an extensible table**


5. Click **Continue**
![](images/extensibletable.png)


6. On the next page, click **Table**, and select **Task** under *Recommended Tables*
![](images/selecttask.png)

:::info
The task table is one of the core tables provided on the platform. Any table that extends task can take advantage of task-specific functionality such as SLAs and Approvals. This speeds up the overall process and ease of building logic and functionality.
:::

7. Click **Continue**


8. For Table label, enter **Travel request**. Table name should be auto-populated.


9. Check **Auto number**


10. For Prefix, enter **TRV**
![](images/tabledetails.png)


11. Click **Continue**


12. Allow all access for *admin* and **Create** and **Read** access for *user*
![](images/tabacl.png)


13. Click **Continue**


14. Click **Edit table**


15. If presented with the **Welcome to Table builder** pop-up, read through the steps, then close it


16. You should now be on the *Table Builder* interface, in the *Spreadsheet* view

:::note
Instead of adding fields individually via table builder, we will add fields directly onto the form view instead. But note that there are several ways to add fields to a table.
:::

17. Click on the **Forms** pill
![](images/clickforms.png)


18. The current form layout is inherited from the **task** table, we will only keep the fields relevant to us


19. Remove the following fields from the form:
    - Priority
    - Assigned to
    - Configuration item
    - Parent
![](images/removefield.png)


20. The form should look like this
![](images/formstate1.png)


21. On the left panel, click **Add a field in the table**
![](images/addifled.png)


22. On the pop-up modal, enter **Departure date** under **Column label**, the **Column name** should be auto-populated


23. Change **Type** to **Date**
![](images/addfieldcon.png)


24. Click **Add**


25. Click **Add another one**


26. Enter **Return date** under **Column label**, the **Column name** should be auto-populated


27. Change **Type** to **Date**
![](images/returndate.png)


28. Click **Add**


29. Click **Add another one**


30. Repeat the steps above for the following 2 fields:

    |Column label | Type
    |-------------- | --------------
    |Number of days | Integer
    |Reason for travel | Choice


31. The panel on the left should show 4 new fields with a purple highlight


32. Drag and drop those 4 fields onto the form
![](images/dragdrop.png)


:::tip
You will need to ensure that you see a grey outline box with a plus icon before releasing the field
![](images/dragdrophelp.png)
:::

33. Search and add two more standard fields onto the form: **Opened by, Approval** (These come standard with the **Task** table)


34. Click **Save** on the top right of the form


35. Within you form, locate and click **Reason for travel**


36. The right-side panel will update for the configuration of this field. Expand **Choices**, then click **Edit (1)**
![](images/openchoices.png)


37. On the **Edit choices for Reason for travel** screen, click **+ Add a choice**


38. Under **Label**, enter Customer meeting, the **Value** field should auto-populate


39. Add another two Labels: **Internal meeting** and **Training**
![](images/addchoices.png)


40. On the bottom right, click **Apply**


41. Click **Number of days**


42. On the right-side panel, expand **Formula** and click **+Add**
![](images/addformula.png)


43. In the pop-up **Formula** box, you are able to enter Excel based formulas. Here, we would like to calculate the number of days traveled


44. Enter **TIME**, the it should automatically pickup the operator for **TIMEDIFF**, press Enter
![](images/timediff.png)


45. The inputs are shown in the formula example below, we need to provide two different date values


46. Within the brackets, first type *return**, then select your custom field **return_date**


47. Key in a **comma**
![](images/returndate1.png)


48. Finish off the formula by entering and selecting **departure_date**
![](images/depdate.png)


49. Click **Submit**


50. Click **Save**

    At this point, we could also capture the Origin and Destination via a String field so that the users can enter free text, but for more consistency, let's create an **Airports** table so that users can select these locations (like how you would select on any airline reservation website)

## Create an Airport table

1. Click the **App Home** tab to return to the main view
![](images/apphome.png)


2. Under **Data**, click **Add**
![](images/addairport.png)


3. Click **Import a spreadsheet**
![](images/uploadss.png)


4. Click **Continue**


5. Download this file: [airports.xlsx](https://github.com/shaoservicenow/travelrequest/raw/main/./downloads/airports.xlsx "download")


5. Upload the downloaded file to the upload box. You should see the following screen once the upload is successful


6. Ensure that **Enter a row number for the table header** is set to **1**


7. Check the **Import spreadsheet data** box
![](images/uploadcomplete.png)


8. Click **Continue**


9. On the following page, click **Create new table**
![](images/importnew.png)


10. Click **Continue**


11. You should land on the page that says: "Great! Here's the info we brought over from your spreadsheet"
![](images/mapexcel.png)


12. Scroll through the list to see all the fields that will be created. Notice that you can change the data **Type** if necessary, but we can leave everything as String fields for now


13. Click **Continue**


14. Under **Table label**, enter **Airport**. **Table name** will be automatically populate


15. Click **Continue**
![](images/airporttab.png)


16. In the roles page, check **All** for *admin*, and only **Read** for *user*
![](images/airportrole.png)


17. Click **Continue**


18. Click **Edit table**


19. You should see the imported data in the Table spreadsheet view
![](images/displayname.png)


:::info
In case you were wondering, the Lat and Lon fields are deliberately left empty. In the optional bonus exercise, we will use an API to get these values, but has no impact on our exercises.
:::

20. Click more next to the **Data** pill, and change the **Data views** to **Fields**
![](images/changeview.png)


21. Toggle **Display** to true for the **Name** field
![](images/toggledisplay.png)


22. Click **Save**


:::note
Great, you now have a table to store the list of Airports!
:::


## Completing the Travel request table

1. If the **Travel request** tab is still open, click to navigate to it
![](images/returntreq.png)


2. If not, return to **App Home** and open the **Travel request** table, ensure you are in the **Form** view


3. Click **+ Add a field in the table**, and add the following fields:


|Column label | Type
|-------------- | --------------
|Travel from | Reference (Airport)
|Travel to | Reference (Airport) 

![](images/tfromair.png)

4. Drag and drop your two newly created custom fields onto the form
![](images/addairportfield.png)


5. Click **Save**

:::info
For simplicity, we are not adding additional fields like Daily estimated expenses, etc. You can always choose to add those fields if you want to.
:::

Congratulations, you have completed Exercise 1 and now have a complete way to store the Travel requests from your employees.