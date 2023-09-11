---
id: section2
sidebar_position: 2
sidebar_label: Create Data
title: Creating Data
hide_table_of_contents: true
draft: true
---

Now that we have an application framework, we can start to fill in some ofthe details that will give our application purpose. In this step, we will create the core table that will act as the primary data container for our application.
1. Create a new table by
clicking Add a table or
upload a spreadsheet
under the Data section. Then click Get Started
2. Next, we will choose the method for creating our table. There are a variety of options. For this lab, we will be creating our tablefrom scratch. Select Create from scratch and then click Continue.
Important Note:
In this lab, we will be manually creating a table. In practice, you will often want to import a spreadsheet with existing data or extend an out- of-the-box table to form your table. Extending provides a powerful means of replicating core capabilities without needing to manually recreate the data fields or structure.
   © 2022 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are associated.
8
 Creator Workflows Lab Guide
  3. Next, we create the Shipments table that will hold the data that drives our application.
We’ll start by providing a Table Label of Shipments. The table name will auto populate.
4. Next, check the box Make extensible. This will allow us to create tables based on the Shipments table later if we choose.
5. Then, check the Auto number checkbox to
create an auto record number field we can
use to reference our shipment records.
Selecting this option provides us with configuration options. Fill in SHI in the Prefix.
6. Once you have completed these steps, click the Continue button.
7. On the permissions screen, select the All checkbox for admin, and Read and Write for user
After clicking Continue, App Engine Studio creates your new table structure. Once complete, you should receive the following confirmation screen
  © 2022 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are associated.
9

 Creator Workflows Lab Guide
 8. Next, we’ll add our data columns to this new table by clicking Edit Table.
9. We now see the Table Builder screen. From this screen, we can see the fields that were
automatically added to our table by the system, as well as add additional columns.
Review the introduction to Table Builder then click the Next button to walk through each information pane. From the last screen, click the Get Started button.
10. First, we want the number field to be the primary record identifier, so let’s make that the clickable value in lists by toggling the Diplay setting for Number to true
  © 2022 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are associated.
10

 Creator Workflows Lab Guide
11. Now let’s add the data columns for our application. Start by
click the Add new field link at the top of the screen.
12. In the new row created, add the following values:
       Column Label: Column Name: Type: Reference:
Recipient
Recipient
Recipient (auto generated)
Reference User [sys_user]
Important Note:
Sometimes reference tables share the same label. Make sure you select the correct
table (in this case sys_user).
         When Reference is selected from the Type drop-down, the Reference selector will open below the field to allow you to designate the table being referenced.
Important Note:
Reference fields are just one important method of unlocking the value of the Now Platform. By leveraging data from existing business processes, we streamline application creation and ensure data quality across all solutions that leverage
shared data sets.
13. Once you have updated all the information, press enter to update the row and return to the Table Builder Screen.
  © 2022 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are associated.
11

 Creator Workflows Lab Guide
14. Repeat steps 10-12 for each of the following 3 fields:
         Column Label: Column Name:
Type: Reference:
Column Label: Column Name: Type:
Destination
Destination
destination (auto generated)
Reference
Location [cmn_location]
Deliver Date
Deliver Date
deliver_date (auto generated)
Date
Column Label: Column Name:
Type:
Max Length:
Tracking Number
Tracking Number
tracking_number (auto generated)
String 40
                         15. Next, we’ll add a few Choice fields. When creating a Choice field, you will first select the type of choice you wish to provide (with or without None, or suggestion). Then you will provide the list of available choices by typing the value and pressing enter.
        Column Label: Column Name: Type:
Choice Type: Choices:
Carrier
Carrier
carrier (auto generated)
Choice
Dropdown with -- None -- FedEx
UPS
DHL
Column Label: Column Name: Type:
Choice Type: Choices:
Status
Status
status (auto generated)
Choice
Dropdown with -- None -- New
In Transit
Delivered
Delivery exception
                              16. We now have all the data elements we need to track for our first use case. Click the Save button at the top right to finalize your configurations.
17. Click the Form views tab on the top left of the screen
© 2022 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective companies with which they are associated.
12

 Creator Workflows Lab Guide
  18. Drag an drop the following fields from the left column onto the screen:
a. Destination
b. Recipient
c. Tracking Number
d. Deliver Date
e. Carrier
f. Status
19. Your screen should look like this once complete:
20. Click Save
Congratulations, you’ve built the first table in your solution. Now let’s start to configure the user
experience. Close the Table Builder by clicking the x on the Shipments Table tab.