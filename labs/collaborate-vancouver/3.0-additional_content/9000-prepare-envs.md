---
id: prepare-env
title: Prepare Environments
hide_table_of_contents: true
---

# Prepare Environments

Before installing App Engine Studio, review all platform requirements and define an organizational instance strategy to prepare for successful installation and configuration.

## Review platform requirements
- App Engine license required
  - *Contact your ServiceNow Account Manager for additional information on App Engine, or see [ServiceNow App Engine](https://www.servicenow.com/products/now-platform-app-engine.html)*
- Instances must be on the same release (Ex. Utah)
- The admin role is required in all instances to install App Engine Studio and dependent applications from the ServiceNow Store

## Define instance strategy

When defining the instance strategy for App Engine Studio, it is recommended to leverage one production instance and at least two sub-production instances – however, App Engine Studio can support any number of sub-production instances as part of an instance strategy.

Applications are deployed to the production instance once developed and successfully tested in sub-production instances. One sub-production instance will serve as the development environment and the other as the test environment.

If your organization uses sandbox or staging environments in addition to test and development, they can be incorporated into the instance strategy accordingly based on organizational needs.

![relative](/img/lab-aemc/2023-07-07-12-06-36.png)
*Example instance strategy with one production instance and three sub-production instances*

Sub-production instances that are most similarly configured to your production instance are the best candidates for test and stage environments. This way, administrators can more accurately find issues that may arise if the application is deployed to production.

:::note
For more information see **[Product Docs: Instance Strategy for App Engine Studio](https://docs.servicenow.com/csh?topicname=aes-instance-strategy.html&version=latest)**
:::
