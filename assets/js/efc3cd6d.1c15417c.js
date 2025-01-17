"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[86303],{58860:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>g});var r=a(37953);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(a),h=n,g=c["".concat(l,".").concat(h)]||c[h]||m[h]||o;return a?r.createElement(g,i(i({ref:t},p),{},{components:a})):r.createElement(g,i({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},25319:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>c});a(37953);var r=a(58860);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const s={title:"How to use the useParams hook in React Router",description:"We'll discover how to access the parameters of the current route with the useParams hook in React Router.",slug:"react-router-useparams",authors:"joseph_mawa",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-24-router-use-params/social-2.png",hide_table_of_contents:!1},l=void 0,u={permalink:"/blog/react-router-useparams",source:"@site/blog/2024-12-12-router-use-params.md",title:"How to use the useParams hook in React Router",description:"We'll discover how to access the parameters of the current route with the useParams hook in React Router.",date:"2024-12-12T00:00:00.000Z",formattedDate:"December 12, 2024",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:6.45,hasTruncateMarker:!1,authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],frontMatter:{title:"How to use the useParams hook in React Router",description:"We'll discover how to access the parameters of the current route with the useParams hook in React Router.",slug:"react-router-useparams",authors:"joseph_mawa",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-24-router-use-params/social-2.png",hide_table_of_contents:!1},prevItem:{title:"A Detailed Guide on TypeScript Pick Type",permalink:"/blog/typescript-pick-utility-type"},nextItem:{title:"Material UI button in React",permalink:"/blog/mui-button-in-react"},relatedPosts:[{title:"React useReducer Hook - The Basics",description:"This post is about the useReducer() hook in React. We demonstrate with examples how to use it for action based state updates and discuss some safe practices.",permalink:"/blog/react-usereducer",formattedDate:"November 8, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:30.27,date:"2024-11-08T00:00:00.000Z"},{title:"How to set up a WebSocket connection with Node.js and React.js?",description:"Understanding Real-time communication with React and WebSocket",permalink:"/blog/react-websocket-tutorial-nodejs",formattedDate:"August 15, 2024",authors:[{name:"Frank Joseph",title:"Software Developer",imageURL:"/img/generic-profile.png",key:"frank_joseph"}],readingTime:18.885,date:"2024-08-15T00:00:00.000Z"},{title:"Ref Forwarding with React forwardRef",description:"We discuss in detail how ref forwarding with React forwardRef works.",permalink:"/blog/react-forwardref",formattedDate:"June 12, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:19.785,date:"2024-06-12T00:00:00.000Z"}],authorPosts:[{title:"Using Google Lighthouse to improve app performance",description:"Learn how to use the Google Chrome Lighthouse performance audit tool to identify and improve problems with your app.",permalink:"/blog/lighthouse-google-chrome",formattedDate:"May 24, 2024",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:18.65,date:"2024-05-24T00:00:00.000Z"},{title:"How to Build a React Admin Panel with Mantine and Strapi",description:"We'll be building a simple React Admin Panel with Refine and Mantine using Strapi as a backend service.",permalink:"/blog/react-admin-panel",formattedDate:"February 23, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:23.095,date:"2023-02-23T00:00:00.000Z"},{title:"JWT Authentication - What is JSON web token?",description:"We will focus mainly on using JWTs for securing web applications.",permalink:"/blog/jwt-authentication",formattedDate:"March 11, 2024",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:13.77,date:"2024-03-11T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"What is React useParams?",id:"what-is-react-useparams",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setting up React Router",id:"setting-up-react-router",level:2},{value:"Step 1 - Install React Router",id:"step-1---install-react-router",level:3},{value:"Step 2 - How to set up React router",id:"step-2---how-to-set-up-react-router",level:3},{value:"Step 3 - How to set up routes",id:"step-3---how-to-set-up-routes",level:3},{value:"What are URL parameters in React router",id:"what-are-url-parameters-in-react-router",level:2},{value:"How to use the <code>useParams</code> hook",id:"how-to-use-the-useparams-hook",level:2},{value:"Using Nested Routes with useParams",id:"using-nested-routes-with-useparams",level:2},{value:"Validating URL Parameters",id:"validating-url-parameters",level:2},{value:"Conclusion",id:"conclusion",level:2}],m={toc:c},h="wrapper";function g(e){var{components:t}=e,a=i(e,["components"]);return(0,r.yg)(h,o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){n(e,t,a[t])}))}return e}({},m,a),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"This article was last updated on December 12, 2024, to add sections for Using Nested Routes with useParams and Validating URL Parameters.")),(0,r.yg)("h2",{id:"introduction"},"Introduction"),(0,r.yg)("h3",{id:"what-is-react-useparams"},"What is React useParams?"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"useParams")," hook in React Router means that the dynamic parts of URLs are just easy to access within the app. It returns URL route parameters as an object where keys are the parameters on that route and values are segment pieces from the matching URL."),(0,r.yg)("p",null,"For example, in a route like /blog/:id, you could access id using ",(0,r.yg)("inlineCode",{parentName:"p"},"useParams")," from the component being rendered. Given the URL /blog/123, useParams() will return ",(0,r.yg)("inlineCode",{parentName:"p"},'{ id: "123" }'),". This comes in handy for dynamic rendering of content depending on the URL."),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"useParams")," hook is one of the several hooks in React router. It has been available in React router since version 5. You can use it to retrieve route parameters from the component rendered by the matching route. You will explore the React Router ",(0,r.yg)("inlineCode",{parentName:"p"},"useParams")," hook and how to use it in this article."),(0,r.yg)("p",null,"Steps we'll cover:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#what-is-react-useparams"},"What is React useParams?")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#setting-up-react-router"},"Setting up React Router"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#step-1---install-react-router"},"Step 1 - Install React Router")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#step-2---how-to-set-up-react-router"},"Step 2 - How to set up React router")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#step-3---how-to-set-up-routes"},"Step 3 - How to set up routes")))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#what-are-url-parameters-in-react-router"},"What are URL parameters in React router")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#how-to-use-the-useparams-hook"},"How to use the ",(0,r.yg)("inlineCode",{parentName:"a"},"useParams")," hook")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#using-nested-routes-with-useparams"},"Using Nested Routes with useParams")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#validating-url-parameters"},"Validating URL Parameters"))),(0,r.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.yg)("p",null,"To try out the examples in this article, you need to have a React project."),(0,r.yg)("p",null,"Quickly create a React project using ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/pankod/superplate"},"superplate")," CLI."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"npx superplate-cli useparams-example-app\n")),(0,r.yg)("h2",{id:"setting-up-react-router"},"Setting up React Router"),(0,r.yg)("p",null,"The steps below explain how to set up React router version 6 in an existing React project."),(0,r.yg)("h3",{id:"step-1---install-react-router"},"Step 1 - Install React Router"),(0,r.yg)("p",null,"Use one of the commands below to install React router version 6."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"# Using NPM\nnpm install react-router-dom@6\n\n# Using Yarn\nyarn add react-router-dom@6\n\n# Using pnpm\npnpm add react-router-dom@6\n")),(0,r.yg)("h3",{id:"step-2---how-to-set-up-react-router"},"Step 2 - How to set up React router"),(0,r.yg)("p",null,"To use React router in the browser environment, import ",(0,r.yg)("inlineCode",{parentName:"p"},"BrowserRouter")," and wrap your root component as in the example below. ",(0,r.yg)("inlineCode",{parentName:"p"},"BrowserRouter")," is a top-level Component. Other routers, such as ",(0,r.yg)("inlineCode",{parentName:"p"},"NativeRouter")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"StaticRouter"),", have their use cases you can look up in the documentation."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport ReactDOM from "react-dom/client";\nimport { BrowserRouter as Router } from "react-router-dom";\nimport App from "./App";\n\nconst root = ReactDOM.createRoot(document.getElementById("root"));\n\nroot.render(\n  <React.StrictMode>\n    <Router>\n      <App />\n    </Router>\n  </React.StrictMode>,\n);\n')),(0,r.yg)("h3",{id:"step-3---how-to-set-up-routes"},"Step 3 - How to set up routes"),(0,r.yg)("p",null,"Unlike in earlier versions of React router, you import the ",(0,r.yg)("inlineCode",{parentName:"p"},"Routes")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"Route")," components in React router version 6 and then set them up like in the example below."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'import { Route, Routes } from "react-router-dom";\nimport { Home, Blog } from "./components";\n\nfunction App() {\n  return (\n    <div className="App">\n      <Routes>\n        <Route path="/" element={<Home />} />\n        <Route path="/blog" element={<Blog />} />\n      </Routes>\n    </div>\n  );\n}\n')),(0,r.yg)("h2",{id:"what-are-url-parameters-in-react-router"},"What are URL parameters in React router"),(0,r.yg)("p",null,"When declaring functions in JavaScript, we use placeholders referred to as parameters. You use the parameters to perform some operations in the function declaration and return a value. The code below is a JavaScript function declaration that takes two numbers and returns their sum."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"function add(a, b) {\n  return a + b;\n}\n")),(0,r.yg)("p",null,"In the function declaration above, ",(0,r.yg)("inlineCode",{parentName:"p"},"a")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"b")," are placeholders. They are function parameters. The actual values you pass during function invocation are arguments. In the function invocation below, ",(0,r.yg)("inlineCode",{parentName:"p"},"2")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"3")," are arguments. The function can take any pair of numbers as arguments and return their sum."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"const sum = add(2, 3);\nconsole.log(sum); // 5\n")),(0,r.yg)("p",null,"The concept of parameters is not limited to function declarations. When working with React router, there are URL parameters similar to the function parameters described above. In React router, URL parameters are placeholders you declare in a route, as in the example below."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'<Routes>\n  <Route path="/blog/:id" element={<Blog />} />\n</Routes>\n')),(0,r.yg)("p",null,"In the example above, ",(0,r.yg)("inlineCode",{parentName:"p"},"id")," is a placeholder because of the ",(0,r.yg)("inlineCode",{parentName:"p"},":")," in front. The placeholder is known as the URL parameter. Because of the URL parameter, React router will not literally match the route above with the URL. It will dynamically match if you point the browser to a URL that matches the ",(0,r.yg)("inlineCode",{parentName:"p"},"/blog/:id")," pattern in its path."),(0,r.yg)("p",null,"Assuming you are hosting the site on ",(0,r.yg)("inlineCode",{parentName:"p"},"https://refine.dev/"),", pointing the browser to ",(0,r.yg)("inlineCode",{parentName:"p"},"https://refine.dev/blog/use-params")," will match the route above. As a result, the ",(0,r.yg)("inlineCode",{parentName:"p"},"id")," parameter will take the value ",(0,r.yg)("inlineCode",{parentName:"p"},'"use-params"')," in the ",(0,r.yg)("inlineCode",{parentName:"p"},"Blog")," component."),(0,r.yg)("p",null,"The section below will explain how you can access the URL parameter in the rendered Component using the ",(0,r.yg)("inlineCode",{parentName:"p"},"useParams")," hook."),(0,r.yg)("h2",{id:"how-to-use-the-useparams-hook"},"How to use the ",(0,r.yg)("inlineCode",{parentName:"h2"},"useParams")," hook"),(0,r.yg)("p",null,"As explained in the section above, you can declare a route with URL parameters so that React router dynamically captures the corresponding values in the URL when there is a match. It is useful when dynamically rendering the same component for multiple paths."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'<Routes>\n  <Route path="/blog/:id" element={<Blog />} />\n</Routes>\n')),(0,r.yg)("p",null,"Assuming you have the route above in your React router setup, you can retrieve the route parameters in the ",(0,r.yg)("inlineCode",{parentName:"p"},"Blog")," component using the ",(0,r.yg)("inlineCode",{parentName:"p"},"useParams")," hook. It returns an object. The object keys are the parameter names declared in the path string in the Route definition, and the values are the corresponding URL segment from the matching URL."),(0,r.yg)("p",null,"You can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"useParams")," hook in the rendered component to retrieve the parameters like so:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useParams } from "react-router-dom";\n\nconst Blog = () => {\n  const routeParams = useParams();\n};\n')),(0,r.yg)("p",null,"If the matching route is",(0,r.yg)("inlineCode",{parentName:"p"},"/blog/use-params")," for the example above, the ",(0,r.yg)("inlineCode",{parentName:"p"},"useParams")," hook will return the object below. You can then use the returned object in the rendered Component the way you want."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'{\n  id: "use-params";\n}\n')),(0,r.yg)("h2",{id:"using-nested-routes-with-useparams"},"Using Nested Routes with useParams"),(0,r.yg)("p",null,"In the case of working with nested routes in React Router, useParams can be really useful when trying to access each level\u2019s parameters. For instance, given a URL of this structure: ",(0,r.yg)("inlineCode",{parentName:"p"},"/category/:categoryId/product/:productId"),", you can use ",(0,r.yg)("inlineCode",{parentName:"p"},"useParams")," to obtain both ",(0,r.yg)("inlineCode",{parentName:"p"},"categoryId")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"productId"),"."),(0,r.yg)("p",null,"Here is how you can do this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useParams } from "react-router-dom";\n\nconst Product = () => {\n  const { categoryId, productId } = useParams();\n\n  return (\n    <div>\n      <h1>Category ID: {categoryId}</h1>\n      <h2>Product ID: {productId}</h2>\n    </div>\n  );\n};\n')),(0,r.yg)("p",null,"This will output, upon visiting ",(0,r.yg)("inlineCode",{parentName:"p"},"/category/5/product/42"),":"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Category ID: 5"),(0,r.yg)("li",{parentName:"ul"},"Product ID: 42")),(0,r.yg)("p",null,"Using ",(0,r.yg)("inlineCode",{parentName:"p"},"useParams")," in nested routes makes it easy to access and display dynamic information at different levels of your app."),(0,r.yg)("h2",{id:"validating-url-parameters"},"Validating URL Parameters"),(0,r.yg)("p",null,"Sometimes, your application might receive invalid parameters in the URL. For example, a user could accidentally or intentionally supply an incorrect value. You can perform basic validation to check the format of the parameter before using it."),(0,r.yg)("p",null,"Here\u2019s an example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useParams } from "react-router-dom";\n\nconst Blog = () => {\n  const { id } = useParams();\n\n  // Check if the ID is a number\n  if (!/^\\d+$/.test(id)) {\n    return <h1>Invalid Blog ID</h1>;\n  }\n\n  return <h1>Blog Post ID: {id}</h1>;\n};\n')),(0,r.yg)("p",null,"In the following example:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"If the user navigates to /blog/abc, it will display \u201cInvalid Blog ID.\u201d"),(0,r.yg)("li",{parentName:"ul"},"If they visit /blog/123, then \u201cBlog Post ID: 123\u201d will be shown.")),(0,r.yg)("p",null,"This approach helps you make your app more reliable and ensures you\u2019re only working with valid data from the URL."),(0,r.yg)("h2",{id:"conclusion"},"Conclusion"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"useParams")," hook has been part of React router since version 5. It comes in handy if you want to retrieve route parameters from the functional component rendered by the matching route. The React Router ",(0,r.yg)("inlineCode",{parentName:"p"},"useParams")," hook returns an object whose keys are the parameter names declared in the path string in the Route definition, and the values are the corresponding URL segment from the matching URL."))}g.isMDXComponent=!0}}]);