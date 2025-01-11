"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[35641],{58860:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>y});var l=t(37953);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,l,i=function(e,n){if(null==e)return{};var t,l,i={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=l.createContext({}),p=function(e){var n=l.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},g=function(e){var n=p(e.components);return l.createElement(s.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},d=l.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),m=p(t),d=i,y=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return t?l.createElement(y,r(r({ref:n},g),{},{components:t})):l.createElement(y,r({ref:n},g))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[m]="string"==typeof e?e:i,r[1]=o;for(var p=2;p<a;p++)r[p]=t[p];return l.createElement.apply(null,r)}return l.createElement.apply(null,t)}d.displayName="MDXCreateElement"},63523:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>s,default:()=>y,frontMatter:()=>o,metadata:()=>p,toc:()=>m});t(37953);var l=t(58860);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function r(e,n){if(null==e)return{};var t,l,i=function(e,n){if(null==e)return{};var t,l,i={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}const o={title:"10 Methods for Vertical Alignment Using CSS",description:"We'll look at different techniques to vertically align HTML content using CSS.",slug:"css-vertical-align",authors:"peter_osah",tags:["css"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-02-13-css-vertical-align/social.png",hide_table_of_contents:!1},s=void 0,p={permalink:"/blog/css-vertical-align",source:"@site/blog/2024-02-13-css-vertical-align.md",title:"10 Methods for Vertical Alignment Using CSS",description:"We'll look at different techniques to vertically align HTML content using CSS.",date:"2024-02-13T00:00:00.000Z",formattedDate:"February 13, 2024",tags:[{label:"css",permalink:"/blog/tags/css"}],readingTime:10.41,hasTruncateMarker:!1,authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],frontMatter:{title:"10 Methods for Vertical Alignment Using CSS",description:"We'll look at different techniques to vertically align HTML content using CSS.",slug:"css-vertical-align",authors:"peter_osah",tags:["css"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-02-13-css-vertical-align/social.png",hide_table_of_contents:!1},prevItem:{title:"Docker Swarm vs. Kubernetes - DevOps Guide",permalink:"/blog/docker-swarm-vs-kubernetes"},nextItem:{title:"Docker Cheat Sheet - Most Commonly Used Commands",permalink:"/blog/docker-cheat-sheet"},relatedPosts:[{title:"CSS Rounded Corners Examples",description:"We'll examine CSS rounded corners in this article.",permalink:"/blog/css-rounded-corners",formattedDate:"October 23, 2024",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:12.845,date:"2024-10-23T00:00:00.000Z"},{title:"Using Heroicons with TailwindCSS",description:"In this post, we see how to use Heroicons with TailwindCSS.",permalink:"/blog/heroicons-with-tailwind",formattedDate:"August 19, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:14.115,date:"2024-08-19T00:00:00.000Z"},{title:"How do you wrap text content in CSS?",description:"We'll look at the CSS features that allow us to wrap overflowing text in containers.",permalink:"/blog/css-text-wrap",formattedDate:"March 5, 2024",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:7.6,date:"2024-03-05T00:00:00.000Z"}],authorPosts:[{title:"Framer Motion React Animations",description:"We'll walk you through the features and functionalities of Framer Motion.",permalink:"/blog/framer-motion",formattedDate:"June 20, 2024",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:15.475,date:"2024-06-20T00:00:00.000Z"},{title:"Creating testable React applications with Playwright",description:"We'll take a look at how to create testable React applications with Playwright.",permalink:"/blog/playwright-react",formattedDate:"June 4, 2024",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:9.29,date:"2024-06-04T00:00:00.000Z"},{title:"How do you wrap text content in CSS?",description:"We'll look at the CSS features that allow us to wrap overflowing text in containers.",permalink:"/blog/css-text-wrap",formattedDate:"March 5, 2024",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:7.6,date:"2024-03-05T00:00:00.000Z"}]},g={authorsImageUrls:[void 0]},m=[{value:"Introduction",id:"introduction",level:2},{value:"Vertical alignment using margins",id:"vertical-alignment-using-margins",level:2},{value:"Example",id:"example",level:3},{value:"Vertical alignment with Flexbox",id:"vertical-alignment-with-flexbox",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Example 2:",id:"example-2",level:3},{value:"Vertical alignment using CSS Grid.",id:"vertical-alignment-using-css-grid",level:2},{value:"Example 1:",id:"example-1-1",level:3},{value:"Example 2:",id:"example-2-1",level:3},{value:"Example 3:",id:"example-3",level:3},{value:"Vertical alignment using table display (display: table)",id:"vertical-alignment-using-table-display-display-table",level:2},{value:"Example:",id:"example-4",level:3},{value:"Vertical alignment using absolute positioning (position: absolute)",id:"vertical-alignment-using-absolute-positioning-position-absolute",level:2},{value:"Example:",id:"example-5",level:3},{value:"Vertical alignment using css transforms",id:"vertical-alignment-using-css-transforms",level:2},{value:"Example 1",id:"example-1-2",level:3},{value:"Example 2",id:"example-2-2",level:3},{value:"Vertical alignment using line-height",id:"vertical-alignment-using-line-height",level:2},{value:"Example:",id:"example-6",level:3},{value:"Vertical alignment using inline display (display: inline) and vertical-align: middle",id:"vertical-alignment-using-inline-display-display-inline-and-vertical-align-middle",level:2},{value:"Example:",id:"example-7",level:3},{value:"Vertical alignment using inline-block display (display: inline-block) and vertical-align: middle",id:"vertical-alignment-using-inline-block-display-display-inline-block-and-vertical-align-middle",level:2},{value:"Example:",id:"example-8",level:3},{value:"Vertical Alignment using \u201cbefore\u201d pseudo-element and vertical-align: middle",id:"vertical-alignment-using-before-pseudo-element-and-vertical-align-middle",level:2},{value:"Example:",id:"example-9",level:3},{value:"Conclusion",id:"conclusion",level:2}],c={toc:m},d="wrapper";function y(e){var{components:n}=e,t=r(e,["components"]);return(0,l.yg)(d,a(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},l=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(l=l.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),l.forEach((function(n){i(e,n,t[n])}))}return e}({},c,t),{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"introduction"},"Introduction"),(0,l.yg)("p",null,"Vertically aligning ",(0,l.yg)("inlineCode",{parentName:"p"},"HTML")," contents in ",(0,l.yg)("inlineCode",{parentName:"p"},"CSS")," has always been a herculean task and has been described by many web developers as tricky to implement. However, modern ",(0,l.yg)("inlineCode",{parentName:"p"},"CSS")," has made available a number of ways to vertically align ",(0,l.yg)("inlineCode",{parentName:"p"},"HTML")," contents easily. Content alignment has never been easier at this time, and in this article, we'll look at different techniques to vertically align ",(0,l.yg)("inlineCode",{parentName:"p"},"HTML")," content using ",(0,l.yg)("inlineCode",{parentName:"p"},"CSS"),"."),(0,l.yg)("p",null,"Steps we'll cover include:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#vertical-alignment-using-margins"},"Vertical alignment using margins")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#vertical-alignment-with-flexbox"},"Vertical alignment with Flexbox")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#vertical-alignment-using-css-grid"},"Vertical alignment using CSS Grid.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#vertical-alignment-using-table-display-display-table"},"Vertical alignment using table display (display: table)")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#vertical-alignment-using-absolute-positioning-position-absolute"},"Vertical alignment using absolute positioning (position: absolute)")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#vertical-alignment-using-css-transforms"},"Vertical alignment using css transforms")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#vertical-alignment-using-line-height"},"Vertical alignment using line-height")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#vertical-alignment-using-inline-display-display-inline-and-vertical-align-middle"},"Vertical alignment using inline display (display: inline) and vertical-align: middle")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#vertical-alignment-using-inline-block-display-display-inline-block-and-vertical-align-middle"},"Vertical alignment using inline-block display (display: inline-block) and vertical-align: middle")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#vertical-alignment-using-before-pseudo-element-and-vertical-align-middle"},"Vertical Alignment using \u201cbefore\u201d pseudo-element and vertical-align: middle"))),(0,l.yg)("h2",{id:"vertical-alignment-using-margins"},"Vertical alignment using margins"),(0,l.yg)("p",null,"Margins in ",(0,l.yg)("inlineCode",{parentName:"p"},"CSS")," are used to generate space around the borders of contents.\nHere are examples on how to easily vertically align contents with margins."),(0,l.yg)("h3",{id:"example"},"Example"),(0,l.yg)("p",null,"Using the ",(0,l.yg)("inlineCode",{parentName:"p"},"CSS")," property ",(0,l.yg)("inlineCode",{parentName:"p"},"margin:auto"),", You can vertically and horizontally align ",(0,l.yg)("inlineCode",{parentName:"p"},"HTML")," contents to the center. However, this is possible only when the following conditions are met:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"The parent element should have a given ",(0,l.yg)("inlineCode",{parentName:"li"},"height"),"."),(0,l.yg)("li",{parentName:"ul"},"The child element should have a specified ",(0,l.yg)("inlineCode",{parentName:"li"},"height"),"."),(0,l.yg)("li",{parentName:"ul"},"The parent element should have either a display of ",(0,l.yg)("inlineCode",{parentName:"li"},"flex")," or ",(0,l.yg)("inlineCode",{parentName:"li"},"grid"),".")),(0,l.yg)("p",null,"A sample of this can be displayed below:"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"HTML CODE:")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-html"},'<html>\n  <body>\n    <section class="parent-element">\n      <div class="child-element">The text is here!</div>\n    </section>\n  </body>\n</html>\n')),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"CSS CODE:")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-css"},".parent-element {\n  display: [flex or grid];\n  height: 500px;\n  border: 1px solid #000;\n}\n\n.child-element {\n  margin: auto;\n}\n")),(0,l.yg)("div",{className:"centered-image"},(0,l.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-02-13-css-vertical-align/1.png",alt:"css vertical alignment"})),(0,l.yg)("h2",{id:"vertical-alignment-with-flexbox"},"Vertical alignment with Flexbox"),(0,l.yg)("p",null,"Flexbox is a ",(0,l.yg)("inlineCode",{parentName:"p"},"CSS3")," layout module that aims to simplify the process of designing flexible, responsive layout structures without the need for positioning or float. Unlike some other CSS frameworks, it is orientation agnostic and lets you automatically align and resize containers based on the height and width of the screen."),(0,l.yg)("p",null,"Here are examples on how to effortlessly vertically align contents with flexbox."),(0,l.yg)("h3",{id:"example-1"},"Example 1"),(0,l.yg)("p",null,"With the CSS properties ",(0,l.yg)("inlineCode",{parentName:"p"},"display: flex"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"align-items: center")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"justify-content: space-around"),", we can vertically and horizontally align ",(0,l.yg)("inlineCode",{parentName:"p"},"HTML")," contents."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"HTML CODE:")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-html"},'<html>\n  <body>\n    <div class="nav">\n      <div class="nav-item">Home</div>\n    </div>\n  </body>\n</html>\n')),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"CSS CODE:")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-css"},".nav {\n  display: flex;\n  justify-content: space-around; /* aligns the items horizontally */\n  align-items: center; /* aligns the items vertically */\n  height: 100px;\n  background-color: #333;\n  color: #fff;\n}\n")),(0,l.yg)("div",{className:"centered-image"},(0,l.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-02-13-css-vertical-align/2.png",style:{width:"450px"},alt:"css vertical alignment"})),(0,l.yg)("h3",{id:"example-2"},"Example 2:"),(0,l.yg)("p",null,"With the CSS properties ",(0,l.yg)("inlineCode",{parentName:"p"},"display: flex"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"align-items: center")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"justify-content: center"),", we can also vertically align ",(0,l.yg)("inlineCode",{parentName:"p"},"HTML")," contents.\nWe will update the first example ",(0,l.yg)("inlineCode",{parentName:"p"},"CSS")," code to show this:"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"CSS CODE:")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-css"},".nav {\n  display: flex;\n  height: 100px;\n  background-color: #333;\n  color: #fff;\n  justify-content: center; /* aligns the items horizontally */\n  align-items: center; /* aligns the items vertically */\n}\n")),(0,l.yg)("h2",{id:"vertical-alignment-using-css-grid"},"Vertical alignment using CSS Grid."),(0,l.yg)("p",null,"The CSS Grid Layout Module provides a two dimension grid-based layout system with rows and columns, allowing you to design web pages with ease."),(0,l.yg)("p",null,"Here are examples on how to effortlessly vertically contents with flexbox."),(0,l.yg)("h3",{id:"example-1-1"},"Example 1:"),(0,l.yg)("p",null,"With the CSS properties ",(0,l.yg)("inlineCode",{parentName:"p"},"display: grid"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"align-items: center")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"justify-content: center"),", we can also vertically align ",(0,l.yg)("inlineCode",{parentName:"p"},"HTML")," contents."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"HTML CODE:")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-html"},'<html>\n  <body>\n    <div class="grid">\n      <div class="item">Centered Item</div>\n    </div>\n  </body>\n</html>\n')),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"CSS CODE:")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-css"},".grid {\n  display: grid;\n  height: 97vh;\n  justify-content: center; /* aligns the items horizontally */\n  align-items: center; /* aligns the items vertically */\n  border: 1px solid #000;\n}\n\n.item {\n  font-size: 20px;\n}\n")),(0,l.yg)("div",{className:"centered-image"},(0,l.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-02-13-css-vertical-align/3.png",style:{width:"450px"},alt:"css vertical alignment"})),(0,l.yg)("h3",{id:"example-2-1"},"Example 2:"),(0,l.yg)("p",null,"With the CSS properties ",(0,l.yg)("inlineCode",{parentName:"p"},"display: grid"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"place-items: center")," (which is a combination of ",(0,l.yg)("inlineCode",{parentName:"p"},"align-items: center")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"justify-content: center"),"), we can also vertically align ",(0,l.yg)("inlineCode",{parentName:"p"},"HTML")," contents."),(0,l.yg)("p",null,"We will update the ",(0,l.yg)("inlineCode",{parentName:"p"},"CSS")," code of the first example to show this:"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"CSS CODE:")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-css"},".grid {\n  display: grid;\n  height: 97vh;\n  place-items: center; /* aligns the items vertically and horizontally */\n  border: 1px solid #000;\n}\n\n.item {\n  font-size: 20px;\n}\n")),(0,l.yg)("h3",{id:"example-3"},"Example 3:"),(0,l.yg)("p",null,"With the CSS properties ",(0,l.yg)("inlineCode",{parentName:"p"},"display: grid"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"align-self: center"),", we can also vertically align ",(0,l.yg)("inlineCode",{parentName:"p"},"HTML")," contents."),(0,l.yg)("p",null,"We will update the ",(0,l.yg)("inlineCode",{parentName:"p"},"CSS")," code of the first example to show this:"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"CSS CODE:")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-css"},".grid {\n  display: grid;\n  height: 97vh;\n  border: 1px solid #000;\n}\n\n.item {\n  align-self: center; /* aligns the items vertically only */\n  font-size: 20px;\n}\n")),(0,l.yg)("div",{className:"centered-image"},(0,l.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-02-13-css-vertical-align/4.png",style:{width:"450px"},alt:"css vertical alignment"})),(0,l.yg)("h2",{id:"vertical-alignment-using-table-display-display-table"},"Vertical alignment using table display (display: table)"),(0,l.yg)("p",null,"Tables are a common and useful tool for displaying data on websites and web applications. It was the common method of presenting information in rows and columns before to the introduction of modules like ",(0,l.yg)("inlineCode",{parentName:"p"},"flex")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"grid"),"."),(0,l.yg)("p",null,"Here are examples on how to vertically align contents with ",(0,l.yg)("inlineCode",{parentName:"p"},"tables"),"."),(0,l.yg)("h3",{id:"example-4"},"Example:"),(0,l.yg)("p",null,"Using the ",(0,l.yg)("inlineCode",{parentName:"p"},"CSS")," property ",(0,l.yg)("inlineCode",{parentName:"p"},"display: table"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"display: table-cell"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"vertical-align: middle"),", You can vertically align contents to the center. However, this is possible only when the following conditions are met:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"The parent element must have the ",(0,l.yg)("inlineCode",{parentName:"li"},"display: table")," property."),(0,l.yg)("li",{parentName:"ul"},"When the parent element must have a given ",(0,l.yg)("inlineCode",{parentName:"li"},"height"),"."),(0,l.yg)("li",{parentName:"ul"},"The child element must have the ",(0,l.yg)("inlineCode",{parentName:"li"},"display: table-cell")," property."),(0,l.yg)("li",{parentName:"ul"},"The child element must have the ",(0,l.yg)("inlineCode",{parentName:"li"},"vertical-align: middle")," property.")),(0,l.yg)("p",null,"A sample of this can be displayed below:"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"HTML CODE:")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-html"},'<html>\n  <body>\n    <div class="parent-element">\n      <div class="child-element">Center text!</div>\n    </div>\n  </body>\n</html>\n')),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"CSS CODE:")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-css"},".parent-element {\n  display: table; /* table display*/\n  height: 50vh;\n  width: 100%;\n  border: 1px solid black;\n}\n\n.child-element {\n  display: table-cell; /* table-cell display*/\n  vertical-align: middle; /* vertical align*/\n  text-align: center;\n}\n")),(0,l.yg)("div",{className:"centered-image"},(0,l.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-02-13-css-vertical-align/5.png",style:{width:"450px"},alt:"css vertical alignment"})),(0,l.yg)("h2",{id:"vertical-alignment-using-absolute-positioning-position-absolute"},"Vertical alignment using absolute positioning (position: absolute)"),(0,l.yg)("p",null,"The position ",(0,l.yg)("inlineCode",{parentName:"p"},"CSS")," property specify how an element is positioned in a document. Positioned elements' final positioning is determined by their ",(0,l.yg)("inlineCode",{parentName:"p"},"top"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"right"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"bottom"),", and ",(0,l.yg)("inlineCode",{parentName:"p"},"left")," properties."),(0,l.yg)("p",null,"We could use these positioning properties to vertically align contents."),(0,l.yg)("h3",{id:"example-5"},"Example:"),(0,l.yg)("p",null,"Using the ",(0,l.yg)("inlineCode",{parentName:"p"},"CSS")," properties ",(0,l.yg)("inlineCode",{parentName:"p"},"position: relative")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"position; absolute")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"margin; auto"),", You can vertically align contents to the center. However, this is possible only when the following conditions are met:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"The parent element must have the ",(0,l.yg)("inlineCode",{parentName:"li"},"position: relative")," property. This is to ensure that the positioning of the element occurs solely within the parent container and does not extend outside it."),(0,l.yg)("li",{parentName:"ul"},"The parent element should have a specified ",(0,l.yg)("inlineCode",{parentName:"li"},"height"),"."),(0,l.yg)("li",{parentName:"ul"},"The child element must have the ",(0,l.yg)("inlineCode",{parentName:"li"},"position: absolute")," property"),(0,l.yg)("li",{parentName:"ul"},"The child element should have the positioned properties: ",(0,l.yg)("inlineCode",{parentName:"li"},"top: 0;")," ",(0,l.yg)("inlineCode",{parentName:"li"},"bottom: 0;")," ",(0,l.yg)("inlineCode",{parentName:"li"},"left: 0;")," ",(0,l.yg)("inlineCode",{parentName:"li"},"right: 0;")),(0,l.yg)("li",{parentName:"ul"},"The child element should have a specified ",(0,l.yg)("inlineCode",{parentName:"li"},"height")," as well.")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"HTML CODE:")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-html"},'<html>\n  <body>\n    <div class="parent-element">\n      <div class="child-element">Center text!</div>\n    </div>\n  </body>\n</html>\n')),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"CSS CODE:")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-css"},".parent-element {\n  position: relative;\n  height: 50vh;\n  border: 1px solid black;\n}\n\n.child-element {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  height: 20px; /* requires explicit height*/\n  border: 1px solid black;\n  text-align: center;\n}\n")),(0,l.yg)("div",{className:"centered-image"},(0,l.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-02-13-css-vertical-align/6.png",style:{width:"450px"},alt:"css vertical alignment"})),(0,l.yg)("h2",{id:"vertical-alignment-using-css-transforms"},"Vertical alignment using css transforms"),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"translate()")," ",(0,l.yg)("inlineCode",{parentName:"p"},"CSS")," property repositions an element in both horizontal and vertical directions."),(0,l.yg)("p",null,"We will give examples on how to use the translate property."),(0,l.yg)("h3",{id:"example-1-2"},"Example 1"),(0,l.yg)("p",null,"Using the ",(0,l.yg)("inlineCode",{parentName:"p"},"CSS")," properties ",(0,l.yg)("inlineCode",{parentName:"p"},"position: relative")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"position; absolute")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"transform: translate(-50%, -50%)"),", You can vertically and horizontally align contents to the center. This has been a popular way to vertically align contents. However this is possible only when the following conditions are met:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"The parent element must have the ",(0,l.yg)("inlineCode",{parentName:"li"},"position: relative")," property."),(0,l.yg)("li",{parentName:"ul"},"The parent element should have a specified ",(0,l.yg)("inlineCode",{parentName:"li"},"height"),"."),(0,l.yg)("li",{parentName:"ul"},"The child element must have the ",(0,l.yg)("inlineCode",{parentName:"li"},"position: absolute")," property."),(0,l.yg)("li",{parentName:"ul"},"The child element should have the positioned properties: ",(0,l.yg)("inlineCode",{parentName:"li"},"top: 50%;")," ",(0,l.yg)("inlineCode",{parentName:"li"},"left: 50%;"),"."),(0,l.yg)("li",{parentName:"ul"},"The child element should have the translate property: ",(0,l.yg)("inlineCode",{parentName:"li"},"transform: translate(-50%, -50%);"),". This property repositions the child element to fit into the center of the parent element.")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"HTML CODE:")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-html"},'<html>\n  <body>\n    <div class="parent-element">\n      <div class="child-element">Center text!</div>\n    </div>\n  </body>\n</html>\n')),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"CSS CODE:")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-css"},".parent-element {\n  position: relative;\n  height: 50vh;\n  border: 1px solid black;\n}\n\n.child-element {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n")),(0,l.yg)("div",{className:"centered-image"},(0,l.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-02-13-css-vertical-align/7.png",style:{width:"450px"},alt:"css vertical alignment"})),(0,l.yg)("h3",{id:"example-2-2"},"Example 2"),(0,l.yg)("p",null,"We can vertically align items only using the ",(0,l.yg)("inlineCode",{parentName:"p"},"CSS")," properties ",(0,l.yg)("inlineCode",{parentName:"p"},"position: relative")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"position; absolute")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"transform: translateY(-50%)"),","),(0,l.yg)("p",null,"We will update the ",(0,l.yg)("inlineCode",{parentName:"p"},"CSS")," code of the first example to show this:"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"CSS CODE:")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-css"},".parent-element {\n  position: relative;\n  height: 50vh;\n  border: 1px solid black;\n}\n\n.child-element {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n")),(0,l.yg)("div",{className:"centered-image"},(0,l.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-02-13-css-vertical-align/8.png",alt:"css vertical alignment"})),(0,l.yg)("h2",{id:"vertical-alignment-using-line-height"},"Vertical alignment using line-height"),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"line-height")," ",(0,l.yg)("inlineCode",{parentName:"p"},"CSS")," property specifies the height of a line box. It's widely used to specify the spacing between lines of text. On block-level elements, it sets the minimum height of line boxes within them. On non-replaced inline items, it defines the height used to compute the line box height."),(0,l.yg)("p",null,"We will give examples on how to use the line-height property to vertically align contents."),(0,l.yg)("h3",{id:"example-6"},"Example:"),(0,l.yg)("p",null,"Using the ",(0,l.yg)("inlineCode",{parentName:"p"},"CSS")," properties ",(0,l.yg)("inlineCode",{parentName:"p"},"line-height: [lineheight value]")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"height: [height value]"),", You can vertically align ",(0,l.yg)("inlineCode",{parentName:"p"},"HTML")," contents to the center. However this is possible only when the following conditions are met:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"The parent element should have a specified ",(0,l.yg)("inlineCode",{parentName:"li"},"height"),"."),(0,l.yg)("li",{parentName:"ul"},"The child element must have the ",(0,l.yg)("inlineCode",{parentName:"li"},"line-height")," property."),(0,l.yg)("li",{parentName:"ul"},"The ",(0,l.yg)("inlineCode",{parentName:"li"},"height")," of the parent element must be equal to the ",(0,l.yg)("inlineCode",{parentName:"li"},"line-height")," of the child element.")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"HTML CODE:")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-html"},'<html>\n  <body>\n    <div class="parent-element">\n      <div class="child-element">Center text!</div>\n    </div>\n  </body>\n</html>\n')),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"CSS CODE:")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-css"},".parent-element {\n  height: 100px;\n  background-color: #333;\n}\n\n.child-element {\n  line-height: 100px;\n  padding: 0 10px;\n  color: #fff;\n  text-decoration: none;\n  text-align: center;\n}\n")),(0,l.yg)("div",{className:"centered-image"},(0,l.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-02-13-css-vertical-align/2.png",style:{width:"450px"},alt:"css vertical alignment"})),(0,l.yg)("h2",{id:"vertical-alignment-using-inline-display-display-inline-and-vertical-align-middle"},"Vertical alignment using inline display (display: inline) and vertical-align: middle"),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"CSS's")," ",(0,l.yg)("inlineCode",{parentName:"p"},"vertical-align")," attribute specifies how elements on a line are aligned. This property works to aligning ",(0,l.yg)("inlineCode",{parentName:"p"},"inline")," elements only (and not ",(0,l.yg)("inlineCode",{parentName:"p"},"block")," elements)."),(0,l.yg)("h3",{id:"example-7"},"Example:"),(0,l.yg)("p",null,"In this example, with the ",(0,l.yg)("inlineCode",{parentName:"p"},"inline")," display and the ",(0,l.yg)("inlineCode",{parentName:"p"},"vertical-align")," property, You can vertically align contents to the center. However this is possible only when the following conditions are met:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"The parent element should have a specified ",(0,l.yg)("inlineCode",{parentName:"li"},"line-height"),". We do this to increase the line box so that the ",(0,l.yg)("inlineCode",{parentName:"li"},"vertical-align")," property uses to align the contents in the middle of that line-box."),(0,l.yg)("li",{parentName:"ul"},"The child element must have the ",(0,l.yg)("inlineCode",{parentName:"li"},"vertical-align")," property.")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"HTML CODE:")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-html"},'<html>\n  <body>\n    <div>\n      <a href="#">Some link</a>\n      <span>Some text</span>\n    </div>\n  </body>\n</html>\n')),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"CSS CODE:")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-css"},"div {\n  background: #fff;\n  margin: 10px;\n  line-height: 200px;\n  border: 1px solid #000;\n}\ndiv > * {\n  vertical-align: middle;\n  line-height: normal;\n}\na {\n  background-color: red;\n  color: white;\n  height: 20px;\n  border: solid 1px #666;\n  padding: 5px;\n}\n")),(0,l.yg)("div",{className:"centered-image"},(0,l.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-02-13-css-vertical-align/9.png",style:{width:"450px"},alt:"css vertical alignment"})),(0,l.yg)("h2",{id:"vertical-alignment-using-inline-block-display-display-inline-block-and-vertical-align-middle"},"Vertical alignment using inline-block display (display: inline-block) and vertical-align: middle"),(0,l.yg)("p",null,"In this example, with the ",(0,l.yg)("inlineCode",{parentName:"p"},"inline-block")," display and the ",(0,l.yg)("inlineCode",{parentName:"p"},"vertical-align")," property, You can vertically align contents to the center."),(0,l.yg)("h3",{id:"example-8"},"Example:"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"HTML CODE:")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-html"},'<html>\n  <body>\n    <div class="parent-element">\n      vertical align middle:\n      <div class="child-element"></div>\n    </div>\n  </body>\n</html>\n')),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"CSS CODE:")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-css"},".parent-element {\n  padding: 30px 10px;\n  border: 1px solid;\n}\n\n.child-element {\n  vertical-align: middle;\n  display: inline-block;\n  background: fuchsia;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n}\n")),(0,l.yg)("div",{className:"centered-image"},(0,l.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-02-13-css-vertical-align/10.png",style:{width:"450px"},alt:"css vertical alignment"})),(0,l.yg)("h2",{id:"vertical-alignment-using-before-pseudo-element-and-vertical-align-middle"},"Vertical Alignment using \u201cbefore\u201d pseudo-element and vertical-align: middle"),(0,l.yg)("p",null,"This type of alignment is usually called the ",(0,l.yg)("strong",{parentName:"p"},"ghost element")," alignment. This alignment employs using the ",(0,l.yg)("inlineCode",{parentName:"p"},"inline-block")," display property on a ghost (",(0,l.yg)("inlineCode",{parentName:"p"},"pseudo"),") element of the parent element, inherits the parent's element full height, then sets the ",(0,l.yg)("inlineCode",{parentName:"p"},"vertical-align: middle")," property for both the",(0,l.yg)("inlineCode",{parentName:"p"},"pseudo-element")," of the parent element and the child element."),(0,l.yg)("h3",{id:"example-9"},"Example:"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"HTML CODE:")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-html"},'<html>\n  <body>\n    <div class="parent-element">\n      <p>Child of parent element with pseudo ghost element</p>\n    </div>\n  </body>\n</html>\n')),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"CSS CODE:")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-css"},'.parent-element {\n  background: #fff;\n  width: 240px;\n  height: 200px;\n  margin: 15px;\n  color: #fff;\n  resize: vertical;\n  overflow: auto;\n  padding: 20px;\n  border: 1px solid #000;\n  position: relative;\n}\n.parent-element::before {\n  content: " ";\n  display: inline-block;\n  height: 100%;\n  width: 1%;\n  vertical-align: middle;\n}\n.parent-element p {\n  display: inline-block;\n  vertical-align: middle;\n  width: 190px;\n  margin: 0;\n  padding: 10px;\n  background: #83d483;\n}\n')),(0,l.yg)("div",{className:"centered-image"},(0,l.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-02-13-css-vertical-align/11.png",style:{width:"450px"},alt:"css vertical alignment"})),(0,l.yg)("h2",{id:"conclusion"},"Conclusion"),(0,l.yg)("p",null,"In this article, we examined some CSS techniques for vertical alignment of contents. Using these techniques will make it easy to align contents vertically on your webpages or web applications."))}y.isMDXComponent=!0}}]);