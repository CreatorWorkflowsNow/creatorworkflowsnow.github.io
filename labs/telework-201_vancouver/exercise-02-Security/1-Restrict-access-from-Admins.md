---
title: "Restrict access from Admins" 
sidebar_label: "Restrict access from Admins"
hide_table_of_contents: true
---
# Restrict access from Admins

We will secure the app so that even other administrators cannot access the app and its data.

## Update the admin role for our app 

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


:::info
So far we have developed logged in as the admin user. We'll create a user for our application, add this user to the "App Engine Studio Users" group and then add the role we just created for the Telework app.
:::



5. Create a new user 

    1. Click the **All** menu
    
    2. Search for "Users"

    3. Click on **Users**

    ![](./images/06-Create-new-user-1.png)

    







