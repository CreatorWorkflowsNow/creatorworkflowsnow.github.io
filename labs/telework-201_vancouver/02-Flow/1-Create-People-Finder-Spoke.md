---
title: "Create People Finder Spoke" 
sidebar_label: "1. Create People Finder Spoke"
hide_table_of_contents: false
---
# Create People Finder Spoke

We will create a re-usble integration to the finance department's People Finder Open API, so that we can access this data in our Main flow.

## Open Flow Designer to use Spoke Generator to create the People Finder Integration

1. Go to the tab with the ServiceNow Admin Home Page (your title may be different).  
![](./images/04-1-return-to-admin-page.png)

2. Open Flow Desginer from the All Menu

   1. Click the **All** menu
    
   2. Search for "flow designer" 
    
   3. Click on: Process Automation > Flow Designer
![](./images/04-2-flow-designer.png)

3. Create New Spoke

   1. Click on the <span className="button-purple">Create new</span> button. 

   2. Select "Spoke" from the list.
![](./images//04-3-create-spoke.png)

4. Setup General Information for the Spoke (💡 double-click to select, copy & paste into the form).

   | |Field Name                | Field Value
   |-|--------------------------| --------------
   |<span className="large-number">➊</span>|Drag and drop the icon in the telework_lab files folder we downloaded earlier | people_finder.png
   |<span className="large-number">➋</span>|Spoke Name (App scope name will auto-populate) | People Finder
   |<span className="large-number">➌</span>|Description | API to find people in a remote system
   |<span className="large-number">➍</span>|Click on the <span className="button-purple">Create and continue</span> button.  
![](./images/04-4-spoke-general-info.png)

5. Specify how we want to build our Spoke

   1. Select OpenAPI

   2. Click on the <span className="button-purple">Continue</span> button.
![](./images/04-5-how-build-spoke.png)

6. For the OpenAPI source, click <span className="button-white-grey-border">Import new</span>  
![](./images/04-6-openapi-import-new.png)

7. Fill the user form with the following values (💡 double-click to select, copy & paste into the form).

   | |Field Name                | Field Value
   |-|--------------------------| --------------
   |<span className="large-number">➊</span>|Import method    | Import from URL
   |<span className="large-number">➋</span>|OpenAPI URL | https://low-code.guide/api-specs.json
   |<span className="large-number">➌</span>|Click on the <span className="button-purple">Import</span> button.  
![](./images/04-7-import-new-openapi.png)

8. For the Connection alias, click on the <span className="button-white-grey-border">Create new</span> button.  
![](./images/04-8-connection-alias-create-new.png)

9. Fill the user form with the following values (💡 double-click to select, copy & paste into the form).

   | |Field Name                | Field Value
   |-|--------------------------| --------------
   |<span className="large-number">➊</span>|Connection alias name | People Finder
   |<span className="large-number">➋</span>|Authentication Configuration Template | API Key Template
   |<span className="large-number">➌</span>|Click on the <span className="button-purple">Create</span> button.  
![](./images/04-9-create-new-connection-alias.png)

10. To continue, click the <span className="button-purple">Generate operations</span>
![](./images/04-10-generate-operations.png)

1. Specify how we want to build our Spoke

   1. Select all actions

   2. Click on the <span className="button-purple">Publish</span> button. 
![](./images/04-11-actions-to-create.png)

12. Click the "GET /user" link to view the action we just created  
![](./images/04-12-get-user-action.png)

13. Before we can test and use our spoke, we need to set the Base URL for the Connection. Click to expand the OpenAPI step  
![](./images/04-13-expand-openapi-step.png)

14. Click the plus sign next to the Connection Alias  
![](./images/04-14-connection-alias.png)

15. Set up the HTTPs(s) Connection (💡 double-click to select, copy & paste into the form).

   | |Field Name                | Field Value
   |-|--------------------------| --------------
   |<span className="large-number">➊</span>|Name | People Finder
   |<span className="large-number">➋</span>|Connection alias | x_snc_people_finde.People_Finder
   |<span className="large-number">➌</span>|Connection URL | https://low-code.guide/api
   |<span className="large-number">➍</span>|Click on the <span className="button-purple">Submit</span> button.  
![](./images/04-15-https-connection.png)

16. The Base URL should now be populated. Click on the <span className="button-white-grey-border">Test</span> button.  
![](./images/04-16-test-action.png)

17. Test the action with David Loo's email (💡 double-click to select, copy & paste into the form).

   | |Field Name                | Field Value
   |-|--------------------------| --------------
   |<span className="large-number">➊</span>|email | david.loo@example.com
   |<span className="large-number">➋</span>|Click on the <span className="button-purple">Run Test</span> button.  
![](./images/04-17-test-actio-modal.png)

18. When the test completes, click the link to view the execution results  
![](./images/04-18-test-action-complete.png)

19. Click on the RUNTIME VALUE link  
![](./images/04-19-test-output.png)

20. Review the JSON results. Note the "telework-certified" value. Click the <span className="button-white-purple-border">Close</span> button to continue.  
![](./images/04-20-action-json.png)

21. Close the Execution Details tab  
![](./images/04-21-close-execution-details.png)

22. Close the Test Action model by clicking the <span className="button-white-purple-border">Cancel</span> button.  
![](./images/04-22-close-test-action.png)

23. Click on the <span className="button-purple">Save</span> button to save the GET /user spoke action.  
![](./images/04-23-save-action.png)

24. Click the <span className="button-white-purple-border">Publish</span> button to publish the spoke, so it will be available to call from our Main Flow.  
![](./images/04-24-publish-action.png)

25. Confirm publication of the action by clicking on the <span className="button-purple">Publish</span> button.   
![](./images/04-25-confirm-publish-action.png)

