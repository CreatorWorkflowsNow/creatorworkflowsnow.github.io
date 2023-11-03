---
id: overview
title: "Integration Hub: Spoke Generator"
pagination_label: "Overview"
sidebar_label: "Overview"
hide_table_of_contents: true
draft: false
---

## Introduction

IntegrationHub is the central place on the platform for consuming, creating, and managing integrations on your ServiceNow instance. In the event that you are seeking to connect a workflow to an external system, but ServiceNow or ServiceNow technology partners do not offer an out-of-the-box integration (Spoke) for it, you can easily create your own. IntegrationHub provides numerous Action Steps to connect your workflow to external systems that use protocols such as REST, PowerShell, SSH, etc. In this lab, we will focus on REST integration.

## Goal 

In this lab, we will showcase the new 'Spoke Generator' capability. This feature enables you to generate new spokes and spoke actions for third-party APIs that adhere to the OpenAPI specification. You will be using a provided YAML file.

:::note
A YAML file for OpenAPI specs is a user-friendly configuration file that defines the structure, endpoints, and details of a RESTful API. It makes it easier for developers to document and communicate the API's design. The spoke generator can automatically utilize this YAML file to create spoke actions.
:::

   
This innovative feature, the "Spoke Generator," significantly reduces the time required to create a new integration.
