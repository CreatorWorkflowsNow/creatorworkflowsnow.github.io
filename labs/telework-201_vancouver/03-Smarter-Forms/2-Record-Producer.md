---
title: "Update the Record Producer" 
sidebar_label: "2. Record Producer"
hide_table_of_contents: true
---

# Record Producer

Verify Manager and Auto-populate 'Requested For' field

One of the complaints Amanda has had is sometimes the requestors don't have a manager listed or if there is one listed, it's the wrong one. This results in a delay of approval and ultimately a poor experience for the requestor.

The solution we've decided on is to list the requestors manager on the record producer, so they can either leave it or change it or fill it in.

This will require a new field on the telework table, changing some of the record producer questions, a script to auto populate a 'requested for' field, and using the 'Auto Populate' section on the record producer. Sounds like a lot, but it will go quickly.
##

Here are our steps:

>1. Create a new field on the telework case table called "Manager" and "Requested For"

>2. Create a new question on the record producer for "Manager" and "Requested For"

>3. Create a script to auto-populate the 'Requested For' with the logged in user name using design studio

>4. Change the flow to work with these new fields

##

### Creating new fields on the telework case table

In app engine studio in the Telework Case application:

>Open the 'Telework Case' table (not shown)  
>Click on: + Add field

![](./Forms%20Images/Add%20field%20to%20table.jpg)

Fill in these fields:

  1. Column label: Manager
  2. Type: Reference
  3. Table to reference: User (sys\_user)
  4. Click on: 'Add'
  ![](./Forms%20Images/Add%20manager%20field%20steps.jpg)  


Now, add a new field 'Requested For' using the same steps and these attributes:

1. Column label: Requested For
2. Type: Reference
3. Table to reference: User
4. Click on: 'Add'  
![](./Forms%20Images/Requested%20for%20add%20a%20field.jpg)  


Let's add it to the workspace form

>Click on 'Forms' (center at the top, to the right of 'Data')  
>Change 'Default view' to 'Workspace Telework'  
![](./Forms%20Images/change%20default%20view%20of%20form.jpg)

>1. Add the field 'Manager' and 'Requested For' to the form
>2. Click on 'Save'
![](./Forms%20Images/add%20requested%20for%20and%20manager%20to%20form.jpg)  
  


Great – you now have a new field called 'Manager' and 'Requested For' and they're on your workspace form.

## Next, we'll add the question to our record producer

Go back to your App Home for Telework Case Management and open the Experience, 'Apply for Telework – record producer':

![](./Forms%20Images/choose%20apply%20for%20telework%20record%20producer.jpg)  

Once it opens up, choose:

>1. Questions
>2. Delete the Question Set – 'Standard Employee Questions'
![](./Forms%20Images/Delete%20question%20set.jpg)  
>3. After clicking on the 'x' click on 'Remove'


Next, we'll add in the question to find out who they are requesting the telework arrangement for – this will give the teams flexibility for people to request on behalf of someone else which has also been something the teams have been requesting be added to the form.



Click on 'Insert New Question': ![](./Forms%20Images/Insert%20new%20question%20button.jpg)

>1. Question Type: Choice
>2. Question subtype: Reference
>3. Map to a specific field on the table – True
>4. Table field: Requested For
>5. Question label: Who is this arrangement for?  
![](./Forms%20Images/Manager%20type.jpg) ![](./Forms%20Images/requested%20for%20details.jpg)  


Click on 'Continue to Additional details'
>1. Source table: User (sys\_user) *no conditions
>2. Click on 'Insert question' in bottom right  ![](./Forms%20Images/insert%20question%20button.jpg)

![](./Forms%20Images/source%20table%20user.jpg)  

Move this question to the top of form, it should now look like this:

![](./Forms%20Images/Requested%20for%20top%20of%20questions.jpg)  


## Next we need to confirm we have the right manager
We'll add the manager question to this form and populate it based off of who they have in the 'requested for' question.



Click on: Insert new question  ![](./Forms%20Images/Insert%20new%20question%20button.jpg)  

>1. Question type: Choice
>2. Question subtype: Record reference
>3. Map to a specific field on the table: True
>4. Table field: Manager
>5. Question label: Manager  
![](./Forms%20Images/Manager%20type.jpg)  ![](./Forms%20Images/manager%20details.jpg)  


Continue to 'Additional details'  

>1. Source table: User (sys\_user)
>2. Click on 'Auto-populate'  
![](./Forms%20Images/Manager%20table%20and%20auto%20populate.jpg)  


Fill out the form:

>1. Select the question this depends on: 'Who is this arrangement for? | sys\_user
>2. Use the data pill picker button on the right
>3. Select the field that contains the value you want to set: scroll to 'Manager'  
![](./Forms%20Images/manager%20auto-populate.jpg)  


>Click on Annotation  
![](./Forms%20Images/manager%20click%20on%20annotation.jpg)  

Fill out the form:
>1. Show instructions: true
>2. Instructions: If this is the correct manager don't change. If it is empty or the wrong manager, please change. The approval for your telework request will go to this person.  
![](./Forms%20Images/manager%20annotation.jpg)  



Insert question: ![](./Forms%20Images/insert%20question%20button.jpg)  

##
\*\*Bonus\*\* on your own, add a behavior to the 'Manager' question so it's mandatory if it's empty!
##


Move the 'Manager' question so it's the 2nd question, should look like this now:

![](./Forms%20Images/manager%20added.jpg)  


Click on 'Review and submit'          ![](./Forms%20Images/review%20and%20submit.jpg)


Click on 'Submit'                     ![](./Forms%20Images/submit.jpg)

Click on 'Return to my application'   ![](./Forms%20Images/return%20to%20your%20application.jpg)  

And you're here:

![](./Forms%20Images/After%20record%20producer%20update%20home%20page.jpg)  


##
## Next, we want to auto-populate the 'Requested For' question with whomever is filling out the form. To do that, we need to go into design studio, find the variable and add it to the default tab with one line of code.


We need to do this part in the Dev Studio  
To get to the Dev Studio:

>1. Click on the 'cog' in the upper right ![](./Forms%20Images/click%20on%20cog.jpg)
>2. Click on 'open app in Dev Studio'  ![](./Forms%20Images/open%20app%20in%20dev%20studio.jpg)  


You should be here:

![](./Forms%20Images/Studio%201.jpg)


On the left hand navigation are all the application files we've created so far in our Telework Case application.

Scroll on the left to find

>Service Catalog
>>Record Producer
>>>Apply for Telework – click on 'apply for telework' record producer  
![](./Forms%20Images/studio%202.jpg)


This is your record producer platform default view.

Scroll down to the related lists, 'Variables'.  
Click on the variable 'who is this arrangement for?'

![](./Forms%20Images/studio%203.jpg)  


>1. Scroll down to the tabbed section 'Default Value'
>2. Enter into the box: javascript:gs.getUserID()
>3. Click on: 'Update' (use either one, there's 2 update buttons)  
![](./Forms%20Images/studio%204.jpg)  

After updating, it stays on this tab. 

## 
## We're all done with the Design studio, you can close this browser tab and go back to the your Telework App home.

![](./Forms%20Images/After%20record%20producer%20update%20home%20page.jpg)

At this point
>>we've updated the data table
>>modified the record producer experience

All that's left to do now is update the flow so it takes advantage of our new fields.  
Remember, we're relying on the 'requested for' field now, not the 'opened by' since sometimes they could be different.

### Updating Flow 'Main'

>- Click on 'Logic and automation'
>- Open the 'Main' flow (switch to tree view)  
![](./Forms%20Images/main%20flow%201.jpg)  


2 things we need to change:

>1. Ask For Approval – change this to the 'manager' field
>2. Send Email – send the email to the email of the 'requested for'

Changing Approval

>1. Expand Step 1 – Ask for Approval
>2. Clear the box after 'Anyone Approves'
>3. Click on the data pill picker to find the Manager field
>4. Trigger Record Created: tiny arrow: scroll and click on 'Manager' field  
![](./Forms%20Images/main%20flow%202.jpg)  
>Click on 'Done'

![](./Forms%20Images/main%20flow%203.jpg)  


Let's change the email To field to the requested for email address

>1. Expand 'Send Email' (step 4)
>2. Clear the 'To' field
>3. Choose the data pill picker for the 'To' field
>4. Trigger – Record Created: Telework Case Record tiny arrow: Requested For tiny arrow: scroll and click on 'Email'  
![](./Forms%20Images/main%20flow%204.jpg)  
>Click on 'Done'  

![](./Forms%20Images/Main%20flow%205.jpg)  


### Are there any other fields you need to change? Sometimes people use the opened\_by name in the email body, if you did – be sure to change that up as well.

Almost done, need to do 1 more thing:

>Activate (this also saves it)  
![](./Forms%20Images/Activate%20main%20flow.jpg)
![](./Forms%20Images/Activate%20again.jpg)  
>(that's actually 2 things)

## Now, you can test it and make sure you're good to go –

>Open up Service Portal  
>Fill out Apply for Telework  
>If you change the 'Requested For' field does the manager change?  
- If the manager is blank, it means the person doesn't have a manager listed
- Does the rest of the form work right?
- Submit
>Go to the Telework workspace  
>Check the new telework form  
- Is the manager field correct?
- Is the requested for field correct?
- After the approval, does the email go to the right person?

# That's it!!

## If you need to change how variables respond, use the dev studio and there's always a place for scripting – whether it's just one line of code or something more complex that uses a script include, it's all there.