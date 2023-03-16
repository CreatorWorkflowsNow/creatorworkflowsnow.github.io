---
layout: default
title: RPA Hub
parent: Automation Engine Labs
nav_order: 41
---
# RPA Hub

## Introduction

**Robotic Process Automation (RPA)** is a form of Business Process Automation where ”bots” or “digital workers” are deployed as a substitute for Humans in routine, error-prone, and high-volume manual processes.

These two types of automations can be created with RPA Desktop Design Studio and run them with Unattended Robot or Attended Robot:

**Unattended automation**: This type of automation is used to automate highly repetitive tasks. For example, in a CRM system, the copy and paste tasks can be performed by the unattended robot to an excel file without any human intervention. These automations can be triggered via API or can be scheduled to run at any time.

**Attended automation**: You can use this type of automation with human supervision. For example, in a contact center, robots are used as user assistants. They’re installed on operator’s workstations and are triggered by human operators on demand.

**RPA Hub** is a ServiceNow application used to manage attended and unattended automations in your enterprise. RPA Hub simplifies the governing and managing of automations within a centralized location. It uses multi-tenancy to create logical partitions so that robots for different customers (internal or external) can be managed from a single instance. Each logical instance has its own access control list (ACL), robots, licenses, and execution logs.

## Goal

The goal of this exercise is to automate a repetitive, error-prone process that involves manually entering in data into a legacy HR system. Because this application does not have APIs, RPA can be utilized to automate through the user interface (UI) of the application. This exercise will show how to create an unattended robot package in the RPA Desktop Design Studio. It will teach how to retrieve the pending work queue item in the RPA Hub Queue (extracted data from DocIntel) and parse the JSON content. Additionally, it will show how to use the Windows connector to interact with the UI of a .Net application. Finally, the lab will show how to use the Invoke SubFlow component to trigger a SubFlow on the ServiceNow instance.

## Reviewing RPA Hub

Before opening RPA Desktop Design Studio, let's look at RPA Hub and some of the core components.

 1. Click on the provided instance URL to open the login page and then type the provided **username** (1) and **password** (2) and click **Log in** (3).

    ![Relative](../images/RPA-Images/Login1.png) 

 1. To open RPA Hub, click **All** (1), type **RPA Hub** into the Filter Navigator (2), and then click **RPA Hub** (3). This opens RPA Hub in a new tab.

    ![Relative](../images/RPA-Images/Open-RPA-Hub-2.gif) 

    > When RPA Hub opens, there is a pop-up that says, "Robots are connected using basic authentication." This is expected and the pop-up can be closed.

 1. Take a quick look at the **RPA Hub Home Dashboard**. At a glance, RPA Hub provides insights into incidents, robot utilization, process job summaries, queue summaries, related business applications, and license utilization.

    ![Relative](../images/RPA-Images/RPA-Hub-Scroll.gif) 

 1. Click on the list view to see additional details.

    ![Relative](../images/RPA-Images/Click-List.png) 

 1. The list view is divided into three sections: Build, Administration, and Monitor. Below is a description of what each of these sections are used for.

   | Section | Purpose |
   |-------|-------|
   | Bot Process | Configuration of the robot that includes the package, package version, credentials, and assigned robot. |
   | Packages | Set of resource files that include the bot files and versions that are required for an automation execution. |
   | Shared Parameters | Global variables or configurable items that are stored in one place. These variables and terms are used across bot processes. |
   | Queues | Repository that can hold an unlimited number of work queue items that can be processed by a robot.
   | Robots | Software agent that runs a bot process that is built in the RPA Desktop Design Studio. |
   | Installed RPA Plugins | The installed software components that add specific features for an interaction with third- party applications such as Microsoft Office 365Google Chrome, Windows, and so on. |
   | Alerts | Custom notifications that are generated for robots, schedules, process jobs, and other RPA Hub-related tables. |
   | Process Jobs | Execution of a process on a robot. |
   
 ![Relative](../images/RPA-Images/List-View.png) 

 6. Under Bot Processes, notice that a Bot Process titled **Data Entry in Legacy HR System** has already been created. This is where the package will need to be assigned to run the automation from the ServiceNow instance.

    ![Relative](../images/RPA-Images/Click-Bot-Process.png)

 1. In the list view, click **Queues**. This is where a pre-created work item has been added that will be used for the exercise. 

    ![Relative](../images/RPA-Images/Click-Queues.png)

 1. Click on the Queue titled **Direct Deposit**.

    ![Relative](../images/RPA-Images/Open-Queue.png)

 1. The **Details** view includes information about the queue. Click **Work Queue Items** to view the work items in the queue.

    ![Relative](../images/RPA-Images/Click-Work-Item.png)

 1. There is one item in the work item queue. Click **BAN0001032** to view the content that it contains.

    ![Relative](../images/RPA-Images/Open-Work-Item.png)

 1. Scroll to the bottom to view the Request Content in JSON format. This information is the data that DocIntel extracted from the void check. The robot will retrieve this content and enter the data into a legacy HR system.

    ![Relative](../images/RPA-Images/Request-Content.png)

 1. Because the automation will be built to pick work items only in the pending state, this work item must be converted back to **Pending** any time the automation is ran. This can be done from this work item view by clicking the **Status** value and selecting **Pending** (1) and then clicking **Save** (2).

    ![Relative](../images/RPA-Images/Pending-2.png)

 1. This work item can also easily be accessed from the Favorites list by clicking **Favorites** (1) and then clicking **Work Queue Item - BAN0001032** (2) as seen below.

    ![Relative](../images/RPA-Images/Favorites-2.png)

## Connecting to the lab VM

A Windows Virtual Machine (VM) will be needed to complete this lab. The IP address and login credentials were provided when registering for the lab. If using a Mac laptop, the Microsoft Remote Desktop App should have already been installed as a pre-requisite to this lab. 

 1. If using a Mac, connect to the lab VM by opening Microsoft Remote Desktop and clicking on the **plus sign** and then clicking **Add PC**. If using a Windows laptop, skip to **Step 6** to connect to the VM using Windows RDP.

    ![Relative](../images/RPA-Images/Add-PC-2.png)

 1. Copy the **IP address** from the registration page and enter it under **PC Name** (1) and enter **Lab VM** under **Friendly Name** (2). Then click **Add** (3).

    ![Relative](../images/RPA-Images/IP-Address.png)

    ![Relative](../images/RPA-Images/Add-PC-Name-2.png)
    > The **IP Address** is only the value within the **[]** brackets on the Windows Server line.

 1. Double click on the new VM that was added to RDP.

    ![Relative](../images/RPA-Images/Lab-VM.png)
    
    Then click **Continue**.

 1. Enter the Windows Server login credentials provided during registration under **Username** (1) and **Password** (2) and then click **Continue** (3).

    ![Relative](../images/RPA-Images/Enter-User-Account-2.png)

    > Click **Show Password** to ensure the entered password is correct.
    
 1. Click **Continue** once again to connect to the VM. After connecting to the VM, skip to **Step 11** to finish the initial set up.

    ![Relative](../images/RPA-Images/Continue-to-Connect-2.png)

 1. If using a Windows laptop, open Remote Desktop Protocol (RDP). Then copy the **IP address** from the registration page and enter it for **Computer** (1) and click **Connect** (2).

    ![Relative](../images/RPA-Images/IP-Address.png)

    ![Relative](../images/RPA-Images/Windows-RDP.png)
    > The **IP Address** is only the value within the **[]** brackets on the Windows Server line.

 1. Click **More choices**.

    ![Relative](../images/RPA-Images/Windows-RDP2.png)

 1. Click **Use a different account**.

    ![Relative](../images/RPA-Images/Windows-RDP3.png)

 1. Type **Administrator** for Username (1) and the **lab password** for Password (2). Then click **OK** (3).

    ![Relative](../images/RPA-Images/Windows-RDP4.png)

 1. Click **Yes** to confirm connectivity to the VM.

    ![Relative](../images/RPA-Images/Windows-RDP5.png)

 1. Once connected to the lab VM, notice that the RPA software is already pre-installed and accessible from the Desktop. The legacy HR app is also pre-installed under the SupplementalMaterials folder.

    ![Relative](../images/RPA-Images/Installed-Software.png)

    > If at any point throughout the lab a pop up appears saying that updates are available, this window can be closed by clicking "View Details" and then clicking the X icon.

 1. Before getting started, it is recommended to change the default browser to Chrome. This can be done by typing **Default Browser** (1) in the Windows Search Bar and clicking **Choose a default web browser** (2).

    ![Relative](../images/RPA-Images/Choose-Browser.png)

 1. Click **Internet Explorer** under **Web browser** and select **Google Chrome**. Then X out of the window.

    ![Relative](../images/RPA-Images/chrome.gif)

## Designing a Package in RPA Studio

The goal of this exercise is to design an automation that enters data into a legacy .NET application. The completed package utilizes the RPA Queue and the Windows Connector to automate through the user interface of the application.

 1. Open RPA Desktop Design Studio.

    ![Relative](../images/RPA-Images/Open-Studio.png)

 1. Before opening RPA Desktop Design Studio, connection will need to be made to the ServiceNow instance. In the Connection Manager window, enter **Lab Instance** under **Name** (1) and enter the instance URL under **URL** (2). Then click **Launch in default browser** (3) and click **Save** (4).

    ![Relative](../images/RPA-Images/Connection-Manager.png)
    > The instance URL is provided on the registration page.

 1. After clicking **Save**, the RPA Desktop Design Studio finishes installing.

    ![Relative](../images/RPA-Images/Finish-Installing.png)
    > This will take some time, but only needs to be completed the first time RPA Desktop Design Studio is opened.

 1. Wait for RPA Desktop Design Studio to open and then click **Unattended Automation**.

    ![Relative](../images/RPA-Images/Click-Unattended-Automation.png)

 1. Enter the **Name** (1) and **Description** (2) and click **OK** (3).

    ![Relative](../images/RPA-Images/New-Project.png)

 1. Now, let's look at the RPA Desktop Design Studio. Below are the key sections and their purposes.

    ![Relative](../images/RPA-Images/Studio-Layout.png)

    | Section | Purpose |
    |-------|-------|
    | Toolbars | Provides access to important functionalities like Run, Debug, or upload packages to RPA Hub.|
    | Toolbox | Provides access to components to build an automation. Components are bespoke actions like opening or closing a file, starting or stopping an application, and much more. |
    | Main Canvas | The canvas shows a workflow like diagram which is used to connect components to a sequence. It allows to define the process steps as well as data flows from one component to another component. |
    | Project Explorer | This section is used for management of installed plugins, activities, and global objects.
    | Properties | Used to configure the properties of components, connectors, activities, and global objects. |

 1. Because the PayDay application is a .Net app, the Windows Connector is the appropriate connector to use. It can detect the windows, elements, and properties of .Net applications. Navigate to the Toolbox Search bar and type **Windows**. Then click the **Windows Connector** and drag and drop it onto **Global Objects**.

    ![Relative](../images/RPA-Images/Drag-Windows-2.gif)
    > All connectors must be added to the Global Objects section before they can be used.

 1. Under Global Objects in the Project Explorer, double Click the newly added Windows Connector.

    ![Relative](../images/RPA-Images/Click-App.png)

 1. In the Properties section, directly under the Project Explorer, edit the name field so that it says **PayDay App** and then press **Enter**.

    ![Relative](../images/RPA-Images/Name-App.png)

 1. Next, double click the PayDay App in the Project Explorer and navigate to the Toolbox on the left side of the screen. Because a global object has been selected, the Toolbox has been replaced with the Object Explorer, which shows methods specific to that object. In this case, the methods are related to .Net applications. Drag and drop the method that says **Start** onto the canvas.

    ![Relative](../images/RPA-Images/Drag-Start-App.gif)

 1. To connect this step to the previous step of the process, simply drag the gray Control Out port from the **Start** Component to the Control In port of the **PayDay App** component. These arrows tell the robot which steps to follow, in which order.

    ![Relative](../images/RPA-Images/Connect-Ports.gif)

 1. The orange ports on the left side of the component indicate that the system is expecting input data to complete this step. In this case, it needs the path of the application that it is opening. Any orange ports on the right side of the component indicate the output of that step of the process. Double click on **Path** and type **C:\SupplementalMaterials\ACME PayDay 2001 v.60.exe**, which is the path of the installed application. Then press **Enter**.

    ![Relative](../images/RPA-Images/Enter-Path2.gif)

 1. To test this step, click **Run** on the left side of the Toolbar. This opens the PayDay app.

    ![Relative](../images/RPA-Images/Click-Run.png)

 1. **Minimize** this app because it will be needed later when configuring the Windows Connector.

    ![Relative](../images/RPA-Images/Minimize.png)

 1. The next step of the process is to retrieve the pending work items from the queue on RPA Hub. To use the Queue connector, click **Toolbox** on the bottom left of the screen.

    ![Relative](../images/RPA-Images/Click-Toolbox.png)

 1. Next, search **Queue** in the Search Bar.

    ![Relative](../images/RPA-Images/Type-Queue.png)

 1. Queue is another connector, so it must first be dragged and dropped onto the Global Objects section before it can be used.

    ![Relative](../images/RPA-Images/Drag-Queue.gif)

 1. As done previously with the Windows Connector, double click on the Queue object in the Project Explorer to change its properties.

    ![Relative](../images/RPA-Images/Click-Queue.png)

 1. Under the Properties section, leave the **Name** field as **Queue**. In the **Queue Name** field, type **Direct Deposit** and then press **Enter**. This is the name of the queue on RPA Hub and is required to tell the robot which queue to interact with.

    ![Relative](../images/RPA-Images/Name-Queue.png)

 1. Because the robot is accessing a queue on a ServiceNow instance, it must also be told which instance and bot process to connect to. This can be done by clicking **Assign Bot Process** in the Toolbar.

    ![Relative](../images/RPA-Images/Assign-Bot-Process.png)

 1. In the Connection Manager window, click **Connect** to connect to the lab instance provided during registration.

    ![Relative](../images/RPA-Images/Connection-Manager-2.png)

 1. This opens a ServiceNow login page in Chrome. Type the **instance username** (1) and **password** (2) and click **Log in**.

    ![Relative](../images/RPA-Images/Login.png)
    > These credentials are provided on the registration page.

 1. To confirm connectivity, click **Allow** on the following screen.

    ![Relative](../images/RPA-Images/Click-Allow.png)

 1. Click **Open UTL.RPA.HOST** to open the UTL.RPA.HOST application.

    ![Relative](../images/RPA-Images/Open-Host.png)

 1. Now that connectivity to the instance has been established, select **Data Entry in Legacy HR System** as the Bot Process (1) and **MyRobot** as the Robot (2). Then click **OK** (3).

    ![Relative](../images/RPA-Images/Assign-Process.png)

 1. Once the instance is connected, there will be green markers at the bottom of RPA Desktop Design Studio indicating what bot process has been assigned (1) and what instance it is connected to (2).

    ![Relative](../images/RPA-Images/Process-Assigned.png)

 1. Double Click **Queue** under Global Objects to view the methods related to Queue.

    ![Relative](../images/RPA-Images/Click-Queue.png)

 1. Click **PickWorkItem** and drag and drop it onto the canvas, on the right of the previous step. Then connect the Control out port of the PayDay App step to the Control In port of the PickWorkItem step.

    ![Relative](../images/RPA-Images/Drag-Pick-Item.gif)

 1. To change the step so that only Pending work items are selected, double click on the **Status** input field.

    ![Relative](../images/RPA-Images/Click-Status.png)

 1. Click **Static** to change how the status field is determined. Static means that it is not dynamic and will not change based on any conditions.

    ![Relative](../images/RPA-Images/Click-Static.png)

 1. Next, click the drop-down menu and select **Pending**. Then click **OK**.

    ![Relative](../images/RPA-Images/Select-Pending-And-Ok.gif)

 1. Click on Settings at the top of the PickWorkItem step. This is indicated by a gear icon.

    ![Relative](../images/RPA-Images/Click-Settings.png)

    > The settings can also be changed by double clicking on the gray title bar at the top of the step.

 1. The response from the Queue will be in JSON format but this can easily be parsed by the robot using the **JSON Properties** section. Double click on JSON properties to configure the key-value pairs.

    ![Relative](../images/RPA-Images/Click-JSON.png)

 1. First, click on the green plus sign **8 times** because there are 8 values being passed to the robot in the Request Content (1). Next, enter the JSON Path Notations as seen below so the robot can retrieve the corresponding values (2). Then click **OK** (3). The spelling needs to be exactly as shown in the image below because this is how the properties are spelled in the JSON content.

    | JSON Path Notation Name |
    |-------|
    | Firstname |
    | Lastname |
    | Routing |
    | AccountNumber | 
    | BankName |
    | EmployeeNumber | 
    | AccountType |
    | BankRecordSysid |

    ![Relative](../images/RPA-Images/Enter-JSON-Properties.png)

 1. Now that data is being received by the robot, the next step is to use the Windows Connector to tell the robot where to enter the data. To configure the Windows Connector, right click on **PayDay App** and click **Configure**.

    ![Relative](../images/RPA-Images/Click-Configure2.gif)

 1. Click the drop-down window and check to see which applications are available. The PayDay App is not included because it has not yet been opened. 

    ![Relative](../images/RPA-Images/Check-Windows.png)

 1. Minimize the RPA Desktop Design Studio and click on the PayDay App which should have been minimized earlier.

    ![Relative](../images/RPA-Images/Open-App.png)
    > If the PayDay App was closed, it can be found by navigating to the following path: **C:\SupplementalMaterials\ACME PayDay 2001 v.60.exe**

 1. Now the PayDay App can be selected when clicking on the drop-down window. 

    ![Relative](../images/RPA-Images/Select-PayDay-App.png)

    > If the PayDay App is still not there, try clicking on the green marker on the right side of the drop down to refresh the list.

 1. Click **Add Window**.

    ![Relative](../images/RPA-Images/Add-Window.png)

 1. Right click on the added window and click **Add Element**.

    ![Relative](../images/RPA-Images/Add-Element.gif)

 1. The elements that need to be selected are the ones that the robot will need to interact with. The first one to select is the input field for **First Name**. To select it, simply hover over the text box until you see a red line highlighting it. Then, without clicking on anything, move your mouse to the name field and type **First**. The red box should still be highlighting the text box and the Tag field should say **edit**. If all of this has been done correctly, click on the green plus sign to finish adding the element. 

    ![Relative](../images/RPA-Images/Add-First-Element.gif)

    > To make it easier to enter the name of the element, try holding down the control key. This prevents the Add Element window from moving.

 1. Next, repeat this step for the text boxes for **Last Name, Emp Number, Bank Name, Account Number, and Routing Number**. The **Names** that are entered should match the Name field in the second column of the table below.

    | Text Box | Name |
    |-------|-------|
    | First Name | **First** |
    | Last Name | **Last** |
    | Emp Number | **Emp** |
    | Bank Name | **Bank** |
    | Account Number | **Account Number** |
    | Routing Number | **Routing Number** |

 1. The Account Type element uses a list to allow the user to select a list item. Ensure that the whole list is highlighted, not just the list item. If done correctly, it will say **List** in the TAG field. If the **list item** is accidentally selected, it will say **list item** in the TAG field. If this happens, click the **Blue Arrow** to the right of the TAG field. This changes the element to its parent element, which in this case is the list. It should now say **list** in the TAG field. See the second gif for an example of how change to the parent element.

    ![Relative](../images/RPA-Images/Account-Type.gif)

    ![Relative](../images/RPA-Images/Blue-Arrow.gif)

 1. Last, the **Enter** button needs to be added so the robot can submit the data. Highlight the Enter button, type **Enter**, and click the green plus symbol. This is the last element that needs to be added, so click the **Red X** to end the Add Element process.

    ![Relative](../images/RPA-Images/Select-Enter.gif)

 1. Check the added elements. They should look like the ones seen below. If everything looks correct, close the Windows Connector window by pressing **OK**.

    ![Relative](../images/RPA-Images/Check-Configuration.png)

 1. In the Project Explorer, double click **PayDay App** and then double click **ACME PayDay Management 2001 .v60**. This shows the methods available at the Screen level, rather than at the application level, which was used to open the application.

    ![Relative](../images/RPA-Images/Click-Window.png)
    >The methods can be seen in the Object Explorer on the left side of the RPA Desktop Design Studio.

 1. Under Methods, drag **SetFields** onto the canvas on the right of the Queue step. Then connect the control out and control in ports as shown. 

    ![Relative](../images/RPA-Images/Drag-Set-Fields.gif)

 1. Click the **Settings icon** and select all the available elements so the robot can enter data into the input fields. Then click **OK**.

    ![Relative](../images/RPA-Images/Add-Set-Fields.gif)

 1. Connect each output port from the previous step to the corresponding input port of the SetFields step. It should look like the screenshot below.

    ![Relative](../images/RPA-Images/Connect-Ports-2.png)

    > To confirm that that data is mapped correctly, try clicking on each of the orange lines. This highlights the line to show what output data it uses and what input data it is mapped to.

 1. Click **Account Type** to access the methods available at the element level. 

    ![Relative](../images/RPA-Images/Click-Account-Type.png)

 1. For this element, an item needs to be selected from a list of options. Drag and drop the **SelectListItem** method onto the canvas and connect the control in and control out ports as shown.

    ![Relative](../images/RPA-Images/Select-List-Item.gif)

 1. Drag and drop the **AccountType** output from the Queue step and connect it to the **itemText** input port of the SelectListItem method.

    ![Relative](../images/RPA-Images/Select-Account-Type.gif)

 1. Click on the Enter element to display the methods available for the Enter button.

    ![Relative](../images/RPA-Images/Click-Enter.png)

 1. Drag and drop the method **Click** onto the canvas on the right of the previous step and connect the control in an control out ports.

    ![Relative](../images/RPA-Images/Click-Enter.gif)

 1. Now that the data has been entered into the application, the queue needs to be told that it was successful, so the work queue item is not processed a second time. This can be done using the UpdateWorkItem method. To view the Queue methods, double click **Queue** under Global Objects in the Project Explorer.

    ![Relative](../images/RPA-Images/Click-Queue-2.png)

 1. Drag and drop the UpdateWorkItem method onto the canvas on the right of the previous step and connect the control in and control out ports.

    ![Relative](../images/RPA-Images/Update-Work-Item.gif)

 1. To tell the queue which work item to update, drag and drop the WorkItemId data out port from the PickWorkItem step to the WorkItemId data in port on the UpdateWorkItem step.

    ![Relative](../images/RPA-Images/Connect-Workitem-ID.gif)

 1. Double click the input field that says **In Progress**.

    ![Relative](../images/RPA-Images/Click-In-Progress.png)

 1. Click the drop down and select **Success**. Then click **OK**.

    ![Relative](../images/RPA-Images/Mark-Success.gif)

 1. The last step of the process is to invoke a previously created SubFlow to update the Bank Account record on ServiceNow. This can be done easily using the InvokeSubFlow component. To use this component, first click **Toolbox** at the bottom left of the RPA Desktop Design Studio.

    ![Relative](../images/RPA-Images/Click-Toolbox-2.png)

 1. Type **Flow Designer** into the search bar to find the components related to Flow Designer.

    ![Relative](../images/RPA-Images/Type-Flow-Designer.png)

 1. Drag and drop the InvokeSubFlow component onto the canvas on the right of the previous step and connect the control in and control out ports as shown.

    ![Relative](../images/RPA-Images/Invoke-Subflow.gif)

 1. This component requires the internal name of the SubFlow to be entered as data in. Additionally, if the flow requires any inputs it will need to be added here. To see the SubFlow that will need to be triggered by the robot, navigate back to RPA Hub and type **Flow Designer** (1) into the filter navigator and click **Flow Designer** (2). This opens Flow Designer in a new tab.

    ![Relative](../images/RPA-Images/Click-Flow-Designer.png)

 1. Click **Subflows**.

    ![Relative](../images/RPA-Images/Click-Subflows.png)

 1. Click the SubFlow titled **Update HR Sync Field**.

    ![Relative](../images/RPA-Images/Open-Flow.png)
 
    > If this SubFlow is difficult to find, try changing the search field to **Name**, typing the name of the SubFlow, and then pressing enter. The SubFlow should show up first in the results.

 1. This is a simple flow that looks up a bank account record and marks the HR Sync checkbox as complete. If checked, it means that the data has been successfully entered into the legacy HR app. Click **SubFlow Inputs & Outputs** to see if the SubFlow requires any inputs.

    ![Relative](../images/RPA-Images/Update-HR-Sync.png)

 1. This SubFlow is being passed the SysID of the bank account record that needs to be updated. Make note of the **name** of the input field (1) and then click **Done** (2). The name is what needs to be entered into the Invoke SubFlow step as data in.

    ![Relative](../images/RPA-Images/sysID.png)

 1. Navigate back to the RPA Desktop Design Studio and double click **Name** in the InvokeSubFlow step.

    ![Relative](../images/RPA-Images/Enter-Flow-Name.png) 

 1. Paste **”global.update\_hr\_sync_field”** into the name field and press **Enter**. This value is the internal name of the SubFlow that needs to be invoked. It includes “global.” in front of the internal name to indicate which application scope it is in. The value should be spelled exactly as shown in the image below or the SubFlow will not be triggered.

    ![Relative](../images/RPA-Images/Enter-Flow-Name-2.png)

 1. To pass the input to the SubFlow, click the ***Settings Icon** above the step or double click on the title of the step that says **Flow Designer**.

    ![Relative](../images/RPA-Images/Click-Settings2.png)

 1. In the resulting window, click the **Green Plus Symbol**, type **sysid**, and change the input type to **string**. Then click **OK**.

    ![Relative](../images/RPA-Images/Create-Input.gif)

 1. Drag the **BankRecordSysid** value from the PickWorkItem step and drop it onto the **sysid** input on the InvokeSubFlow step.

    ![Relative](../images/RPA-Images/Drag-Sysid.gif)

 1. Connect the **End Port** after the InvokeSubFlow step as shown.

    ![Relative](../images/RPA-Images/End.png)

 1. The final automation should look like the image below.

    ![Relative](../images/RPA-Images/Results2.png)

 1. Once complete, the automation can be run by clicking **Run** on the left side of the Toolbar. 

    ![Relative](../images/RPA-Images/Click-Run2.png)

 1. Confirm that the HR Sync was completed by going back to the instance and clicking **Favorites** (1) and then clicking **bank accounts table** (2).

    ![Relative](../images/RPA-Images/Bank-Table.png)

 1. There is one record in this table, the bank account that was created for this lab. Click **BAN0001032** to open this record.

    ![Relative](../images/RPA-Images/Bank-Record.png)

 1. The HR Sync checkbox is checked to show that the sync is complete. The SubFlow was successfully triggered to change this field.

    ![Relative](../images/RPA-Images/Sync-True.png)
    >If the **Validated** checkbox is not checked, this means that the previous exercise titled **IntegrationHub Exercise** was not completed.

Congratulations! This concludes the RPA Desktop Design studio portion of the lab. The result is a simple automation that takes input from the RPA Hub Queue and enters the data into a legacy HR application.


## Creating a Bot Process (Optional Exercise)

Now that the automation is complete, a bot process needs to be created so the bot can be triggered from the ServiceNow instance. This section will cover publishing the package to the instance, creating a robot, and assigning a package and robot to a bot process.

 1. To publish the automation package to the lab instance, click **Publish** in the Design Studio toolbar.

    ![Relative](../images/RPA-Images/Publish.png) 

 1. Make sure the lab instance is selected (1) and click **Publish** (2).

    ![Relative](../images/RPA-Images/Connect-Instance.png) 

 1. On the next window, type the provided instance username (1) and password (2) and click **Log in**.

    ![Relative](../images/RPA-Images/Login.png)

 1. To confirm connectivity, click **Allow** on the following screen.

    ![Relative](../images/RPA-Images/Click-Allow.png)

 1. Click **Open UTL.RPA.HOST** to open the UTL.RPA.HOST application.

    ![Relative](../images/RPA-Images/Open-Host.png)

 1. A package can either be published as a new package or as a new version to an existing package. Because a Data Entry in HR System package already exists, click **New Version (to existing package)**.

    ![Relative](../images/RPA-Images/New-Version-Package.png)

 1. Select **Data Entry in HR System** as the package name (1), type **Lab Package** under Comments (2) and click **Publish** (3).

    ![Relative](../images/RPA-Images/Publish-Project2.png)

 1. Click **OK**.

    ![Relative](../images/RPA-Images/Click-OK.png)

 1. Navigate back to RPA Hub on the ServiceNow instance. A Bot Process has already been created for this automation, but it does not have the right robot or package assigned to it. First, let's add the lab robot to RPA Hub. On the RPA Hub list view, click **Robots**.

    ![Relative](../images/RPA-Images/Click-Robots2.png)

 1. At the top right side of the page, click **New**.

    ![Relative](../images/RPA-Images/Click-New-Robot.png)

 1. Type **Lab Robot** under Name (1), type the **lab VM machine name** under Machine Name (2), and click **Save** (3). The machine name or hostname can be found on the lab VM desktop background. It can also be found on the lab instance by clicking **Favorites** (1) and then clicking **MID Servers** (2) The machine name is desplayed on the resulting page under **Host name** (3), as seen in the second and third images below.

    ![Relative](../images/RPA-Images/Create-Robot.png)

    ![Relative](../images/RPA-Images/Mid2.png)

    ![Relative](../images/RPA-Images/hostname2.png)

 1. The system creates a robot and assigns it the **New** state. Next, the Unattended Robot agent needs to be connected from the lab VM. On the lab VM, double click **Unattended Robot** on the Desktop.

    ![Relative](../images/RPA-Images/Unattended-Robot.png)

 1. Unattended Robot opens in the Windows System Tray. Click the **System Tray arrow** (1), right click the **Unattended Robot icon** (2) and click **Settings** (3).

    ![Relative](../images/RPA-Images/System-Tray2.png)

 1. Click **Basic** under Authentication (1). Then type the **instance URL** under RPA Hub (2), the **instance username** under Username (3), and the **instance password** under Password(4). Click **Connect** (5) to connect to the instance.

    ![Relative](../images/RPA-Images/Connect-Robot.png)

 1. If the unattended robot is successfully connected, it will say so on the Unattended Robot window and a notification will appear saying that the robot is connected using basic authentication.

    ![Relative](../images/RPA-Images/Connected1.png)

    ![Relative](../images/RPA-Images/Connected2.png)

 1. Now, close the Unattended Robot window and navigate back to RPA Hub. The state of the Lab Robot has now been changed to **Available**.

    ![Relative](../images/RPA-Images/Available-Robot.png)

 1. Now that the robot has been added to RPA Hub, let's modify the Bot Process. Navigate back to the RPA Hub list view and click **Bot Process**.

    ![Relative](../images/RPA-Images/Click-Process.png)

 1. Click **Data Entry in Legacy HR System** to open the Bot Process.

    ![Relative](../images/RPA-Images/Click-Bot-Process.png)

 1. Click **Details** to select the correct package.

    ![Relative](../images/RPA-Images/Click-Details.png)

 1. Select **Data Entry in HR System** under Package (1) and **10002** under Package Version (2).

    ![Relative](../images/RPA-Images/Set-Package.png)

 1. Click **Save**.

    ![Relative](../images/RPA-Images/Click-Save2.png)

 1. Click **Credential Sets**.

    ![Relative](../images/RPA-Images/Click-Credentials.png)

 1. Click **New**.

    ![Relative](../images/RPA-Images/New-Cred.png)

 1. Type **Lab VM Credentials** under Name (1), **”Your_Hostname”\Administrator** under Windows Username (2), and the **lab password** under Password (3). Then click **Save** (4). Make sure to use the hostname of the lab VM for step 2.

    ![Relative](../images/RPA-Images/Create-Cred.png)

 1. Navigate back to the bot process and click **Assigned Robots**.

    ![Relative](../images/RPA-Images/Assigned-Robot.png)

 1. Click **Add**.

    ![Relative](../images/RPA-Images/Add.png)

 1. In the list of available robots, select **Lab Robot** (1) and click **Add** (2).

    ![Relative](../images/RPA-Images/Select-Robot.png)

 1. Click **Process Robot Credentials**.

    ![Relative](../images/RPA-Images/Process-Creds.png)

 1. Click **New**.

    ![Relative](../images/RPA-Images/New-Cred.png)

 1. Select **Lab VM Credentials** under Credential Set (1) and **Lab Robot** under Robot (2). Then click **Save** (3).

    ![Relative](../images/RPA-Images/Save-Creds.png)

 1. Now that the robot and VM credentials have been added to the bot process, the process can be started from the instance. To do this, navigate back to the bot process and click **Start Process**.

    ![Relative](../images/RPA-Images/Start-Process2.png)

 1. Finally, select **Lab Robot** (1) and click **Start Process** (2).

    ![Relative](../images/RPA-Images/Select-Robot2.png)

 1. This triggers the Unattended Robot and starts the bot process on the lab VM.

    ![Relative](../images/RPA-Images/Starting.png)

    > The bot process will not enter data into the application if the work queue item has already been processed and there are no work items in the pending state. To re-run the process, the work queue item needs to be returned to the pending state.

 1. To reassign the work queue item, first click **Queues** in the RPA Hub list view and open the **Direct Deposit** queue.

    ![Relative](../images/RPA-Images/Pending.png)

 1. Click **Work Queue Items**.

    ![Relative](../images/RPA-Images/Pending1.png)

 1. Click the **BAN0001032** work queue item.

    ![Relative](../images/RPA-Images/Pending2.png)

 1. Change the status to **Pending** (1) and click **Save** (2). Now the bot process will complete when ran from RPA Hub.

    ![Relative](../images/RPA-Images/Pending3.png)

Congratulations! This concludes this RPA exercise. Now bot processes can be triggered from the ServiceNow instance. They can be triggered manually and can even be triggered via a workflow using the RPA Hub spoke.

[Previous exercise][IHub Lab]{: .btn .mr-4 }

[Auto Center Lab]: /docs/lab_autoengine/automation_center/
[Doc Intel Lab]: /docs/lab_autoengine/doc_intel/
[IHub Lab]: /docs/lab_autoengine/ihub/
[RPA Lab]:  /docs/lab_autoengine/rpa/