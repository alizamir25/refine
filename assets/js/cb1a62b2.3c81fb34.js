"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[53550],{58860:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>h});var o=t(37953);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),l=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return o.createElement(p.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=r,h=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return t?o.createElement(h,a(a({ref:n},u),{},{components:t})):o.createElement(h,a({ref:n},u))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[d]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},36242:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>p,default:()=>b,frontMatter:()=>s,metadata:()=>l,toc:()=>d});t(37953);var o=t(58860);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const s={title:"Show",swizzle:!0},p=void 0,l={unversionedId:"ui-integrations/material-ui/components/buttons/show-button/index",id:"ui-integrations/material-ui/components/buttons/show-button/index",title:"Show",description:"` uses Material UI's  component. It uses the show method from useNavigation` under the hood. It can be useful when redirecting the app to the show page with the record id route of resource.",source:"@site/docs/ui-integrations/material-ui/components/buttons/show-button/index.md",sourceDirName:"ui-integrations/material-ui/components/buttons/show-button",slug:"/ui-integrations/material-ui/components/buttons/show-button/",permalink:"/docs/ui-integrations/material-ui/components/buttons/show-button/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/ui-integrations/material-ui/components/buttons/show-button/index.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1720193117,formattedLastUpdatedAt:"Jul 5, 2024",frontMatter:{title:"Show",swizzle:!0},sidebar:"mainSidebar",previous:{title:"Save",permalink:"/docs/ui-integrations/material-ui/components/buttons/save-button/"},next:{title:"Boolean",permalink:"/docs/ui-integrations/material-ui/components/fields/boolean-field/"}},u={},d=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"recordItemId",id:"recorditemid",level:3},{value:"resource",id:"resource",level:3},{value:"meta",id:"meta",level:3},{value:"hideText",id:"hidetext",level:3},{value:"accessControl",id:"accesscontrol",level:3},{value:"<del>resourceNameOrRouteName</del> <PropTag deprecated />",id:"resourcenameorroutename-",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],c=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.yg)("div",n)},m=c("DocThumbsUpDownFeedbackWidget"),h=c("PropTag"),g=c("PropsTable"),y={toc:d},f="wrapper";function b(e){var{components:n}=e,t=a(e,["components"]);return(0,o.yg)(f,i(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(n){r(e,n,t[n])}))}return e}({},y,t),{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"<ShowButton>")," uses Material UI's ",(0,o.yg)("a",{parentName:"p",href:"https://ant.design/components/button/"},(0,o.yg)("inlineCode",{parentName:"a"},"<Button>"))," component. It uses the ",(0,o.yg)("inlineCode",{parentName:"p"},"show")," method from ",(0,o.yg)("a",{parentName:"p",href:"/docs/routing/hooks/use-navigation"},(0,o.yg)("inlineCode",{parentName:"a"},"useNavigation"))," under the hood. It can be useful when redirecting the app to the show page with the record id route of resource."),(0,o.yg)("admonition",{title:"Good to know",type:"simple"},(0,o.yg)("p",{parentName:"admonition"},"You can swizzle this component with the ",(0,o.yg)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},(0,o.yg)("strong",{parentName:"a"},"Refine CLI"))," to customize it.")),(0,o.yg)("h2",{id:"usage"},"Usage"),(0,o.yg)(m,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=340px",live:!0,url:"http://localhost:3000/posts",previewHeight:"340px"},'// visible-block-start\nimport {\n  useDataGrid,\n  List,\n  // highlight-next-line\n  ShowButton,\n} from "@refinedev/mui";\nimport { DataGrid, GridColDef } from "@mui/x-data-grid";\n\nconst columns: GridColDef[] = [\n  { field: "id", headerName: "ID", type: "number" },\n  { field: "title", headerName: "Title", minWidth: 400, flex: 1 },\n  {\n    field: "actions",\n    headerName: "Actions",\n    renderCell: function render({ row }) {\n      // highlight-next-line\n      return <ShowButton size="small" recordItemId={row.id} />;\n    },\n    align: "center",\n    headerAlign: "center",\n    minWidth: 80,\n  },\n];\n\nconst PostsList: React.FC = () => {\n  const { dataGridProps } = useDataGrid<IPost>();\n\n  return (\n    <List>\n      <DataGrid {...dataGridProps} columns={columns} autoHeight />\n    </List>\n  );\n};\n\ninterface IPost {\n  id: number;\n  title: string;\n}\n// visible-block-end\n\nrender(\n  <RefineMuiDemo\n    resources={[\n      {\n        name: "posts",\n        list: PostsList,\n        show: () => <RefineMui.Show>Rest of the page here...</RefineMui.Show>,\n      },\n    ]}\n  />,\n);\n'))),(0,o.yg)("h2",{id:"properties"},"Properties"),(0,o.yg)("h3",{id:"recorditemid"},"recordItemId"),(0,o.yg)(m,{id:"recorditemid",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"recordItemId")," is used to append the record id to the end of the route path. By default, the ",(0,o.yg)("inlineCode",{parentName:"p"},"recordItemId")," is inferred from the route params."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=120px",live:!0,disableScroll:!0,previewHeight:"120px"},'const { useRouterContext } = RefineCore;\n// visible-block-start\nimport { ShowButton } from "@refinedev/mui";\n\nconst MyShowComponent = () => {\n  return (\n    <ShowButton\n      resource="posts"\n      // highlight-next-line\n      recordItemId="1"\n    />\n  );\n};\n\n// visible-block-end\n\nconst ShowPage = () => {\n  const params = useRouterContext().useParams();\n  return <div>{JSON.stringify(params)}</div>;\n};\n\nrender(\n  <RefineMuiDemo\n    initialRoutes={["/"]}\n    resources={[\n      {\n        name: "posts",\n        show: ShowPage,\n      },\n    ]}\n    DashboardPage={MyShowComponent}\n  />,\n);\n')),(0,o.yg)("p",null,"Clicking the button will trigger the ",(0,o.yg)("inlineCode",{parentName:"p"},"show")," method of ",(0,o.yg)("a",{parentName:"p",href:"/docs/routing/hooks/use-navigation"},(0,o.yg)("inlineCode",{parentName:"a"},"useNavigation"))," and then redirect the app to the ",(0,o.yg)("inlineCode",{parentName:"p"},"show")," action path of the resource, filling the necessary parameters in the route.")),(0,o.yg)("h3",{id:"resource"},"resource"),(0,o.yg)(m,{id:"resource",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"Redirection endpoint is defined by the ",(0,o.yg)("inlineCode",{parentName:"p"},"resource"),"'s ",(0,o.yg)("inlineCode",{parentName:"p"},"show")," action path. By default, ",(0,o.yg)("inlineCode",{parentName:"p"},"<ShowButton>")," uses the inferred resource from the route."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=120px",live:!0,disableScroll:!0,previewHeight:"120px"},'const { useRouterContext } = RefineCore;\n\n// visible-block-start\nimport { ShowButton } from "@refinedev/mui";\n\nconst MyShowComponent = () => {\n  return (\n    <ShowButton\n      // highlight-next-line\n      resource="categories"\n      recordItemId="2"\n    />\n  );\n};\n\n// visible-block-end\n\nconst ShowPage = () => {\n  const params = useRouterContext().useParams();\n  return <div>{JSON.stringify(params)}</div>;\n};\n\nrender(\n  <RefineMuiDemo\n    initialRoutes={["/"]}\n    resources={[\n      {\n        name: "posts",\n      },\n      {\n        name: "categories",\n        show: ShowPage,\n      },\n    ]}\n    DashboardPage={MyShowComponent}\n  />,\n);\n')),(0,o.yg)("p",null,"Clicking the button will trigger the ",(0,o.yg)("inlineCode",{parentName:"p"},"show")," method of ",(0,o.yg)("a",{parentName:"p",href:"/docs/routing/hooks/use-navigation"},(0,o.yg)("inlineCode",{parentName:"a"},"useNavigation"))," and then redirect the app to the ",(0,o.yg)("inlineCode",{parentName:"p"},"show")," action path of the resource, filling the necessary parameters in the route."),(0,o.yg)("p",null,"If you have multiple resources with the same name, you can pass the ",(0,o.yg)("inlineCode",{parentName:"p"},"identifier")," instead of the ",(0,o.yg)("inlineCode",{parentName:"p"},"name")," of the resource. It will only be used as the main matching key for the resource, data provider methods will still work with the ",(0,o.yg)("inlineCode",{parentName:"p"},"name")," of the resource defined in the ",(0,o.yg)("inlineCode",{parentName:"p"},"<Refine/>")," component."),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,o.yg)("a",{parentName:"p",href:"/docs/core/refine-component#identifier"},(0,o.yg)("inlineCode",{parentName:"a"},"identifier")," of the ",(0,o.yg)("inlineCode",{parentName:"a"},"<Refine/>")," component documentation ","\u2192")))),(0,o.yg)("h3",{id:"meta"},"meta"),(0,o.yg)(m,{id:"meta",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"It is used to pass additional parameters to the ",(0,o.yg)("inlineCode",{parentName:"p"},"show")," method of ",(0,o.yg)("a",{parentName:"p",href:"/docs/routing/hooks/use-navigation"},(0,o.yg)("inlineCode",{parentName:"a"},"useNavigation")),". By default, existing parameters in the route are used by the ",(0,o.yg)("inlineCode",{parentName:"p"},"show")," method. You can pass additional parameters or override the existing ones using the ",(0,o.yg)("inlineCode",{parentName:"p"},"meta")," prop."),(0,o.yg)("p",null,"If the ",(0,o.yg)("inlineCode",{parentName:"p"},"show")," action route is defined by the pattern: ",(0,o.yg)("inlineCode",{parentName:"p"},"/posts/:authorId/show/:id"),", the ",(0,o.yg)("inlineCode",{parentName:"p"},"meta")," prop can be used as follows:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'const MyComponent = () => {\n  return <ShowButton meta={{ authorId: "10" }} />;\n};\n'))),(0,o.yg)("h3",{id:"hidetext"},"hideText"),(0,o.yg)(m,{id:"hidetext",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"hideText")," is used to show or hide the text of the button. When ",(0,o.yg)("inlineCode",{parentName:"p"},"true"),", only the button icon is visible."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=120px",live:!0,disableScroll:!0,previewHeight:"120px"},'const { useRouterContext } = RefineCore;\n\n// visible-block-start\nimport { ShowButton } from "@refinedev/mui";\n\nconst MyShowComponent = () => {\n  return (\n    <ShowButton\n      // highlight-next-line\n      hideText={true}\n    />\n  );\n};\n\n// visible-block-end\n\nconst ShowPage = () => {\n  const params = useRouterContext().useParams();\n  return <div>{JSON.stringify(params)}</div>;\n};\n\nrender(\n  <RefineMuiDemo\n    initialRoutes={["/"]}\n    resources={[\n      {\n        name: "posts",\n        list: MyShowComponent,\n        show: ShowPage,\n      },\n    ]}\n  />,\n);\n'))),(0,o.yg)("h3",{id:"accesscontrol"},"accessControl"),(0,o.yg)(m,{id:"accesscontrol",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"This prop can be used to skip access control check with its ",(0,o.yg)("inlineCode",{parentName:"p"},"enabled")," property or to hide the button when the user does not have the permission to access the resource with ",(0,o.yg)("inlineCode",{parentName:"p"},"hideIfUnauthorized")," property. This is relevant only when an ",(0,o.yg)("a",{parentName:"p",href:"/docs/authorization/access-control-provider"},(0,o.yg)("inlineCode",{parentName:"a"},"accessControlProvider"))," is provided to ",(0,o.yg)("a",{parentName:"p",href:"/docs/core/refine-component"},(0,o.yg)("inlineCode",{parentName:"a"},"<Refine/>"))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import { ShowButton } from "@refinedev/mui";\n\nexport const MyListComponent = () => {\n  return (\n    <ShowButton accessControl={{ enabled: true, hideIfUnauthorized: true }} />\n  );\n};\n'))),(0,o.yg)("h3",{id:"resourcenameorroutename-"},(0,o.yg)("del",{parentName:"h3"},"resourceNameOrRouteName")," ",(0,o.yg)(h,{deprecated:!0,mdxType:"PropTag"})),(0,o.yg)(m,{id:"resourcenameorroutename-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"Use ",(0,o.yg)("inlineCode",{parentName:"p"},"resource")," prop instead.")),(0,o.yg)("h2",{id:"api-reference"},"API Reference"),(0,o.yg)("h3",{id:"properties-1"},"Properties"),(0,o.yg)(m,{id:"properties-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)(g,{module:"@refinedev/mui/ShowButton",mdxType:"PropsTable"}),(0,o.yg)("admonition",{title:"External Props",type:"simple"},(0,o.yg)("p",{parentName:"admonition"},"It also accepts all props of Material UI ",(0,o.yg)("a",{parentName:"p",href:"https://mui.com/material-ui/api/button/"},"Button"),"."))))}b.isMDXComponent=!0}}]);