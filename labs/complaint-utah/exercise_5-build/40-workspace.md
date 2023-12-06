---
id: workspace
title: Create Investigations Workspace
hide_table_of_contents: true
sidebar_label: Create Investigations Workspace
sidebar_position: 4
draft: false
---

We've got our data, now we need to work on the experience for our investigations team. Similar to John Jason in the earlier lab, we'll configure our workspace to ensure we don't miss important investigations and provide our customers with the best customer experience.

1. On the app homepage, click on **+Add** next to **Experience**.
![](../images/2023-09-11-12-57-48.png)


2. Select **Workspace** from the next screen and then **Begin**
    ![](../images/2023-09-11-12-58-55.png)
    ![](../images/2023-09-11-13-00-24.png)


3. Leave everything as default on the next screen
![](../images/2023-09-11-13-01-28.png)


4. Ensure **Complaint Investigation** is listed as the **Primary table**. For **Secondary tables**, choose **Complaint Case** so we can see those on our workspace as well
![](../images/2023-09-11-13-05-51.png)


5. Once the Workspace has been completed, click **Done**
![](../images/2023-09-11-13-08-42.png)


6. Back on our App Home page, click on **Preview** next to our new Complaints Investigation Workspace.
![](../images/2023-09-11-13-10-26.png)


7. Since we uploaded our existing spreadsheet, you should see some existing records in our workspace. Your workspace should look similar to this one:
![](../images/2023-09-12-08-48-17.png)


8. Let's use Workspace Builder to configure this workspace to our needs. Click **Edit** at the top of the screen
![](../images/2023-09-12-08-49-34.png)


9. Click the **My Tasks** component then click the **Configure** button
![](../images/2023-09-12-08-51-34.png)


10. On the **Configuration** pane that appears, find the **Header and border** section and click the down arrow to expand it. Change the **Chart title** to **My Investigations** then click **Save**
![](../images/2023-09-12-08-54-24.png)


11. Repeat step 10 for the remaining widgets replacing the word Tasks with Investigations. Your workspace should look like similar to the below workspace when complete.
![](../images/2023-09-12-08-58-14.png)
:::warning
Before we move on **SAVE YOUR WORK**!
:::


12. Next, let's add a new Data Visualization widget to our workspace so we have some visability into the overall landscape of Complaints Investigations. Click on **Add new element** at the top and choose **Data visualization**
![](../images/2023-09-12-09-00-08.png)


13. The new component will be added to the bottom of the workspace by default. Drag it up just above **My Work** and resize it to match the **My Work** list below.
![](../images/2023-09-27-12-59-48.png)


14. Now let's configure the new widget. On the configuration pane, choose **Vertical Bar** from the **Visualization type** list.
![](../images/2023-09-27-13-00-45.png)


15. Find and expand the **Header and border** section. For the **Chart Title** enter:
    
 ```
 Complaint Cases by Account
 ``` 
![](../images/2023-09-27-13-12-38.png)


1.  Under the **Data** section, click **Add data source**
![](../images/2023-09-27-13-04-42.png)


17. On the **Add data source** page, search for **Complaint Case** and click on the option when it appears.
![](../images/2023-09-27-13-06-26.png)


18. Under **Predefined conditions** choose **ComplaintCases.Open** and click **Run**. Ensure that data is displayed then click **Add this source**
![](../images/2023-09-27-13-07-55.png)


19. Save your work and click **Exit editing mode**
:::info
Before saving, it may be necessary to do some resizing of the compomnents on the screen. Feel free to do so as needed.
:::
![](../images/2023-09-27-13-15-18.png)


20. Your dashboard should look similar to the screenshot below
![](../images/2023-09-27-13-16-24.png)


21. Now that we have our homepage complete, let's take a look at the record pages and ensure we can see the activities that take place on these investigation records. Back on your **App Home** screen, find your workspace under the **Experiences** section, click the **...** on the right and click **Edit**
![](../images/2023-09-27-14-50-00.png)


22. This takes us to **Workspace Builder**. Click on **Get started** if you get a pop-up screen welcoming you. At the top under **Record pages** click on **Complaint Investigation**
![](../images/2023-09-27-14-52-28.png)


23. Click on **Record details** in the left panel then toggle **Activity Stream** in the right panel. You should see a message indicating that we have successfully activated the activity stream
![](../images/2023-09-27-14-53-59.png)


**That's it!** You've just successfully configured a new dashboard for Complaints Investigations team and added features to the form that will help the team work more efficiently in the complaints investigation process!

Feel free to add additional data visulization and components to get a better feel for the flexibility of the dashboards and workspaces.
