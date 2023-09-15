"use strict";(self.webpackChunkCreatorWorkflowsNow=self.webpackChunkCreatorWorkflowsNow||[]).push([[6940],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>g});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),p=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},k="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),k=p(a),m=n,g=k["".concat(s,".").concat(m)]||k[m]||d[m]||o;return a?r.createElement(g,i(i({ref:e},c),{},{components:a})):r.createElement(g,i({ref:e},c))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[k]="string"==typeof t?t:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},33659:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={id:"exercise-4",title:"Exercise 4: Creating an approval workflow",sidebar_label:"4. Workflows",hide_table_of_contents:!0,draft:!1},i=void 0,l={unversionedId:"exercise-4",id:"exercise-4",title:"Exercise 4: Creating an approval workflow",description:"Duration: 30 minutes",source:"@site/labs/travelrequest/Exercise_4.md",sourceDirName:".",slug:"/exercise-4",permalink:"/labs/travelrequest/exercise-4",draft:!1,tags:[],version:"current",frontMatter:{id:"exercise-4",title:"Exercise 4: Creating an approval workflow",sidebar_label:"4. Workflows",hide_table_of_contents:!0,draft:!1},sidebar:"travelrequest",previous:{title:"3. User Forms",permalink:"/labs/travelrequest/exercise-3"},next:{title:"Overview",permalink:"/labs/travelrequest/exercise-5-0"}},s={},p=[],c={toc:p},k="wrapper";function d(t){let{components:e,...o}=t;return(0,n.kt)(k,(0,r.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Duration: 30 minutes")),(0,n.kt)("p",null,"Within this exercise, we will be creating an approval workflow. Let's describe what we will be designing in a sentence: ",(0,n.kt)("em",{parentName:"p"},"Whenever a new travel request is raised, we will route the request to the requestor's manager for approval. Once approved, we will mark the status of the request as complete")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Navigate back to the ",(0,n.kt)("strong",{parentName:"li"},"App Home")," tab")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Add")," under ",(0,n.kt)("strong",{parentName:"li"},"Logic and automation"),(0,n.kt)("img",{src:a(97637).Z,width:"515",height:"254"}))),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Flow"),(0,n.kt)("img",{src:a(74310).Z,width:"1461",height:"503"}))),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Build from scratch"))),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"For ",(0,n.kt)("strong",{parentName:"li"},"Name"),", enter ",(0,n.kt)("strong",{parentName:"li"},"Travel request approval"))),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"For ",(0,n.kt)("strong",{parentName:"li"},"Description"),", enter ",(0,n.kt)("strong",{parentName:"li"},"Route travel request approval to requestor's manager"))),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},"Expand ",(0,n.kt)("strong",{parentName:"li"},"Show advanced options"))),(0,n.kt)("ol",{start:8},(0,n.kt)("li",{parentName:"ol"},"Change ",(0,n.kt)("strong",{parentName:"li"},"Run as")," to ",(0,n.kt)("strong",{parentName:"li"},"System user"),(0,n.kt)("img",{src:a(6593).Z,width:"1099",height:"733"}))),(0,n.kt)("ol",{start:9},(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Continue"))),(0,n.kt)("ol",{start:10},(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Edit this flow"))),(0,n.kt)("ol",{start:11},(0,n.kt)("li",{parentName:"ol"},"Close the ",(0,n.kt)("strong",{parentName:"li"},"Getting started")," pop-up box")),(0,n.kt)("ol",{start:12},(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Add a trigger"))),(0,n.kt)("ol",{start:13},(0,n.kt)("li",{parentName:"ol"},"Under ",(0,n.kt)("strong",{parentName:"li"},"RECORD"),", click ",(0,n.kt)("strong",{parentName:"li"},"Created"),(0,n.kt)("img",{src:a(32550).Z,width:"1002",height:"716"}))),(0,n.kt)("ol",{start:14},(0,n.kt)("li",{parentName:"ol"},"Under ",(0,n.kt)("strong",{parentName:"li"},"Table"),", search and select ",(0,n.kt)("strong",{parentName:"li"},"Travel request"),(0,n.kt)("img",{src:a(69554).Z,width:"622",height:"368"}))),(0,n.kt)("ol",{start:15},(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Done"))),(0,n.kt)("ol",{start:16},(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Add an Action, Flow Logic, or Subflow"))),(0,n.kt)("ol",{start:17},(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Action"))),(0,n.kt)("ol",{start:18},(0,n.kt)("li",{parentName:"ol"},"Search and select ",(0,n.kt)("strong",{parentName:"li"},"Ask for approval"),(0,n.kt)("img",{src:a(67293).Z,width:"892",height:"755"}))),(0,n.kt)("ol",{start:19},(0,n.kt)("li",{parentName:"ol"},"In the ",(0,n.kt)("strong",{parentName:"li"},"Ask for Approval")," action box, drag and drop the ",(0,n.kt)("strong",{parentName:"li"},"Travel request Record")," from the Data pill picker on the right sidebar, into the ",(0,n.kt)("strong",{parentName:"li"},"Record")," box\n",(0,n.kt)("img",{src:a(18761).Z,width:"1382",height:"1016"}))),(0,n.kt)("ol",{start:20},(0,n.kt)("li",{parentName:"ol"},"Under ",(0,n.kt)("strong",{parentName:"li"},"Rules"),", change ",(0,n.kt)("strong",{parentName:"li"},"Approve")," to ",(0,n.kt)("strong",{parentName:"li"},"Approve or Reject"))),(0,n.kt)("ol",{start:21},(0,n.kt)("li",{parentName:"ol"},"Change ",(0,n.kt)("strong",{parentName:"li"},"-Choose approval rule")," to ",(0,n.kt)("strong",{parentName:"li"},"Anyone approves or rejects"),(0,n.kt)("img",{src:a(34320).Z,width:"1719",height:"1016"}))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"We want the approval to be routed to the requestor's manager, so we will perform what is known as dot-walking to find the related user's manager.")),(0,n.kt)("ol",{start:22},(0,n.kt)("li",{parentName:"ol"},"From the right sidebar (Data pill picker), expand the ",(0,n.kt)("strong",{parentName:"li"},"Travel request Record")," by clicking the expand arrow\n",(0,n.kt)("img",{src:a(91511).Z,width:"313",height:"240"}))),(0,n.kt)("ol",{start:23},(0,n.kt)("li",{parentName:"ol"},"Look for the ",(0,n.kt)("strong",{parentName:"li"},"Opened by")," data pill, and expand it\n",(0,n.kt)("img",{src:a(90165).Z,width:"323",height:"161"}))),(0,n.kt)("ol",{start:24},(0,n.kt)("li",{parentName:"ol"},"Under the ",(0,n.kt)("strong",{parentName:"li"},"Opened by")," section, look for the ",(0,n.kt)("strong",{parentName:"li"},"Manager")," data pill\n",(0,n.kt)("img",{src:a(35999).Z,width:"1719",height:"1016"}))),(0,n.kt)("ol",{start:25},(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Done"))),(0,n.kt)("ol",{start:26},(0,n.kt)("li",{parentName:"ol"},"Here is a full video walkthrough in case you had difficulties at any step\n",(0,n.kt)("img",{src:a(19225).Z,width:"1642",height:"976"}))),(0,n.kt)("p",null,"What we have achieved here is that we are looking for the user who opened the record's manager to be the approver for this record."),(0,n.kt)("ol",{start:27},(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Add an Action, Flow Logic, or Subflow"))),(0,n.kt)("ol",{start:28},(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Flow Logic"))),(0,n.kt)("ol",{start:29},(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"If"),(0,n.kt)("img",{src:a(22086).Z,width:"606",height:"454"}))),(0,n.kt)("ol",{start:30},(0,n.kt)("li",{parentName:"ol"},"Under ",(0,n.kt)("strong",{parentName:"li"},"Condition"),", enter ",(0,n.kt)("strong",{parentName:"li"},"Manager approved"))),(0,n.kt)("ol",{start:31},(0,n.kt)("li",{parentName:"ol"},"Drag and drop the ",(0,n.kt)("strong",{parentName:"li"},"Approval State")," data pill from the right sidebar onto ",(0,n.kt)("strong",{parentName:"li"},"Condition 1"))),(0,n.kt)("ol",{start:32},(0,n.kt)("li",{parentName:"ol"},"Change the choice to ",(0,n.kt)("strong",{parentName:"li"},"Approved"),(0,n.kt)("img",{src:a(14647).Z,width:"1399",height:"1016"}))),(0,n.kt)("ol",{start:33},(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Done"))),(0,n.kt)("ol",{start:34},(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Save")," on the top right of the screen")),(0,n.kt)("ol",{start:35},(0,n.kt)("li",{parentName:"ol"},"Click on the ",(0,n.kt)("strong",{parentName:"li"},"+")," icon ",(0,n.kt)("strong",{parentName:"li"},"next to then"),(0,n.kt)("img",{src:a(51355).Z,width:"373",height:"229"}))),(0,n.kt)("ol",{start:36},(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Action"))),(0,n.kt)("ol",{start:37},(0,n.kt)("li",{parentName:"ol"},"Search and select ",(0,n.kt)("strong",{parentName:"li"},"Update Record"))),(0,n.kt)("ol",{start:38},(0,n.kt)("li",{parentName:"ol"},"Drag and drop the ",(0,n.kt)("strong",{parentName:"li"},"Travel request Record")," onto the ",(0,n.kt)("strong",{parentName:"li"},"Record")," field")),(0,n.kt)("ol",{start:39},(0,n.kt)("li",{parentName:"ol"},"Under ",(0,n.kt)("strong",{parentName:"li"},"Fields"),", select the ",(0,n.kt)("strong",{parentName:"li"},"State")," field and change the choice to ",(0,n.kt)("strong",{parentName:"li"},"Closed Complete"),(0,n.kt)("img",{src:a(64079).Z,width:"1399",height:"1016"}))),(0,n.kt)("ol",{start:40},(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Done"))),(0,n.kt)("ol",{start:41},(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Save")," on the top right of the screen",(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"li"},"(Optional)")," Now we will complete the flow by creating the logic of a rejected approval. As a challenge, can you complete the rest of the flow yourself? The end result should look like this:\n",(0,n.kt)("img",{src:a(78420).Z,width:"1399",height:"1016"}),(0,n.kt)("img",{src:a(16660).Z,width:"1399",height:"1016"}))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Hint: You can always toggle the flow diagramming view by clicking on this icon\n",(0,n.kt)("img",{src:a(70924).Z,width:"1399",height:"1016"}))),(0,n.kt)("ol",{start:42},(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Activate")," on the top right of the screen")))}d.isMDXComponent=!0},32550:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/addtrigger-5aca44acf60dea0bb6b1e096c329cc7b.png"},97637:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/addworkflow-6fd8d9dd5398eba55af9a7fb3a556543.png"},34320:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/afa-842d9e9fea850b1a21c2984b60a691bf.png"},19225:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/afastep-bac211500508de45e02ac7ae578257ed.gif"},67293:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/askforapproval-f29faec56726d73df4358154b92a46ce.png"},74310:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/clickflow-79cb4a54e1abef2c72914dd4bd401f2b.png"},64079:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/closedcomplete-9c5893def62cb03f874fde69a72ef645.png"},18761:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/dragrecord-4b57c088a09e06f72c1638de4cfaacdc.png"},35999:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/dropmanager-c2100e1e879ddca1c632d75e668d6a78.png"},91511:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/expanddatapill-5f51130017f914cc6904e56dd65f46bf.png"},70924:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/flowdiagram-2da968c05f76dfdef1993bf455ba3e7c.png"},6593:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/flowname-4dbb04cfbe09957f2863d302f3b4dcdf.png"},22086:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/if-f5fab1935def7b68e3740a6cd0451dfb.png"},90165:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/openedby-fa21e9d62f24dbb05d44318b3dd07d95.png"},78420:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/rejected1-8af30a8d71de75e0748f6f13804d0a4e.png"},16660:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/rejected2-ab57619f6d996f6677c9fdab06e0d654.png"},14647:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/stateapproved-12b868ece371645b6facfb01d0b35773.png"},69554:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/tableselect-0bf93e959a1049be9a4a5e61bb2ceb98.png"},51355:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/thenplus-925ae39a0f2c7ee745357f1bf316ae15.png"}}]);