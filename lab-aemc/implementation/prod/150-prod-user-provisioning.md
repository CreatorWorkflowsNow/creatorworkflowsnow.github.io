---
id: user-provisioning
title: User Provisioning
---

#  Exercise: User Provisioning

##### Estimated Time to Complete: 5 minutes

:::info
**THIS SECTION IS OPTIONAL AND CAN SAFELY BE SKIPPED IF YOU ARE BEHIND.**

Skipping steps below will have not prevent you from completing the lab.
:::

## Overview

The system property **sn_app_intake.instance_can_provision_user** determines if the current instance can support the automated provisioning of users in the Development environment.

If you prefer to manually add users to groups in Dev, then you would set this property to **false**.

## Instructions

1. Click **All** >> type ```sys_properties.list``` >> press ENTER. 

```
sys_properties.list
```

![relative](/img/lab-aemc/2023-07-31-15-07-31.png)

2. Click the magnifying glass to the left of the **Name** column.

![relative](/img/lab-aemc/2023-07-31-15-15-54.png)

3. Type the name of the system property into the field under the **Name** column and press ENTER.


    sn_app_intake.instance_can_provision_users

![relative](/img/lab-aemc/2023-07-31-15-17-13.png)

4. Click the name of the system property to open it. It should already be set to **true** for you.

![relative](/img/lab-aemc/2023-07-31-15-18-29.png)

5. Click the word **here** to switch from Global to the application scope **Application Intake**.

![relative](/img/lab-aemc/2023-07-31-15-31-23.png)

6. Change the **Value** field from 'false' to 'true'.

:::caution
**REMEMBER:** This value was already set to 'true' for you as part of the automated lab setup. 
:::

![relative](/img/lab-aemc/2023-07-31-15-32-18.png)

7. Click the **Update** button to save your changes. 

![relative](/img/lab-aemc/2023-07-31-15-36-39.png)

## Lessons Learned

This exercise highlighted the importance of understanding and manipulating system properties within ServiceNow.

1. **System Properties:** The task illustrated the role of the system property **sn_app_intake.instance_can_provision_user** in managing automated user provisioning. 


2. **User Provisioning:** We understood how enabling or disabling automated user provisioning could impact the process of adding users to groups in the Development environment. Depending on the unique needs and preferences of an organization, the option to manually add users might be chosen over automation.
