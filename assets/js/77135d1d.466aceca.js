"use strict";(self.webpackChunkCreatorWorkflowsNow=self.webpackChunkCreatorWorkflowsNow||[]).push([[7219],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),h=n,g=m["".concat(l,".").concat(h)]||m[h]||d[h]||o;return a?r.createElement(g,i(i({ref:t},p),{},{components:a})):r.createElement(g,i({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},42750:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={id:"exercise-5-1",title:"Exercise 5: Putting it all together - Testing our application",sidebar_label:"5. Testing",hide_table_of_contents:!0,draft:!1},i=void 0,s={unversionedId:"exercise-5-1",id:"exercise-5-1",title:"Exercise 5: Putting it all together - Testing our application",description:"Duration: 15 minutes",source:"@site/labs/travelrequest/Exercise_5_1.md",sourceDirName:".",slug:"/exercise-5-1",permalink:"/labs/travelrequest/exercise-5-1",draft:!1,tags:[],version:"current",frontMatter:{id:"exercise-5-1",title:"Exercise 5: Putting it all together - Testing our application",sidebar_label:"5. Testing",hide_table_of_contents:!0,draft:!1},sidebar:"travelrequest",previous:{title:"4. Workflows",permalink:"/labs/travelrequest/exercise-4"},next:{title:"Lab Recap",permalink:"/labs/travelrequest/lab-recap"}},l={},c=[],p={toc:c},m="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(m,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Duration: 15 minutes")),(0,n.kt)("p",null,"Congratulations on making it so far! "),(0,n.kt)("p",null,"We have one last thing to do, which is to test our application. Our person of interest here is Billie Cowley who is wanting to raise a travel request. His direct manager is Krystle Stika, and this relationship has already been inherited through a Microsoft AD integration. We will first directly grant the Travel request user role to one of our employees for the test."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Head back into the main ServiceNow interface")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"On the global search, enter ",(0,n.kt)("strong",{parentName:"li"},"billie.cowley")," and click ",(0,n.kt)("strong",{parentName:"li"},"View results"),(0,n.kt)("img",{src:a(8044).Z,width:"809",height:"311"}))),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Billie Cowley"),(0,n.kt)("img",{src:a(5479).Z,width:"1663",height:"1016"}))),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"On Billie's user record, click the ",(0,n.kt)("strong",{parentName:"li"},"Roles")," tab below, then click ",(0,n.kt)("strong",{parentName:"li"},"Edit")," on the right hand side\n",(0,n.kt)("img",{src:a(26915).Z,width:"1663",height:"1016"}))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Also notice on the screenshot above that Billie's manager is Krystle Stika. You won't be able to see this on your screen, but note that this has been preconfigured for you.")),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Under ",(0,n.kt)("strong",{parentName:"li"},"Collection"),", search ",(0,n.kt)("strong",{parentName:"li"},"x_snc_travel"),", you should see the two roles you created for your custom application.")),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"Grant the ",(0,n.kt)("strong",{parentName:"li"},"user")," role to Billie by moving it into the ",(0,n.kt)("strong",{parentName:"li"},"Roles List"),(0,n.kt)("img",{src:a(36665).Z,width:"804",height:"581"}))),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Save"))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This is actually not best practice, but only for the purposes of today's activity. In a real implementation, it would be best to assign a role to a group, and then assign users to that group so they all inherit that role.")),(0,n.kt)("ol",{start:8},(0,n.kt)("li",{parentName:"ol"},"Click on the profile picture on the top right, and click ",(0,n.kt)("strong",{parentName:"li"},"Impersonate user"),(0,n.kt)("img",{src:a(31216).Z,width:"1399",height:"514"}))),(0,n.kt)("ol",{start:9},(0,n.kt)("li",{parentName:"ol"},"Search and select ",(0,n.kt)("strong",{parentName:"li"},"Billie Cowley"))),(0,n.kt)("ol",{start:10},(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Impersonate user"),(0,n.kt)("img",{src:a(47308).Z,width:"1399",height:"1016"}))),(0,n.kt)("ol",{start:11},(0,n.kt)("li",{parentName:"ol"},"Close the pop-up screen")),(0,n.kt)("ol",{start:12},(0,n.kt)("li",{parentName:"ol"},"Copy the current URL of the page, and open a new Browser tab")),(0,n.kt)("ol",{start:13},(0,n.kt)("li",{parentName:"ol"},"Paste the URL, and replace everything after ",(0,n.kt)("strong",{parentName:"li"},"service-now.com")," with ",(0,n.kt)("strong",{parentName:"li"},"/sp"))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"if the copied URL is"),": "),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://sad-oct-123-001.lab.service-now.com/"},"https://sad-oct-123-001.lab.service-now.com/")),"now/nav/ui/classic/params/target/ui_page.do%3Fsys_id%3De7766625074130102b8affa08c1ed037"),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"change it to:")),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://sad-oct-123-001.lab.service-now.com/"},"https://sad-oct-123-001.lab.service-now.com/")),"sp\n",(0,n.kt)("img",{src:a(15035).Z,width:"1184",height:"533"}))),(0,n.kt)("ol",{start:14},(0,n.kt)("li",{parentName:"ol"},"The Service Portal home page should now open")),(0,n.kt)("ol",{start:15},(0,n.kt)("li",{parentName:"ol"},"Under ",(0,n.kt)("strong",{parentName:"li"},"How can we help?"),", search for ",(0,n.kt)("strong",{parentName:"li"},"Travel request"),(0,n.kt)("img",{src:a(61625).Z,width:"1399",height:"1016"}))),(0,n.kt)("ol",{start:16},(0,n.kt)("li",{parentName:"ol"},"Click the ",(0,n.kt)("strong",{parentName:"li"},"Search icon"))),(0,n.kt)("ol",{start:17},(0,n.kt)("li",{parentName:"ol"},"The top result should return the form we had created in Exercise 3\n",(0,n.kt)("img",{src:a(52727).Z,width:"1399",height:"1016"}))),(0,n.kt)("ol",{start:18},(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Raise a travel request"))),(0,n.kt)("ol",{start:19},(0,n.kt)("li",{parentName:"ol"},"Confirm that the form appears as expected, then fill in all the fields\n",(0,n.kt)("img",{src:a(9474).Z,width:"1348",height:"997"}))),(0,n.kt)("ol",{start:20},(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Submit"))),(0,n.kt)("ol",{start:21},(0,n.kt)("li",{parentName:"ol"},"The next screen can be used to track the status of the request and add attachments\n",(0,n.kt)("img",{src:a(85023).Z,width:"2050",height:"1182"}))),(0,n.kt)("ol",{start:22},(0,n.kt)("li",{parentName:"ol"},"Go back to the ServiceNow main interface, and ",(0,n.kt)("strong",{parentName:"li"},"End impersonation"),(0,n.kt)("img",{src:a(28).Z,width:"386",height:"415"}))),(0,n.kt)("ol",{start:23},(0,n.kt)("li",{parentName:"ol"},"Under ",(0,n.kt)("strong",{parentName:"li"},"All"),", search and select ",(0,n.kt)("strong",{parentName:"li"},"My Approvals"),(0,n.kt)("img",{src:a(47987).Z,width:"316",height:"403"}))),(0,n.kt)("ol",{start:24},(0,n.kt)("li",{parentName:"ol"},"Remove the filter by clicking ",(0,n.kt)("strong",{parentName:"li"},"All"),(0,n.kt)("img",{src:a(26407).Z,width:"609",height:"300"}))),(0,n.kt)("ol",{start:25},(0,n.kt)("li",{parentName:"ol"},"Filter by the latest created approval date by clicking ",(0,n.kt)("strong",{parentName:"li"},"Created"))),(0,n.kt)("ol",{start:26},(0,n.kt)("li",{parentName:"ol"},"Click on the ",(0,n.kt)("strong",{parentName:"li"},"Requested")," record for ",(0,n.kt)("strong",{parentName:"li"},"Krystle Stika")," as the ",(0,n.kt)("strong",{parentName:"li"},"Approver"),(0,n.kt)("img",{src:a(46951).Z,width:"1745",height:"1005"}))),(0,n.kt)("ol",{start:27},(0,n.kt)("li",{parentName:"ol"},"Review the details you submitted on the bottom of the form, then click ",(0,n.kt)("strong",{parentName:"li"},"Approve"),(0,n.kt)("img",{src:a(43013).Z,width:"1637",height:"1010"}))),(0,n.kt)("ol",{start:28},(0,n.kt)("li",{parentName:"ol"},"You will be brought back to the list view")),(0,n.kt)("ol",{start:29},(0,n.kt)("li",{parentName:"ol"},"Click on the Approved record for your Travel request, if you followed all the steps so far, this should be the first record created: TRV0001001\n",(0,n.kt)("img",{src:a(18865).Z,width:"2194",height:"1670"}))),(0,n.kt)("ol",{start:30},(0,n.kt)("li",{parentName:"ol"},"On the record, notice that the ",(0,n.kt)("strong",{parentName:"li"},"State")," was automatically changed to ",(0,n.kt)("strong",{parentName:"li"},"Closed Complete"),", as per our approval flow that was designed\n",(0,n.kt)("img",{src:a(52660).Z,width:"1485",height:"473"}))))}d.isMDXComponent=!0},9474:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/2023-10-22-16-49-46-231e56e426eb3d110df37f488f29adef.png"},18865:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/2023-10-22-17-48-45-4051501304831df0ae59c0e0dd2ac13d.png"},85023:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/2023-11-08-20-39-41-86f273e000153a77aa81ac48fa4e3411.png"},46951:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/applist-7b66bc883b4bbff44c7bac0b9ee3df7f.png"},43013:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/approve-f02560f5235bf3e21427cbfa5bc19ea1.png"},47308:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/billie-40ece9a923b55e0801ad6436c0f61906.png"},26915:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/billierecord-004b6b4576c2b349441df98754b8cc96.png"},26407:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/clickall-bea9e8881a220a985d04340b804b7842.png"},52660:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/closedcomplete2-00c7b75ce3c7f162eb9adabd9965d2bf.png"},15035:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/getsp-970906d34bc8a03c420936a89aab0a75.gif"},36665:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/grantrole-bc1ea4bae483ee8c9ce60a1fc66f7513.png"},28:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/impanother-c3cba587beec249f3ceb50d0a91f6aff.png"},31216:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/impersonateuser-5837a89cf57c48084e8929e7a71cf658.png"},47987:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/myapprovals-3aee5fdfbf1a6926cc756377d679a2c6.png"},8044:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/searchbillie-f823eaeadeae350c79a4e102dcf169dd.png"},61625:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/searchtrv-5bc9ce56e3a980120bb252efec162b9d.png"},5479:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/selectbillie-c27ea169ae40cdc657af03d7a55b9a36.png"},52727:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/trvreqsearch-17786841d91d926558d80c3b9a4e4fc5.png"}}]);