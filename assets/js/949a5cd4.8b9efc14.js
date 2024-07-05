"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[53970],{58860:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>y});var r=a(37953);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),s=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},b="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(a),f=n,y=b["".concat(i,".").concat(f)]||b[f]||u[f]||o;return a?r.createElement(y,l(l({ref:t},p),{},{components:a})):r.createElement(y,l({ref:t},p))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[b]="string"==typeof e?e:n,l[1]=c;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},38586:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>b});a(37953);var r=a(58860);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const c={id:"basic-tanstack-table",title:"Tables with Tanstack Table",sidebar_label:"Basic Table","example-title":"Basic TanStack Table","example-tags":["table","react-table","tanstack-table"]},i=void 0,s={unversionedId:"examples/table/tanstack-table/basic-tanstack-table",id:"examples/table/tanstack-table/basic-tanstack-table",title:"Tables with Tanstack Table",description:"Refine allows you to use all the features of TanStack Table with @refinedev/react-table adapter. In this way, you can manage your server-side data operations. By using this adapter, you can directly use all the features of TanStack Table in your Refine project.",source:"@site/docs/examples/table/tanstack-table/basic.md",sourceDirName:"examples/table/tanstack-table",slug:"/examples/table/tanstack-table/basic-tanstack-table",permalink:"/docs/examples/table/tanstack-table/basic-tanstack-table",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/examples/table/tanstack-table/basic.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1720193117,formattedLastUpdatedAt:"Jul 5, 2024",frontMatter:{id:"basic-tanstack-table",title:"Tables with Tanstack Table",sidebar_label:"Basic Table","example-title":"Basic TanStack Table","example-tags":["table","react-table","tanstack-table"]},sidebar:"mainSidebar",previous:{title:"useTable",permalink:"/docs/packages/tanstack-table/use-table/"},next:{title:"Advanced Table",permalink:"/docs/examples/table/tanstack-table/advanced-tanstack-table"}},p={},b=[],u=(f="CodeSandboxExample",function(e){return console.warn("Component "+f+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",e)});var f;const y={toc:b},d="wrapper";function m(e){var{components:t}=e,a=l(e,["components"]);return(0,r.yg)(d,o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){n(e,t,a[t])}))}return e}({},y,a),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Refine allows you to use all the features of ",(0,r.yg)("a",{parentName:"p",href:"https://tanstack.com/table"},"TanStack Table")," with ",(0,r.yg)("inlineCode",{parentName:"p"},"@refinedev/react-table")," adapter. In this way, you can manage your server-side data operations. By using this adapter, you can directly use all the features of TanStack Table in your Refine project."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},"Refer to the Refine TanStack Table documentation for more information. \u2192")),(0,r.yg)(u,{path:"table-react-table-basic",mdxType:"CodeSandboxExample"}))}m.isMDXComponent=!0}}]);