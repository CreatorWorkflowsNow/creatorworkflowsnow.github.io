---
id: exercise-5-1-bonus-exercise-1
title: Add dynamic behaviors
---

# Add dynamic behavior to the Dept Requests Record Producer

Dynamic behaviors allow you to control whether fields on a form are

* mandatory
* visible
* read-only

based on how the user has responded to other fields on the form. This is an important feature that can help your users understand how to complete a form and provide the information the Dept needs to fulfill services, respond to inquires and remediate issues.

1. Select the **ellipses(...)** on the Dept Request table and then **Edit** when the dropdown appears.\

![Bonus Image 1](images/bonus_1.png)
    
2. Select the **Show non-extended table fields** checkbox in the upper right.\
    Select the **Choice** Type option on the Record Type field.\
    Enter **Other** as a new Choice and then select **Add**.\
    Select **Done**.

![Bonus Image 2](images/bonus_2.png)

3. Return to the **App Home** tab and select the **Experiences** tab.

![Bonus Image 3](images/bonus_3.png)

4. Select the **ellipsis(...)** for the Dept Requests Record Producer and the **Edit** option on the drop down.

![Bonus Image 4](images/bonus_4.png)

5. Select the **Questions** option on the left side. Hover over the right side of the **Request type** question and select the middle **Edit “Request ype”** option.

![Bonus Image 5](images/bonus_5.png)

6. Select the **Choices** tab. Scroll down to the bottom of the **Choices** list and add a new option **Other**. Select **Done** in the lower right.

![Bonus Image 6](images/bonus_6.png)

7. Hover over the right side of the **Request Details** question. Select the leftmost **Dynamic Behavior** button. Select **Define new Behavior**.

![Bonus Image 7](images/bonus_7.png)

8. Select the **Make the question mandatory** dropdown. Select the **Yes** choice. Select the **Conditions** tab.

![Bonus Image 8](images/bonus_8.png)

9. Set field to **request_type**.<br/>
Set **operator** to **is**.<br/>
Set **value** to **Other**.<br/>
Select **Add behavior** in the lower left.<br/>

![Bonus Image 9](images/bonus_9.png)

10. Select **Preview** in the upper right to view how the Dept Request will behave in the Employee Center Portal.

![Bonus Image 10](images/bonus_10.png)

11. Change the **Request Type** to **Other**<br/>
Notice how the **Request Details** question is marked as mandatory<br/>
Change the **Request Type** to another value<br/>
Notice how the **Request Details** question is no longer mandatory<br/>

![Bonus Image 11](images/bonus_11.png)

12. Exit the preview and select **Review and Submit** on the left


13. Select the **Submit** button on the upper right<br/>
The changes from this exercise are now available on the Employee Center
Portal