---
id: pipeline
title: 3. Pipeline
hide_table_of_contents: true
draft: false
---

#  Exercise: Configure Pipeline in Prod

##### Estimated Time to Complete: 15 minutes

## Overview

**<a href="https://docs.servicenow.com/csh?topicname=config-pipeline.html&version=latest" target="_blank">Pipelines ↗</a>** establish the path an application takes from Development to Production.

This facilitates administrators' ability to efficiently transfer applications across different instances in the App Engine Management Center.

The process involves setting up and configuring your pipeline, specifying the **<a href="https://docs.servicenow.com/csh?topicname=config-pipeline-environments.html&version=latest" target="_blank">Environments ↗</a>** to include, and determining their position in the pipeline. 

The Pipeline is exclusive to the Controller Environment, which in this case is the Production instance. 

### Before Exercise

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

### After Exercise

``` mermaid
graph LR
    subgraph Prod1["Production Instance"]
        subgraph Pipeline
            Dev("#quot; Dev #quot;
            (Source)")
            Prod("#quot; Prod #quot;
            (Order: 100)")
        end
    end
    Dev --> Prod
    class Prod1 prodStyle
    class Dev,Prod envStyle
    class Pipeline pipeStyle
    classDef prodStyle fill:#CCFFCC,stroke:#B0BAD3,stroke-width:2px,color:#333,lineColor:#007bff;
    classDef envStyle fill:#F3F3F3,stroke:#B0BAD3,stroke-width:2px,color:#333,lineColor:#007bff;
    classDef pipeStyle fill:#FFFFDE,stroke:#B0BAD3,stroke-width:2px,color:#333,lineColor:#007bff;
    linkStyle default stroke: black;
```

### Example of a Dev->Test->Prod Pipeline

:::info
In this Lab, you will only configure Dev and Prod in the Pipeline.

Pipeline records are only configured in Prod. 
:::

``` mermaid
graph LR
    subgraph Prod1["Production Instance"]
        subgraph Pipeline
            Dev("#quot; Dev #quot;
            (Source)")
            Test("#quot; Test #quot;
            (Order: 100)")
            Prod("#quot; Prod #quot;
            (Order: 200)")
        end
    end
    Dev --> Test
    Test --> Prod
    class Prod1 prodStyle
    class Dev,Test,Prod envStyle
    class Pipeline pipeStyle
    classDef prodStyle fill:#CCFFCC,stroke:#B0BAD3,stroke-width:2px,color:#333,lineColor:#007bff;
    classDef envStyle fill:#F3F3F3,stroke:#B0BAD3,stroke-width:2px,color:#333,lineColor:#007bff;
    classDef pipeStyle fill:#FFFFDE,stroke:#B0BAD3,stroke-width:2px,color:#333,lineColor:#007bff;
    linkStyle default stroke: black;
```


## Instructions
:::info
Complete this exercise in the Global scope. 
:::

1. Click **All** >> type **pipelines** >> click **Pipelines**.
    ![Navigate to Pipelines](/img/lab-aemc/2023-06-30-15-31-49.png)


2. Initiate a new pipeline: Click **New** in the top-right corner.
    ![Create New Pipeline](/img/lab-aemc/2023-06-30-15-19-10.png)


3. Fill out the form as follows:

    |#|Field | Value                     
    |--|--|--
    |1|**Name** | Main Pipeline
    |2|**Pipeline Type** | Application Deployment
    |3|**Source Environment** | Dev                     
    |4|**Active** | **Checked**

    ![Pipeline Form](/img/lab-aemc/2023-07-31-14-55-26.png)


4. Submit the form.
    ![Submit](/img/lab-aemc/2023-07-11-15-49-01.png)


5. Open the newly created **Main Pipeline** record.
    ![Main Pipeline](/img/lab-aemc/2023-07-31-14-57-44.png)


6. Click **New** in the **Pipeline Environments Order** related list.
    ![New Order](/img/lab-aemc/2023-07-31-14-59-00.png)


7. Complete the new form as shown below and click **Submit** when done.

    |#| Field       | Value           
    |-|-|-
    |1| **Pipeline**    | Main Pipeline
    |2| **Environment** | Prod
    |3| **Order**       | 100

    ![Environment Order Form](/img/lab-aemc/2023-07-31-15-02-04.png)


8. Click Submit.

    * Your completed Pipeline record will look like this:

    ![relative](/img/lab-aemc/2023-07-31-15-05-01.png) 

:::warning
Make sure your Pipeline configuration matches the screenshot above.
 
DO NOT add Dev to the **Pipeline Environments Order** related list. 
 
It is the **Source Environment** and does not get added to the additional environments list. 
:::

## Lessons Learned

Through this exercise, we grasped the importance of correctly configuring the Pipeline in the Production instance.