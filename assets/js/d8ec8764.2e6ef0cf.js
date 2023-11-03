"use strict";(self.webpackChunkCreatorWorkflowsNow=self.webpackChunkCreatorWorkflowsNow||[]).push([[4546],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,d=u["".concat(c,".").concat(m)]||u[m]||v[m]||i;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85734:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>v,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={title:"Security: Overview",sidebar_label:"Overview",hide_table_of_contents:!0,pagination_label:"Security"},o=void 0,l={unversionedId:"exercise-02-Security/Overview",id:"exercise-02-Security/Overview",title:"Security: Overview",description:"Purpose",source:"@site/labs/telework-201_vancouver/exercise-02-Security/0-Overview.md",sourceDirName:"exercise-02-Security",slug:"/exercise-02-Security/Overview",permalink:"/labs/telework-201_vancouver/exercise-02-Security/Overview",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Security: Overview",sidebar_label:"Overview",hide_table_of_contents:!0,pagination_label:"Security"},sidebar:"telework_201",previous:{title:"Data: Overview",permalink:"/labs/telework-201_vancouver/exercise-01-Data/Overview"},next:{title:"Restrict access from Admins",permalink:"/labs/telework-201_vancouver/exercise-02-Security/Restrict-access-from-Admins"}},c={},s=[{value:"Purpose",id:"purpose",level:2},{value:"Marc&#39;s Notes",id:"marcs-notes",level:2},{value:"References",id:"references",level:2}],p={toc:s},u="wrapper";function v(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"purpose"},"Purpose"),(0,a.kt)("p",null,"Cool, we have built a fully funcitonnal Telework Case Management application. "),(0,a.kt)("p",null,"But before we can deploy the app, our manager asked us to make sure the application is secure. The app might contain sensitive data about employees such as personal address that not even ServiceNow administrators should be able to see."),(0,a.kt)("p",null,"In this exercise, we will learn techniques for securing our application to specific users and roles."),(0,a.kt)("h2",{id:"marcs-notes"},"Marc's Notes"),(0,a.kt)("p",null,"Talk about:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"scope ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"the new Access-analyzer"),(0,a.kt)("p",{parentName:"li"},"ServiceNow\xae Access Analyzer an access evaluation tool that helps to view the permissions of an identity for a resource."),(0,a.kt)("admonition",{parentName:"li",title:"Might need to be installed ",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Check if installed on the cloud lab instance")))),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.servicenow.com/bundle/vancouver-application-development/page/build/applications/task/enable-application-administration.html"},"Restrict access to an application")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.servicenow.com/bundle/vancouver-application-development/page/build/applications/concept/c_ApplicationAccessSettings.html"},"Application access settings"))))}v.isMDXComponent=!0}}]);