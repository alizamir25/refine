"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[23921],{88123:(e,t,n)=>{n.d(t,{O:()=>m});var r=n(68835),o=n(37953),a=n(86743),i=n(22938),s=n(62201);const l=({horizontalSize:e,onMouseDown:t})=>o.createElement("div",{className:(0,r.A)("resize-handler","hidden","md:block","absolute","z-[3]","top-0","bottom-0","w-2.5","cursor-ew-resize"),"data-direction":"horizontal",onMouseDown:t,style:{left:`calc(${e}% - 5px)`}});function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){d(e,t,n[t])}))}return e}function u(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const m=e=>"nextjs"===(null==e?void 0:e.template)?o.createElement(f,e):o.createElement(g,e),g=e=>{var t,n,d,m,g,f,{startRoute:b,showNavigator:h,showLineNumbers:v,showOpenInCodeSandbox:y,initialPercentage:w=50,dependencies:x,showReadOnly:O,options:k={showTabs:!0,initMode:"lazy",classes:{"sp-bridge-frame":"!hidden","sp-layout":"!rounded-lg !border-gray-300 dark:!border-gray-700","sp-editor":"!gap-0 border-r !border-r-gray-300 dark:!border-r-gray-700","sp-tabs":"!border-b-gray-300 dark:!border-b-gray-700 !bg-gray-0 dark:!bg-gray-800","sp-tabs-scrollable-container":"!min-h-[32px]","sp-input":"!text-gray-800 dark:!text-gray-100","sp-cm":(0,r.A)("p-0 bg-transparent","[&>.cm-editor]:!bg-refine-react-light-code","[&>.cm-editor]:dark:!bg-refine-react-dark-code","[&_.cm-activeLine]:!bg-gray-100 [&_.cm-activeLine]:dark:!bg-gray-800"),"sp-icon-standalone":"!bg-gray-300 dark:!bg-gray-700 !text-gray-400 dark:!text-gray-500","sp-file-explorer":"border-r !border-r-gray-300 dark:!border-r-gray-700","sp-console":(0,r.A)("not-prose","!border-t-0 !border !border-solid !border-t-none","!border-gray-300 dark:!border-gray-700","!rounded-bl-lg !rounded-br-lg","!bg-refine-react-light-code","dark:!bg-refine-react-dark-code"),"sp-console-header":(0,r.A)("!bg-gray-0 dark:!bg-gray-800","border-b border-solid !border-b-gray-300 dark:!border-b-gray-700","!h-[32px] !min-h-[32px]"),"sp-console-header-actions":(0,r.A)("h-full","!gap-0"),"sp-console-header-button":(0,r.A)("!bg-transparent","!border !border-solid !border-b-0 !border-x-gray-300 dark:!border-x-gray-700","!border-t-2 !border-t-transparent [&[data-active='true']]:!border-t-refine-react-light-link dark:[&[data-active='true']]:!border-t-refine-react-dark-link","h-full","!text-gray-800 dark:!text-gray-100","!rounded-none","-ml-px"),"sp-console-list":(0,r.A)("!bg-refine-react-light-code","dark:!bg-refine-react-dark-code","[&>code]:!bg-transparent"),"sp-tab-button":(0,r.A)("!h-8","!px-2 !pb-2 !pt-1.5","!text-gray-800 dark:!text-gray-100","!border !border-solid !border-b-0 !border-x-gray-300 dark:!border-x-gray-700","-ml-px first:ml-0","!border-t-2 !border-t-transparent [&[data-active='true']]:!border-t-refine-react-light-link dark:[&[data-active='true']]:!border-t-refine-react-dark-link")}},template:S="react-ts",customSetup:N,files:E,previewOnly:P,layout:R,height:A=420,wrapperClassName:F,className:j,showFiles:C=!1,showConsole:D=!1,hidePreview:I=!1}=e,T=p(e,["startRoute","showNavigator","showLineNumbers","showOpenInCodeSandbox","initialPercentage","dependencies","showReadOnly","options","template","customSetup","files","previewOnly","layout","height","wrapperClassName","className","showFiles","showConsole","hidePreview"]);const[z,M]=o.useState(!1);o.useEffect((()=>{M(!0)}),[]);const{colorMode:L}=(0,s.G)();var V,B;null!=k||(k={}),null!==(V=(g=k).resizablePanels)&&void 0!==V||(g.resizablePanels=!0),null!==(B=(f=k).editorWidthPercentage)&&void 0!==B||(f.editorWidthPercentage=null!=w?w:50);const U={showTabs:k.showTabs,showLineNumbers:k.showLineNumbers,showInlineErrors:k.showInlineErrors,wrapContent:k.wrapContent,closableTabs:k.closableTabs,initMode:k.initMode,extensions:null===(t=k.codeEditor)||void 0===t?void 0:t.extensions,extensionsKeymap:null===(n=k.codeEditor)||void 0===n?void 0:n.extensionsKeymap,readOnly:k.readOnly,showReadOnly:null!=O?O:k.showReadOnly,additionalLanguages:null===(d=k.codeEditor)||void 0===d?void 0:d.additionalLanguages},H={activeFile:k.activeFile,visibleFiles:k.visibleFiles,recompileMode:k.recompileMode,recompileDelay:k.recompileDelay,autorun:k.autorun,autoReload:k.autoReload,bundlerURL:k.bundlerURL,startRoute:k.startRoute,skipEval:k.skipEval,fileResolver:k.fileResolver,initMode:k.initMode,initModeObserverOptions:k.initModeObserverOptions,externalResources:k.externalResources,logLevel:k.logLevel,classes:k.classes},[W,$]=o.useState(!1),{onHandleMouseDown:K,horizontalSize:G}=(({initialSize:e=50})=>{const[t,n]=o.useState(e),r=o.useRef(null),a=e=>{if(!r.current)return;const t=r.current.parentElement;if(!t)return;const{left:o,width:a}=t.getBoundingClientRect(),i=(e.clientX-o)/a*100,s=Math.min(Math.max(i,25),75);n(s),t.querySelectorAll(".sp-stack").forEach((e=>{e.style.pointerEvents="none"}))},i=()=>{var e;const t=null===(e=r.current)||void 0===e?void 0:e.parentElement;t&&(t.querySelectorAll(".sp-stack").forEach((e=>{e.style.pointerEvents=""})),r.current=null)};return o.useEffect((()=>(document.body.addEventListener("mousemove",a),document.body.addEventListener("mouseup",i),()=>{document.body.removeEventListener("mousemove",a),document.body.removeEventListener("mouseup",i)})),[]),{horizontalSize:t,onHandleMouseDown:o.useCallback((e=>{r.current=e.target}),[])}})({initialSize:k.editorWidthPercentage}),X=!P&&!(null==R?void 0:R.includes("col"));var q,Z,_,Y,J;return o.createElement(o.Fragment,null,o.createElement("div",{className:(0,r.A)("pb-6",F)},o.createElement("div",{className:(0,r.A)("absolute","left-0","right-0","w-full","px-2","md:px-4","xl:px-6","max-w-screen-xl","mx-auto",j)},o.createElement(i.l5,c({key:`${S}-${L}-${z}`,customSetup:c({dependencies:x},N),files:E,options:u(c({},H),{classes:u(c({},H.classes),{"sp-layout":(0,r.A)(null===(m=H.classes)||void 0===m?void 0:m["sp-layout"],D&&"!rounded-bl-none !rounded-br-none")})}),template:S,theme:"light"===L?u(c({},a.Zw),{colors:u(c({},a.Zw.colors),{accent:"#1D1E30",surface1:"transparent",surface2:"transparent",surface3:"transparent"})}):u(c({},a.hc),{colors:u(c({},a.hc.colors),{surface1:"transparent",surface2:"transparent",surface3:"transparent"})}),className:(0,r.A)("not-prose sandpack-container","max-w-screen-xl","animate-reveal")},T),o.createElement(i.am,{className:(0,r.A)("col"===R&&"!flex-col","col-reverse"===R&&"!flex-col-reverse")},C&&o.createElement(i.Lm,{autoHiddenFiles:!0,style:{height:null!==(q=k.editorHeight)&&void 0!==q?q:A}}),!P&&o.createElement(i.cW,u(c({},U),{showLineNumbers:v,closableTabs:C,initMode:"lazy",style:u(c({height:null!==(Z=k.editorHeight)&&void 0!==Z?Z:A},(null==R?void 0:R.includes("col"))?{flex:"initial"}:{flexGrow:G,flexShrink:G,flexBasis:0}),{overflow:"hidden"})})),X?o.createElement(l,{onMouseDown:K,horizontalSize:G}):null,I?null:o.createElement(o.Fragment,null,o.createElement(i.G5,{showOpenInCodeSandbox:y,startRoute:b,showNavigator:null!=h?h:k.showNavigator,showRefreshButton:k.showRefreshButton,style:u(c({display:I?"none":"flex"},(null==R?void 0:R.includes("col"))?{flex:"initial",width:"100%"}:{flexGrow:100-G,flexShrink:100-G,flexBasis:0,width:P?"100%":100-G+"%"}),{gap:0,height:null!==(_=k.editorHeight)&&void 0!==_?_:A})},o.createElement("div",{className:"sp-custom-loading"},o.createElement("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/spinner.gif",className:(0,r.A)("w-12","h-12","rounded-full")}))))),D?o.createElement(i.X2,{style:u(c({height:200},(null==R?void 0:R.includes("col"))?{flex:"initial"}:{flexGrow:G,flexShrink:G,flexBasis:0}),{overflow:"hidden"})}):null)),o.createElement("div",{className:(0,r.A)(""),style:{height:Number(null!==(Y=k.editorHeight)&&void 0!==Y?Y:A)+2}}),o.createElement("div",{className:(0,r.A)((null==R?void 0:R.includes("col"))?"block":"block md:hidden"),style:{height:Number(null!==(J=k.editorHeight)&&void 0!==J?J:A)+2}}),o.createElement("div",{className:(0,r.A)(D?"block":"hidden","h-[200px]")})),o.createElement("section",{className:"hidden max-w-0 max-h-0"},o.createElement("p",null,`Dependencies: ${Object.keys(null!=x?x:{}).map((e=>`${e}@${x[e]}`))}`),o.createElement("h3",null,"Code Files"),Object.keys(null!=E?E:{}).map((e=>o.createElement("div",{key:e},o.createElement("div",null,`File: ${e}`),o.createElement("div",null,`Content: ${"code"in E[e]?E[e].code:E[e]}`))))))},f=e=>{const t={hidePreview:!0,showConsole:!1};return o.createElement(g,u(c({},t,e),{template:"react-ts"}))}},61437:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>k,frontMatter:()=>m,metadata:()=>f,toc:()=>h});var r=n(37953),o=n(58860),a=n(88123);function i(){return r.createElement(a.O,{showOpenInCodeSandbox:!1,dependencies:{"@refinedev/core":"latest","@refinedev/simple-rest":"latest","@refinedev/react-router-v6":"latest","react-router-dom":"^6.8.1"},startRoute:"/products/edit/123",files:{"/App.tsx":{code:s,hidden:!0},"/style.css":{code:l,hidden:!0},"/edit.tsx":{code:d,active:!0}}})}const s='\nimport React from "react";\nimport { Refine } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\nimport { BrowserRouter, Route, Routes, Navigate, Link, Outlet } from "react-router-dom";\nimport routerProvider from "@refinedev/react-router-v6";\n\nimport "./style.css";\n\nimport { Edit } from "./edit.tsx";\n\nexport default function App() {\n    return (\n        <BrowserRouter>\n            <Refine\n                routerProvider={routerProvider}\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n                resources={[\n                    {\n                        name: "products",\n                        edit: "/products/edit/:id",\n                    }\n                ]}\n            >\n                <Routes>\n                    <Route index element={<Navigate to="/products/edit/123" />} />\n                    <Route path="/products" element={<Outlet />}>\n                        <Route path="edit/:id" element={<Edit />} />\n                    </Route>\n                </Routes>\n            </Refine>\n        </BrowserRouter>\n    );\n}\n'.trim(),l="\nhtml {\n    margin: 0;\n    padding: 0;\n}\nbody {\n    margin: 0;\n    padding: 12px;\n}\n* {\n    box-sizing: border-box;\n}\nbody {\n    font-family: sans-serif;\n}\nform button {\n    display: block;\n    // width: 100%;\n    margin-bottom: 6px;\n}\n.page {\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.page form {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  width: 100%;\n  max-width: 400px;\n}\n.page form label {\n  display: flex;\n  align-items: center;\n}\n.page form label input, .page form label textarea, .page form label select {\n  flex: 1;\n}\n.page form label span {\n  width: 90px;\n}\n.auto-save-wrapper {\n  padding: 6px 0;\n  font-weight: 600;\n}\n".trim(),d='import React from "react";\nimport { useForm, useSelect, AutoSaveIndicator, HttpError, BaseKey } from "@refinedev/core";\n\nexport const Edit: React.FC = () => {\n  const { query, isLoading, onFinish, autoSaveProps, onFinishAutoSave } = useForm<\n    IProduct,\n    HttpError,\n    FormValues\n  >({\n    autoSave: {\n      enabled: true,\n      interval: 1000,\n    },\n  });\n\n  const { options: categorySelectOptions } = useSelect({\n    resource: "categories",\n  });\n\n  const defaultValues = query?.data?.data;\n\n  return (\n    <div className="page">\n      <div className="auto-save-wrapper">\n        <AutoSaveIndicator {...autoSaveProps} />\n      </div>\n      <form\n        onChange={(event) => {\n          const formData = new FormData(event.currentTarget);\n\n          onFinishAutoSave(transformValues(Object.fromEntries(formData.entries()) as RawFormValues));\n        }}\n        onSubmit={(event) => {\n          event.preventDefault();\n          const formData = new FormData(event.currentTarget);\n\n          onFinish(transformValues(Object.fromEntries(formData.entries()) as RawFormValues));\n        }}\n      >\n        <label htmlFor="name">\n          <span>Name</span>\n          <input name="name" placeholder="Name" defaultValue={defaultValues?.name} />\n        </label>\n        <label htmlFor="description">\n          <span>Description</span>\n          <textarea name="description" placeholder="Description" defaultValue={defaultValues?.description} />\n        </label>\n        <label htmlFor="material">\n          <span>Material</span>\n          <input name="material" placeholder="Material" defaultValue={defaultValues?.material} />\n        </label>\n        <label htmlFor="category">\n          <span>Category</span>\n          <select name="category" defaultValue={defaultValues?.category?.id}>\n            {categorySelectOptions.map((option) => (\n              <option key={option.value} value={option.value}>\n                {option.label}\n              </option>\n            ))}\n          </select>\n        </label>\n        <button type="submit">Submit</button>\n      </form>\n    </div>\n  );\n};\n\nconst transformValues = (values: RawFormValues): FormValues => {\n  return {\n    ...values,\n    category: values.category ? { id: values.category } : undefined,\n  };\n};\n\ninterface IProduct {\n  id: BaseKey;\n  name: string;\n  material: string;\n  description: string;\n  category: { id: BaseKey; name: string };\n}\n\ninterface FormValues {\n  name?: string;\n  material?: string;\n  description?: string;\n  category?: { id: BaseKey };\n}\n\ninterface RawFormValues extends FormValues {\n  category?: BaseKey;\n}\n'.trim();function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const m={title:"<AutoSaveIndicator />",description:"<AutoSaveIndicator> component shows `autoSave` status on edit actions.",source:"packages/core/src/components/autoSaveIndicator/index.tsx"},g=void 0,f={unversionedId:"core/components/auto-save-indicator/index",id:"core/components/auto-save-indicator/index",title:"<AutoSaveIndicator />",description:"<AutoSaveIndicator> component shows `autoSave` status on edit actions.",source:"@site/docs/core/components/auto-save-indicator/index.md",sourceDirName:"core/components/auto-save-indicator",slug:"/core/components/auto-save-indicator/",permalink:"/docs/core/components/auto-save-indicator/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/main/documentation/docs/core/components/auto-save-indicator/index.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1703748224,formattedLastUpdatedAt:"Dec 28, 2023",frontMatter:{title:"<AutoSaveIndicator />",description:"<AutoSaveIndicator> component shows `autoSave` status on edit actions.",source:"packages/core/src/components/autoSaveIndicator/index.tsx"},sidebar:"mainSidebar",previous:{title:"Audit Log Provider",permalink:"/docs/examples/audit-log/audit-log-provider"},next:{title:"Inferencer",permalink:"/docs/core/components/inferencer/"}},b={},h=[{value:"Usage",id:"usage",level:2},{value:"Customizing the indicator",id:"customizing-the-indicator",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3}],v=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.yg)("div",t)},y=v("DocThumbsUpDownFeedbackWidget"),w=v("PropsTable"),x={toc:h},O="wrapper";function k(e){var{components:t}=e,n=p(e,["components"]);return(0,o.yg)(O,u(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){c(e,t,n[t])}))}return e}({},x,n),{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Refine's forms provide a built-in auto-save feature. This allows you to automatically save the form when the user makes changes to the form which can be useful for forms that are long or complex and the user may not want to lose their progress."),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"<AutoSaveIndicator />")," component is a utility component that can be used to show a visual indicator to the user about the auto-save status of the form."),(0,o.yg)("admonition",{title:"Good to know",type:"simple"},(0,o.yg)("ul",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Refine's core ",(0,o.yg)("a",{parentName:"p",href:"/docs/data/hooks/use-form"},(0,o.yg)("inlineCode",{parentName:"a"},"useForm"))," hook does not automatically trigger the auto-save feature. You need to manually trigger the ",(0,o.yg)("inlineCode",{parentName:"p"},"onFinishAutoSave")," function returned from the ",(0,o.yg)("inlineCode",{parentName:"p"},"useForm")," hook to trigger the auto-save feature.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Extended implementations of Refine's ",(0,o.yg)("inlineCode",{parentName:"p"},"useForm")," such as; ",(0,o.yg)("a",{parentName:"p",href:"/docs/ui-integrations/ant-design/hooks/use-form"},(0,o.yg)("inlineCode",{parentName:"a"},"@refinedev/antd"),"'s ",(0,o.yg)("inlineCode",{parentName:"a"},"useForm")),", ",(0,o.yg)("a",{parentName:"p",href:"/docs/packages/react-hook-form/use-form"},(0,o.yg)("inlineCode",{parentName:"a"},"@refinedev/react-hook-form"),"'s ",(0,o.yg)("inlineCode",{parentName:"a"},"useForm"))," and ",(0,o.yg)("a",{parentName:"p",href:"/docs/ui-integrations/mantine/hooks/use-form"},(0,o.yg)("inlineCode",{parentName:"a"},"@refinedev/mantine"),"'s ",(0,o.yg)("inlineCode",{parentName:"a"},"useForm"))," automatically trigger the auto-save feature when a form value changes.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"The ",(0,o.yg)("inlineCode",{parentName:"p"},"<AutoSaveIndicator />")," component is only designed to display a visual feedback to the user about the auto-save status of the form. It does not contain any logic to trigger the auto-save feature.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"To learn more about the auto-save feature check out ",(0,o.yg)("a",{parentName:"p",href:"/docs/guides-concepts/forms/#auto-save"},"Auto Save section in Forms guide"))))),(0,o.yg)("h2",{id:"usage"},"Usage"),(0,o.yg)(y,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"Usage is as simple as spreading the ",(0,o.yg)("inlineCode",{parentName:"p"},"autoSaveProps")," object returned from the ",(0,o.yg)("a",{parentName:"p",href:"/docs/data/hooks/use-form"},(0,o.yg)("inlineCode",{parentName:"a"},"useForm"))," hook into the ",(0,o.yg)("inlineCode",{parentName:"p"},"<AutoSaveIndicator />")," component. It will automatically determine the auto-save status and display the appropriate indicator."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import { AutoSaveIndicator, useForm } from "@refinedev/core";\n\nconst EditPage = () => {\n  const { autoSaveProps } = useForm({\n    autoSave: {\n      enabled: true,\n    },\n  });\n\n  console.log(autoSaveProps);\n  /*\n    {\n      status: "success",  // "loading" | "error" | "idle" | "success"\n      error: null,        // HttpError | null\n      data: { ... },      // UpdateResponse | undefined,\n    }\n  */\n\n  return (\n    <div>\n      {/* highlight-start */}\n      {/* We\'ll pass the autoSaveProps from useForm\'s response to the <AutoSaveIndicator /> component. */}\n      <AutoSaveIndicator {...autoSaveProps} />\n      {/* highlight-end */}\n      <form\n      // ...\n      >\n        {/* ... */}\n      </form>\n    </div>\n  );\n};\n')),(0,o.yg)("p",null,"Example below shows the ",(0,o.yg)("inlineCode",{parentName:"p"},"<AutoSaveIndicator />")," component in action."),(0,o.yg)(i,{mdxType:"Usage"})),(0,o.yg)("h3",{id:"customizing-the-indicator"},"Customizing the indicator"),(0,o.yg)(y,{id:"customizing-the-indicator",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"<AutoSaveIndicator />")," component accepts an ",(0,o.yg)("inlineCode",{parentName:"p"},"elements")," prop which can be used to customize the indicator for each status."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import { AutoSaveIndicator, useForm } from "@refinedev/core";\n\nconst EditPage = () => {\n  const { autoSaveProps } = useForm({\n    autoSave: {\n      enabled: true,\n    },\n  });\n\n  return (\n    <div>\n      <AutoSaveIndicator\n        {...autoSaveProps}\n        // highlight-start\n        elements={{\n          loading: <span>saving...</span>,\n          error: <span>auto save error.</span>,\n          idle: <span>waiting for changes.</span>,\n          success: <span>saved.</span>,\n        }}\n        // highlight-end\n      />\n      {/* ... */}\n    </div>\n  );\n};\n'))),(0,o.yg)("h2",{id:"api-reference"},"API Reference"),(0,o.yg)("h3",{id:"properties"},"Properties"),(0,o.yg)(y,{id:"properties",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)(w,{module:"@refinedev/core/AutoSaveIndicator","elements-type":'Partial<Record<"loading" \\| "error" \\| "idle" \\| "success", ReactNode>>',mdxType:"PropsTable"})))}k.isMDXComponent=!0}}]);