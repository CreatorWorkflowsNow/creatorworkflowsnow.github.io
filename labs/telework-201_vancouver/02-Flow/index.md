---
title: "Flow: Overview" 
sidebar_label: "Overview"
pagination_label: "Flow" 

---

## Purpose

In this exercise, we will learn how to implemenent an integration using **Spoke Generator**, how to create a **Decision Table** and how to leverage them in our main flow to add straigh-through proccesing.

Amanda has learned the finance department has pre-certified employees for telework. In the case of transfers, requests for telework should be automatically approved. This data has not been transferred to the ServiceNow instance, but the finance department has published an OpenAPI that can be used to look-up employee data based on their email address.

Managers have also informed Amanda that when employees apply for 3 days or less of situational telework, the requests can be automatically approved.

## In this part of the exercise, we will:

- Create a re-usable integration to the finance department using **Spoke Generator**.
- Create a **Decision Table** to check if the telework request can be automatically approved.
- Modify our Main Flow to by-pass manager approval if the employee was pre-certified for telework.

# Notes 

 - 
 