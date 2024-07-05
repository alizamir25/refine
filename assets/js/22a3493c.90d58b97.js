"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[73244],{58860:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>u});var n=r(37953);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=d(r),m=o,u=s["".concat(l,".").concat(m)]||s[m]||g[m]||a;return r?n.createElement(u,i(i({ref:t},c),{},{components:r})):n.createElement(u,i({ref:t},c))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"==typeof e?e:o,i[1]=p;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},13405:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>p,metadata:()=>d,toc:()=>s});r(37953);var n=r(58860);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const p={id:"add-create-page",title:"4. Adding Create Page",tutorial:{order:0,prev:"3.xx.xx/tutorial/adding-crud-pages/{preferredUI}/add-show-page",next:"3.xx.xx/tutorial/adding-crud-pages/{preferredUI}/add-delete-feature"}},l=void 0,d={unversionedId:"tutorial/adding-crud-pages/mui/add-create-page",id:"version-3.xx.xx/tutorial/adding-crud-pages/mui/add-create-page",title:"4. Adding Create Page",description:"Create page is the page where you can create the record. In this tutorial, we will create the create page for the blog_posts resource.",source:"@site/versioned_docs/version-3.xx.xx/tutorial/4-adding-crud-pages/mui/add-create-page.md",sourceDirName:"tutorial/4-adding-crud-pages/mui",slug:"/tutorial/adding-crud-pages/mui/add-create-page",permalink:"/docs/3.xx.xx/tutorial/adding-crud-pages/mui/add-create-page",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/tutorial/4-adding-crud-pages/mui/add-create-page.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1720193117,formattedLastUpdatedAt:"Jul 5, 2024",frontMatter:{id:"add-create-page",title:"4. Adding Create Page",tutorial:{order:0,prev:"3.xx.xx/tutorial/adding-crud-pages/{preferredUI}/add-show-page",next:"3.xx.xx/tutorial/adding-crud-pages/{preferredUI}/add-delete-feature"}}},c={},s=[{value:"Creating Create Page",id:"creating-create-page",level:2},{value:"Understanding the Create Component",id:"understanding-the-create-component",level:2},{value:"Handling Relationships",id:"handling-relationships",level:3},{value:"Adding the Create Page to the App",id:"adding-the-create-page-to-the-app",level:2}],g=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",t)},m=g("DocThumbsUpDownFeedbackWidget"),u=g("Checklist"),h=g("ChecklistItem"),y={toc:s},f="wrapper";function b(e){var{components:t}=e,r=i(e,["components"]);return(0,n.yg)(f,a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},y,r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Create page is the page where you can create the record. In this tutorial, we will create the create page for the ",(0,n.yg)("inlineCode",{parentName:"p"},"blog_posts")," resource."),(0,n.yg)("h2",{id:"creating-create-page"},"Creating Create Page"),(0,n.yg)(m,{id:"creating-create-page",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"First, let's create our file under the ",(0,n.yg)("inlineCode",{parentName:"p"},"src/pages/blog-posts")," folder. We will name it ",(0,n.yg)("inlineCode",{parentName:"p"},"create.tsx"),". Then, we will copy the create page code generated by Inferencer and paste it into the file."),(0,n.yg)("p",null,"To copy the code and paste it into the file, follow the steps below:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Navigate to the ",(0,n.yg)("a",{href:"http://localhost:3000/blog-posts",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts")," in your browser.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},'To open the create page, click the "Create" button in the top right corner of the table.')),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},'On the create page, click on the "Show Code" button in the bottom right corner of the page.')),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},'You can see the create page code generated by Inferencer. Click on the "Copy" button to copy the code.')),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Paste the code into the you created, ",(0,n.yg)("inlineCode",{parentName:"p"},"create.tsx")," file."))),(0,n.yg)("p",null,"You can see the create page code generated by Inferencer below:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/create",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts/create"},'setInitialRoutes(["/blog-posts/create"]);\n\nimport { Refine } from "@pankod/refine-core";\nimport {\n  Layout,\n  ReadyPage,\n  ErrorComponent,\n  LightTheme,\n  CssBaseline,\n  GlobalStyles,\n  ThemeProvider,\n  RefineSnackbarProvider,\n  useNotificationProvider,\n} from "@pankod/refine-mui";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport { MuiInferencer } from "@pankod/refine-inferencer/mui";\n\nconst App: React.FC = () => {\n  return (\n    <ThemeProvider theme={LightTheme}>\n      <CssBaseline />\n      <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />\n      <RefineSnackbarProvider>\n        <Refine\n          routerProvider={routerProvider}\n          dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n          notificationProvider={useNotificationProvider}\n          Layout={Layout}\n          ReadyPage={ReadyPage}\n          catchAll={<ErrorComponent />}\n          resources={[\n            {\n              name: "blog_posts",\n              list: MuiInferencer,\n              show: MuiInferencer,\n              create: MuiInferencer,\n              edit: MuiInferencer,\n            },\n          ]}\n        />\n      </RefineSnackbarProvider>\n    </ThemeProvider>\n  );\n};\n\nrender(<App />);\n')),(0,n.yg)("p",null,"Instead of coding the create page component from scratch, Inferencer've created the required code base on API response, so that we can customize.")),(0,n.yg)("h2",{id:"understanding-the-create-component"},"Understanding the Create Component"),(0,n.yg)(m,{id:"understanding-the-create-component",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"We will go through the create page components and hooks one by one."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"<Create/>")," is a ",(0,n.yg)("strong",{parentName:"p"},"refine")," component that is used to presentation purposes like showing the title of the page, save button etc."),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/mui/components/basic-views/create"},"Refer to the ",(0,n.yg)("inlineCode",{parentName:"a"},"<Create/>")," documentation for more information ","\u2192"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"useForm")," hook, imported from ",(0,n.yg)("inlineCode",{parentName:"p"},"@pankod/refine-react-hook-form")," package, has been developed by using the ",(0,n.yg)("strong",{parentName:"p"},"React Hook Form")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"useForm")," hook imported from ",(0,n.yg)("inlineCode",{parentName:"p"},"@pankod/refine-core")," package."),(0,n.yg)("p",{parentName:"li"},"It provides all the features of the ",(0,n.yg)("inlineCode",{parentName:"p"},"useForm")," hook from ",(0,n.yg)("inlineCode",{parentName:"p"},"@pankod/refine-core")," package as well as the ",(0,n.yg)("inlineCode",{parentName:"p"},"useForm")," hook from ",(0,n.yg)("strong",{parentName:"p"},"React Hook Form"),"."),(0,n.yg)("p",{parentName:"li"},"It also provides the ",(0,n.yg)("inlineCode",{parentName:"p"},"saveButtonProps")," prop that we can pass to the submit button of the form."),(0,n.yg)("p",{parentName:"li"},"When you use ",(0,n.yg)("inlineCode",{parentName:"p"},"useForm")," in the edit page,it sends the form data to ",(0,n.yg)("inlineCode",{parentName:"p"},"dataProvider"),"'s ",(0,n.yg)("inlineCode",{parentName:"p"},"create")," method when the form is submitted."),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/packages/documentation/react-hook-form/useForm/"},"Refer to the ",(0,n.yg)("strong",{parentName:"a"},"@pankod/refine-react-hook-form")," ",(0,n.yg)("inlineCode",{parentName:"a"},"useForm")," documentation for more information ","\u2192")),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"https://react-hook-form.com/"},"Refer to the ",(0,n.yg)("strong",{parentName:"a"},"React Hook Form")," documentation for more information ","\u2192"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"All other components provided by ",(0,n.yg)("strong",{parentName:"p"},"Material UI")," are used to display the form fields."),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"https://mui.com/material-ui/getting-started/overview/"},"Refer to the ",(0,n.yg)("strong",{parentName:"a"},"Material UI")," documentation for more information ","\u2192"))))),(0,n.yg)("h3",{id:"handling-relationships"},"Handling Relationships"),(0,n.yg)(m,{id:"handling-relationships",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"In the edit page, we may need to select a record from another resource. For example, we may need to select a category from the ",(0,n.yg)("inlineCode",{parentName:"p"},"categories")," resource to assign the blog post to the category. In this case, we can use the ",(0,n.yg)("inlineCode",{parentName:"p"},"useAutocomplete")," hook provided by ",(0,n.yg)("strong",{parentName:"p"},"refine"),". This hook fetches the data by passing the params to the ",(0,n.yg)("inlineCode",{parentName:"p"},"dataProvider"),"'s ",(0,n.yg)("inlineCode",{parentName:"p"},"getList")," method. Then, it returns the necessary props for the ",(0,n.yg)("inlineCode",{parentName:"p"},"<Autocomplete/>")," component."),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/mui/hooks/useAutocomplete/"},"Refer to the ",(0,n.yg)("inlineCode",{parentName:"a"},"useAutocomplete")," documentation for more information ","\u2192")),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://mui.com/material-ui/react-autocomplete/"},"Refer to the ",(0,n.yg)("strong",{parentName:"a"},"Material UI")," ",(0,n.yg)("inlineCode",{parentName:"a"},"<Autocomplete/>")," documentation for more information ","\u2192")),(0,n.yg)("p",null,"In the auto-generated create page code, Inferencer used the ",(0,n.yg)("inlineCode",{parentName:"p"},"useAutocomplete")," hook to select a category from the ",(0,n.yg)("inlineCode",{parentName:"p"},"categories")," resource like below:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'const { selectProps: categorySelectProps } = useAutocomplete({\n  resource: "categories",\n});\n'))),(0,n.yg)("h2",{id:"adding-the-create-page-to-the-app"},"Adding the Create Page to the App"),(0,n.yg)(m,{id:"adding-the-create-page-to-the-app",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"Now that we have created the create page, we need to add it to the ",(0,n.yg)("inlineCode",{parentName:"p"},"App.tsx")," file."),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Open ",(0,n.yg)("inlineCode",{parentName:"p"},"src/App.tsx")," file on your editor.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Import the created ",(0,n.yg)("inlineCode",{parentName:"p"},"BlogPostCreate")," component.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Replace the ",(0,n.yg)("inlineCode",{parentName:"p"},"MuiInferencer")," component with the ",(0,n.yg)("inlineCode",{parentName:"p"},"BlogPostCreate")," component."))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport {\n  Layout,\n  ReadyPage,\n  ErrorComponent,\n  LightTheme,\n  CssBaseline,\n  GlobalStyles,\n  ThemeProvider,\n  RefineSnackbarProvider,\n  useNotificationProvider,\n} from "@pankod/refine-mui";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport { MuiInferencer } from "@pankod/refine-inferencer/mui";\n\nimport { BlogPostList } from "pages/blog-posts/list";\nimport { BlogPostEdit } from "pages/blog-posts/edit";\nimport { BlogPostShow } from "pages/blog-posts/show";\n//highlight-next-line\nimport { BlogPostCreate } from "pages/blog-posts/create";\n\nconst App: React.FC = () => {\n  return (\n    <ThemeProvider theme={LightTheme}>\n      <CssBaseline />\n      <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />\n      <RefineSnackbarProvider>\n        <Refine\n          routerProvider={routerProvider}\n          dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n          notificationProvider={useNotificationProvider}\n          Layout={Layout}\n          ReadyPage={ReadyPage}\n          catchAll={<ErrorComponent />}\n          resources={[\n            {\n              name: "blog_posts",\n              list: BlogPostList,\n              edit: BlogPostEdit,\n              show: BlogPostShow,\n              //highlight-next-line\n              create: BlogPostCreate,\n            },\n          ]}\n        />\n      </RefineSnackbarProvider>\n    </ThemeProvider>\n  );\n};\nexport default App;\n')),(0,n.yg)("p",null,"Now, we can see the create page in the browser at ",(0,n.yg)("a",{href:"http://localhost:3000/blog-posts/create",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts/create")),(0,n.yg)("br",null),(0,n.yg)("br",null),(0,n.yg)(u,{mdxType:"Checklist"},(0,n.yg)(h,{id:"add-create-page-mui",mdxType:"ChecklistItem"},"I added the create page to the app."),(0,n.yg)(h,{id:"add-create-page-mui-2",mdxType:"ChecklistItem"},"I understood the create page components and hooks."),(0,n.yg)(h,{id:"add-create-page-mui-3",mdxType:"ChecklistItem"},"I understood the relationship handling."))))}b.isMDXComponent=!0}}]);