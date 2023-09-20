---
id: exercise-2-2-dept-req-table
title: Department Request Table
hide_table_of_contents: true
---

# Department Request Table


The Dept Request table will be used to store the service requests that the Dept provides. We'll follow the same steps we did from our last exercise exception this time we'll extend from our Dept Task table.

1. Choose the **(+) Add** option to add the Dept Request table

![Request Table Image 1](images/req_1.png)

2. Select **Create a table** and then the **Begin** on the next screen
    
![Base Task Image 2](images/base_2.png)

![](images/2023-03-29-13-43-59.png)

3. Select the **Create from an existing table** option and then **Continue**

![](images/2023-03-29-13-46-29.png)

3. This time choose the Dept Task table to extend rather than the Task table. By extending the Dept Task table we can create reports
    Select **Continue**

![Request Table Image 2](images/req_2.png)

4. Set the **Table label** field to **Dept Request** 
    Select **Auto number**
    Set the **Prefix** field to **DEPTREQ**

![Request Table Image 3](images/req_3.png)

5. Set the same permissions for the admin and user roles as last time
    
![Request Table Image 4](images/base_8.png)

6. Select the **Edit Table** option once the Dept Request table is created

![Request Table Image 5](images/req_4.png)

7. Select the **+ Add new field** option to add a field to the Dept Request table

![Request Table Image 6](images/req_5.png)

8. Enter **Request Type** in the **Column label** cell

![Request Table Image 7](images/req_6.png)

9. Enter **Choice** in the **Type** cell and select **Choice** option

![Request Table Image 8](images/req_7.png)

10. Choose **Dropdown with –None--** for the **Choice Type**. For the **Choices**, you should enter different types of services that the department you chose might provide

![Request Table Image 9](images/req_8.png)

    For example, a badging department might use the choices:

    - New Badge Request
    - Replacement Badge Request
    - Add Building Access
    - Remove Building Access
    
    Select **Done** when finished adding your choices and save your work.

![Request Table Image 10](images/req_9.png)

11. Select the **Forms** link to edit the Dept Request form

![](images/2023-03-29-13-57-52.png)

12. The default form view contains fields from the Task table that will not be used in in this application. Hover over the **Configuration item** field in the form view. Select the **(X)** on the right of the field to remove it\

    Repeat for the **Active** checkbox\
    Repeat for the **Parent** field

![Request Table Image 12](images/req_11.png)

13. Enter **request type** in the **Search** field located towards the upper left of the screen to find the **Request Type** Choice field you added earlier

![Request Table Image 13](images/req_12.png)

14. Drag the **Request Type** field on the left to the form view underneath the **State** field

![Request Table Image 14](images/req_13.png)

15. Enter **opened** in the **Search** field located towards the upper left of the. The **Opened** and **Opened by** fields will automatically be populated when a user submits a request. These are helpful to track who is submitting a request and when it was submitted

![Request Table Image 15](images/req_14.png)

16. Enter **opened** in the **Search** field located towards the upper left of the. The **Opened** and **Opened by** fields will automatically be populated when a user submits a request. These are helpful to track who is submitting a request and when it was submitted

![Request Table Image 16](images/req_15.png)

17. To finish editing our form, click **Save** in the top right of the screen
    
![](images/2023-03-29-14-01-01.png)

We're all done with the request table.. now we move on to the issue table!


