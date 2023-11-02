---
id: environment
title: 2. Controller Environment
hide_table_of_contents: true
draft: false
---

# Exercise: Create Controller Environment

##### Estimated Time to Complete: 10 minutes

## Overview

Next up, you will add a "Controller" Environment record to your Dev instance.  

It will contain the details for Dev to access the Controller Environment which is the Prod instance.

Production is considered the "Controller" Environment as that is where App Engine Management Center is installed and orchestrates activities from. 


### Before Exercise
``` mermaid
graph LR
    Dev[Development Instance]
    class Dev devStyle
    classDef devStyle fill:#D5F7FF,stroke:#B0BAD3,stroke-width:2px,color:#333;
```


### After Exercise

``` mermaid
graph 
    subgraph Development[Development Instance]
        Prod("#quot; AEMC Controller #quot;
        Environment record
        (Prod)")
    end
    class Development devStyle
    class Prod envStyle
    classDef devStyle fill:#D5F7FF,stroke:#B0BAD3,stroke-width:2px,color:#333;
    classDef envStyle fill:#F3F3F3,stroke:#B0BAD3,stroke-width:2px,color:#333;
```


## Instructions

1. Log in **DEV**.


2. Click **All** >> type **environment** >> click **Environments** 

![relative](/img/lab-aemc/2023-07-05-09-45-11.png)

3. Click **New** in the top-right.

![relative](/img/lab-aemc/2023-06-30-15-19-10.png)

4. Complete the form using the information below. 

|Field | Value 
|:---|:---
|**Name** | AEMC Controller 
|**Instance Type**| Production 
|**Prod Instance URL** | ![](/img/lab-aemc/2023-08-10-13-17-01.png)
|**Instance credential** | Pipeline_Credentials 
|**Is Controller?** | **CHECK THE BOX**
|**Instance Id** | This will auto populate after clicking Validate.

5. Click **Validate**.

![relative](/img/lab-aemc/2023-07-11-16-01-35.png)

![relative](/img/lab-aemc/2023-07-05-13-56-23.png)

6. Click **Submit** to finish creating the **Prod** environment record.

![relative](/img/lab-aemc/2023-07-11-15-59-53.png)

## Lessons Learned

 **Importance of the Controller Environment**
 
 Setting up the Controller Environment is crucial for the operation of the App Engine Management Center. This exercise emphasizes the vital role of the Production instance, as it's where AEMC is installed and from where it orchestrates activities.
