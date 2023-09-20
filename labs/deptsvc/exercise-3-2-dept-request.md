---
id: exercise-3-2-dept-request
title: Department Request Record Producer
---

# Department Request Record Producer


## Introduction

Now that we have a data model created and our workspace experience ready to go, let's create some record producers so we can start getting some data into those tables. You can think of a record producer as an end user facing form to collect all necessary data to complete a request, address an issue, or answer an inquiry.

## Let's start

1. Select the **(+) Add** link in the Experience Section
    Select the **Record Producer** experience
    Then select **Begin** on the confirmation screen

![Request RP Image 1](images/reqrp_1.png)

2. Enter **Dept Requests** in the name field and provide a Short Description
    Select **Continue**

![Request RP Image 2](images/reqrp_2.png)

3. Select **Edit record producer**
    
![Request RP Image 3](images/reqrp_3.png)

4. Select **Destination** on the left. Set the **Record submission table** field to **Dept Request**

![Request RP Image 4](images/reqrp_4.png)

5. Select the **Location** link on the left and then the **Browse** link\
    Move **Service Catalog** from **Available** to **Selected**\
    Select **Save selections**

![Request RP Image 5](images/reqrp_5.png)

6. Select **Browse** in the **Categories** section\
    Move **Dept** from **Available** to **Selected**\
    Select **Save selections**

![Request RP Image 6](images/reqrp_6.png)

7. Select the **Questions** link on the left\
    Select **Insert new question**

![Request RP Image 7](images/reqrp_7.png)

8. Set the **Question type** to **Choice**\
    Set the **Question subtype** to **Dropdown (fixed values)**

![Request RP Image 8](images/reqrp_8.png)

9. Check **Map to a specific field on the table**\
    Choose **Request type** for the **Table field**\
    Enter **Request Type** for the **Question label**\
    Check **Mandatory**

    You may need to scroll down to see all fields

    Select **Continue to Choices ->**

![Request RP Image 9](images/reqrp_9.png)

10. Check the **Include none choice**
    Check **(+)** to start adding Choices
    
![Request RP Image 10](images/reqrp_10.png)

11. Enter the **Display name** for each of Request Type choice that you added to the Dept Request table earlier\
    Select I**nsert Question** when all choices have been added

![Request RP Image 11](images/reqrp_11.png)

12. Select **+ Insert**\
    Select **New Question**

![Request RP Image 12](images/reqrp_12.png)

13. Set the **Question type** to **Text**\
    Set the **Question subtype** to **Single-line**

![Request RP Image 13](images/reqrp_13.png)

14. Check **Map to a specific field on the table**\
    Choose **Short Description** for the **Table field**\
    Enter **Request Summary** for the **Question label**\
    Check **Mandatory**

    You may need to scroll down to see all fields

    Select **Insert Question**

![Request RP Image 14](images/reqrp_14.png)

15. Select **+ Insert**\
    Select **New question**

![Request RP Image 15](images/reqrp_15.png)

16. Choose **Text** for the **Question Type**\
    Choose **Multi-line** for the **Question subtype**

![Request RP Image 16](images/reqrp_16.png)

17. Check **Map to a specific field on the table**\
    Set the **Table field** to **Description**\
    Set the **Question label** to **Request Details**

![Request RP Image 17](images/reqrp_17.png)

    Select **Insert Question**

18. Select the **Review and Submit** link on the left and then the **Submit** button on the right\
    Select **Return to my application**

![Request RP Image 18](images/reqrp_18.png)



