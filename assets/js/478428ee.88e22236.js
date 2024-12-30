"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[32016],{58860:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>d});var r=n(37953);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(n),y=a,d=c["".concat(l,".").concat(y)]||c[y]||u[y]||i;return n?r.createElement(d,o(o({ref:t},m),{},{components:n})):r.createElement(d,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=y;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},23449:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>p,metadata:()=>s,toc:()=>c});n(37953);var r=n(58860);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={title:"A Guide on TypeScript Omit Type",description:"We'll dive into the TypeScript Omit utility type with examples",slug:"typescript-omit-utility-type",authors:"abdullah_numan",tags:["typescript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-03-typescript-omit/social-2.png",hide_table_of_contents:!1},l=void 0,s={permalink:"/blog/typescript-omit-utility-type",source:"@site/blog/2024-12-17-typescript-omit.md",title:"A Guide on TypeScript Omit Type",description:"We'll dive into the TypeScript Omit utility type with examples",date:"2024-12-17T00:00:00.000Z",formattedDate:"December 17, 2024",tags:[{label:"typescript",permalink:"/blog/tags/typescript"}],readingTime:5.75,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"A Guide on TypeScript Omit Type",description:"We'll dive into the TypeScript Omit utility type with examples",slug:"typescript-omit-utility-type",authors:"abdullah_numan",tags:["typescript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-03-typescript-omit/social-2.png",hide_table_of_contents:!1},prevItem:{title:"How to use TypeScript Partial Type?",permalink:"/blog/typescript-partial-utility-type"},nextItem:{title:"A Detailed Guide on TypeScript Pick Type",permalink:"/blog/typescript-pick-utility-type"},relatedPosts:[{title:"Dictionaries in TypeScript -  How to Ensure Type Safety",description:"This post is provides a guide on how to ensure type safety to dictionaries with TypeScript.",permalink:"/blog/typescript-dictionary",formattedDate:"November 11, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:24.605,date:"2024-11-11T00:00:00.000Z"},{title:"Essentials of TypeScript Classes",description:"TypeScript classes are a superset of JavaScript classes. This post covers the fundamentals of type annotations in TypeScript Classes and their associated quirks.",permalink:"/blog/typescript-classes",formattedDate:"November 7, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:20.06,date:"2023-11-07T00:00:00.000Z"},{title:"TypeScript Mapped Types in Depth",description:"This post provides an in-depth guide on how to derive mapped types in TypeScript.",permalink:"/blog/typescript-mapped-types",formattedDate:"February 29, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:11.19,date:"2024-02-29T00:00:00.000Z"}],authorPosts:[{title:"Adding CRUD Actions and Authentication",description:"We'll initialize our Pixels app using Refine and get familiar with the boilerplate code to be created with the create refine-app CLI tool.",permalink:"/blog/refine-pixels-3",formattedDate:"February 16, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:29.96,date:"2023-02-16T00:00:00.000Z"},{title:"A Detailed Guide on TypeScript Pick Type",description:"We'll deep dive into the TypeScript Pick utility type with examples and use cases.",permalink:"/blog/typescript-pick-utility-type",formattedDate:"December 17, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:7.51,date:"2024-12-17T00:00:00.000Z"},{title:"A Definitive guide on JavaScript every Method",description:"We expound with examples what the JavaScript every method is, how it works and when to use it.",permalink:"/blog/javascript-every-method",formattedDate:"February 7, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:12.06,date:"2024-02-07T00:00:00.000Z"}]},m={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"TypeScript <code>Omit&lt;Type, Keys&gt;</code> Example",id:"typescript-omittype-keys-example",level:2},{value:"TypeScript <code>Omit&lt;&gt;</code> with Interface",id:"typescript-omit-with-interface",level:2},{value:"When to Avoid",id:"when-to-avoid",level:2},{value:"When to Use TypeScript Omit",id:"when-to-use-typescript-omit",level:2},{value:"Comparison of <code>Pick</code> and <code>Omit</code> in TypeScript",id:"comparison-of-pick-and-omit-in-typescript",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:c},y="wrapper";function d(e){var{components:t}=e,n=o(e,["components"]);return(0,r.yg)(y,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"This article was last updated on December 17, 2024, to add sections for Use Cases of TypeScript Omit and clean introduction")),(0,r.yg)("h2",{id:"introduction"},"Introduction"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"TL;DR:")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"Omit<Type, Keys>")," utility in TypeScript helps to construct a new type by omitting certain properties from the existing type. It is perfect for reducing redundant code when certain properties are not needed."),(0,r.yg)("p",null,"In this article, we discuss object type transformations in TypeScript using ",(0,r.yg)("inlineCode",{parentName:"p"},"Omit<>"),". This is the second part of the series titled ",(0,r.yg)("a",{parentName:"p",href:"https://refine.dev/blog/typescript-pick-utility-type/"},"TypeScript Utility Type Series"),"."),(0,r.yg)("p",null,"In the previous post, we went through an example where we derived a ",(0,r.yg)("inlineCode",{parentName:"p"},"GuestUser")," type by picking a few properties from the base type, ",(0,r.yg)("inlineCode",{parentName:"p"},"SuperbUser"),", with ",(0,r.yg)("inlineCode",{parentName:"p"},"Pick<>"),". We hinted that if the number of properties to be picked are more than those being discarded, picking becomes less convenient. In that case, we should prefer using ",(0,r.yg)("inlineCode",{parentName:"p"},"Omit<>"),"."),(0,r.yg)("p",null,"In this post, we will consider an example of ",(0,r.yg)("inlineCode",{parentName:"p"},"Omit<>")," by creating a type for our ",(0,r.yg)("inlineCode",{parentName:"p"},"Subscriber")," entity."),(0,r.yg)("p",null,"Step we'll cover:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#typescript-omittype-keys-example"},"TypeScript ",(0,r.yg)("inlineCode",{parentName:"a"},"Omit<Type, Keys>")," Example")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#typescript-omit-with-interface"},"TypeScript ",(0,r.yg)("inlineCode",{parentName:"a"},"Omit<>")," with Interface")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#when-to-avoid"},"When to Avoid")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#when-to-use-typescript-omit"},"When to Use TypeScript Omit")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#comparison-of-pick-and-omit-in-typescript"},"Comparison of ",(0,r.yg)("inlineCode",{parentName:"a"},"Pick")," and ",(0,r.yg)("inlineCode",{parentName:"a"},"Omit")," in TypeScript"))),(0,r.yg)("h2",{id:"typescript-omittype-keys-example"},"TypeScript ",(0,r.yg)("inlineCode",{parentName:"h2"},"Omit<Type, Keys>")," Example"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Omit<>"),", like ",(0,r.yg)("inlineCode",{parentName:"p"},"Pick<>"),", takes a base type as the first argument. It takes an union type of the keys to be omitted as the second argument and returns the derived type that excludes those properties."),(0,r.yg)("p",null,"Looking back at the ERD, the ",(0,r.yg)("inlineCode",{parentName:"p"},"Subscriber")," entity has all the same properties as ",(0,r.yg)("inlineCode",{parentName:"p"},"SuperbUser")," - except ",(0,r.yg)("inlineCode",{parentName:"p"},"roles"),":"),(0,r.yg)("div",{class:"img-container","align-items":"center"},(0,r.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-03-typescript-omit/ts-omit-visualize.png",alt:"TypeScript Omit Type"})),(0,r.yg)("br",null),(0,r.yg)("p",null,"Deriving a ",(0,r.yg)("inlineCode",{parentName:"p"},"Subscriber")," type from the ",(0,r.yg)("inlineCode",{parentName:"p"},"SuperbUser")," plainly requires us to omit only the ",(0,r.yg)("inlineCode",{parentName:"p"},"roles")," property, as opposed to picking all the rest:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'type SuperbUser = {\n  userId: number;\n  macAddress: string;\n  username: string;\n  email: string;\n  password: string;\n  firstName: string;\n  lastName: string;\n  roles: ("Admin" | "Editor" | "Author")[];\n};\n\ntype Subscriber = Omit<SuperbUser, "roles">;\n')),(0,r.yg)("p",null,"So, in this case, TypeScript ",(0,r.yg)("inlineCode",{parentName:"p"},"Omit<>")," offers us convenience over ",(0,r.yg)("inlineCode",{parentName:"p"},"Pick<>"),". We can now create a subscriber object that has ",(0,r.yg)("inlineCode",{parentName:"p"},"roles")," property removed from its fields:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'const subscriber: Subscriber = {\n  userId: 4,\n  macAddress: "a:5ub:mach1ne",\n  username: "sub_user",\n  email: "sub_user@gmail.com",\n  password: "12345678",\n  firstName: "Abdullah",\n  lastName: "Numan",\n};\n\nconsole.log(subscriber);\n/*\n{\n  "userId": 4,\n  "macAddress": "a:5ub:mach1ne",\n  "username": "sub_user",\n  "email": "sub_user@gmail.com",\n  "password": "12345678",\n  "firstName": "Abdullah",\n  "lastName": "Numan"\n}\n*/\n\nconsole.log(subscriber.roles); // undefined\n')),(0,r.yg)("p",null,"Notice, if we navigate to ",(0,r.yg)("inlineCode",{parentName:"p"},"subscriber.roles")," it returns ",(0,r.yg)("inlineCode",{parentName:"p"},"undefined"),"."),(0,r.yg)("p",null,"Now, let's try adding ",(0,r.yg)("inlineCode",{parentName:"p"},"roles")," to the ",(0,r.yg)("inlineCode",{parentName:"p"},"subscriber"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'subscriber.roles = ["Reader", "Commenter"]; // Property \'roles\' does not exist on type \'Subscriber\'.\n\nconsole.log(subscriber.roles); // ["Reader", "Commenter"]\n')),(0,r.yg)("p",null,"And TypeScript grunts:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"// Property 'roles' does not exist on type 'Subscriber'.\n")),(0,r.yg)("p",null,"If we look at ",(0,r.yg)("inlineCode",{parentName:"p"},"console.log(subscriber.roles);")," though, we can see that our assignment actually sets the property and value of ",(0,r.yg)("inlineCode",{parentName:"p"},"subscriber.roles"),". TypeScript only yells at us at development, but doesn't help us with this in runtime. JavaScript sets the value of ",(0,r.yg)("inlineCode",{parentName:"p"},"subscribe.roles"),"."),(0,r.yg)("p",null,"So, caution there, as it is an important distinction that TypeScript is applying omit at development, not JavaScript. TypeScript does not check for any consequence of the written code ",(0,r.yg)("strong",{parentName:"p"},"after")," it is compiled to JavaScript. So, it is crucial to leverage TypeScript linter suggestions to strictly check omit while developing."),(0,r.yg)("h2",{id:"typescript-omit-with-interface"},"TypeScript ",(0,r.yg)("inlineCode",{parentName:"h2"},"Omit<>")," with Interface"),(0,r.yg)("p",null,"Like it was in ",(0,r.yg)("inlineCode",{parentName:"p"},"Pick<>"),", we can use an interface for ",(0,r.yg)("inlineCode",{parentName:"p"},"SuperbUser")," and the results will be the same:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'interface SuperbUser {\n  userId: number;\n  macAddress: string;\n  username: string;\n  email: string;\n  password: string;\n  firstName: string;\n  lastName: string;\n  roles: ("Admin" | "Editor" | "Author")[];\n}\n\ntype Subscriber = Omit<SuperbUser, "roles">;\n\nconst subscriber: Subscriber = {\n  userId: 4,\n  macAddress: "a:5ub:mach1ne",\n  username: "sub_user",\n  email: "sub_user@gmail.com",\n  password: "12345678",\n  firstName: "Abdullah",\n  lastName: "Numan",\n};\n\nconsole.log(subscriber);\n/*\n{\n  "userId": 4,\n  "macAddress": "a:5ub:mach1ne",\n  "username": "sub_user",\n  "email": "sub_user@gmail.com",\n  "password": "12345678",\n  "firstName": "Abdullah",\n  "lastName": "Numan"\n}\n*/\n\nconsole.log(subscriber.roles); // undefined\n')),(0,r.yg)("h2",{id:"when-to-avoid"},"When to Avoid"),(0,r.yg)("p",null,"As with ",(0,r.yg)("inlineCode",{parentName:"p"},"Pick<>"),", the second argument to Typescript Omit also takes a union of keys. So, if we need to omit any other property, we can add them to the second argument with the pipe operator ",(0,r.yg)("inlineCode",{parentName:"p"},"|"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"type Subscriber = Omit<SuperbUser, 'roles' | 'firstName' | ...>;\n")),(0,r.yg)("p",null,"We should avoid using ",(0,r.yg)("inlineCode",{parentName:"p"},"Omit<>")," and prefer ",(0,r.yg)("inlineCode",{parentName:"p"},"Pick<>")," when we have more properties to omit than to pick."),(0,r.yg)("h2",{id:"when-to-use-typescript-omit"},"When to Use TypeScript Omit"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"To remove sensitive fields (e.g., password) from user objects."),(0,r.yg)("li",{parentName:"ul"},"To generate simplified versions of complex types. - When most of the fields are needed but a few.")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Simplifying Derived Types"),":"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Omit comes in very handy when you have a complicated base type, but need a simplified version that doesn't contain a few fields.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'type FullUser = {\n  id: number;\n  name: string;\n  email: string;\n  password: string;\n  createdAt: Date;\n};\n\n// Create a "PublicUser" type without sensitive data like \'password\' and \'createdAt\'\ntype PublicUser = Omit<FullUser, "password" | "createdAt">;\n\nconst user: PublicUser = {\n  id: 1,\n  name: "John Doe",\n  email: "johndoe@gmail.com",\n};\n\nconsole.log(user);\n/*\n  Output:\n  {\n    id: 1,\n    name: "John Doe",\n    email: "johndoe@gmail.com"\n  }\n*/\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"API Data Filtering"),":"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Sometimes APIs or backends give you a full object when your frontend only needs a small subset of the fields. You could create a whole new type by hand. Alternatively, use Omit for quick adjustments.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'interface ApiResponse {\n  id: number;\n  username: string;\n  email: string;\n  passwordHash: string;\n  isAdmin: boolean;\n}\n\n// Create a \'FrontendUser\' without sensitive backend data\ntype FrontendUser = Omit<ApiResponse, "passwordHash" | "isAdmin">;\n\nconst frontendUser: FrontendUser = {\n  id: 101,\n  username: "frontend_dev",\n  email: "dev@example.com",\n};\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Creating Cleaner Types for Specific Contexts"),":"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"If you're working with forms, UI components, or other modules, chances are you only need some of the fields from the parent, larger type: Omit comes in handy to keep your types tidy and focused.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'interface FullProduct {\n  id: string;\n  name: string;\n  description: string;\n  price: number;\n  createdAt: Date;\n  updatedAt: Date;\n}\n\n// Create a \'ProductForm\' type for a UI form without metadata\ntype ProductForm = Omit<FullProduct, "id" | "createdAt" | "updatedAt">;\n\nconst formData: ProductForm = {\n  name: "Gaming Laptop",\n  description: "A powerful laptop for gaming.",\n  price: 1500,\n};\n')),(0,r.yg)("h2",{id:"comparison-of-pick-and-omit-in-typescript"},"Comparison of ",(0,r.yg)("inlineCode",{parentName:"h2"},"Pick")," and ",(0,r.yg)("inlineCode",{parentName:"h2"},"Omit")," in TypeScript"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Feature"),(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"th"},"Pick")),(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"th"},"Omit")),(0,r.yg)("th",{parentName:"tr",align:null}))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Purpose")),(0,r.yg)("td",{parentName:"tr",align:null},"Select specific fields"),(0,r.yg)("td",{parentName:"tr",align:null},"Exclude specific fields"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Syntax")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Pick<Type, Keys>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Omit<Type, Keys>")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Use Case")),(0,r.yg)("td",{parentName:"tr",align:null},"When fewer fields are needed"),(0,r.yg)("td",{parentName:"tr",align:null},"When fewer fields are omitted"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Example")),(0,r.yg)("td",{parentName:"tr",align:null},'`type A = Pick<Type, "id"'),(0,r.yg)("td",{parentName:"tr",align:null},'"name">;`'),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},'type B = Omit<Type, "password">;'))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Result")),(0,r.yg)("td",{parentName:"tr",align:null},"Includes only ",(0,r.yg)("inlineCode",{parentName:"td"},"id")," and ",(0,r.yg)("inlineCode",{parentName:"td"},"name")),(0,r.yg)("td",{parentName:"tr",align:null},"Excludes ",(0,r.yg)("inlineCode",{parentName:"td"},"password")),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h2",{id:"conclusion"},"Conclusion"),(0,r.yg)("p",null,"In this article, we delved into ",(0,r.yg)("inlineCode",{parentName:"p"},"Omit<>")," with an example of deriving a type for our ",(0,r.yg)("inlineCode",{parentName:"p"},"Subscriber")," entity by omitting a property from our base type, ",(0,r.yg)("inlineCode",{parentName:"p"},"SuperbUser"),". We saw that ",(0,r.yg)("inlineCode",{parentName:"p"},"Omit<>")," is the opposite equivalent of ",(0,r.yg)("inlineCode",{parentName:"p"},"Pick<>")," and is more convenient when we want to pick more properties and omit less from a base type."),(0,r.yg)("p",null,"In the next article, we'll cover object type transformations using ",(0,r.yg)("inlineCode",{parentName:"p"},"Partial<Type>"),"."))}d.isMDXComponent=!0}}]);