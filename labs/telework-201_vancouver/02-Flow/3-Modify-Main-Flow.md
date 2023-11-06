---
title: "Modify Main Flow" 
sidebar_label: "3. Modify Main Flow"
hide_table_of_contents: false
---
# Modify the Telework Case Main Flow

Now that we have created the People Finder Spoke and our Auto Approval Decision Table, let's modify the Telework Case Main Flow to allow auto-approval for those that were pre-certified or have requested 3 days or less for Situational Telework.

## Open the Main Flow and add our changes

1. Return to the App Home tab in App Engine Studio.

![](./images/04-03-01-AppHome.png)

2. Open the Main flow by clicking on the row under Logic and Automation.

![](./images/04-03-02-selectmainflow.png)

3. Toggle the Flow Designer view to Process View.

![](./images/04-03-03-toggleview.png)

4. First, we want to add a Flow Variable to store the status of auto approval.

    1. Click the ... button next to the Save button on the top-left of your screen.

    2. Select "Flow Variables" from the drop-down.

![](./images/04-03-04-flowvariables.png)

5. Click the plus sign ⨁ to add a variable.

![](./images/04-03-05-addflowvariable.png)

6. Set up the flow variable.

    | |Field Name                | Field Value
    |-|--------------------------| --------------
    |<span className="large-number">➊</span>|Label |Approved
    |<span className="large-number">➋</span>|Name |approved
    |<span className="large-number">❸</span>|Type | True/False
    |<span className="large-number">❹</span>|Click on the 🆇 button to close.

7. Before our first step, we want to call the People Finder Spoke. Hover above the "Ask for Approval" step, and click the plus sign ⨁.

![](./images/04-03-07-addspoke.png)

8. Add the People Finder Spoke

    1. Select Action as the step type.

    2. Search for "people finder".

    3. Select the "GET /user" action.

![](./images/04-03-08-addspokeaction.png)

9. 

![](./images/04-03-09-dotwalkspoke.png)

10.

![](./images/04-03-10-dotwalkspoke.png)

11.

![](./images/04-03-11-donespoke.png)

12.

![](./images/04-03-12-adddecision.png)

13.

![](./images/04-03-13-adddecision.png)

14.

![](./images/04-03-15-dotwalkdecision.png)

15.

![](./images/04-03-16-dotwalkdecision.png)

