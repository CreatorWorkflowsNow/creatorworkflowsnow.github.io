"use strict";(self.webpackChunkCreatorWorkflowsNow=self.webpackChunkCreatorWorkflowsNow||[]).push([[6364],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,g=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return n?i.createElement(g,r(r({ref:t},l),{},{components:n})):i.createElement(g,r({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3498:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const o={id:"faqs",title:"FAQs",hide_table_of_contents:!0},r=void 0,s={unversionedId:"additional_content/faqs",id:"additional_content/faqs",title:"FAQs",description:"Are App Engine Studio applications built in a private application scope?",source:"@site/labs/collaborate/additional_content/9000-faqs.md",sourceDirName:"additional_content",slug:"/additional_content/faqs",permalink:"/labs/collaborate/additional_content/faqs",draft:!1,tags:[],version:"current",sidebarPosition:9e3,frontMatter:{id:"faqs",title:"FAQs",hide_table_of_contents:!0},sidebar:"labaemc",previous:{title:"Cloning Tips",permalink:"/labs/collaborate/additional_content/cloning"},next:{title:"Install Requirements",permalink:"/labs/collaborate/additional_content/install-reqs"}},p={},c=[{value:"Are App Engine Studio applications built in a private application scope?",id:"are-app-engine-studio-applications-built-in-a-private-application-scope",level:2},{value:"Can applications be accessed from App Engine Studio to ServiceNow Studio, and vice-versa?",id:"can-applications-be-accessed-from-app-engine-studio-to-servicenow-studio-and-vice-versa",level:2},{value:"Can App Engine Studio applications be integrated with other applications outside of ServiceNow?",id:"can-app-engine-studio-applications-be-integrated-with-other-applications-outside-of-servicenow",level:2},{value:"Can I integrate App Engine Studio with Source Control?",id:"can-i-integrate-app-engine-studio-with-source-control",level:2},{value:"Can I turn off the automatic execution of ATF tests and Instance Scan definitions?",id:"can-i-turn-off-the-automatic-execution-of-atf-tests-and-instance-scan-definitions",level:2},{value:"Can I change the instance where ATF tests and Instance Scan definitions are executed?",id:"can-i-change-the-instance-where-atf-tests-and-instance-scan-definitions-are-executed",level:2},{value:"Does App Engine Studio support domain separation?",id:"does-app-engine-studio-support-domain-separation",level:2},{value:"How can I safely expose third-party integrations in App Engine Studio?",id:"how-can-i-safely-expose-third-party-integrations-in-app-engine-studio",level:2},{value:"What credential types does App Engine Studio support?",id:"what-credential-types-does-app-engine-studio-support",level:2}],l={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,i.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"are-app-engine-studio-applications-built-in-a-private-application-scope"},"Are App Engine Studio applications built in a private application scope?"),(0,a.kt)("p",null,"Yes, each application is developed in its own scope."),(0,a.kt)("h2",{id:"can-applications-be-accessed-from-app-engine-studio-to-servicenow-studio-and-vice-versa"},"Can applications be accessed from App Engine Studio to ServiceNow Studio, and vice-versa?"),(0,a.kt)("p",null,"Yes. Applications built in App Engine Studio are accessible from ServiceNow Studio."),(0,a.kt)("p",null,"All application configurations are captured in the application scope, regardless of the development studio the configurations are performed in."),(0,a.kt)("p",null,"There are several capabilities available in ServiceNow Studio that are not accessible from App Engine Studio, including business rules, client scripts, and notifications. "),(0,a.kt)("h2",{id:"can-app-engine-studio-applications-be-integrated-with-other-applications-outside-of-servicenow"},"Can App Engine Studio applications be integrated with other applications outside of ServiceNow?"),(0,a.kt)("p",null,"Yes, App Engine Studios can interact with third-party systems by leveraging IntegrationHub spokes / actions exposed through Flow Designer."),(0,a.kt)("h2",{id:"can-i-integrate-app-engine-studio-with-source-control"},"Can I integrate App Engine Studio with Source Control?"),(0,a.kt)("p",null,"Yes, application developers can integrate with a Git Source Control repository to save and manage multiple versions of an application from a sub-production instance."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"For more information see ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://docs.servicenow.com/csh?topicname=source-control-operations.html&version=latest"},"Product Documentation:Source control operations in App Engine Studio")))),(0,a.kt)("h2",{id:"can-i-turn-off-the-automatic-execution-of-atf-tests-and-instance-scan-definitions"},"Can I turn off the automatic execution of ATF tests and Instance Scan definitions?"),(0,a.kt)("p",null,"If the ATF system properties are not enabled in the testing instance as part of the guided setup, you will receive a warning during deployment, however the flow will continue. "),(0,a.kt)("h2",{id:"can-i-change-the-instance-where-atf-tests-and-instance-scan-definitions-are-executed"},"Can I change the instance where ATF tests and Instance Scan definitions are executed?"),(0,a.kt)("p",null,"Yes, this can be accomplished by updating the \u2018Instance Type\u2019 value for an Environment record to \u2018Testing\u2019. Alternatively, the decision table can be modified to make the decision for \u2018Instance Type = Staging\u2019 (for example) point to the Testing sub-flow."),(0,a.kt)("h2",{id:"does-app-engine-studio-support-domain-separation"},"Does App Engine Studio support domain separation?"),(0,a.kt)("p",null,"Domain separation is not supported for App Engine Studio. The domain field may exist on data tables, but there is no business logic to manage the data."),(0,a.kt)("h2",{id:"how-can-i-safely-expose-third-party-integrations-in-app-engine-studio"},"How can I safely expose third-party integrations in App Engine Studio?"),(0,a.kt)("p",null,"Consider pre-configuring authorized sub-flows for application developers to use when sharing data with third-party systems instead of allowing App Engine Studio developers to access IntegrationHub actions via Flow Designer."),(0,a.kt)("p",null,"This way, developers are not directly accessing any third-party systems, and data is shared and presented in a consistent manner across all applications built in App Engine Studio."),(0,a.kt)("h2",{id:"what-credential-types-does-app-engine-studio-support"},"What credential types does App Engine Studio support?"),(0,a.kt)("p",null,"For Utah and previous versions, only Basic Auth is supported. "),(0,a.kt)("p",null,"In Vancouver, OAuth credential support was added for Pipelines and Deployments.  "),(0,a.kt)("p",null,"For more information, please visit ",(0,a.kt)("a",{parentName:"p",href:"https://docs.servicenow.com/csh?topicname=configure-oauth-credentials-pipelines-deployments.html&version=latest"},"Product Docs: Configure OAuth credentials for use in Pipelines and Deployments"),"."))}u.isMDXComponent=!0}}]);