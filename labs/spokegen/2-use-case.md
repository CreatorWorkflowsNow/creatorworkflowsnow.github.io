---
id: use-case
title: "Use Case"
pagination_label: "Use Case"
sidebar_label: "Use Case"
hide_table_of_contents: true
draft: false
---

ACME Inc. currently uses a third-party system for managing visitor access and authorization to their buildings, which is overseen by a Security and Property Management company. ACME Inc. aims to enhance the experience for both visitors and employees. They utilize ServiceNow and intend to automate the process of verifying visitor access and printing badges through ServiceNow workflows. ACME Inc. has developed a modernized experience using the ServiceNow platform, allowing visitors to independently check in via kiosks located at the reception of each building.

However, there are no pre-built integrations available for the Visitor Access application, which is hosted and managed externally to the ServiceNow Platform. As ServiceNow developers, our task is to create this integration (Spoke) so that we can retrieve information from this remote system through a workflow triggered when a visitor checks in at the kiosk.

In this scenario, you had a meeting with the administrator of the third-party visitor access app who has supplied you with the following API documentation: [API Documentation Link](https://quentincloudsnow.github.io/userlookup/#/default/get_checkUser). You can click the link to gain an understanding of how this API functions.

This API is relatively straightforward. As you can observe, it consists of only one API method, 'checkUser,' and this method necessitates three inputs."

| Field | type |
   |-------|-------|
   | firstname | string |
   | lastname | string |
   | dateofbirth | YYY-MM-DD |
   


By providing the user information, the API will return a message indicating whether a user exists or not. If the user does exist, it will also provide additional information that you will need to utilize within a ServiceNow workflow. You can refer to the example of the response returned by the API for clarification

 
      {
      "code": "0",
      "message": "User exists",
      "user": {
         "guest_title": "Guest",
         "phone": "123-456-7890",
         "host_name": "Jane Smith",
         "host_id_number": "987654",
         "host_email": "jane@example.com",
         "guest_email": "john@example.com",
         "building_location": "Building A",
         "access_expiration": "2023-12-31"
               }
      }

In the JSON response, you will receive a 'code' indicating success (0), a 'message' confirming the user's existence, and comprehensive 'user' information, which includes guest title, phone number, host name, host ID number, email addresses, building location, and access expiration date. If the user does not exist, you will receive a code 1. In our particular scenario, the user data obtained from the response will be utilized to print a badge for the visitor. (The badge printing process is addressed in another lab using our RPA Hub technology.)