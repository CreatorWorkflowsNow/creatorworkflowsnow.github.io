---
title: "Modify Telework Case Approval Flow" 
sidebar_label: "3. Modify Telework Case Approval Flow"
hide_table_of_contents: false
---
# Modify the Telework Case Approval Flow

Now that we have created the People Finder Spoke and our Auto Approval Decision Table, let's modify the Telework Case Approval Flow to allow auto-approval for those that were pre-certified or have requested 3 days or less for Situational Telework.

## Open the Telework Case Approval Flow and add our changes

1. Return to the App Home tab in App Engine Studio.  
![](./images/04-03-01-AppHome.png)


2. Open the Telework Case Approval flow by clicking on the row under Logic and Automation.  
![](./images/04-03-02-selectmainflow.png)


3. Toggle the Flow Designer view to Tree View.  
![](./images/04-03-03-toggleview.png)

4. First, we want to add a Flow Variable to store the status of auto approval.

   >1. Click the <span className="button-white-purple-border">...</span> button next to the Save button on the top-left of your screen.

   >2. Select "Flow Variables" from the drop-down.  
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

   >1. Select "Action" as the step type.

   >2. Search for "people finder".

   >3. Select the "GET /user" action.  
![](./images/04-03-08-addspokeaction.png)

9. Click the data pill picker for email.  
![](./images/04-03-09-dotwalkspoke.png)

10. Dot-walk to the email address of the person that opened the request.

   >1. Click "Trigger - Record Ceated"

   >2. Click the blue arrow next to the "Telework Case" record to drill down.

   >3. Click the blue arrow next to "Opened by".

   >4. Click on "Email" to set the value.  
![](./images/04-03-10-dotwalkspoke.png)

11. Click the <span className="button-purple">Done</span> button.  
![](./images/04-03-11-donespoke.png)

12. Next, we want to use the decision table we built. Hover in-between steps 2 and 3 and click the plus sign ⨁.  
![](./images/04-03-12-adddecision.png)

13. Add the Telework Auto Approval Decision Table.

   >1. Select "Flow Logic" as the step type.

   >2. Select "Make a decision" from the list.  
![](./images/04-03-13-adddecision.png)

14. Setup the decision step.

   | |Field Name                | Field Value
   |-|--------------------------| --------------
   |<span className="large-number">➊</span>|Decision Label |Check auto approve conditions
   |<span className="large-number">➋</span>|Decision Table |Telework Auto Approval
   |<span className="large-number">❸</span>|Execution | First decision that matches
   |<span className="large-number">❹</span>|Use Branches | Un-check
   |<span className="large-number">❺</span>|Telework Request | Drag and drop <span className="button-white-purple-border-black">Telework Case Record</span> data pill   
   |<span className="large-number">❻</span>|Click on the <span className="button-purple">Done</span> button.  
![](./images/04-03-14-setdecision.png)

15. Now, we have to check if either auto-approve condition has been met. Hover in-between steps 3 and 4 and click the plus sign ⨁.  
![](./images/04-03-17-checkautoapprovemet.png)

16. Add the if condition.

   >1. Select "Flow Logic" as the step type.

   >2. Select "If" from the list.  
![](./images/04-03-18-addifstep.png)

17. Setup the if condition.

   | |Field Name                | Field Value
   |-|--------------------------| --------------
   |<span className="large-number">➊</span>|Condition Label |If auto approve conditions are met
   |<span className="large-number">➋</span>|Condition 1 |Dot-walk (see step 18 below)
   |<span className="large-number">❸</span>|Operator | is
   |<span className="large-number">❹</span>|Value | Y
   |<span className="large-number">❺</span>|Click on the <span className="button-white-maroon-border">or</span> button.
   |<span className="large-number">❻</span>|Condition 2 | Dot-walk (see step 19 below)
   |<span className="large-number">❼</span>|Operator | is
   |<span className="large-number">❽</span>|Value |True
   |<span className="large-number">❾</span>|Click on the <span className="button-purple">Done</span> button.  
![](./images/04-03-19-setupifcond.png)

18. Dot-walk Condition 1 (step 2 above)

   >1. Click "2 - GET /User"

   >2. Click the blue arrow next to the "output" object to drill down.

   >3. Click on "telework-certified" to set the value.  
![](./images/04-03-20-dotwalkpeoplefinder.png)

19. Dot-walk Condition 2 (step 2 above)

   >1. Click "3 - Make A Decision"

   >2. Click the blue arrow next to the "Decision Table Multiple Result Record" record to drill down.

   >3. Click the blue arrow next to the "Result elements" glide_var to drill down.

   >4. Click on "Auto Approved" to set the value.  
![](./images/04-03-21-dotwalkautoapprove.png)

20. Let's set the Approved value to true.

   >1. Select "Flow Logic" as the step type.

   >2. Select "Set Flow Variables" from the list.  
![](./images/04-03-22-setflowvariables.png)

21.  To add a flow variable to set, click the plus sign ⨁.  
![](./images/04-03-23-setflowvariables.png)

22. Set the Approved flow variable to true.

   >1. Select "Approved | True/False" from the drop-down.

   >2. Check the data box for true.

   >3. Click the <span className="button-purple">Done</span> button.  
![](./images/04-03-24-setflowvariables.png)

23. Now let's add the flow logic for when our condition is not met. Hover above step 6 and click the plus sign ⨁.  
![](./images/04-03-25-addelse.png)

24. Add the else condition.

   >1. Select "Flow Logic" as the step type.

   >2. Select "Else" from the list.  
![](./images/04-03-26-addelse.png)

25. Move the ask for approval action.

   >1. Hover next to step 7 until you see and cross-shape and the text appears "Drag to reorder steps".

   >2. Drag step 7 onto the plus sign ⨁ under step 6.
![](./images/04-03-27-askforapproval.png)

26. Move the if condition for then manager approves.

   >1. Hover next to step 8 until you see and cross-shape and the text appears "Drag to reorder steps".

   >2. Drag step 8 onto the plus sign ⨁ under step 7.
![](./images/04-03-30-checkforapproval.png)

27. Now let's set the flow variable when the manager approves. Hover above step 9 and click the plus sign ⨁.
![](./images/04-03-32-setflowvariables.png)

28. Set the Approval flow variable to true.

   >1. Select "Flow Logic" as the action type.

   >2. Select "Set Flow Variables" from the list.  
![](./images/04-03-33-setflowvariables.png)

29. To add a flow variable to set, click the plus sign ⨁.  
![](./images/04-03-29-setflowvariables.png)

30. Set the Approved flow variable to true.

   >1. Drag and drop the <span className="button-white-purple-border-black">Approved</span> flow variable from the data pills on the right side of the screen into the Name field.

   >2. Check the data box for true.

   >3. Click the <span className="button-purple">Done</span> button.  
![](./images/04-03-34-setflowvariables.png)

31. Let's return to our mainline logic and add a new step.  
![](./images/04-03-31-addnewstep.png)

32. Add the if condition.

   >1. Select "Flow Logic" as the step type.

   >2. Select "If" from the list.  
![](./images/04-03-32-addifstep.png)

33. Setup the if condition.

   | |Field Name                | Field Value
   |-|--------------------------| --------------
   |<span className="large-number">➊</span>|Condition Label | If all approve conditions are met
   |<span className="large-number">➋</span>|Condition 1 | Drag and drop <span className="button-white-purple-border-black">Approved</span> data pill
   |<span className="large-number">❸</span>|Operator | is
   |<span className="large-number">❹</span>|Value | True
   |<span className="large-number">❺</span>|Click on the <span className="button-purple">Done</span> button.  
![](./images/04-03-33-setupifcond.png)

34. Delete the step placeholder under step 12.
![](./images/04-03-34-deletestep.png)

35. Move the Create Task step.

   >1. Hover next to step 10 until you see and cross-shape and the text appears "Drag to reorder steps".

   >2. Drag step 10 onto the plus sign ⨁ under the then condition in step 12.
![](./images/04-03-35-movecreatetask.png)

36. Move the Send Email step.

   >1. Hover next to the new step 10 until you see and cross-shape and the text appears "Drag to reorder steps".

   >2. Drag step 10 onto the plus sign ⨁ under the new step 12 (Create Task).
![](./images/04-03-36-moveemail.png)

39. Save the changes to the Main flow by clicking the <span className="button-purple">Save</span> button.  
![](./images/04-03-39-saveflow.png)

40. Activate the Main flow by clicking the <span className="button-white-purple-border-black">Activate</span> button.  
![](./images/04-03-40-activateflow.png)

## Bonus

Do you remeber hot to test your flow from the previous lab? Test your work using what you've learned!


