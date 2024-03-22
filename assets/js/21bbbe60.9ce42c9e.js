"use strict";(self.webpackChunkCreatorWorkflowsNow=self.webpackChunkCreatorWorkflowsNow||[]).push([[6735],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),p=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,b=u["".concat(o,".").concat(m)]||u[m]||d[m]||s;return r?a.createElement(b,i(i({ref:t},c),{},{components:r})):a.createElement(b,i({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<s;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85180:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const s={id:"exercise-2-3-dept-issue-table",title:"Department Issue Table",hide_table_of_contents:!0},i="Department Issue Table",l={unversionedId:"exercise-2-3-dept-issue-table",id:"exercise-2-3-dept-issue-table",title:"Department Issue Table",description:"The Dept Issue table will be used to allow users to submit issues encountered in service delivery. Using a custom table for departmental issues rather than overutilizing a platform table allows for:",source:"@site/labs/deptsvc/exercise-2-3_dept-issue-table.md",sourceDirName:".",slug:"/exercise-2-3-dept-issue-table",permalink:"/labs/deptsvc/exercise-2-3-dept-issue-table",draft:!1,tags:[],version:"current",frontMatter:{id:"exercise-2-3-dept-issue-table",title:"Department Issue Table",hide_table_of_contents:!0},sidebar:"deptsvc",previous:{title:"Department Request Table",permalink:"/labs/deptsvc/exercise-2-2-dept-req-table"},next:{title:"Department Inquiry Table",permalink:"/labs/deptsvc/exercise-2-4-dept-inq-table"}},o={},p=[],c={toc:p},u="wrapper";function d(e){let{components:t,...s}=e;return(0,n.kt)(u,(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"department-issue-table"},"Department Issue Table"),(0,n.kt)("p",null,"The Dept Issue table will be used to allow users to submit issues encountered in service delivery. Using a custom table for departmental issues rather than overutilizing a platform table allows for:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Simplified routing, assignment and ACLs"),(0,n.kt)("li",{parentName:"ul"},"Better custom reporting capabilities"),(0,n.kt)("li",{parentName:"ul"},"Scoped application security"),(0,n.kt)("li",{parentName:"ul"},"App-specific views and workspaces")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Setup the Dept Issue table using the same initial steps as the Dept Request table. Make sure to extend Dept Task"),(0,n.kt)("p",{parentName:"li"},"Set the ",(0,n.kt)("strong",{parentName:"p"},"Table label")," field to Dept Issue Select ",(0,n.kt)("strong",{parentName:"p"},"Auto number"),"\\\nSet the ",(0,n.kt)("strong",{parentName:"p"},"Prefix")," field to ",(0,n.kt)("strong",{parentName:"p"},"DEPTISSUE")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Issue Table Image 1",src:r(34521).Z,width:"1020",height:"808"})),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Set the permissions the same way as the previous table")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Issue Table Image 2",src:r(33719).Z,width:"1332",height:"752"})),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("strong",{parentName:"li"},"Edit table")," once the table has been created")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Then select the ",(0,n.kt)("strong",{parentName:"li"},"Forms")," link to navigate to the form view for the Dept Issue Table")),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(77277).Z,width:"1904",height:"350"})),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Remove the ",(0,n.kt)("strong",{parentName:"li"},"Configuration item"),", ",(0,n.kt)("strong",{parentName:"li"},"Active")," and ",(0,n.kt)("strong",{parentName:"li"},"Parent")," fields\\\nAdd the ",(0,n.kt)("strong",{parentName:"li"},"Opened")," and ",(0,n.kt)("strong",{parentName:"li"},"Opened by")," fields\\")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Issue Table Image 4",src:r(42684).Z,width:"2280",height:"888"})),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"To finish up, click ",(0,n.kt)("strong",{parentName:"li"},"Save")," in the top right")),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(7055).Z,width:"946",height:"350"})))}d.isMDXComponent=!0},7055:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/2023-03-29-14-01-01-62be3a8c96dcb2d80db3801681dfb95c.png"},77277:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/2023-03-29-14-03-42-ff972728e687323af4f716de16c7b7f7.png"},33719:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/base_8-9b9faba570085deddadda05a39d204b6.png"},34521:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/iss_1-ea71a15aa6753e4b42ce060d5a6a43ac.png"},42684:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/iss_3-e941f9d2fc70d7ffa0d0d9adb3098827.png"}}]);