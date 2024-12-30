"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[72305],{58860:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var o=n(37953);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=l(n),d=r,m=h["".concat(p,".").concat(d)]||h[d]||c[d]||s;return n?o.createElement(m,a(a({ref:t},u),{},{components:n})):o.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[h]="string"==typeof e?e:r,a[1]=i;for(var l=2;l<s;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68022:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>w,frontMatter:()=>i,metadata:()=>l,toc:()=>h});n(37953);var o=n(58860);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={title:"Show",swizzle:!0},p=void 0,l={unversionedId:"ui-integrations/chakra-ui/components/basic-views/show/index",id:"ui-integrations/chakra-ui/components/basic-views/show/index",title:"Show",description:"`` provides us a layout for displaying the page. It does not contain any logic but adds extra functionalities like a refresh button.",source:"@site/docs/ui-integrations/chakra-ui/components/basic-views/show/index.md",sourceDirName:"ui-integrations/chakra-ui/components/basic-views/show",slug:"/ui-integrations/chakra-ui/components/basic-views/show/",permalink:"/docs/ui-integrations/chakra-ui/components/basic-views/show/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/main/documentation/docs/ui-integrations/chakra-ui/components/basic-views/show/index.md",tags:[],version:"current",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1735543672,formattedLastUpdatedAt:"Dec 30, 2024",frontMatter:{title:"Show",swizzle:!0},sidebar:"mainSidebar",previous:{title:"List",permalink:"/docs/ui-integrations/chakra-ui/components/basic-views/list/"},next:{title:"Clone",permalink:"/docs/ui-integrations/chakra-ui/components/buttons/clone-button/"}},u={},h=[{value:"title",id:"title",level:3},{value:"resource",id:"resource",level:3},{value:"recordItemId",id:"recorditemid",level:3},{value:"canEdit and editButtonProps",id:"canedit-and-editbuttonprops",level:3},{value:"canDelete and deleteButtonProps",id:"candelete-and-deletebuttonprops",level:3},{value:"goBack",id:"goback",level:3},{value:"isLoading",id:"isloading",level:3},{value:"breadcrumb",id:"breadcrumb",level:3},{value:"headerProps",id:"headerprops",level:3},{value:"headerButtons",id:"headerbuttons",level:3},{value:"headerButtonProps",id:"headerbuttonprops",level:3},{value:"footerButtons",id:"footerbuttons",level:3},{value:"footerButtonProps",id:"footerbuttonprops",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.yg)("div",t)},d=c("DocThumbsUpDownFeedbackWidget"),m=c("PropsTable"),g={toc:h},R="wrapper";function w(e){var{components:t}=e,n=a(e,["components"]);return(0,o.yg)(R,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"<Show>")," provides us a layout for displaying the page. It does not contain any logic but adds extra functionalities like a refresh button."),(0,o.yg)("p",null,"We will show what ",(0,o.yg)("inlineCode",{parentName:"p"},"<Show>")," does using properties with examples."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewHeight=420px hideCode url=http://localhost:3000/posts/show/123",live:!0,previewHeight:"420px",hideCode:!0,url:"http://localhost:3000/posts/show/123"},'setInitialRoutes(["/posts/show/123"]);\n\n// visible-block-start\nimport { useShow, useOne } from "@refinedev/core";\nimport { Show, MarkdownField } from "@refinedev/chakra-ui";\nimport { Heading, Text } from "@chakra-ui/react";\n\nconst PostShow: React.FC = () => {\n  const { queryResult } = useShow<IPost>();\n  const { data, isLoading } = queryResult;\n  const record = data?.data;\n\n  const { data: categoryData } = useOne<ICategory>({\n    resource: "categories",\n    id: record?.category?.id || "",\n    queryOptions: {\n      enabled: !!record?.category?.id,\n    },\n  });\n\n  return (\n    <Show isLoading={isLoading}>\n      <Heading as="h5" size="sm">\n        Id\n      </Heading>\n      <Text mt={2}>{record?.id}</Text>\n\n      <Heading as="h5" size="sm" mt={4}>\n        Title\n      </Heading>\n      <Text mt={2}>{record?.title}</Text>\n\n      <Heading as="h5" size="sm" mt={4}>\n        Category\n      </Heading>\n      <Text mt={2}>{categoryData?.data?.title}</Text>\n\n      <Heading as="h5" size="sm" mt={4}>\n        Content\n      </Heading>\n      <MarkdownField value={record?.content} />\n    </Show>\n  );\n};\n// visible-block-end\n\nrender(\n  <ReactRouter.BrowserRouter>\n    <RefineChakraDemo\n      resources={[\n        {\n          name: "posts",\n          list: "/posts",\n          show: "/posts/show/:id",\n        },\n      ]}\n    >\n      <ReactRouter.Routes>\n        <ReactRouter.Route\n          path="/posts"\n          element={\n            <div>\n              <p>This page is empty.</p>\n              <RefineChakra.ShowButton recordItemId="123">\n                Show Post 123\n              </RefineChakra.ShowButton>\n            </div>\n          }\n        />\n        <ReactRouter.Route path="/posts/show/:id" element={<PostShow />} />\n      </ReactRouter.Routes>\n    </RefineChakraDemo>\n  </ReactRouter.BrowserRouter>,\n);\n')),(0,o.yg)("h3",{id:"title"},"title"),(0,o.yg)(d,{id:"title",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"title")," allows you to add a title inside the ",(0,o.yg)("inlineCode",{parentName:"p"},"<Show>"),' component. If you don\'t pass title props, it uses the "Show" prefix and the singular resource name by default. For example, for the "posts" resource, it will be "Show post".'),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts/show/123",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts/show/123"},'setInitialRoutes(["/posts/show/123"]);\n\n// visible-block-start\nimport { Show } from "@refinedev/chakra-ui";\nimport { Heading } from "@chakra-ui/react";\n\nconst PostShow: React.FC = () => {\n  return (\n    /* highlight-next-line */\n    <Show title={<Heading size="lg">Custom Title</Heading>}>\n      <p>Rest of your page here</p>\n    </Show>\n  );\n};\n// visible-block-end\n\nrender(\n  <ReactRouter.BrowserRouter>\n    <RefineChakraDemo\n      resources={[\n        {\n          name: "posts",\n          list: "/posts",\n          show: "/posts/show/:id",\n        },\n      ]}\n    >\n      <ReactRouter.Routes>\n        <ReactRouter.Route\n          path="/posts"\n          element={\n            <div>\n              <p>This page is empty.</p>\n              <RefineChakra.ShowButton recordItemId="123">\n                Show Post 123\n              </RefineChakra.ShowButton>\n            </div>\n          }\n        />\n        <ReactRouter.Route path="/posts/show/:id" element={<PostShow />} />\n      </ReactRouter.Routes>\n    </RefineChakraDemo>\n  </ReactRouter.BrowserRouter>,\n);\n'))),(0,o.yg)("h3",{id:"resource"},"resource"),(0,o.yg)(d,{id:"resource",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"<Show>")," component reads the ",(0,o.yg)("inlineCode",{parentName:"p"},"resource")," information from the route by default. If you want to use a custom resource for the ",(0,o.yg)("inlineCode",{parentName:"p"},"<Show>")," component, you can use the ",(0,o.yg)("inlineCode",{parentName:"p"},"resource")," prop."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/custom/123",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/custom/123"},'setInitialRoutes(["/custom/123"]);\n\n// visible-block-start\nimport { Show } from "@refinedev/chakra-ui";\n\nconst CustomPage: React.FC = () => {\n  return (\n    /* highlight-next-line */\n    <Show resource="posts" recordItemId={123}>\n      <p>Rest of your page here</p>\n    </Show>\n  );\n};\n// visible-block-end\n\nrender(\n  <ReactRouter.BrowserRouter>\n    <RefineChakraDemo\n      resources={[\n        {\n          name: "posts",\n          list: "/posts",\n          show: "/posts/show/:id",\n        },\n        {\n          name: "custom",\n          list: "/custom",\n          show: "/custom/:id",\n        },\n      ]}\n    >\n      <ReactRouter.Routes>\n        <ReactRouter.Route path="/custom/:id" element={<CustomPage />} />\n      </ReactRouter.Routes>\n    </RefineChakraDemo>\n  </ReactRouter.BrowserRouter>,\n);\n'))),(0,o.yg)("h3",{id:"recorditemid"},"recordItemId"),(0,o.yg)(d,{id:"recorditemid",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"<Show>")," component reads the ",(0,o.yg)("inlineCode",{parentName:"p"},"id")," information from the route by default. If you want to use a custom ",(0,o.yg)("inlineCode",{parentName:"p"},"id")," value, you can use the ",(0,o.yg)("inlineCode",{parentName:"p"},"recordItemId")," prop."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts/show/123",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts/show/123"},'setInitialRoutes(["/posts/show/123"]);\n\n// visible-block-start\nimport { Show } from "@refinedev/chakra-ui";\n\nconst PostShow: React.FC = () => {\n  return (\n    /* highlight-next-line */\n    <Show recordItemId="123">\n      <p>Rest of your page here</p>\n    </Show>\n  );\n};\n// visible-block-end\n\nrender(\n  <ReactRouter.BrowserRouter>\n    <RefineChakraDemo\n      resources={[\n        {\n          name: "posts",\n          list: "/posts",\n          show: "/posts/show/:id",\n        },\n      ]}\n    >\n      <ReactRouter.Routes>\n        <ReactRouter.Route\n          path="/posts"\n          element={\n            <div>\n              <p>This page is empty.</p>\n              <RefineChakra.ShowButton recordItemId="123">\n                Show Post 123\n              </RefineChakra.ShowButton>\n            </div>\n          }\n        />\n        <ReactRouter.Route path="/posts/show/:id" element={<PostShow />} />\n      </ReactRouter.Routes>\n    </RefineChakraDemo>\n  </ReactRouter.BrowserRouter>,\n);\n'))),(0,o.yg)("h3",{id:"canedit-and-editbuttonprops"},"canEdit and editButtonProps"),(0,o.yg)(d,{id:"canedit-and-editbuttonprops",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"canEdit")," allows you to add an edit button inside the ",(0,o.yg)("inlineCode",{parentName:"p"},"<Show>")," component. If the resource has the ",(0,o.yg)("inlineCode",{parentName:"p"},"canEdit")," property, Refine adds the edit button by default. If you want to customize this button you can use the ",(0,o.yg)("inlineCode",{parentName:"p"},"editButtonProps")," property."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts/show/123",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts/show/123"},'setInitialRoutes(["/posts/show/123"]);\n\n// visible-block-start\nimport { Show } from "@refinedev/chakra-ui";\nimport { usePermissions } from "@refinedev/core";\n\nconst PostShow: React.FC = () => {\n  const { data: permissionsData } = usePermissions();\n  return (\n    <Show\n      /* highlight-start */\n      canEdit={permissionsData?.includes("admin")}\n      editButtonProps={{ colorScheme: "red" }}\n      /* highlight-end */\n    >\n      <p>Rest of your page here</p>\n    </Show>\n  );\n};\n// visible-block-end\n\nrender(\n  <ReactRouter.BrowserRouter>\n    <RefineChakraDemo\n      resources={[\n        {\n          name: "posts",\n          list: "/posts",\n          show: "/posts/show/:id",\n          edit: "/posts/edit/:id",\n        },\n      ]}\n      options={{\n        auth: {\n          getPermissions: () => Promise.resolve(["admin"]),\n        },\n      }}\n    >\n      <ReactRouter.Routes>\n        <ReactRouter.Route\n          path="/posts"\n          element={\n            <div>\n              <p>This page is empty.</p>\n              <RefineChakra.ShowButton recordItemId="123">\n                Show Post 123\n              </RefineChakra.ShowButton>\n            </div>\n          }\n        />\n        <ReactRouter.Route path="/posts/show/:id" element={<PostShow />} />\n      </ReactRouter.Routes>\n    </RefineChakraDemo>\n  </ReactRouter.BrowserRouter>,\n);\n'))),(0,o.yg)("h3",{id:"candelete-and-deletebuttonprops"},"canDelete and deleteButtonProps"),(0,o.yg)(d,{id:"candelete-and-deletebuttonprops",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"canDelete")," allows you to add a delete button inside the ",(0,o.yg)("inlineCode",{parentName:"p"},"<Show>")," component. If the resource has the ",(0,o.yg)("inlineCode",{parentName:"p"},"canDelete")," property, Refine adds the delete button by default. If you want to customize this button you can use the ",(0,o.yg)("inlineCode",{parentName:"p"},"deleteButtonProps")," property."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts/show/123",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts/show/123"},'setInitialRoutes(["/posts/show/123"]);\n\n// visible-block-start\nimport { Show } from "@refinedev/chakra-ui";\nimport { usePermissions } from "@refinedev/core";\n\nconst PostShow: React.FC = () => {\n  const { data: permissionsData } = usePermissions();\n  return (\n    <Show\n      /* highlight-start */\n      canDelete={permissionsData?.includes("admin")}\n      deleteButtonProps={{ colorScheme: "red" }}\n      /* highlight-end */\n    >\n      <p>Rest of your page here</p>\n    </Show>\n  );\n};\n// visible-block-end\n\nrender(\n  <ReactRouter.BrowserRouter>\n    <RefineChakraDemo\n      resources={[\n        {\n          name: "posts",\n          list: "/posts",\n          show: "/posts/show/:id",\n        },\n      ]}\n      options={{\n        auth: {\n          getPermissions: () => Promise.resolve(["admin"]),\n        },\n      }}\n    >\n      <ReactRouter.Routes>\n        <ReactRouter.Route\n          path="/posts"\n          element={\n            <div>\n              <p>This page is empty.</p>\n              <RefineChakra.ShowButton recordItemId="123">\n                Show Post 123\n              </RefineChakra.ShowButton>\n            </div>\n          }\n        />\n        <ReactRouter.Route path="/posts/show/:id" element={<PostShow />} />\n      </ReactRouter.Routes>\n    </RefineChakraDemo>\n  </ReactRouter.BrowserRouter>,\n);\n'))),(0,o.yg)("h3",{id:"goback"},"goBack"),(0,o.yg)(d,{id:"goback",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"To customize the back button or to disable it, you can use the ",(0,o.yg)("inlineCode",{parentName:"p"},"goBack")," property."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts/show/123",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts/show/123"},'setInitialRoutes(["/posts/show/123"]);\n\n// visible-block-start\nimport { Show } from "@refinedev/chakra-ui";\nimport { IconMoodSmile } from "@tabler/icons-react";\n\nconst PostShow: React.FC = () => {\n  return (\n    /* highlight-next-line */\n    <Show goBack={<IconMoodSmile />}>\n      <p>Rest of your page here</p>\n    </Show>\n  );\n};\n// visible-block-end\n\nrender(\n  <ReactRouter.BrowserRouter>\n    <RefineChakraDemo\n      resources={[\n        {\n          name: "posts",\n          list: "/posts",\n          show: "/posts/show/:id",\n        },\n      ]}\n    >\n      <ReactRouter.Routes>\n        <ReactRouter.Route\n          path="/posts"\n          element={\n            <div>\n              <p>This page is empty.</p>\n              <RefineChakra.ShowButton recordItemId="123">\n                Show Post 123\n              </RefineChakra.ShowButton>\n            </div>\n          }\n        />\n        <ReactRouter.Route path="/posts/show/:id" element={<PostShow />} />\n      </ReactRouter.Routes>\n    </RefineChakraDemo>\n  </ReactRouter.BrowserRouter>,\n);\n'))),(0,o.yg)("h3",{id:"isloading"},"isLoading"),(0,o.yg)(d,{id:"isloading",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"To toggle the loading state of the ",(0,o.yg)("inlineCode",{parentName:"p"},"<Show/>")," component, you can use the ",(0,o.yg)("inlineCode",{parentName:"p"},"isLoading")," property."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts/show/123",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts/show/123"},'setInitialRoutes(["/posts/show/123"]);\n\n// visible-block-start\nimport { Show } from "@refinedev/chakra-ui";\n\nconst PostShow: React.FC = () => {\n  return (\n    /* highlight-next-line */\n    <Show isLoading={true}>\n      <p>Rest of your page here</p>\n    </Show>\n  );\n};\n// visible-block-end\n\nrender(\n  <ReactRouter.BrowserRouter>\n    <RefineChakraDemo\n      resources={[\n        {\n          name: "posts",\n          list: "/posts",\n          show: "/posts/show/:id",\n        },\n      ]}\n    >\n      <ReactRouter.Routes>\n        <ReactRouter.Route\n          path="/posts"\n          element={\n            <div>\n              <p>This page is empty.</p>\n              <RefineChakra.ShowButton recordItemId="123">\n                Show Post 123\n              </RefineChakra.ShowButton>\n            </div>\n          }\n        />\n        <ReactRouter.Route path="/posts/show/:id" element={<PostShow />} />\n      </ReactRouter.Routes>\n    </RefineChakraDemo>\n  </ReactRouter.BrowserRouter>,\n);\n'))),(0,o.yg)("h3",{id:"breadcrumb"},"breadcrumb"),(0,o.yg)(d,{id:"breadcrumb",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"To customize or disable the breadcrumb, you can use the ",(0,o.yg)("inlineCode",{parentName:"p"},"breadcrumb")," property. By default it uses the ",(0,o.yg)("inlineCode",{parentName:"p"},"Breadcrumb")," component from ",(0,o.yg)("inlineCode",{parentName:"p"},"@refinedev/chakra-ui")," package."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts/show/123",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts/show/123"},'setInitialRoutes(["/posts/show/123"]);\n\n// visible-block-start\nimport { Show, Breadcrumb } from "@refinedev/chakra-ui";\nimport { Box } from "@chakra-ui/react";\n\nconst PostShow: React.FC = () => {\n  return (\n    <Show\n      // highlight-start\n      breadcrumb={\n        <Box borderColor="blue" borderStyle="dashed" borderWidth="2px">\n          <Breadcrumb />\n        </Box>\n      }\n      // highlight-end\n    >\n      <p>Rest of your page here</p>\n    </Show>\n  );\n};\n// visible-block-end\n\nrender(\n  <ReactRouter.BrowserRouter>\n    <RefineChakraDemo\n      resources={[\n        {\n          name: "posts",\n          list: "/posts",\n          show: "/posts/show/:id",\n        },\n      ]}\n    >\n      <ReactRouter.Routes>\n        <ReactRouter.Route\n          path="/posts"\n          element={\n            <div>\n              <p>This page is empty.</p>\n              <RefineChakra.ShowButton recordItemId="123">\n                Show Post 123\n              </RefineChakra.ShowButton>\n            </div>\n          }\n        />\n        <ReactRouter.Route path="/posts/show/:id" element={<PostShow />} />\n      </ReactRouter.Routes>\n    </RefineChakraDemo>\n  </ReactRouter.BrowserRouter>,\n);\n'))),(0,o.yg)("h3",{id:"headerprops"},"headerProps"),(0,o.yg)(d,{id:"headerprops",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"If you want to customize the header of the ",(0,o.yg)("inlineCode",{parentName:"p"},"<Show/>")," component, you can use the ",(0,o.yg)("inlineCode",{parentName:"p"},"headerProps")," property."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts/show/123",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts/show/123"},'setInitialRoutes(["/posts/show/123"]);\n\n// visible-block-start\nimport { Show } from "@refinedev/chakra-ui";\n\nconst PostShow: React.FC = () => {\n  return (\n    <Show\n      // highlight-start\n      headerProps={{\n        borderColor: "blue",\n        borderStyle: "dashed",\n        borderWidth: "2px",\n      }}\n      // highlight-end\n    >\n      <p>Rest of your page here</p>\n    </Show>\n  );\n};\n// visible-block-end\n\nrender(\n  <ReactRouter.BrowserRouter>\n    <RefineChakraDemo\n      resources={[\n        {\n          name: "posts",\n          list: "/posts",\n          show: "/posts/show/:id",\n        },\n      ]}\n    >\n      <ReactRouter.Routes>\n        <ReactRouter.Route\n          path="/posts"\n          element={\n            <div>\n              <p>This page is empty.</p>\n              <RefineChakra.ShowButton recordItemId="123">\n                Show Post 123\n              </RefineChakra.ShowButton>\n            </div>\n          }\n        />\n        <ReactRouter.Route path="/posts/show/:id" element={<PostShow />} />\n      </ReactRouter.Routes>\n    </RefineChakraDemo>\n  </ReactRouter.BrowserRouter>,\n);\n'))),(0,o.yg)("h3",{id:"headerbuttons"},"headerButtons"),(0,o.yg)(d,{id:"headerbuttons",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"You can customize the buttons at the header by using the ",(0,o.yg)("inlineCode",{parentName:"p"},"headerButtons")," property. It accepts ",(0,o.yg)("inlineCode",{parentName:"p"},"React.ReactNode")," or a render function ",(0,o.yg)("inlineCode",{parentName:"p"},"({ defaultButtons, editButtonProps, deleteButtonProps }) => React.ReactNode")," which you can use to keep the existing buttons and add your own."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts/show/123",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts/show/123"},'setInitialRoutes(["/posts/show/123"]);\n\n// visible-block-start\nimport { Show } from "@refinedev/chakra-ui";\nimport { Button, HStack } from "@chakra-ui/react";\n\nconst PostShow: React.FC = () => {\n  return (\n    <Show\n      // highlight-start\n      headerButtons={({ defaultButtons }) => (\n        <HStack>\n          {defaultButtons}\n          <Button colorScheme="red">Custom Button</Button>\n        </HStack>\n      )}\n      // highlight-end\n    >\n      <p>Rest of your page here</p>\n    </Show>\n  );\n};\n// visible-block-end\n\nrender(\n  <ReactRouter.BrowserRouter>\n    <RefineChakraDemo\n      resources={[\n        {\n          name: "posts",\n          list: "/posts",\n          show: "/posts/show/:id",\n        },\n      ]}\n    >\n      <ReactRouter.Routes>\n        <ReactRouter.Route\n          path="/posts"\n          element={\n            <div>\n              <p>This page is empty.</p>\n              <RefineChakra.ShowButton recordItemId="123">\n                Show Post 123\n              </RefineChakra.ShowButton>\n            </div>\n          }\n        />\n        <ReactRouter.Route path="/posts/show/:id" element={<PostShow />} />\n      </ReactRouter.Routes>\n    </RefineChakraDemo>\n  </ReactRouter.BrowserRouter>,\n);\n'))),(0,o.yg)("h3",{id:"headerbuttonprops"},"headerButtonProps"),(0,o.yg)(d,{id:"headerbuttonprops",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"You can customize the wrapper element of the buttons at the header by using the ",(0,o.yg)("inlineCode",{parentName:"p"},"headerButtonProps")," property."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts/show/123",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts/show/123"},'setInitialRoutes(["/posts/show/123"]);\n\n// visible-block-start\nimport { Show } from "@refinedev/chakra-ui";\nimport { Button } from "@chakra-ui/react";\n\nconst PostShow: React.FC = () => {\n  return (\n    <Show\n      // highlight-start\n      headerButtonProps={{\n        borderColor: "blue",\n        borderStyle: "dashed",\n        borderWidth: "2px",\n        p: "2",\n      }}\n      // highlight-end\n      headerButtons={\n        <Button colorScheme="green" variant="outline">\n          Custom Button\n        </Button>\n      }\n    >\n      <p>Rest of your page here</p>\n    </Show>\n  );\n};\n// visible-block-end\n\nrender(\n  <ReactRouter.BrowserRouter>\n    <RefineChakraDemo\n      resources={[\n        {\n          name: "posts",\n          list: "/posts",\n          show: "/posts/show/:id",\n        },\n      ]}\n    >\n      <ReactRouter.Routes>\n        <ReactRouter.Route\n          path="/posts"\n          element={\n            <div>\n              <p>This page is empty.</p>\n              <RefineChakra.ShowButton recordItemId="123">\n                Show Post 123\n              </RefineChakra.ShowButton>\n            </div>\n          }\n        />\n        <ReactRouter.Route path="/posts/show/:id" element={<PostShow />} />\n      </ReactRouter.Routes>\n    </RefineChakraDemo>\n  </ReactRouter.BrowserRouter>,\n);\n'))),(0,o.yg)("h3",{id:"footerbuttons"},"footerButtons"),(0,o.yg)(d,{id:"footerbuttons",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"You can customize the buttons at the footer by using the ",(0,o.yg)("inlineCode",{parentName:"p"},"footerButtons")," property. It accepts ",(0,o.yg)("inlineCode",{parentName:"p"},"React.ReactNode")," or a render function ",(0,o.yg)("inlineCode",{parentName:"p"},"({ defaultButtons }) => React.ReactNode")," which you can use to keep the existing buttons and add your own."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts/show/123",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts/show/123"},'setInitialRoutes(["/posts/show/123"]);\n\n// visible-block-start\nimport { Show } from "@refinedev/chakra-ui";\nimport { Button, HStack } from "@chakra-ui/react";\n\nconst PostShow: React.FC = () => {\n  return (\n    <Show\n      // highlight-start\n      footerButtons={({ defaultButtons }) => (\n        <HStack borderColor="blue" borderStyle="dashed" borderWidth="2px" p="2">\n          {defaultButtons}\n          <Button colorScheme="red" variant="solid">\n            Custom Button\n          </Button>\n        </HStack>\n      )}\n      // highlight-end\n    >\n      <p>Rest of your page here</p>\n    </Show>\n  );\n};\n// visible-block-end\n\nrender(\n  <ReactRouter.BrowserRouter>\n    <RefineChakraDemo\n      resources={[\n        {\n          name: "posts",\n          list: "/posts",\n          show: "/posts/show/:id",\n        },\n      ]}\n    >\n      <ReactRouter.Routes>\n        <ReactRouter.Route\n          path="/posts"\n          element={\n            <div>\n              <p>This page is empty.</p>\n              <RefineChakra.ShowButton recordItemId="123">\n                Show Post 123\n              </RefineChakra.ShowButton>\n            </div>\n          }\n        />\n        <ReactRouter.Route path="/posts/show/:id" element={<PostShow />} />\n      </ReactRouter.Routes>\n    </RefineChakraDemo>\n  </ReactRouter.BrowserRouter>,\n);\n'))),(0,o.yg)("h3",{id:"footerbuttonprops"},"footerButtonProps"),(0,o.yg)(d,{id:"footerbuttonprops",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"You can customize the wrapper element of the buttons at the footer by using the ",(0,o.yg)("inlineCode",{parentName:"p"},"footerButtonProps")," property."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts/show/123",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts/show/123"},'setInitialRoutes(["/posts/show/123"]);\n\n// visible-block-start\nimport { Show } from "@refinedev/chakra-ui";\nimport { Button } from "@chakra-ui/react";\n\nconst PostShow: React.FC = () => {\n  return (\n    <Show\n      // highlight-start\n      footerButtonProps={{\n        style: {\n          float: "right",\n          borderColor: "blue",\n          borderStyle: "dashed",\n          borderWidth: "2px",\n          padding: "8px",\n        },\n      }}\n      // highlight-end\n      footerButtons={<Button colorScheme="green">Custom Button</Button>}\n    >\n      <p>Rest of your page here</p>\n    </Show>\n  );\n};\n// visible-block-end\n\nrender(\n  <ReactRouter.BrowserRouter>\n    <RefineChakraDemo\n      resources={[\n        {\n          name: "posts",\n          list: "/posts",\n          show: "/posts/show/:id",\n        },\n      ]}\n    >\n      <ReactRouter.Routes>\n        <ReactRouter.Route\n          path="/posts"\n          element={\n            <div>\n              <p>This page is empty.</p>\n              <RefineChakra.ShowButton recordItemId="123">\n                Show Post 123\n              </RefineChakra.ShowButton>\n            </div>\n          }\n        />\n        <ReactRouter.Route path="/posts/show/:id" element={<PostShow />} />\n      </ReactRouter.Routes>\n    </RefineChakraDemo>\n  </ReactRouter.BrowserRouter>,\n);\n'))),(0,o.yg)("h2",{id:"api-reference"},"API Reference"),(0,o.yg)("h3",{id:"properties"},"Properties"),(0,o.yg)(d,{id:"properties",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)(m,{module:"@refinedev/chakra-ui/Show",mdxType:"PropsTable"})))}w.isMDXComponent=!0}}]);