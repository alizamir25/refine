"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[13343],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>h});var a=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),u=i,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return t?a.createElement(h,o(o({ref:n},c),{},{components:t})):a.createElement(h,o({ref:n},c))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[m]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},69670:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>m});t(96540);var a=t(15680);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}const s={title:"How to Use JavaScript Array some",description:"JavaScript some method implementation on Array with examples",slug:"javascript-some-method",authors:"abdullah_numan",tags:["javascript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-25-js-some/social.png",hide_table_of_contents:!1},l=void 0,p={permalink:"/blog/javascript-some-method",source:"@site/blog/2024-02-02-js-some.md",title:"How to Use JavaScript Array some",description:"JavaScript some method implementation on Array with examples",date:"2024-02-02T00:00:00.000Z",formattedDate:"February 2, 2024",tags:[{label:"javascript",permalink:"/blog/tags/javascript"}],readingTime:10.92,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"How to Use JavaScript Array some",description:"JavaScript some method implementation on Array with examples",slug:"javascript-some-method",authors:"abdullah_numan",tags:["javascript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-25-js-some/social.png",hide_table_of_contents:!1},prevItem:{title:"A Quick Start Guide to React Suspense",permalink:"/blog/react-suspense-guide"},nextItem:{title:"Next.js vs React - A Beginner's Guide",permalink:"/blog/next-js-vs-react"},relatedPosts:[{title:"Bun vs. Node.js",description:"We'll go over the new Bun runtime that has created a buzz in the tech space lately.",permalink:"/blog/bun-js-vs-node",formattedDate:"June 4, 2023",authors:[{name:"Victor Uma",title:"Software Developer",imageURL:"https://github.com/uma-victor1.png",key:"victor_uma"}],readingTime:9.335,date:"2023-06-04T00:00:00.000Z"},{title:"How to Import CSV File with React",description:"In this guide, I will show you how to import CSV files using React and JavaScript.",permalink:"/blog/how-to-import-csv",formattedDate:"January 18, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:4.365,date:"2022-01-18T00:00:00.000Z"},{title:"How to Use JavaScript Slice Method",description:"JavaScript Slice method implementation on Array and Strings with examples",permalink:"/blog/javascript-slice",formattedDate:"January 31, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:10.75,date:"2024-01-31T00:00:00.000Z"}],authorPosts:[{title:"TypeScript Mapped Types in Depth",description:"This post provides an in-depth guide on how to derive mapped types in TypeScript.",permalink:"/blog/typescript-mapped-types",formattedDate:"February 29, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:11.19,date:"2024-02-29T00:00:00.000Z"},{title:"How to Use JavaScript Slice Method",description:"JavaScript Slice method implementation on Array and Strings with examples",permalink:"/blog/javascript-slice",formattedDate:"January 31, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:10.75,date:"2024-01-31T00:00:00.000Z"},{title:"JavaScript Substring Method",description:"We'll learn how to use JavaScript substring method to extract substrings from a parent string.",permalink:"/blog/javascript-substring-method",formattedDate:"October 23, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:8.88,date:"2023-10-23T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},m=[{value:"Introduction",id:"introduction",level:2},{value:"What is JavaScript some method?",id:"what-is-javascript-some-method",level:2},{value:"JavaScript <code>Array.prototype.some</code>: Details of the Callback Function",id:"javascript-arrayprototypesome-details-of-the-callback-function",level:3},{value:"How <code>Array.prototype.some()</code> Works?",id:"how-arrayprototypesome-works",level:3},{value:"How to Use JavaScript Array <code>some</code> Method?",id:"how-to-use-javascript-array-some-method",level:3},{value:"When to Use JavaScript <code>some()</code>?",id:"when-to-use-javascript-some",level:2},{value:"Using JavaScript <code>Array.prototype.some</code> to Test Arrays of Nested Objects",id:"using-javascript-arrayprototypesome-to-test-arrays-of-nested-objects",level:3},{value:"JavaScript <code>some()</code> With <code>thisArg</code> Argument",id:"javascript-some-with-thisarg-argument",level:3},{value:"JavaScript <code>some(callback, thisArg)</code> Doesn&#39;t Work With Arrow Functions",id:"javascript-somecallback-thisarg-doesnt-work-with-arrow-functions",level:3},{value:"JS <code>some(callback, thisArg)</code> Works With Non-Arrow Functions",id:"js-somecallback-thisarg-works-with-non-arrow-functions",level:3},{value:"Modifying the Caller Array",id:"modifying-the-caller-array",level:2},{value:"Summary",id:"summary",level:2}],d={toc:m},u="wrapper";function h(e){var{components:n}=e,t=o(e,["components"]);return(0,a.yg)(u,r(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){i(e,n,t[n])}))}return e}({},d,t),{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("em",{parentName:"strong"},"This article was last updated on February 2, 2024 to organize content for better understanding of Javascript some method."))),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"This post is about the Array ",(0,a.yg)("inlineCode",{parentName:"p"},"some()")," method in JavaScript. This is the second part of the series titled ",(0,a.yg)("a",{parentName:"p",href:"https://refine.dev/blog/javascript-slice/"},"JavaScript Iteration Methods Series"),"."),(0,a.yg)("p",null,"Refinedev JavaScript Iteration Methods Series is a tutorial series that publishes posts covering the usage of various iteration methods in JavaScript."),(0,a.yg)("p",null,"The JavaScript ",(0,a.yg)("inlineCode",{parentName:"p"},"Array.prototype.some")," method is an iteration method that tests whether any one element in a collection satisfies a given condition. It is commonly used to find items that fulfill involved conditions such as matching the value of deeply nested object properties. However, it can also be used to check if a given value is included in an array. The test is defined via a callback function and passed as argument to the JS Array ",(0,a.yg)("inlineCode",{parentName:"p"},"some()")," call."),(0,a.yg)("p",null,"In this post, we explore with examples what the ",(0,a.yg)("strong",{parentName:"p"},"JavaScript some")," method is and how it works. We consider what entails its callback test function, and the cases where it is used. We demonstrate examples of using JavaScript Array ",(0,a.yg)("inlineCode",{parentName:"p"},"some()")," with and without the ",(0,a.yg)("inlineCode",{parentName:"p"},"thisArg")," object. We also examine the impact of using the callback with arrow syntax on the ",(0,a.yg)("inlineCode",{parentName:"p"},"thisArg")," object while using the JavaScript ",(0,a.yg)("inlineCode",{parentName:"p"},"some()")," method. Towards the end, we see how to modify the caller array from inside the JavaScript Array ",(0,a.yg)("inlineCode",{parentName:"p"},"some()")," method."),(0,a.yg)("p",null,"We'll be discussing things in quite depth, so let's start with the basics."),(0,a.yg)("p",null,"Steps we'll cover:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#what-is-javascript-some-method"},"What is JavaScript some method?"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#javascript-arrayprototypesome-details-of-the-callback-function"},"JavaScript ",(0,a.yg)("inlineCode",{parentName:"a"},"Array.prototype.some"),": Details of the Callback Function")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#how-arrayprototypesome-works"},"How ",(0,a.yg)("inlineCode",{parentName:"a"},"Array.prototype.some()")," Works?")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#how-to-use-javascript-array-some-method"},"How to Use JavaScript Array ",(0,a.yg)("inlineCode",{parentName:"a"},"some")," Method?")))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#when-to-use-javascript-some"},"When to Use JavaScript ",(0,a.yg)("inlineCode",{parentName:"a"},"some()")),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#using-javascript-arrayprototypesome-to-test-arrays-of-nested-objects"},"Using JavaScript ",(0,a.yg)("inlineCode",{parentName:"a"},"Array.prototype.some")," to Test Arrays of Nested Objects")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#javascript-some-with-thisarg-argument"},"JavaScript ",(0,a.yg)("inlineCode",{parentName:"a"},"some()")," With ",(0,a.yg)("inlineCode",{parentName:"a"},"thisArg")," Argument")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#javascript-somecallback-thisarg-doesnt-work-with-arrow-functions"},"JavaScript ",(0,a.yg)("inlineCode",{parentName:"a"},"some(callback, thisArg)")," Doesn't Work With Arrow Functions")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#js-somecallback-thisarg-works-with-non-arrow-functions"},"JS ",(0,a.yg)("inlineCode",{parentName:"a"},"some(callback, thisArg)")," Works With Non-Arrow Functions")))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#modifying-the-caller-array"},"Modifying the Caller Array"))),(0,a.yg)("h2",{id:"what-is-javascript-some-method"},"What is JavaScript some method?"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Array.prototype.some()")," is a JavaScript iteration method used to check if an array contains at least one item that satisfies a test. The method is called on an array of items and the test is performed with a callback function and any necessary ",(0,a.yg)("inlineCode",{parentName:"p"},"thisArg")," object passed to the execution context of the callback function:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"// Method signature\n\nsome(callbackFn);\nsome(callbackFn, thisArg);\n")),(0,a.yg)("p",null,"The first argument, ",(0,a.yg)("inlineCode",{parentName:"p"},"callbackFn"),", is mandatory and have to be declared with the test logic. The second argument, ",(0,a.yg)("inlineCode",{parentName:"p"},"thisArg"),", is optional."),(0,a.yg)("h3",{id:"javascript-arrayprototypesome-details-of-the-callback-function"},"JavaScript ",(0,a.yg)("inlineCode",{parentName:"h3"},"Array.prototype.some"),": Details of the Callback Function"),(0,a.yg)("p",null,"The JS ",(0,a.yg)("inlineCode",{parentName:"p"},"some()")," method's callback function, ",(0,a.yg)("inlineCode",{parentName:"p"},"callbackFn")," here, takes three arguments. The first is the element being traversed to, ",(0,a.yg)("inlineCode",{parentName:"p"},"element"),", which is mandatory. The second argument is the current index, ",(0,a.yg)("inlineCode",{parentName:"p"},"index")," and the third is ",(0,a.yg)("inlineCode",{parentName:"p"},"array"),", the array being iterated:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"const callbackFn = function(element, index, array){...}\n")),(0,a.yg)("p",null,"Both the second and third arguments are optional. So, ",(0,a.yg)("inlineCode",{parentName:"p"},"some()")," would have the following possible call signatures with the callback:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"// Method call signatures\n\nsome(function(element){...});\nsome(function(element, index){...});\nsome(function(element, index, array){...});\nsome(function(element, index, array){...}, thisArg);\n")),(0,a.yg)("h3",{id:"how-arrayprototypesome-works"},"How ",(0,a.yg)("inlineCode",{parentName:"h3"},"Array.prototype.some()")," Works?"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"JavaScript some")," tests whether there is one element that satisfies the test logic set in the callback function, ",(0,a.yg)("inlineCode",{parentName:"p"},"callbackFn"),"."),(0,a.yg)("p",null,"JS ",(0,a.yg)("inlineCode",{parentName:"p"},"some()")," attempts to execute the callback function once for each item in the array. If it finds one that evaluates to a truthy value for ",(0,a.yg)("inlineCode",{parentName:"p"},"callbackFn"),", it returns with the Boolean ",(0,a.yg)("inlineCode",{parentName:"p"},"true"),". Otherwise, it seeks to traverse to the end of the array and returns ",(0,a.yg)("inlineCode",{parentName:"p"},"false")," if all are falsy:"),(0,a.yg)("h3",{id:"how-to-use-javascript-array-some-method"},"How to Use JavaScript Array ",(0,a.yg)("inlineCode",{parentName:"h3"},"some")," Method?"),(0,a.yg)("p",null,"To use the JavaScript ",(0,a.yg)("inlineCode",{parentName:"p"},"Array.prototype.some")," method, can declare the test inside a callback function, so that we can pass it to ",(0,a.yg)("inlineCode",{parentName:"p"},"some()")," at invocation. For example, as in the case below for checking if a number in the array is even or not:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"const numbers = [1, 2, 3, 4, 5];\n\nconst even = (element) => element % 2 === 0;\nconst isThereEvenNumber = numbers.some(even);\n\nconsole.log(isThereEvenNumber); // true\n")),(0,a.yg)("p",null,"In the above chunk of code, ",(0,a.yg)("inlineCode",{parentName:"p"},"even")," is our callback function where we apply the logic for testing if the item is an even number. We then pass ",(0,a.yg)("inlineCode",{parentName:"p"},"even")," to ",(0,a.yg)("inlineCode",{parentName:"p"},"some()")," which is invoked on ",(0,a.yg)("inlineCode",{parentName:"p"},"numbers")," array. Apparently, we have at least one even number in ",(0,a.yg)("inlineCode",{parentName:"p"},"numbers")," so ",(0,a.yg)("inlineCode",{parentName:"p"},"even")," returns ",(0,a.yg)("inlineCode",{parentName:"p"},"true"),". As a result, ",(0,a.yg)("inlineCode",{parentName:"p"},"some()")," also returns ",(0,a.yg)("inlineCode",{parentName:"p"},"true"),"."),(0,a.yg)("h2",{id:"when-to-use-javascript-some"},"When to Use JavaScript ",(0,a.yg)("inlineCode",{parentName:"h2"},"some()"),"?"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Array.prototype.some")," is used in situations that involves fairly complex tests to be performed on an item, such as the division operation in the ",(0,a.yg)("inlineCode",{parentName:"p"},"even")," function above."),(0,a.yg)("h3",{id:"using-javascript-arrayprototypesome-to-test-arrays-of-nested-objects"},"Using JavaScript ",(0,a.yg)("inlineCode",{parentName:"h3"},"Array.prototype.some")," to Test Arrays of Nested Objects"),(0,a.yg)("p",null,"The JavaScript ",(0,a.yg)("inlineCode",{parentName:"p"},"Array")," ",(0,a.yg)("inlineCode",{parentName:"p"},"some()")," method can be a good alternative to JS Array ",(0,a.yg)("inlineCode",{parentName:"p"},"includes()"),", but it is more powerful."),(0,a.yg)("p",null,"It can be used in an array of objects for testing objects with deeply nested properties and complex test logic. For example, the ",(0,a.yg)("inlineCode",{parentName:"p"},"some()")," method can be used to test if an array of ",(0,a.yg)("inlineCode",{parentName:"p"},"users")," contains a ",(0,a.yg)("inlineCode",{parentName:"p"},"user")," with an ",(0,a.yg)("inlineCode",{parentName:"p"},"address")," in the United States:"),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Show nested users array example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'const users = [\n  {\n    username: "jos",\n    firstName: "Jos",\n    lastName: "Bid",\n    role: "dumper",\n    address: {\n      line1: "1600 Pennsylvania Avenue NW",\n      city: "Washington, DC",\n      zipCode: "20500",\n      country: "United States",\n    },\n  },\n  {\n    username: "joe",\n    firstName: "Joseph",\n    lastName: "Hidin",\n    role: "bumper",\n    address: {\n      line1: "1, Sleeping Pill Avenue",\n      city: "Tehran",\n      zipCode: "20500",\n      country: "Iran",\n    },\n  },\n  {\n    username: "yo",\n    firstName: "Joseph",\n    lastName: "Bitin",\n    role: "cumber",\n    address: {\n      line1: "2, Flyin Avenue",\n      city: "Yeruham",\n      zipCode: "8051108",\n      country: "Israel",\n    },\n  },\n];\n'))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'const users = [\n  {\n    // user details\n  },\n  // more users\n];\n\nconst findPresidentJoe = (j) =>\n  j?.address?.country === "United States" && j?.role === "dumper";\n\nconsole.log(users.some(findPresidentJoe)); // true\n')),(0,a.yg)("h3",{id:"javascript-some-with-thisarg-argument"},"JavaScript ",(0,a.yg)("inlineCode",{parentName:"h3"},"some()")," With ",(0,a.yg)("inlineCode",{parentName:"h3"},"thisArg")," Argument"),(0,a.yg)("p",null,"We can pass in the ",(0,a.yg)("inlineCode",{parentName:"p"},"thisArg")," object to JavaScript ",(0,a.yg)("inlineCode",{parentName:"p"},"some()")," as the second argument. Passing the ",(0,a.yg)("inlineCode",{parentName:"p"},"thisArg")," to JavaScript Array ",(0,a.yg)("inlineCode",{parentName:"p"},"some()")," adds it to the execution context of the callback function."),(0,a.yg)("p",null,"We can then access the passed ",(0,a.yg)("inlineCode",{parentName:"p"},"thisArg")," object from within our callback and use it for our advantage. Let's try doing that by making some modifications to our ",(0,a.yg)("inlineCode",{parentName:"p"},"even")," callback in the earlier ",(0,a.yg)("inlineCode",{parentName:"p"},"numbers")," array example."),(0,a.yg)("p",null,"Instead of checking for an even number, let's say we want to generalize our callback function to check if the item is divisible by any given number. We would like our callback now to be something like below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"function divisible(element, divisor) {\n  return element % divisor === 0;\n}\n")),(0,a.yg)("p",null,"However, we cannot pass ",(0,a.yg)("inlineCode",{parentName:"p"},"divisor")," as the second argument to ",(0,a.yg)("inlineCode",{parentName:"p"},"divisible()"),", as our callback accepts ",(0,a.yg)("inlineCode",{parentName:"p"},"index")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"array")," as the second and third arguments, respectively. And it becomes overcrowded if we introduce a fourth with ",(0,a.yg)("inlineCode",{parentName:"p"},"divisor"),"."),(0,a.yg)("p",null,"We can get around this problem by passing ",(0,a.yg)("inlineCode",{parentName:"p"},"divisor")," as a property of the ",(0,a.yg)("inlineCode",{parentName:"p"},"thisArg")," object, the second argument to ",(0,a.yg)("inlineCode",{parentName:"p"},"every()"),". And then access the object with ",(0,a.yg)("inlineCode",{parentName:"p"},"this")," from inside the callback:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"const numbers = [1, 2, 3, 4, 5];\n\nfunction divisible(element) {\n  return element % this?.divisor === 0;\n}\n\nconst isThereEvenNumber = numbers.some(divisible, { divisor: 2 });\n\nconsole.log(isThereEvenNumber); // true\n")),(0,a.yg)("p",null,"Here, we set the ",(0,a.yg)("inlineCode",{parentName:"p"},"thisArg")," object to ",(0,a.yg)("inlineCode",{parentName:"p"},"{ divisor: 2 }"),", which basically leads to checking if the item is even or not."),(0,a.yg)("p",null,"With this now, we can try other divisor options, like checking if we have a number divisible by 3 or 7. Thanks to ",(0,a.yg)("inlineCode",{parentName:"p"},"thisArg"),", this has become very easy now:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"const isThereAnyDivisibleByThree = numbers.some(divisible, { divisor: 3 });\nconst isThereAnyDivisibleBySeven = numbers.some(divisible, { divisor: 7 });\n\nconsole.log(isThereAnyDivisibleByThree); // true\nconsole.log(isThereAnyDivisibleBySeven); // false\n")),(0,a.yg)("h3",{id:"javascript-somecallback-thisarg-doesnt-work-with-arrow-functions"},"JavaScript ",(0,a.yg)("inlineCode",{parentName:"h3"},"some(callback, thisArg)")," Doesn't Work With Arrow Functions"),(0,a.yg)("p",null,"If we look back at the first example that involves the ",(0,a.yg)("inlineCode",{parentName:"p"},"even()")," callback, we defined it as an arrow function. And it worked."),(0,a.yg)("p",null,"We defined its extension, the ",(0,a.yg)("inlineCode",{parentName:"p"},"divisible()")," function with named declaration syntax. And it worked as well."),(0,a.yg)("p",null,"If we declare ",(0,a.yg)("inlineCode",{parentName:"p"},"divisible()")," as an arrow function, we run into problems:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"const divisible = (element) => element % this?.divisor === 0;\n\nconst isThereEvenNumber = numbers.some(divisible, { divisor: 2 });\nconst isThereAnyDivisibleByThree = numbers.some(divisible, { divisor: 3 });\nconst isThereAnyDivisibleBySeven = numbers.some(divisible, { divisor: 7 });\n\nconsole.log(isThereEvenNumber); // false\nconsole.log(isThereAnyDivisibleByThree); // false\nconsole.log(isThereAnyDivisibleBySeven); // false\n")),(0,a.yg)("p",null,"All returning ",(0,a.yg)("inlineCode",{parentName:"p"},"false"),", although we expect two to be ",(0,a.yg)("inlineCode",{parentName:"p"},"true")," and one to be ",(0,a.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,a.yg)("p",null,"If we investigate the problem with a modified ",(0,a.yg)("inlineCode",{parentName:"p"},"divisible()")," function that logs ",(0,a.yg)("inlineCode",{parentName:"p"},"this")," to the console, we see that ",(0,a.yg)("inlineCode",{parentName:"p"},"this")," is ",(0,a.yg)("inlineCode",{parentName:"p"},"undefined")," in strict mode:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"// strict mode\n\nconst numbers = [1, 2, 3, 4, 5];\n\nconst divisible = (element) => {\n  console.log(this);\n  return element % this?.divisor === 0;\n};\n\nconst isThereEvenNumber = numbers.some(divisible, { divisor: 2 });\n\nconsole.log(isThereEvenNumber);\n// undefined\n// undefined\n// undefined\n// undefined\n// undefined\n// false\n")),(0,a.yg)("p",null,"Now, if we introduce a ",(0,a.yg)("inlineCode",{parentName:"p"},"this.divisor")," property to the lexical environment of ",(0,a.yg)("inlineCode",{parentName:"p"},"divisible()"),", we get its value logged to the console:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"const numbers = [1, 2, 3, 4, 5];\nthis.divisor = \"Hi\";\n\nconst divisible = (element) => {\n  console.log(this);\n  return element % this.divisor === 0;\n};\n\nconst isThereEvenNumber = numbers.some(divisible, { divisor: 2 });\n\nconsole.log(isThereEvenNumber);\n// { divisor: 'Hi' }\n// { divisor: 'Hi' }\n// { divisor: 'Hi' }\n// { divisor: 'Hi' }\n// { divisor: 'Hi' }\n// false\n")),(0,a.yg)("p",null,"Here, clearly, we have ",(0,a.yg)("inlineCode",{parentName:"p"},"{ divisor: 'Hi' }")," coming from ",(0,a.yg)("inlineCode",{parentName:"p"},"divisible()"),"'s closure. It turns out, the problem is due to the binding of ",(0,a.yg)("inlineCode",{parentName:"p"},"divisible()"),"'s ",(0,a.yg)("inlineCode",{parentName:"p"},"this")," to it's lexical environment because of the arrow syntax. It was ",(0,a.yg)("inlineCode",{parentName:"p"},"undefined")," before we introduced ",(0,a.yg)("inlineCode",{parentName:"p"},"this.divisor = 'Hi';"),". Now ",(0,a.yg)("inlineCode",{parentName:"p"},"this")," is ",(0,a.yg)("inlineCode",{parentName:"p"},"{ divisor: 'Hi' }"),". In other words, ",(0,a.yg)("inlineCode",{parentName:"p"},"{ divisor: 2 "),"} is not being relayed to ",(0,a.yg)("inlineCode",{parentName:"p"},"divisible"),"'s ",(0,a.yg)("inlineCode",{parentName:"p"},"this"),"."),(0,a.yg)("p",null,"So, ",(0,a.yg)("inlineCode",{parentName:"p"},"some()")," with ",(0,a.yg)("inlineCode",{parentName:"p"},"thisArg")," does not work as expected with ",(0,a.yg)("inlineCode",{parentName:"p"},"callbackFn")," defined with arrow syntax."),(0,a.yg)("h3",{id:"js-somecallback-thisarg-works-with-non-arrow-functions"},"JS ",(0,a.yg)("inlineCode",{parentName:"h3"},"some(callback, thisArg)")," Works With Non-Arrow Functions"),(0,a.yg)("p",null,"But as we have seen before, it works with callbacks defined with named function declarations:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"function divisible(element) {\n  return element % this?.divisor === 0;\n}\n\nconst isThereEvenNumber = numbers.some(divisible, { divisor: 2 });\n\nconsole.log(isThereEvenNumber); // true\n")),(0,a.yg)("p",null,"It also works with anonymous function expressions:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"const divisible = function (element) {\n  return element % this?.divisor === 0;\n};\n\nconst isThereEvenNumber = numbers.some(divisible, { divisor: 2 });\n\nconsole.log(isThereEvenNumber); // true\n")),(0,a.yg)("h2",{id:"modifying-the-caller-array"},"Modifying the Caller Array"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"JavaScript some method")," sets the range of the items to be processed before the first invocation of the callback function."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"some()")," itself does not modify the caller array, but the caller is available to the callback function as its third argument, ",(0,a.yg)("inlineCode",{parentName:"p"},"array"),". And if an item is changed after traversal, the change is disregarded by the callback function. That is, the callback function only respects the existing value of an item at the time it is visited."),(0,a.yg)("p",null,"We can witness this in a scenario where the caller array is mutated from inside ",(0,a.yg)("inlineCode",{parentName:"p"},"some()"),"."),(0,a.yg)("p",null,"JavaScript ",(0,a.yg)("inlineCode",{parentName:"p"},"some()")," itself does not modify the caller array, but the caller is available to the callback function as its third argument, ",(0,a.yg)("inlineCode",{parentName:"p"},"array"),". This means we can deliberately mutate the caller when we need to from inside our callback, ",(0,a.yg)("inlineCode",{parentName:"p"},"divisible()"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"function divisible(element, index, array) {\n  array[0] = 7;\n  array[4] = 7;\n  console.log(array);\n  return element % this?.divisor === 0;\n}\n")),(0,a.yg)("p",null,"In this scenario, if an unvisited item is changed ahead of time, the callback function - here ",(0,a.yg)("inlineCode",{parentName:"p"},"divisible()")," - finds the new value when it visits the item and so the new value is processed. In contrast, it disregards changes to items that are already traversed:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"const divisible = function (element, index, array) {\n  array[0] = 7;\n  array[4] = 7;\n\n  console.log(array);\n\n  return element % this?.divisor === 0;\n};\n\nconst isDivisibleBySeven = numbers.some(divisible, { divisor: 7 });\n\nconsole.log(isDivisibleBySeven);\nconsole.log(numbers);\n/*\n  [ 7, 2, 3, 4, 7 ]\n  [ 7, 2, 3, 4, 7 ]\n  [ 7, 2, 3, 4, 7 ]\n  [ 7, 2, 3, 4, 7 ]\n  [ 7, 2, 3, 4, 7 ]\n  true\n  [ 7, 2, 3, 4, 7 ]\n*/\n")),(0,a.yg)("p",null,"In the console log statements above, the ",(0,a.yg)("inlineCode",{parentName:"p"},"numbers")," array is being logged five times due to the ",(0,a.yg)("inlineCode",{parentName:"p"},"console.log(array);")," statement we placed inside ",(0,a.yg)("inlineCode",{parentName:"p"},"divisible()"),"."),(0,a.yg)("p",null,"As we can see, ",(0,a.yg)("inlineCode",{parentName:"p"},"numbers")," is being mutated twice in the first call to ",(0,a.yg)("inlineCode",{parentName:"p"},"divisible()"),". The first mutation happens when at ",(0,a.yg)("inlineCode",{parentName:"p"},"numbers[0]"),", i.e. after being visited, which changes the value of itself to ",(0,a.yg)("inlineCode",{parentName:"p"},"7"),". So, even though it was divisible by the divisor ",(0,a.yg)("inlineCode",{parentName:"p"},"7"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"some()")," didn't immediately return ",(0,a.yg)("inlineCode",{parentName:"p"},"true"),". Instead, it returned ",(0,a.yg)("inlineCode",{parentName:"p"},"true")," in the next instance when it visited the unvisited and mutated value of ",(0,a.yg)("inlineCode",{parentName:"p"},"7")," at ",(0,a.yg)("inlineCode",{parentName:"p"},"numbers[4]"),"."),(0,a.yg)("p",null,"This shows that the callback function processes the value of an item as it finds it at traversal and disregards the changes made to it when and after it is at that index."),(0,a.yg)("h2",{id:"summary"},"Summary"),(0,a.yg)("p",null,"In this post, we played around with the ",(0,a.yg)("strong",{parentName:"p"},"JavaScript some")," method which helps us test whether an array has at least one item that passes the test implemented using a callback function. We saw that the callback function could take only three arguments. Additional arguments can be bound to its execution context by setting its ",(0,a.yg)("inlineCode",{parentName:"p"},"this")," value with a ",(0,a.yg)("inlineCode",{parentName:"p"},"thisArg")," passed to ",(0,a.yg)("inlineCode",{parentName:"p"},"some()"),"."),(0,a.yg)("p",null,"We also found out that if we use arrow syntax to declare the callback function, its lexical context binding messes with the binding of ",(0,a.yg)("inlineCode",{parentName:"p"},"thisArg")," to its ",(0,a.yg)("inlineCode",{parentName:"p"},"this")," object. So, we should be using non-arrow functions to declare a callback function that uses ",(0,a.yg)("inlineCode",{parentName:"p"},"this")," in its implementation."))}h.isMDXComponent=!0}}]);