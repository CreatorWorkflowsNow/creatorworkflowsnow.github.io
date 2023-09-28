---
id: data-model-old
title: Create Application Data Model
hide_table_of_contents: true
sidebar_label: Create Data Model
sidebar_position: 3
draft: false
---

In this exercise will start building out the tables needed to support out application. We'll import a spreadsheet to quickly populate the table with existing data. This is a very common way customers are building tables in App Engine Studio for processes that are currently being administered in Excel and email.

Data can also be imported from other third-party sources like a database or web service/API.

1. On the app homepage, click on **+Add** next to **Data**.
![](../images/2023-08-18-09-19-43.png)


2. Select **Import a spreadsheet** and then the **Continue** on the next screen
    ![](../images/2023-08-18-09-26-54.png)


3. Click **Drag and drop or browse to upload spreadsheet**. 
Download this file: [ComplaintsInvestigationImport.xlsx](https://github.com/CreatorWorkflowsNow/creatorworkflowsnow.github.io/raw/source/labs/complaint/downloads/ComplaintsInvestigationImport.xlsx) 
and upload the file to the instance.
![](../images/2023-08-18-09-23-58.png)


4. Check the **Import spreadsheet data** checkbox and click **Continue**
![](../images/2023-09-11-09-30-54.png)


5. On the next screen, keep the default option of **A new table** and choose **Create from an extensible table** then click **Continue**
![](../images/2023-09-11-09-47-16.png)


6. Search in the **Table** field for **Customer** and choose **Task** from the list. Click **Continue**
![](../images/2023-09-11-10-00-11.png)


7. Set the **Table label** field to **Complaint Investigation**
 
 Select **Auto number**
 
 Set the **Prefix** field to **CMPLINV**
![](../images/2023-09-11-10-01-48.png)
:::info
Setting the Prefix allows us to distinguish our tasks from records created that are also extended from the Customer Service Task table.
:::


8. The next step is to setup permission for the Dept Task table. Assign full permissions to the admin role by selecting **All**. Select the **Create**, **Read** and **Write** permissions for the user role. When finished, click **Continue**.
![](../images/2023-09-11-10-03-57.png)


9. Now, we wait for the platform to create our table. Select **Continue** once the table is created to move on to mapping our imported data to the appropriate fields.
    ![](../images/2023-09-11-10-05-52.png)


10. Once the screen loads, you can exit out of any guided tour popup that may appear initially. Looking at the right hand column, you'll notice the platform automatically mapped our fields for us! This is indicated by the wand icon next to the column name
![](../images/2023-09-11-11-58-37.png)


11. Scroll through the list to ensure all your fields are accounted for. You'll notice that **Group** is not associated with the **Assignment Group** field on our table. Drag and drop it from the left side to the right next to the **Assignment Group** field. 
![](../images/2023-09-11-12-02-09.png)


12. We also need to associate these existing complaint investigations with the cases they are related to. Scroll down until you see the **Parent** field on the right. Click the magic wand icon on the right of the field then the small arrow next to **Source** and choose the **Complaint Case** option from the menu.
![](../images/2023-09-11-12-43-01.png)
:::info
This is referred to as 'dot-walking'.    
:::


13. Click **Continue**
![](../images/2023-09-11-12-34-05.png)


14. Click **Done** once the table has been created to return to the App Home.
![](../images/2023-09-11-12-47-55.png)


15. Let's check our table to make sure the data is mapped correctly. You should see our newly created **Complaints Investigation** table listed under **Data**. Click on the **Preview** link
![](../images/2023-09-11-12-50-28.png)


16. Your screen should look similar to the one below
![](../images/2023-09-11-12-51-44.png)
Once you've finished reviewing the data, close the window to return to App Engine Studio


17. Next, let's focus on the data we want to be shown on the screens when viewing these investigation records. In **App Engine Studio**, click on the table and click on **Forms** at the top of the screen to open **Form Builder**
![](../images/2023-09-27-14-30-29.png)


18. Forms can have many views, but for our lab today, we will focus on the **Workspace** view only. Click on the button that says **Default view** and choose the **Workspace** view from the list
:::note
Your view name(s) may vary from what is reflect in the screenshot but you should only have single view starting with **Workspce**
:::
![](../images/2023-09-27-14-41-17.png)


19. To make this form more useful for us, remove the **Configuration Item** field by hovering over the field and clicking on the **X** that appears
![](../images/2023-09-27-14-32-49.png)


20. Now we'll add some fields that help us with our investigation process. On the **Add form elements** side bar, search for the **Assignment Group** field and drag/drop it on the form. Repeat the process for **Contact** and save your form once complete. Your form should look similar to below
![](../images/2023-09-27-14-36-08.png)


21. Let's also rename the **Parent** field so it is more meaningful for our process. Click on the **Parent** field and change the **Label** field in the right configuration section to say **Complaint Case** and click **Save**
:::info
This label change will only be reflected in our Complaint Investigation table and will not impact the rest of the platform.
:::
![](../images/2023-09-27-14-44-01.png)


Excellent! Now that we have our legacy data in the plaform, let's look to see how we create our own Workspace to start managing these investigations using ServiceNow!