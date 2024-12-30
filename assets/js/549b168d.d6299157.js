"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[12584],{58860:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>h});var o=n(37953);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),m=r,h=l["".concat(c,".").concat(m)]||l[m]||d[m]||i;return n?o.createElement(h,a(a({ref:t},u),{},{components:n})):o.createElement(h,a({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42618:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>b,frontMatter:()=>s,metadata:()=>p,toc:()=>l});n(37953);var o=n(58860);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={title:"List",swizzle:!0},c=void 0,p={unversionedId:"ui-integrations/chakra-ui/components/buttons/list-button/index",id:"ui-integrations/chakra-ui/components/buttons/list-button/index",title:"List",description:"` is using Chakra UI's  component. It uses the list method from useNavigation` under the hood. It can be useful when redirecting the app to the list page route of resource.",source:"@site/docs/ui-integrations/chakra-ui/components/buttons/list-button/index.md",sourceDirName:"ui-integrations/chakra-ui/components/buttons/list-button",slug:"/ui-integrations/chakra-ui/components/buttons/list-button/",permalink:"/docs/ui-integrations/chakra-ui/components/buttons/list-button/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/main/documentation/docs/ui-integrations/chakra-ui/components/buttons/list-button/index.md",tags:[],version:"current",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1735543672,formattedLastUpdatedAt:"Dec 30, 2024",frontMatter:{title:"List",swizzle:!0},sidebar:"mainSidebar",previous:{title:"Import",permalink:"/docs/ui-integrations/chakra-ui/components/buttons/import-button/"},next:{title:"Refresh",permalink:"/docs/ui-integrations/chakra-ui/components/buttons/refresh-button/"}},u={},l=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"resource",id:"resource",level:3},{value:"meta",id:"meta",level:3},{value:"hideText",id:"hidetext",level:3},{value:"accessControl",id:"accesscontrol",level:3},{value:"<del>resourceNameOrRouteName</del> <PropTag deprecated />",id:"resourcenameorroutename-",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.yg)("div",t)},m=d("DocThumbsUpDownFeedbackWidget"),h=d("PropTag"),g=d("PropsTable"),y={toc:l},f="wrapper";function b(e){var{components:t}=e,n=a(e,["components"]);return(0,o.yg)(f,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}({},y,n),{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"<ListButton>")," is using Chakra UI's ",(0,o.yg)("a",{parentName:"p",href:"https://www.chakra-ui.com/docs/components/button#usage"},(0,o.yg)("inlineCode",{parentName:"a"},"<Button>"))," component. It uses the ",(0,o.yg)("inlineCode",{parentName:"p"},"list")," method from ",(0,o.yg)("a",{parentName:"p",href:"/docs/routing/hooks/use-navigation"},(0,o.yg)("inlineCode",{parentName:"a"},"useNavigation"))," under the hood. It can be useful when redirecting the app to the list page route of resource."),(0,o.yg)("admonition",{title:"Good to know",type:"simple"},(0,o.yg)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,o.yg)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},(0,o.yg)("strong",{parentName:"a"},"Refine CLI")))),(0,o.yg)("h2",{id:"usage"},"Usage"),(0,o.yg)(m,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts/show/123 previewHeight=360px hideCode",live:!0,url:"http://localhost:3000/posts/show/123",previewHeight:"360px",hideCode:!0},'setInitialRoutes(["/posts/show/123"]);\n\nimport { VStack } from "@chakra-ui/react";\nimport { ShowButton } from "@refinedev/chakra-ui";\n\n// visible-block-start\nimport { useShow } from "@refinedev/core";\nimport {\n  Show,\n  MarkdownField,\n  // highlight-next-line\n  ListButton,\n} from "@refinedev/chakra-ui";\nimport { Heading, Text, Spacer } from "@chakra-ui/react";\n\nconst PostShow: React.FC = () => {\n  const { queryResult } = useShow<IPost>();\n  const { data, isLoading } = queryResult;\n  const record = data?.data;\n\n  return (\n    <Show\n      // highlight-next-line\n      headerButtons={<ListButton />}\n      isLoading={isLoading}\n    >\n      <Heading as="h5" size="sm">\n        Id\n      </Heading>\n      <Text mt={2}>{record?.id}</Text>\n\n      <Heading as="h5" size="sm" mt={4}>\n        Title\n      </Heading>\n      <Text mt={2}>{record?.title}</Text>\n\n      <Heading as="h5" size="sm" mt={4}>\n        Content\n      </Heading>\n      <Spacer mt={2} />\n      <MarkdownField value={record?.content} />\n    </Show>\n  );\n};\n\ninterface IPost {\n  id: number;\n  title: string;\n  content: string;\n}\n// visible-block-end\n\nrender(\n  <ReactRouter.BrowserRouter>\n    <RefineChakraDemo\n      resources={[\n        {\n          name: "posts",\n          list: "/posts",\n          show: "/posts/show/:id",\n        },\n      ]}\n    >\n      <ReactRouter.Routes>\n        <ReactRouter.Route\n          path="/posts"\n          element={\n            <div style={{ padding: 16 }}>\n              <ReactRouter.Outlet />\n            </div>\n          }\n        >\n          <ReactRouter.Route\n            index\n            element={\n              <VStack alignItems="flex-start">\n                <Text>This is the list page of posts.</Text>\n                <ShowButton colorScheme="black" recordItemId="123">\n                  Show Item 123\n                </ShowButton>\n              </VStack>\n            }\n          />\n          <ReactRouter.Route path="show/:id" element={<PostShow />} />\n        </ReactRouter.Route>\n      </ReactRouter.Routes>\n    </RefineChakraDemo>\n  </ReactRouter.BrowserRouter>,\n);\n')),(0,o.yg)("p",null,"The button text is defined automatically by Refine, based on the ",(0,o.yg)("inlineCode",{parentName:"p"},"resource")," definition.")),(0,o.yg)("h2",{id:"properties"},"Properties"),(0,o.yg)("h3",{id:"resource"},"resource"),(0,o.yg)(m,{id:"resource",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"Redirection endpoint is defined by the ",(0,o.yg)("inlineCode",{parentName:"p"},"resource"),"'s ",(0,o.yg)("inlineCode",{parentName:"p"},"list")," action path. By default, ",(0,o.yg)("inlineCode",{parentName:"p"},"<ListButton>")," uses the inferred resource from the route."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=200px",live:!0,url:"http://localhost:3000",previewHeight:"200px"},'setInitialRoutes(["/categories/show/123"]);\n\nimport { VStack, Text } from "@chakra-ui/react";\nimport { ShowButton } from "@refinedev/chakra-ui";\n\n// visible-block-start\nimport { ListButton } from "@refinedev/chakra-ui";\n\nconst MyListComponent = () => {\n  return <ListButton colorScheme="black" resource="categories" />;\n};\n// visible-block-end\n\nrender(\n  <ReactRouter.BrowserRouter>\n    <RefineChakraDemo\n      resources={[\n        {\n          name: "posts",\n          list: "/posts",\n        },\n        {\n          name: "categories",\n          list: "/categories",\n          show: "/categories/show/:id",\n        },\n      ]}\n    >\n      <ReactRouter.Routes>\n        <ReactRouter.Route\n          path="/"\n          element={\n            <div style={{ padding: 16 }}>\n              <ReactRouter.Outlet />\n            </div>\n          }\n        >\n          <ReactRouter.Route\n            path="/categories"\n            element={\n              <VStack alignItems="flex-start">\n                <Text>This is the list page of categories.</Text>\n                <ShowButton\n                  colorScheme="black"\n                  recordItemId="123"\n                  svgIconProps={{\n                    style: {\n                      display: "none",\n                    },\n                  }}\n                >\n                  Go back\n                </ShowButton>\n              </VStack>\n            }\n          />\n          <ReactRouter.Route\n            path="/categories/show/:id"\n            element={<MyListComponent />}\n          />\n        </ReactRouter.Route>\n      </ReactRouter.Routes>\n    </RefineChakraDemo>\n  </ReactRouter.BrowserRouter>,\n);\n')),(0,o.yg)("p",null,"Clicking the button will trigger the ",(0,o.yg)("inlineCode",{parentName:"p"},"list")," method of ",(0,o.yg)("a",{parentName:"p",href:"/docs/routing/hooks/use-navigation"},(0,o.yg)("inlineCode",{parentName:"a"},"useNavigation"))," and then redirect the app to the ",(0,o.yg)("inlineCode",{parentName:"p"},"list")," action path of the resource, filling the necessary parameters in the route."),(0,o.yg)("p",null,"If you have multiple resources with the same name, you can pass the ",(0,o.yg)("inlineCode",{parentName:"p"},"identifier")," instead of the ",(0,o.yg)("inlineCode",{parentName:"p"},"name")," of the resource. It will only be used as the main matching key for the resource, data provider methods will still work with the ",(0,o.yg)("inlineCode",{parentName:"p"},"name")," of the resource defined in the ",(0,o.yg)("inlineCode",{parentName:"p"},"<Refine/>")," component."),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,o.yg)("a",{parentName:"p",href:"/docs/core/refine-component#identifier"},(0,o.yg)("inlineCode",{parentName:"a"},"identifier")," section of the ",(0,o.yg)("inlineCode",{parentName:"a"},"<Refine/>")," component documentation ","\u2192")))),(0,o.yg)("h3",{id:"meta"},"meta"),(0,o.yg)(m,{id:"meta",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"It is used to pass additional parameters to the ",(0,o.yg)("inlineCode",{parentName:"p"},"list")," method of ",(0,o.yg)("a",{parentName:"p",href:"/docs/routing/hooks/use-navigation"},(0,o.yg)("inlineCode",{parentName:"a"},"useNavigation")),". By default, existing parameters in the route are used by the ",(0,o.yg)("inlineCode",{parentName:"p"},"list")," method. You can pass additional parameters or override the existing ones using the ",(0,o.yg)("inlineCode",{parentName:"p"},"meta")," prop."),(0,o.yg)("p",null,"If the ",(0,o.yg)("inlineCode",{parentName:"p"},"list")," action route is defined by the pattern: ",(0,o.yg)("inlineCode",{parentName:"p"},"/:authorId/posts"),", the ",(0,o.yg)("inlineCode",{parentName:"p"},"meta")," prop can be used as follows:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'const MyComponent = () => {\n  return <ListButton meta={{ authorId: "10" }} />;\n};\n'))),(0,o.yg)("h3",{id:"hidetext"},"hideText"),(0,o.yg)(m,{id:"hidetext",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"It is used to show and not show the text of the button. When ",(0,o.yg)("inlineCode",{parentName:"p"},"true"),", only the button icon is visible."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=120px",live:!0,url:"http://localhost:3000",previewHeight:"120px"},'setInitialRoutes(["/posts"]);\n\n// visible-block-start\nimport { ListButton } from "@refinedev/chakra-ui";\n\nconst MyListComponent = () => {\n  return <ListButton colorScheme="black" hideText />;\n};\n// visible-block-end\n\nrender(\n  <ReactRouter.BrowserRouter>\n    <RefineChakraDemo\n      resources={[\n        {\n          name: "posts",\n          list: "/posts",\n        },\n      ]}\n    >\n      <ReactRouter.Routes>\n        <ReactRouter.Route\n          path="/posts"\n          element={\n            <div style={{ padding: 16 }}>\n              <ReactRouter.Outlet />\n            </div>\n          }\n        >\n          <ReactRouter.Route index element={<MyListComponent />} />\n        </ReactRouter.Route>\n      </ReactRouter.Routes>\n    </RefineChakraDemo>\n  </ReactRouter.BrowserRouter>,\n);\n'))),(0,o.yg)("h3",{id:"accesscontrol"},"accessControl"),(0,o.yg)(m,{id:"accesscontrol",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"accessControl")," prop can be used to skip the access control check with its ",(0,o.yg)("inlineCode",{parentName:"p"},"enabled")," property or to hide the button when the user does not have the permission to access the resource with ",(0,o.yg)("inlineCode",{parentName:"p"},"hideIfUnauthorized")," property. This is relevant only when an ",(0,o.yg)("a",{parentName:"p",href:"/docs/authorization/access-control-provider"},(0,o.yg)("inlineCode",{parentName:"a"},"accessControlProvider"))," is provided to ",(0,o.yg)("a",{parentName:"p",href:"/docs/core/refine-component"},(0,o.yg)("inlineCode",{parentName:"a"},"<Refine/>"))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import { ListButton } from "@refinedev/chakra-ui";\n\nexport const MyListComponent = () => {\n  return (\n    <ListButton accessControl={{ enabled: true, hideIfUnauthorized: true }} />\n  );\n};\n'))),(0,o.yg)("h3",{id:"resourcenameorroutename-"},(0,o.yg)("del",{parentName:"h3"},"resourceNameOrRouteName")," ",(0,o.yg)(h,{deprecated:!0,mdxType:"PropTag"})),(0,o.yg)(m,{id:"resourcenameorroutename-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"Use ",(0,o.yg)("inlineCode",{parentName:"p"},"resource")," prop instead.")),(0,o.yg)("h2",{id:"api-reference"},"API Reference"),(0,o.yg)("h3",{id:"properties-1"},"Properties"),(0,o.yg)(m,{id:"properties-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)(g,{module:"@refinedev/chakra-ui/ListButton",mdxType:"PropsTable"}),(0,o.yg)("admonition",{title:"External Props",type:"simple"},(0,o.yg)("p",{parentName:"admonition"},"It also accepts all props of Chakra UI ",(0,o.yg)("a",{parentName:"p",href:"https://chakra-ui.com/docs/components/button#props"},"Button"),"."))))}b.isMDXComponent=!0}}]);