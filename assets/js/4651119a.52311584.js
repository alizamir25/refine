"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[18491],{58860:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>d});var n=a(37953);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),g=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=g(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=g(a),y=i,d=c["".concat(l,".").concat(y)]||c[y]||h[y]||r;return a?n.createElement(d,o(o({ref:t},p),{},{components:a})):n.createElement(d,o({ref:t},p))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var g=2;g<r;g++)o[g]=a[g];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},35412:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>g,toc:()=>c});a(37953);var n=a(58860);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}const s={title:"Creating testable React applications with Playwright",description:"We'll take a look at how to create testable React applications with Playwright.",slug:"playwright-react",authors:"peter_osah",tags:["react","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-06-04-playwright/social.png",hide_table_of_contents:!1},l=void 0,g={permalink:"/blog/playwright-react",source:"@site/blog/2024-06-04-playwright.md",title:"Creating testable React applications with Playwright",description:"We'll take a look at how to create testable React applications with Playwright.",date:"2024-06-04T00:00:00.000Z",formattedDate:"June 4, 2024",tags:[{label:"react",permalink:"/blog/tags/react"},{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:9.29,hasTruncateMarker:!1,authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],frontMatter:{title:"Creating testable React applications with Playwright",description:"We'll take a look at how to create testable React applications with Playwright.",slug:"playwright-react",authors:"peter_osah",tags:["react","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-06-04-playwright/social.png",hide_table_of_contents:!1},prevItem:{title:"Nextjs image optimization with examples",permalink:"/blog/using-next-image"},nextItem:{title:"Introduction to Next.js Link component with examples",permalink:"/blog/next-js-link-component"},relatedPosts:[{title:"How to Create Dynamic Forms in React CRUD app with Ant Design",description:"Easy way to creating dynamic forms in React CRUD apps with Ant Design",permalink:"/blog/react-crud-app-with-dynamic-form-ant-design",formattedDate:"November 17, 2022",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:25.18,date:"2022-11-17T00:00:00.000Z"},{title:"Zsh and Bash",description:"We'll explore the unique features of these tools and their similarities and differences.",permalink:"/blog/zsh-vs-bash",formattedDate:"November 26, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:18.805,date:"2024-11-26T00:00:00.000Z"},{title:"Low Code Limitations - Exploring the Risk of Vendor Lock-In",description:"We discuss the limitations and risks associated with low-code platforms and how to avoid getting stuck with one vendor.",permalink:"/blog/low-code-tools",formattedDate:"April 19, 2024",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:7.255,date:"2024-04-19T00:00:00.000Z"}],authorPosts:[{title:"Building components with Radix UI",description:"This post explains with examples how the keyof operator is used to define advanced types in TypeScript.",permalink:"/blog/radix-ui",formattedDate:"November 6, 2024",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:15.085,date:"2024-11-06T00:00:00.000Z"},{title:"React Design Patterns",description:"We'll explore React design patterns and examine how they might improve the development of React applications.",permalink:"/blog/react-design-patterns",formattedDate:"September 5, 2024",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:13.895,date:"2024-09-05T00:00:00.000Z"},{title:"An Intro to Server Components in React",description:"We will discuss what React server components are as well as how to incorporate them into building applications.",permalink:"/blog/react-server-components",formattedDate:"October 7, 2024",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:16.635,date:"2024-10-07T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"What is Playwright?",id:"what-is-playwright",level:2},{value:"Features of Playwright?",id:"features-of-playwright",level:2},{value:"Setting up Playwright on a React Project",id:"setting-up-playwright-on-a-react-project",level:2},{value:"Create tests with Playwright on the project",id:"create-tests-with-playwright-on-the-project",level:2},{value:"Running The Tests",id:"running-the-tests",level:3},{value:"Running The Tests in UI Mode",id:"running-the-tests-in-ui-mode",level:3},{value:"Locators and Interactions",id:"locators-and-interactions",level:3},{value:"Assertions",id:"assertions",level:3},{value:"Trace Recording",id:"trace-recording",level:3},{value:"Code Generation",id:"code-generation",level:3},{value:"Migration from Testing Library",id:"migration-from-testing-library",level:2},{value:"Difference between Playwright and React testing Library",id:"difference-between-playwright-and-react-testing-library",level:2},{value:"Conclusion",id:"conclusion",level:2}],h={toc:c},y="wrapper";function d(e){var{components:t}=e,a=o(e,["components"]);return(0,n.yg)(y,r(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){i(e,t,a[t])}))}return e}({},h,a),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"introduction"},"Introduction"),(0,n.yg)("p",null,"As a React developer, your React applications must be thoroughly tested end to end to ensure the release of high-quality, bug-free applications that provide the best user experience and quality. End-to-end testing is accomplished using a variety of test automation tools, such as Cypress, WebdriverIO, and others, and one worthy to note is Playwright."),(0,n.yg)("p",null,"Microsoft developed ",(0,n.yg)("a",{parentName:"p",href:"https://playwright.dev/"},"Playwright"),", a Node.js test automation framework, in 2020. It provides a high-level API for effortlessly automating current web applications and is compatible with all modern web browsers. It automates web testing end-to-end, emulating user interactions including clicks, scrolls, and keyboard inputs, as well as complicated tasks like form filling and page navigation.\nIn this article, we will take a look at how to create testable React applications with Playwright."),(0,n.yg)("p",null,"Steps to be covered in this article include:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#what-is-playwright"},"What is Playwright?")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#features-of-playwright"},"Features of Playwright?")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#setting-up-playwright-on-a-react-project"},"Setting up Playwright on a React Project")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#create-tests-with-playwright-on-the-project"},"Create tests with Playwright on the project")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#difference-between-playwright-and-react-testing-library"},"Difference between Playwright and React testing Library"))),(0,n.yg)("h2",{id:"what-is-playwright"},"What is Playwright?"),(0,n.yg)("p",null,"Playwright is an open-source automation library for end-to-end testing. It was created by Microsoft and it allows developers and testers to automate web browser interactions in a way to simulate how users may interact with a website or a web application. Playwright's extensive feature set makes it appropriate for a wide range of web testing situations, from simple page interactions to large, stateful apps, such as single-page applications (SPAs) and progressive web applications (PWAs)."),(0,n.yg)("h2",{id:"features-of-playwright"},"Features of Playwright?"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Cross browser"),": Playwright is compatible with all modern rendering engines, such as Firefox, WebKit, and Chromium."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Supports Headless and GUI browser Modes"),": Browsers can be launched in GUI mode for development and debugging, or headless mode (without a graphical user interface) for faster execution in testing conditions."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Cross language support"),": Languages like ",(0,n.yg)("strong",{parentName:"li"},"JavaScript"),", ",(0,n.yg)("strong",{parentName:"li"},"TypeScript"),", ",(0,n.yg)("strong",{parentName:"li"},"Python"),", ",(0,n.yg)("strong",{parentName:"li"},".NET"),", and ",(0,n.yg)("strong",{parentName:"li"},"Java")," can access the Playwright API."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Evaluate the Mobile Web"),": It supports Google Chrome for Android and Mobile Safari native emulation. Both your desktop and the cloud are powered by the same rendering engine."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"CI testing"),": Playwright can be integrated with other frameworks and tools that offer ",(0,n.yg)("strong",{parentName:"li"},"CI")," environments. You may accomplish continuous testing in this way."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Playback and Codegen recording"),": A feature of Playwright allows it to create test scripts by watching how you interact with the browser.")),(0,n.yg)("h2",{id:"setting-up-playwright-on-a-react-project"},"Setting up Playwright on a React Project"),(0,n.yg)("p",null,"You can install Playwright first by using yarn or npm by using the command below:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"npm init playwright@latest\n")),(0,n.yg)("p",null,"You will receive installation-related command line prompts when you type any of the commands. Choose the option as indicated below:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"Getting started with writing end-to-end tests with Playwright:\nInitializing project in '.'\n\u2714 Where to put your end-to-end tests? \xb7 tests\n\u2714 Add a GitHub Actions workflow? (y/N) \xb7 false\n\u2714 Install Playwright browsers (can be done manually via 'pnpm exec playwright install')? (Y/n) \xb7 true\nInstalling Playwright Test (pnpm add --save-dev @playwright/test)\u2026\n")),(0,n.yg)("p",null,"These options will install the playwright browsers which will be used for the test, create a playwright config file as well as create the test directory which will house the test files as shown below:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},"playwright.config.ts;\ntests / example.spec.ts;\ntests - examples / demo - todo - app.spec.ts;\n")),(0,n.yg)("p",null,"As an alternative, you can also use the ",(0,n.yg)("a",{parentName:"p",href:"https://playwright.dev/docs/getting-started-vscode"},"VS Code Extension")," to get started and execute your tests."),(0,n.yg)("h2",{id:"create-tests-with-playwright-on-the-project"},"Create tests with Playwright on the project"),(0,n.yg)("p",null,"The tests for playwrights are easy and they perform two actions namely;"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Perform an action"),(0,n.yg)("li",{parentName:"ul"},"Assert/declare the state in opposition to expectations.")),(0,n.yg)("p",null,"We will take a look at the example test that was added to installation of playwright"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},"tsx title=\"tests/example.spec.tsx\"\n\nimport { test, expect } from '@playwright/test';\n\ntest('has title', async ({ page }) => {\n  await page.goto('https://playwright.dev/');\n\n  // Expect a title \"to contain\" a substring.\n  await expect(page).toHaveTitle(/Playwright/);\n});\n\ntest('get started link', async ({ page }) => {\n  await page.goto('https://playwright.dev/');\n\n  // Click the get started link.\n  await page.getByRole('link', { name: 'Get started' }).click();\n\n  // Expects page to have a heading with the name of Installation.\n  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();\n});\n")),(0,n.yg)("p",null,"In the first test ",(0,n.yg)("inlineCode",{parentName:"p"},'("has title")'),", the steps can be divided into"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Performing the action"),": The ",(0,n.yg)("inlineCode",{parentName:"li"},"page.goto('https://playwright.dev/');")," makes an action of going to the url (",(0,n.yg)("a",{parentName:"li",href:"https://playwright.dev/"},"https://playwright.dev/"),")."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Asserts the state"),' : When the url loads, it looks to see if the title "',(0,n.yg)("strong",{parentName:"li"},"Playwright"),'" is there.\n(',(0,n.yg)("inlineCode",{parentName:"li"},"hence the assertion: await expect(page).toHaveTitle(/Playwright/)"),")\nIf the title is not rendered on the page, it signifies the test has failed and vice versa.")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"N/B"),": When writing tests, a good guideline is to create them the same way a typical user would use a website or web app."),(0,n.yg)("h3",{id:"running-the-tests"},"Running The Tests"),(0,n.yg)("p",null,"After writing the test, we can run it and get a visual representation by executing the Playwright test command below:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"npx playwright test\n")),(0,n.yg)("p",null,"This command will run your tests across all browsers, as specified in the playwright.config file. Tests are run in headless mode by default, which means no browser window is opened while the tests are running, and the results are displayed in the terminal."),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-06-04-playwright/1.png",alt:"playwright react"})),(0,n.yg)("p",null,"To preview the test results, type the following command:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"npx playwright show-report\n")),(0,n.yg)("p",null,"This will open a local server that displays the results of the test."),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-06-04-playwright/2.png",alt:"playwright react"})),(0,n.yg)("p",null,"You may also preview any of the individual tests on the page and get more information on how the test ran."),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-06-04-playwright/3.png",alt:"playwright react"})),(0,n.yg)("p",null,"If the test fails, it indicates that on the terminal."),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-06-04-playwright/4.png",alt:"playwright react"})),(0,n.yg)("p",null,"it also automatically opens a dev server and displays the failed tests"),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-06-04-playwright/5.png",alt:"playwright react"})),(0,n.yg)("h3",{id:"running-the-tests-in-ui-mode"},"Running The Tests in UI Mode"),(0,n.yg)("p",null,"For a better development experience when running your tests, It is advised to use the UI Mode. This allows you to simply navigate through each stage of the test and see what was happening before, during, and after each step. Numerous other functions, such as the location picker and watch mode, are also included in UI mode."),(0,n.yg)("p",null,"To run the test in UI mode, type the command below"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --ui\n")),(0,n.yg)("p",null,"This will open up a headless browser and display your tests."),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-06-04-playwright/6.png",alt:"playwright react"})),(0,n.yg)("p",null,"For more information on running tests in UI mode, visit the ",(0,n.yg)("a",{parentName:"p",href:"https://playwright.dev/docs/running-tests"},"docs"),"."),(0,n.yg)("h3",{id:"locators-and-interactions"},"Locators and Interactions"),(0,n.yg)("p",null,"In Playwright, you can also include interactions in tests like locating content and then performing an action on that content. An example is a test to find a ",(0,n.yg)("strong",{parentName:"p"},"link")," and initiate a click on the ",(0,n.yg)("strong",{parentName:"p"},"link")," as shown below:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'// Create a locator.\nconst getStarted = page.getByRole("link", { name: "Get started" });\n\n// Click it.\nawait getStarted.click();\n')),(0,n.yg)("p",null,"To get more ",(0,n.yg)("strong",{parentName:"p"},"locator")," and ",(0,n.yg)("strong",{parentName:"p"},"interaction")," methods that Playwright offers on a page, visit the ",(0,n.yg)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-page"},"docs"),"."),(0,n.yg)("h3",{id:"assertions"},"Assertions"),(0,n.yg)("p",null,'Playwright also supports assertion statements. A notable way to indicate an assertion statement is to look for a statement that has an "',(0,n.yg)("strong",{parentName:"p"},"expect"),"\" method from Playwright's API. Examples of assertion statements are indicated below:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'// checks if a page has a title "Playwright".\nawait expect(page).toHaveTitle(/Playwright/);\n\n// checks if the success variable is a boolean (true or false) value.\nexpect(success).toBeTruthy();\n\n// checks if the page have the url: "https://playwright.dev/".\nawait expect(page).toHaveURL("https://playwright.dev/");\n')),(0,n.yg)("p",null,"An assertion statement can also be ",(0,n.yg)("strong",{parentName:"p"},"async")," (particularly for statements involving an asynchronous action)."),(0,n.yg)("p",null,"To view more methods on assertions, visit the ",(0,n.yg)("a",{parentName:"p",href:"https://playwright.dev/docs/test-assertions"},"docs")),(0,n.yg)("h3",{id:"trace-recording"},"Trace Recording"),(0,n.yg)("p",null,"With the use of the GUI, you may examine recorded Playwright traces of your tests by navigating back and forth through each action and seeing what transpired on screen using the Playwright Trace Viewer."),(0,n.yg)("p",null,"Before tracing a test, ensure that the ",(0,n.yg)("strong",{parentName:"p"},"trace")," property on the ",(0,n.yg)("inlineCode",{parentName:"p"},"playwright.config.ts")," is set to `",(0,n.yg)("strong",{parentName:"p"},"'on-first-retry'")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"use: {\n    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */\n    trace: 'on-first-retry',\n},\n")),(0,n.yg)("p",null,"Once this is confirmed, type the following command below"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --trace on\n")),(0,n.yg)("p",null,"On doing that, it opens a dev server, that displays a Viewer icon on the ran tests."),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-06-04-playwright/7.png",alt:"playwright react"})),(0,n.yg)("p",null,"On clicking the viewer icon beside the tests, you will be redirected to the Trace Viewer"),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-06-04-playwright/8.png",alt:"playwright react"})),(0,n.yg)("p",null,"The trace viewer comes in handy on reviewing failed tests. You can locate the point where the test failed and make the necessary adjustments. To view more on trace recording, view ",(0,n.yg)("a",{parentName:"p",href:"https://playwright.dev/docs/trace-viewer-intro"},"here")),(0,n.yg)("h3",{id:"code-generation"},"Code Generation"),(0,n.yg)("p",null,"To run the test generator and produce tests for a website or web application, use the codegen command and the website's URL. It is always possible to run the command without the URL and then add it right into the browser window. The URL is optional."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"npx playwright codegen demo.playwright.dev/todomvc\n")),(0,n.yg)("p",null,"On running the command, it opens the headless browser and generates tests in its inspector."),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-06-04-playwright/9.png",alt:"playwright react"})),(0,n.yg)("h2",{id:"migration-from-testing-library"},"Migration from Testing Library"),(0,n.yg)("p",null,"One of the advantages of using Playwright as a testing tool in React applications is that you can easily migrate from the populous React testing library to Playwright with ease as their API are respectively complementary to each other."),(0,n.yg)("p",null,"For example, the ",(0,n.yg)("inlineCode",{parentName:"p"},"Screen")," Method in the React testing library is interchangeable with the ",(0,n.yg)("inlineCode",{parentName:"p"},"Page")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"Component")," methods in Playwright as shown below:"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Testing Library")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { render, screen } from "@testing-library/react";\nimport userEvent from "@testing-library/user-event";\n\ntest("should sign in", async () => {\n  // Setup the page.\n  const user = userEvent.setup();\n  render(<SignInPage />);\n\n  // Perform actions.\n  await user.type(screen.getByLabel("Username"), "John");\n  await user.type(screen.getByLabel("Password"), "secret");\n  await user.click(screen.getByText("Sign in"));\n\n  // Verify signed in state by waiting until "Welcome" message appears.\n  await screen.findByText("Welcome, John");\n});\n')),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'const { test, expect } = require("@playwright/experimental-ct-react"); // 1\n\ntest("should sign in", async ({ page, mount }) => {\n  // 2\n  // Setup the page.\n  const component = await mount(<SignInPage />); // 3\n\n  // Perform actions.\n  await component.getByText("Username").fill("John"); // 4\n  await component.getByText("Password").fill("secret");\n  await component.getByText("Sign in").click();\n\n  // Verify the signed in state by waiting until "Welcome" message appears.\n  await expect(component.getByText("Welcome, John")).toBeVisible(); // 5\n});\n')),(0,n.yg)("p",null,"Also, All queries in React testing library like the ",(0,n.yg)("inlineCode",{parentName:"p"},"getBy..."),", ",(0,n.yg)("inlineCode",{parentName:"p"},"findBy..."),", ",(0,n.yg)("inlineCode",{parentName:"p"},"queryBy..."),", and their multi-element variants, are replaced with ",(0,n.yg)("inlineCode",{parentName:"p"},"component.getBy...")," locators in Playwright as shown in the example above where the ",(0,n.yg)("inlineCode",{parentName:"p"},"screen.getByLabel()")," method in React testing library is synonymous to the ",(0,n.yg)("inlineCode",{parentName:"p"},"component.getByText()")," method on Playwright."),(0,n.yg)("p",null,"To view more on migration from React testing library to Playwright, visit ",(0,n.yg)("a",{parentName:"p",href:"https://playwright.dev/docs/testing-library"},"here"),"."),(0,n.yg)("h2",{id:"difference-between-playwright-and-react-testing-library"},"Difference between Playwright and React testing Library"),(0,n.yg)("p",null,"The basic difference between Playwright and React testing library is"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Playwright is an automation framework designed for end-to-end tests. It simulates how users may interact with a website or a web application."),(0,n.yg)("li",{parentName:"ul"},"React testing library is a framework for testing a unit (a unit of code, functions, or React components). It doesn't simulate the application experience in totality.")),(0,n.yg)("h2",{id:"conclusion"},"Conclusion"),(0,n.yg)("p",null,"In this article, we delved into the Playwright automation testing tool. For automated testing of web applications, Playwright is a strong and adaptable solution because of its feature set. It is a great tool for any scale of end-to-end automation testing."))}d.isMDXComponent=!0}}]);