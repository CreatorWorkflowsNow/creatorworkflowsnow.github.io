---
title: "Update the Record Producer" 
sidebar_label: "2. Record Producer"
hide_table_of_contents: true
---

# Record Producer

- Verify Manager and Auto-populate 'Requested For' field

One of the complaints Amanda has had is sometimes the requestors don't have a manager listed or if there is one listed, it's the wrong one. This results in a delay of approval and ultimately a poor experience for the requestor.

The solution we've decided on is to list the requestors manager on the record producer, so they can either leave it or change it or fill it in.

This will require a new field on the telework table, changing some of the record producer questions, a script to auto populate a 'requested for' field, and using the 'Auto Populate' section on the record producer. Sounds like a lot, but it will go quickly.
<br/>

Here are our steps:  

|   | 
    |-------------|---------------------------------|
    |<span className="large-number">➊</span>| Create 2 new fields on the telework case table called "Manager" and "Requested For" |
    |<span className="large-number">➋</span>| Create a new question on the record producer for "Manager" and "Requested For" |
    |<span className="large-number">➌</span>| Create a script to auto-populate the 'Requested For' with the logged in user name using design studio  |
    |<span className="large-number">➍</span>| Change the flow to work with these new fields |
<br/>
<br/>

## Creating 2 new fields on the telework case table called "Manager" and "Requested For" ##


1. In app engine studio in the Telework Case application:  

  |   | 
    |-------------|---------------------------------|
    | Open | Telework Case Data Table (not shown) |
    | Click | <span className="button-purple">+ Add field</span> |

  ![](./Forms%20Images/Add%20field%20to%20table.jpg)

2. Fill in these fields:  

  |   | 
    |-------------|---------------------------------|
    |<span className="large-number">➊</span> Column label | Manager |
    |<span className="large-number">➋</span> Type | Reference |
    |<span className="large-number">➌</span> Table to reference | User (sys\_user) |
    |<span className="large-number">➍</span> Click | <span className="button-purple">Add</span> |
  ![](./Forms%20Images/Add%20manager%20field%20steps.jpg) 

3. Now, add a new field called 'Requested For' using the same steps and these attributes:  

  |   | 
    |-------------|---------------------------------|
    |<span className="large-number">➊</span> Column label | Requested For |
    |<span className="large-number">➋</span> Type | Reference |
    |<span className="large-number">➌</span> Table to reference | User (sys\_user) |
    |<span className="large-number">➍</span> Click | <span className="button-purple">Add</span> |

  ![](./Forms%20Images/Requested%20for%20add%20a%20field.jpg)    

4. Let's add it to the workspace form  

  |   | 
    |-------------|---------------------------------|
    | Click | 'Forms' (center at the top, to the right of 'Data') |
    | Change | 'Default view' to 'Workspace Telework' |

  ![](./Forms%20Images/change%20default%20view%20of%20form.jpg)  

5. Add the new fields to the form  

  |   | 
    |-------------|---------------------------------|
    |<span className="large-number">➊</span> | Manager |
    |<span className="large-number">➊</span> | Requested For |
    |<span className="large-number">➋</span> | <span className="button-purple">Save</span> |

  ![](./Forms%20Images/add%20requested%20for%20and%20manager%20to%20form.jpg)  
  


Great – you now have a new field called 'Manager' and 'Requested For' and they're on your workspace form.

## Next, we'll add 2 new questions to our record producer ##

Go back to your App Home for Telework Case Management and open the Experience, 'Apply for Telework – record producer':

![](./Forms%20Images/choose%20apply%20for%20telework%20record%20producer.jpg)  

Once it opens up, choose:

1. Questions
2. Delete the Question Set – 'Standard Employee Questions'
![](./Forms%20Images/Delete%20question%20set.jpg)  
3. After clicking on the 'x' click on 'Remove'


Next, we'll add in the question to find out who they are requesting the telework arrangement for – this will give the teams flexibility for people to request on behalf of someone else which has also been something the teams have been requesting be added to the form.


4. Insert a new question

  |   | 
    |-------------|---------------------------------|
    | Click | 'Insert New Question' |
    | Question Type | Choice |
    | Question subtype | Reference |
    | Mape to a specific field on the table | True |
    | Table field | Requested for |
    | Question label | Who is this arrangement for? |

  ![](./Forms%20Images/Manager%20type.jpg) ![](./Forms%20Images/requested%20for%20details.jpg)  

  |   | 
    |-------------|---------------------------------|
    | Click tab | 'Continue to Additional details' |
    | Source Table | User (sys_user) *no conditions* |
    | Click | 'Insert question' (bottom right) |  

  ![](./Forms%20Images/source%20table%20user.jpg)  

  Move this question to the top of form, it should now look like this:

  ![](./Forms%20Images/Requested%20for%20top%20of%20questions.jpg)  


## Next we need to confirm we have the right manager ##
We'll add the manager question to this form and populate it based off of who they have in the 'requested for' question.

5. Next, insert a new question

  |   | 
    |-------------|---------------------------------|
    | Click | 'Insert New Question' |
    | Question Type | Choice |
    | Question subtype | Reference |
    | Mape to a specific field on the table | True |
    | Table field | Manager |
    | Question label | Manager |
 
  ![](./Forms%20Images/Manager%20type.jpg)  ![](./Forms%20Images/manager%20details.jpg)  

  |   | 
    |-------------|---------------------------------|
    | Click tab | 'Continue to Additional details' |
    | Source Table | User (sys_user) *no conditions* |
    | Click tab | 'Auto-populate |  
  
  ![](./Forms%20Images/Manager%20table%20and%20auto%20populate.jpg)  

  | Fill out the form  | 
    |-------------|---------------------------------|
    | <span className="large-number">➊</span> Select the question this depends on | 'Who is this arrangement for? sys_user |
    | <span className="large-number">➋</span> | Use the data pill picker button on the right |
    | <span className="large-number">➌</span> | Scroll to 'Manager' |  
 
  ![](./Forms%20Images/manager%20auto-populate.jpg)  

  Click tab 'Annotation' 
  ![](./Forms%20Images/manager%20click%20on%20annotation.jpg)  

  | Fill out the form  | 
    |-------------|---------------------------------|
    | Show instructions | true |
    | Instructions | If this is the correct manager don't change. If it is empty or the wrong manager, please change. The approval for your telework request will go to this person. |
 
  ![](./Forms%20Images/manager%20annotation.jpg)  

  |   | 
    |-------------|---------------------------------|
    | Click button | <span className="button-purple">Insert Question</span> |

## Bonus: on your own, add a behavior to the 'Manager' question so it's mandatory if it's empty! ##


6. Move the 'Manager' question so it's the 2nd question, should look like this now:

  ![](./Forms%20Images/manager%20added.jpg)  

  |   | 
    |-------------|---------------------------------|
    | Click | <span className="button-purple">Review and submit</span> |
    | Click | <span className="button-purple">Submit</span> |
    | Click | <span className="button-purple">Return to my application</span>| 
 
  And you're here:

  ![](./Forms%20Images/After%20record%20producer%20update%20home%20page.jpg)  


## Next, we want to auto-populate the 'Requested For' question with whomever is filling out the form. To do that, we need to go into design studio, find the variable and add it to the default tab with one line of code. ##


We need to do this part in the Dev Studio  
To get to the Dev Studio:

1. Click on the 'cog' in the upper right ![](./Forms%20Images/click%20on%20cog.jpg)
2. Click on 'open app in Dev Studio'  ![](./Forms%20Images/open%20app%20in%20dev%20studio.jpg)  


  You should be here:

  ![](./Forms%20Images/Studio%201.jpg)


  On the left hand navigation are all the application files we've created so far in our Telework Case application.

3. Scroll on the left to find

  >Service Catalog
  >>Record Producer
  >>>Apply for Telework – click on 'apply for telework' record producer  
  ![](./Forms%20Images/studio%202.jpg)


  This is your record producer platform default view.

4. Scroll down to the related lists, 'Variables'.  
5. Click on the variable 'who is this arrangement for?'

  ![](./Forms%20Images/studio%203.jpg)  

  | | 
    |-------------|---------------------------------|
    | <span className="large-number">➊</span> | Scroll to 'Default Value' tab |
    | <span className="large-number">➋</span> | paste: javascript:gs.getUserID() |
    | <span className="large-number">➌</span> | Click on 'Update' (choose your button of choice) | 

  ![](./Forms%20Images/studio%204.jpg)  

  After updating, it stays on this tab. 

## We're all done with the Design studio, you can close this browser tab and go back to the your Telework App home.

![](./Forms%20Images/After%20record%20producer%20update%20home%20page.jpg)

At this point
<span className="large-number">➊</span> we've updated the data table with 2 new fields: 'Manager' and 'Requested For'  
<br/>
<span className="large-number">➋</span> modified the record producer experience
<br/>  
<span className="large-number">➌</span> created a script to auto-populate the 'Requested For' with the logged in user name using design studio

All that's left to do now is update the flow so it takes advantage of our new fields.
<br/>  
Remember, we're relying on the 'requested for' field now, not the 'opened by' since sometimes they could be different.

## Changing the flow to work with these new fields

(not shown)
- Click on 'Logic and automation'
- Open the 'Main' flow (switch to tree view) so you should be here now:  
![](./Forms%20Images/mainflow_new.jpg)  


2 things we need to change:

>1. Ask For Approval – change this to the 'manager' field
>2. Send Email – send the email to the email of the 'requested for'
<br/> 

1. Changing Approval

  | Steps | 
    |-------------|---------------------------------|
    |<span className="large-number">➊</span>| Expand Step 6 - 'Ask for Approval' |
    |<span className="large-number">➋</span>| Clear the box after 'Anyone Approves'  |
    |<span className="large-number">➌</span>| Click on the data pill picker to find the 'Manager' field |
    |<span className="large-number">➍</span>| trigger - Record Created - Telework Case Record - Manager |

  ![](./Forms%20Images/mainflow202_new.jpg)  

  Click on <span className="button-purple">Done</span> 

  ![](./Forms%20Images/mainflow203_new.jpg)  

<br/>  

2. Send Email – send the email to the email of the 'requested for'

  | Steps | 
    |-------------|---------------------------------|
    |<span className="large-number">➊</span>| Expand Step 11 - 'Send Email' |
    |<span className="large-number">➋</span>| Clear the 'To' field  |
    |<span className="large-number">➌</span>| Click on the data pill picker for the 'To' field |
    |<span className="large-number">➍</span>| trigger - Record Created - Telework Case Record - Requested For - Email |  
  
  ![](./Forms%20Images/mainflow204_new.jpg)  

  Click on <span className="button-purple">Done</span>  

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

## If you need to change how variables respond, use the dev studio and there's always a place for scripting – whether it's just one line of code or something more complex that uses a script include, it's all there. (That's also a place where GenAI will help speed things up!)