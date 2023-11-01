---
title: "Restrict access from Admins" 
sidebar_label: "Restrict access from Admins"
hide_table_of_contents: false
---
# Restrict access from Admins

We will secure the app so that even other administrators cannot access the app and its data.

## Update the admin role for our app as an Application Administrator

1. Go to the roles list

    1. Click the **All** menu
    
    2. Search for "roles" 
    
    3. click on: System Security > Users and Groups > Roles or User Administration > Roles.

    ![](./images/01_Search-for-roles.png)


2. Open the role for the application-specific admin role.

    1. Click to show the filter

    2. For the field, select **Application**

    3. For the value, start typing **"Tele"** and then select the "Telework application".

    4. Open the default admin record
    
    ![](./images/02_Open-the-admin-role.png)


3. Configure the form to add the **Application Administrator** field.

    1. Right-click in the header to show the record menu

    2. Select Configure > **Form layout**

    ![](./images/03_Configure-form-layout.png)

    3. Add the field **Application Administrator** to the role form

        1. Click **Edit this section in Global**

        2. Select the field **Application Administrator** 

        3. Click on the **[ › ]** button to add the field to the list of selected fields

        4. Click <span className="button-purple">Save</span> at the bottom. 

        ![](./images/04_Add-App-Admin.png)


4. Set the Telework Admin role to an Application Administrator

    1. In the role record, select the Application Administrator check box,
    
    2. then Click Update.

    ![](./images/05_Check-App-Admin.png)


## Assign the admin role for our app to a user

So far we have developed logged in as the admin user. We'll create a user for our application, assign them the "App Engine Studio Users" role and the role we just created for the Telework app.

1. Go to the list of users

    | Steps                                                 | 
    |---------------------------------------|------------------------|
    |<span className="large-number">➊</span>|Click the **All** menu  | 
    |<span className="large-number">➋</span>|Search for **Users**    |
    |<span className="large-number">➌</span>|Click on **Users**      |

    ![](./images/06-Create-new-user-1.png)


2. Open the user **Telework Admin**

    | Steps                                                 | 
    |---------------------------------------|------------------------|
    |<span className="large-number">➊</span>|Type **Telework** menu  | 
    |<span className="large-number">➋</span>|Hit the <kbd>enter</kbd> key  |
    |<span className="large-number">➌</span>|Click on the user **Telework Admin**     |

    ![](./images/06-Open-admin-user-1.png)

3.  Assign the **App Engine Studio Users** role

    :::tip Best practice
    Rather than adding a role individually to each user, assign a role to a group. Group members have all of the roles assigned to a group.
    :::

    In the **Telework.Admin** user record, scroll down to the related lists, On the Groups tab, click <span className="button-purple">Edit</span> then follow the steps below.

    | Steps                                                 | 
    |---------------------------------------|------------------------|
    |<span className="large-number">➊</span>| Type **App Engine Studio Users**  |
    |<span className="large-number">➋</span>| Select **App Engine Studio Users**  |
    |<span className="large-number">➌</span>| Click on the [ › ] button to add the field to the list of selected fields   |
    |<span className="large-number">➍</span>| Click <span className="button-purple">Save</span>.   |

    ![](./images/07-Assign-AES-users-group.png)

    

# OLD STUFF

2. Click on the <span className="button-purple">New</span> button, to create a new user

    ![](./images/06-Create-new-user-2.png)


3. Fill the user form with the following values (💡 double-click to select, copy & paste into the form).

    | |Field Name                | Field Value
    |-|--------------------------| --------------
    |<span className="large-number">➊</span>|User ID    | Telework.Admin
    |<span className="large-number">➋</span>|First name | Telework
    |<span className="large-number">➌</span>|Last name  | Admin
    |<span className="large-number">➍</span>|Right-click in the header 
    |<span className="large-number">➎</span>|Click on the <span className="button-purple">Submit</span> button.

    ![](./images/06-Create-new-user-3.png)








    







