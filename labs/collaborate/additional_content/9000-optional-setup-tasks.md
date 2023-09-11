---
id: optional-tasks
title: Optional Setup Tasks
---

# App Engine Studio Optional Setup Tasks to Consider

:::caution
This part of the lab is for information purposes only. No activity required.
:::

As part of your App Engine Studio setup, you will want to potentially explore and configure the following:

---
## Connect spokes in Dev Environment

:::caution
This step is not required as part of the initial App Engine Studio setup.
:::

A spoke is a scoped application that contains Flow Designer or Integration Hub actions or Subflows.

System Administrators can connect IntegrationHub spokes to App Engine Studio, allowing developers to integrate custom applications with third-party systems. For example – connecting the Slack spoke allows developers to post a message containing Incident details to a specific Slack channel each time a high-priority Incident is created.

Many Integration Hub spokes are available, but not all need to be connected to App Engine Studio. Review some of the common spokes below and install them based on organizational needs.

<table class="myTable">
  <thead>
    <tr>
      <th>Integration Hub Spoke</th>
      <th>Installing this spoke provides developers</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Microsoft Teams</td>
      <td>Actions to support cross-functional communications and collaborations in Microsoft Teams.</td>
    </tr>
    <tr>
      <td>Slack</td>
      <td>Actions to automate the management of Slack channels, users, and software subscriptions.</td>
    </tr>
    <tr>
      <td>Jira</td>
      <td>Actions to automate tasks in Jira for managing users, issues, projects, and software development lifecycle.<br/>Synchronize data in ServiceNow with Jira to increase collaboration between ServiceNow users and DevOps teams.</td>
    </tr>
    <tr>
      <td>Gmail</td>
      <td>Actions to automate email and label management in Google Gmail.</td>
    </tr>
    <tr>
      <td>Azure AD</td>
      <td>Actions to automate Microsoft Azure Active Directory tasks for user management, authentication, and group membership.</td>
    </tr>
    <tr>
      <td>Twitter</td>
      <td>Actions to automate posting messages and media content to a corporate Twitter news feed.</td>
    </tr>
    <tr>
      <td>MS 365 Excel</td>
      <td>Actions to automate worksheet, table, and cell management in Microsoft Excel.</td>
    </tr>
  </tbody>
</table>

As your organization’s citizen development program matures and scales, additional spokes can be installed and connected based on application demand and use cases.

:::note
For more information on integrations with third-party systems, see **[Product Documentation: Integration Hub](https://docs.servicenow.com/csh?topicname=integrationhub.html&version=latest)**
:::

---
## Review Flow Designer access settings 

:::caution
This step is not required as part of the initial App Engine Studio setup.
:::

Review and update App Engine Studio developer access settings in the development environment to Flow Designer Resources and update as necessary.

Developers can leverage Flow Designer capabilities while creating logic and automation for custom applications.

Consider restricting developer access to Flow Designer Resources using content filtering for Flow Designer. This allows administrators to manage access to Flow Designer resources and specify which features App Engine Studio users can leverage while building applications.

![relative](/img/lab-aemc/2023-07-07-16-49-07.png)


Flow Designer access from App Engine Studio can be updated later to provide developers with the editing capabilities that best suit their experience and needs.

:::note
For more information on Flow Designer resources, see **[Product Documentation: Content Filtering for Flow Designer](https://docs.servicenow.com/csh?topicname=content-filtering-flow-designer.html&version=latest)**
:::

---
## Review Service Catalog access settings

:::caution
This step is not required as part of the initial App Engine Studio setup.
:::

Review App Engine Studio developer access in the development environment to the Catalog Builder tool’s catalog item templates and catalogs/categories and update access as necessary.

By default, App Engine Studio developers can leverage catalog templates to quickly create record producers or catalog items. Developers can also publish catalog items to any catalog. If you wish to limit access to templates or restrict publishing access to catalogs or categories, update the access accordingly in Catalog Builder.

![relative](/img/lab-aemc/2023-07-07-16-53-48.png)

Catalog access from App Engine Studio can be updated at a later point to modify developer access to App Engine Studio catalogs, categories, and catalog templates.

For more information on creating or editing catalog items, see **[Product Documentation: Catalog Builder](https://docs.servicenow.com/csh?topicname=catalog-builder.html&version=latest)**

---

## Configure Instance Scan 

:::caution
This step is not required as part of the initial App Engine Studio setup.
:::

Deploy custom applications with confidence by setting up Instance Scan definitions to monitor instance health throughout the deployment process. Instance scans interrogate your instance for configurations and health issues, allowing administrators an opportunity to address best practices and avoid similar configuration issues in the future.

Instance Scan definitions are executed automatically when App Engine Studio applications are promoted to the **Testing** instance. Instance Scan results will be logged in the Notes section of the Deployment Request record.

The App Engine Studio application does not ship with any out-of-box Instance Scan definitions (however, a few Instance Scan definitions are installed with the Deployment Pipeline plugin to run basic performance checks).

Work with professional ServiceNow developers to configure Instance Scan definitions and enforce best practices in your environments.

![relative](/img/lab-aemc/2023-07-07-16-56-31.png)

**Enable and configure Instance Scan properties in your production instance if you plan to clone!**

:::note
For more information on managing instance health scans, see **[Product Documentation: Instance Scan](https://docs.servicenow.com/csh?topicname=hs-landing-page.html&version=latest)**
:::
