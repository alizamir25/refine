"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[84860],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,h=m["".concat(l,".").concat(u)]||m[u]||c[u]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5579:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>p,metadata:()=>s,toc:()=>c});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={id:"index",title:"1. Adding List Page",tutorial:{order:0,prev:!1,next:"3.xx.xx/tutorial/adding-crud-pages/{preferredUI}/add-edit-page"}},l=void 0,s={unversionedId:"tutorial/adding-crud-pages/mantine/index",id:"version-3.xx.xx/tutorial/adding-crud-pages/mantine/index",title:"1. Adding List Page",description:"In Unit 2.4, we created the CRUD pages automatically with Inferencer. In this unit, we will create the CRUD pages manually using the codes generated by Inferencer. So, you can customize the pages as you wish.",source:"@site/versioned_docs/version-3.xx.xx/tutorial/4-adding-crud-pages/mantine/add-list-page.md",sourceDirName:"tutorial/4-adding-crud-pages/mantine",slug:"/tutorial/adding-crud-pages/mantine/index",permalink:"/docs/3.xx.xx/tutorial/adding-crud-pages/mantine/index",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/tutorial/4-adding-crud-pages/mantine/add-list-page.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1708953660,formattedLastUpdatedAt:"Feb 26, 2024",frontMatter:{id:"index",title:"1. Adding List Page",tutorial:{order:0,prev:!1,next:"3.xx.xx/tutorial/adding-crud-pages/{preferredUI}/add-edit-page"}}},d={},c=[{value:"Creating List Page",id:"creating-list-page",level:2},{value:"Understanding the List Component",id:"understanding-the-list-component",level:2},{value:"Handling Relationships",id:"handling-relationships",level:3},{value:"Adding the List Page to the App",id:"adding-the-list-page-to-the-app",level:2}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},u=m("Checklist"),h=m("ChecklistItem"),f={toc:c};function g(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/tutorial/getting-started/antd/generate-crud-pages/"},"Unit 2.4"),", we created the CRUD pages automatically with Inferencer. In this unit, we will create the CRUD pages manually using the codes generated by Inferencer. So, you can customize the pages as you wish."),(0,r.kt)("h2",{id:"creating-list-page"},"Creating List Page"),(0,r.kt)("p",null,"First, let's create our file under the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/pages/blog-posts")," folder. We will name it ",(0,r.kt)("inlineCode",{parentName:"p"},"list.tsx"),". Then, we will copy the list page code generated by Inferencer and paste it into the file."),(0,r.kt)("p",null,"To copy the code and paste it into the file, follow the steps below:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to the ",(0,r.kt)("a",{href:"http://localhost:3000/blog-posts",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts")," in your browser.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Click on the "Show Code" button in the bottom right corner of the page.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'You can see the list page code generated by Inferencer. Click on the "Copy" button to copy the code.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Paste the code into the you created, ",(0,r.kt)("inlineCode",{parentName:"p"},"list.tsx")," file."))),(0,r.kt)("p",null,"You can see the list page code generated by Inferencer below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts"},'setInitialRoutes(["/blog-posts"]);\n\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport {\n  MantineProvider,\n  Global,\n  NotificationsProvider,\n  useNotificationProvider,\n  LightTheme,\n  Layout,\n  ReadyPage,\n  ErrorComponent,\n} from "@pankod/refine-mantine";\nimport { MantineInferencer } from "@pankod/refine-inferencer/mantine";\n\nconst App = () => {\n  return (\n    <MantineProvider theme={LightTheme} withNormalizeCSS withGlobalStyles>\n      <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n      <NotificationsProvider position="top-right">\n        <Refine\n          routerProvider={routerProvider}\n          dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n          notificationProvider={useNotificationProvider}\n          ReadyPage={ReadyPage}\n          catchAll={<ErrorComponent />}\n          Layout={Layout}\n          resources={[\n            {\n              name: "blog_posts",\n              list: MantineInferencer,\n              show: MantineInferencer,\n              create: MantineInferencer,\n              edit: MantineInferencer,\n            },\n          ]}\n        />\n      </NotificationsProvider>\n    </MantineProvider>\n  );\n};\n\nrender(<App />);\n')),(0,r.kt)("p",null,"Instead of coding the list page component from scratch, Inferencer created the required code base on API response, so that we can customize."),(0,r.kt)("h2",{id:"understanding-the-list-component"},"Understanding the List Component"),(0,r.kt)("p",null,"We will go through the list page components and hooks one by one."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<List/>")," is a ",(0,r.kt)("strong",{parentName:"p"},"refine")," component that is used to presentation purposes like showing create button or page title etc."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/mantine/components/basic-views/list"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"<List/>")," documentation for more information ","\u2192"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<Table/>")," is a native ",(0,r.kt)("strong",{parentName:"p"},"Mantine")," component that is used to display the data in a tabular format."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://mantine.dev/core/table/"},"Refer to the ",(0,r.kt)("strong",{parentName:"a"},"Mantine")," ",(0,r.kt)("inlineCode",{parentName:"a"},"<Table/>")," documentation for more information ","\u2192"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"useTable")," hook, imported from ",(0,r.kt)("inlineCode",{parentName:"p"},"@pankod/refine-react-table")," package, has been developed by using the ",(0,r.kt)("strong",{parentName:"p"},"TanStack Table v8")," package and ",(0,r.kt)("inlineCode",{parentName:"p"},"useTable")," hook imported from ",(0,r.kt)("inlineCode",{parentName:"p"},"@pankod/refine-core")," package."),(0,r.kt)("p",{parentName:"li"},"It provides all the features of the ",(0,r.kt)("inlineCode",{parentName:"p"},"useTable")," hook from ",(0,r.kt)("inlineCode",{parentName:"p"},"@pankod/refine-core")," package as well as the ",(0,r.kt)("inlineCode",{parentName:"p"},"useTable")," hook from ",(0,r.kt)("strong",{parentName:"p"},"TanStack Table v8")," package."),(0,r.kt)("p",{parentName:"li"},"It is used to fetch the data and manage the table state."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/packages/documentation/react-table/"},"Refer to the ",(0,r.kt)("strong",{parentName:"a"},"@pankod/refine-react-table")," ",(0,r.kt)("inlineCode",{parentName:"a"},"useTable")," documentation for more information ","\u2192")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://tanstack.com/table/v8"},"Refer to the ",(0,r.kt)("strong",{parentName:"a"},"TanStack Table v8")," documentation for more information ","\u2192"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<EditButton/>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"<ShowButton/>")," are ",(0,r.kt)("strong",{parentName:"p"},"refine")," components that are used to navigate to the edit and show pages of the record."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/mantine/components/buttons/edit-button/"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"<EditButton/>")," documentation for more information ","\u2192")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/mantine/components/buttons/show-button/"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"<ShowButton/>")," documentation for more information ","\u2192")))),(0,r.kt)("h3",{id:"handling-relationships"},"Handling Relationships"),(0,r.kt)("p",null,"Each blog post includes the ",(0,r.kt)("inlineCode",{parentName:"p"},"category")," field which has ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," property. This is a foreign key that points to the ",(0,r.kt)("inlineCode",{parentName:"p"},"categories"),' resource which is different than "blog_post" resource.'),(0,r.kt)("p",null,"There is a ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," field In the ",(0,r.kt)("inlineCode",{parentName:"p"},"categories")," resource. To display the category ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," in the table, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"useMany")," hook provided by ",(0,r.kt)("strong",{parentName:"p"},"refine"),"."),(0,r.kt)("p",null,"This hook allows us to fetch data for multiple records in a single request by providing the ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),"'s of the related records. In this case, we need to provide the ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),"'s of the blog posts categories. It is particularly useful when we need to fetch related data for multiple records."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useMany/"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"useMany")," documentation for more information ","\u2192")),(0,r.kt)("p",null,"In this tutorial, each blog post record has a ",(0,r.kt)("inlineCode",{parentName:"p"},"category")," field as below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="https://api.fake-rest.refine.dev/blog_posts"',title:'"https://api.fake-rest.refine.dev/blog_posts"'},'{\n  ...\n  "category": {\n    "id": 1\n  }\n  ...\n},\n{\n  ...\n  "category": {\n    "id": 2\n  }\n  ...\n}\n')),(0,r.kt)("p",null,"We can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"useMany")," hook to fetch the full category records for each of these blog posts, like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useMany } from "@pankod/refine-core";\n\nconst { data } = useMany({\n  resource: "categories",\n  ids: blogPosts.map((blogPost) => blogPost.category.id),\n});\n')),(0,r.kt)("p",null,"This will pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"resource"),"\xa0and ",(0,r.kt)("inlineCode",{parentName:"p"},"ids")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"getMany")," function. The ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider")," will then make a single request to the API to fetch the full records for each category related to the blog posts. The resulting ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," variable will be an array of category records, like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'[\n  {\n    id: 1,\n    title: "mock category title",\n  },\n  {\n    id: 2,\n    title: "another mock category title",\n  },\n];\n')),(0,r.kt)("p",null,"We can then use this ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," array to display the ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," of each category in the table."),(0,r.kt)("h2",{id:"adding-the-list-page-to-the-app"},"Adding the List Page to the App"),(0,r.kt)("p",null,"Now that we have created the list page, we need to add it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"App.tsx")," file."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"src/App.tsx")," file on your editor.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Import the created ",(0,r.kt)("inlineCode",{parentName:"p"},"BlogPostList")," component.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"MantineInferencer")," component with the ",(0,r.kt)("inlineCode",{parentName:"p"},"BlogPostList")," component."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport {\n  MantineProvider,\n  Global,\n  NotificationsProvider,\n  useNotificationProvider,\n  LightTheme,\n  Layout,\n  ReadyPage,\n  ErrorComponent,\n} from "@pankod/refine-mantine";\nimport { MantineInferencer } from "@pankod/refine-inferencer/mantine";\n\n//highlight-next-line\nimport { BlogPostList } from "pages/blog-posts/list";\n\nconst App = () => {\n  return (\n    <MantineProvider theme={LightTheme} withNormalizeCSS withGlobalStyles>\n      <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n      <NotificationsProvider position="top-right">\n        <Refine\n          routerProvider={routerProvider}\n          dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n          notificationProvider={useNotificationProvider}\n          ReadyPage={ReadyPage}\n          catchAll={<ErrorComponent />}\n          Layout={Layout}\n          resources={[\n            {\n              name: "blog_posts",\n              //highlight-next-line\n              list: BlogPostList,\n              edit: MantineInferencer,\n              show: MantineInferencer,\n              create: MantineInferencer,\n            },\n          ]}\n        />\n      </NotificationsProvider>\n    </MantineProvider>\n  );\n};\nexport default App;\n')),(0,r.kt)("p",null,"Now, we can see the list page in the browser at ",(0,r.kt)("a",{href:"http://localhost:3000/blog-posts",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts")),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(u,{mdxType:"Checklist"},(0,r.kt)(h,{id:"add-list-page-mantine",mdxType:"ChecklistItem"},"I added the list page to the app."),(0,r.kt)(h,{id:"add-list-page-mantine-2",mdxType:"ChecklistItem"},"I understood the list page components and hooks."),(0,r.kt)(h,{id:"add-list-page-mantine-3",mdxType:"ChecklistItem"},"I understood the relationship handling.")))}g.isMDXComponent=!0}}]);