---
id: deployment-approval
title: Deployment Approval
---
# Exercise: Approve and Deploy Sydney's App

##### Estimated Time to Complete: 15 minutes

## Overview

When Sydney submitted the Deployment Request in App Engine Studio, it triggered an email to Jayne prompting her to take action.

:::info
**SUBJECT:** Deployment Request DEP0010002 Approval Request

![relative](/img/lab-aemc/2023-07-11-22-07-39.png)
:::

:::caution
You should still have a browser tab for **Prod** opened to App Engine Management Center in which you are impersonating Jayne. 
 
If not, follow these quick instructions to be sure:
 
1. Click the avatar in the top-right, then click **Impersonate another user**.
 
2. Type **Jayne Nigel** and click **Jayne Nigel**.
 
3. Click **Impersonate user**.
 
4. Click **All** >> type **app engine management** >> click **App Engine Management Center**.
 
This will open AEMC in a new browser tab.
:::

## Instructions

:::warning
>This section is to be completed in your **Production** instance where AEMC is running. That is your controller instance. 
:::

1. Click the **1** above **Deployment**.

![relative](/img/lab-aemc/2023-07-11-22-12-55.png)

2. Click the **DEP** ticket to open Sydney's Deployment Request. 

![relative](/img/lab-aemc/2023-07-11-22-15-03.png)

3. Click **Approve** in the top-right of the page. 

![relative](/img/lab-aemc/2023-07-11-16-56-47.png)

![relative](/img/lab-aemc/2023-07-11-17-01-13.png)

4. To check the status of the Deployment... Click the related list **Deployment Environment R..**

![relative](/img/lab-aemc/2023-07-11-22-17-50.png)

5. Occasionally click the **Refresh** button to check on the progress. Once the app is deployed to the Prod environment a record will appear here. 

![relative](/img/lab-aemc/2023-07-11-22-18-45.png)

:::caution
This is a good point to go take a five minute break or stretch. It can take several minutes or more for the app to deploy to the next environment.
:::

6. Eventually, you will see a record appear for your deployment. 

![relative](/img/lab-aemc/2023-07-11-22-20-02.png)

If **Has Error** is **false**, then the app deployed successfully to the next environment. 

## ***How can Jayne confirm if the app actually deployed?***

:::caution
As part of the automated setup for your lab instance, Jayne was granted the role ```sn_appclient.app_client_company_installer```.
 
This is a base Platform role that has existed for many years that allows a non-admin user to view apps in My Company Applications.
 
For more information see **[Product Docs: Instance-specific deployment user roles](https://docs.servicenow.com/csh?topicname=delegated_deployment_user_roles.html&version=latest)**
:::

17. Click **All** >> type 'My Company Applications' >> Click **My Company Applications**.

![relative](/img/lab-aemc/2023-07-11-22-22-05.png)

:::caution
My Company Applications shows you the applications that have been published to your company's App Repo as well as what is installed on your current instance. 
 
For more information see **[Product docs: ServiceNow application repository](https://docs.servicenow.com/csh?topicname=app-repo.html&version=latest)**
:::

20. Click the **Installed** tab.
*If the app does not appear in the list, then give it a few minutes to refresh.  There is an icon in the top-right that will stop spinning when the page is done loading.*

![relative](/img/lab-aemc/2023-07-11-22-23-47.png)

![relative](/img/lab-aemc/2023-07-12-08-29-21.png)

## Lessons Learned

You have made it!! You deployed an app with the click of a button!

That completes the App Engine Governance Lab!

## Got feedback?

Please consider taking the post-workshop survey, thanks!

##### [Post Lab Survey ↗](https://crewteam.service-now.com/esc?id=workshop_survey&type_id=ff8cc99e877d21106af8ec6e0ebb3546)

## Want to learn more? 

Feel free to explore the Additional Content on the side of the page. 