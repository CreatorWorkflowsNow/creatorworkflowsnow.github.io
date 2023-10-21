---
id: exercise-5-1
title: "Exercise 5.1: Putting it all together - Testing our application"
sidebar_label: 5.1. Testing
hide_table_of_contents: true
draft: false
---

**Duration: 15 minutes**

1. Head back into the main ServiceNow interface


2. On the global search, enter **billie.cowley** and click **View results**
![](images/searchbillie.png)


3. Click **Billie Cowley**
![](images/selectbillie.png)


4. On Billie's user record, click the **Roles** tab below, then click **Edit**
![](images/billierecord.png)

:::info
Also notice on the screenshot above that Billie's manager is Krystle Stika. You won't be able to see this on your screen, but note that this has been preconfigured for you.
:::

5. Under **Collection**, search **x_snc_travel**, you should see the two roles you created for your custom application.


6. Grant the **user** role to Billie by moving it into the **Roles List**
![](images/grantrole.png)
    

7. Click **Save**

:::info
This is actually not best practice, but only for the purposes of today's activity. In a real implementation, it would be best to assign a role to a group, and then assign users to that group so they all inherit that role.
:::

8. Click on the profile picture on the top right, and click **Impersonate user**
![](images/impersonateuser.png)


9. Search and select **Billie Cowley**


10. Click **Impersonate user**
![](images/billie.png)


11. Close the pop-up screen


12. Copy the current URL of the page, and open a new Browser tab


13. Paste the URL, and replace everything after **service-now.com** with **/esc**

:::tip
**if the copied URL is**: 

**https://sad-oct-123-001.lab.service-now.com/**now/nav/ui/classic/params/target/ui_page.do%3Fsys_id%3De7766625074130102b8affa08c1ed037

**change it to:**

**https://sad-oct-123-001.lab.service-now.com/**esc 
TODO: Change GIF
![](images/getsp.gif)
:::

14. The Employee Center Pro home page should now open


15. Under **How can we help?**, search for **Travel request**
TODO: Change Screenshot
![](images/searchtrv.png)


16. Click the **Search icon**


17. The top result should return the form we had created in Exercise 2
TODO: Change screenshot
![](images/trvreqsearch.png)


18. Click **Raise a travel request**


19. Confirm that the form appears as expected, then fill in all the fields
TODO: Update Screenshot (add estimated arrival, take out number of days)
![](images/fillform.png)


20. Click **Submit**


21. The next screen can be used to track the status of the request and add attachments
TODO: Change Screenshot
![](images/trackreq.png)


22. Go back to the ServiceNow main interface, and **End impersonation**
![](images/impanother.png)
    

23. Under **All**, search and select **My Approvals**
![](images/myapprovals.png)


24. Remove the filter by clicking **All**
![](images/clickall.png)


25. Filter by the latest created approval date by clicking **Created**


26. Click on the **Requested** record for **Krystle Stika** as the **Approver**
![](images/applist.png)


27. Review the details you submitted on the bottom of the form, then click **Approve**
![](images/approve.png)


28. You will be brought back to the list view


29. Click on the Approved record for your Travel request, if you followed all the steps so far, this should be the first record created: TRVREQ0001001
![](images/clicktrvreq.png)


30. On the record, notice that the **State** was automatically changed to **Closed Complete**, as per our approval flow that was designed
![](images/closedcomplete2.png)
