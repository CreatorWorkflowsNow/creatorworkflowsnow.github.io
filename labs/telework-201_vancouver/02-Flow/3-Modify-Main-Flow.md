---
title: "Modify Main Flow" 
sidebar_label: "3. Modify Main Flow"
hide_table_of_contents: false
---
# Modify the Telework Case Main Flow

Now that we have created the People Finder Spoke and our Auto Approval Decision Table, let's modify the Telework Case Main Flow to allow auto-approval for those that were pre-certified or have requested 3 days or less for Situational Telework.

## Open the Main Flow and add our changes

1. Return to the App Home tab in App Engine Studio.  
![](./images/04-03-01-AppHome.png)


2. Open the Main flow by clicking on the row under Logic and Automation.  
![](./images/04-03-02-selectmainflow.png)


3. Toggle the Flow Designer view to Process View.  
![](./images/04-03-03-toggleview.png)

4. First, we want to add a Flow Variable to store the status of auto approval.

   1. Click the <span className="button-white-purple-border">...</span> button next to the Save button on the top-left of your screen.

   2. Select "Flow Variables" from the drop-down.  
![](./images/04-03-04-flowvariables.png)

5. Click the plus sign ⨁ to add a variable.  
![](./images/04-03-05-addflowvariable.png)

6. Set up the flow variable.

   | |Field Name                | Field Value
   |-|--------------------------| --------------
   |<span className="large-number">➊</span>|Label |Approved
   |<span className="large-number">➋</span>|Name |approved
   |<span className="large-number">❸</span>|Type | True/False
   |<span className="large-number">❹</span>|Click on the 🆇 button to close.  
![](./images/04-03-06-populateflowvariable.png)

7. Before our first step, we want to call the People Finder Spoke. Hover above the "Ask for Approval" step and click the plus sign ⨁.  
![](./images/04-03-07-addspoke.png)

8. Add the People Finder Spoke

   1. Select "Action" as the step type.
   
   2. Search for "people finder".
   
   3. Select the "GET /user" action.  
![](./images/04-03-08-addspokeaction.png)

9. Click the data pill picker for email.  
![](./images/04-03-09-dotwalkspoke.png)

1. Dot-walk to the email address of the person that opened the request.

   1. Click "Trigger - Record Ceated"

   2. Click the blue arrow next to the "Telework Case" record to drill down.

   3. Click the blue arrow next to "Opened by".

   4. Click on "Email" to set the value.  
![](./images/04-03-10-dotwalkspoke.png)

11. Click the <span className="button-purple">Done</span> button.  
![](./images/04-03-11-donespoke.png)

12. Next, we want to use the decision table we built. Hover in-between steps 1 and 2 and click the plus sign ⨁.  
![](./images/04-03-12-adddecision.png)

1. Add the Telework Auto Approval Decision Table.

   1. Select "Flow Logic" as the step type.

   2. Select "Make a decision" from the list.  
![](./images/04-03-13-adddecision.png)

14. Setup the decision step.

   | |Field Name                | Field Value
   |-|--------------------------| --------------
   |<span className="large-number">➊</span>|Decision Label |Check auto approve conditions
   |<span className="large-number">➋</span>|Decision Table |Telework Auto Approval
   |<span className="large-number">❸</span>|Execution | First decision that matches
   |<span className="large-number">❹</span>|Use Branches | Un-check
   |<span className="large-number">❺</span>|Arrangement | Dot-walk (see step 15 below)
   |<span className="large-number">❻</span>|Number of Days | Dot-walk (see step 16 below)
   |<span className="large-number">❼</span>|Click on the <span className="button-purple">Done</span> button.  
![](./images/04-03-14-setdecision.png)

1. Dot-walk Arrangement (step 5 above)

   1. Click "Trigger - Record Ceated"

   2. Click the blue arrow next to the "Telework Case" record to drill down.

   3. Click on "Arrangement" to set the value.  
![](./images/04-03-15-dotwalkdecision.png)

1. Dot-walk Number of Days (step 6 above)

   1. Click "Trigger - Record Ceated"

   2. Click the blue arrow next to the "Telework Case" record to drill down.

   3. Click on "Days per week" to set the value.  
![](./images/04-03-16-dotwalkdecision.png)

17. Now, we have to check if either auto-approve condition has been met. Hover in-between steps 2 and 3 and click the plus sign ⨁.  
![](./images/04-03-17-checkautoapprovemet.png)

1. Add the if condition.

   1. Select "Flow Logic" as the step type.

   2. Select "If" from the list.  
![](./images/04-03-18-addifstep.png)

19. Setup the if condition.

   | |Field Name                | Field Value
   |-|--------------------------| --------------
   |<span className="large-number">➊</span>|Condition Label |If auto approve conditions are met
   |<span className="large-number">➋</span>|Condition 1 |Dot-walk (see step 20 below)
   |<span className="large-number">❸</span>|Operator | is
   |<span className="large-number">❹</span>|Value | Y
   |<span className="large-number">❺</span>|Click on the <span className="button-white-maroon-border">or</span> button.
   |<span className="large-number">❻</span>|Condition 2 | Dot-walk (see step 21 below)
   |<span className="large-number">❼</span>|Operator | is
   |<span className="large-number">❽</span>|Value |True
   |<span className="large-number">❾</span>|Click on the <span className="button-purple">Done</span> button.  
![](./images/04-03-19-setupifcond.png)

2. Dot-walk Condition 1 (step 2 above)

   1. Click "1 - GET /User"

   2. Click the blue arrow next to the "output" object to drill down.

   3. Click on "telework-certified" to set the value.  
![](./images/04-03-20-dotwalkpeoplefinder.png)

3. Dot-walk Condition 2 (step 2 above)

   1. Click "2 - Make A Decision"

   2. Click the blue arrow next to the "Decision Table Multiple Result Record" record to drill down.

   3. Click the blue arrow next to the "Result elements" glide_var to drill down.

   4. Click on "Auto Approved" to set the value.  
![](./images/04-03-21-dotwalkautoapprove.png)

2. Let's set the Approved value to true.

   1. Select "Flow Logic" as the step type.

   2. Select "Set Flow Variables" from the list.  
![](./images/04-03-22-setflowvariables.png)

23.  To add a flow variable to set, click the plus sign ⨁.  
![](./images/04-03-23-setflowvariables.png)

4. Set the Approved flow variable to true.

   1. Drag and drop the <span className="button-white-purple-border-black">Approved</span> flow variable from the data pills on the right side of the screen into the Name field.

   2. Check the data box for true.

   3. Click the <span className="button-purple">Done</span> button.  
![](./images/04-03-24-setflowvariables.png)

25. Now let's the flow logic for when our condition is not met. Hover above step 5 and click the plus sign ⨁.  
![](./images/04-03-25-addelse.png)

6. Add the else condition.

   1. Select "Flow Logic" as the step type.

   2. Select "Else" from the list.  
![](./images/04-03-26-addelse.png)

7. Add the ask for approval action.

   1. Select "Action" as the step type.

   2. Select "ServiceNow Core" > "Ask for Approval".  
![](./images/04-03-27-askforapproval.png)

8. Setup the approval step.

   1. Drag and drop the <span className="button-white-purple-border-black">Telework Case Record</span> from the data pills on the right-side of your screen.

   2. Set the Approval When field to "Anyone Approves.

   3. Dot-walk to the manager of the person that opened the telework request (see step 29 below).

   4. Click the <span className="button-purple">Done</span> button.  
![](./images/04-03-28-setupapproval.png)

9. Dot-walk to the manager (step 3 above).  

   1. Click "Trigger - Record Ceated".

   2. Click the blue arrow next to the "Telework Case" record to drill down.

   3. Click the blue arrow next to "Opened by".

   4. Click on "Manager" to set the value.  
![](./images/04-03-29-dotwalkapproval.png)

3. Add the if condition for then manager approves.

   1. Select "Flow Logic" as the step type.

   2. Select "If" from the list.  
![](./images/04-03-30-checkforapproval.png)

1. Setup the if condition to check for manager approval.

   1. Drag and drop <span className="button-white-purple-border-black">Approval State</span> from the data pills on the right-side of your screen.

   2. Set the value to "Approved".

   3. Click the <span className="button-purple">Done</span> button.  
![](./images/04-03-31-setupapprovalcheck.png)

2. Set the Approval flow variable to true.

   1. Select "Flow Logic" as the action type.

   2. Select "Set Flow Variables" from the list.  
![](./images/04-03-32-setflowvariables.png)

33. To add a flow variable to set, click the plus sign ⨁.  
![](./images/04-03-33-setflowvariables.png)

4. Set the Approved flow variable to true.

   1. Drag and drop the <span className="button-white-purple-border-black">Approved</span> flow variable from the data pills on the right side of the screen into the Name field.

   2. Check the data box for true.

   3. Click the <span className="button-purple">Done</span> button.  
![](./images/04-03-34-setflowvariables.png)

35. We no longer need our old Ask for Approval action, so go to line 9 and click the delete icon.  
![](./images/04-03-35-deleteoldapproval.png)

36. Confirm that we want to delete the action by clicking <span className="button-white-red-border">Delete</span>.  
![](./images/04-03-36-deleteoldapproval.png)

37. To modify the if condition to check for approval, click on line 9 to expand.  
![](./images/04-03-37-editifmgrapproves.png)

8. Modify the approval condition.

   1. Change the condition label to: if approval conditions met

   2. Clear Condition 1.

   3. Drag and drop the <span className="button-white-purple-border-black">Approved</span> flow variable from the data pills on the right side of the screen into the Condition 1 field.

   4. Set value to "True".

   5. Click the <span className="button-purple">Done</span> button.  
![](./images/04-03-38-editifmgrapproves.png)

39. Save the changes to the Main flow by clicking the <span className="button-purple">Save</span> button.  
![](./images/04-03-39-saveflow.png)

40. Activate the Main flow by clicking the <span className="button-white-purple-border">Activate</span> button.  
![](./images/04-03-40-activateflow.png)

## Bonus

Do you remeber hot to test your flow from the previous lab? Test your work using what you've learned!


