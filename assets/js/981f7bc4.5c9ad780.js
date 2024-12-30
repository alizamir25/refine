"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[69455],{58860:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var r=n(37953);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},27821:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>y,frontMatter:()=>s,metadata:()=>l,toc:()=>p});n(37953);var r=n(58860);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={title:"Markdown",swizzle:!0},c=void 0,l={unversionedId:"ui-integrations/chakra-ui/components/fields/markdown-field/index",id:"ui-integrations/chakra-ui/components/fields/markdown-field/index",title:"Markdown",description:"This field lets you display markdown content. It supports GitHub Flavored Markdown.",source:"@site/docs/ui-integrations/chakra-ui/components/fields/markdown-field/index.md",sourceDirName:"ui-integrations/chakra-ui/components/fields/markdown-field",slug:"/ui-integrations/chakra-ui/components/fields/markdown-field/",permalink:"/docs/ui-integrations/chakra-ui/components/fields/markdown-field/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/main/documentation/docs/ui-integrations/chakra-ui/components/fields/markdown-field/index.md",tags:[],version:"current",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1735543672,formattedLastUpdatedAt:"Dec 30, 2024",frontMatter:{title:"Markdown",swizzle:!0},sidebar:"mainSidebar",previous:{title:"File",permalink:"/docs/ui-integrations/chakra-ui/components/fields/file-field/"},next:{title:"Number",permalink:"/docs/ui-integrations/chakra-ui/components/fields/number-field/"}},u={},p=[{value:"Usage",id:"usage",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",t)},f=d("DocThumbsUpDownFeedbackWidget"),m=d("PropsTable"),g={toc:p},h="wrapper";function y(e){var{components:t}=e,n=a(e,["components"]);return(0,r.yg)(h,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"This field lets you display markdown content. It supports ",(0,r.yg)("a",{parentName:"p",href:"https://github.github.com/gfm/"},"GitHub Flavored Markdown"),"."),(0,r.yg)("admonition",{title:"Good to know",type:"simple"},(0,r.yg)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,r.yg)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},(0,r.yg)("strong",{parentName:"a"},"Refine CLI")))),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)(f,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Let's see how we can use ",(0,r.yg)("inlineCode",{parentName:"p"},"<MarkdownField>")," in a show page."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts/show/123 previewHeight=420px hideCode",live:!0,url:"http://localhost:3000/posts/show/123",previewHeight:"420px",hideCode:!0},'setInitialRoutes(["/posts", "/posts/show/123"]);\n\n// visible-block-start\nimport { useShow } from "@refinedev/core";\nimport {\n  Show,\n  // highlight-next-line\n  MarkdownField,\n} from "@refinedev/chakra-ui";\nimport { Heading, Text } from "@chakra-ui/react";\n\nconst PostShow: React.FC = () => {\n  const { queryResult } = useShow<IPost>();\n  const { data, isLoading } = queryResult;\n  const record = data?.data;\n\n  return (\n    <Show isLoading={isLoading}>\n      <Heading as="h5" size="sm">\n        Id\n      </Heading>\n      <Text mt={2}>{record?.id}</Text>\n      <Heading as="h5" size="sm" mt={4}>\n        Content\n      </Heading>\n      {/* highlight-next-line */}\n      <MarkdownField value={record?.content} />\n    </Show>\n  );\n};\n\ninterface IPost {\n  id: number;\n  content: string;\n}\n// visible-block-end\n\nrender(\n  <ReactRouter.BrowserRouter>\n    <RefineChakraDemo\n      resources={[\n        {\n          name: "posts",\n          show: "/posts/show/:id",\n          list: "/posts",\n        },\n      ]}\n    >\n      <ReactRouter.Routes>\n        <ReactRouter.Route\n          path="/posts"\n          element={\n            <div style={{ padding: 16 }}>\n              <ReactRouter.Outlet />\n            </div>\n          }\n        >\n          <ReactRouter.Route path="show/:id" element={<PostShow />} />\n          <ReactRouter.Route\n            index\n            element={\n              <ChakraUI.VStack alignItems="flex-start">\n                <ChakraUI.Text>This page is empty.</ChakraUI.Text>\n                <RefineChakra.ShowButton colorScheme="black" recordItemId="123">\n                  Show Item 123\n                </RefineChakra.ShowButton>\n              </ChakraUI.VStack>\n            }\n          />\n        </ReactRouter.Route>\n      </ReactRouter.Routes>\n    </RefineChakraDemo>\n  </ReactRouter.BrowserRouter>,\n);\n'))),(0,r.yg)("h2",{id:"api-reference"},"API Reference"),(0,r.yg)("h3",{id:"properties"},"Properties"),(0,r.yg)(f,{id:"properties",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)(m,{module:"@refinedev/chakra-ui/MarkdownField","value-description":"Markdown data to render",mdxType:"PropsTable"})))}y.isMDXComponent=!0}}]);