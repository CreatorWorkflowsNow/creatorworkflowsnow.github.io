---
id: configure-playbook
title: Configure Complaints Playbook using Process Automation Designer
hide_table_of_contents: true
sidebar_label: Configure Playbook in PAD
sidebar_position: 3
draft: true
---

1. First, end any impersonation you may have set in a previous lab.

![](/img/lab-complaintsmgmt/2023-08-03-13-20-58.png)

2. Change your **Application scope** by clicking on the globe icon in the top right of the screen and choosing **CSM Workspace** from the list
   
![](/img/lab-complaintsmgmt/2023-08-03-13-18-37.png)
   
3. Then in the Filter Navigator, enter **Customer Service** and choose **My Cases** under **Cases**

![](/img/lab-complaintsmgmt/2023-08-03-12-49-30.png)

4. Open case number **CS0009003** by clicking on the case number

![](/img/lab-complaintsmgmt/2023-08-03-12-51-16.png)

5. Click on the hamburger icon and choose **Configure** > **Form Design** from the list

![](/img/lab-complaintsmgmt/2023-08-03-12-44-27.png)
   
6. In **Form Designer**, change the view (second dropdown) to **Workspace**.
   
![](/img/lab-complaintsmgmt/2023-08-03-12-59-16.png)

7.  Find the **Requires Investigation** field using the filter on the **Fields** tab
    
![](/img/lab-complaintsmgmt/2023-08-03-12-53-48.png)
   
8. Drag and drop the field under **Needs attention** in the right column

![](/img/lab-complaintsmgmt/2023-08-03-12-52-24.png)

9.  Click **Save**

![](/img/lab-complaintsmgmt/2023-08-03-12-55-46.png)

10. To test the new configuration, open the CSM/FSM Configurable Workspace, open a case and see the new field

![](/img/lab-complaintsmgmt/2023-08-03-13-26-08.png)

![](/img/lab-complaintsmgmt/2023-08-03-13-26-57.png)

Excellent! Now that we have our form configured, we can move on to creating our Investigation app in App Engine Studio!