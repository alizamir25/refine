"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[52060],{58860:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>g});var a=r(37953);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),y=n,g=d["".concat(p,".").concat(y)]||d[y]||m[y]||o;return r?a.createElement(g,i(i({ref:t},c),{},{components:r})):a.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=y;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},480:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>d});r(37953);var a=r(58860);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const s={title:"TypeScript Decorators in Brief",description:"We'll explore four main types of TypeScript Decorators with examples from a class that resembles those in typical class based TypeScript libraries.",slug:"typescript-decorators",authors:"abdullah_numan",tags:["typescript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-07-24-typescript-decorators/social-2.png",hide_table_of_contents:!1},p=void 0,l={permalink:"/blog/typescript-decorators",source:"@site/blog/2025-01-09-typescript-decorators.md",title:"TypeScript Decorators in Brief",description:"We'll explore four main types of TypeScript Decorators with examples from a class that resembles those in typical class based TypeScript libraries.",date:"2025-01-09T00:00:00.000Z",formattedDate:"January 9, 2025",tags:[{label:"typescript",permalink:"/blog/tags/typescript"}],readingTime:12.845,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"TypeScript Decorators in Brief",description:"We'll explore four main types of TypeScript Decorators with examples from a class that resembles those in typical class based TypeScript libraries.",slug:"typescript-decorators",authors:"abdullah_numan",tags:["typescript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-07-24-typescript-decorators/social-2.png",hide_table_of_contents:!1},prevItem:{title:"An Introduction to Using FastAPI",permalink:"/blog/introduction-to-fast-api"},nextItem:{title:"Using SVGs in React",permalink:"/blog/react-svg"},relatedPosts:[{title:"TypeScript Record Type with Examples",description:"We'll explore TypeScript Record type with examples.",permalink:"/blog/typescript-record-type",formattedDate:"January 6, 2025",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:8.085,date:"2025-01-06T00:00:00.000Z"},{title:"TypeScript keyof with Examples",description:"This post explains with examples how the keyof operator is used to define advanced types in TypeScript.",permalink:"/blog/typescript-keyof",formattedDate:"April 1, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:10.1,date:"2024-04-01T00:00:00.000Z"},{title:"A Guide for Next.js with TypeScript",description:"We will explain the entire process of how to use Next.js in TypeScript",permalink:"/blog/next-js-with-typescript",formattedDate:"June 10, 2024",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:11.765,date:"2024-06-10T00:00:00.000Z"}],authorPosts:[{title:"Ref Forwarding with React forwardRef",description:"We discuss in detail how ref forwarding with React forwardRef works.",permalink:"/blog/react-forwardref",formattedDate:"June 12, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:19.785,date:"2024-06-12T00:00:00.000Z"},{title:"A Guide on TypeScript Omit Type",description:"We'll dive into the TypeScript Omit utility type with examples",permalink:"/blog/typescript-omit-utility-type",formattedDate:"December 17, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:5.75,date:"2024-12-17T00:00:00.000Z"},{title:"A Detailed Guide on TypeScript Enum with Examples",description:"We'll explore TypeScript Enums with examples.",permalink:"/blog/typescript-enum",formattedDate:"January 6, 2025",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:16.055,date:"2025-01-06T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"TypeScript and Runtime",id:"typescript-and-runtime",level:3},{value:"Enabling Decorators Support",id:"enabling-decorators-support",level:3},{value:"Decorating a Class with TypeScript Decorators",id:"decorating-a-class-with-typescript-decorators",level:2},{value:"TypeScript Decorators Syntax",id:"typescript-decorators-syntax",level:2},{value:"Class Decoration in TypeScript",id:"class-decoration-in-typescript",level:2},{value:"Property Decorators in TypeScript",id:"property-decorators-in-typescript",level:2},{value:"Accessor Decorators in TypeScript",id:"accessor-decorators-in-typescript",level:2},{value:"Different Types of Decorators",id:"different-types-of-decorators",level:2},{value:"TypeScript Decorator Factories",id:"typescript-decorator-factories",level:2},{value:"Method Decorators in TypeScript",id:"method-decorators-in-typescript",level:2},{value:"Top 5 Best Ways for Applying Decorators",id:"top-5-best-ways-for-applying-decorators",level:2},{value:"1. Keep Decorators Simple",id:"1-keep-decorators-simple",level:3},{value:"2. Decorator Factories for Flexibility",id:"2-decorator-factories-for-flexibility",level:3},{value:"3. Combine Decorators Carefully",id:"3-combine-decorators-carefully",level:3},{value:"4. Document Decorators Clearly",id:"4-document-decorators-clearly",level:3},{value:"5. Test Decorators Thoroughly",id:"5-test-decorators-thoroughly",level:3},{value:"Summary",id:"summary",level:2}],m={toc:d},y="wrapper";function g(e){var{components:t}=e,r=i(e,["components"]);return(0,a.yg)(y,o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){n(e,t,r[t])}))}return e}({},m,r),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"This article was last updated on January 9, 2025, to include best practices for using TypeScript decorators, a detailed table comparing different decorator types, and tips for avoiding common mistakes when implementing decorators.")),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("admonition",{title:"What is TS Decorators?",type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"Think of decorators like special stickers you can attach to your classes or functions to add extra features or behavior without changing their code directly.")),(0,a.yg)("p",null,"TypeScript decorators are an extension that allows adding annotation and metaprogramming to class declarations and their members in TypeScript. TypeScript supports decorators syntax as an experimental feature which is distinct from JavaScript decorators that is currently a Stage 3 ECMAScript proposal. This post provides a brief walk through into the use of TypeScript decorators with examples from decorating a ",(0,a.yg)("inlineCode",{parentName:"p"},"User")," class, its properties, accessors and methods."),(0,a.yg)("p",null,"This decorators are an extension that implements the Decorator Pattern with native syntax. It is supported for class based programming which was introduced with ES6. TypeScript decorators allow us to sneak into run time JavaScript objects in order to annotate and manipulate them. As such, TypeScript decorators defined with built-in\nsyntax are commonly leveraged in TS libraries for logging events, warnings, as well as for observing, modifying and replacing objects and their members."),(0,a.yg)("p",null,"In this post, we explore four main types of TypeScript Decorators with examples from a class that resembles those in typical class based JavaScript / TypeScript libraries. We first introduce and understand the TypeScript decorators syntax. And then using an existing ",(0,a.yg)("inlineCode",{parentName:"p"},"User")," class and its members, we see how to decorate the class itself, and where necessary - its properties and their accessors, as well as other class methods."),(0,a.yg)("p",null,"Applying the decorators is done with ",(0,a.yg)("inlineCode",{parentName:"p"},"@"),", which exposes several parameters such as the ",(0,a.yg)("strong",{parentName:"p"},"class constructor")," or ",(0,a.yg)("strong",{parentName:"p"},"prototype")," and where applicable, the ",(0,a.yg)("strong",{parentName:"p"},"member key"),", the ",(0,a.yg)("strong",{parentName:"p"},"member descriptor")," and the parameter index of a method argument. These exposed parameters are utilized to define necessary decorator functions that observe, modify or replace the construct subject to decoration."),(0,a.yg)("p",null,"In the sections ahead, we work with an existing ",(0,a.yg)("inlineCode",{parentName:"p"},"User")," class that we seek to decorate. However, below let's first talk about the environment we need to get started."),(0,a.yg)("p",null,"Steps we'll cover:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#typescript-and-runtime"},"TypeScript and Runtime")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#enabling-decorators-support"},"Enabling Decorators Support")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#decorating-a-class-with-typescript-decorators"},"Decorating a Class with TypeScript Decorators")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#typescript-decorators-syntax"},"TypeScript Decorators Syntax")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#class-decoration-in-typescript"},"Class Decoration in TypeScript")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#property-decorators-in-typescript"},"Property Decorators in TypeScript")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#accessor-decorators-in-typescript"},"Accessor Decorators in TypeScript")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#different-types-of-decorators"},"Different Types of Decorators")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#typescript-decorator-factories"},"TypeScript Decorator Factories")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#method-decorators-in-typescript"},"Method Decorators in TypeScript")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#top-5-best-ways-for-applying-decorators"},"Top 5 Best Ways for Applying Decorators"))),(0,a.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.yg)("h3",{id:"typescript-and-runtime"},"TypeScript and Runtime"),(0,a.yg)("p",null,"In order to properly follow this post and test out the examples, you need to have a JavaScript engine. It could be Node.js in your local machine with TypeScript installed or you could use the ",(0,a.yg)("a",{parentName:"p",href:"https://www.typescriptlang.org/play"},"TypeScript Playground"),"."),(0,a.yg)("h3",{id:"enabling-decorators-support"},"Enabling Decorators Support"),(0,a.yg)("p",null,"TypeScript decorators are supported under experimental flag. So, we have to enable it from the ",(0,a.yg)("inlineCode",{parentName:"p"},"tsconfig.json")," file by adding the following entry to ",(0,a.yg)("inlineCode",{parentName:"p"},"compilerOptions"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'// Inside tsconfig.json\n\n{\n  "compilerOptions": {\n    "experimentalDecorators": true\n  }\n}\n')),(0,a.yg)("p",null,"If you're running a file in a Node.js shell, simply activate decorators by running the following command:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"tsc --experimentalDecorators\n")),(0,a.yg)("p",null,"In TypeScript Playground, you can activate decorators first by visiting the ",(0,a.yg)("inlineCode",{parentName:"p"},"TS Config")," dropdown and then selecting ",(0,a.yg)("inlineCode",{parentName:"p"},"experimentalDecorators")," from the ",(0,a.yg)("inlineCode",{parentName:"p"},"Language and Environment")," section."),(0,a.yg)("p",null,"With the environment ready to support decorators, let's now look at the existing ",(0,a.yg)("inlineCode",{parentName:"p"},"User")," class that we are decorating throughout this post."),(0,a.yg)("h2",{id:"decorating-a-class-with-typescript-decorators"},"Decorating a Class with TypeScript Decorators"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"User")," class that we want to decorate initially looks like below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'class User {\n  private static userType: string = "Generic";\n  private _email: string;\n\n  public username: string;\n  public addressLine1: string = "";\n  public addressLine2: string = "";\n  public country: string = "";\n\n  constructor(username: string, email: string) {\n    this.username = username;\n    this._email = email;\n  }\n\n  get userType() {\n    return User.userType;\n  }\n\n  get email() {\n    return this._email;\n  }\n\n  set email(newEmail: string) {\n    this._email = newEmail;\n  }\n\n  address(): any {\n    return `${this.addressLine1}\\n${this.addressLine2}\\n${this.country}`;\n  }\n}\n\nconst p = new User("exampleUser", "example@exmaple.com");\np.addressLine1 = "1, New Avenue";\np.addressLine2 = "Bahcelievler, Istanbul";\n')),(0,a.yg)("p",null,"As we can see, we have a mix of ",(0,a.yg)("inlineCode",{parentName:"p"},"private")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"public")," properties among ",(0,a.yg)("inlineCode",{parentName:"p"},"static")," and instance members describing different attributes of an user. We have accessors and also an ",(0,a.yg)("inlineCode",{parentName:"p"},"address()")," instance method that returns an address of the user."),(0,a.yg)("p",null,"TypeScript allows decorating the class constructor itself, its properties and their accessors, as well as method members. In the coming sections, one by one, we implement a ",(0,a.yg)("inlineCode",{parentName:"p"},"@frozen")," decorator on the ",(0,a.yg)("inlineCode",{parentName:"p"},"User")," class, ",(0,a.yg)("inlineCode",{parentName:"p"},"@required")," on a couple of properties, ",(0,a.yg)("inlineCode",{parentName:"p"},"@enumerable")," on a getter and ",(0,a.yg)("inlineCode",{parentName:"p"},"@deprecated")," on an instance method."),(0,a.yg)("p",null,"TypeScript also allows us to decorate method and constructor ",(0,a.yg)("strong",{parentName:"p"},"parameters"),". However, we are not covering it in this quick exploration as its use cases become relevant when we need deeper insight into runtime behaviors of properties and method arguments by relying on libraries such as ",(0,a.yg)("inlineCode",{parentName:"p"},"reflect-metadata"),"."),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"User")," class after applying the above mentioned decorators looks like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'@frozen\nclass User {\n  private static userType: string = "Generic";\n\n  @required\n  private _email: string;\n\n  @required\n  public username: string;\n\n  public addressLine1: string = "";\n  public addressLine2: string = "";\n  public country: string = "";\n\n  constructor(username: string, email: string) {\n    this.username = username;\n    this._email = email;\n  }\n\n  @enumerable(false)\n  get userType() {\n    return User.userType;\n  }\n\n  get email() {\n    return this._email;\n  }\n\n  set email(newEmail: string) {\n    this._email = newEmail;\n  }\n\n  @deprecated\n  address(): any {\n    return `${this.addressLine1}\\n${this.addressLine2}\\n${this.country}`;\n  }\n}\n\nconst p = new User("exampleUser", "example@example.com");\np.addressLine1 = "1, New Avenue";\np.addressLine2 = "Bahcelievler, Istanbul";\n')),(0,a.yg)("h2",{id:"typescript-decorators-syntax"},"TypeScript Decorators Syntax"),(0,a.yg)("p",null,"As we can see above, the syntax for using a decorator follows this pattern:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"@decoratorName\nitemToBeDecorated\n")),(0,a.yg)("p",null,"Here, ",(0,a.yg)("inlineCode",{parentName:"p"},"@")," invokes the ",(0,a.yg)("inlineCode",{parentName:"p"},"decoratorName")," function on the ",(0,a.yg)("inlineCode",{parentName:"p"},"itemToBeDecorated")," subject. And it exposes appropriate parameters for the ",(0,a.yg)("inlineCode",{parentName:"p"},"decoratorName")," to observe, modify and replace. These parameters vary according to whether the item is a class, property, method or a parameter. For example, when we want to decorate a class, the class ",(0,a.yg)("inlineCode",{parentName:"p"},"constructor")," or the ",(0,a.yg)("inlineCode",{parentName:"p"},"prototype")," is made available to the decorator function invoked by ",(0,a.yg)("inlineCode",{parentName:"p"},"@"),". It then falls on the class decorator function to make use of this parameter for decorating the class."),(0,a.yg)("p",null,"Let's explicate the idea by focusing on the ",(0,a.yg)("inlineCode",{parentName:"p"},"@frozen")," decorator call which is a class decorator."),(0,a.yg)("h2",{id:"class-decoration-in-typescript"},"Class Decoration in TypeScript"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"@frozen")," decorator is applied to our ",(0,a.yg)("inlineCode",{parentName:"p"},"User")," class. The decorator invocation with ",(0,a.yg)("inlineCode",{parentName:"p"},"@")," exposes the constructor function of the ",(0,a.yg)("inlineCode",{parentName:"p"},"User")," class to the ",(0,a.yg)("inlineCode",{parentName:"p"},"frozen")," function. This means we can pass it to ",(0,a.yg)("inlineCode",{parentName:"p"},"frozen")," and use it for manipulating the class. We want our ",(0,a.yg)("inlineCode",{parentName:"p"},"frozen")," function to freeze the ",(0,a.yg)("inlineCode",{parentName:"p"},"User")," class, like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"function frozen(target: Function) {\n  Object.freeze(target);\n  Object.freeze(target.prototype);\n}\n")),(0,a.yg)("p",null,"When we apply the decorator to the class, the ",(0,a.yg)("inlineCode",{parentName:"p"},"target")," is always the constructor function of the ",(0,a.yg)("inlineCode",{parentName:"p"},"User")," class."),(0,a.yg)("p",null,"And now if we try to add a new static member to ",(0,a.yg)("inlineCode",{parentName:"p"},"User"),", we get an error:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'console.log(Object.isFrozen(User)); // true\nUser.addNewProp = "Trying to add new prop value"; // [ERR]: Cannot add property addNewProp, object is not extensible\nconsole.log(Object.isFrozen(new User("example", "example@example.com"))); // false\n')),(0,a.yg)("p",null,"Notice that an instance of the ",(0,a.yg)("inlineCode",{parentName:"p"},"User")," class is ",(0,a.yg)("strong",{parentName:"p"},"not")," frozen, rather the class itself is. This means a class decorator is applied to the prototype and not to the instance."),(0,a.yg)("p",null,"Next, we are going to consider decorating properties."),(0,a.yg)("h2",{id:"property-decorators-in-typescript"},"Property Decorators in TypeScript"),(0,a.yg)("p",null,"If we look back at the ",(0,a.yg)("inlineCode",{parentName:"p"},"User")," class above, we have applied a ",(0,a.yg)("inlineCode",{parentName:"p"},"@required")," decorator to a couple of properties, namely: ",(0,a.yg)("inlineCode",{parentName:"p"},"username")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"email"),". We want ",(0,a.yg)("inlineCode",{parentName:"p"},"@required")," to throw an error if ",(0,a.yg)("inlineCode",{parentName:"p"},"username")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"email")," is not initialized at user construction."),(0,a.yg)("p",null,"Our ",(0,a.yg)("inlineCode",{parentName:"p"},"required")," decorator looks like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"function required(target: any, key: string) {\n  let currentValue = target[key];\n\n  Object.defineProperty(target, key, {\n    set: (newValue: string) => {\n      if (!newValue) {\n        throw new Error(`${key} is required.`);\n      }\n      currentValue = newValue;\n    },\n    get: () => currentValue,\n  });\n}\n")),(0,a.yg)("p",null,"Applying a decorator to a property exposes the ",(0,a.yg)("inlineCode",{parentName:"p"},"target")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"key")," parameters to the decorator function. The ",(0,a.yg)("inlineCode",{parentName:"p"},"target")," is the ",(0,a.yg)("inlineCode",{parentName:"p"},"constructor")," function if we apply the decorator to a ",(0,a.yg)("strong",{parentName:"p"},"static")," member and the ",(0,a.yg)("strong",{parentName:"p"},"prototype")," of the class if it is applied on an instance property. The ",(0,a.yg)("inlineCode",{parentName:"p"},"key")," is the member name."),(0,a.yg)("p",null,"Our ",(0,a.yg)("inlineCode",{parentName:"p"},"required")," function above grabs them to redefine a decorated property with the same member name but a different setter, effectively replacing the existing definition of the member value."),(0,a.yg)("p",null,"Notice that it is possible to ",(0,a.yg)("strong",{parentName:"p"},"replace")," the descriptor value of the member with ",(0,a.yg)("inlineCode",{parentName:"p"},"Object.defineProperty()")," method without necessarily accessing the member descriptor itself. This is useful in decorating properties."),(0,a.yg)("p",null,"And now if we try to instantiate a user without a value for ",(0,a.yg)("inlineCode",{parentName:"p"},"username")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"email"),", we'll get an error thrown:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'const p = new User("", "example@example.com"); // [ERR]: username is required.\nconst u = new User("example", ""); // [ERR]: _email is required.\n')),(0,a.yg)("p",null,"With this done, let's now see how property accessors should be decorated."),(0,a.yg)("h2",{id:"accessor-decorators-in-typescript"},"Accessor Decorators in TypeScript"),(0,a.yg)("p",null,"Applying a decorator to a property accessor exposes the property ",(0,a.yg)("inlineCode",{parentName:"p"},"descriptor")," in addition to the ",(0,a.yg)("inlineCode",{parentName:"p"},"target")," (constructor/prototype) and the ",(0,a.yg)("inlineCode",{parentName:"p"},"key")," (member name). With the member descriptor at our disposal, we can directly operate on the member metadata."),(0,a.yg)("p",null,"If we revisit the ",(0,a.yg)("inlineCode",{parentName:"p"},"User")," class with decorators applied, we see that we have an ",(0,a.yg)("inlineCode",{parentName:"p"},"@enumerable(false)")," decorator applied to the ",(0,a.yg)("inlineCode",{parentName:"p"},"userType()")," getter method."),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"enumerable")," wrapper below returns a function that takes the member ",(0,a.yg)("inlineCode",{parentName:"p"},"descriptor")," and sets its ",(0,a.yg)("inlineCode",{parentName:"p"},"enumerable")," attribute to ",(0,a.yg)("inlineCode",{parentName:"p"},"isEnumerable"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'function enumerable(isEnumerable: boolean) {\n  return (target: any, key: string, descriptor: PropertyDescriptor) => {\n    descriptor.enumerable = isEnumerable;\n    console.log(\n      "The enumerable property of this member is set to: " +\n        descriptor.enumerable,\n    );\n  };\n}\n')),(0,a.yg)("p",null,"This time, thanks to the access to the member ",(0,a.yg)("inlineCode",{parentName:"p"},"descriptor"),", we don't really need to redefine the same property with ",(0,a.yg)("inlineCode",{parentName:"p"},"Object.defineProperty()"),"."),(0,a.yg)("p",null,"With ",(0,a.yg)("inlineCode",{parentName:"p"},"@enumerable(false)")," applied to a member, the console prints the following message at:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"// The enumerable property of this member is set to: false\n")),(0,a.yg)("h2",{id:"different-types-of-decorators"},"Different Types of Decorators"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},(0,a.yg)("strong",{parentName:"th"},"Decorator Type")),(0,a.yg)("th",{parentName:"tr",align:null},(0,a.yg)("strong",{parentName:"th"},"What It Does")),(0,a.yg)("th",{parentName:"tr",align:null},(0,a.yg)("strong",{parentName:"th"},"Example")))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("strong",{parentName:"td"},"Class Decorators")),(0,a.yg)("td",{parentName:"tr",align:null},"Modify or observe a class."),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"@frozen"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("strong",{parentName:"td"},"Property Decorators")),(0,a.yg)("td",{parentName:"tr",align:null},"Add behavior or rules to properties."),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"@required"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("strong",{parentName:"td"},"Method Decorators")),(0,a.yg)("td",{parentName:"tr",align:null},"Modify how a method works."),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"@log"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("strong",{parentName:"td"},"Accessor Decorators")),(0,a.yg)("td",{parentName:"tr",align:null},"Add functionality to getters or setters."),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"@enumerable(false)"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("strong",{parentName:"td"},"Parameter Decorators")),(0,a.yg)("td",{parentName:"tr",align:null},"Add behavior to method parameters."),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"@validate"))))),(0,a.yg)("h2",{id:"typescript-decorator-factories"},"TypeScript Decorator Factories"),(0,a.yg)("p",null,"Take a close look at the ",(0,a.yg)("inlineCode",{parentName:"p"},"enumerable")," decorator. It is taking a parameter that is actually passed at decorator invocation. Rather than purely being a decorator, ",(0,a.yg)("inlineCode",{parentName:"p"},"enumerable")," is a ",(0,a.yg)("strong",{parentName:"p"},"decorator factory")," that produces the decorator for us by taking a ",(0,a.yg)("inlineCode",{parentName:"p"},"Boolean")," input from us. Such decorator factories are commonly used to customize decorator behavior and make them reusable."),(0,a.yg)("h2",{id:"method-decorators-in-typescript"},"Method Decorators in TypeScript"),(0,a.yg)("p",null,"In our ",(0,a.yg)("inlineCode",{parentName:"p"},"User")," class, we have a ",(0,a.yg)("inlineCode",{parentName:"p"},"@deprecated")," method decorator applied which is generally intended to inform the console that the method it is applied to is deprecated, alongside doing its usual stuff. Like accessor decorators, invoking a method decorator also exposes three parameters: the ",(0,a.yg)("inlineCode",{parentName:"p"},"target")," which can be the constructor for a static method or the class prototype for an instance method, the member ",(0,a.yg)("inlineCode",{parentName:"p"},"key")," for the method and the member ",(0,a.yg)("inlineCode",{parentName:"p"},"descriptor"),"."),(0,a.yg)("p",null,"Our ",(0,a.yg)("inlineCode",{parentName:"p"},"deprecated")," decorator function looks as below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"function deprecated(target: any, key: string, descriptor: PropertyDescriptor) {\n  const originalDef = descriptor.value;\n\n  descriptor.value = function (...args: any[]) {\n    console.log(`Warning: ${key}() is deprecated. Use other methods instead.`);\n    return originalDef.apply(this, args);\n  };\n  return descriptor;\n}\n")),(0,a.yg)("p",null,"Here the manipulation of the descriptor ",(0,a.yg)("inlineCode",{parentName:"p"},"value")," is explicit, as we can reset it directly and return the new ",(0,a.yg)("inlineCode",{parentName:"p"},"descriptor")," after implementing the decoration. Access to the ",(0,a.yg)("inlineCode",{parentName:"p"},"descriptor")," makes it easier to change the method implementation on the instance at runtime."),(0,a.yg)("p",null,"With the ",(0,a.yg)("inlineCode",{parentName:"p"},"@deprecated")," decorator applied to ",(0,a.yg)("inlineCode",{parentName:"p"},"address()"),", the following warning is logged to the console:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"// Warning: address() is deprecated. Use other methods instead.\n")),(0,a.yg)("p",null,"These are pretty much the major examples of decorators in TypeScript which can help us decorate a class and its members. Using parameter decorators give us more insight into how arguments act out in runtime. It is very useful to leverage the ",(0,a.yg)("inlineCode",{parentName:"p"},"reflect-metadata")," library with parameter decorators. For a few examples, please check out ",(0,a.yg)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/decorators.html#parameter-decorators"},"this section of the TypeScript decorators documentation"),"."),(0,a.yg)("h2",{id:"top-5-best-ways-for-applying-decorators"},"Top 5 Best Ways for Applying Decorators"),(0,a.yg)("p",null,"Here are the most important tips for using decorators effectively, including examples where relevant:"),(0,a.yg)("h3",{id:"1-keep-decorators-simple"},"1. Keep Decorators Simple"),(0,a.yg)("p",null,"A decorator should focus on one task only to keep the code clean and easy to debug.\nFor example, if you want to log method calls, create a simple decorator like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript"},"function logMethod(target: any, key: string, descriptor: PropertyDescriptor) {\n  const originalMethod = descriptor.value;\n  descriptor.value = function (...args: any[]) {\n    console.log(`Method ${key} called with args:`, args);\n    return originalMethod.apply(this, args);\n  };\n}\n\nclass Example {\n  @logMethod\n  greet(name: string) {\n    return `Hello, ${name}`;\n  }\n}\n\nconst obj = new Example();\nobj.greet(\"Alice\"); // Logs: Method greet called with args: [ 'Alice' ]\n")),(0,a.yg)("h3",{id:"2-decorator-factories-for-flexibility"},"2. Decorator Factories for Flexibility"),(0,a.yg)("p",null,"If your decorator needs any parameters, use a factory function. This way, the decorator can be reused for different configurations."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript"},'function log(message: string) {\n  return function (target: any, key: string) {\n    console.log(`${message}: ${key} was accessed.`);\n  };\n}\n\nclass Example {\n  @log("INFO")\n  name = "Alice";\n}\n\nconst obj = new Example();\nconsole.log(obj.name); // Outputs: INFO: name was accessed.\n')),(0,a.yg)("h3",{id:"3-combine-decorators-carefully"},"3. Combine Decorators Carefully"),(0,a.yg)("p",null,"It is powerful to stack decorators, but the order is important. Decorators are applied from top to bottom and executed from bottom to top. Test stacked decorators for correct behavior."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript"},'function first() {\n  return function (target: any, key: string) {\n    console.log("First decorator applied");\n  };\n}\n\nfunction second() {\n  return function (target: any, key: string) {\n    console.log("Second decorator applied");\n  };\n}\n\nclass Example {\n  @first()\n  @second()\n  greet() {\n    console.log("Hello!");\n  }\n}\n\nconst obj = new Example();\nobj.greet();\n// Logs:\n// Second decorator applied\n// First decorator applied\n')),(0,a.yg)("h3",{id:"4-document-decorators-clearly"},"4. Document Decorators Clearly"),(0,a.yg)("p",null,"Comment your decorators, or add documentation describing what they do. This is especially important in a team environment or when it comes time for future maintenance."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript"},'/**\n * Marks a method as deprecated.\n * Logs a warning when the method is called.\n */\nfunction deprecated(target: any, key: string, descriptor: PropertyDescriptor) {\n  const originalMethod = descriptor.value;\n  descriptor.value = function (...args: any[]) {\n    console.warn(`Warning: ${key} is deprecated.`);\n    return originalMethod.apply(this, args);\n  };\n}\n\nclass Example {\n  @deprecated\n  oldMethod() {\n    console.log("This method is outdated.");\n  }\n}\n\nconst obj = new Example();\nobj.oldMethod();\n// Logs: Warning: oldMethod is deprecated.\n// This method is outdated.\n')),(0,a.yg)("h3",{id:"5-test-decorators-thoroughly"},"5. Test Decorators Thoroughly"),(0,a.yg)("p",null,"Sometimes, decorators can cause unexpected behavior at runtime. Always write unit tests to ensure they work as expected, especially when modifying properties or methods."),(0,a.yg)("p",null,"Example of testing a simple @logMethod decorator:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript"},'function logMethod(target: any, key: string, descriptor: PropertyDescriptor) {\n  const originalMethod = descriptor.value;\n  descriptor.value = function (...args: any[]) {\n    console.log(`Method ${key} called`);\n    return originalMethod.apply(this, args);\n  };\n}\n\nclass Example {\n  @logMethod\n  greet() {\n    return "Hello!";\n  }\n}\n\n// Test\nlet obj: Example = new Example();\nconsole.assert(obj.greet() === "Hello!", \'Method should return "Hello!"\');\n')),(0,a.yg)("p",null,"By following these practices, you will maintain decorators as clean, flexible, and robust features in TypeScript projects."),(0,a.yg)("h2",{id:"summary"},"Summary"),(0,a.yg)("p",null,"TypeScript decorators are very useful for annotations such deprecation warnings and logging. They are especially powerful for metaprogramming in JavaScript applications. In this post, we have briefly explored four main types of decorators that can be implemented with TypeScript, namely: class decorators, property decorators, accessor decorators and method decorators. We also saw how decorator factories are used to produce reusable decorators in TypeScript."))}g.isMDXComponent=!0}}]);