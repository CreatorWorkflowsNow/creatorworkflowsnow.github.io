---
id: environments
title: 2. Environments
sidebar_position: 2
tags:
- environments
---

#  Exercise: Create Environments

##### Estimated Time to Complete: 10 minutes

## Overview 

**<a href="https://docs.servicenow.com/csh?topicname=config-pipeline-environments.html&version=latest" target="_blank">Environments ↗</a>** contain information about a ServiceNow instance and how to access it.

Next, you will create an Environment record for both "Production" and "Development" on the Controller instance where AEMC is installed

### Before Exercise
``` mermaid
graph LR
    Production[Production Instance]
    style Production fill:#CCFFCC,stroke:#B0BAD3,stroke-width:2px,color:#333;
```

### After Exercise
``` mermaid
graph TD
    subgraph Prod1["Production Instance"]
        Dev("#quot; Dev #quot;
        Environment record
        ‎")
        Prod("#quot; Prod #quot;
        Environment record
        (The Controller)")
    end
    class Prod1 prodStyle
    class Dev,Prod envStyle
    classDef prodStyle fill:#CCFFCC,stroke:#B0BAD3,stroke-width:2px,color:#333;
    classDef envStyle fill:#F3F3F3,stroke:#B0BAD3,stroke-width:2px,color:#333;
```

## Instructions

1. Log in to **Prod**.


2. Click **All** >> type **environment** >> click **Environments**

![relative](/img/lab-aemc/2023-06-30-15-17-33.png)

3. Click **New** in the top-right.

![relative](/img/lab-aemc/2023-06-30-15-19-10.png)

4. Complete the form as below.

|Field | Value 
|---|---
|**Name** | Dev
|**Instance Type** | Development 
|**Dev Instance URL** | ![](/img/lab-aemc/2023-08-10-12-53-04.png)
|**Instance credential** | Pipeline_Credentials 
|**Is Controller?** | **UNCHECKED**
|**Instance Id** | This will auto populate after clicking Validate. 

5. Click **Validate**

![relative](/img/lab-aemc/2023-07-11-15-38-49.png)

![relative](/img/lab-aemc/2023-07-11-15-14-18.png)

6. Click **Submit** to finish creating the environment record.

![relative](/img/lab-aemc/2023-07-11-15-37-58.png)

7. Click **New** in the top right.

![relative](/img/lab-aemc/2023-06-30-15-19-10.png)

8. Complete the form as below.

|Field | Value 
|---|---
|**Name** | Prod 
|**Instance Type** | Production 
|**Prod Instance URL** | ![](/img/lab-aemc/2023-08-10-13-17-01.png)
|**Instance credential** | Pipeline_Credentials 
|**Is Controller?** | **CHECK THE BOX**
|**Instance Id** | This will auto populate after clicking Validate. 

9. Click the "Validate" button. 

![relative](/img/lab-aemc/2023-07-11-15-38-49.png)

![relative](/img/lab-aemc/2023-07-11-15-14-18.png)

10. Click **Submit** to finish creating the environment record.

![relative](/img/lab-aemc/2023-07-11-15-37-58.png)

## Lessons Learned

In this exercise, you have:

- Understood the function and importance of Environment records in the ServiceNow platform.

- Acquired the knowledge of validating these Environment records.

- Successfully configured Environment records for both Development and Production instances in your Prod environment.