---
id: exercise-2-0-overview
title: Overview
---

# Departmental Services Data Model

The first step in creating an application is defining the data. This lab will utilize the table inheritance feature of the platform.

We will be creating a Dept Task table that will be the basis of all other tables. The Dept Task table will extend the system Task table. This will allow the Dept Services application to access base fields and capabilities of the platform such as assigning requests to users and asking for approvals.