"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[93618],{15680:(e,r,t)=>{t.d(r,{xA:()=>l,yg:()=>m});var n=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(t),f=o,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return t?n.createElement(m,i(i({ref:r},l),{},{components:t})):n.createElement(m,i({ref:r},l))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},14423:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>x,frontMatter:()=>p,metadata:()=>s,toc:()=>u});t(96540);var n=t(15680);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const p={id:"layout-wrapper",title:"<LayoutWrapper>"},c=void 0,s={unversionedId:"api-reference/core/components/layout-wrapper",id:"version-3.xx.xx/api-reference/core/components/layout-wrapper",title:"<LayoutWrapper>",description:"Overview",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/components/layout-wrapper.md",sourceDirName:"api-reference/core/components",slug:"/api-reference/core/components/layout-wrapper",permalink:"/docs/3.xx.xx/api-reference/core/components/layout-wrapper",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/components/layout-wrapper.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1715064281,formattedLastUpdatedAt:"May 7, 2024",frontMatter:{id:"layout-wrapper",title:"<LayoutWrapper>"},sidebar:"someSidebar",previous:{title:"<Refine>",permalink:"/docs/3.xx.xx/api-reference/core/components/refine-config"},next:{title:"Inferencer",permalink:"/docs/3.xx.xx/api-reference/core/components/inferencer"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3}],d=e=>function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",r)},f=d("DocThumbsUpDownFeedbackWidget"),m=d("PropsTable"),y={toc:u},g="wrapper";function x(e){var{components:r}=e,t=i(e,["components"]);return(0,n.yg)(g,a(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){o(e,r,t[r])}))}return e}({},y,t),{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"overview"},"Overview"),(0,n.yg)(f,{id:"overview",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"<LayoutWrapper>")," wraps its contents in ",(0,n.yg)("strong",{parentName:"p"},"refine's")," layout with all customizations made in ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config"},(0,n.yg)("inlineCode",{parentName:"a"},"<Refine>"))," component. It is the default layout used in resource pages. It can be used in ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/advanced-tutorials/custom-pages"},"custom pages")," to use global layout."),(0,n.yg)("p",null,"This component accepts layout customizations to further customize the layout parameters (",(0,n.yg)("inlineCode",{parentName:"p"},"Title"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"Sider"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"Header"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"Footer"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"Layout"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"OffLayoutArea"),") defined in ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config"},(0,n.yg)("inlineCode",{parentName:"a"},"<Refine>"))," component.")),(0,n.yg)("h2",{id:"usage"},"Usage"),(0,n.yg)(f,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"<LayoutWrapper>")," can be used inside custom pages to use global layout with all its customizations."),(0,n.yg)("p",null,"An example use in a custom page may look like this:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'// highlight-next-line\nimport { Refine, Authenticated, LayoutWrapper } from "@pankod/refine-core";\n\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport "@pankod/refine/dist/styles.min.css";\n\nimport { PostList } from "pages/posts";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\n// highlight-start\nconst AuthenticatedPostReview = () => {\n  return (\n    <Authenticated>\n      <LayoutWrapper Sider={() => <></>}>\n        <PostReview />\n      </LayoutWrapper>\n    </Authenticated>\n  );\n};\n// highlight-end\n\nconst App: React.FC = () => {\n  return (\n    <Refine\n      // highlight-start\n      routerProvider={{\n        ...routerProvider,\n        routes: [\n          {\n            exact: true,\n            component: AuthenticatedPostReview,\n            path: "/authenticated-page",\n          },\n        ] as typeof routerProvider.routes,\n      }}\n      // highlight-end\n      dataProvider={dataProvider(API_URL)}\n      resources={[{ name: "posts", list: PostList }]}\n    />\n  );\n};\n\nexport default App;\n')),(0,n.yg)("p",null,"In this example, we hide the left sider only for this page. The rest should look same as resource pages.")),(0,n.yg)("h2",{id:"api-reference"},"API Reference"),(0,n.yg)("h3",{id:"properties"},"Properties"),(0,n.yg)(f,{id:"properties",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)(m,{module:"@pankod/refine-core/LayoutWrapper","Sider-description":"[Custom sider to use](/docs/3.xx.xx/api-reference/core/components/refine-config#sider)","Header-description":"[Custom header to use](/docs/3.xx.xx/api-reference/core/components/refine-config#header)","Title-description":"[Custom title to use](/docs/3.xx.xx/api-reference/core/components/refine-config#title)","Footer-description":"[Custom footer to use](/docs/3.xx.xx/api-reference/core/components/refine-config#footer)","OffLayoutArea-description":"[Custom off layout area to use](/docs/3.xx.xx/api-reference/core/components/refine-config#offlayoutarea)",mdxType:"PropsTable"}),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("inlineCode",{parentName:"p"},"*"),": These props have default values in ",(0,n.yg)("inlineCode",{parentName:"p"},"RefineContext")," and can also be set on ",(0,n.yg)("strong",{parentName:"p"},"<",(0,n.yg)("a",{parentName:"strong",href:"/docs/3.xx.xx/api-reference/core/components/refine-config"},"Refine"),">")," component."))))}x.isMDXComponent=!0}}]);