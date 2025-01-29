"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[56621],{58860:(e,n,a)=>{a.d(n,{xA:()=>m,yg:()=>v});var t=a(37953);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=t.createContext({}),p=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},m=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(a),u=i,v=c["".concat(s,".").concat(u)]||c[u]||g[u]||r;return a?t.createElement(v,o(o({ref:n},m),{},{components:a})):t.createElement(v,o({ref:n},m))}));function v(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},47434:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>m,contentTitle:()=>s,default:()=>v,frontMatter:()=>l,metadata:()=>p,toc:()=>c});a(37953);var t=a(58860);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})),e}function o(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}const l={title:"Next.js environment variables",description:"We will take a closer look at environment variables in Next.js",slug:"next-js-environment-variables",authors:"michael",tags:["nextjs"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-07-next-env/social-2.png",hide_table_of_contents:!1},s=void 0,p={permalink:"/blog/next-js-environment-variables",source:"@site/blog/2024-12-10-next-env.md",title:"Next.js environment variables",description:"We will take a closer look at environment variables in Next.js",date:"2024-12-10T00:00:00.000Z",formattedDate:"December 10, 2024",tags:[{label:"nextjs",permalink:"/blog/tags/nextjs"}],readingTime:7.875,hasTruncateMarker:!1,authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],frontMatter:{title:"Next.js environment variables",description:"We will take a closer look at environment variables in Next.js",slug:"next-js-environment-variables",authors:"michael",tags:["nextjs"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-07-next-env/social-2.png",hide_table_of_contents:!1},prevItem:{title:"Material UI button in React",permalink:"/blog/mui-button-in-react"},nextItem:{title:"rem vs em - Everything you need to know",permalink:"/blog/rem-vs-em"},relatedPosts:[{title:"Next.js vs React - A Beginner's Guide",description:"We briefly run through the innovation driven differences between React and Next.js in rendering behavior, routing, data fetching, backend API development and app configuration.",permalink:"/blog/next-js-vs-react",formattedDate:"October 17, 2024",authors:[{name:"Marvel Ken",title:"Software Developer",imageURL:"/img/generic-profile.png",key:"marvel_ken"}],readingTime:24.44,date:"2024-10-17T00:00:00.000Z"},{title:"Next.js 13 - What are the new features?",description:"Next.js 13 is out! Let's see the new features in this release.",permalink:"/blog/new-features-in-next-js-13",formattedDate:"November 12, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:6.125,date:"2022-11-12T00:00:00.000Z"},{title:"How to use Next.js API Routes?",description:"We will deep dive into Next.js API Routes with Dynamic Routes.",permalink:"/blog/next-js-api-routes",formattedDate:"July 3, 2024",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:15.875,date:"2024-07-03T00:00:00.000Z"}],authorPosts:[{title:"Next.js 13 - What are the new features?",description:"Next.js 13 is out! Let's see the new features in this release.",permalink:"/blog/new-features-in-next-js-13",formattedDate:"November 12, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:6.125,date:"2022-11-12T00:00:00.000Z"},{title:"Introduction to Next.js Link component with examples",description:"A guide for navigation between pages using Next.js Link",permalink:"/blog/next-js-link-component",formattedDate:"May 29, 2024",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:10.805,date:"2024-05-29T00:00:00.000Z"},{title:"Nextjs image optimization with examples",description:"Built-in image optimization using the next image component",permalink:"/blog/using-next-image",formattedDate:"June 5, 2024",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:15.81,date:"2024-06-05T00:00:00.000Z"}]},m={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"TL;DR: Next.js Environment Variables",id:"tldr-nextjs-environment-variables",level:4},{value:"What are Environment Variables?",id:"what-are-environment-variables",level:2},{value:"How to use environment variables in Next.js",id:"how-to-use-environment-variables-in-nextjs",level:2},{value:"Managing Environment Variables: Best Practices",id:"managing-environment-variables-best-practices",level:2},{value:"Managing Environment Variables Securely",id:"managing-environment-variables-securely",level:3},{value:"Performance Impact of Environment Variables",id:"performance-impact-of-environment-variables",level:3},{value:"Cross-Platform Development",id:"cross-platform-development",level:3},{value:"Using environment variables in the browser",id:"using-environment-variables-in-the-browser",level:2},{value:"Types of Environment Variables in Next.js",id:"types-of-environment-variables-in-nextjs",level:2},{value:"Default environment variables",id:"default-environment-variables",level:4},{value:"Development environment variables",id:"development-environment-variables",level:4},{value:"Production environment variables",id:"production-environment-variables",level:4},{value:"Environment variable load order",id:"environment-variable-load-order",level:4},{value:"Test Environment Variables",id:"test-environment-variables",level:2},{value:"Conclusion",id:"conclusion",level:2}],g={toc:c},u="wrapper";function v(e){var{components:n}=e,a=o(e,["components"]);return(0,t.yg)(u,r(function(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{},t=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),t.forEach((function(n){i(e,n,a[n])}))}return e}({},g,a),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"This article was last updated on December 10, 2024, to add clear introduction and new section to Next.js ENV post..")),(0,t.yg)("h2",{id:"introduction"},"Introduction"),(0,t.yg)("h4",{id:"tldr-nextjs-environment-variables"},"TL;DR: Next.js Environment Variables"),(0,t.yg)("p",null,"In Next.js, environment variables come in very handy for storing API keys/URLs of sensitive nature in a proper and productive manner. They might be set up in files beginning with a dot {.env.} and would be autoloaded in the running Node.js process. You should expose these variables to your browser using the prefix: NEXT",(0,t.yg)("em",{parentName:"p"},"PUBLIC"),"."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Basic Setup: Put variables in .env.local:")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"API_URL=https://api.example.com\nNEXT_PUBLIC_ANALYTICS_ID=UA-123456\n\nAccess them in code:\n\nconst apiUrl = process.env.API_URL;\nconst analyticsId = process.env.NEXT_PUBLIC_ANALYTICS_ID\n")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Type: .env.development, .env.production, or .env.test for different environments.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Order of Loading: Next.js checks .env.local first, then .env.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Best Practices: Keep secrets secure, do not commit .env files, and use cloud environment variable settings for production."))),(0,t.yg)("p",null,"Next.js is a React framework that provides many out-of-the-box solutions for building single-page web applications. Under the hood, it handles a lot of tooling and configuration intuitively, making the process of developing applications a breeze."),(0,t.yg)("p",null,"One of the configurations Next.js handles by default are ",(0,t.yg)("strong",{parentName:"p"},"environment variables"),". Built-in support for environment variables got a lot easier in Next.js versions 9.4 and later. This means using environment variables in your applications has become seamless and straightforward."),(0,t.yg)("p",null,"Steps we'll cover:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#what-are-environment-variables"},"What are Environment Variables?")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#how-to-use-environment-variables-in-nextjs"},"How to use environment variables in Next.js")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#managing-environment-variables-best-practices"},"Managing Environment Variables: Best Practices"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#managing-environment-variables-securely"},"Managing Environment Variables Securely")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#performance-impact-of-environment-variables"},"Performance Impact of Environment Variables")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#cross-platform-development"},"Cross-Platform Development")))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#using-environment-variables-in-the-browser"},"Using environment variables in the browser")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#types-of-environment-variables-in-nextjs"},"Types of Environment Variables in Next.js"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#default-environment-variables"},"Default environment variables")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#development-environment-variables"},"Development environment variables")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#production-environment-variables"},"Production environment variables")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#environment-variable-load-order"},"Environment variable load order")))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#test-environment-variables"},"Test Environment Variables"))),(0,t.yg)("h2",{id:"what-are-environment-variables"},"What are Environment Variables?"),(0,t.yg)("p",null,"An environment variable is a key-value pair (key=value) in which a value (or data) is assigned to a key (variable)."),(0,t.yg)("p",null,"Environment variables are used in software development for many use cases; for providing configurations for different application running environments (e.g. development and production environments); for keeping sensitive application data out of application code from malicious users;"),(0,t.yg)("p",null,"The following are valid examples of environment variables:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"API_KEY='c4W39R56&gyh_ujij89$'\nAPI_KEY=c4W39R56&gyh_ujij89$\nACCESS_TOKEN='A54EzZoU7o33SByHk1qr'\n")),(0,t.yg)("h2",{id:"how-to-use-environment-variables-in-nextjs"},"How to use environment variables in Next.js"),(0,t.yg)("p",null,"Basically, environment variables are added into Next.js apps through a ",(0,t.yg)("inlineCode",{parentName:"p"},"env.local")," file. This will then load every variable into the Node.js process. ",(0,t.yg)("strong",{parentName:"p"},"Environment variables in Next.js")," are only available for use on the server. This means we can only use them in any of Next.js data fetching methods (getServerSideProps, getStaticProps, and getStaticPaths) or API routes."),(0,t.yg)("p",null,"For example, given a ",(0,t.yg)("inlineCode",{parentName:"p"},"env.local")," file in your project root directory with the following content:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash",metastring:'title="env.local"',title:'"env.local"'},"API_URL='https://dev.to/api/api/articles/{id}/unpublish'\nAPI_KEY='your_secret_api_key_here'\n")),(0,t.yg)("p",null,"Next.js will automatically load the variables as ",(0,t.yg)("inlineCode",{parentName:"p"},"process.env.API_URL")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"process.env.API_KEY"),"\nwhich we can then use as shown below:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript",metastring:'title="pages/index.js"',title:'"pages/index.js"'},'export async function getServerSideProps() {\n  const response = await axios({\n    method: "put",\n    url: process.env.API_URL,\n    header: {\n      Authorization: process.env.API_KEY,\n    },\n    data: {\n      id: 12,\n    },\n  });\n}\n')),(0,t.yg)("p",null,"NOTE: You should always put the ",(0,t.yg)("inlineCode",{parentName:"p"},"env.local")," file in your project root directory to avoid Next.js running into errors."),(0,t.yg)("p",null,"We can also reference other variables in the same ",(0,t.yg)("inlineCode",{parentName:"p"},"env.local")," file using a dollar (",(0,t.yg)("inlineCode",{parentName:"p"},"$"),") sign."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash",metastring:'title="env.local"',title:'"env.local"'},"ADMIN_NAME='John'\nADMIN_ID=1234\nPROTECTED_URL='https://api.example.com?admin=$ADMIN_NAME&id=$ADMIN_ID'\n")),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"process.env.PROTECTED_URL")," will now evaluate to ",(0,t.yg)("inlineCode",{parentName:"p"},"https://api.example.com?admin=John&id=1234"),"."),(0,t.yg)("h2",{id:"managing-environment-variables-best-practices"},"Managing Environment Variables: Best Practices"),(0,t.yg)("h3",{id:"managing-environment-variables-securely"},"Managing Environment Variables Securely"),(0,t.yg)("p",null,"Security is crucial when working with environment variables. Here are some best practices:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("strong",{parentName:"li"},"Keep Secrets Safe"),": Use tools like AWS Secrets Manager, Azure Key Vault, or HashiCorp Vault to securely store sensitive information like API keys or database credentials, preventing accidental exposure."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("strong",{parentName:"li"},"Encryption"),": Encrypt ",(0,t.yg)("inlineCode",{parentName:"li"},".env")," files before sharing. Use a tool like ",(0,t.yg)("inlineCode",{parentName:"li"},"gpg")," for encryption:")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"  gpg --symmetric --cipher-algo AES256 .env\n")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Environment-Specific Variables: Maintain separate files for different environments, such as:"),(0,t.yg)("li",{parentName:"ul"},".env.development for local development."),(0,t.yg)("li",{parentName:"ul"},".env.production for live apps.")),(0,t.yg)("p",null,"By following these practices, you can minimize the risk of leaks or misuse of sensitive data."),(0,t.yg)("h3",{id:"performance-impact-of-environment-variables"},"Performance Impact of Environment Variables"),(0,t.yg)("p",null,"Improper use of environment variables can affect your app\u2019s performance. Here\u2019s how to optimize:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Keep It Light: Only load the variables you need. Avoid adding unused variables to your .env files."),(0,t.yg)("li",{parentName:"ul"},"Static vs. Dynamic Variables: For variables that don\u2019t change at runtime (e.g., API endpoints), load them at build time. For example, in next.config.js:")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},'module.exports = {\n  env: {\n    API_URL: "https://api.example.com",\n  },\n};\n')),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Tree-Shaking: Frameworks like Next.js remove unused variables during builds. Clean up unused code to ensure no unnecessary data is included.")),(0,t.yg)("p",null,"Optimizing variable handling improves your app\u2019s performance and reduces overhead."),(0,t.yg)("h3",{id:"cross-platform-development"},"Cross-Platform Development"),(0,t.yg)("p",null,"Environment variables may behave differently across platforms. Here\u2019s how to maintain consistency:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Local vs. Cloud: Variables in local .env files won\u2019t automatically work on cloud platforms like Vercel or Netlify. Instead, configure them through the platform\u2019s dashboard.")),(0,t.yg)("p",null,"Example for Vercel: 1. Go to your project settings. 2. Add variables under \u201cEnvironment Variables.\u201d 3. Deploy your app."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Docker Support: Use docker-compose.yml to pass variables:")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},"services:\n  app:\n    build: .\n    environment:\n      - API_URL=https://api.example.com\n")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Serverless Functions: For serverless environments (e.g., AWS Lambda), configure variables directly in the function settings or use .env files with deployment tools.")),(0,t.yg)("p",null,"By addressing platform-specific differences, you can ensure seamless cross-environment compatibility for your app."),(0,t.yg)("h2",{id:"using-environment-variables-in-the-browser"},"Using environment variables in the browser"),(0,t.yg)("p",null,"Like we mentioned earlier, Next.js env is only available for use on the server by default. However, Next.js provides us a solution to expose the variables to the browser. By adding a ",(0,t.yg)("inlineCode",{parentName:"p"},"NEXT_PUBLIC_")," prefix to a variable defined in ",(0,t.yg)("inlineCode",{parentName:"p"},"env.local")," Next.js will automatically make it accessible for use in the browser and anywhere else in our application."),(0,t.yg)("p",null,"For example:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"# env.local\nNEXT_PUBLIC_GOOGLE_ANALYTICS_ID='your_google_analytics_id_here'\n")),(0,t.yg)("p",null,"Now we can use it in our code like so:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript",metastring:'title="pages/_app.js"',title:'"pages/_app.js"'},"...\nreturn (\n    <>\n        <Script strategy=\"lazyOnload\" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`} />\n        <Script strategy=\"lazyOnload\">\n            {`\n                window.dataLayer = window.dataLayer || [];\n                function gtag(){dataLayer.push(arguments);}\n                gtag('js', new Date());\n                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', {\n                page_path: window.location.pathname,\n                });\n            `}\n        <\/Script>\n        ...\n     </>\n)\n")),(0,t.yg)("p",null,"Here's what is going on above."),(0,t.yg)("p",null,"In ",(0,t.yg)("inlineCode",{parentName:"p"},"env.local")," we defined a ",(0,t.yg)("inlineCode",{parentName:"p"},"NEXT_PUBLIC_GOOGLE_ANALYTICS_ID")," variable which holds the value for our Google analytics ID. The prefix ",(0,t.yg)("inlineCode",{parentName:"p"},"NEXT_PUBLIC_")," lets us use the variable ",(0,t.yg)("inlineCode",{parentName:"p"},"process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID")," in client side code (",(0,t.yg)("inlineCode",{parentName:"p"},"/pages/_app.js"),"). Note that ","_","app.js runs on both the client and server."),(0,t.yg)("p",null,"We added two ",(0,t.yg)("inlineCode",{parentName:"p"},"<Script/>")," components from Next.js to add Javascript code to configure google analytics. The ",(0,t.yg)("inlineCode",{parentName:"p"},"<Script/>")," component optimizes external scripts that are loaded in a Next.js application by using strategies to improve browser and user experience."),(0,t.yg)("p",null,"In the previous code, we added ",(0,t.yg)("inlineCode",{parentName:"p"},"lazyOnload")," strategy to both scripts; this is to tell the browser we want the analytics to be generated when all other resources have been fetched and the browser is idle."),(0,t.yg)("h2",{id:"types-of-environment-variables-in-nextjs"},"Types of Environment Variables in Next.js"),(0,t.yg)("p",null,"A single ",(0,t.yg)("inlineCode",{parentName:"p"},".env.local")," file is usually all you need for your environment variables but at times you may want to specify different configurations for different application environments. Next.js allows us to take charge of how we want to configure the variables. There are basically three application environments we'll talk about in this article. These are:"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"Development environment (initiated with ",(0,t.yg)("inlineCode",{parentName:"li"},"next dev"),")"),(0,t.yg)("li",{parentName:"ol"},"Production environment (initiated with ",(0,t.yg)("inlineCode",{parentName:"li"},"next start"),")"),(0,t.yg)("li",{parentName:"ol"},"Test environment")),(0,t.yg)("h4",{id:"default-environment-variables"},"Default environment variables"),(0,t.yg)("p",null,"A ",(0,t.yg)("inlineCode",{parentName:"p"},".env")," file can be used to specify a default configuration for all three application environments. Note that if the same variables are declared in a ",(0,t.yg)("inlineCode",{parentName:"p"},".env.local"),", it'll override the defaults. ",(0,t.yg)("inlineCode",{parentName:"p"},".env")," and ",(0,t.yg)("inlineCode",{parentName:"p"},".env.local")," files must be added to ",(0,t.yg)("inlineCode",{parentName:"p"},".gitignore")," since they are where sensitive application data are stored."),(0,t.yg)("h4",{id:"development-environment-variables"},"Development environment variables"),(0,t.yg)("p",null,"You can specify development environment variables in a ",(0,t.yg)("inlineCode",{parentName:"p"},".env.development")," file. This file should be kept in your project directory."),(0,t.yg)("h4",{id:"production-environment-variables"},"Production environment variables"),(0,t.yg)("p",null,"Use a ",(0,t.yg)("inlineCode",{parentName:"p"},".env.production")," file for ",(0,t.yg)("strong",{parentName:"p"},"environment variables")," that are particular to production. This file should also be kept in your project directory."),(0,t.yg)("p",null,"For example, to add environment variables to your live deployments (if you use ",(0,t.yg)("a",{parentName:"p",href:"https://vercel.com"},"Vercel")," to deploy your application), you can add environment variables to a project by going to ",(0,t.yg)("em",{parentName:"p"},"Settings")," on your dashboard and clicking on ",(0,t.yg)("em",{parentName:"p"},"Environment Variables"),". The UI should look like below:"),(0,t.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-07-next-env/deploy.png",alt:"deploy"}),(0,t.yg)("h4",{id:"environment-variable-load-order"},"Environment variable load order"),(0,t.yg)("p",null,"Next.js will always search for an environment variable in five places in your application code in the following order until it's found:"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"process.env")," (start)"),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},".env.$(NODE_ENV).local")," (where ",(0,t.yg)("inlineCode",{parentName:"li"},"NODE_ENV")," can be any of ",(0,t.yg)("inlineCode",{parentName:"li"},"development"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"production")," or ",(0,t.yg)("inlineCode",{parentName:"li"},"test"),")"),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},".env.local")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},".env.$(NODE_ENV)")," (where ",(0,t.yg)("inlineCode",{parentName:"li"},"NODE_ENV")," can be any of ",(0,t.yg)("inlineCode",{parentName:"li"},"development"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"production")," or ",(0,t.yg)("inlineCode",{parentName:"li"},"test"),")"),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},".env")," (end)")),(0,t.yg)("p",null,"So for example if you define a variable in ",(0,t.yg)("inlineCode",{parentName:"p"},".env.development.local")," and then redefine it in ",(0,t.yg)("inlineCode",{parentName:"p"},"env.development"),", the value in ",(0,t.yg)("inlineCode",{parentName:"p"},"env.development.local")," will be used."),(0,t.yg)("h2",{id:"test-environment-variables"},"Test Environment Variables"),(0,t.yg)("p",null,"We can also use a ",(0,t.yg)("inlineCode",{parentName:"p"},".env.test")," to specify environment variables for testing purposes. In order to use default test environment variables, you must set ",(0,t.yg)("inlineCode",{parentName:"p"},"NODE_ENV")," to test. Here's an example showing how you can do this in ",(0,t.yg)("inlineCode",{parentName:"p"},"package.json"),":"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'  ...\n"scripts": {\n    "dev": "next dev",\n    "start": "next start",\n    "test": "NODE_ENV=test mocha spec"\n}\n  ...\n')),(0,t.yg)("p",null,"Other tools like jest will configure the settings for you by automatically setting the environment to ",(0,t.yg)("inlineCode",{parentName:"p"},"test"),"."),(0,t.yg)("p",null,"Note that Next.js will configure your ",(0,t.yg)("strong",{parentName:"p"},"environment variables")," differently when you're in a test environment. Variables from ",(0,t.yg)("inlineCode",{parentName:"p"},".env.local"),", ",(0,t.yg)("inlineCode",{parentName:"p"},".env.production")," or ",(0,t.yg)("inlineCode",{parentName:"p"},".env.development")," won't be loaded in order for test executions to use the same default configuration. You must include the ",(0,t.yg)("inlineCode",{parentName:"p"},".env.test")," file in your project directory to prevent it from being overridden by ",(0,t.yg)("inlineCode",{parentName:"p"},".env.local"),"."),(0,t.yg)("h2",{id:"conclusion"},"Conclusion"),(0,t.yg)("p",null,"In this article we learned about what environment variables are and how to use them in Next.js. We also implement how to define Next.js env's for different application running environments."))}v.isMDXComponent=!0}}]);