---
id: exercise-2-3-dept-issue-table
title: Department Issue Table
hide_table_of_contents: true
---

# Department Issue Table

The Dept Issue table will be used to allow users to submit issues encountered in service delivery. Using a custom table for departmental issues rather than overutilizing a platform table allows for:

- Simplified routing, assignment and ACLs
- Better custom reporting capabilities
- Scoped application security
- App-specific views and workspaces

1. Setup the Dept Issue table using the same initial steps as the Dept Request table. Make sure to extend Dept Task

    Set the **Table label** field to Dept Issue Select **Auto number**\
    Set the **Prefix** field to **DEPTISSUE**

![Issue Table Image 1](images/iss_1.png)

2. Set the permissions the same way as the previous table

![Issue Table Image 2](images/base_8.png)

3. Select **Edit table** once the table has been created


4. Then select the **Forms** link to navigate to the form view for the Dept Issue Table

![](images/2023-03-29-14-03-42.png)

5. Remove the **Configuration item**, **Active** and **Parent** fields\
    Add the **Opened** and **Opened by** fields\

![Issue Table Image 4](images/iss_3.png)

6. To finish up, click **Save** in the top right

![](images/2023-03-29-14-01-01.png)



