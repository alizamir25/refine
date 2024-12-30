"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[78849],{58860:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var o=n(37953);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.createContext({}),p=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(d.Provider,{value:t},e.children)},l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),m=r,g=l["".concat(d,".").concat(m)]||l[m]||c[m]||i;return n?o.createElement(g,a(a({ref:t},u),{},{components:n})):o.createElement(g,a({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[l]="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23613:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>b,frontMatter:()=>s,metadata:()=>p,toc:()=>l});n(37953);var o=n(58860);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={title:"Edit",swizzle:!0},d=void 0,p={unversionedId:"ui-integrations/ant-design/components/buttons/edit-button/index",id:"ui-integrations/ant-design/components/buttons/edit-button/index",title:"Edit",description:"` uses Ant Design's  component and the edit method from useNavigation` under the hood.",source:"@site/docs/ui-integrations/ant-design/components/buttons/edit-button/index.md",sourceDirName:"ui-integrations/ant-design/components/buttons/edit-button",slug:"/ui-integrations/ant-design/components/buttons/edit-button/",permalink:"/docs/ui-integrations/ant-design/components/buttons/edit-button/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/main/documentation/docs/ui-integrations/ant-design/components/buttons/edit-button/index.md",tags:[],version:"current",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1735543672,formattedLastUpdatedAt:"Dec 30, 2024",frontMatter:{title:"Edit",swizzle:!0},sidebar:"mainSidebar",previous:{title:"Delete",permalink:"/docs/ui-integrations/ant-design/components/buttons/delete-button/"},next:{title:"Export",permalink:"/docs/ui-integrations/ant-design/components/buttons/export-button/"}},u={},l=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"recordItemId",id:"recorditemid",level:3},{value:"resource",id:"resource",level:3},{value:"meta",id:"meta",level:3},{value:"hideText",id:"hidetext",level:3},{value:"accessControl",id:"accesscontrol",level:3},{value:"<del>resourceNameOrRouteName</del> <PropTag deprecated />",id:"resourcenameorroutename-",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.yg)("div",t)},m=c("DocThumbsUpDownFeedbackWidget"),g=c("PropTag"),y=c("PropsTable"),h={toc:l},f="wrapper";function b(e){var{components:t}=e,n=a(e,["components"]);return(0,o.yg)(f,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"<EditButton>")," uses Ant Design's ",(0,o.yg)("a",{parentName:"p",href:"https://ant.design/components/button/"},(0,o.yg)("inlineCode",{parentName:"a"},"<Button>"))," component and the ",(0,o.yg)("inlineCode",{parentName:"p"},"edit")," method from ",(0,o.yg)("a",{parentName:"p",href:"/docs/routing/hooks/use-navigation"},(0,o.yg)("inlineCode",{parentName:"a"},"useNavigation"))," under the hood."),(0,o.yg)("p",null,"It can be useful when redirecting the app to the edit page with the record id route of resource."),(0,o.yg)("admonition",{title:"Good to know",type:"simple"},(0,o.yg)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,o.yg)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},(0,o.yg)("strong",{parentName:"a"},"Refine CLI")))),(0,o.yg)("h2",{id:"usage"},"Usage"),(0,o.yg)(m,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewHeight=360px",live:!0,previewHeight:"360px"},'setInitialRoutes(["/posts"]);\n\n// visible-block-start\nimport {\n  List,\n  useTable,\n  // highlight-next-line\n  EditButton,\n} from "@refinedev/antd";\nimport { Table } from "antd";\n\nconst PostList: React.FC = () => {\n  const { tableProps } = useTable<IPost>();\n\n  return (\n    <List>\n      <Table {...tableProps} rowKey="id">\n        <Table.Column dataIndex="id" title="ID" />\n        <Table.Column dataIndex="title" title="Title" width="100%" />\n        <Table.Column<IPost>\n          title="Actions"\n          dataIndex="actions"\n          key="actions"\n          render={(_, record) => (\n            // highlight-next-line\n            <EditButton size="small" recordItemId={record.id} />\n          )}\n        />\n      </Table>\n    </List>\n  );\n};\n\ninterface IPost {\n  id: number;\n  title: string;\n}\n// visible-block-end\n\nconst PostEdit = () => {\n  const parsed = RefineCore.useParsed();\n  return <pre>{JSON.stringify(parsed, null, 2)}</pre>;\n};\n\nrender(\n  <ReactRouter.BrowserRouter>\n    <RefineAntdDemo\n      resources={[\n        {\n          name: "posts",\n          list: "/posts",\n          edit: "/posts/:id/edit",\n        },\n      ]}\n    >\n      <ReactRouter.Routes>\n        <ReactRouter.Route\n          path="/posts"\n          element={\n            <div style={{ padding: 16 }}>\n              <ReactRouter.Outlet />\n            </div>\n          }\n        >\n          <ReactRouter.Route index element={<PostList />} />\n          <ReactRouter.Route path=":id/edit" element={<PostEdit />} />\n        </ReactRouter.Route>\n      </ReactRouter.Routes>\n    </RefineAntdDemo>\n  </ReactRouter.BrowserRouter>,\n);\n'))),(0,o.yg)("h2",{id:"properties"},"Properties"),(0,o.yg)("h3",{id:"recorditemid"},"recordItemId"),(0,o.yg)(m,{id:"recorditemid",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"recordItemId")," is used to append the record id to the end of the route path. By default, the ",(0,o.yg)("inlineCode",{parentName:"p"},"recordItemId")," is inferred from the route params."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewHeight=120px",live:!0,previewHeight:"120px"},'setInitialRoutes(["/posts"]);\n\n// visible-block-start\nimport { EditButton } from "@refinedev/antd";\n\nconst MyEditComponent = () => {\n  return (\n    <EditButton\n      resource="posts"\n      // highlight-next-line\n      recordItemId="123"\n    />\n  );\n};\n\n// visible-block-end\n\nconst PostEdit = () => {\n  const parsed = RefineCore.useParsed();\n  return <pre>{JSON.stringify(parsed, null, 2)}</pre>;\n};\n\nrender(\n  <ReactRouter.BrowserRouter>\n    <RefineAntdDemo\n      resources={[\n        {\n          name: "posts",\n          list: "/posts",\n          edit: "/posts/:id/edit",\n        },\n      ]}\n    >\n      <ReactRouter.Routes>\n        <ReactRouter.Route\n          path="/posts"\n          element={\n            <div style={{ padding: 16 }}>\n              <ReactRouter.Outlet />\n            </div>\n          }\n        >\n          <ReactRouter.Route index element={<MyEditComponent />} />\n          <ReactRouter.Route path=":id/edit" element={<PostEdit />} />\n        </ReactRouter.Route>\n      </ReactRouter.Routes>\n    </RefineAntdDemo>\n  </ReactRouter.BrowserRouter>,\n);\n')),(0,o.yg)("p",null,"Clicking the button will trigger the ",(0,o.yg)("inlineCode",{parentName:"p"},"edit")," method of ",(0,o.yg)("a",{parentName:"p",href:"/docs/routing/hooks/use-navigation"},(0,o.yg)("inlineCode",{parentName:"a"},"useNavigation"))," and then redirect the app to the ",(0,o.yg)("inlineCode",{parentName:"p"},"edit")," action path of the resource, filling the necessary parameters in the route.")),(0,o.yg)("h3",{id:"resource"},"resource"),(0,o.yg)(m,{id:"resource",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"The redirection endpoint is defined by the ",(0,o.yg)("inlineCode",{parentName:"p"},"resource")," property and its ",(0,o.yg)("inlineCode",{parentName:"p"},"edit")," action path. By default, ",(0,o.yg)("inlineCode",{parentName:"p"},"<EditButton>")," uses the inferred resource from the route."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewHeight=120px",live:!0,previewHeight:"120px"},'setInitialRoutes(["/categories"]);\n\n// visible-block-start\nimport { EditButton } from "@refinedev/antd";\n\nconst MyEditComponent = () => {\n  return (\n    <EditButton\n      // highlight-next-line\n      resource="categories"\n      recordItemId="123"\n    />\n  );\n};\n\n// visible-block-end\n\nconst CategoryEdit = () => {\n  const parsed = RefineCore.useParsed();\n  return <pre>{JSON.stringify(parsed, null, 2)}</pre>;\n};\n\nrender(\n  <ReactRouter.BrowserRouter>\n    <RefineAntdDemo\n      resources={[\n        {\n          name: "posts",\n          list: "/posts",\n          edit: "/posts/:id/edit",\n        },\n        {\n          name: "categories",\n          list: "/categories",\n          edit: "/categories/:id/edit",\n        },\n      ]}\n    >\n      <ReactRouter.Routes>\n        <ReactRouter.Route\n          path="/categories"\n          element={\n            <div style={{ padding: 16 }}>\n              <ReactRouter.Outlet />\n            </div>\n          }\n        >\n          <ReactRouter.Route index element={<MyEditComponent />} />\n          <ReactRouter.Route path=":id/edit" element={<CategoryEdit />} />\n        </ReactRouter.Route>\n      </ReactRouter.Routes>\n    </RefineAntdDemo>\n  </ReactRouter.BrowserRouter>,\n);\n')),(0,o.yg)("p",null,"Clicking the button will trigger the ",(0,o.yg)("inlineCode",{parentName:"p"},"edit")," method of ",(0,o.yg)("a",{parentName:"p",href:"/docs/routing/hooks/use-navigation"},(0,o.yg)("inlineCode",{parentName:"a"},"useNavigation"))," and then redirect the app to the ",(0,o.yg)("inlineCode",{parentName:"p"},"edit")," action path of the resource, filling the necessary parameters in the route."),(0,o.yg)("p",null,"If you have multiple resources with the same name, you can pass the ",(0,o.yg)("inlineCode",{parentName:"p"},"identifier")," instead of the ",(0,o.yg)("inlineCode",{parentName:"p"},"name")," of the resource. It will only be used as the main matching key for the resource, data provider methods will still work with the ",(0,o.yg)("inlineCode",{parentName:"p"},"name")," of the resource defined in the ",(0,o.yg)("inlineCode",{parentName:"p"},"<Refine/>")," component."),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,o.yg)("a",{parentName:"p",href:"/docs/core/refine-component#identifier"},(0,o.yg)("inlineCode",{parentName:"a"},"identifier")," section of the ",(0,o.yg)("inlineCode",{parentName:"a"},"<Refine/>")," component documentation ","\u2192")))),(0,o.yg)("h3",{id:"meta"},"meta"),(0,o.yg)(m,{id:"meta",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"It is used to pass additional parameters to the ",(0,o.yg)("inlineCode",{parentName:"p"},"edit")," method of ",(0,o.yg)("a",{parentName:"p",href:"/docs/routing/hooks/use-navigation"},(0,o.yg)("inlineCode",{parentName:"a"},"useNavigation")),". By default, existing parameters in the route are used by the ",(0,o.yg)("inlineCode",{parentName:"p"},"edit")," method. You can pass additional parameters or override the existing ones using the ",(0,o.yg)("inlineCode",{parentName:"p"},"meta")," prop."),(0,o.yg)("p",null,"If the ",(0,o.yg)("inlineCode",{parentName:"p"},"edit")," action route is defined by the pattern: ",(0,o.yg)("inlineCode",{parentName:"p"},"/posts/:authorId/edit/:id"),", the ",(0,o.yg)("inlineCode",{parentName:"p"},"meta")," prop can be used as follows:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'const MyComponent = () => {\n  return <EditButton meta={{ authorId: "10" }} />;\n};\n'))),(0,o.yg)("h3",{id:"hidetext"},"hideText"),(0,o.yg)(m,{id:"hidetext",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"It is used to show and not show the text of the button. When ",(0,o.yg)("inlineCode",{parentName:"p"},"true"),", only the button icon is visible."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewHeight=120px",live:!0,previewHeight:"120px"},'setInitialRoutes(["/posts"]);\n\n// visible-block-start\nimport { EditButton } from "@refinedev/antd";\n\nconst MyEditComponent = () => {\n  return (\n    <EditButton\n      // highlight-next-line\n      hideText={true}\n      recordItemId="123"\n    />\n  );\n};\n\n// visible-block-end\n\nconst PostEdit = () => {\n  const parsed = RefineCore.useParsed();\n  return <pre>{JSON.stringify(parsed, null, 2)}</pre>;\n};\n\nrender(\n  <ReactRouter.BrowserRouter>\n    <RefineAntdDemo\n      resources={[\n        {\n          name: "posts",\n          list: "/posts",\n          edit: "/posts/:id/edit",\n        },\n      ]}\n    >\n      <ReactRouter.Routes>\n        <ReactRouter.Route\n          path="/posts"\n          element={\n            <div style={{ padding: 16 }}>\n              <ReactRouter.Outlet />\n            </div>\n          }\n        >\n          <ReactRouter.Route index element={<MyEditComponent />} />\n          <ReactRouter.Route path=":id/edit" element={<PostEdit />} />\n        </ReactRouter.Route>\n      </ReactRouter.Routes>\n    </RefineAntdDemo>\n  </ReactRouter.BrowserRouter>,\n);\n'))),(0,o.yg)("h3",{id:"accesscontrol"},"accessControl"),(0,o.yg)(m,{id:"accesscontrol",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"This prop can be used to skip access control check with its ",(0,o.yg)("inlineCode",{parentName:"p"},"enabled")," property or to hide the button when the user does not have the permission to access the resource with ",(0,o.yg)("inlineCode",{parentName:"p"},"hideIfUnauthorized")," property. This is relevant only when an ",(0,o.yg)("a",{parentName:"p",href:"/docs/authorization/access-control-provider"},(0,o.yg)("inlineCode",{parentName:"a"},"accessControlProvider"))," is provided to ",(0,o.yg)("a",{parentName:"p",href:"/docs/core/refine-component"},(0,o.yg)("inlineCode",{parentName:"a"},"<Refine/>"))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import { EditButton } from "@refinedev/antd";\n\nexport const MyListComponent = () => {\n  return (\n    <EditButton\n      accessControl={{\n        enabled: true,\n        hideIfUnauthorized: true,\n      }}\n    />\n  );\n};\n'))),(0,o.yg)("h3",{id:"resourcenameorroutename-"},(0,o.yg)("del",{parentName:"h3"},"resourceNameOrRouteName")," ",(0,o.yg)(g,{deprecated:!0,mdxType:"PropTag"})),(0,o.yg)(m,{id:"resourcenameorroutename-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"Use ",(0,o.yg)("inlineCode",{parentName:"p"},"resource")," prop instead.")),(0,o.yg)("h2",{id:"api-reference"},"API Reference"),(0,o.yg)("h3",{id:"properties-1"},"Properties"),(0,o.yg)(m,{id:"properties-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)(y,{module:"@refinedev/antd/EditButton",mdxType:"PropsTable"}),(0,o.yg)("admonition",{title:"External Props",type:"simple"},(0,o.yg)("p",{parentName:"admonition"},"It also accepts all props of Ant Design ",(0,o.yg)("a",{parentName:"p",href:"https://ant.design/components/button/#API"},"Button"),"."))))}b.isMDXComponent=!0}}]);