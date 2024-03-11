"use strict";(self.webpackChunkCreatorWorkflowsNow=self.webpackChunkCreatorWorkflowsNow||[]).push([[8377],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=o(a),c=r,g=d["".concat(p,".").concat(c)]||d[c]||k[c]||l;return a?n.createElement(g,i(i({ref:t},m),{},{components:a})):n.createElement(g,i({ref:t},m))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},65494:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const l={title:"1. Securely Expand",sidebar_label:"1. Securely Expand",hide_table_of_contents:!0},i="Overview",s={unversionedId:"Governance/Securely-Expand",id:"Governance/Securely-Expand",title:"1. Securely Expand",description:"Amanda has successfully rolled out her application to her team, and it's caught the attention of another team who also wishes to use it. A primary condition is to maintain the privacy of records across the two teams.",source:"@site/labs/telework-201_vancouver/01-Governance/1-Securely-Expand.md",sourceDirName:"01-Governance",slug:"/Governance/Securely-Expand",permalink:"/labs/telework-201_vancouver/Governance/Securely-Expand",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"1. Securely Expand",sidebar_label:"1. Securely Expand",hide_table_of_contents:!0}},p={},o=[{value:"Help from App Engine Admins",id:"help-from-app-engine-admins",level:2},{value:"Refine the access controls",id:"refine-the-access-controls",level:2},{value:"Assign the role to Abel",id:"assign-the-role-to-abel",level:2},{value:"Open user Abel",id:"open-user-abel",level:3},{value:"Let&#39;s test",id:"lets-test",level:2}],m={toc:o},d="wrapper";function k(e){let{components:t,...l}=e;return(0,r.kt)(d,(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Amanda has successfully rolled out her application to her team, and it's caught the attention of another team who also wishes to use it. A primary condition is to maintain the privacy of records across the two teams."),(0,r.kt)("p",null,"In this exercise, we will compartamentalize telework cases for the users in the Development department and for the users in the Customer support team.  "),(0,r.kt)("p",null,"We'll configure this by defining:"),(0,r.kt)("blockquote",null,(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"One fulfiller role for each team: Fulfiller_Development and Fulfiller_Customer_Support "))),(0,r.kt)("blockquote",null,(0,r.kt)("ol",{parentName:"blockquote",start:2},(0,r.kt)("li",{parentName:"ol"},"Then we'll define specific access controls for each."))),(0,r.kt)("blockquote",null,(0,r.kt)("ol",{parentName:"blockquote",start:3},(0,r.kt)("li",{parentName:"ol"},"In the end, one team will have visibility only over requests from users in the Development department while the other team will have access only to requests from the users in the Customer support department. "))),(0,r.kt)("p",null,"This will ensure both teams can use the app while maintaining the necessary separation and privacy of data."),(0,r.kt)("p",null,"Let's get started. "),(0,r.kt)("p",null,"Citizen developers like Amanda need special privileges to configure access controls so Amanda is going to request..."),(0,r.kt)("h2",{id:"help-from-app-engine-admins"},"Help from App Engine Admins"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Logged in as Admin")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Elevate to Security Admin"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Steps"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"large-number"},"\u278a")),(0,r.kt)("td",{parentName:"tr",align:null},"In the top right, click the ",(0,r.kt)("strong",{parentName:"td"},"Avatar"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"large-number"},"\u278b")),(0,r.kt)("td",{parentName:"tr",align:null},"Select ",(0,r.kt)("strong",{parentName:"td"},"Elevate role"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"large-number"},"\u278c")),(0,r.kt)("td",{parentName:"tr",align:null},"Check ","[\u2714]"," security_admin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"large-number"},"\u278d")),(0,r.kt)("td",{parentName:"tr",align:null},"Click ",(0,r.kt)("span",{className:"button-purple"},"Update"),".")))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(91550).Z,width:"1099",height:"713"})))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"App Engine Studio > Security")),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Steps")),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"large-number"},"\u278a")),(0,r.kt)("td",{parentName:"tr",align:null},"In AES, click ",(0,r.kt)("strong",{parentName:"td"},"More"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"large-number"},"\u278b")),(0,r.kt)("td",{parentName:"tr",align:null},"Click ",(0,r.kt)("strong",{parentName:"td"},"Security"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"large-number"},"\u278c")),(0,r.kt)("td",{parentName:"tr",align:null},"Click ",(0,r.kt)("strong",{parentName:"td"},"Add"))))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(73638).Z,width:"783",height:"577"})))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"When Amanda created the app it was only for one team and having only one user role was enough.\nNow that we need to open the application to another team we need to have more specific roles to ensure proper security.")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create role ",(0,r.kt)("strong",{parentName:"p"},"Fulfiller_Development")),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Steps")),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"large-number"},"\u278a")),(0,r.kt)("td",{parentName:"tr",align:null},"Click ",(0,r.kt)("strong",{parentName:"td"},"build a new role"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"large-number"},"\u278b")),(0,r.kt)("td",{parentName:"tr",align:null},"Click ",(0,r.kt)("span",{className:"button-purple"},"Continue"),".")))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(1727).Z,width:"764",height:"553"})))),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Give the role a name and description."),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Steps")),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Name"),(0,r.kt)("td",{parentName:"tr",align:null},"Fulfiller_Development")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Description"),(0,r.kt)("td",{parentName:"tr",align:null},"Fulfiller in the Development department")))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(24954).Z,width:"905",height:"609"})))),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Give the role the desired permissions"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(64850).Z,width:"894",height:"712"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Success")),(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("span",{className:"button-purple"},"Done"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(87398).Z,width:"898",height:"630"})))),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Repeat the steps 4 to 7 to create the role ",(0,r.kt)("strong",{parentName:"p"}," Fulfiller_Customer_Support ")),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Steps")),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Name"),(0,r.kt)("td",{parentName:"tr",align:null},"Fulfiller_Customer_Support")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Description"),(0,r.kt)("td",{parentName:"tr",align:null},"Fulfiller in the Customer Support department")))))),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You should see the two new roles in the app"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(33100).Z,width:"737",height:"364"})))),(0,r.kt)("h2",{id:"refine-the-access-controls"},"Refine the access controls"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Navigate to the Access Control List (ACL)"),(0,r.kt)("img",{src:a(9910).Z,width:"953",height:"334"}))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Filter the list of records")),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Filter")),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"large-number"},"\u278a")),(0,r.kt)("td",{parentName:"tr",align:null},"Set the filter as shown below")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"large-number"},"\u278b")),(0,r.kt)("td",{parentName:"tr",align:null},"Click ",(0,r.kt)("strong",{parentName:"td"},"Run"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"large-number"},"\u278c")),(0,r.kt)("td",{parentName:"tr",align:null},"Click on the ",(0,r.kt)("strong",{parentName:"td"},"Updated by")," to get the admin ACL at the top")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"large-number"},"\u278d")),(0,r.kt)("td",{parentName:"tr",align:null},"Open the first record")))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(62607).Z,width:"930",height:"551"})))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Review the ACL ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Define the condition: Opened by someone in the Development department"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We click on the condition field, scroll down to select ",(0,r.kt)("strong",{parentName:"p"},"Show related fields")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(90969).Z,width:"907",height:"696"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Select "Opened by \u27f9 User fields"'),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(5715).Z,width:"900",height:"140"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click again on the field and we can now see the fields inside the Opened by"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(26183).Z,width:"933",height:"285"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Scroll down and select ",(0,r.kt)("strong",{parentName:"p"},"department")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(1511).Z,width:"978",height:"287"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click again on the field and then select ",(0,r.kt)("strong",{parentName:"p"},"Opened by Department")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(48959).Z,width:"978",height:"289"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Finally set the condition value to ",(0,r.kt)("strong",{parentName:"p"},"Development")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(42199).Z,width:"977",height:"113"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Save the record"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(69843).Z,width:"988",height:"97"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Notice ServiceNow has generated a description"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(84939).Z,width:"984",height:"690"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To secure the data access let's review the other ACL our work "),(0,r.kt)("p",{parentName:"li"},"We need to delete any ACL that does not have any restriction"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(13993).Z,width:"995",height:"702"})))))),(0,r.kt)("h2",{id:"assign-the-role-to-abel"},"Assign the role to Abel"),(0,r.kt)("h3",{id:"open-user-abel"},"Open user Abel"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to the list of users"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Steps"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"large-number"},"\u278a")),(0,r.kt)("td",{parentName:"tr",align:null},"Click the ",(0,r.kt)("strong",{parentName:"td"},"All")," menu")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"large-number"},"\u278b")),(0,r.kt)("td",{parentName:"tr",align:null},"Search for ",(0,r.kt)("strong",{parentName:"td"},"Users"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"large-number"},"\u278c")),(0,r.kt)("td",{parentName:"tr",align:null},"Click on ",(0,r.kt)("strong",{parentName:"td"},"Users"))))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(29889).Z,width:"473",height:"533"})))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the user ",(0,r.kt)("strong",{parentName:"p"},"Abel")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(76770).Z,width:"954",height:"297"})))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Edit")," Roles"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(39339).Z,width:"936",height:"290"})))),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Grant Abel the telework user role"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(64773).Z,width:"953",height:"725"})))),(0,r.kt)("h2",{id:"lets-test"},"Let's test"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to App Engine Studio")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Preview the Telework case table"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(11815).Z,width:"939",height:"325"})))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Notice we can see all the records"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(46646).Z,width:"954",height:"338"})))),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go back to the admin view & Impersonate ",(0,r.kt)("strong",{parentName:"p"},"Abel")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(51446).Z,width:"604",height:"286"})))),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go back to the Telework case list and Notice we can see all the records"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(63608).Z,width:"881",height:"337"})))))}k.isMDXComponent=!0},29889:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/06-Create-new-user-1-94bb22cf08656457d78d855411451aa8.png"},91550:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/segment_01_Elevate_Security_Admin-8ce369048b7cae1e75a477e32fd39e33.png"},73638:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/segment_02_AES_Go_to_Security-cc6c597486bbd94949d85cc59d3ea6f6.png"},1727:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/segment_03_AES_Create_Role_01-25d1b1e42b82a05384836e476aaf5367.png"},24954:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/segment_03_AES_Create_Role_02-74bf69ad1a2163e9d1d9e858b11308d3.png"},64850:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/segment_03_AES_Create_Role_03_Permission-0592cb7c77486a45ccca5f2a85eecc53.png"},87398:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/segment_03_AES_Create_Role_04_Success-3bb03b073a27238893c412a13807d532.png"},33100:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/segment_03_AES_Create_Role_05_Result-5863f517f8a96a5fe55078c3e5f40288.png"},9910:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/segment_04_ACL_01_Go_to_ACL-d1c62be6af7b24f141e91108035858f5.png"},62607:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/segment_04_ACL_02_Filter_ACLs-f3f7e2fad64fb1dd894c394121611a3c.png"},90969:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/segment_04_ACL_03_Condition_01-8eb3ec929f7311ddefffea8e1b2df539.png"},5715:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/segment_04_ACL_03_Condition_02-5b1b18ac3d243e8018609e8a3ec608c3.png"},26183:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/segment_04_ACL_03_Condition_03-e219298720283c47c42e302f135dd6be.png"},1511:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/segment_04_ACL_03_Condition_04-0e8f24fcbc3476fd355d2e15b84e1416.png"},48959:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/segment_04_ACL_03_Condition_05-627ec16a46adaa5eb6ade9a9d20705e8.png"},42199:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/segment_04_ACL_03_Condition_06-d20b322e56d984fb59e2b77343323a6b.png"},69843:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/segment_04_ACL_03_Condition_07_Save_ACL-d463ada6e95c6703e261a79dfb3c63d0.png"},84939:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/segment_04_ACL_03_Condition_08-f05ee85ada4649b314edb484981af2b4.png"},13993:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/segment_04_ACL_03_Delete_ACL_with_no_restriction-36de25b1852798847587c43e58615821.png"},76770:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/segment_04_Assign_Role_01-064e1b9d2e1e95722268f4eea7ee703e.png"},39339:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/segment_04_Assign_Role_02-dfabc913f6b43602c9ca51514b40dfe1.png"},64773:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/segment_04_Assign_Role_03-b485f48d1dd1bbee74316c8fbe0bac55.png"},11815:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/segment_04_Test_01-6ebe456fc1ae727e2cc4d48c3a163906.png"},46646:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/segment_04_Test_02-e39da0f7839adb839143918cad58c19d.png"},51446:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/segment_04_Test_03-0df8d1ebc23842667eaf87e1877ddfc9.png"},63608:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/segment_04_Test_04-c0ec56320aec7d214002636ff24c67a1.png"}}]);