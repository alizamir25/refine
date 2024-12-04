"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[65231],{58860:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>h});var a=n(37953);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),g=r,h=p["".concat(l,".").concat(g)]||p[g]||d[g]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},24432:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});n(37953);var a=n(58860);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={title:"Beginner's Guide to React Query",description:"We'll be looking at the basics of React Query, how to use it, and why you should use it.",slug:"react-query-guide",authors:"marvel_ken",tags:["react","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-07-04-react-query-intro/social-2.png",hide_table_of_contents:!1},l=void 0,u={permalink:"/blog/react-query-guide",source:"@site/blog/2024-11-28-react-query-intro.md",title:"Beginner's Guide to React Query",description:"We'll be looking at the basics of React Query, how to use it, and why you should use it.",date:"2024-11-28T00:00:00.000Z",formattedDate:"November 28, 2024",tags:[{label:"react",permalink:"/blog/tags/react"},{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:13.42,hasTruncateMarker:!1,authors:[{name:"Marvel Ken",title:"Software Developer",imageURL:"/img/generic-profile.png",key:"marvel_ken"}],frontMatter:{title:"Beginner's Guide to React Query",description:"We'll be looking at the basics of React Query, how to use it, and why you should use it.",slug:"react-query-guide",authors:"marvel_ken",tags:["react","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-07-04-react-query-intro/social-2.png",hide_table_of_contents:!1},prevItem:{title:"rem vs em - Everything you need to know",permalink:"/blog/rem-vs-em"},nextItem:{title:"How to Delete Local and Remote Git Branches",permalink:"/blog/git-delete-remote-branch-and-local-branch"},relatedPosts:[{title:"Kubectl config set context Tutorial and Best Practices",description:"We'll discuss the kubectl config set-context command and how it can be used to manage contexts in Kubernetes. We'll also cover some best practices for managing contexts.",permalink:"/blog/kubectl-config-set-context",formattedDate:"October 27, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.835,date:"2023-10-27T00:00:00.000Z"},{title:"JWT Authentication - What is JSON web token?",description:"We will focus mainly on using JWTs for securing web applications.",permalink:"/blog/jwt-authentication",formattedDate:"March 11, 2024",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:13.77,date:"2024-03-11T00:00:00.000Z"},{title:"Developing Internal Tools in 2024",description:"Internal tools are specialized software applications used by a company's back-office departments.",permalink:"/blog/internal-tools",formattedDate:"March 7, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:17.38,date:"2024-03-07T00:00:00.000Z"}],authorPosts:[{title:"Next.js vs React - A Beginner's Guide",description:"We briefly run through the innovation driven differences between React and Next.js in rendering behavior, routing, data fetching, backend API development and app configuration.",permalink:"/blog/next-js-vs-react",formattedDate:"October 17, 2024",authors:[{name:"Marvel Ken",title:"Software Developer",imageURL:"/img/generic-profile.png",key:"marvel_ken"}],readingTime:24.44,date:"2024-10-17T00:00:00.000Z"},{title:"Introduction to Mantine UI",description:"Let's explore Mantine UI React Component Library.",permalink:"/blog/mantine-ui-react",formattedDate:"September 9, 2024",authors:[{name:"Marvel Ken",title:"Software Developer",imageURL:"/img/generic-profile.png",key:"marvel_ken"}],readingTime:18.305,date:"2024-09-09T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"Article Objective",id:"article-objective",level:2},{value:"Prerequisite",id:"prerequisite",level:2},{value:"What is React Query?",id:"what-is-react-query",level:2},{value:"Querying Data",id:"querying-data",level:2},{value:"Why use React Query?",id:"why-use-react-query",level:2},{value:"Performing basic data fetching",id:"performing-basic-data-fetching",level:3},{value:"Mutating Data",id:"mutating-data",level:2},{value:"React Query and Frameworks",id:"react-query-and-frameworks",level:2},{value:"Bonus: Subject: Advanced Querying Techniques using React Query",id:"bonus-subject-advanced-querying-techniques-using-react-query",level:2},{value:"React Query Pagination",id:"react-query-pagination",level:3},{value:"Infinite Scroll",id:"infinite-scroll",level:3},{value:"Dependent Queries",id:"dependent-queries",level:3},{value:"Parallel Queries",id:"parallel-queries",level:3},{value:"Background Data Synchronization",id:"background-data-synchronization",level:3},{value:"Conclusion",id:"conclusion",level:2}],d={toc:p},g="wrapper";function h(e){var{components:t}=e,n=i(e,["components"]);return(0,a.yg)(g,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"This article was last updated on November 28, 2024 to add clear introduction to React query post.")),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Tl;DR:")),(0,a.yg)("p",null,"React Query is a powerful library for fetching data and managing state in React applications. This library simplifies the interaction with APIs by providing caching, synchronization, and server state management out of the box. Some key features are as follows:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Data Caching: It will store the fetched data automatically and use it to avoid redundant API calls."),(0,a.yg)("li",{parentName:"ul"},"Error Handling: Manages errors internally for easy interaction with APIs."),(0,a.yg)("li",{parentName:"ul"},"State Management: Does not require using manually maintained state handling like useEffect.")),(0,a.yg)("p",null,"Improve performance, develop responsive designs, and provide seamless user experiences without headaches with React Query."),(0,a.yg)("p",null,"Step into the world of web development, where loading server data, handling errors, and keeping clients and servers in sync are all part of the exciting puzzle. But wait, there's more! Picture a scenario where poor internet connections add another layer of complexity. It's enough to make any developer's head spin."),(0,a.yg)("p",null,"Now, imagine a solution that takes these challenges and turns them into a breeze. ",(0,a.yg)("a",{parentName:"p",href:"https://tanstack.com/query/v3/"},"React Query")," as a solution helps in caching and server state management. Whether you're a seasoned developer or just starting your coding journey, React Query is a great option to try."),(0,a.yg)("p",null,"Steps we'll cover:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#what-is-react-query"},"What is React Query?")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#querying-data"},"Querying Data")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#why-use-react-query"},"Why use React Query?")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#mutating-data"},"Mutating Data")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#react-query-and-frameworks"},"React Query and Frameworks")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#bonus-subject-advanced-querying-techniques-using-react-query"},"Bonus: Subject: Advanced Querying Techniques using React Query"))),(0,a.yg)("h2",{id:"article-objective"},"Article Objective"),(0,a.yg)("p",null,"This beginner's guide aims to introduce you to React Query, its core concepts, and how to use it effectively in your projects. Whether you are new to React or an experienced developer looking to enhance your data fetching capabilities, this guide will provide you with a solid foundation to get started with React Query."),(0,a.yg)("h2",{id:"prerequisite"},"Prerequisite"),(0,a.yg)("p",null,"Certain requirements must be met to follow up on this article;"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Comprehension of ",(0,a.yg)("a",{parentName:"li",href:"https://www.javascript.com/"},(0,a.yg)("strong",{parentName:"a"},"JavaScript syntax"))),(0,a.yg)("li",{parentName:"ul"},"Basic knowledge of the React.js framework"),(0,a.yg)("li",{parentName:"ul"},"Understanding of ",(0,a.yg)("a",{parentName:"li",href:"https://jsonplaceholder.typicode.com/"},(0,a.yg)("strong",{parentName:"a"},"APIs"))),(0,a.yg)("li",{parentName:"ul"},"React Query and Axios Installed on your computer")),(0,a.yg)("p",null,"In the course of this article, we used ",(0,a.yg)("a",{parentName:"p",href:"https://jsonplaceholder.typicode.com/"},"Jsonplaceholder")," as our API endpoint, React Query and Axios to fetch, and handle server state data; below is a demonstration of how to install and set up React Query."),(0,a.yg)("p",null,"Navigate to a React project and run the following in your terminal:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"npm install react-query axios\n")),(0,a.yg)("p",null,"Navigate to your ",(0,a.yg)("inlineCode",{parentName:"p"},"index.js")," file and paste the code below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport ReactDOM from "react-dom";\nimport { QueryClient, QueryClientProvider } from "react-query";\n\nimport "./index.css";\nimport App from "./App";\n\nconst queryClient = new QueryClient();\n\nReactDOM.render(\n  <QueryClientProvider client={queryClient}>\n    <App />\n  </QueryClientProvider>,\n  document.getElementById("root"),\n);\n')),(0,a.yg)("p",null,"With this, your application is set to go!"),(0,a.yg)("h2",{id:"what-is-react-query"},"What is React Query?"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Hey Google, what does refine.js do?")),(0,a.yg)("p",null,"At this point, you will wonder what exactly Google has got to do with React Query. React Query's core functionality revolves around fetching and caching data from an API and handling state management, while search engines like Google allow us to query and retrieve relevant information from an extensive database. Both React Query and Google aim to optimize data retrieval and improve user experiences."),(0,a.yg)("p",null,"The analogy between Google and React Query helps us understand how React Query works. When we query Google for information, it retrieves the best available information from its database. Similarly, React Query fetches data from an API endpoint like Google fetches information from its database."),(0,a.yg)("p",null,"React Query manages the state of this fetched data, similar to how Google handles the information it retrieves. React Query caches API responses, which stores the fetched data locally to reduce the need for subsequent fetches."),(0,a.yg)("p",null,"Likewise, search engines like Google cache web pages to reduce latency when displaying search results. This caching mechanism improves performance and reduces the time to display the requested information."),(0,a.yg)("h2",{id:"querying-data"},"Querying Data"),(0,a.yg)("p",null,"This refers to the process of requesting specific information from a database or dataset using a query language. Queries are used to extract, filter, and manipulate data based on specific conditions and criteria."),(0,a.yg)("p",null,'By submitting a query, you can search for data that meets certain requirements. Now we see why there is a "Query" in "React Query" because this library is in charge of handling and making queries a breeze. Since we know what querying data means, let us perform basic data fetch with React Query.'),(0,a.yg)("h2",{id:"why-use-react-query"},"Why use React Query?"),(0,a.yg)("p",null,"The dominance of React Query over traditional state management tools like ",(0,a.yg)("inlineCode",{parentName:"p"},"useEffect")," and others is that React Query comes with built-in query caching, which means, once data is fetched, it can be stored in a cache and reused later without making redundant API calls."),(0,a.yg)("p",null,"React Query also handles the state management of queries automatically, reducing the need for developers to write and maintain complex state management logic. It provides built-in error-handling capabilities, allowing developers to handle API errors gracefully."),(0,a.yg)("p",null,"Since we now know why we should use React Query we can go further to know how to perform a basic data fetch with this library."),(0,a.yg)("h3",{id:"performing-basic-data-fetching"},"Performing basic data fetching"),(0,a.yg)("p",null,"React Query has a way of handling server states, and it does that using the ",(0,a.yg)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useQuery"},"useQuery")," hook. This ",(0,a.yg)("inlineCode",{parentName:"p"},"useQuery")," hook is used to fetch data from your API. It returns an object that contains the status of the query (loading, error, or success), the data returned from the query, and functions to refetch the data."),(0,a.yg)("p",null,"To see how this works we will be fetching a list of post titles from ",(0,a.yg)("a",{parentName:"p",href:"https://jsonplaceholder.typicode.com/"},"Jsonplaceholder")," API. Here's a basic example of how you might use React Query to fetch and manage server data:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { useQuery } from "react-query";\nimport axios from "axios";\n\nconst retrievePosts = async () => {\n  const response = await axios.get(\n    "https://jsonplaceholder.typicode.com/posts",\n  );\n  return response.data;\n};\n\nconst DisplayPosts = () => {\n  const {\n    data: posts,\n    error,\n    isLoading,\n  } = useQuery("postsData", retrievePosts);\n\n  if (isLoading) return <div>Fetching posts...</div>;\n  if (error) return <div>An error occurred: {error.message}</div>;\n\n  return (\n    <ul>\n      {posts.map((post) => (\n        <li key={post.id}>{post.title}</li>\n      ))}\n    </ul>\n  );\n};\n\nexport default DisplayPosts;\n')),(0,a.yg)("p",null,"In this example, ",(0,a.yg)("inlineCode",{parentName:"p"},"useQuery")," fetches the posts. The ",(0,a.yg)("inlineCode",{parentName:"p"},"useQuery")," hook is used to fetch data and handle loading and error states. The ",(0,a.yg)("inlineCode",{parentName:"p"},"retrievePosts")," function fetches the data using Axios. If data is loading or an error occurs, a message is displayed. Otherwise, the posts are rendered as a list."),(0,a.yg)("p",null,"We can also notice caching is handled by the ",(0,a.yg)("inlineCode",{parentName:"p"},"useQuery")," hook. When you call ",(0,a.yg)("inlineCode",{parentName:"p"},"useQuery")," and pass it a key (in this case, 'postsData') and a fetch function (",(0,a.yg)("inlineCode",{parentName:"p"},"retrievePosts"),"), React Query performs the fetch and then stores the result in a cache."),(0,a.yg)("p",null,"The key you provide ('postsData') is used as the identifier for this cache. If ",(0,a.yg)("inlineCode",{parentName:"p"},"useQuery")," is called again with the same key while the data is still in the cache, React Query will return the cached data instead of performing a new fetch."),(0,a.yg)("p",null,"When you run this on your browser you will get the list of post titles displayed."),(0,a.yg)("h2",{id:"mutating-data"},"Mutating Data"),(0,a.yg)("p",null,"Mutating data simply means we are changing something in the database, we could be posting, creating, or deleting something, whatever we choose to do we are still mutating."),(0,a.yg)("p",null,"This is what makes React Query a beautiful tool as it can be used to perform CRUD( Create, Read, Update, and Delete) operations. While the ",(0,a.yg)("inlineCode",{parentName:"p"},"useQuery"),' hook is used for "read" operations (fetching data), React Query provides the ',(0,a.yg)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useMutation"},"useMutation"),' hook for "write" operations (creating, updating, and deleting data).'),(0,a.yg)("p",null,"Using the ",(0,a.yg)("inlineCode",{parentName:"p"},"useMutation")," hook for CRUD operation we need to note that the Json placeholder API doesn't actually store the created, updated, or deleted data. But to be sure the operation were made, it will either return a success statement or an error statement."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Create"),"\nTo Create a post using ",(0,a.yg)("inlineCode",{parentName:"p"},"useMutation"),". Create a component and name it ",(0,a.yg)("inlineCode",{parentName:"p"},"CreatePost()")," then you can paste the code below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState } from "react";\nimport { useMutation } from "react-query";\nimport axios from "axios";\n\nconst CreatePost = () => {\n  const [title, setTitle] = useState("");\n  const [body, setBody] = useState("");\n\n  const mutation = useMutation((newPost) =>\n    axios.post("https://jsonplaceholder.typicode.com/posts", newPost),\n  );\n\n  const submitData = () => {\n    mutation.mutate({ title, body });\n  };\n\n  if (mutation.isLoading) {\n    return <span>Submitting...</span>;\n  }\n\n  if (mutation.isError) {\n    return <span>Error: {mutation.error.message}</span>;\n  }\n\n  if (mutation.isSuccess) {\n    return <span>Post submitted!</span>;\n  }\n\n  return (\n    <div>\n      <input\n        type="text"\n        value={title}\n        onChange={(e) => setTitle(e.target.value)}\n        placeholder="Title"\n      />\n      <input\n        type="text"\n        value={body}\n        onChange={(e) => setBody(e.target.value)}\n        placeholder="Body"\n      />\n      <button onClick={submitData}>Submit</button>\n    </div>\n  );\n};\nexport default CreatePost;\n')),(0,a.yg)("p",null,"In the code above, ",(0,a.yg)("inlineCode",{parentName:"p"},"useMutation")," is used to post new data to the Json Placeholder API. The function passed to ",(0,a.yg)("inlineCode",{parentName:"p"},"useMutation")," is the mutation function. When ",(0,a.yg)("inlineCode",{parentName:"p"},"mutation.mutate")," is called with the new post data, the mutation is performed."),(0,a.yg)("p",null,"This is what it looks like in a Chrome browser:"),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-07-04-react-query-intro/chrome-browser.png",alt:"react query"})),(0,a.yg)("br",null),(0,a.yg)("p",null,"After feeling the options, click submit and wait for the response:"),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-07-04-react-query-intro/click-submit.png",alt:"react query"})),(0,a.yg)("br",null),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Response"),":"),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-07-04-react-query-intro/response.png",alt:"react query"})),(0,a.yg)("br",null),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Update"),"\nWe can go further to update posts. To do that, create a component named ",(0,a.yg)("inlineCode",{parentName:"p"},"UpdatePost()"),", then paste the code below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState } from "react";\nimport { useMutation } from "react-query";\nimport axios from "axios";\n\nconst UpdatePost = () => {\n  const [title, setTitle] = useState("");\n  const [body, setBody] = useState("");\n\n  const mutation = useMutation((updatedPost) =>\n    axios.put("https://jsonplaceholder.typicode.com/posts/1", updatedPost),\n  );\n\n  const submitData = () => {\n    mutation.mutate({ title, body });\n  };\n\n  if (mutation.isLoading) {\n    return <span>Updating...</span>;\n  }\n\n  if (mutation.isError) {\n    return <span>Error: {mutation.error.message}</span>;\n  }\n\n  if (mutation.isSuccess) {\n    return <span>Post updated!</span>;\n  }\n\n  return (\n    <div>\n      <input\n        type="text"\n        value={title}\n        onChange={(e) => setTitle(e.target.value)}\n        placeholder="Title"\n      />\n      <input\n        type="text"\n        value={body}\n        onChange={(e) => setBody(e.target.value)}\n        placeholder="Body"\n      />\n      <button onClick={submitData}>Update</button>\n    </div>\n  );\n};\n\nexport default UpdatePost;\n')),(0,a.yg)("p",null,"In this code, We changed the ",(0,a.yg)("inlineCode",{parentName:"p"},"axios.post")," call in the ",(0,a.yg)("inlineCode",{parentName:"p"},"useMutation")," hook to ",(0,a.yg)("inlineCode",{parentName:"p"},"axios.put")," to make a PUT request instead of a POST request."),(0,a.yg)("p",null,'We have also changed the URL to include the ID of the post to update ("',(0,a.yg)("a",{parentName:"p",href:"https://jsonplaceholder.typicode.com/posts/1%22"},'https://jsonplaceholder.typicode.com/posts/1"'),"). The rest of the code stays the same, and with this, we were able to update a post."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Delete"),"\nTo be able to delete an already created post, a component named ",(0,a.yg)("inlineCode",{parentName:"p"},"DeletePost()")," needs to be created. Fill free to copy the code below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { useMutation } from "react-query";\nimport axios from "axios";\n\nconst DeletePost = () => {\n  const mutation = useMutation(() =>\n    axios.delete("https://jsonplaceholder.typicode.com/posts/1"),\n  );\n\n  const deleteData = () => {\n    mutation.mutate();\n  };\n\n  if (mutation.isLoading) {\n    return <span>Deleting...</span>;\n  }\n\n  if (mutation.isError) {\n    return <span>Error: {mutation.error.message}</span>;\n  }\n\n  if (mutation.isSuccess) {\n    return <span>Post deleted!</span>;\n  }\n\n  return (\n    <div>\n      <button onClick={deleteData}>Delete Post</button>\n    </div>\n  );\n};\n\nexport default DeletePost;\n')),(0,a.yg)("p",null,"In order to delete a post we changed the ",(0,a.yg)("inlineCode",{parentName:"p"},"axios.post")," call in the ",(0,a.yg)("inlineCode",{parentName:"p"},"useMutation")," hook to ",(0,a.yg)("inlineCode",{parentName:"p"},"axios.delete")," to make a DELETE request instead of a POST request."),(0,a.yg)("p",null,'We also changed the URL to include the ID of the post to delete ("',(0,a.yg)("a",{parentName:"p",href:"https://jsonplaceholder.typicode.com/posts/1%22"},'https://jsonplaceholder.typicode.com/posts/1"'),")."),(0,a.yg)("p",null,"Following the steps above illustrates how best to use the ",(0,a.yg)("inlineCode",{parentName:"p"},"useMutation")," hook and we can agree it makes the job much easier."),(0,a.yg)("h2",{id:"react-query-and-frameworks"},"React Query and Frameworks"),(0,a.yg)("p",null,"React-based framework like ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},"Refine")," has extended versions of the hooks provided by React Query. Refine extends the functionality of React Query's hooks, adding extra features and customization options to better suit data-intensive applications. These hooks include ",(0,a.yg)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/hooks/data/useUpdate/"},"useUpdate")," and ",(0,a.yg)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/hooks/data/useList/"},"useList"),"."),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"useUpdate")," hook in Refine is an extended version of the ",(0,a.yg)("inlineCode",{parentName:"p"},"useMutation")," hook from React Query. This hook is used when you want to update a record. It uses the ",(0,a.yg)("inlineCode",{parentName:"p"},"update")," method as the mutation function from the ",(0,a.yg)("inlineCode",{parentName:"p"},"dataProvider")," that is passed to ",(0,a.yg)("strong",{parentName:"p"},"Refine"),"."),(0,a.yg)("p",null,"On the other hand, the ",(0,a.yg)("inlineCode",{parentName:"p"},"useList")," hook in Refine is an extended version of the ",(0,a.yg)("inlineCode",{parentName:"p"},"useQuery")," hook from React Query. It is used when you need to fetch data according to sort, filter, pagination, etc., from a ",(0,a.yg)("inlineCode",{parentName:"p"},"resource"),"."),(0,a.yg)("p",null,"If you are in search of a framework that utilizes the power React query has got, Refine is an absolutely great choice as it solves issues concerning data querying and server state management complexity."),(0,a.yg)("h2",{id:"bonus-subject-advanced-querying-techniques-using-react-query"},"Bonus: Subject: Advanced Querying Techniques using React Query"),(0,a.yg)("p",null,"Let's walk through some advanced querying techniques with React Query that can help us manage more complex data-fetching scenarios in our apps. These will allow us to handle cases such as pagination, infinite scrolling, and dependent queries more efficiently."),(0,a.yg)("h3",{id:"react-query-pagination"},"React Query Pagination"),(0,a.yg)("p",null,"Pagination is a fundamental necessity for huge datasets. Paginating with React Query is very easy. We can query many pages of data from our server in the following way: we are passing in a query key while creating the query with the page number, meaning each page will be cached independently by React Query, and it will only be fetched when another request with a new page number comes for the data that is wanted."),(0,a.yg)("p",null,"We can define the option ",(0,a.yg)("inlineCode",{parentName:"p"},"keepPreviousData"),", which keeps the page's previous data while loading the new one."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const fetchPosts = async (page = 1) => {\n  const response = await axios.get(`/api/posts?page=${page}`);\n  return response.data;\n};\n\nconst { data, isLoading, isError } = useQuery(\n  ["posts", page],\n  () => fetchPosts(page),\n  {\n    keepPreviousData: true,\n  },\n);\n')),(0,a.yg)("h3",{id:"infinite-scroll"},"Infinite Scroll"),(0,a.yg)("p",null,"By default, the infinite scrolling feature fetches more data as a user scrolls toward the end of the page. It works really well for social media feeds or item lists. Implementing the same in React Query by using the ",(0,a.yg)("inlineCode",{parentName:"p"},"useInfiniteQuery")," hook is rather simple. Our call with ",(0,a.yg)("inlineCode",{parentName:"p"},"useInfiniteQuery")," will be to fetch and append additional pages of data each time the user scrolls. This initializes our call, which will determine when to fire another fetch, in order to load more information onto those infinite pages."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const fetchPosts = async ({ pageParam = 1 }) => {\n  const response = await axios.get(`/api/posts?page=${pageParam}`);\n  return response.data;\n};\n\nconst { data, fetchNextPage, hasNextPage } = useInfiniteQuery(\n  "posts",\n  fetchPosts,\n  {\n    getNextPageParam: (lastPage, allPages) => lastPage.nextPage ?? false,\n  },\n);\n\nuseEffect(() => {\n  if (hasNextPage) {\n    fetchNextPage();\n  }\n}, [fetchNextPage, hasNextPage]);\n')),(0,a.yg)("h3",{id:"dependent-queries"},"Dependent Queries"),(0,a.yg)("p",null,"Queries become dependent when one query should be run based on data being fetched from another. React Query empowers us to do the same with the help of the ",(0,a.yg)("inlineCode",{parentName:"p"},"enabled")," configuration field. Now we can conditionally run our queries based on the results of others."),(0,a.yg)("p",null,"For instance, first fetching a user's detail before retrieving posts belonging to this user will have a query dependent upon the other one. This will make it fetch in the right order."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const { data: user, isLoading: isUserLoading } = useQuery("user", fetchUser);\n\nconst { data: posts, isLoading: isPostsLoading } = useQuery(\n  ["posts", user?.id],\n  () => fetchPosts(user.id),\n  {\n    enabled: !!user?.id,\n  },\n);\n')),(0,a.yg)("h3",{id:"parallel-queries"},"Parallel Queries"),(0,a.yg)("p",null,"Sometimes we need to run multiple queries at the same time, even if they are not dependent on each other. It makes the process of performing parallel queries really simple, with little configuration being utilized when needing to do this with React Query. This allows us to run multiple queries at the same time for different sets of data, managing their loading and error states individually."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const { data: posts, isLoading: isPostsLoading } = useQuery(\n  "posts",\n  fetchPosts,\n);\nconst { data: comments, isLoading: isCommentsLoading } = useQuery(\n  "comments",\n  fetchComments,\n);\n')),(0,a.yg)("h3",{id:"background-data-synchronization"},"Background Data Synchronization"),(0,a.yg)("p",null,"React Query enables us to do all the automatic behind-the-scenes refetching of data and then update the UI\u2014so the user is never without the information, knowing that it's not in real time. In such a case, we could do things like small tweaks around the implementation with ",(0,a.yg)("inlineCode",{parentName:"p"},"refetchOnWindowFocus")," so our data remains fresh whenever a user focuses back into our window. This becomes very helpful for any applications for which there is key functionality needed for data consistency."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const { data, isLoading } = useQuery("posts", fetchPosts, {\n  refetchOnWindowFocus: true,\n});\n')),(0,a.yg)("h2",{id:"conclusion"},"Conclusion"),(0,a.yg)("p",null,"In this beginner's guide, we explored the world of React Query and its core concepts. We learned that React Query is a powerful tool for handling data fetching, caching, and state management in React applications."),(0,a.yg)("p",null,"Frameworks like Refine extend the capabilities of React Query, offering a comprehensive solution for data-intensive applications. By leveraging React Query, developers can enhance the efficiency and user experience of their React projects. Thank you for reading!"))}h.isMDXComponent=!0}}]);