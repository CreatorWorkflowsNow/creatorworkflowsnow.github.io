---
id: exercise-5-2-bonus-exercise-2
title: Create a workflow
hide_table_of_contents: true
---

# Add Flow and Approval

Utilizing Record Producers on an Employee Center Portal allows consumers (employees) to connect with a departmnet and to access the services the department provides. Workspaces provide a Dept-specific view for service fulfillment for department users.

Now we will utilize Flow Designer to build a workflow to standardize the way that the department processes requests. We will configure the workflow to execute whenever a Dept Request is submitted. This workflow will request an approval from a Group of Users designated as Dept Request Approvers.


1. Exit App Engine Studio and return the platform.<br/>
Select **All**.<br/>
Type **sys_user_group.list** in the **Filter Navigator** textbox and press the Enter key.

![Bonus 2 Image 1](images/bonus2_1.png)

2. The **Groups** list view will load displaying the existing Groups.<br/>
Select the **New** option in the upper right.

![Bonus Image 2](images/bonus2_2.png)

3. Enter **Dept Request Approvers** in the **Name** field.<br/>
Right-click in the gray bar at the top of the form view and select **Save**.

![Bonus Image 3](images/bonus2_3.png)

4. Select the **Group Members** tab.
Select the **Edit** button to add members.

![Bonus Image 4](images/bonus2_4.png)

5. Search for Users on the left side of the slush bucket. Use the **[>]** button to select add the User to the group. Add:
- Andrew Och
- Beth Anglin
- Luke Wilson<br/>
Select **Save**

![Bonus Image 5](images/bonus2_5.png)

6. Repeat the steps to add a Role to the Group. This will grant access to the Dept Request Approvers members.<br/>
Select the **Roles** tab.<br/>
Add the user role for the Dept Services app. (Your role will have a slightly different prefix)

![Bonus Image 6](images/bonus2_6.png)

7. Return to the Dept Services app in App Engine Studio.<br/>
Select the **Logic and automation** tab.<br/>
Select the **(+) Add** option next to the **Logic and Automation** header.

![Bonus Image 7](images/bonus2_7.png)

8. Select **Flow** when the next screen appears.

![Bonus Image 8](images/bonus2_8.png)

9. Select **Build from scratch**, you will not be using a flow template in the Dept Services app.

![Bonus Image 9](images/bonus2_9.png)

10. Enter **Dept Request Created** in the **Name** field<br/>
Select **Show advanced options**<br/>
Change **Run** as to **System User**<br/>
Select **Continue**

![Bonus Image 10](images/bonus2_10.png)

11. Select **Edit this flow** once the flow is ready

![Bonus Image 11](images/bonus2_11.png)

12. Select **(+) Add a trigger**. Set the **Trigger** to **Created**

![Bonus Image 12](images/bonus2_12.png)

![Bonus Image 13](images/bonus2_13.png)

13. Set the **Table** to **Dept Request**.

![Bonus Image 14](images/bonus2_14.png)

14. Select **(+) Add an Action, Flow Logic, or Subflow.**<br/>
Search for **ask for**<br/>
Select **Ask For Approval** 

![Bonus Image 15](images/bonus2_15.png)

![Bonus Image 16](images/bonus2_16.png)

15. Drag the **Dept Request Record** Data Pill from the right **Data** pane to the **Record field**.<br/>
Set **Approve** to **Approve or Reject**<br/>
Set **Choose approval rule** to **Anyone approves or rejects**<br/>
Select the middle Group button to assign the approval to open the group selector popup<br/>
Type **dept** and select **Dept Request Approvers**, the group created in a previous step<br/>
Select **Done** to save your changes

![Bonus Image 17](images/bonus2_17.png)

16. Select the **(+)** directly below the Ask for Approval action<br/>
Select **Flow Logic**
Select If when the popup appears

![Bonus Image 18](images/bonus2_18.png)

19. Drag the **Approval State** Data Pill from the right **Data** pane and drop on **Drag and drop data pill in**
Accpet the default **is** value<br/>
Set the **Select a choice** to Approved<br/>
Select **Done**

![Bonus Image 19](images/bonus2_19.png)

20. Select the **(+)** option below the If action that we just added. Make sure to select the **(x)** that is indented. This will ensure that it the action only will only run if the Dept Request is approved<br/>
Select **Action** and search for **update record** in the popup<br/>
Select the **Update Record** action

![Bonus Image 20](images/bonus2_20.png)

21. Drag the Dept Request record from the right **Data** pane and drag to the **Record field**<br/>
Select **+** Add field value. Set the field to **State**<br/>
Set the value to **Work in Progress**

![Bonus Image 21](images/bonus2_21.png)

22. Select **Activate** in the upper right to set the flow as **Active**<br/>

![Bonus Image 22](images/bonus2_22.png)

Confirm by selecting Activate again when prompted<br/>

![Bonus Image 23](images/bonus2_23.png)

23. Return to the **App Home** tab<br/>
Select the **ellipsis(...)** for the Dept Request table<br/>
Select **Edit**

![Bonus Image 24](images/bonus2_24.png)

24. Select **Preview** in the upper right when the Dept Request tab opens

![Bonus Image 25](images/bonus2_25.png)

25. Select the **New** button in the upper right once the Preview opens

![Bonus Image 26](images/bonus2_26.png)

26. Select the **hamburger (three stacked lines)** button in the upper left<br/>
Select **Configure >**<br/>
Selected **Related Lists**

![Bonus Image 27](images/bonus2_27.png)

27. Select **Approvers**<br/>
Select **Group approval->Parent**<br/>
Select **Save**

![Bonus Image 28](images/bonus2_28.png)

28. Return to the platform tab<br/>
Search for and click **Employee Center**

![Bonus Image 29](images/bonus2_29.png)

29. Search for **Dept Requests**


30. Fill out the required fields and click **Submit**


31. Notice how the **State** is **Open** when the confirmation screen opens. Leave this tab open.

![Bonus Image 32](images/bonus2_32.png)

32. Return to App Engine Studio and select **PREVIEW** to open up the Workspace in the Experience section.

![Bonus Image 33](images/bonus2_33.png)

33. The Workspace will open in a new tab<br/>
Select the **List** button in the upper left<br/>
Select **Open** in the Dept Request section<br/>
Select the newest Dept Request. It will have the largest number.

![Bonus Image 34](images/bonus2_34.png)

34. Select the **Approvers (3**)** tab<br/>
Select **Requested** to open the first approval request

![Bonus Image 35](images/bonus2_35.png)

35. Set the **State** field to **Approved**<br/>
Select **Save** in the upper right

![Bonus Image 36](images/bonus2_36.png)

36. Return to the browser tab where the confirmation screen is displayed in Employee Center<br/>
Observe how the **State** has changed to **Work in Progress**.

![Bonus Image 37](images/bonus2_37.png)

