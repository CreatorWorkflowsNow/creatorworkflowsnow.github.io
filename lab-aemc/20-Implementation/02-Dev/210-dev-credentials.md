---
title: Credentials
---

# Exercise: Create Credential Alias

##### Estimated Time to Complete: 10 minutes

## Overview 

A **<a href="https://docs.servicenow.com/csh?topicname=create-pipeline-credentials.html&version=latest" target="_blank">Credential Alias ↗</a>** is a username and password used by ServiceNow to log into a remote system. 

In this case, it will be used by App Engine Studio to access the Controller Instance.

You will create the Credential Alias with a user account that has already been created for you. 

### Before Exercise
``` mermaid
graph LR
    subgraph Dev[Development Instance]
    end
    style Dev fill:#D5F7FF,stroke:#B0BAD3,stroke-width:2px,color:#333
```

### After Exercise
``` mermaid
graph LR
    subgraph Dev[Development Instance]
       Credential("Credential Alias")
    end
    style Dev fill:#D5F7FF,stroke:#B0BAD3,stroke-width:2px,color:#333
    style Credential fill:#ECECFF,stroke:#B0BAD3,stroke-width:2px,color:#333;
```

## Instructions

:::caution
For this exercise, the specific Application Scope is not critical - Global is acceptable. Always check with your Platform Administrator for any company policies around **<a href="https://docs.servicenow.com/csh?topicname=connection-alias.html&version=latest" target="_blank">Connection and Credential Aliases ↗</a>**.
:::

:::warning
Complete this section in **DEV**.
:::

1. Log in to **DEV**.


2. Navigate to **All** >> type **Connection & Credential Aliases** >> click either **Connection & Credential Aliases**.

![Navigate to Aliases](/img/lab-aemc/2023-07-13-17-06-17.png)

3. Click **New** in the top-right to create a new Credential Alias record. 

![Create Alias](/img/lab-aemc/2023-03-07-15-38-10.png)

4. Set the **Type** to **Credential**. 

![Set Type](/img/lab-aemc/2023-03-07-15-37-39.png) 

5. Set the **Name** to 'Pipeline Credentials' and click **Submit**.

```
Pipeline Credentials
```

![Set Name](/img/lab-aemc/2023-03-08-14-14-44.png)

![Submit Name](/img/lab-aemc/2023-07-13-17-00-48.png)

6. Click **Pipeline Credentials** to open the record. 

![Open Record](/img/lab-aemc/2023-03-09-13-48-09.png) 

7. Navigate to the **Credentials** Related List and click **New** to add a credential. 

![Add Credential](/img/lab-aemc/2023-03-09-13-49-03.png)

8. Select **Basic Auth Credentials**.

![Select Basic Auth](/img/lab-aemc/2023-03-09-13-50-33.png)

:::caution
You will now input credentials for AES to log into the Controller instance.
 
The password for this remote user account is pre-configured. 
 
Errors will occur if you do not use the specified password provided below.
:::

9. On the **Basic Auth Credentials** form, fill in the following values and click **Submit**.

:::info
Remember to use the copy button to copy the text below.
:::

```jsx title="Name"
Pipeline Service Account 
```

```jsx title="Username"
svc_pipeline
```

```jsx title="Password"
ILoveHyperAutomationTimes500!
```

![Enter Credentials](/img/lab-aemc/2023-06-27-22-50-59.png)

:::note
The dots in the password field will be shorter after you save the password.  This is normal
:::

## Lessons Learned

In completing this exercise, you have successfully achieved the following milestones:

- Gained experience in creating and managing Connection & Credential Aliases in ServiceNow.

- Familiarized yourself with Basic Authentication Credentials setup.