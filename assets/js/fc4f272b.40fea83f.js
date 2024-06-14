"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[72945],{58860:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var o=n(37953);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,g=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return n?o.createElement(g,r(r({ref:t},c),{},{components:n})):o.createElement(g,r({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22032:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>m});n(37953);var o=n(58860);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={title:"How to Use Nodemon to Automatically Restart Node.js Applications",description:"This guide shows you how to install and use Nodemon to streamline your development process.",slug:"nodemon",authors:"necati",tags:["dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-04-30-nodemon/social.png",hide_table_of_contents:!1},l=void 0,p={permalink:"/blog/nodemon",source:"@site/blog/2024-04-30-nodemon.md",title:"How to Use Nodemon to Automatically Restart Node.js Applications",description:"This guide shows you how to install and use Nodemon to streamline your development process.",date:"2024-04-30T00:00:00.000Z",formattedDate:"April 30, 2024",tags:[{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:5.845,hasTruncateMarker:!1,authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],frontMatter:{title:"How to Use Nodemon to Automatically Restart Node.js Applications",description:"This guide shows you how to install and use Nodemon to streamline your development process.",slug:"nodemon",authors:"necati",tags:["dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-04-30-nodemon/social.png",hide_table_of_contents:!1},prevItem:{title:"Refine Investment Announcement",permalink:"/blog/refine-investment-announcement"},nextItem:{title:"Introduction to Nest JS",permalink:"/blog/nest-js"},relatedPosts:[{title:"4 Ways to Generate UUIDs in Node.js",description:"We'll explore how UUIDs work in Node.js and how they can help keep data distinct and make your projects easier to scale.",permalink:"/blog/node-js-uuid",formattedDate:"April 24, 2024",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:5.355,date:"2024-04-24T00:00:00.000Z"},{title:"Kubernetes CrashLoopBackOff - What is it and how to fix it?",description:"In this article, we will discuss the Kubernetes CrashLoopBackOff error, its causes, and how to fix it.",permalink:"/blog/crashloopbackoff-kubernetes",formattedDate:"November 22, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.76,date:"2023-11-22T00:00:00.000Z"},{title:"Using Google Lighthouse to improve app performance",description:"Learn how to use the Google Chrome Lighthouse performance audit tool to identify and improve problems with your app.",permalink:"/blog/lighthouse-google-chrome",formattedDate:"May 24, 2024",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:18.65,date:"2024-05-24T00:00:00.000Z"}],authorPosts:[{title:"Beginner's Guide to React useId Hook",description:"We'll explore the React useId hook, its use cases, and how it can improve our development process.",permalink:"/blog/react-useid",formattedDate:"May 14, 2024",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:7.41,date:"2024-05-14T00:00:00.000Z"},{title:"Building a CRUD app with Material UI and Strapi in React",description:"How to build CRUD admin panel with Material UI?",permalink:"/blog/build-admin-panel-with-material-ui-and-strapi",formattedDate:"July 21, 2022",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:16.78,date:"2022-07-21T00:00:00.000Z"},{title:"What is Headless CMS?",description:"We'll check out what a headless CMS is and its benefits.",permalink:"/blog/headless-cms",formattedDate:"May 10, 2024",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:6.4,date:"2024-05-10T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},m=[{value:"Update: Enhanced Watch Mode in Node.js Version 22",id:"update-enhanced-watch-mode-in-nodejs-version-22",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Installing Nodemon",id:"installing-nodemon",level:2},{value:"Using Nodemon",id:"using-nodemon",level:2},{value:"Advanced Configuration",id:"advanced-configuration",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:m},u="wrapper";function g(e){var{components:t}=e,n=r(e,["components"]);return(0,o.yg)(u,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){a(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"update-enhanced-watch-mode-in-nodejs-version-22"},"Update: Enhanced Watch Mode in Node.js Version 22"),(0,o.yg)("p",null,"One of the standout features in the latest release of Node.js, ",(0,o.yg)("a",{parentName:"p",href:"https://nodejs.org/en/blog/announcements/v22-release-announce"},"version 22"),", is the improved watch mode. This feature is now considered stable, which means it's no longer experimental and can be relied upon for regular use."),(0,o.yg)("p",null,"Watch mode simplifies developers' lives by automatically restarting the Node.js process whenever it detects changes in the files being monitored. This is particularly useful if you're working on large projects where manual restarts can be tedious and time-consuming."),(0,o.yg)("p",null,"Previously, developers might have used tools like Nodemon and Watchman to manage file changes, especially on Windows, where detecting these changes could be challenging. Watch mode offers a more integrated and straightforward approach, eliminating the need for external tools and streamlining the development process."),(0,o.yg)("p",null,"By using watch mode, you no longer need to manually restart your server or tools like Nodemon after making changes to your code. This saves time and allows you to see the effects of your changes immediately, making your development workflow much more efficient."),(0,o.yg)("h2",{id:"introduction"},"Introduction"),(0,o.yg)("p",null,"As a developer, you know how tedious it is to restart the application every time you tweak the code. Nodemon eliminates this hassle by automatically restarting the app whenever any change is detected. It's incredibly helpful as it lets you concentrate on coding without interruption."),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://nodemon.io/"},"Nodemon")," watches the files in your project and instantly applies updates by restarting your app\u2014no more manual resets. This has noticeably sped up my development process, making it smoother and more productive. It\u2019s especially crucial in a fast-paced work environment where every second counts."),(0,o.yg)("h2",{id:"installing-nodemon"},"Installing Nodemon"),(0,o.yg)("p",null,"I just went through setting up Nodemon. You install it using npm, the Node.js package manager. Just open your terminal and type:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"npm install -g nodemon\n")),(0,o.yg)("p",null,"This installs Nodemon globally on your system, so you can use it for any project. To make sure it's installed correctly, you can check its version with:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"nodemon --version\n")),(0,o.yg)("p",null,"If it shows the version, you're all set! Nodemon will now automatically restart your Node.js applications whenever you make changes. It\u2019s a real time-saver, making it smoother to develop without breaking your flow."),(0,o.yg)("h2",{id:"using-nodemon"},"Using Nodemon"),(0,o.yg)("p",null,"Here's a simple Express.js application example using Nodemon:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-javascript"},'// 1. First, install the Express.js and Nodemon modules\nconst express = require("express");\nconst app = express();\n\n// 2. Define a simple endpoint to listen for HTTP requests\napp.get("/", (req, res) => {\n  res.send("Hello, World!");\n});\n\n// 3. Start listening for the application on a specific port\nconst port = 3000;\napp.listen(port, () => {\n  console.log(`Server successfully connected to port ${port}.`);\n});\n')),(0,o.yg)("p",null,"This represents a basic Express.js application. The main file can be named ",(0,o.yg)("inlineCode",{parentName:"p"},"app.js"),", for example. Now let's demonstrate how to use Nodemon to automatically restart this application."),(0,o.yg)("p",null,"First, make sure you're in your project directory where your Node.js application, like an Express.js app, is located."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Install Express.js and Nodemon if you haven\u2019t already.")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"npm install express nodemon\n")),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},"After installing Nodemon, using it to automatically restart your Node.js apps is simple. Navigate to the directory where your Node.js application is located using the terminal or command prompt. Once you're in the project directory, you can start your Node.js application with Nodemon by typing:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"nodemon app.js\n")),(0,o.yg)("p",null,"This command fires up your application with Nodemon, so it automatically restarts whenever you change any files. For instance, if you update the response in your ",(0,o.yg)("inlineCode",{parentName:"p"},"app.js")," from 'Hello, World!' to something else and save, Nodemon immediately restarts and applies the update without you needing to do anything."),(0,o.yg)("p",null,"Also, here\u2019s what you typically see in the terminal when you start:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},"[nodemon] 2.0.15\n[nodemon] to restart at any time, enter `rs`\n[nodemon] watching path(s): *.*\n[nodemon] watching extensions: js,json\n[nodemon] starting `node app.js`\nServer successfully connected to port 3000.\n")),(0,o.yg)("p",null,"It shows Nodemon is watching all your files and is ready to restart anytime you make edits."),(0,o.yg)("p",null,"In this output:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"[nodemon] 2.0.15"),": This indicates the version of Nodemon being used."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"[nodemon] to restart at any time, enter 'rs'"),": This message informs you that you can manually restart the application at any time by entering 'rs' in the terminal."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"[nodemon] watching path(s): *.*"),": Nodemon is watching for changes in all files and directories."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"[nodemon] watching extensions: js,json"),": Nodemon is specifically watching for changes in JavaScript and JSON files."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"[nodemon] starting 'node app.js'"),": Nodemon is starting the Node.js application (",(0,o.yg)("inlineCode",{parentName:"li"},"app.js")," in this case)."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"Server successfully connected to port 3000."),": This message indicates that the Express.js server has successfully started and is listening on port 3000.")),(0,o.yg)("h2",{id:"advanced-configuration"},"Advanced Configuration"),(0,o.yg)("p",null,"I\u2019ve been diving deeper into Nodemon\u2019s capabilities and found some cool ways to customize its behavior to better suit our projects. Nodemon allows you to tailor its restart rules according to our specific needs, which is super handy."),(0,o.yg)("p",null,"Here\u2019s a breakdown:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"File Watch Patterns"),": You can set Nodemon to watch only specific directories. This is great because it lets us focus on crucial parts of our project without getting distracted by unnecessary restarts."),(0,o.yg)("p",{parentName:"li"},"For instance, if you only want to watch the ",(0,o.yg)("inlineCode",{parentName:"p"},"src")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"config")," directories, your config would look like this:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "watch": ["src", "config"]\n}\n'))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Ignore Patterns"),": We can also tell Nodemon to ignore certain directories that don\u2019t impact our app\u2019s functionality, like log files or public assets. This means Nodemon won\u2019t restart when changes occur in these areas."),(0,o.yg)("p",{parentName:"li"},"Here\u2019s how you could set it up to ignore the ",(0,o.yg)("inlineCode",{parentName:"p"},"logs")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"public")," directories:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "ignore": ["logs", "public"]\n}\n'))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Delaying Restarts"),": If rapid successive changes are causing too many restarts, we can introduce a delay. This gives us a buffer after making changes before Nodemon restarts the app, helping stabilize our development environment."),(0,o.yg)("p",{parentName:"li"},"For adding a one-second delay, you\u2019d configure it like this:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "delay": 1000\n}\n')))),(0,o.yg)("p",null,"These tweaks have made a noticeable difference in managing the development flow, especially in complex projects. I think implementing these could really streamline how we handle automatic restarts in our development process!"),(0,o.yg)("h2",{id:"conclusion"},"Conclusion"),(0,o.yg)("p",null,"As we wrap up discussing Nodemon, I wanted to share some common issues you might run into and how to troubleshoot them. Even though Nodemon simplifies our development by auto-restarting our apps, sometimes it might not work as expected."),(0,o.yg)("p",null,"Here are a few things to check if you encounter problems:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Monitoring Files"),": If Nodemon isn't restarting when you change files, double-check your configuration to ensure it\u2019s watching the right files and directories. Sometimes, if we ignore too many files, Nodemon might miss changes in crucial areas.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Crashes or Non-starts"),": Make sure there are no errors in your Node.js app and that all environment variables are set correctly. These can often stop Nodemon from running properly.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Permissions on Windows"),": If you\u2019re on Windows and facing permission issues, try running Nodemon in an administrator command prompt, which can resolve these problems.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Software Updates"),": Lastly, keeping Nodemon and Node.js updated to their latest versions can solve a lot of known issues."))))}g.isMDXComponent=!0}}]);