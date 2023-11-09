---
title: "Import Telework Application" 
sidebar_label: "1. Import Telework App"
hide_table_of_contents: true
---

## Import Telework App

We need to import the Telework App Management xml file.  We will be using this application (that was built in the 101 lab) as our base and building additional functionality into the application.

**Before starting, download this XML file:**
[Telework Case Management](./Telework_App_File/Telework%20Case%20Management%20v1.0.1.xml)  


Steps to Importing Application  

>1. Go to 'Retrieved Update Sets'  

>2. Scroll to 'Releated links' and click on 'Import Update Set from XML'  

>3. Upload Update Set  

>4. Find the record you just imported: State = 'Loaded'  

>5. Preview Update Set 

>6. Accept/Skip Remote Updates  

>7. Commit Update Set  
  
    
      
#
# Step 1

>1. Go to All  
>2. Then under 'System Update Sets' go to: **Retrieved Update Sets**  
![](./images/Step%201.png)  

#
# Step 2

>1. Scroll to the bottom of the list
>2. Click on related link: **Import Update Set from XML**
![](./images/Step%202.png)  

#
# Step 3  

>1. Click on 'Choose File'
>2. Find and choose the file you downloaded earlier "Telework Case Management...xml"
>3. Click on 'Upload'
![](./images/Step%203.png)  

#
# Step 4  

>1. Right click on 'Committed' (any record)
>2. Choose "Filter Out"  
![](./images/Step%204.png)  

>3. Click on retrieved update set "Telework Case Management..."  
![](./images/Step%205.png)  

#
## Step 5

>1. Click on 'Preview Update Set'  
![](./images/Step%206.png)  

>2. Watch the bar progress...until 100%
>3. Click on 'Close' (there are errors, so it's ok that it says 'Failed')  
![](./images/Step%207.png)  

#
## Step 6

**For more information regarding update sets and use of the different options, here are some helpful links:**

[ServiceNow Update Sets](https://docs.servicenow.com/bundle/vancouver-application-development/page/build/system-update-sets/concept/system-update-sets.html)  
[Update Set Super Guide](https://www.servicenowelite.com/blog/2016/8/7/update-sets)  

>1. Scroll to the related lists
>2. Select 'All' records under 'Update Set Preview Problems'
>3. Expand 'Actions on selected rows' option box
>4. Click on 'Accept Remote Update'

![](./images/Step%208.png)  




