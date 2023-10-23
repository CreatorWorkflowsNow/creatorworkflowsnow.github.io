"use strict";(self.webpackChunkCreatorWorkflowsNow=self.webpackChunkCreatorWorkflowsNow||[]).push([[1362],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},51679:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={id:"create-app",title:"1.1 Create the Application",hide_table_of_contents:!0,draft:!1},i=void 0,l={unversionedId:"1.0-Build-the-Foundation/create-app",id:"1.0-Build-the-Foundation/create-app",title:"1.1 Create the Application",description:"Overview",source:"@site/labs/telework-vancouver/1.0-Build-the-Foundation/1.1-Create-App.md",sourceDirName:"1.0-Build-the-Foundation",slug:"/1.0-Build-the-Foundation/create-app",permalink:"/labs/telework-vancouver/1.0-Build-the-Foundation/create-app",draft:!1,tags:[],version:"current",frontMatter:{id:"create-app",title:"1.1 Create the Application",hide_table_of_contents:!0,draft:!1},sidebar:"teleworkvancouver",previous:{title:"Overview",permalink:"/labs/telework-vancouver/1.0-Build-the-Foundation/overview"},next:{title:"1.2 Arrangement Table",permalink:"/labs/telework-vancouver/1.0-Build-the-Foundation/create-arrangement-table"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Instructions",id:"instructions",level:2},{value:"Exercise Recap",id:"exercise-recap",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,'In this exercise, you\'ll create a scoped application named "Telework Case Management" in ServiceNow.'),(0,r.kt)("p",null,'A scoped application, or "app" for short, acts as a container for all the assets that constitute an application, including tables, forms, flows, and security features.'),(0,r.kt)("p",null,"Only the Owner of the application and invited Collaborators can make changes in the app. "),(0,r.kt)("h2",{id:"instructions"},"Instructions"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Getting Started Dialog"),': If the "Getting Started" dialog appears, close it by clicking the ',(0,r.kt)("span",{className:"button-purple"},"Get Started")," button.\n",(0,r.kt)("img",{src:a(78496).Z,width:"802",height:"551"}))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"App Engine Studio Homepage"),": Once you close the dialog, you'll be on the homepage of App Engine Studio. Here, you can:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Create new applications or extend previously developed ones."),(0,r.kt)("li",{parentName:"ul"},"Explore various pre-built templates to address common business challenges.")),(0,r.kt)("p",{parentName:"li"},"Feel free to return here later to review the capabilities offered by these templates."))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Create the App"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Click the ",(0,r.kt)("span",{className:"button-purple"},"Create App")," button.\n",(0,r.kt)("img",{src:a(18457).Z,width:"1000",height:"484"}))))),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Complete the Form"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fill out the form with the following details:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Name: ",(0,r.kt)("inlineCode",{parentName:"li"},"Telework Case Management")),(0,r.kt)("li",{parentName:"ul"},"Description: ",(0,r.kt)("inlineCode",{parentName:"li"},"Manage Telework requests across departments")),(0,r.kt)("li",{parentName:"ul"},"Upload the ",(0,r.kt)("strong",{parentName:"li"},"telework_App_Logo.png")," file you downloaded.\n",(0,r.kt)("img",{src:a(8345).Z,width:"667",height:"438"}))))))),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Continue"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("span",{className:"button-purple"},"Continue"),".\n",(0,r.kt)("img",{src:a(89041).Z,width:"685",height:"301"}))))),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Let's Add Roles"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'In the "Let\'s add roles" screen, click ',(0,r.kt)("span",{className:"button-purple"},"Continue"),".\n",(0,r.kt)("img",{src:a(45097).Z,width:"649",height:"497"}))))),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Go to App Dashboard"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("span",{className:"button-purple"},"Go to app dashboard"),".\n",(0,r.kt)("img",{src:a(86669).Z,width:"954",height:"620"}))))),(0,r.kt)("h2",{id:"exercise-recap"},"Exercise Recap"),(0,r.kt)("p",null,'Congratulations! You\'ve successfully created a ServiceNow application named "Telework Case Management."'),(0,r.kt)("p",null,"In the following exercises, we will build upon this foundation by adding data, experiences, logic, and security to make this application truly functional."))}d.isMDXComponent=!0},18457:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1_Create_App-4d7e46977a2d18ccb4f4da90ec9ed06c.png"},78496:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1_Getting_Started-de3cfdb5af5f41bd3390cb3d4738f3f2.png"},8345:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-10-18-14-04-42-690f43ec05fd53e79de050d4274401c4.png"},45097:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-10-18-14-06-33-e01ef17e10c19706b33e313f9df65a40.png"},89041:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-10-18-14-07-21-2141d2c0fbe1b4cf0cf2a45f536a26c4.png"},86669:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Go_to_app_dashboard-a2512f7c2132e7170764c3a7ddf03a39.png"}}]);