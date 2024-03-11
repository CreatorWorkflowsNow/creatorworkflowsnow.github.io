"use strict";(self.webpackChunkCreatorWorkflowsNow=self.webpackChunkCreatorWorkflowsNow||[]).push([[9421],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),d=n,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||a;return r?o.createElement(f,i(i({ref:t},u),{},{components:r})):o.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},78947:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=r(87462),n=(r(67294),r(3905));const a={title:"Smarter Forms",sidebar_label:"3. Smarter Forms",hide_table_of_contents:!0},i=void 0,s={unversionedId:"Smarter-Forms/index",id:"Smarter-Forms/index",title:"Smarter Forms",description:"Purpose",source:"@site/labs/telework-201_vancouver/03-Smarter-Forms/index.md",sourceDirName:"03-Smarter-Forms",slug:"/Smarter-Forms/",permalink:"/labs/telework-201_vancouver/Smarter-Forms/",draft:!1,tags:[],version:"current",frontMatter:{title:"Smarter Forms",sidebar_label:"3. Smarter Forms",hide_table_of_contents:!0}},l={},c=[{value:"Purpose",id:"purpose",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"purpose"},"Purpose"),(0,n.kt)("p",null,"Amandas team is growing and so is the backlog for what the requestors would like in the Telework Case management application.\nThere are two things that need to be addressed:"),(0,n.kt)("p",null,"For Amanda's team, they need to be able to allow anyone to on their team to work on a telework case but right now, not everyone knows what to do when they log in - what should they look for?  How does the process progress?  For this issue, Amanda would like to implement 'Playbooks' into the workspace to guide the fulfillers through the process."),(0,n.kt)("p",null,"The second backlog item they need to implement is having the requestor double check their manager.  Right now, if there's no manager on the sys_user table, then the workflow stops and Amanda has to correct the issue.  To mitigate this, Amanda would like to add a 'Manager' question for verification on the record producer and have it auto-populate with the manager on file for ease of use."),(0,n.kt)("p",null,"In this section of the lab, we'll be using Process Automation Designer, UI Builder, and Dev Studio."),(0,n.kt)("h1",{id:"notes"},"Notes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"})))}m.isMDXComponent=!0}}]);