"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[47075],{58860:(e,r,t)=>{t.d(r,{xA:()=>s,yg:()=>d});var o=t(37953);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),u=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=u(e.components);return o.createElement(l.Provider,{value:r},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},f=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(t),f=n,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||a;return t?o.createElement(d,c(c({ref:r},s),{},{components:t})):o.createElement(d,c({ref:r},s))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=f;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[m]="string"==typeof e?e:n,c[1]=i;for(var u=2;u<a;u++)c[u]=t[u];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},821:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>b,frontMatter:()=>i,metadata:()=>u,toc:()=>m});t(37953);var o=t(58860);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function c(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}const i={id:"useModalForm",title:"useModalForm","example-tags":["form","chakra-ui","react-hook-form"]},l=void 0,u={unversionedId:"examples/form/chakra-ui/useModalForm",id:"examples/form/chakra-ui/useModalForm",title:"useModalForm",description:"useModalForm hook allows you to manage a form within a modal. It provides some useful methods to handle the form modal. You can view the live example or review the source code to see how it's used with Chakra UI.",source:"@site/docs/examples/form/chakra-ui/useModalForm.md",sourceDirName:"examples/form/chakra-ui",slug:"/examples/form/chakra-ui/useModalForm",permalink:"/docs/examples/form/chakra-ui/useModalForm",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/examples/form/chakra-ui/useModalForm.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1718365598,formattedLastUpdatedAt:"Jun 14, 2024",frontMatter:{id:"useModalForm",title:"useModalForm","example-tags":["form","chakra-ui","react-hook-form"]},sidebar:"mainSidebar",previous:{title:"useForm",permalink:"/docs/examples/form/chakra-ui/useForm"},next:{title:"useDrawerForm",permalink:"/docs/examples/form/chakra-ui/useDrawerForm"}},s={},m=[],p=(f="CodeSandboxExample",function(e){return console.warn("Component "+f+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.yg)("div",e)});var f;const d={toc:m},y="wrapper";function b(e){var{components:r}=e,t=c(e,["components"]);return(0,o.yg)(y,a(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(r){n(e,r,t[r])}))}return e}({},d,t),{components:r,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"useModalForm")," hook allows you to manage a form within a modal. It provides some useful methods to handle the form modal. You can view the live example or review the source code to see how it's used with Chakra UI."),(0,o.yg)(p,{path:"form-chakra-use-modal-form",mdxType:"CodeSandboxExample"}))}b.isMDXComponent=!0}}]);