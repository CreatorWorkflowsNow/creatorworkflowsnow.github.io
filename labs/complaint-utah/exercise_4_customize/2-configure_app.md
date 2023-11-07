---
id: configure
title: Configure with no-code
hide_table_of_contents: true
sidebar_label: Configure with no-code
sidebar_position: 1
draft: false
---

# Create meaningful experiences for your application users

1. First, we need to pick the right user. Click the user profile picture and select **End impersonation** this will take us to admin view where Andy can make his changes.
![](../images/2023-09-21-11-32-23.png)


2. Now let’s go to the right scope to before we start updating the playbook. Go to the **Scope icon** at the top right corner and select **Case Playbook for Complaints**
![](../images/2023-11-07-08-16-14.png)


3.	Now let’s update the process. Go to **All** and type Process automation. Select **Process Automation Designer**.
![](../images/2023-09-21-11-32-59.png)


4.	Click on **Complaint Playbook** that has “Published” status.
![](../images/2023-09-21-11-33-48.png)
:::info
In real life you would use the one in **Draft** status to try and test changes before publishing
:::


5.	Observe the lanes and tasks that were previously presented in the complaint case. This is the out of the box process that we will edit to include the investigation. 
![](../images/2023-09-21-11-34-38.png)


6.	Click on the **three-dot icon** beside Research and select **Add lane after**.
![](../images/2023-09-21-11-35-37.png)


7.	Type **Investigation** under Label and click **Save**.
![](../images/2023-09-21-11-36-24.png)


8.	Under Investigation Lane, click on **Add activity**. Select **User Form**.
![](../images/2023-09-21-11-38-45.png)


9.	Click on the **Automation** tab
![](../images/2023-09-21-13-06-39.png)


10.	Click on the **data pill icon** beside Record. Then click on the arrow beside **Trigger Complaint Case**. Select **Complaint Case Record**
![](../images/2023-09-21-13-07-41.png)
:::info
This allows the process dynamically pull data from the current complaint record that the user is on
:::


11.	Type **padinvestigation** to the Form View field. Click **Save**
![](../images/2023-09-21-13-08-56.png)
:::info
Making this change allows the user to see the investigation required field at the right step of the overall process.
**padinvestigation** is a form view that we have in this instance. The form view may be named differently.
:::


12. Now we will update the complaint status to **Under Investigation** when the user sets the **Investigation Needed** checkbox to True
Click on **Add activity** under **Investigation** Lane. Then select **Automated Update Record**
![](../images/2023-09-21-13-11-40.png)
![](../images/2023-11-07-08-22-06.png)


13. Type **Set complaint status to Under Investigation** to the Label field
![](../images/2023-11-07-08-23-27.png)


14. Click on **Automation** and click on the data pill icon beside the **Record** field
![](../images/2023-11-07-08-24-17.png)


15. Click on the **little arrow** as shown on the screenshot
![](../images/2023-11-07-08-24-44.png)


16. Select **Complaint Case Record**
![](../images/2023-11-07-08-25-15.png)


17. Click on the **Fields** and search for **Stage** and select **Stage**
![](../images/2023-11-07-08-25-45.png)


18. Select **Under Investigation** on the box that appears under **Stage**
![](../images/2023-11-07-08-35-34.png)


19. Now we will add a **Run Condition** to this step so that it only updates the complaint status if the **Required Investigation** is checked. Click on **Details** tab.
![](../images/2023-11-07-08-27-03.png)


20. Click on **Add Condition**
![](../images/2023-11-07-08-27-38.png)


21. Click on the **first field** and click on the **little arrow** beside the **Complaint Case**
![](../images/2023-11-07-08-28-17.png)


22. Scroll down on the fields section and then select **Requires Investigation**
![](../images/2023-11-07-08-28-52.png)


23.	The system will auto populate the rest of the fields as shown below. Leave those as is and click on **Modify**
![](../images/2023-11-07-08-29-18.png)


24.	Click Save.
![](../images/2023-11-07-08-29-41.png)


25.	Finally click on **Activate**. This will activate the new process. It’ll be applied to new complaints created going forward.
![](../images/2023-11-07-08-30-09.png)


**Great job!** You updated the process so that the agents can now flag records for investigation and loop in the Legal Support team. Now let’s see this on action! To see the new complaint process, we will create a new complaint record.



