---
title: "Add a playbook" 
sidebar_label: "1. Add a playbook"
hide_table_of_contents: true
---
# Workspace – adding a playbook to the record page view

Amandas team is growing and her workspace that she uses to manage and report on telework cases is now used by more members of her direct reports. She has noticed some of them aren't always >aware of what to validate on the requests and Amanda would like a way for anyone who views the Telework Cases to be guided through what to look for and validate ensuring the process is followed >and all cases are treated equally.  

The solution for this is to implement a playbook into the workspace.  


Playbooks allow workspace users to interact with a business workflow in real time from within Workspace. Agents can use Playbook to update records, upload attachments, and complete tasks across multiple workflow activities.  
[Click Here for More Info](https://docs.servicenow.com/en-US/bundle/vancouver-build-workflows/page/administer/workspace/concept/playbook-ui.html)  


Example of a playbook in a workspace:
![](./Playbook%20Images/example%20of%20a%20playbook%20in%20a%20workspace.jpg)


## Steps to Adding a Playbook

1. Design your playbook in Process Automation Designer
2. Test and Publish your playbook
3. Add playbook to your workspace in workspace builder
4. If you want to change the order of where the tab appears, use UI Builder


## Let's get started

# Design your playbook in Process Automation Designer

>1. Go to 'All'
>2. Type in 'Process Automation Designer'
>3. Click on "Process Automation Designer' (this will open up a new tab in your browser)  


![](./Playbook%20Images/go%20to%20all%20and%20click%20on%20process%20automation%20designer.jpg)


You are now in the Process Automation Designer list view showing you all the processes that have been completed.

>1. Click on 'Create a new process'

![](./Playbook%20Images/PAD%20click%20on%20new%20process.jpg)

Give your process a label and description (note: your application name should be the name of your Telework Case Management application, might be different than the one in the screenshot)

>1. Label: Telework Case Playbook
>2. Description: used to ensure completeness of telework cases, triggered when case is created
>3. Click on "Select a trigger"

![](./Playbook%20Images/name%20your%20process%20and%20select%20trigger.jpg)

> **Tip** This is going to feel a lot like flow designer – in the background, flows are being triggered and used as we put together our process.

Select your trigger

>1. Choose the first option, "Define your own conditions for when your process runs"
>2. Choose "Record Create"
>3. Click on "Set your trigger conditions"

![](./Playbook%20Images/select%20a%20trigger%201.jpg)![](./Playbook%20Images/select%20a%20trigger%202.jpg)  

Finally, choose your table and conditions – we aren't going to have any conditions on types of records but that is an option.

>1. Table: Telework Case
>2. Click on "Go to Designer"

![](./Playbook%20Images/choose%20conditions%20for%20when%20it%20runs.jpg)

You should now be on this page:

![](./Playbook%20Images/PAD%20first%20page.jpg)

We're going to add 2 lanes:

>1. Lane 1: Completeness of Request
  -This will be used to walk the workspace user reviewing the form and ensuring there's everything needed to make a good decision
>2. Lane 2: Finalizing Request
  -This lane will be used to review that approvals are completed and IT has the task

## Go ahead and create the two lanes

>1. Click on: + Add Lane
  1. Label: Completeness of Request
  2. Description: review all information
  3. When to start: Immediately
  4. Click on 'Save'
>2. Click on: + Add Lane (next to the lane you just created)
  1. Label: Finalizing Request
  2. Description: ensure all approvals and tasks have been created and completed
  3. When to start: After previous
  4. Click on 'Save'

Your screen should now look like this:

![](./Playbook%20Images/Two%20Lanes%20created.jpg)

In the first lane, Completeness of Request, we are going to have 3 activities:

1. Check the opened\_by has a manager, the reason field is filled out and set the priority
2. See if the opened\_by has any telework cases already submitted
3. Give the workspace user the telework guidelines knowledge article if they want to attach it

Completeness of Request – Activity 1

>1. Click on +Add activity under Lane 1 ![](./Playbook%20Images/add%20activity.jpg)


##
## \*\*\*\*STOP HERE\*\*\*\* Explore the Activity Screen

- 'Search Activities'
- 'Create a new activity' – to learn more about this, [go here](https://docs.servicenow.com/bundle/vancouver-build-workflows/page/administer/process-automation-designer/task/create-activity-definition.html)

_(the boxes have been outlined with color to differentiate them. In your instance, there will not be color around each section)_

- Red box: These are your bundled activities; in flow designer these would be your 'spokes'
- Purple box: In each Bundled activity, are the activities you can assign to your process. These can include interactive and non-interactive activities.
- Green box: For each activity, this box outlines what necessary info is needed for the activity to work.
![](./Playbook%20Images/Add%20activity%20screen.jpg)

More Info, [Click Here](https://docs.servicenow.com/bundle/vancouver-build-workflows/page/administer/process-automation-designer/task/create-process-definition.html)
##

## \*\*Back to Lab\*\*

We'll be using the 'Common Activities' bundle. Feel free to see what is under 'Global' and 'Process Automation Content' for ideas on what else you can add to a playbook.

Choose

>1. Common Activities
>2. User Form

You should now be here:

![](./Playbook%20Images/1st%20activity%20add%20user%20form%20activity.jpg)

On the right hand side, is the activity properties. This is where we give the necessary info for the activity to work.

Fill out the form (Edit activity properties):

>1. Label: Review Form
>2. Description: Check the requestor has a manager, the reason field is filled out and the priority is set to correct level.

![](./Playbook%20Images/1st%20activity%20review%20form.jpg)

Click on 'Automation' tab (next to 'Details', no need to hit 'Save' yet, you will get an error)

This activity has some inputs it needs:

>1. Table: Telework Case
>2. Record: use the data pill picker to choose the trigger record, just like in flow designer.
>3. Form Fields: opened\_by,reason,priority (this is a string field, must type them in) All other fields do not get changed.
>4. Click on: 'Save'

![](./Playbook%20Images/1st%20Activity%20automation%20filled%20out.jpg)

Before we go any further, let's test this out so you can see how this all will look to the workspace user.

Click on 'Test' in upper right corner near activate: ![](./Playbook%20Images/Test%20button.jpg)

  1. Choose any Telework Case record – the pictures below will be using TEL0001002
  2. Click on: 'Run Test'

![](./Playbook%20Images/Run%20Test.jpg)

Choose the 'Playbook preview' – click on: View (it will open in a new browser tab)  
![](./Playbook%20Images/Run%20Test%20Choose%20View.jpg)


Give this screen a moment to load – when it's done, it should look like this:

![](./Playbook%20Images/Run%20Test%20Preview%20Screen.jpg)

In the bottom right corner is a 'cog' – you can open this up and try some of the extra settings. These can be configured in the experience tab for your playbook (not doing in this lab).

If everything looks good, you can close this browser tab then click on 'Done' and you should be back to your playbook designer here:

![](./Playbook%20Images/Telework%20Case%20Designer%20with%20one%20activity.jpg)

After the workspace user has reviewed the form, we would like them to see a list of any telework cases that have already been opened by the requestor. That will be our next activity – adding a list of telework cases opened by the requestor.

Underneath 'Review Form' activity, click on: +Add activity ![](./Playbook%20Images/add%20activity.jpg)

Choose:

>1. Process Automation Content
>2. Show list of records

![](./Playbook%20Images/2nd%20Activity%20pick%20activity.jpg)

In the 'Edit activity properties' on the right hand side, fill out the form:

>1. Label: Requestors Telework Cases
>2. Description: If the requestor has submitted any other telework case requests, they will be listed below.
>3. Click on 'Experience' tab

![](./Playbook%20Images/2nd%20Activity%20fill%20out%20details.jpg)


Fill out the 'Experience' tab

>1. List Title: Requestor Cases
>2. Table: Telework Case
>3. Columns: Number,state,created,opened\_by
>4. Click on 'Add Condition' next to 'List Query'
  >>We need to only pull the records that have been opened by the current requestor.  
  >>Opened\_by is opened\_by (use the data pill picker)

Step 4 'Add Condition' will look like this:

![](./Playbook%20Images/2nd%20Activity%20is%20opened%20by.jpg)

Before clicking on 'Save' your form will look like this:

![](./Playbook%20Images/2nd%20activity%20with%204%20steps.jpg)

Click 'Save' and now your process looks like this:

![](./Playbook%20Images/After%202nd%20Activity.jpg)

The last activity in this lane will be to show the workspace user the knowledge article on telework guidelines – many have asked to have this handy in case they need it at during the process or to attach for the requestor to review.

Click on +Add Activity under 'Requestors Telework Cases' ![](./Playbook%20Images/add%20activity.jpg)

>1. Common Activities
>2. Show Knowledge Article

![](./Playbook%20Images/3rd%20Activity%20Show%20KA.jpg)

Fill out the 'Edit activity properties'

>1. Label: Show Telework Guidelines KA
>2. Description: This will give the requestor the telework guidelines knowledge article so they can use it if needed in the process.
>3. When to start: Immediately (we want this to be available right away)
>4. Click on: Automation tab (next to details tab)

![](./Playbook%20Images/3rd%20activity%20fill%20out%20details.jpg)

Fill out the 'Automation' tab

>1. Title: Telework Guidelines
>2. Knowledge Article: KB0050185
>3. Click on: 'Save'

![](./Playbook%20Images/3rd%20activity%20final%20screen.jpg)


Super – your process should look like this now:

![](./Playbook%20Images/3%20Activities%20Process.jpg)

# Feel free to take a break and test out your process like we did earlier


### Now, let's add an activity to the 'Finalizing Request' lane and then we'll add the playbook to our workspace.

>Click on +Add activity in the Finalizing Request lane  ![](./Playbook%20Images/add%20activity.jpg)


Choose
>1. Common Activities
>2. Instruction

Fill out the 'Edit activity properties' form

>1. Label: Check for approval and IT Task
>2. Description: ensure approval was done and the IT Task was assigned to the right group.
>3. When to Start: Immediately
>4. Click on: 'Save'

That's it! If you look under the 'Automation' tab it automatically puts the description as your instruction. Your form should look like this:

![](./Playbook%20Images/4th%20activity%20form%20filled%20out.jpg)

Now, you're all set with version one of your Playbook! It's time to click on 'Activate'

![](./Playbook%20Images/Final%20and%20Activate.jpg)

What else would you add to the process?

Did you notice an activity for manager approval? Some great activities already in there, out of the box!
##

Now that we have published the playbook, we need to add it to our workspace in app engine studio.

>1. Open 'App Engine Studio'
>2. Open your 'Telework Case Management' application

You should now be here:  
![](./Playbook%20Images/App%20Engine%20Studio%20Telework%20Case.jpg)

Let's edit the 'Telework' workspace

![](./Playbook%20Images/Edit%20Telework%20Workspace%20click.jpg)

(if 'Get Started' pops up, go ahead and click on that)

You should now be in the workspace builder, your screen should look something like this (some of the reports may differ)

![](./Playbook%20Images/workspace%20builder.jpg)

At the top of the page:

>1. Click on 'Record pages'
>2. Change to 'Telework Case Record Page'

![](./Playbook%20Images/switch%20to%20record%20view%20on%20workspace.jpg)

Choose 'Record details' on the left navigation bar:

![](./Playbook%20Images/choose%20record%20details.jpg)

On the far right side, is the Record details configuration pane, choose + Add a playbook:

![](./Playbook%20Images/add%20a%20playbook.jpg)

Enter in these fields:

>1. Tab name: Telework Playbook
>2. Playbook experience: Global Playbook Experience
>3. Click on 'Add'  

![](./Playbook%20Images/Add%20a%20playbook%20fields.jpg)


##
So, what is a playbook experience?

After creating your process in the process automation designer, you can either use the out of the box experience "Global Playbook Experience" which is great if you used all out of the box activities and like the way it looks in the workspace.

The other option is you can create your own experiences and components which can give you even more flexibility for the user to work. You can even use UI Builder to create new components and further create the exact experience your workers need.

For more on using playbook experiences, there are a lot of resources – here are a couple:

- [Playbook Experiences – docs page](https://docs.servicenow.com/en-US/bundle/vancouver-platform-user-interface/page/administer/workspace/concept/set-up-playbook.html)
- [Platform Academy Session #21 Video](https://www.youtube.com/watch?v=mQKrlf3iyNg)
##


Now that you have added the playbook to the workspace, see how it's showing up as a tab on the record page at the very end. Let's move it to the very beginning. This is how it looks now – go ahead and click on the link in the upper right 'open in UI Builder' (and if there's a pop up, continue to UI Builder)

![](./Playbook%20Images/Telework%20playbook%20move%20to%20first.jpg)

Now that you're in UI Builder – it takes a minute to load. Soon, you will see the pages and sections on the left.

>1. On the left go to: (these should already be expanded)

>Body  
>>- Resizable panes
  >>>- Left
    >>>>- Click on "Main Tab"

![](./Playbook%20Images/Step%201%20UIB.jpg)

Now, on the right side  

>Drag the Telework Playbook tab so it's on top of the Details tab.  

![](./Playbook%20Images/UIB%202.jpg)  


It should look like this and then Click 'Save':

![](./Playbook%20Images/UIB%203.jpg)

### You're done! When the 'Save' button in the upper right is greyed out, you're good to close this tab and now we'll test in your workspace.

##
Go back to the platform view and under workspaces, find 'Telework':

![](./Playbook%20Images/find%20telework%20workspace%20for%20test.jpg)

The playbook runs when a new Telework case is created, so we'll need to do that in order to see our playbook in action.

Once the workspace opens:

>1. Choose the 'List' action on the far left
>2. Choose 'New'

![](./Playbook%20Images/Open%20new%20case%20step%201%20and%202.jpg)


Fill in the fields:

>1. Arrangement: Remote
>2. Reason: Dependent Care
>3. Click 'Save'

(if it doesn't show up right away, refresh browser – this might happen the first time you run it)

Here's your playbook 

Walk through it and check out the experience –  
What would you do differently?  
What else would be helpful?  

Congrats!  

![](./Playbook%20Images/Final%20Playbook%20in%20Workspace.jpg)
