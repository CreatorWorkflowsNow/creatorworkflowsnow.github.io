---
id: create-data-model
title: Create Application Data Model
hide_table_of_contents: true
sidebar_label: Create Data Model
sidebar_position: 3
draft: true
---

In this exercise will start building out the tables needed to support out application. We'll import a spreadsheet to quickly populate the table with existing data. This is a very common way customers are building tables in App Engine Studio for processes that are currently being administered in Excel and email.

Data can also be imported from other third-party sources like a database or web service/API.

1. On the app homepage, click on **+Add** next to **Data**.

![](/img/lab-complaintsmgmt/2023-08-18-09-19-43.png)

2. Select **Import a spreadsheet** and then the **Continue** on the next screen
    
![](/img/lab-complaintsmgmt/2023-08-18-09-26-54.png)

3. Click **Drag and drop or browse to upload spreadsheet**. Find the file you downloaded at the beginning of the lab and upload it. Once complete, click **Continue**.

![](/img/lab-complaintsmgmt/2023-08-18-09-23-58.png)

4. Set the **Table** field to **Task** and select **Continue**


5. Set the **Table label** field to **Dept Task**\
    Select **Make extensible**\
    Select **Auto number**\
    Set the **Prefix** field to **DEPTTASK**


6. The next step is to setup permission for the Dept Task table. Assign full permissions to the admin role by selecting **All**. Select the **Create**, **Read** and **Write** permissions for the user role


7. Select **Done** once the table is created to return to **App Home**
    

Excellent! In our next exercise we'll create our Request tables and add some department specific fields.