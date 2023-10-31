---
id: collaboration
title: 3. Collaboration Descriptors
sidebar_position: 3
tags:
- collaboration
---
# Exercise: Collaboration Descriptors

##### Estimated Time to Complete: 10 minutes

## Overview

People with admin privileges can manage the permissions of developers collaborating on an application.

You can use the predefined **<a href="https://docs.servicenow.com/csh?topicname=create-collaboration-descriptors.html&version=latest" target="_blank">Collaboration Descriptors ↗</a>** that are standard with activation, or create a custom collaboration descriptor. 

By using a collaboration descriptor, you can assign, manage, and monitor delegated development permissions.

We will use collaboration descriptors during the Simulation exercises. 

| **Descriptors** | **Description**
|--|--
| Owner	| Owner of the application that manages other collaborators and can delete the application.
| Editor | Standard descriptor to invite collaborators.
| Integration Specialist | Non-standard (custom) descriptor created by the user.

:::info
**Integration Specialist** is a custom **<a href="https://docs.servicenow.com/csh?topicname=create-collaboration-descriptors.html&version=latest" target="_blank">Collaboration Descriptor ↗</a>** created for this lab. 
:::

## Instructions

:::caution
For this exercise, the specific Application Scope is **critical** - Collaboration Descriptors go in Global.
:::

:::warning
Complete this section in **DEV**.
:::

1. Log in **DEV**.


2. Click **All** >> type **descriptor** >> click **Descriptors**.

![relative](/img/lab-aemc/2023-08-01-22-32-53.png)

3. Click **New**.

![relative](/img/lab-aemc/2023-08-01-22-33-57.png)

4. In the **Name** field, type 'Pro Developer', and click **Submit**

![relative](/img/lab-aemc/2023-08-01-22-35-31.png)

5. Click the **Pro Developer** record to open it.

![relative](/img/lab-aemc/2023-08-01-22-36-38.png)

6. Click **Edit**

![relative](/img/lab-aemc/2023-08-01-22-37-30.png)

7. Click **All Metadata**

![relative](/img/lab-aemc/2023-08-01-22-38-19.png)

8. Scroll to the bottom, hold SHIFT, and click **Workflow**

![relative](/img/lab-aemc/2023-08-01-22-39-00.png)

9. Click the **>** button to move the roles to the right side of the list collector and click **Save**

![relative](/img/lab-aemc/2023-08-01-22-39-54.png)

![relative](/img/lab-aemc/2023-08-01-22-40-25.png)

![relative](/img/lab-aemc/2023-08-01-22-41-50.png)

## Lessons Learned

Here are some important takeaways from this task:

**Role of Collaboration Descriptors**

Collaboration descriptors play a critical role in assigning, managing, and monitoring delegated development permissions for each application or uniformly across multiple applications. Therefore, creating appropriate descriptors is essential to ensure efficient delegation of permissions.


**Focus on Global Scope and Standard**

It is crucial to create collaboration descriptors in the global scope and set them to standard for them to be visible and usable in AES. Any deviation from this guideline may lead to non-visibility or non-usability of the collaboration descriptors in AES.


**Utility of Custom Collaboration Descriptors**

The process allows for the creation of custom collaboration descriptors that cater to specific needs beyond the predefined collaboration descriptors that come with activation. This flexibility allows for more precise permission delegation depending on the roles and requirements of users and groups.

