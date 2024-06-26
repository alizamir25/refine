"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[23029],{58860:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>m});var n=t(37953);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},l="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(t),d=a,m=l["".concat(i,".").concat(d)]||l[d]||y[d]||o;return t?n.createElement(m,s(s({ref:r},u),{},{components:t})):n.createElement(m,s({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c[l]="string"==typeof e?e:a,s[1]=c;for(var p=2;p<o;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},33468:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>b,frontMatter:()=>c,metadata:()=>p,toc:()=>l});t(37953);var n=t(58860);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const c={title:"useCan",siderbar_label:"useCan"},i=void 0,p={unversionedId:"authorization/hooks/use-can/index",id:"authorization/hooks/use-can/index",title:"useCan",description:"useCan uses the Access Control Provider's can function as the query function for TanStack Query's useQuery. It takes the parameters that can takes. It can also be configured with queryOptions for useQuery. Returns the result of useQuery.",source:"@site/docs/authorization/hooks/use-can/index.md",sourceDirName:"authorization/hooks/use-can",slug:"/authorization/hooks/use-can/",permalink:"/docs/authorization/hooks/use-can/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/authorization/hooks/use-can/index.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1719390383,formattedLastUpdatedAt:"Jun 26, 2024",frontMatter:{title:"useCan",siderbar_label:"useCan"},sidebar:"mainSidebar",previous:{title:"<CanAccess />",permalink:"/docs/authorization/components/can-access/"},next:{title:"Casbin",permalink:"/docs/examples/access-control/casbin"}},u={},l=[{value:"Usage",id:"usage",level:2},{value:"Performance",id:"performance",level:2},{value:"Properties",id:"properties",level:2},{value:"resource <PropTag required />",id:"resource-",level:3},{value:"action <PropTag required />",id:"action-",level:3},{value:"params",id:"params",level:3},{value:"queryOptions",id:"queryoptions",level:3},{value:"Return values",id:"return-values",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3},{value:"Type Parameters",id:"type-parameters",level:3},{value:"Return values",id:"return-values-1",level:3}],y=e=>function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",r)},d=y("DocThumbsUpDownFeedbackWidget"),m=y("PropTag"),g=y("PropsTable"),f={toc:l},h="wrapper";function b(e){var{components:r}=e,t=s(e,["components"]);return(0,n.yg)(h,o(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){a(e,r,t[r])}))}return e}({},f,t),{components:r,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"useCan")," uses the ",(0,n.yg)("a",{parentName:"p",href:"/docs/authorization/access-control-provider"},"Access Control Provider's")," ",(0,n.yg)("inlineCode",{parentName:"p"},"can")," function as the query function for ",(0,n.yg)("a",{parentName:"p",href:"https://tanstack.com/query/latest"},"TanStack Query's")," ",(0,n.yg)("a",{parentName:"p",href:"https://tanstack.com/query/latest/docs/react/guides/queries"},(0,n.yg)("inlineCode",{parentName:"a"},"useQuery")),". It takes the ",(0,n.yg)("a",{parentName:"p",href:"/docs/core/interface-references#canparams"},"parameters")," that ",(0,n.yg)("inlineCode",{parentName:"p"},"can")," takes. It can also be configured with ",(0,n.yg)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useQuery"},(0,n.yg)("inlineCode",{parentName:"a"},"queryOptions"))," for ",(0,n.yg)("inlineCode",{parentName:"p"},"useQuery"),". Returns the result of ",(0,n.yg)("inlineCode",{parentName:"p"},"useQuery"),"."),(0,n.yg)("h2",{id:"usage"},"Usage"),(0,n.yg)(d,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useCan } from "@refinedev/core";\n\nconst { data } = useCan({\n  resource: "resource-you-ask-for-access",\n  action: "action-type-on-resource",\n  params: { foo: "optional-params" },\n});\n'))),(0,n.yg)("h2",{id:"performance"},"Performance"),(0,n.yg)(d,{id:"performance",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"As the number of points that check for access control in your app increases, the performance of your app may take a hit, especially if its access control involves remote endpoints. Caching the access control checks helps quite a bit, and since Refine uses ",(0,n.yg)("a",{parentName:"p",href:"https://tanstack.com/query/latest"},"TanStack Query"),", it can be easily done by confiruging the ",(0,n.yg)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useQuery"},(0,n.yg)("inlineCode",{parentName:"a"},"staleTime")," and ",(0,n.yg)("inlineCode",{parentName:"a"},"cacheTime"))," properties."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},'import { useCan } from "@refinedev/core";\n\n// inside your component\n\nconst { data } = useCan({\n    resource: "resource-you-ask-for-access",\n    action: "action-type-on-resource",\n    params: { foo: "optional-params" } },\n    queryOptions: {\n        staleTime: 5 * 60 * 1000, // 5 minutes\n    }\n});\n'))),(0,n.yg)("h2",{id:"properties"},"Properties"),(0,n.yg)("h3",{id:"resource-"},"resource ",(0,n.yg)(m,{required:!0,mdxType:"PropTag"})),(0,n.yg)(d,{id:"resource-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"Passes to ",(0,n.yg)("a",{parentName:"p",href:"/docs/authorization/access-control-provider"},"Access Control Provider's")," ",(0,n.yg)("inlineCode",{parentName:"p"},"can")," function's ",(0,n.yg)("inlineCode",{parentName:"p"},"resource")," parameter"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},'useCan({\n  resource: "resource-you-ask-for-access",\n});\n'))),(0,n.yg)("h3",{id:"action-"},"action ",(0,n.yg)(m,{required:!0,mdxType:"PropTag"})),(0,n.yg)(d,{id:"action-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"Passes to ",(0,n.yg)("a",{parentName:"p",href:"/docs/authorization/access-control-provider"},"Access Control Provider's")," ",(0,n.yg)("inlineCode",{parentName:"p"},"can")," function's ",(0,n.yg)("inlineCode",{parentName:"p"},"action")," parameter"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},'useCan({\n  action: "resource-you-ask-for-access",\n});\n'))),(0,n.yg)("h3",{id:"params"},"params"),(0,n.yg)(d,{id:"params",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"Passes to ",(0,n.yg)("a",{parentName:"p",href:"/docs/authorization/access-control-provider"},"Access Control Provider's")," ",(0,n.yg)("inlineCode",{parentName:"p"},"can")," function's ",(0,n.yg)("inlineCode",{parentName:"p"},"params")," parameter"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},'useCan({\n  params: { foo: "optional-params" },\n});\n'))),(0,n.yg)("h3",{id:"queryoptions"},"queryOptions"),(0,n.yg)(d,{id:"queryoptions",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"Query options for ",(0,n.yg)("a",{parentName:"p",href:"https://tanstack.com/query/latest"},"TanStack Query's")," ",(0,n.yg)("a",{parentName:"p",href:"https://tanstack.com/query/latest/docs/react/guides/queries"},(0,n.yg)("inlineCode",{parentName:"a"},"useQuery")),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},"useCan({\n  queryOptions: {\n    staleTime: 5 * 60 * 1000, // 5 minutes\n  },\n});\n"))),(0,n.yg)("h2",{id:"return-values"},"Return values"),(0,n.yg)(d,{id:"return-values",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"useCan")," will return the Query result of ",(0,n.yg)("a",{parentName:"p",href:"https://tanstack.com/query/latest"},"TanStack Query's")," ",(0,n.yg)("a",{parentName:"p",href:"https://tanstack.com/query/latest/docs/react/guides/queries"},(0,n.yg)("inlineCode",{parentName:"a"},"useQuery")),"."),(0,n.yg)("p",null,"For example, if you want to check if the user can create a post based on the return value:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'const App = (\n  <Refine\n    // ...\n    accessControlProvider={{\n      can: async ({ resource, action }) => {\n        if (resource === "post" && action === "create") {\n          return {\n            can: false,\n            reason: "Unauthorized",\n          };\n        }\n\n        return { can: true };\n      },\n    }}\n  />\n);\n\nconst MyComponent = () => {\n  const { data: canCreatePost } = useCan({\n    action: "create",\n    resource: "post",\n  });\n\n  console.log(canCreatePost); // { can: false, reason: "Unauthorized" }\n};\n'))),(0,n.yg)("h2",{id:"api-reference"},"API Reference"),(0,n.yg)("h3",{id:"properties-1"},"Properties"),(0,n.yg)(d,{id:"properties-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)(g,{module:"@refinedev/core/useCan",mdxType:"PropsTable"})),(0,n.yg)("h3",{id:"type-parameters"},"Type Parameters"),(0,n.yg)(d,{id:"type-parameters",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Property"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/core/interface-references#canresponse"},"CanResponse")),(0,n.yg)("td",{parentName:"tr",align:null},"Result data of the query ",(0,n.yg)("a",{parentName:"td",href:"/docs/core/interface-references#httperror"},(0,n.yg)("inlineCode",{parentName:"a"},"HttpError"))))))),(0,n.yg)("h3",{id:"return-values-1"},"Return values"),(0,n.yg)(d,{id:"return-values-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Description"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Result of the ",(0,n.yg)("a",{parentName:"td",href:"https://tanstack.com/query/latest"},"TanStack Query's")," ",(0,n.yg)("a",{parentName:"td",href:"https://tanstack.com/query/latest/docs/react/guides/queries"},(0,n.yg)("inlineCode",{parentName:"a"},"useQuery"))),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://tanstack.com/query/v4/docs/react/reference/useQuery"},(0,n.yg)("inlineCode",{parentName:"a"},"QueryObserverResult<{ data: CanReturnType; }>"))))))))}b.isMDXComponent=!0}}]);