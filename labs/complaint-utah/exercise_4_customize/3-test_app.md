---
id: test
title: Test the Complaints Playbook
hide_table_of_contents: true
sidebar_label: Test the Playbook
sidebar_position: 2
draft: false
---

1.	On your browser, click on the tab that says **Home|ServiceNow**
![](../images/2023-09-21-13-23-07.png)


2.	Click on **Workspaces** and select **CSM/FSM Configurable Workspace**
![](../images/2023-09-21-13-23-39.png)


3.	Click on **+** icon and then select **New Complaint**
![](../images/2023-09-21-13-24-32.png)
:::info
This is one of the ways your agents can create new records when they need to intake an issue.
:::


4.	You’ll see this screen:
![](../images/2023-09-21-13-25-32.png)


5.	Fill in the details:

 |Field Label|Value
 |--|--|
 |Account|Boxeo
 |Contact|Julie Lewis
 |Complaint Type|Product
 |Product|ACME Corporation ACME DM
 |Short Description|Product Complaint
Click **Continue**
![](../images/2023-09-21-13-29-55.png)


6.	Click on **Assign to me**
![](../images/2023-09-21-13-30-22.png)


7.	Click on **Verify primary address** and then click on **Move to triage**
![](../images/2023-09-21-13-32-55.png)


8.	Once the screen is refreshed, click on **Submit for review**
![](../images/2023-09-21-13-33-20.png)


9.	Once the screen is refreshed, you’ll be in the Research stage of the process. Click on **Review Complete** on the next 4 tasks as shown below:
![](../images/2023-09-21-13-33-56.png)
![](../images/2023-09-21-13-34-05.png)
![](../images/2023-09-21-13-34-12.png)
![](../images/2023-09-21-13-34-25.png)


10.	Once the screen is refreshed, you’ll be in the Investigation stage of the process. This is the stage that you just created following the lab. On the form do the following:

 |Field Name|Value|
 |---|----|
 |Requires Investigation| checked
 |Work Notes| Upon the research results, this complaint requires investigation. Please see the previous steps notes for more details.
Click on **Mark Complete**
![](../images/2023-09-21-13-36-37.png)


11.	Now, let’s submit the task to the Legal Team. Populate the subject and description as following:

 |Field Name| Value|
 |---|---|
 |Subject|Please investigate
 |Description|See previous notes on the complaint case
Click **Save**
![](../images/2023-09-21-13-37-51.png)


12. Click on **Tasks** tab to observe the task that you just created
![](../images/2023-09-21-13-39-00.png)


**Congratulations!** You just experienced the investigation stage that you added to the out of the box complaint management process. Let’s stop here.  
Our next section of the lab will focus on creating the “Investigation App” that the Legal Support team will use to execute the investigation.























