"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[95228],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>b});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(t),b=o,m=d["".concat(s,".").concat(b)]||d[b]||u[b]||i;return t?n.createElement(m,a(a({ref:r},l),{},{components:t})):n.createElement(m,a({ref:r},l))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},95364:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>k,frontMatter:()=>p,metadata:()=>c,toc:()=>u});t(67294);var n=t(3905);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const p={id:"useSubscription",title:"useSubscription",source:"packages/core/src/hooks/live/useSubscription/index.ts"},s=void 0,c={unversionedId:"api-reference/core/hooks/live/useSubscription",id:"version-3.xx.xx/api-reference/core/hooks/live/useSubscription",title:"useSubscription",description:"useSubscription calls the subscribe method from liveProvider when mounted. It is useful when you want to subscribe to a Realtime channel.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/live/useSubscription.md",sourceDirName:"api-reference/core/hooks/live",slug:"/api-reference/core/hooks/live/useSubscription",permalink:"/docs/3.xx.xx/api-reference/core/hooks/live/useSubscription",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/live/useSubscription.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1710323714,formattedLastUpdatedAt:"Mar 13, 2024",frontMatter:{id:"useSubscription",title:"useSubscription",source:"packages/core/src/hooks/live/useSubscription/index.ts"},sidebar:"someSidebar",previous:{title:"usePublish",permalink:"/docs/3.xx.xx/api-reference/core/hooks/live/usePublish"},next:{title:"useNavigation",permalink:"/docs/3.xx.xx/api-reference/core/hooks/navigation/useNavigation"}},l={},u=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:3},{value:"channel <PropTag required/>",id:"channel-",level:3},{value:"onLiveEvent <PropTag required/>",id:"onliveevent-",level:3},{value:"types",id:"types",level:3},{value:"enabled",id:"enabled",level:3},{value:"params",id:"params",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],d=e=>function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",r)},b=d("DocThumbsUpDownFeedbackWidget"),m=d("PropTag"),v=d("PropsTable"),f={toc:u};function k(e){var{components:r}=e,t=a(e,["components"]);return(0,n.kt)("wrapper",i(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){o(e,r,t[r])}))}return e}({},f,t),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"useSubscription")," calls the ",(0,n.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/live-provider/#subscribe"},(0,n.kt)("inlineCode",{parentName:"a"},"subscribe"))," method from ",(0,n.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/live-provider"},(0,n.kt)("inlineCode",{parentName:"a"},"liveProvider"))," when mounted. It is useful when you want to subscribe to a Realtime channel."),(0,n.kt)("admonition",{type:"info-tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"refine")," use this hook internally in data hooks to ",(0,n.kt)("inlineCode",{parentName:"p"},"subscribe")," Realtime data. You can refer liveProvider's ",(0,n.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/live-provider/#supported-hooks-subscription"},"Supported Hooks Subscriptions")," section for more information.")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)(b,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useSubscription } from "@pankod/refine-core";\n\nuseSubscription({\n    channel: "channel-name",\n    types: ["event-name", "another-event-name"]\n    onLiveEvent: (event) => {},\n});\n\n'))),(0,n.kt)("h3",{id:"properties"},"Properties"),(0,n.kt)(b,{id:"properties",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.kt)("p",null,"Will be passed to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/live-provider/#subscribe"},"subscribe")," method from the ",(0,n.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/live-provider"},"liveProvider")," as a parameter. You can use these properties from the ",(0,n.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/live-provider"},(0,n.kt)("inlineCode",{parentName:"a"},"liveProvider")),"'s ",(0,n.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/live-provider/#subscribe"},(0,n.kt)("inlineCode",{parentName:"a"},"subscribe"))," method and use them to subscribe to a channel.")),(0,n.kt)("h3",{id:"channel-"},"channel ",(0,n.kt)(m,{required:!0,mdxType:"PropTag"})),(0,n.kt)(b,{id:"channel-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.kt)("p",null,"Channel name to subscribe.")),(0,n.kt)("h3",{id:"onliveevent-"},"onLiveEvent ",(0,n.kt)(m,{required:!0,mdxType:"PropTag"})),(0,n.kt)(b,{id:"onliveevent-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.kt)("p",null,"Callback that is run when new events from subscription arrive.")),(0,n.kt)("h3",{id:"types"},"types"),(0,n.kt)(b,{id:"types",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: ",(0,n.kt)("inlineCode",{parentName:"p"},'["*"]'))),(0,n.kt)("p",null,"Type of events to subscribe. ",(0,n.kt)("inlineCode",{parentName:"p"},'"\\*"')," means all events.")),(0,n.kt)("h3",{id:"enabled"},"enabled"),(0,n.kt)(b,{id:"enabled",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: ",(0,n.kt)("inlineCode",{parentName:"p"},"true")))),(0,n.kt)("h3",{id:"params"},"params"),(0,n.kt)(b,{id:"params",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.kt)("p",null,"You can pass any additional parameters to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/live-provider"},(0,n.kt)("inlineCode",{parentName:"a"},"liveProvider")),"'s ",(0,n.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/live-provider/#subscribe"},(0,n.kt)("inlineCode",{parentName:"a"},"subscribe"))," method."),(0,n.kt)("p",null,"Hooks that use ",(0,n.kt)("inlineCode",{parentName:"p"},"useSubscription")," internally, send the query's parameters(pagination, metaData, sort, filters, etc.) information along with this prop."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/live-provider/#supported-hooks-subscription"},'Refer to LiveProvider\'s "Supported Hooks Subscription" section for which hooks are using ',(0,n.kt)("inlineCode",{parentName:"a"},"useSubscription")," internally ","\u2192"))),(0,n.kt)("h2",{id:"api-reference"},"API Reference"),(0,n.kt)("h3",{id:"properties-1"},"Properties"),(0,n.kt)(b,{id:"properties-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.kt)(v,{module:"@pankod/refine-core/useSubscription",mdxType:"PropsTable"})))}k.isMDXComponent=!0}}]);