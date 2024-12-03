"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[28093],{58860:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>g});var a=t(37953);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=o,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return t?a.createElement(g,i(i({ref:n},p),{},{components:t})):a.createElement(g,i({ref:n},p))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},69318:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>c,toc:()=>m});t(37953);var a=t(58860);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={title:"React Design Patterns",description:"We'll explore React design patterns and examine how they might improve the development of React applications.",slug:"react-design-patterns",authors:"peter_osah",tags:["dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-17-react-patterns/social-2.png",hide_table_of_contents:!1},l=void 0,c={permalink:"/blog/react-design-patterns",source:"@site/blog/2024-09-05-react-patterns.md",title:"React Design Patterns",description:"We'll explore React design patterns and examine how they might improve the development of React applications.",date:"2024-09-05T00:00:00.000Z",formattedDate:"September 5, 2024",tags:[{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:13.895,hasTruncateMarker:!1,authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],frontMatter:{title:"React Design Patterns",description:"We'll explore React design patterns and examine how they might improve the development of React applications.",slug:"react-design-patterns",authors:"peter_osah",tags:["dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-17-react-patterns/social-2.png",hide_table_of_contents:!1},prevItem:{title:"How to Use JavaScript Array Splice",permalink:"/blog/javascript-splice-method"},nextItem:{title:"Mojo - A New Programming Language for AI",permalink:"/blog/mojo-programming-language"},relatedPosts:[{title:"Kubectl config set context Tutorial and Best Practices",description:"We'll discuss the kubectl config set-context command and how it can be used to manage contexts in Kubernetes. We'll also cover some best practices for managing contexts.",permalink:"/blog/kubectl-config-set-context",formattedDate:"October 27, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.835,date:"2023-10-27T00:00:00.000Z"},{title:"An Introduction to Using FastAPI",description:"We'll be looking at FastAPI, a modern Python microframework that simplifies the creation of web APIs using Python programming.",permalink:"/blog/introduction-to-fast-api",formattedDate:"August 8, 2023",authors:[{name:"Obisike Treasure",title:"Software Developer",imageURL:"https://github.com/Otrex.png",key:"obisike_treause"}],readingTime:15.505,date:"2023-08-08T00:00:00.000Z"},{title:"How to Use Nodemon to Automatically Restart Node.js Applications",description:"This guide shows you how to install and use Nodemon to streamline your development process.",permalink:"/blog/nodemon",formattedDate:"November 8, 2024",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:10.62,date:"2024-11-08T00:00:00.000Z"}],authorPosts:[{title:"Framer Motion React Animations",description:"We'll walk you through the features and functionalities of Framer Motion.",permalink:"/blog/framer-motion",formattedDate:"June 20, 2024",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:15.475,date:"2024-06-20T00:00:00.000Z"},{title:"React Admin Panel Tutorial with Chakra UI and Strapi",description:"We'll build a React admin tutorial app with Refine",permalink:"/blog/react-admin-tutorial",formattedDate:"March 3, 2023",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:27.285,date:"2023-03-03T00:00:00.000Z"},{title:"Building a Complete React CRUD App with Airtable",description:"We will be building a Complete React CRUD application using Refine and Airtable, a famous backend service to illustrate how you can power your applications with refine.",permalink:"/blog/react-crud-app-airtable",formattedDate:"January 17, 2023",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:29.64,date:"2023-01-17T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},m=[{value:"Introduction",id:"introduction",level:2},{value:"Container and presentation patterns",id:"container-and-presentation-patterns",level:2},{value:"Component composition with Hooks",id:"component-composition-with-hooks",level:2},{value:"State management with Reducers",id:"state-management-with-reducers",level:2},{value:"Data management with Providers",id:"data-management-with-providers",level:2},{value:"Component enhancement with HOCs (higher-order components)",id:"component-enhancement-with-hocs-higher-order-components",level:2},{value:"Compound Components",id:"compound-components",level:2},{value:"Prop combination",id:"prop-combination",level:2},{value:"Controlled inputs",id:"controlled-inputs",level:2},{value:"Error Boundaries Pattern in React",id:"error-boundaries-pattern-in-react",level:2},{value:"Manage custom components with forwardRefs",id:"manage-custom-components-with-forwardrefs",level:2},{value:"Lazy Loading Components in React",id:"lazy-loading-components-in-react",level:2},{value:"Bonus: Memoization Patterns in React",id:"bonus-memoization-patterns-in-react",level:2}],u=(d="AvatarComponent",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.yg)("div",e)});var d;const g={toc:m},h="wrapper";function y(e){var{components:n}=e,t=i(e,["components"]);return(0,a.yg)(h,r(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){o(e,n,t[n])}))}return e}({},g,t),{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"This article was last updated on September 05, 2024, to add sections on Error Boundaries Pattern, Lazy Loading Components, and Memoization Patterns (Memo, useMemo, useCallback).")),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"React developers can save time and effort by using design patterns, which provide a quick approach to addressing problems using tested-and-trusted solutions. They enable cohesive modules with lower coupling, which in turn helps React developers create maintainable, scalable, and efficient applications. In this article, we will explore React design patterns and examine how they might improve the development of React applications."),(0,a.yg)("p",null,"Steps we'll cover"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#container-and-presentation-patterns"},"Container and presentation patterns")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#component-composition-with-hooks"},"Component composition with Hooks")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#state-management-with-reducers"},"State management with Reducers")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#data-management-with-providers"},"Data management with Providers")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#component-enhancement-with-hocs-higher-order-components"},"Component enhancement with HOCs (higher-order components)")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#compound-components"},"Compound Components")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#prop-combination"},"Prop combination")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#lazy-loading-components-in-react"},"Lazy Loading Components in React")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#controlled-inputs"},"Controlled inputs")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#error-boundaries-pattern-in-react"},"Error Boundaries Pattern in React")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#manage-custom-components-with-fowardrefs"},"Manage custom components with forwardRefs"))),(0,a.yg)("h2",{id:"container-and-presentation-patterns"},"Container and presentation patterns"),(0,a.yg)("p",null,"The Container and presentation pattern is a pattern that aims to separate the presentation logic from the business logic in a react code, thereby making it modular, testable, and one that follows the separations of concern principle.\nMostly in react applications, there arise cases where we are required to fetch data from a backend/store or to compute a logic and represent the resultant of that computation on a react component. In these cases, the container and presentation pattern shines as it can be used to categorize the components into two namely:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The container component, which acts as the component responsible for the data fetching or computation."),(0,a.yg)("li",{parentName:"ul"},"the presentation component, whose job is to render the fetched data or computed value on the UI(user interface).")),(0,a.yg)("p",null,"An example of Container and presentation pattern is shown below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import React, { useEffect } from "react";\nimport CharacterList from "./CharacterList";\n\nconst StarWarsCharactersContainer: React.FC = () => {\n  const [characters, setCharacters] = useState<Character>([]);\n  const [isLoading, setIsLoading] = useState<boolean>(false);\n  const [error, setError] = useState<boolean>(false);\n\n  const getCharacters = async () => {\n    setIsLoading(true);\n    try {\n      const response = await fetch(\n        "https://akabab.github.io/starwars-api/api/all.json",\n      );\n      const data = await response.json();\n      setIsLoading(false);\n      if (!data) return;\n      setCharacters(data);\n    } catch (err) {\n      setError(true);\n    } finally {\n      setIsLoading(true);\n    }\n  };\n\n  useEffect(() => {\n    getCharacters();\n  }, []);\n\n  return (\n    <CharacterList loading={loading} error={error} characters={characters} />\n  );\n};\n\nexport default StarWarsCharactersContainer;\n')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'// the component is responsible for displaying the characters\n\nimport React from "react";\nimport { Character } from "./types";\n\ninterface CharacterListProps {\n  loading: boolean;\n  error: boolean;\n  users: Character[];\n}\n\nconst CharacterList: React.FC<CharacterListProps> = ({\n  loading,\n  error,\n  characters,\n}) => {\n  if (loading && !error) return <div>Loading...</div>;\n  if (!loading && error)\n    return <div>error occurred.unable to load characters</div>;\n  if (!characters) return null;\n\n  return (\n    <ul>\n      {characters.map((user) => (\n        <li key={user.id}>{user.name}</li>\n      ))}\n    </ul>\n  );\n};\n\nexport default CharacterList;\n')),(0,a.yg)("h2",{id:"component-composition-with-hooks"},"Component composition with Hooks"),(0,a.yg)("p",null,"Hooks are a brand-new feature that debuted in React 16.8. Since then, they have played a crucial role in developing react applications. Hooks are basic functions that grant functional components access to state and lifecycle methods (which were previously exclusively available to class components). Hooks, on the other hand, can be specifically designed to meet a component requirement and have additional use cases."),(0,a.yg)("p",null,"We can now isolate all stateful logic\u2014a type of logic that needs reactive state variable(s)\u2014and compose or use it in the components using custom hooks. As a result, the code is more modularized and testable because the hooks are loosely tied to the component and can therefore be tested separately."),(0,a.yg)("p",null,"An example of component composition with hooks is shown below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'// creating a custom hook that fetches star wars characters\n\nexport const useFetchStarWarsCharacters = () => {\n  const [characters, setCharacters] = useState<Character>([]);\n  const [isLoading, setIsLoading] = useState(false);\n  const [error, setError] = useState(false);\n  const controller = new AbortController();\n\n  const getCharacters = async () => {\n    setIsLoading(true);\n    try {\n      const response = await fetch(\n        "https://akabab.github.io/starwars-api/api/all.json",\n        {\n          method: "GET",\n          credentials: "include",\n          mode: "cors",\n          headers: {\n            "Content-Type": "application/json",\n            "Access-Control-Allow-Origin": "*",\n          },\n          signal: controller.signal,\n        },\n      );\n      const data = await response.json();\n      setIsLoading(false);\n      if (!data) return;\n      setCharacters(data);\n    } catch (err) {\n      setError(true);\n    } finally {\n      setIsLoading(true);\n    }\n  };\n\n  useEffect(() => {\n    getCharacters();\n    return () => {\n      controller.abort();\n    };\n  }, []);\n\n  return [characters, isLoading, error];\n};\n')),(0,a.yg)("p",null,"After creating the custom hook, we will import it into our ",(0,a.yg)("strong",{parentName:"p"},"StarWarsCharactersContainer")," component and use it;"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'// importing the custom hook to a component and fetch the characters\n\nimport React from "react";\nimport { Character } from "./types";\nimport { useFetchStarWarsCharacters } from "./useFetchStarWarsCharacters";\n\nconst StarWarsCharactersContainer: React.FC = () => {\n  const [characters, isLoading, error] = useFetchStarWarsCharacters();\n\n  return (\n    <CharacterList loading={loading} error={error} characters={characters} />\n  );\n};\n\nexport default StarWarsCharactersContainer;\n')),(0,a.yg)("h2",{id:"state-management-with-reducers"},"State management with Reducers"),(0,a.yg)("p",null,"Most often, handling many states in a component leads to issues with many ungrouped states, which can be burdensome and challenging to handle. The reducer pattern can be a helpful option in this situation. We can categorize states using reducers into certain actions that, when executed, can change the grouped states."),(0,a.yg)("p",null,"This pattern allows the developer who uses it to control the component's and/or hook's state management, letting them manage state changes when events are sent."),(0,a.yg)("p",null,"An example of using the reducer pattern is shown below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import React, { useReducer } from "react";\n\nconst initState = {\n  loggedIn: false,\n  user: null,\n  token: null,\n};\n\nfunction authReducer(state, action) {\n  switch (action.type) {\n    case "login":\n      return {\n        loggedIn: true,\n        user: action.payload.user,\n        token: action.payload.token,\n      };\n    case "logout":\n      return initState;\n    default:\n      break;\n  }\n}\n\nconst AuthComponent = () => {\n  const [state, dispatch] = useReducer(authReducer, initState);\n\n  const logIn = () => {\n    dispatch({\n      type: "login",\n      payload: {\n        user: { name: "John Doe" },\n        token: "token",\n      },\n    });\n  };\n\n  const logOut = () => {\n    dispatch({ type: "logout" });\n  };\n\n  return (\n    <div>\n      {state.loggedIn ? (\n        <div>\n          <p> Welcome {state.user.name} </p>\n          <button onClick={logOut}></button>\n        </div>\n      ) : (\n        <form onSubmit={logIn}>\n          <input type="text" />\n          <input type="password" />\n          <button type="submit"></button>\n        </form>\n      )}\n    </div>\n  );\n};\n')),(0,a.yg)("p",null,"In the above code, the component dispatches two actions:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The '",(0,a.yg)("strong",{parentName:"li"},"login"),"' action type triggers a state change that affects three state values namely ",(0,a.yg)("strong",{parentName:"li"},"loggedIn"),", ",(0,a.yg)("strong",{parentName:"li"},"user"),", ",(0,a.yg)("strong",{parentName:"li"},"token"),"."),(0,a.yg)("li",{parentName:"ul"},"The '",(0,a.yg)("strong",{parentName:"li"},"logout"),"' action simply resets the state to its initial value.")),(0,a.yg)("h2",{id:"data-management-with-providers"},"Data management with Providers"),(0,a.yg)("p",null,"The provider pattern is very useful for data management as it utilizes the context API to pass data through the application's component tree. This pattern is an effective solution to prop drilling, which has been a common concern in react development."),(0,a.yg)("p",null,"To implement the provider pattern, we will first create a Provider Component. A Provider is a higher-order component that the Context object provides to us. We can construct a Context object by utilizing the createContext method provided by React."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'export const ThemeContext = React.createContext(null);\n\nexport function ThemeProvider({ children }) {\n  const [theme, setTheme] = React.useState("light");\n\n  return (\n    <ThemeContext.Provider value={{ theme, setTheme }}>\n      {children}\n    </ThemeContext.Provider>\n  );\n}\n')),(0,a.yg)("p",null,"After creating the provider, we will enclose components dependent on the data from context API with the created Provider Component."),(0,a.yg)("p",null,"To obtain the data from context API, we call useContext hook, which accepts a context as a parameter(in this case, ",(0,a.yg)("strong",{parentName:"p"},"ThemeContext"),")."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useContext } from "react";\nimport { ThemeProvider, ThemeContext } from "../context";\n\nconst HeaderSection = () => {\n  <ThemeProvider>\n    <TopNav />\n  </ThemeProvider>;\n};\n\nconst TopNav = () => {\n  const { theme, setTheme } = useContext(ThemeContext);\n\n  return (\n    <div style={{ backgroundColor: theme === "light" ? "#fff" : "#000 " }}>\n      ...\n    </div>\n  );\n};\n')),(0,a.yg)("h2",{id:"component-enhancement-with-hocs-higher-order-components"},"Component enhancement with HOCs (higher-order components)"),(0,a.yg)("p",null,"A higher-order component takes in a component as an argument and returns a supercharged component injected with additional data or functionality. The possibility of HOCs in React is due to React preference of composition over inheritance."),(0,a.yg)("p",null,"The Higher-Order Component (HOC) pattern offers a mechanism to increase or modify a component's functionality, facilitating component reuse and code sharing."),(0,a.yg)("p",null,"An example of the HOC pattern is shown below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import React from \'react\'\n\nconst higherOrderComponent = Component => {\n  return class HOC extends React.Component {\n    state = {\n      name: \'John Doe\'\n    }\n\n    render() {\n      return <Component name={this.state.name {...this.props} />\n    }\n }\n\n\nconst AvatarComponent = (props) => {\n  return (\n    <div class="flex items-center justify-between">\n      <div class="rounded-full bg-red p-4">\n          {props.name}\n      </div>\n      <div>\n          <p>I am a {props.description}.</p>\n      </div>\n    </div>\n  )\n}\n\n\nconst SampleHOC = higherOrderComponent(AvatarComponent);\n\n\nconst App = () => {\n  return (\n    <div>\n      <SampleHOC description="Frontend Engineer" />\n    </div>\n  )\n}\n\nexport default App;\n')),(0,a.yg)("p",null,"In the code above, the ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)(u,{mdxType:"AvatarComponent"}))," is supplied props by the ",(0,a.yg)("strong",{parentName:"p"},"higherOrderComponent"),", which it will utilize internally."),(0,a.yg)("h2",{id:"compound-components"},"Compound Components"),(0,a.yg)("p",null,"The Compound Components Pattern is a React design pattern for managing parent components that are made up of child components."),(0,a.yg)("p",null,"The principle behind this pattern is to break down the parent component into smaller components and then manage the interactions between these smaller components with either props, context or other react data management techniques."),(0,a.yg)("p",null,"This pattern comes in handy when there is a need to create reusable, versatile components made up of smaller components. It enables developers to create sophisticated UI components that can be readily customized and extended while maintaining a clear and simple code structure."),(0,a.yg)("p",null,"An example of a use case of the compound components pattern is shown below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import React, { createContext, useState } from "react";\n\nconst ToggleContext = createContext();\n\nfunction Toggle({ children }) {\n  const [on, setOn] = useState(false);\n  const toggle = () => setOn(!on);\n\n  return (\n    <ToggleContext.Provider value={{ on, toggle }}>\n      {children}\n    </ToggleContext.Provider>\n  );\n}\n\nToggle.On = function ToggleOn({ children }) {\n  const { on } = useContext(ToggleContext);\n  return on ? children : null;\n};\n\nToggle.Off = function ToggleOff({ children }) {\n  const { on } = useContext(ToggleContext);\n  return on ? null : children;\n};\n\nToggle.Button = function ToggleButton(props) {\n  const { on, toggle } = useContext(ToggleContext);\n  return <button onClick={toggle} {...props} />;\n};\n\nfunction App() {\n  return (\n    <Toggle>\n      <Toggle.On>The button is on</Toggle.On>\n      <Toggle.Off>The button is off</Toggle.Off>\n      <Toggle.Button>Toggle</Toggle.Button>\n    </Toggle>\n  );\n}\n')),(0,a.yg)("h2",{id:"prop-combination"},"Prop combination"),(0,a.yg)("p",null,"This entails creating a single object out of several related props and passing it as a single prop to the component."),(0,a.yg)("p",null,"This pattern allows us to clean up our code and make it simpler to manage the props, making it especially helpful when we want to pass a lot of related properties to a component."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\n\nfunction P(props) {\n  const { color, size, children, ...rest } = props;\n  return (\n    <p style={{ color, fontSize: size }} {...rest}>\n      {children}\n    </p>\n  );\n}\n\nfunction App() {\n  const paragraphProps = {\n    color: "red",\n    size: "20px",\n    lineHeight: "22px",\n  };\n  return <P {...paragraphProps}>This is a P</P>;\n}\n')),(0,a.yg)("h2",{id:"controlled-inputs"},"Controlled inputs"),(0,a.yg)("p",null,"The Controlled Input pattern can be used to handle input fields. This pattern involves using an event handler to update the component state if the value of an input field changes, as well as storing the current value of the input field in the component state."),(0,a.yg)("p",null,"Because React controls the state and behavior of the component, this pattern makes code more predictable and readable than the uncontrolled inputs pattern, which does not use the component's state and instead controls it directly through the DOM (Document object model)."),(0,a.yg)("p",null,"An example of a use case of a controlled inputs pattern is shown below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState } from "react";\n\nfunction ControlledInput() {\n  const [inputValue, setInputValue] = useState("");\n\n  const handleChange = (event) => {\n    setInputValue(event.target.value);\n  };\n\n  return <input type="text" value={inputValue} onChange={handleChange} />;\n}\n')),(0,a.yg)("h2",{id:"error-boundaries-pattern-in-react"},"Error Boundaries Pattern in React"),(0,a.yg)("p",null,"I would like to introduce you to this note on the ",(0,a.yg)("strong",{parentName:"p"},"Error Boundaries Pattern")," in React; it's really crucial to help errors in our apps become gentle."),(0,a.yg)("p",null,"An error in React means if a component crashes, it can break the whole UI. This doesn't bode well for a good user experience. Error boundaries help us trap these JavaScript errors anywhere in the tree of a component and show a fallback UI without breaking the whole app."),(0,a.yg)("p",null,"We can create an error boundary using a class component, and define lifecycle methods ",(0,a.yg)("inlineCode",{parentName:"p"},"componentDidCatch")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"getDerivedStateFromError"),". Here's a small simple example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"class ErrorBoundary extends React.Component {\n  constructor(props) {\n    super(props;\n    this.state = { hasError: false };\n  }\n\n  static getDerivedStateFromError {\n    return { hasError: true };\n  }\n\n  componentDidCatch(error, errorInfo) {\n    console.log(error, errorInfo);\n  }\n\n  render() {\n    if (this.state.hasError) {\n      return <h1>Something went wrong</h1>;\n    }\n    return this.props.children;\n  }\n}\n")),(0,a.yg)("p",null,"We can wrap any component with ",(0,a.yg)("inlineCode",{parentName:"p"},"ErrorBoundary"),", and if it crashes, users will see a fallback message instead of a broken app. This pattern is awesome for catching problems and informing the user in a friendly manner, rather than just letting the app crash."),(0,a.yg)("h2",{id:"manage-custom-components-with-forwardrefs"},"Manage custom components with forwardRefs"),(0,a.yg)("p",null,"A higher-order component called a ForwardRef takes another component as input and outputs a new component that passes the original component's ref. By doing this, the child component's ref, which can be used to retrieve the underlying DOM node or component instance, is made accessible to the parent component."),(0,a.yg)("p",null,"When creating a custom component that interacts with a third-party library or another custom component within your application, it is highly helpful to include the ForwardRef pattern in your workflow. By granting access to the library's DOM node or another component's DOM instance, it helps transfer control of such components to you."),(0,a.yg)("p",null,"An example of a use case of the forwardRef pattern is shown below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\n\nconst CustomInput = React.forwardRef((props, ref) => (\n  <input type="text" {...props} ref={ref} />\n));\n\nconst ParentComponent = () => {\n  const inputRef = useRef(null);\n\n  useEffect(() => {\n    inputRef.current.focus();\n  }, []);\n\n  return <CustomInput ref={inputRef} />;\n};\n')),(0,a.yg)("p",null,"In the code above, we triggered the focus of another component ",(0,a.yg)("inlineCode",{parentName:"p"},"<CustomInput/>")," from our component ",(0,a.yg)("inlineCode",{parentName:"p"},"<ParentComponent/>")," using ",(0,a.yg)("inlineCode",{parentName:"p"},"forwardRefs"),"."),(0,a.yg)("h2",{id:"lazy-loading-components-in-react"},"Lazy Loading Components in React"),(0,a.yg)("p",null,"Lazy loading components in React feels to me like a very nice pattern for better performance in our applications, especially when dealing with huge components or routes."),(0,a.yg)("p",null,"The alternative is eager loading, which will load the needed components in advance. That means lazy loading reduces initial loading time and improves the user experience in general."),(0,a.yg)("p",null,"In React, the process of lazy loading is implemented using ",(0,a.yg)("inlineCode",{parentName:"p"},"React.lazy()")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"Suspense"),". Here's an example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import React, { Suspense } from "react";\n\nconst MyComponent = React.lazy(() => import("./MyComponent"));\n\nfunction App() {\n  return (\n    <div>\n      <Suspense fallback={<div>Loading...</div>}>\n        <MyComponent />\n      </Suspense>\n    </div>\n  );\n}\n')),(0,a.yg)("p",null,"In this example, ",(0,a.yg)("inlineCode",{parentName:"p"},"MyComponent")," will only be fetched once it's rendered, and meanwhile, the user sees a fallback like \"Loading\u2026\". This pattern is especially useful for components that are not immediately visible on the page (e.g., in routes or modals). It's a simple yet potent way for more app optimization, especially for those projects that are more involved."),(0,a.yg)("h2",{id:"bonus-memoization-patterns-in-react"},"Bonus: Memoization Patterns in React"),(0,a.yg)("p",null,"I'd like to share some quick insights on memoization patterns in React: ",(0,a.yg)("inlineCode",{parentName:"p"},"React.memo"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"useMemo"),", and ",(0,a.yg)("inlineCode",{parentName:"p"},"useCallback"),". These are great tools for optimization, avoiding unnecessary re-renders that can be quite a performance cost."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"React.memo")),": This is a higher-order component that wraps around functional components and forbids them from re-rendering unless their props change. It can come in really handy while working with components that require a re-render based on some particular props update."),(0,a.yg)("p",{parentName:"li"},"Example:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const MyComponent = React.memo(({ count }) => {\n  console.log("Component rendered");\n  return <div>{count}</div>;\n});\n')),(0,a.yg)("p",{parentName:"li"},"Now ",(0,a.yg)("inlineCode",{parentName:"p"},"MyComponent")," will only rerender when the ",(0,a.yg)("inlineCode",{parentName:"p"},"count")," prop changes.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"useMemo")),": This hook memoizes the result of a function so that it will only be recomputed if its dependencies have been changed. It's useful for expensive computations where the result does not need to be recalculated on every render."),(0,a.yg)("p",{parentName:"li"},"Example:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const expensiveCalculation = (num) => {\n  console.log("Calculating...");\n  return num * 2;\n};\n\nconst MyComponent = ({ number }) => {\n  const calculatedValue = useMemo(\n    () => expensiveCalculation(number),\n    [number],\n  );\n\n  return <div>{calculatedValue}</div>;\n};\n')),(0,a.yg)("p",{parentName:"li"},"The ",(0,a.yg)("inlineCode",{parentName:"p"},"expensiveCalculation")," function will be called every time ",(0,a.yg)("inlineCode",{parentName:"p"},"number")," changes, and not on each render.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"useCallback")),": This hook is quite like ",(0,a.yg)("inlineCode",{parentName:"p"},"useMemo")," but for memoizing functions. This one comes in handy when you have to pass down callbacks into child components in such a manner that they do not get recreated on every render of the parent component."),(0,a.yg)("p",{parentName:"li"},"Example:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const MyComponent = ({ handleClick }) => {\n  console.log("Component rendered");\n  return <button onClick={handleClick}>Click me</button>;\n};\n\nconst ParentComponent = () => {\n  const handleClick = useCallback(() => {\n    console.log("Button clicked");\n  }, []);\n\n  return <MyComponent handleClick={handleClick} />;\n};\n')),(0,a.yg)("p",{parentName:"li"},"Here, ",(0,a.yg)("inlineCode",{parentName:"p"},"handleClick")," is memoized, and thus it won't be re-created every render. These memoization patterns will be useful for optimal performance during complex UI interaction and while working with large sets of data."))),(0,a.yg)("h1",{id:"conclusion"},"Conclusion"),(0,a.yg)("p",null,"We discussed React design patterns in this article, including Higher-Order Components, Container-Presentational Component Patterns, Compound Components, Controlled Components, and many more. You can enhance code quality, promote team collaboration, and make your apps more scalable, flexible, and maintainable by incorporating these design patterns and best practices into your React projects."))}y.isMDXComponent=!0}}]);