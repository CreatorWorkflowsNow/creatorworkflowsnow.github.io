---
id: automation
title: Create Flow in Flow Designer
hide_table_of_contents: true
sidebar_label: Create Automation
sidebar_position: 3
draft: false
---

In this exercise, we'll tie our investigation process together with the Complaints Management module in CSM so we can wave bye-bye to those spreadsheets!

1. If you haven't done so already, close your workspace and go back to your App Engine Studio window. In the **Logis and Automation** section, click on **Add**
![](../images/2023-09-27-13-24-58.png)


2. There are several options for automation when building an app as a low code developer on the ServiceNow platform, but today we will be focusing on workflow. So on this screen, choose **Flow** from the options
![](../images/2023-09-27-13-26-19.png)


3. To help you get started quickly, we've provided a set of common flows we see our customers building. In addition to that, we've built these flows with pre-existing integrations to collboration tools like Teams. We, however, will be starting from scratch. Click on **Build from scratch**
![](../images/2023-09-27-13-29-39.png)


4. Set the following values for your new flow:

 |Field Name|Value|
 |---|---|
 |Name|Complaint Investigation Flow|
 |Description|Workflow that gets triggered when a new complaint is received and requires investigation.|
Click **Continue**
![](../images/2023-09-27-13-31-39.png)


5. On the **Success! Your flow is ready** screen, click **Edit this flow**
![](../images/2023-09-27-13-35-15.png)


6. This will open **Flow Designer** where we can define our trigger and our resultant actions in our workflow. Click **Add a trigger**
![](../images/2023-09-27-13-37-15.png)


7. Choose **Created or Updated** in the dropdown. 
![](../images/2023-09-27-13-39-10.png)


8. To complete the trigger confguration, set the following values and click **Done**:

 |Field Name|Value|
 |---|---|
 |Table|Complaint Case [sn_complaint_case]|
 |Condition|Requires Investigation is True|
![](../images/2023-09-27-13-42-24.png)


9. Now that we know when our flow is going to execute, let's tell it what we want it to do. Under **Actions** click the **+ Add an Action, Flow Logic, or Subflow** then click **Action**
![](../images/2023-09-27-13-44-58.png)


10. In the **Search Actions** field, type **Create Record** and choose the **Create Record** option listed in the right column
![](../images/2023-09-27-13-47-12.png)


11.  Set the Table field to our **Complaint Investigation** table we created in our first exercise in App Engine Studio. Then set the **Fields** as shown below then click **Done** when complete:
 :::note
 Values highlighted in bold below indicate we are dot walking to the fields we need in our workflow
 :::
 |Field Name|Value|
 |---|---|
 |Parent|**Trigger - Record Created or Updated - Complaint Case Record**|
 |Subject|Investigation required for **Trigger - Record Created or Updated - Complaint Case Record - Number**|
 |Description|**Trigger - Record Created or Updated - Complaint Case Record - Short Description**|
 |Contact|**Trigger - Record Created or Updated - Complaint Case Record - Contact**|
 |Assignment Group|Complaints Investigation|

 When you're finsihed, your action should look similar to this:
 ![](../images/2023-09-27-14-02-06.png)


 12. Next, we want to make sure we indicate in the complaint case record that we have automatically created this investigation. This will ensure that anyone who looks at the case later will know we've taken action. Let's add a new action by clicking the **+ Add an Action, Flow Logic, or Subflow** button under the action we just created then click **Action**
![](../images/2023-09-27-14-09-28.png)


13. This time we're looking for the **Add Comment To Task** action. In the Search field, type **Add comment** and select the option that appears under the **Customer Serivice** spoke
![](../images/2023-09-27-14-07-58.png)


14. Complete the action with the following values then click **Done**:
 :::note
 Values highlighted in bold below indicate we are dot walking to the fields we need in our workflow
 :::
 |Field Name|Value|
 |---|---|
 |Task [task]|**Trigger - Record Created or Updated - Complaint Case Record**|
 |Comment|Created investigation task: **1 - Create Record - Complaint Investigation Record - Number**
 When you're finsihed, your action should look similar to this:
 ![](../images/2023-09-27-14-12-01.png)


15. Time to test! Save your flow and click the **Test** button at the top of the screen. When prompted, choose the complaint case we created earlier in our lab
:::note
Your complaint number may vary from the one reflected in the lab guide.
:::
![](../images/2023-09-27-14-14-42.png)


16. To view your test results, click the link on the pop-up
![](../images/2023-09-27-14-18-12.png)


17. Here you will be able to view any errors or resultant records that are created as part of your workflow. If you received errors, go back and take a look at your flow to ensure everything has been completed correctly. If it was successful, you should see **Test Run - Completed** at the top of your screen
![](../images/2023-09-27-14-19-46.png)


18. Finally, let's see what this looks like for Devon in her new Workspace. Go back to **App Home** and Preview the Workspace again.
![](../images/2023-09-27-14-23-28.png)


19. Notice there is now an unassigned Investigation for Devon awaiting her on the workspace homepage. Click on the **1** under **Unassigned Investigations** to view the list of investigations that are unnassigned
![](../images/2023-09-27-14-26-05.png)


 20. Click on the record that appears in the list to view the newly created investigation record. Your screen should look very much like the screen below!
![](../images/2023-09-27-14-57-05.png)
