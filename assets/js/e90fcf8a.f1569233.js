"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[38421],{19401:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>N,frontMatter:()=>l,metadata:()=>p,toc:()=>m});n(96540);var a=n(15680),o=n(5063),r=n(15947);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function d(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={title:"Audit Log Provider"},u=void 0,p={unversionedId:"audit-logs/audit-log-provider/index",id:"audit-logs/audit-log-provider/index",title:"Audit Log Provider",description:"Refine allows you to track changes and who made them in your data by sending a new log event record whenever a new record is created, updated or deleted. Mutations made with data hooks are automatically sent to the auditLogProvider as an event. You can also manually send events to the auditLogProvider via hooks.",source:"@site/docs/audit-logs/audit-log-provider/index.md",sourceDirName:"audit-logs/audit-log-provider",slug:"/audit-logs/audit-log-provider/",permalink:"/docs/audit-logs/audit-log-provider/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/audit-logs/audit-log-provider/index.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1715064281,formattedLastUpdatedAt:"May 7, 2024",frontMatter:{title:"Audit Log Provider"},sidebar:"mainSidebar",previous:{title:"React",permalink:"/docs/examples/i18n/i18n-react"},next:{title:"useLog",permalink:"/docs/audit-logs/hooks/use-log/"}},g={},m=[{value:"Creating an Audit Log Provider",id:"creating-an-audit-log-provider",level:2},{value:"get",id:"get",level:3},{value:"create",id:"create",level:3},{value:"update",id:"update",level:3},{value:"Supported Hooks",id:"supported-hooks",level:2},{value:"useCreate",id:"usecreate",level:3},{value:"useCreateMany",id:"usecreatemany",level:3},{value:"useUpdate",id:"useupdate",level:3},{value:"useUpdateMany",id:"useupdatemany",level:3},{value:"useDelete",id:"usedelete",level:3},{value:"useDeleteMany",id:"usedeletemany",level:3},{value:"Enable/Disable to Audit Log by Mutation Type for a Resource",id:"enabledisable-to-audit-log-by-mutation-type-for-a-resource",level:2},{value:"Example",id:"example",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.yg)("div",t)},y=c("DocThumbsUpDownFeedbackWidget"),h=c("CodeSandboxExample"),v={toc:m},f="wrapper";function N(e){var{components:t}=e,n=d(e,["components"]);return(0,a.yg)(f,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},v,n),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Refine allows you to track changes and who made them in your data by sending a new log event record whenever a new record is created, updated or deleted. Mutations made with data hooks are automatically sent to the ",(0,a.yg)("inlineCode",{parentName:"p"},"auditLogProvider")," as an event. You can also manually send events to the ",(0,a.yg)("inlineCode",{parentName:"p"},"auditLogProvider")," via hooks."),(0,a.yg)("p",null,"To use ",(0,a.yg)("inlineCode",{parentName:"p"},"auditLogProvider"),", you just need to pass it to ",(0,a.yg)("inlineCode",{parentName:"p"},"<Refine>"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@refinedev/core";\n\nimport auditLogProvider from "./auditLogProvider";\n\nconst App = () => (\n  <Refine\n    /* ... */\n    auditLogProvider={auditLogProvider}\n  />\n);\n')),(0,a.yg)("p",null,"An ",(0,a.yg)("inlineCode",{parentName:"p"},"auditLogProvider")," must have the following methods:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"create"),": Logs an event to the audit log."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"get"),": Returns a list of events."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"update"),": Updates an event in the audit log.")),(0,a.yg)("p",null,"Below are the corresponding interfaces for each of these methods:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"const auditLogProvider = {\n    create: (params: {\n        resource: string;\n        action: string;\n        data?: any;\n        author?: {\n            name?: string;\n            [key: string]: any;\n        };\n        previousData?: any;\n        meta?: Record<string, any>;\n    }) => void;\n    get: (params: {\n        resource: string;\n        action?: string;\n        meta?: Record<string, any>;\n        author?: Record<string, any>;\n        metaData?: MetaDataQuery;\n    }) => Promise<any>;\n    update: (params: {\n        id: BaseKey;\n        name: string;\n    }) => Promise<any>;\n}\n")),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"Refine provides the ",(0,a.yg)("inlineCode",{parentName:"p"},"useLog")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"useLogList")," hooks that can be used to access your ",(0,a.yg)("inlineCode",{parentName:"p"},"auditLogProvider")," methods from anywhere in your application.")),(0,a.yg)("h2",{id:"creating-an-audit-log-provider"},"Creating an Audit Log Provider"),(0,a.yg)(y,{id:"creating-an-audit-log-provider",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"Let's create an ",(0,a.yg)("inlineCode",{parentName:"p"},"auditLogProvider")," to understand how it works better. Though we will be using ",(0,a.yg)("inlineCode",{parentName:"p"},"dataProvider")," to handle events, you can do it however you want thanks to Refine providing an agnostic API.")),(0,a.yg)("h3",{id:"get"},"get"),(0,a.yg)(y,{id:"get",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"This method is used to get a list of audit log events."),(0,a.yg)("p",null,"For example, using the ",(0,a.yg)("inlineCode",{parentName:"p"},"useLogList")," hook to list all resource activities by a specific record id creates an event like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "resource": "posts",\n  "meta": {\n    "id": "1"\n  }\n}\n')),(0,a.yg)("p",null,"Now let's see how we can handle these events in our audit log provider."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts",metastring:'title="audit-log-provider.ts"',title:'"audit-log-provider.ts"'},'export const auditLogProvider: AuditLogProvider = {\n  get: async (params) => {\n    const { resource, meta, action, author, metaData } = params;\n\n    const response = await fetch(\n      `https://example.com/api/audit-logs/${resource}/${meta.id}`,\n      {\n        method: "GET",\n      },\n    );\n\n    const data = await response.json();\n\n    return data;\n  },\n};\n'))),(0,a.yg)("h3",{id:"create"},"create"),(0,a.yg)(y,{id:"create",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("admonition",{title:"Caution",type:"simple"},(0,a.yg)("p",{parentName:"admonition"},"We recommend you create audit logs on the API side for security concerns since the data can be changed on the client side.")),(0,a.yg)("p",null,"This method is used to create an audit log event. It is triggered when a new successful mutation is made or when you use ",(0,a.yg)("inlineCode",{parentName:"p"},"useLog"),"'s ",(0,a.yg)("inlineCode",{parentName:"p"},"log")," method. The incoming parameters show the values of the new record to be created."),(0,a.yg)("p",null,"When the mutations is successful, the ",(0,a.yg)("inlineCode",{parentName:"p"},"create")," method is called with the following parameters, depending on the mutation type:"),(0,a.yg)("admonition",{title:"Log parameters for each mutation type",type:"simple"},(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Refine returns the ",(0,a.yg)("inlineCode",{parentName:"p"},"previousData")," from the react-query cache if it can find it, returns ",(0,a.yg)("inlineCode",{parentName:"p"},"undefined")," otherwise.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"In create mutations, if the request response has an ",(0,a.yg)("inlineCode",{parentName:"p"},"id")," field, it will be added to the ",(0,a.yg)("inlineCode",{parentName:"p"},"meta")," object.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"If ",(0,a.yg)("a",{parentName:"p",href:"/docs/authentication/auth-provider"},(0,a.yg)("inlineCode",{parentName:"a"},"getUserIdentity"))," is defined in your auth provider, the ",(0,a.yg)("inlineCode",{parentName:"p"},"author")," object will be added to the event with the value returned by ",(0,a.yg)("inlineCode",{parentName:"p"},"getUserIdentity"),".")))),(0,a.yg)(o.A,{defaultValue:"create",values:[{label:"Create",value:"create"},{label:"Update",value:"update"},{label:"Delete",value:"delete"},{label:"Create Many",value:"createMany"},{label:"Update Many",value:"updateMany"},{label:"Delete Many",value:"deleteMany"}],mdxType:"Tabs"},(0,a.yg)(r.A,{value:"create",mdxType:"TabItem"},(0,a.yg)("p",null,"When a record is created, Refine automatically sends an event to ",(0,a.yg)("inlineCode",{parentName:"p"},"create")," method like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "action": "create",\n  "resource": "posts",\n  "data": {\n    "title": "Hello World",\n    "content": "Hello World"\n  },\n  "meta": {\n    "dataProviderName": "simple-rest",\n    // If request response has a `id` field, it will be add in the `meta` field.\n    "id": 1\n  }\n}\n'))),(0,a.yg)(r.A,{value:"update",mdxType:"TabItem"},(0,a.yg)("p",null,"When a record is updated, Refine automatically sends an event to ",(0,a.yg)("inlineCode",{parentName:"p"},"create")," method like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "action": "update",\n  "resource": "posts",\n  "data": {\n    "title": "New Hello World",\n    "content": "New Hello World"\n  },\n  "previousData": {\n    "title": "Hello World",\n    "content": "Hello World"\n  },\n  "meta": {\n    "dataProviderName": "simple-rest",\n    "id": 1\n  }\n}\n'))),(0,a.yg)(r.A,{value:"delete",mdxType:"TabItem"},(0,a.yg)("p",null,"When a record is deleted, Refine automatically sends an event to ",(0,a.yg)("inlineCode",{parentName:"p"},"create")," method like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "action": "delete",\n  "resource": "posts",\n  "meta": {\n    "dataProviderName": "simple-rest",\n    "id": 1\n  }\n}\n'))),(0,a.yg)(r.A,{value:"createMany",mdxType:"TabItem"},(0,a.yg)("p",null,"When a record is created with the ",(0,a.yg)("inlineCode",{parentName:"p"},"useCreateMany")," hook, Refine automatically sends an event to the ",(0,a.yg)("inlineCode",{parentName:"p"},"create")," method like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "action": "createMany",\n  "resource": "posts",\n  "data": [\n    {\n      "title": "Hello World 1"\n    },\n    {\n      "title": "Hello World 2"\n    }\n  ],\n  "meta": {\n    "dataProviderName": "simple-rest",\n    // If request response has a `id` field, it will be add in the `meta` field.\n    "ids": [1, 2]\n  }\n}\n'))),(0,a.yg)(r.A,{value:"updateMany",mdxType:"TabItem"},(0,a.yg)("p",null,"When a record is updated with the ",(0,a.yg)("inlineCode",{parentName:"p"},"useUpdateMany")," hook, Refine automatically sends an event to the ",(0,a.yg)("inlineCode",{parentName:"p"},"create")," method like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "action": "updateMany",\n  "resource": "posts",\n  "data": {\n    "status": "published"\n  },\n  "previousData": [\n    {\n      "status": "draft"\n    },\n    {\n      "status": "archived"\n    }\n  ],\n  "meta": {\n    "dataProviderName": "simple-rest",\n    "ids": [1, 2]\n  }\n}\n'))),(0,a.yg)(r.A,{value:"deleteMany",mdxType:"TabItem"},(0,a.yg)("p",null,"When a record is deleted with the ",(0,a.yg)("inlineCode",{parentName:"p"},"useDeleteMany")," hook, Refine automatically sends an event to the ",(0,a.yg)("inlineCode",{parentName:"p"},"create")," method like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "action": "deleteMany",\n  "resource": "posts",\n  "meta": {\n    "dataProviderName": "simple-rest",\n    "id": [1, 2]\n  }\n}\n')))),(0,a.yg)("p",null,"And here is how we can handle these events in our audit log provider:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts",metastring:'title="audit-log-provider.ts"',title:'"audit-log-provider.ts"'},'export const auditLogProvider: AuditLogProvider = {\n  create: (params) => {\n    const { resource, meta, action, author, data, previousData } = params;\n\n    console.log(resource); // "produts", "posts", etc.\n    console.log(meta); // { id: "1" }, { id: "2" }, etc.\n    console.log(action); // "create", "update", "delete"\n    // author object is `useGetIdentity` hook\'s return value.\n    console.log(author); // { id: "1", name: "John Doe" }\n    console.log(data); // { name: "Product 1", price: 100 }\n    console.log(previousData); // { name: "Product 1", price: 50 }\n\n    await fetch("https://example.com/api/audit-logs", {\n      method: "POST",\n      body: JSON.stringify(params),\n    });\n\n    return { success: true };\n  },\n};\n')),(0,a.yg)("p",null,"For more information, refer to the ",(0,a.yg)("a",{parentName:"p",href:"/docs/audit-logs/hooks/use-log"},(0,a.yg)("inlineCode",{parentName:"a"},"useLog")," documentation","\u2192"))),(0,a.yg)("h3",{id:"update"},"update"),(0,a.yg)(y,{id:"update",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"This method is used to update an audit log event."),(0,a.yg)("p",null,"For example, using ",(0,a.yg)("inlineCode",{parentName:"p"},"useLog"),"'s ",(0,a.yg)("inlineCode",{parentName:"p"},"log")," method creates an event like below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "1",\n  "name": "event name"\n}\n')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts",metastring:'title="audit-log-provider.ts"',title:'"audit-log-provider.ts"'},'export const auditLogProvider: AuditLogProvider = {\n  update: async (params) => {\n    const { id, name, ...rest } = params;\n    console.log(id); // "1"\n    console.log(name); // "Created Product 1"\n    console.log(rest); // { foo: "bar" }\n\n    await fetch(`https://example.com/api/audit-logs/${id}`, {\n      method: "PATCH",\n      body: JSON.stringify(params),\n    });\n\n    return { success: true };\n  },\n};\n')),(0,a.yg)("p",null,"For more information, refer to the ",(0,a.yg)("a",{parentName:"p",href:"/docs/audit-logs/hooks/use-log"},(0,a.yg)("inlineCode",{parentName:"a"},"useLog")," documentation","\u2192"))),(0,a.yg)("h2",{id:"supported-hooks"},"Supported Hooks"),(0,a.yg)(y,{id:"supported-hooks",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"The following hooks will call ",(0,a.yg)("strong",{parentName:"p"},"Audit Log Provider"),"'s ",(0,a.yg)("inlineCode",{parentName:"p"},"create")," method when a mutation is successful."),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Package"),(0,a.yg)("th",{parentName:"tr",align:null},"Hooks"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"@refinedev/core"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/data/hooks/use-form/"},"useForm"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"@refinedev/antd"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/ui-integrations/ant-design/hooks/use-form"},"useForm"),", ",(0,a.yg)("a",{parentName:"td",href:"/docs/ui-integrations/ant-design/hooks/use-modal-form"},"useModalForm"),", ",(0,a.yg)("a",{parentName:"td",href:"/docs/ui-integrations/ant-design/hooks/use-drawer-form"},"useDrawerForm"),", ",(0,a.yg)("a",{parentName:"td",href:"/docs/ui-integrations/ant-design/hooks/use-steps-form"},"useStepsForm"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"@refinedev/mantine"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/ui-integrations/mantine/hooks/use-form"},"useForm"),", ",(0,a.yg)("a",{parentName:"td",href:"/docs/ui-integrations/mantine/hooks/use-modal-form"},"useModalForm"),", ",(0,a.yg)("a",{parentName:"td",href:"/docs/ui-integrations/mantine/hooks/use-drawer-form"},"useDrawerForm"),", ",(0,a.yg)("a",{parentName:"td",href:"/docs/ui-integrations/mantine/hooks/use-steps-form"},"useStepsForm"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"@refinedev/react-hook-form"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/packages/list-of-packages"},"useForm"),", ",(0,a.yg)("a",{parentName:"td",href:"/docs/packages/list-of-packages"},"useModalForm"),", ",(0,a.yg)("a",{parentName:"td",href:"/docs/packages/list-of-packages"},"useStepsForm"))))),(0,a.yg)("p",null,"Here are the parameters each hook send to ",(0,a.yg)("inlineCode",{parentName:"p"},"create"),":")),(0,a.yg)("h3",{id:"usecreate"},"useCreate"),(0,a.yg)(y,{id:"usecreate",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'const { mutate } = useCreate();\n\nmutate({\n  resource: "posts",\n  values: {\n    title: "New Post",\n    status: "published",\n    content: "New Post Content",\n  },\n  metaData: {\n    foo: "bar",\n  },\n});\n\n// Calls Audit Log Provider\'s `create` method with the following parameters:\n\n{\n  "action": "create",\n  "resource": "posts",\n  "data": {\n    "title": "Title",\n    "status": "published",\n    "content": "New Post Content"\n  },\n  "meta": {\n    "id": "1",\n    // `metaData` is included in `meta`.\n    "foo": "bar"\n  }\n}\n'))),(0,a.yg)("h3",{id:"usecreatemany"},"useCreateMany"),(0,a.yg)(y,{id:"usecreatemany",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'const { mutate } = useCreateMany();\n\nmutate({\n  resource: "posts",\n  values: [\n    {\n      title: "Title1",\n      status: "published",\n      content: "New Post Content1",\n    },\n    {\n      title: "Title2",\n      status: "published",\n      content: "New Post Content2",\n    },\n  ],\n  metaData: {\n    foo: "bar",\n  },\n});\n\n// Calls Audit Log Provider\'s `create` method with the following parameters:\n\n{\n  "action": "createMany",\n  "resource": "posts",\n  "data": [\n    {\n      "title": "Title1",\n      "status": "published",\n      "content": "New Post Content1"\n    },\n    {\n      "title": "Title2",\n      "status": "published",\n      "content": "New Post Content2"\n    }\n  ],\n  "meta": {\n    "ids": [1, 2],\n    // `metaData` is included in `meta`.\n    "foo": "bar"\n  }\n}\n'))),(0,a.yg)("h3",{id:"useupdate"},"useUpdate"),(0,a.yg)(y,{id:"useupdate",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'const { mutate } = useUpdate();\n\nmutate({\n  id: 1,\n  resource: "posts",\n  values: {\n    title: "Updated New Title",\n  },\n});\n\n// Calls Audit Log Provider\'s `create` method with the following parameters:\n\n{\n  "action": "update",\n  "resource": "posts",\n  "data": {\n    "title": "Updated New Title",\n    "status": "published",\n    "content": "New Post Content"\n  },\n  "previousData": {\n    "title": "Title",\n    "status": "published",\n    "content": "New Post Content"\n  },\n  "meta": {\n    "id": 1\n  }\n}\n'))),(0,a.yg)("h3",{id:"useupdatemany"},"useUpdateMany"),(0,a.yg)(y,{id:"useupdatemany",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'const { mutate } = useUpdateMany();\n\nmutate({\n  ids: [1, 2],\n  resource: "posts",\n  values: {\n    title: "Updated New Title",\n  },\n});\n\n// Calls Audit Log Provider\'s `create` method with the following parameters:\n\n{\n  "action": "updateMany",\n  "resource": "posts",\n  "data": {\n    "title": "Updated New Title"\n  },\n  "previousData": [\n    {\n      "title": "Title1"\n    },\n    {\n      "title": "Title2"\n    }\n  ],\n  "meta": {\n    "ids": [1, 2]\n  }\n}\n'))),(0,a.yg)("h3",{id:"usedelete"},"useDelete"),(0,a.yg)(y,{id:"usedelete",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'const { mutate } = useDelete();\n\nmutate({\n  id: 1,\n  resource: "posts",\n});\n\n// Calls Audit Log Provider\'s `create` method with the following parameters:\n\n{\n  "action": "delete",\n  "resource": "posts",\n  "meta": {\n    "id": 1\n  }\n}\n'))),(0,a.yg)("h3",{id:"usedeletemany"},"useDeleteMany"),(0,a.yg)(y,{id:"usedeletemany",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'const { mutate } = useDeleteMany();\n\nmutate({\n  ids: [1, 2],\n  resource: "posts",\n});\n\n// Calls Audit Log Provider\'s `create` method with the following parameters:\n\n{\n  "action": "deleteMany",\n  "resource": "posts",\n  "meta": {\n    "ids": [1, 2]\n  }\n}\n'))),(0,a.yg)("h2",{id:"enabledisable-to-audit-log-by-mutation-type-for-a-resource"},"Enable/Disable to Audit Log by Mutation Type for a Resource"),(0,a.yg)(y,{id:"enabledisable-to-audit-log-by-mutation-type-for-a-resource",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"With ",(0,a.yg)("inlineCode",{parentName:"p"},"meta.audit"),", you can specify which mutations trigger audit logs; otherwise, all create, update, and delete actions will be logged by default."),(0,a.yg)("p",null,"For example, if you have the code below, only events will be created for the ",(0,a.yg)("inlineCode",{parentName:"p"},"create")," mutation."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts",metastring:'title="App.tsx"',title:'"App.tsx"'},'<Refine\n  dataProvider={dataProvider(API_URL)}\n  resources={[\n    {\n      name: "posts",\n      // highlight-start\n      meta: {\n        audit: ["create"],\n      },\n      // highlight-end\n    },\n  ]}\n/>\n'))),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)(y,{id:"example",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)(h,{path:"audit-log-provider",mdxType:"CodeSandboxExample"})))}N.isMDXComponent=!0}}]);