---
title: "Governance" 
sidebar_label: "1. Governance"

hide_table_of_contents: true
_pagination_label: "Security" 
image: https://i.imgur.com/mErPwqL.png

---
## Use case

In the previous lab, we have played the role of Amanda and built a fully functional Telework Case Management application to help the team efficiently manage work across the IT, HR and employee departments.

Amanda is now ready to release the first version of her application, but before she does, she wants to invite the App Dev Administrator to help her get started on version two./ to get assistance.

The application will contain sensitive employee information so she would like to make sure that regular platform administrators don't have access to the application.

Additionally, the platform admins want to make sure that the custom app developers can't create records on tables outside of their app.

We'll leverage the App Engine governance capabilities to invite collaborators and some platform security features to secure the app and the platform.

Let's get started.


Now let’s join Elsa, one of the App Engine admins in the App Engine Management Center.

Elsa is part of App Engine Admin group, and she receives an new Application request. In AEMC, app engine admins can monitor and govern applications developed through AES. She can approve or reject collaboration, deployment, and application intake requests.


App Engine Management Center on the ServiceNow platform equips you with everything necessary to manage all aspects of low-code app dev. With this all-new App Engine capability, you can control the intake of new applications, streamline developer collaboration, and manage the app deployment process in a manner that is custom tailored to your infrastructure.  

But before we can deploy the app, our manager asked us to make sure the application is secure. The app might contain sensitive data about employees such as personal address that not even ServiceNow administrators should be able to see.

In this exercise, we will learn techniques for securing our application to specific users and roles.




## Marc's Notes 

Talk about:
 1. scope 

 2. the new Access-analyzer

    ServiceNow® Access Analyzer an access evaluation tool that helps to view the permissions of an identity for a resource.

    :::danger  Might need to be installed 
    Check if installed on the cloud lab instance
    :::

## References
* [Restrict access to an application](https://docs.servicenow.com/bundle/vancouver-application-development/page/build/applications/task/enable-application-administration.html)
* [Application access settings](https://docs.servicenow.com/bundle/vancouver-application-development/page/build/applications/concept/c_ApplicationAccessSettings.html)




 