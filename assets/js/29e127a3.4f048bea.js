"use strict";(self.webpackChunkCreatorWorkflowsNow=self.webpackChunkCreatorWorkflowsNow||[]).push([[3857],{3905:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},k=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,k=l(e,["components","mdxType","originalType","parentName"]),m=s(a),c=r,g=m["".concat(p,".").concat(c)]||m[c]||d[c]||i;return a?n.createElement(g,o(o({ref:t},k),{},{components:a})):n.createElement(g,o({ref:t},k))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},33264:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={id:"exercise-bonus-3",title:"Bonus Exercise 3: Adding a workspace for travel requests",sidebar_label:"3. Dashboard Workspace",hide_table_of_contents:!1,draft:!1},o=void 0,l={unversionedId:"exercise-bonus-3",id:"exercise-bonus-3",title:"Bonus Exercise 3: Adding a workspace for travel requests",description:"Duration: 30 minutes",source:"@site/labs/travelrequest/Exercise_bonus_3.md",sourceDirName:".",slug:"/exercise-bonus-3",permalink:"/labs/travelrequest/exercise-bonus-3",draft:!1,tags:[],version:"current",frontMatter:{id:"exercise-bonus-3",title:"Bonus Exercise 3: Adding a workspace for travel requests",sidebar_label:"3. Dashboard Workspace",hide_table_of_contents:!1,draft:!1}},p={},s=[{value:"Part 1: Creating a workspace for our form",id:"part-1-creating-a-workspace-for-our-form",level:2},{value:"Part 2: Creating a dashboard",id:"part-2-creating-a-dashboard",level:2},{value:"Widget 1: All travel requests",id:"widget-1-all-travel-requests",level:3},{value:"Widget 2: Estimated travel spend vs budget",id:"widget-2-estimated-travel-spend-vs-budget",level:3},{value:"Widget 3: Outstanding Approvals",id:"widget-3-outstanding-approvals",level:3}],k={toc:s},m="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(m,(0,n.Z)({},k,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Duration: 30 minutes")),(0,r.kt)("p",null,"In this bonus exercise, you will learn how to create an interactive workspace for your users to process travel requests. You will also learn how to build a dashboard with custom reports in the workspace."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Pre-requisites: Bonus Exercise 2")),(0,r.kt)("p",{parentName:"admonition"},"Some screens will show forms that were configured in Bonus Exercise 2. "),(0,r.kt)("p",{parentName:"admonition"},"These are minor changes that will not affect the completion of this exercise.")),(0,r.kt)("h2",{id:"part-1-creating-a-workspace-for-our-form"},"Part 1: Creating a workspace for our form"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate back to your ",(0,r.kt)("strong",{parentName:"li"},"App Home")," screen if you are not currently on it, then click ",(0,r.kt)("strong",{parentName:"li"},"Add")," under ",(0,r.kt)("strong",{parentName:"li"},"Experience"))),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(30161).Z,width:"1598",height:"976"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Workspace"))),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(47033).Z,width:"1492",height:"976"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Begin"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Change ",(0,r.kt)("strong",{parentName:"p"},"Name")," to ",(0,r.kt)("strong",{parentName:"p"},"Travel Request Workspace"),", ",(0,r.kt)("strong",{parentName:"p"},"Description")," to ",(0,r.kt)("strong",{parentName:"p"},"A central workspace to manage all travel requests")))),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(88135).Z,width:"716",height:"686"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Leave the rest default and click ",(0,r.kt)("strong",{parentName:"p"},"Continue"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Your screen should show ",(0,r.kt)("strong",{parentName:"p"},"Airport")," as the primary table, and ",(0,r.kt)("strong",{parentName:"p"},"Travel request")," in the secondary tables, we will need to swap these two around")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Search and select ",(0,r.kt)("strong",{parentName:"p"},"Travel request")," under ",(0,r.kt)("strong",{parentName:"p"},"Primary table"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Search and select ",(0,r.kt)("strong",{parentName:"p"},"Airport")," under ",(0,r.kt)("strong",{parentName:"p"},"Secondary tables")))),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(83524).Z,width:"825",height:"638"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Continue")," and wait for a short loading time. The experience is getting built based on your application configurations so far")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the next screen, click ",(0,r.kt)("strong",{parentName:"p"},"Done"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You should be brought back to ",(0,r.kt)("strong",{parentName:"p"},"App Home"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Preview")," on the new ",(0,r.kt)("strong",{parentName:"p"},"Travel Request Workspace")," row"))),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(3493).Z,width:"1492",height:"976"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"A new browser tab will open and the workspace will be loaded")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on the ",(0,r.kt)("strong",{parentName:"p"},"list")," icon on the left sidebar"))),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(90114).Z,width:"1492",height:"976"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Notice that on the ",(0,r.kt)("strong",{parentName:"p"},"Lists"),", your ",(0,r.kt)("strong",{parentName:"p"},"Travel request")," and ",(0,r.kt)("strong",{parentName:"p"},"Airport")," tables appear")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"All")," under ",(0,r.kt)("strong",{parentName:"p"},"Travel request"),", notice that this removes all filters and shows all your created travel requests")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"New")," on the top right")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The form view appears. This should be the same as what you had configured in Exercise 1. There are the additional fileds ",(0,r.kt)("strong",{parentName:"p"},"Travel days")," and ",(0,r.kt)("strong",{parentName:"p"},"Estimated trip cost")," from Bonus Exercise 2")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fill in the form with data of your liking, then click ",(0,r.kt)("strong",{parentName:"p"},"Save")))),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(51357).Z,width:"1492",height:"976"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"On the right, ",(0,r.kt)("strong",{parentName:"li"},"Attachments")," can be added at any time. Attachments submitted together with our form in Exercise 2 will also appear here for viewing and download")),(0,r.kt)("h2",{id:"part-2-creating-a-dashboard"},"Part 2: Creating a dashboard"),(0,r.kt)("h3",{id:"widget-1-all-travel-requests"},"Widget 1: All travel requests"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on the ",(0,r.kt)("strong",{parentName:"p"},"Home")," icon on the left sidebar to return to the workspace home page")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the top right, click ",(0,r.kt)("strong",{parentName:"p"},"Edit")))),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(70187).Z,width:"1566",height:"976"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"My Tasks"),", then the ",(0,r.kt)("strong",{parentName:"p"},"Configure")," button on the highlighted ",(0,r.kt)("strong",{parentName:"p"},"Data visualization"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The right sidebar appears showing the Vizualization type ",(0,r.kt)("strong",{parentName:"p"},"Single score")))),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(51357).Z,width:"1492",height:"976"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},">If you face issues with the screen not loading, change to a different Vizualization type, then change it back to **Single score**\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Expand ",(0,r.kt)("strong",{parentName:"li"},"Header and border"),", then change ",(0,r.kt)("strong",{parentName:"li"},"Chart title")," to ",(0,r.kt)("strong",{parentName:"li"},"All Travel Requests"),". Here are all the steps so far:")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(80839).Z,width:"1566",height:"976"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Under the ",(0,r.kt)("strong",{parentName:"p"},"Data sources")," section, click the 3 dot icon next to ",(0,r.kt)("strong",{parentName:"p"},"Travel request"),", then click ",(0,r.kt)("strong",{parentName:"p"},"Edit"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the ",(0,r.kt)("strong",{parentName:"p"},"Edit data source")," screen, click ",(0,r.kt)("strong",{parentName:"p"},"Edit")," under ",(0,r.kt)("strong",{parentName:"p"},"Filters"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Remove the ",(0,r.kt)("strong",{parentName:"p"},"Assigned to")," condition by clicking the ",(0,r.kt)("strong",{parentName:"p"},"X")," icon")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Apply")))),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(25700).Z,width:"1566",height:"976"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Confirm that the ",(0,r.kt)("strong",{parentName:"li"},"All Travel Requests")," widget now refreshes to show the number of Travel requests that you have created")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(61070).Z,width:"1566",height:"976"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save")," on the top right")),(0,r.kt)("h3",{id:"widget-2-estimated-travel-spend-vs-budget"},"Widget 2: Estimated travel spend vs budget"),(0,r.kt)("p",null,"This widget can only be configured if you completed Bonus Exercise 2. If you have not completed that, please skip this widget."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click and configure the next widget, ",(0,r.kt)("strong",{parentName:"p"},"Unassigned Tasks"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Change the ",(0,r.kt)("strong",{parentName:"p"},"Visualization type")," to ",(0,r.kt)("strong",{parentName:"p"},"Dial"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Under ",(0,r.kt)("strong",{parentName:"p"},"Header and border")," change ",(0,r.kt)("strong",{parentName:"p"},"Chart title")," to ",(0,r.kt)("strong",{parentName:"p"},"Estimated Travel Spend")))),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(55862).Z,width:"1097",height:"509"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Under ",(0,r.kt)("strong",{parentName:"p"},"Data sources"),", edit the ",(0,r.kt)("strong",{parentName:"p"},"Task")," data source")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the next ",(0,r.kt)("strong",{parentName:"p"},"Edit data source")," screen, click on ",(0,r.kt)("strong",{parentName:"p"},"Travel request ","[x_snc_travel_req_0_travel_request]")," under ",(0,r.kt)("strong",{parentName:"p"},"Suggested")," on the left sidebar")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Add custom conditions"),", then set the following condition: ",(0,r.kt)("inlineCode",{parentName:"p"},"Opened")," on ",(0,r.kt)("inlineCode",{parentName:"p"},"Months -> This month"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Refer to the video below for a walkthrough:"))),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(12814).Z,width:"1566",height:"976"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Back on the Edit dashboard view, on the right sidebar, click ",(0,r.kt)("strong",{parentName:"li"},"Edit")," for ",(0,r.kt)("strong",{parentName:"li"},"Travel request")," under ",(0,r.kt)("strong",{parentName:"li"},"Metric"))),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(98807).Z,width:"1101",height:"762"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the pop-up box, change ",(0,r.kt)("strong",{parentName:"p"},"Count")," under ",(0,r.kt)("strong",{parentName:"p"},"Select an aggregation")," to ",(0,r.kt)("strong",{parentName:"p"},"Sum"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Change ",(0,r.kt)("strong",{parentName:"p"},"Field")," to ",(0,r.kt)("strong",{parentName:"p"},"Estimated trip cost")))),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(69831).Z,width:"581",height:"400"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Apply"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Format values")," under the ",(0,r.kt)("strong",{parentName:"p"},"Estimated trip cost")," metric")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the pop-up box, toggle ",(0,r.kt)("strong",{parentName:"p"},"Use custom formatting"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Change ",(0,r.kt)("strong",{parentName:"p"},"Rounding")," to ",(0,r.kt)("strong",{parentName:"p"},"Up"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Toggle ",(0,r.kt)("strong",{parentName:"p"},"Enable abbreviation"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save")))),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(79121).Z,width:"1566",height:"976"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the right Configuration sidebar, expand ",(0,r.kt)("strong",{parentName:"p"},"Presentation"),", then expand ",(0,r.kt)("strong",{parentName:"p"},"Display settings"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Change ",(0,r.kt)("strong",{parentName:"p"},"Max value")," to a budget you think fits your current Estimated Travel Spend. e.g. here the Estimated Travel Spend is currently ",(0,r.kt)("strong",{parentName:"p"},"4.45K")," for the month, so we will put the Max value at ",(0,r.kt)("strong",{parentName:"p"},"10K")))),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(59547).Z,width:"1106",height:"712"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the top right, click ",(0,r.kt)("strong",{parentName:"p"},"Save"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Your middle ",(0,r.kt)("strong",{parentName:"p"},"Estimated Travel Spend")," widget should have been dynamically updating based on all the changes that we have been making"))),(0,r.kt)("h3",{id:"widget-3-outstanding-approvals"},"Widget 3: Outstanding Approvals"),(0,r.kt)("p",null,"This widget will appear different if you have not completed Bonus Exercise 2, but will not impact completing the widget."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the middle heading bar which says ",(0,r.kt)("strong",{parentName:"p"},"My Work"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the right configuration sidebar, change ",(0,r.kt)("strong",{parentName:"p"},"Label")," from ",(0,r.kt)("strong",{parentName:"p"},"My Work")," to ",(0,r.kt)("strong",{parentName:"p"},"Outstanding travel requests")))),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(99167).Z,width:"1566",height:"976"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on the bigger ",(0,r.kt)("strong",{parentName:"p"},"List - Simple")," widget at the bottom of the screen")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the right configuration sidebar, click ",(0,r.kt)("strong",{parentName:"p"},"Edit filter"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the pop-up box, remove ",(0,r.kt)("strong",{parentName:"p"},"Assigned to is (dynamic) Me")," by clicking ",(0,r.kt)("strong",{parentName:"p"},"X")," on the far right of the row")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the ",(0,r.kt)("strong",{parentName:"p"},"and")," button")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the new ",(0,r.kt)("strong",{parentName:"p"},"and")," row that appears, set the following condition"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"State is one of Pending, Open, Work in Progress")),(0,r.kt)("p",{parentName:"li"},"Refer to the video below:"))),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(39687).Z,width:"1566",height:"976"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the top right of the screen, click ",(0,r.kt)("strong",{parentName:"p"},"Save"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Exit editing mode"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Your dashboard should look similar to this"))),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(70440).Z,width:"1566",height:"976"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We have left the final ",(0,r.kt)("strong",{parentName:"p"},"Critical Tasks")," widget for you to experiement with. Feel free to make any changes that you would like with the different Vizualizations available by repeating the steps in this exercise.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"All widgets are also built with the drill-down capability. You can click on any of the widgets created to get to the underlying data supporting that widget."))),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(2054).Z,width:"800",height:"600"})),(0,r.kt)("p",null,"Well done once again! In this exercise, you have built a dashboard purely through drag and drop. This is obviously just a short snippet into the possibilities here, and there is so much more that can be done to give data-rich vizualizations to those who need easy access to data as fulfillers and admins, all in a single workspace."))}d.isMDXComponent=!0},59547:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/10K-a0ed15f9c674a3cb5e392b42d32c0f8b.png"},30161:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/addexp2-281c9663714cf18f9e4d1dce45508814.png"},80839:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/alltravreq-38f052be4ab0eb812f43f32a8e5bca08.gif"},25700:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/changedsource-692945e5ac9b74d6dc9490224dbfc96b.gif"},69831:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/changemetric-7c6a77d3435904808de3eaaacdcde194.png"},47033:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/chooseworkspace-a41a6d3529717a6974fd9600ff4783c8.png"},70440:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dashboardcomplete-6d06cdea787acdaa296a3e5c088ec8d5.png"},2054:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dashboardfinal-5d44958edf10707ca72abb11767df1c0.gif"},90114:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/defaultws-9e9f0fa0aec007f09ebdd11b92e749e2.png"},55862:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dialspend-1bc9677491d91f892a2db7f7f57fed9f.png"},70187:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/editdb-523d520344343f7cb6d94d237ed14556.png"},98807:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/editmetric-6959ef0546f07e4ac4f3c3980d1bb054.png"},79121:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/formatvalue-c1b2e9aab38a354c13cb68f5cc3aa7f5.gif"},39687:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/listfilter-dd5e3145e26924ca4cfd366dddf7f8b7.gif"},88135:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/nameworkspace-c5c6e9117181d6133adaaabac3d51fe9.png"},99167:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/outstandingtravel-e988a91cbf81ae8737481a9a501f47e1.png"},3493:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/previewws-e7db904119596503edd1721b0c8042e6.png"},83524:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/swaptables-46d51aafd0fa89340d7ec4ac2de7b768.png"},12814:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/travelspenddata-c731477e8b8f2dde837bfb7168d61568.gif"},51357:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/trvreqformws-dc9698d7b0d0f2a607b820ff66e4f4eb.png"},61070:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/widgetrefresh-a95aa8f967500953ab8b98b058524e81.png"}}]);