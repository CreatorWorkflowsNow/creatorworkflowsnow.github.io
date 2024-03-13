---
title: "Add a playbook" 
sidebar_label: "1. Add a playbook"
hide_table_of_contents: false
---
# Adding a playbook to the workspace

Amandas team is growing and the workspace that she uses to manage and report on telework cases is now used by more of her direct reports. She has noticed some of the direct reports aren't always aware of what to validate on the requests and Amanda would like a way for anyone who views the Telework Cases to be guided through what to look for, ensure the process is followed and all cases are treated equally.  

The solution for this is to implement a playbook into the workspace.  


Playbooks allow workspace users to interact with a business workflow in real time from within Workspace. Agents can use Playbook to update records, upload attachments, and complete tasks across multiple workflow activities.  
[Click Here for More Info](https://docs.servicenow.com/en-US/bundle/vancouver-build-workflows/page/administer/workspace/concept/playbook-ui.html)  


Example of a playbook in a workspace:
![](./Playbook%20Images/example%20of%20a%20playbook%20in%20a%20workspace.jpg)


## Steps to Adding a Playbook

|   | 
    |-------------|---------------------------------|
    |<span className="large-number">➊</span>| Design your playbook in Process Automation Designer |
    |<span className="large-number">➋</span>| Test and Publish your playbook  |
    |<span className="large-number">➌</span>| Add playbook to your workspace in workspace builder  |
    |<span className="large-number">➍</span>| If you want to change the order of where the tab appears, use UI Builder |


## Let's get started

# Design your playbook in Process Automation Designer

1. 
  |   | 
    |-------------|---------------------------------|
    |<span className="large-number">➊</span>| Go to 'All' |
    |<span className="large-number">➋</span>| Type in 'Process Automation Designer' |
    |<span className="large-number">➌</span>| Click on 'Process Automation Designer' (this will open up in a new tab in your browser) |

  ![](./Playbook%20Images/go%20to%20all%20and%20click%20on%20process%20automation%20designer.jpg)


  You are now in the Process Automation Designer list view showing you all the processes that have been completed.

2. Click on 'Create a new process'

  ![](./Playbook%20Images/PAD%20click%20on%20new%20process.jpg)


3.  Give your process a label and description 
  (**note: your application name should be the name of your Telework Case Management application, might be different than the one in the screenshot**)  

    | **Steps**   | 
    |-------------|---------------------------------|
    | Label | Telework Case Playbook |
    | Description | used to ensure completeness of telework cases, triggered when case is created  |
    | Click | Select a Trigger  |  

  ![](./Playbook%20Images/name%20your%20process%20and%20select%20trigger.jpg)

:::info
This is going to feel a lot like flow designer – in the background, flows are being triggered and used as we put together our process.
:::  


4.  Select a trigger  

    | Steps | 
    |-------------|---------------------------------|
    |<span className="large-number">➊</span>| Choose the first option, "Define your own conditions for when your process runs" |
    |<span className="large-number">➋</span>| Choose "Record Create" |
    |<span className="large-number">➌</span>| Click on 'Set your trigger condition' |


  ![](./Playbook%20Images/select%20a%20trigger%201.jpg)![](./Playbook%20Images/select%20a%20trigger%202.jpg)  


5. Finally, choose your table and conditions – we aren't going to have any conditions on types of records but that is an option.  

    | **Steps**   | 
    |-------------|---------------------------------|
    | Table | Telework Case |
    | Click | "Go to Designer"  |  
    
    ![](./Playbook%20Images/choose%20conditions%20for%20when%20it%20runs.jpg)  
    
    Switch to 'Board View'

  ![](./Playbook%20Images/switch%20to%20board%20view.png)  


You should now be on this page:

![](./Playbook%20Images/Telework%20Case%20STAGE%201.png)  


## Next we will add 2 stages

1. Adding the First Stage

    | Steps | 
    |-------------|---------------------------------|
    | Click | <span className="button-purple">+ Add Stage</span>  |
    | Label | Completeness of Request |
    | Description | ensure all the information is provided |
    | When to start | When process starts |
    | Click | 'Save and close' |


2. Adding the Second Stage

    | Steps | 
    |-------------|---------------------------------|
    | Click | <span className="button-purple">+ Add Stage</span> (next to the stage you created)  |
    | Label | Finalizing Request |
    | Description | ensure all approvals and tasks have been created and completed |
    | When to start | After specific stages |
    | Click | 'Save and close' |

Your screen should now look like this:

![](./Playbook%20Images/Telework%20Case%20Stage%202.png)  

## In Column 1, Completeness of Request, we are going to add 3 activities  

 | Completeness of Request | 
    |-------------|---------------------------------|
    | Activity &nbsp;<span className="large-number">➊</span>| Check the opened\_by has a manager, the reason field is filled out and set the priority |
    | Activity &nbsp;<span className="large-number">➋</span>| See if the opened\_by has any telework cases already submitted |
    | Activity &nbsp;<span className="large-number">➌</span>| Give the workspace user the telework guidelines knowledge article if they want to attach it |

<br/>
**Completeness of Request – Activity <span className="large-number">➊</span>**
<br/>
<br/>

1.  
    |  | 
    |-------------|---------------------------------|
    | Click | <span className="button-purple">+ Add Activity</span>  |


## \*\*Take A Break\*\* Explore the Activity Screen

- 'Search Activities'
- 'Create a new activity' – to learn more about this, [go here](https://docs.servicenow.com/bundle/vancouver-build-workflows/page/administer/process-automation-designer/task/create-activity-definition.html)

_(the boxes have been outlined with color to differentiate them. In your instance, there will not be color around each section)_

- Red box: These are your bundled activities; in flow designer these would be your 'spokes'
- Purple box: In each Bundled activity, are the activities you can assign to your process. These can include interactive and non-interactive activities.
- Green box: For each activity, this box outlines what necessary info is needed for the activity to work.
![](./Playbook%20Images/Add%20activity%20screen.jpg)

More Info, [Click Here](https://docs.servicenow.com/bundle/vancouver-build-workflows/page/administer/process-automation-designer/task/create-process-definition.html)

## \*\*Back to Lab and Adding Activity 1\*\*

Note: We'll be using the 'Common Activities' bundle. Feel free to see what is under 'Global' and 'Process Automation Content' for ideas on what else you can add to a playbook.

2.  
    | Choose | 
    |-------------|---------------------------------|
    | <span className="large-number">➊</span>| Common Activities |
    | <span className="large-number">➋</span>| User Form |

  You should now be here:

  ![](./Playbook%20Images/Telework%20Stage%202-5.jpg)  

<br/>
On the right hand side, is the activity properties. This is where we give the necessary info for the activity to work.
<br/>
<br/>

3. Fill out the form (Edit activity properties):

  | Choose | 
    |-------------|---------------------------------|
    | Label | Review Form |
    | Description | Check the requestor has a manager, the reason field is filled out and the priority is set to correct level. |
    | Click | 'Automation' TAB (DO NOT click on 'Save and Close') |

  ![](./Playbook%20Images/Telework%20Case%20Stage%203.png)  

<br/>
<br/>


4. This activity has some inputs it needs

    | Choose | 
    |-------------|---------------------------------|
    | Table | Telework Case |
    | Record | use the data pill picker to choose the trigger record, just like in flow designer |
    | Form Fields | **must type in string field:** opened\_by,justification,priority |
    | Click | <span className="button-purple">Save and close</span> |

  ![](./Playbook%20Images/Telework%20Case%20Stage%204.jpg)  

Before we go any further, let's test this out so you can see how this all will look to the workspace user.

Click on 'Test' in upper right corner near activate: <span className="button-purple">Test</span>

1. 
    | TEST | 
    |-------------|---------------------------------|
    | <span className="large-number">➊</span> | Choose Telework Case record – the pictures below will be using TEL0001002 |
    | <span className="large-number">➋</span> | Click <span className="button-purple">Run Test</span> |

  ![](./Playbook%20Images/Run%20Test.jpg)

2. Choose the 'Playbook preview' – click on: View (it will open in a new browser tab)  
  ![](./Playbook%20Images/Run%20Test%20Choose%20View.jpg)

  Give this screen a moment to load – when it's done, it should look like this:

  ![](./Playbook%20Images/Telework%20Case%20Stage%207.jpg)  

3. Try adding something for 'Justification' then 'Update' then 'Mark Complete'  

4. In the bottom right corner is a 'cog' – you can open this up and try some of the extra settings. These can be configured in the experience tab for your playbook (not doing in this lab).

5. If everything looks good, you can close this browser tab then click <span className="button-purple">Done</span> and you should be back to your playbook designer here:

  ![](./Playbook%20Images/Telework%20Case%20Stage%206.jpg)  


<br/>
**Completeness of Request – Activity <span className="large-number">➋</span>**
<br/>
<br/>

After the workspace user has reviewed the form, we would like them to see a list of any telework cases that have already been opened by the requestor. That will be our next activity – adding a list of telework cases opened by the requestor.

1.  
    | Underneath 'Review Form'  | 
    |-------------|---------------------------------|
    | Click | <span className="button-purple">+ Add Activity</span>  |

2.  
    | Choose | 
    |-------------|---------------------------------|
    | <span className="large-number">➊</span> | Process Automation Content |
    | <span className="large-number">➋</span> | Show list of records |

  ![](./Playbook%20Images/2nd%20Activity%20pick%20activity.jpg)

3. In the 'Edit activity properties' on the right hand side

  |   | 
    |-------------|---------------------------------|
    | Label | Requestors Telework Case |
    | Description | If the requestor has submitted any other telework case requests, they will be listed below |
    | Click | <span className="button-purple">UI Layout</span> |

  ![](./Playbook%20Images/Telework%20Case%20Stage%209.jpg)  

4. Fill out the 'UI Layout' tab  

  |   |   
    |-------------|---------------------------------|
    | List Title | Requestors Case |
    | Table | Telework Case |
    | Columns | Number,state,created,opened\_by |
    | Click  | 'Add Condition' next to 'List Query' |

  Condition: opened\_by  is  opened\_by            
  <br/>
  'Add Condition' will look like this (then click <span className="button-purple">Modify</span> ):
  
  ![](./Playbook%20Images/2nd%20Activity%20is%20opened%20by.jpg)
  
  **Before** clicking on 'Save and close' your form will look like this:
  
  ![](./Playbook%20Images/Telework%20Case%20Stage%208.jpg)  

5.  
  |  | 
    |-------------|---------------------------------|
    | Click | <span className="button-purple">Save and Close</span> |

  ![](./Playbook%20Images/Telework%20Case%20Stage%2010.jpg)  


<br/>
**Completeness of Request – Activity <span className="large-number">➌</span>**
<br/>
<br/>

The last activity in this lane will be to show the workspace user the knowledge article on telework guidelines – many have asked to have this handy in case they need it at during the process or to attach for the requestor to review.

1.  
    | Underneath 'Requestors Telework Cases'  | 
    |-------------|---------------------------------|
    | Click | <span className="button-purple">+ Add Activity</span>  |

2.  
    | Choose | 
    |-------------|---------------------------------|
    | <span className="large-number">➊</span> | Common Activities |
    | <span className="large-number">➋</span> | Show Knowledge Article |

  ![](./Playbook%20Images/3rd%20Activity%20Show%20KA.jpg)

3. In the 'Edit activity properties' on the right hand side

  |   | 
    |-------------|---------------------------------|
    | <span className="large-number">➊</span>  Label | Show Telework Guidelines KA |
    | <span className="large-number">➋</span>  Description | This will give the requestor the telework guidelines knowledge article so they can use it if needed in the process |
    | <span className="large-number">➌</span>  Start rule | When stage starts (we want this to be available right away) |
    | <span className="large-number">➍</span>  Click | Automation Tab (next to details tab) |

  ![](./Playbook%20Images/Telework%20Case%20Stage%2011.jpg)  

4. Fill out the 'Automation' tab

  |   | 
    |-------------|---------------------------------|
    | <span className="large-number">➊</span> Title | Telework Guidelines |
    | <span className="large-number">➋</span> Knowledge Article | KB0050185 |
    | <span className="large-number">➌</span> Click | <span className="button-purple">Save and Close</span> |

  ![](./Playbook%20Images/Telework%20Case%20Stage%2012.jpg)  


Super – your process should look like this now:

![](./Playbook%20Images/Telework%20Case%20Stage%2013.jpg)

##
**If you have an error regarding an 'end connection' for step 2**  
- Go to 'Diagram View'  
- Connect Activity 1.2 to Stage 2  
- It should look like this:  

![](./Playbook%20Images/Telework%20Case%20Stage%2014.jpg)  
- then go back to Board view  

## Feel free to take a break and test out your process like we did earlier

<br/>
<br/>

For the second column, 'Finalizing Request' stage, we will be adding just one activity.

1. Under the 'Finalizing Request' column  

    |  | 
    |-------------|---------------------------------|
    | Click | <span className="button-purple">+ Add Activity</span>  |

2.  
    | Choose | 
    |-------------|---------------------------------|
    | <span className="large-number">➊</span> | Common Activities |
    | <span className="large-number">➋</span> | Instructions |

3. In the 'Edit activity properties' on the right hand side  

    |   | 
    |-------------|---------------------------------|
    | <span className="large-number">➊</span> Label | Check for approval and IT Task |
    | <span className="large-number">➋</span> Description | ensure approval was done and the IT Task was assigned to the right group |
    | <span className="large-number">➌</span> Start rule | When stage starts |
    | <span className="large-number">➍</span> Click | <span className="button-purple">Save and Close</span> |

That's it! If you look under the 'Automation' tab it automatically puts the description as your instruction. Your form should look like this:

![](./Playbook%20Images/Telework%20Case%20Stage%2015.jpg)  

Now, you're all set with version one of your Playbook! It's time to click on <span className="button-purple">Activate</span>

![](./Playbook%20Images/Telework%20Case%20Stage%2016.jpg)  

- What else would you add to the process?

- Did you notice an activity for manager approval? Some great activities are already in there, out of the box!
##

<br/>

Now that we have published the playbook, we need to add the playbook to our workspace in app engine studio.
<br/>

1.    
    |  | 
    |-------------|---------------------------------|
    | <span className="large-number">➊</span> | Open 'App Engine Studio' |
    | <span className="large-number">➋</span> | Open your 'Telework Case Management' application |  

  You should now be here:  
  ![](./Playbook%20Images/App%20Engine%20Studio%20Telework%20Case.jpg)

2. Edit the 'Telework' workspace

  ![](./Playbook%20Images/Telework%20Case%20Stage%2017.jpg)  

  (if 'Get Started' pops up, go ahead and click on that)


You should now be in the workspace builder, your screen should look something like this (some of the reports may differ)

![](./Playbook%20Images/workspace%20builder.jpg)

2.  At the top of the page:  

    |  | 
    |-------------|---------------------------------|
    | Click | 'Record pages' |
    | Choose | 'Telework Case Record Page' |

  ![](./Playbook%20Images/switch%20to%20record%20view%20on%20workspace.jpg)

3.  On the left hand side, choose 'Record details' on the left navigation bar

  ![](./Playbook%20Images/choose%20record%20details.jpg)

4.  On the far right side, is the Record details configuration pane   

    |  | 
    |-------------|---------------------------------|
    | Click on | + Add playbook |

  ![](./Playbook%20Images/add%20a%20playbook.jpg)

5. Enter in these fields:  

    |  | 
    |-------------|---------------------------------|
    | <span className="large-number">➊</span> Tab name | Telework Playbook |
    | <span className="large-number">➋</span> Playbook experience | Global Playbook Experience |
    | <span className="large-number">➌</span> Click | <span className="button-purple">Add</span> |

  ![](./Playbook%20Images/Add%20a%20playbook%20fields.jpg)


##
So, what is a playbook experience?

After creating your process in the process automation designer, you can either use the out of the box experience "Global Playbook Experience" which is great if you used all out of the box activities and like the way it looks in the workspace.

The other option is you can create your own experiences and components which can give you even more flexibility for the user to work. You can even use UI Builder to create new components and further create the exact experience your workers need.

For more on using playbook experiences, there are a lot of resources – here are a couple:

- [Playbook Experiences – docs page](https://docs.servicenow.com/en-US/bundle/vancouver-platform-user-interface/page/administer/workspace/concept/set-up-playbook.html)
- [Platform Academy Session #21 Video](https://www.youtube.com/watch?v=mQKrlf3iyNg)
##


Now that you have added the playbook to the workspace, take note of how it's showing up as a tab on the record page at the very end, the last tab.   
Let's move it to the very beginning. This is how it looks now – go ahead and click on the link in the upper right 'open in UI Builder' (and if there's a pop up, continue to UI Builder)

![](./Playbook%20Images/Telework%20playbook%20move%20to%20first.jpg)

Now that you're in UI Builder – it takes a minute to load. Soon, you will see the pages and sections on the left.

1. On the left go to: (these should already be expanded)  

>Body  
>>- Resizable panes
  >>>- Left
    >>>>- Click on "Main Tab"

  ![](./Playbook%20Images/Step%201%20UIB.jpg)

2. On the right side pane of UI Builder  
  Drag the Telework Playbook tab so it's on top of the Details tab.  

  ![](./Playbook%20Images/UIB%202.jpg)  

  It should look like this and then Click <span className="button-purple">Save</span>:

  ![](./Playbook%20Images/UIB%203.jpg)

### You're done! When the 'Save' button in the upper right is greyed out, you're good to close this tab and now we'll test in your workspace.

##

Go back to the platform view and under workspaces, find 'Telework':

![](./Playbook%20Images/find%20telework%20workspace%20for%20test.jpg)

The playbook runs when a new Telework case is created, so we'll need to do that in order to see our playbook in action.

1. When the workspace opens:  

  |  | 
    |-------------|---------------------------------|
    | <span className="large-number">➊</span> | Choose 'List' Menu on far left |
    | <span className="large-number">➋</span> | Choose 'New' | 

  ![](./Playbook%20Images/Open%20new%20case%20step%201%20and%202.jpg)


2. Fill in the fields:  

  |  | 
    |-------------|---------------------------------|
    | Arrangement | Remote |
    | Justification | Dependent Care |
    | Click | <span className="button-purple">Save</span> |

  (if it doesn't show up right away, refresh browser – this might happen the first time you run it)

Here's your playbook 

- Walk through it and check out the experience –  
- What would you do differently?  
- What else would be helpful?  

Congrats!  

![](./Playbook%20Images/Final%20Playbook%20in%20Workspace.jpg)
