---
title: "1. Securely Expand" 
sidebar_label: "1. Securely Expand"
hide_table_of_contents: true
---
# Overview

Amanda has successfully rolled out her application to her team, and it's caught the attention of another team who also wishes to use it. A primary condition is to maintain the privacy of records across the two teams.

In this exercise, we will compartamentalize telework cases for the users in the Development department and for the users in the Customer support team.  

We'll configure this by defining:

>1. One fulfiller role for each team: Fulfiller_Development and Fulfiller_Customer_Support 


>2. Then we'll define specific access controls for each.


>3. In the end, one team will have visibility only over requests from users in the Development department while the other team will have access only to requests from the users in the Customer support department. 

This will ensure both teams can use the app while maintaining the necessary separation and privacy of data.

Let's get started. 

Citizen developers like Amanda need special privileges to configure access controls so Amanda is going to request...


## Help from App Engine Admins

1.	Logged in as Admin


2. Elevate to Security Admin

    | Steps                                                 | 
    |---------------------------------------|------------------------|
    |<span className="large-number">➊</span>| In the top right, click the **Avatar**  |
    |<span className="large-number">➋</span>| Select **Elevate role**    |
    |<span className="large-number">➌</span>| Check [✔] security_admin   |
    |<span className="large-number">➍</span>| Click <span className="button-purple">Update</span>.   |

    ![](./images/segment_01_Elevate_Security_Admin.png)


3. Go to **App Engine Studio > Security**

    | **Steps**                                                 | 
    |---------------------------------------|------------------------|
    |<span className="large-number">➊</span>| In AES, click **More**  |
    |<span className="large-number">➋</span>| Click **Security**    |
    |<span className="large-number">➌</span>| Click **Add**   |

    ![](./images/segment_02_AES_Go_to_Security.png)

:::info
When Amanda created the app it was only for one team and having only one user role was enough.
Now that we need to open the application to another team we need to have more specific roles to ensure proper security.
:::


4. Create role **Fulfiller_Development**

    | **Steps**                                                 | 
    |---------------------------------------|------------------------|
    |<span className="large-number">➊</span>| Click **build a new role**  |
    |<span className="large-number">➋</span>| Click <span className="button-purple">Continue</span>.   |

    ![](./images/segment_03_AES_Create_Role_01.png)



5. Give the role a name and description.

    | **Steps**                                             | 
    |-------------|-----------------------------------------|
    | Name        | Fulfiller_Development                   |
    | Description | Fulfiller in the Development department |

    ![](./images/segment_03_AES_Create_Role_02.png)


6. Give the role the desired permissions

    ![](./images/segment_03_AES_Create_Role_03_Permission.png)

7. **Success**

    Click <span className="button-purple">Done</span>.

    ![](./images/segment_03_AES_Create_Role_04_Success.png)


7. Repeat the steps 4 to 7 to create the role ** Fulfiller_Customer_Support **

    | **Steps**                                                  | 
    |-------------|----------------------------------------------|
    | Name        | Fulfiller_Customer_Support                   |
    | Description | Fulfiller in the Customer Support department |


8. You should see the two new roles in the app

    ![](./images/segment_03_AES_Create_Role_05_Result.png)


## Refine the access controls 

1. **Navigate to the Access Control List (ACL)**
    ![](./images/segment_04_ACL_01_Go_to_ACL.png)


2. **Filter the list of records**

    | **Filter**                                      | 
    |-------------|---------------------------------|
    |<span className="large-number">➊</span>| Set the filter as shown below |
    |<span className="large-number">➋</span>| Click **Run**    |
    |<span className="large-number">➌</span>| Click on the **Updated by** to get the admin ACL at the top   |
    |<span className="large-number">➍</span>| Open the first record  |

    ![](./images/segment_04_ACL_02_Filter_ACLs.png)


3. Review the ACL 

4. Define the condition: Opened by someone in the Development department

    1. We click on the condition field, scroll down to select **Show related fields**

        ![](./images/segment_04_ACL_03_Condition_01.png)

    2. Select "Opened by ⟹ User fields"

        ![](./images/segment_04_ACL_03_Condition_02.png)

    3. Click again on the field and we can now see the fields inside the Opened by

        ![](./images/segment_04_ACL_03_Condition_03.png)

    4. Scroll down and select **department**

        ![](./images/segment_04_ACL_03_Condition_04.png)
    
    5. Click again on the field and then select **Opened by Department**

        ![](./images/segment_04_ACL_03_Condition_05.png)

    6. Finally set the condition value to **Development**

        ![](./images/segment_04_ACL_03_Condition_06.png)

    7. Save the record

        ![](./images/segment_04_ACL_03_Condition_07_Save_ACL.png)

    8. Notice ServiceNow has generated a description

        ![](./images/segment_04_ACL_03_Condition_08.png)

    9. To secure the data access let's review the other ACL our work 

        We need to delete any ACL that does not have any restriction

        ![](./images/segment_04_ACL_03_Delete_ACL_with_no_restriction.png)

         
## Assign the role to Abel

### Open user Abel

1. Go to the list of users

    | Steps                                                 | 
    |---------------------------------------|------------------------|
    |<span className="large-number">➊</span>| Click the **All** menu  | 
    |<span className="large-number">➋</span>| Search for **Users**    |
    |<span className="large-number">➌</span>| Click on **Users**      |

    ![](./images/06-Create-new-user-1.png)


2. Open the user **Abel**

    ![](./images/segment_04_Assign_Role_01.png)


3. Click **Edit** Roles

    ![](./images/segment_04_Assign_Role_02.png)


4. Grant Abel the telework user role

    ![](./images/segment_04_Assign_Role_03.png)


## Let's test

1. Go to App Engine Studio


2. Preview the Telework case table

    ![](./images/segment_04_Test_01.png)


3. Notice we can see all the records

    ![](./images/segment_04_Test_02.png)


4. Go back to the admin view & Impersonate **Abel**

    ![](./images/segment_04_Test_03.png)


5. Go back to the Telework case list and Notice we can see all the records

    ![](./images/segment_04_Test_04.png)

