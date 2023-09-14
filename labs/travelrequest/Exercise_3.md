---
id: exercise3
title: Exercise 3 Workflows
sidebar_position: 3
sidebar_label: 3. Workflows
hide_table_of_contents: true
draft: true
---

# Exercise 3: Creating an approval workflow

**Duration: 30 minutes**

Within this exercise, we will be creating an approval workflow. Let's describe what we will be designing in a sentence: *Whenever a new travel request is raised, we will route the request to the requestor's manager for approval. Once approved, we will mark the status of the request as complete*

1. Navigate back to the **App Home** tab

1. Click **Add** under **Logic and automation**

![](images/addworkflow.png)

1. Click **Flow**

![](images/clickflow.png)

1. Click **Build from scratch**

1. For **Name**, enter **Travel request approval**

1. For **Description**, enter **Route travel request approval to requestor's manager**

1. Expand **Show advanced options**

1. Change **Run as** to **System user**

![](images/flowname.png)

1. Click **Continue**

1. Click **Edit this flow**

1. Close the **Getting started** pop-up box

1. Click **Add a trigger**

1. Under **RECORD**, click **Created**

![](images/addtrigger.png)
    
1. Under **Table**, search and select **Travel request**

![](images/tableselect.png)

1. Click **Done**

1. Click **Add an Action, Flow Logic, or Subflow**

1. Click **Action**

1. Search and select **Ask for approval**

![](images/askforapproval.png)

1. In the **Ask for Approval** action box, drag and drop the **Travel request Record** from the Data pill picker on the right sidebar, into the **Record** box

![](images/dragrecord.png)

1. Under **Rules**, change **Approve** to **Approve or Reject**

1. Change **-Choose approval rule** to **Anyone approves or rejects**

![](images/afa.png)

    >We want the approval to be routed to the requestor's manager, so we will perform what is known as dot-walking to find the related user's manager.

1. From the right sidebar (Data pill picker), expand the **Travel request Record** by clicking the expand arrow

![](images/expanddatapill.png)

1. Look for the **Opened by** data pill, and expand it

![](images/openedby.png)

1. Under the **Opened by** section, look for the **Manager** data pill

![](images/dropmanager.png)

1. Click **Done**

1. Here is a full video walkthrough in case you had difficulties at any step

   ![](images/afastep.gif)

    >What we have achieved here is that we are looking for the user who opened the record's manager to be the approver for this record.

1. Click **Add an Action, Flow Logic, or Subflow**

1. Click **Flow Logic**

1. Click **If**

![](images/if.png)

1. Under **Condition**, enter **Manager approved**

1. Drag and drop the **Approval State** data pill from the right sidebar onto **Condition 1**

1. Change the choice to **Approved**

![](images/stateapproved.png)

1. Click **Done**

1. Click **Save** on the top right of the screen

1. Click on the **+** icon **next to then**

![](images/thenplus.png)

1. Click **Action**

1. Search and select **Update Record**

1. Drag and drop the **Travel request Record** onto the **Record** field

1. Under **Fields**, select the **State** field and change the choice to **Closed Complete**

![](images/closedcomplete.png)

1. Click **Done**

1. Click **Save** on the top right of the screen

    *(Optional)* Now we will complete the flow by creating the logic of a rejected approval. As a challenge, can you complete the rest of the flow yourself? The end result should look like this:

![](images/rejected1.png) 

![](images/rejected2.png)

1. Hint: You can always toggle the flow diagramming view by clicking on this icon

![](images/flowdiagram.png)

1. Click **Activate** on the top right of the screen