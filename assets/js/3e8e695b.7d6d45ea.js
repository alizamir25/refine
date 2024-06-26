"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[53832],{58860:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>y});var r=n(37953);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,y=d["".concat(s,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(y,i(i({ref:t},l),{},{components:n})):r.createElement(y,i({ref:t},l))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},72203:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>b,frontMatter:()=>p,metadata:()=>c,toc:()=>d});n(37953);var r=n(58860);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const p={id:"csv-import",title:"CSV Import"},s=void 0,c={unversionedId:"advanced-tutorials/import-export/csv-import",id:"version-3.xx.xx/advanced-tutorials/import-export/csv-import",title:"CSV Import",description:"You can easily import CSV files for any resource by using refine's customizable useImport hook, optionally with ` component. useImport hook returns the necessary props for ` component.",source:"@site/versioned_docs/version-3.xx.xx/advanced-tutorials/import-export/csv-import.md",sourceDirName:"advanced-tutorials/import-export",slug:"/advanced-tutorials/import-export/csv-import",permalink:"/docs/3.xx.xx/advanced-tutorials/import-export/csv-import",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/advanced-tutorials/import-export/csv-import.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1719390383,formattedLastUpdatedAt:"Jun 26, 2024",frontMatter:{id:"csv-import",title:"CSV Import"},sidebar:"someSidebar",previous:{title:"CSV Export",permalink:"/docs/3.xx.xx/advanced-tutorials/import-export/csv-export"},next:{title:"Live / Realtime",permalink:"/docs/3.xx.xx/advanced-tutorials/real-time"}},l={},d=[{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",t)},u=m("DocThumbsUpDownFeedbackWidget"),y=m("CodeSandboxExample"),g={toc:d},f="wrapper";function b(e){var{components:t}=e,n=i(e,["components"]);return(0,r.yg)(f,a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"You can easily import CSV files for any resource by using ",(0,r.yg)("strong",{parentName:"p"},"refine"),"'s customizable ",(0,r.yg)("inlineCode",{parentName:"p"},"useImport")," hook, optionally with ",(0,r.yg)("inlineCode",{parentName:"p"},"<ImportButton>")," component. ",(0,r.yg)("inlineCode",{parentName:"p"},"useImport")," hook returns the necessary props for ",(0,r.yg)("inlineCode",{parentName:"p"},"<ImportButton>")," component."),(0,r.yg)("p",null,"Internally, ",(0,r.yg)("inlineCode",{parentName:"p"},"useImport")," uses ",(0,r.yg)("a",{parentName:"p",href:"https://www.papaparse.com/"},"Papa Parse")," to parse the CSV file contents."),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)(u,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"We'll use the ",(0,r.yg)("inlineCode",{parentName:"p"},"useImport")," hook and add the ",(0,r.yg)("inlineCode",{parentName:"p"},"<ImportButton>")," with properties returned from ",(0,r.yg)("inlineCode",{parentName:"p"},"useImport"),". When the button gets triggered, it creates the imported resources using ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/data-provider#create"},(0,r.yg)("inlineCode",{parentName:"a"},"create"))," or ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/data-provider#createmany"},(0,r.yg)("inlineCode",{parentName:"a"},"createMany"))," ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/data-provider"},"dataProvider")," methods under the hood."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/posts/list.tsx"',title:'"pages/posts/list.tsx"'},'import { List, useImport, ImportButton } from "@pankod/refine-antd";\n\nexport const PostList: React.FC = () => {\n  const importProps = useImport<IPostFile>();\n\n  return (\n    <List\n      headerProps={{\n        extra: <ImportButton {...importProps} />,\n      }}\n    >\n      ...\n    </List>\n  );\n};\n\ninterface IPostFile {\n  id: number;\n  title: string;\n  content: string;\n  userId: number;\n  categoryId: number;\n  status: "published" | "draft" | "rejected";\n}\n\ninterface IPost {\n  id: number;\n  title: string;\n  content: string;\n  status: "published" | "draft" | "rejected";\n  category: { id: number };\n  user: { id: number };\n}\n')),(0,r.yg)("p",null,"As an example, let's say we have a CSV file like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-csv",metastring:'title="dummy.csv"',title:'"dummy.csv"'},'"title","content","status","categoryId","userId"\n"dummy title 1","dummy content 1","rejected","3","8"\n"dummy title 2","dummy content 2","draft","44","8"\n"dummy title 3","cummy content 3","published","41","10"\n')),(0,r.yg)("p",null,"We need to map the CSV data to the API's data. In our case, we have a ",(0,r.yg)("inlineCode",{parentName:"p"},"categoryId")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"userId")," in CSV. For the API, we need to send the ",(0,r.yg)("inlineCode",{parentName:"p"},"category")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"user")," objects. To do this, we'll use the ",(0,r.yg)("inlineCode",{parentName:"p"},"mapData")," prop of ",(0,r.yg)("inlineCode",{parentName:"p"},"useImport")," hook."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/posts/list.tsx"',title:'"pages/posts/list.tsx"'},'import { List, useImport, ImportButton } from "@pankod/refine-antd";\n\nexport const PostList: React.FC = () => {\n  const importProps = useImport<IPostFile>({\n    // highlight-start\n    mapData: (item) => {\n      return {\n        title: item.title,\n        content: item.content,\n        status: item.status,\n        category: {\n          id: item.categoryId,\n        },\n        user: {\n          id: item.userId,\n        },\n      };\n    },\n    // highlight-end\n  });\n\n  return (\n    <List\n      headerProps={{\n        extra: <ImportButton {...importProps} />,\n      }}\n    >\n      ...\n    </List>\n  );\n};\n\ninterface IPostFile {\n  id: number;\n  title: string;\n  content: string;\n  userId: number;\n  categoryId: number;\n  status: "published" | "draft" | "rejected";\n}\n\ninterface IPost {\n  id: number;\n  title: string;\n  content: string;\n  status: "published" | "draft" | "rejected";\n  category: { id: number };\n  user: { id: number };\n}\n')),(0,r.yg)("p",null,"And it's done. When you click on the button and provide a CSV file of the headers ",(0,r.yg)("inlineCode",{parentName:"p"},'"title"'),",",(0,r.yg)("inlineCode",{parentName:"p"},'"content"'),",",(0,r.yg)("inlineCode",{parentName:"p"},'"status"'),",",(0,r.yg)("inlineCode",{parentName:"p"},'"categoryId"')," and ",(0,r.yg)("inlineCode",{parentName:"p"},'"userId"'),", it should be mapped and imported. Mapped data is the request payload. Either as part of an array or by itself as part of every request. In our example, it fires ",(0,r.yg)("inlineCode",{parentName:"p"},"POST")," request/requests like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="POST https://api.fake-rest.refine.dev/posts"',title:'"POST','https://api.fake-rest.refine.dev/posts"':!0},'{\n  "title": "dummy title 1",\n  "content": "dummy content 1",\n  "status": "rejected",\n  "category": {\n    "id": "3"\n  },\n  "user": {\n    "id": "8"\n  }\n}\n')),(0,r.yg)("p",null,"Depending on the ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/import-export/useImport/#batchsize"},(0,r.yg)("inlineCode",{parentName:"a"},"batchSize"))," option, posts can get sent one by one or as batches. By default, all records are sent in one ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/data-provider#createmany"},(0,r.yg)("inlineCode",{parentName:"a"},"createMany"))," call.")),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)(u,{id:"example",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)(y,{path:"import-export-antd",mdxType:"CodeSandboxExample"})))}b.isMDXComponent=!0}}]);