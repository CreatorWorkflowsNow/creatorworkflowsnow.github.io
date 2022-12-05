---
layout: default
title: Exercise 3 Workflows
parent: Travel Request Lab
nav_order: 13
---
# Exercise 3: Creating an approval workflow

**Duration: 30 minutes**

We will be creating an approval workflow now. Let's describe what we will be designing in a sentence: *Whenever a new travel request is raised, we will route the request to the requestor's manager for approval. Once approved, we will mark the status of the request as complete*

1. Navigate back to the **App Home** tab

1. Click **Add** under **Logic and automation**

    ![relative](images/addworkflow.png)

1. Click **Flow**

    ![relative](images/clickflow.png)

1. Click **Build from scratch**

1. For **Name**, enter **Travel request approval**

1. For **Description**, enter **Route travel request approval to requestor's manager**

1. Expand **Show advanced options**

1. Change **Run as** to **System user**

    ![relative](images/flowname.png)

1. Click **Continue**

1. Click **Edit this flow**

1. Close the **Getting started** pop-up box

1. Click **Add a trigger**

1. Under **RECORD**, click **Created**

    ![relative](images/addtrigger.png)
    
1. Under **Table**, search and select **Travel request**

    ![relative](images/tableselect.png)

1. Click **Done**

1. Click **Add an Action, Flow Logic, or Subflow**

1. Click **Action**

1. Search and select **Ask for approval**

    ![relative](images/askforapproval.png)

1. In the **Ask for Approval** action box, drag and drop the **Travel request Record** from the Data pill picker on the right sidebar, into the **Record** box

    ![relative](images/dragrecord.png)

1. Under **Rules**, change **Approve** to **Approve or Reject**

1. Change **-Choose approval rule** to **Anyone approves or rejects**

    ![relative](images/afa.png)

    >We want the approval to be routed to the requestor's manager, so we will perform what is known as dot-walking to find the related user's manager.

1. From the right sidebar (Data pill picker), expand the **Travel request Record** by clicking the expand arrow

    ![relative](images/expanddatapill.png)

1. Look for the **Opened by** data pill, and expand it

    ![relative](images/openedby.png)

1. Under the **Opened by** section, look for the **Manager** data pill

    ![relative](images/dropmanager.png)

1. Click **Done**

1. Here is a full video walkthrough in case you had difficulties at any step

   ![relative](images/afastep.gif)

    >What we have achieved here is that we are looking for the user who opened the record's manager to be the approver for this record.

1. Click **Add an Action, Flow Logic, or Subflow**

1. Click **Flow Logic**

1. Click **If**

    ![relative](images/if.png)

1. Under **Condition**, enter **Manager approved**

1. Drag and drop the **Approval State** data pill from the right sidebar onto **Condition 1**

1. Change the choice to **Approved**

    ![relative](images/stateapproved.png)

1. Click **Done**

1. Click **Save** on the top right of the screen

1. Click on the **+** icon **next to then**

    ![relative](images/thenplus.png)

1. Click **Action**

1. Search and select **Update Record**

1. Drag and drop the **Travel request Record** onto the **Record** field

1. Under **Fields**, select the **State** field and change the choice to **Closed Complete**

    ![relative](images/closedcomplete.png)

1. Click **Done**

1. Click **Save** on the top right of the screen

    *(Optional)* Now we will complete the flow by creating the logic of a rejected approval. As a challenge, can you complete the rest of the flow yourself? The end result should look like this:

    ![relative](images/rejected1.png) 

    ![relative](images/rejected2.png)

1. Hint: You can always toggle the flow diagramming view by clicking on this icon

    ![relative](images/flowdiagram.png)

1. Click **Activate** on the top right of the screen

<br>

[Previous exercise][Exercise2]{: .btn .mr-4 }
[Next exercise][Exercise4]{: .btn .btn-purple }


[OldTravelRequestLabLink]: https://shaoservicenow.github.io/travelrequest
[TravelRequestLabLink]: https://creatorworkflowsnow.github.io/lab_travelrequest
[TravelRequestLabHome]: https://creatorworkflowsnow.github.io/lab_travelrequest

[Exercise1]: https://creatorworkflowsnow.github.io/docs/lab_travelrequest/Exercise%201.html
[Exercise2]: https://creatorworkflowsnow.github.io/docs/lab_travelrequest/Exercise%202.html
[Exercise3]: https://creatorworkflowsnow.github.io/docs/lab_travelrequest/Exercise%203.html
[Exercise4]: https://creatorworkflowsnow.github.io/docs/lab_travelrequest/Exercise%204.html
[Exercise5]: https://creatorworkflowsnow.github.io/docs/lab_travelrequest/Exercise%205%20(Bonus).html
[Exercise6]: https://creatorworkflowsnow.github.io/docs/lab_travelrequest/Exercise%206%20(Bonus).html
[Exercise7]: https://creatorworkflowsnow.github.io/docs/lab_travelrequest/Exercise%207%20(Bonus)%20Chatbot.html