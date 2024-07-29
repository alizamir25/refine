"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[41108],{58860:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var a=n(37953);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),g=r,m=p["".concat(l,".").concat(g)]||p[g]||d[g]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},93636:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});n(37953);var a=n(58860);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={title:"When to use dangerouslySetInnerHTML in React?",description:"Find out when to use dangerouslySetInnerHTML in React and how it can help avoid XSS attacks.",slug:"use-react-dangerouslysetinnerhtml",authors:"clara_ekekenta",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-25-react-dangerouslyInnerhtml/social-2.png",hide_table_of_contents:!1},l=void 0,c={permalink:"/blog/use-react-dangerouslysetinnerhtml",source:"@site/blog/2024-07-02-react-dangerouslyInnerhtml.md",title:"When to use dangerouslySetInnerHTML in React?",description:"Find out when to use dangerouslySetInnerHTML in React and how it can help avoid XSS attacks.",date:"2024-07-02T00:00:00.000Z",formattedDate:"July 2, 2024",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:9.245,hasTruncateMarker:!1,authors:[{name:"Clara Ekekenta",title:"Software Engineer",imageURL:"/img/generic-profile.png",key:"clara_ekekenta"}],frontMatter:{title:"When to use dangerouslySetInnerHTML in React?",description:"Find out when to use dangerouslySetInnerHTML in React and how it can help avoid XSS attacks.",slug:"use-react-dangerouslysetinnerhtml",authors:"clara_ekekenta",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-25-react-dangerouslyInnerhtml/social-2.png",hide_table_of_contents:!1},prevItem:{title:"Why you should prefer using pnpm over npm and yarn?",permalink:"/blog/pnpm-vs-npm-and-yarn"},nextItem:{title:"How to use React Fragments?",permalink:"/blog/how-react-fragments-is-works"},relatedPosts:[{title:"How to use Conditional Rendering in React",description:"We'll implement Conditional Rendering in React and the various ways to use it in your React applications.",permalink:"/blog/react-conditional-rendering",formattedDate:"July 17, 2024",authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],readingTime:15.235,date:"2024-07-17T00:00:00.000Z"},{title:"How to use React Strict Mode in React 18",description:"What is Strict Mode in React 18 and how to use it to find and fix bugs in your React application.",permalink:"/blog/react-strict-mode-in-react-18",formattedDate:"July 10, 2024",authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],readingTime:10.835,date:"2024-07-10T00:00:00.000Z"},{title:"A Comprehensive Guide of React Unit Testing",description:"We'll learn how to unit test our component down to hooks and Context.",permalink:"/blog/react-unit-testing",formattedDate:"May 26, 2023",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:20.295,date:"2023-05-26T00:00:00.000Z"}],authorPosts:[{title:"How to use React Fragments?",description:"We'll cover what React Fragments are, differences between React Fragments and Div elements.",permalink:"/blog/how-react-fragments-is-works",formattedDate:"June 26, 2024",authors:[{name:"Clara Ekekenta",title:"Software Engineer",imageURL:"/img/generic-profile.png",key:"clara_ekekenta"}],readingTime:9.085,date:"2024-06-26T00:00:00.000Z"}]},u={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"What is dangerouslySetInnerHTML?",id:"what-is-dangerouslysetinnerhtml",level:2},{value:"When to use dangerouslySetInnerHTML?",id:"when-to-use-dangerouslysetinnerhtml",level:2},{value:"Understanding XSS Attacks and Risks of Using innerHTML in React",id:"understanding-xss-attacks-and-risks-of-using-innerhtml-in-react",level:2},{value:"What is XSS?",id:"what-is-xss",level:3},{value:"How an XSS Attack Works",id:"how-an-xss-attack-works",level:3},{value:"Risks involved with using innerHTML",id:"risks-involved-with-using-innerhtml",level:3},{value:"Building a simple example app",id:"building-a-simple-example-app",level:3},{value:"Alternatives to dangerouslySetInnerHTML",id:"alternatives-to-dangerouslysetinnerhtml",level:2},{value:"Safe HTML Rendering Using Libraries",id:"safe-html-rendering-using-libraries",level:3},{value:"DOMPurify",id:"dompurify",level:4},{value:"Sanitizer.js",id:"sanitizerjs",level:4},{value:"Generating HTML-Safe Content",id:"generating-html-safe-content",level:3},{value:"HTML Content Generation Best Practices Safely on the Server Side",id:"html-content-generation-best-practices-safely-on-the-server-side",level:4},{value:"Conclusion",id:"conclusion",level:2}],d={toc:p},g="wrapper";function m(e){var{components:t}=e,n=o(e,["components"]);return(0,a.yg)(g,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"This article was last updated on July 02, 2024, to add sections for XSS Attacks and Risks of Using innerHTML.")),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"Rendering HTML markup from rich text created in a WYSIWYG editor might be difficult. Because numerous pieces of logic are required to make things work as they should. This can be attributed to the fact that React uses a browser-independent system to manipulate the DOM elements, thus preventing direct interaction with the DOM. Things can be pretty much easier and faster with dangerouslySetInnerHTML."),(0,a.yg)("p",null,"In this tutorial, we'll see how to use ",(0,a.yg)("inlineCode",{parentName:"p"},"dangerouslySetInnerHTML")," in a React application."),(0,a.yg)("p",null,"Step we'll cover:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#what-is-dangerouslysetinnerhtml"},"What is dangerouslySetInnerHTML?")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#when-to-use-dangerouslysetinnerhtml"},"When to use dangerouslySetInnerHTML?")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#understanding-xss-attacks-and-risks-of-using-innerhtml-in-react"},"Understanding XSS Attacks and Risks of Using innerHTML in React")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#alternatives-to-dangerouslysetinnerhtml"},"Alternatives to dangerouslySetInnerHTML"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#safe-html-rendering-using-libraries"},"Safe HTML Rendering Using Libraries")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#generating-html-safe-content"},"Generating HTML-Safe Content"))))),(0,a.yg)("h2",{id:"what-is-dangerouslysetinnerhtml"},"What is dangerouslySetInnerHTML?"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"React dangerouslySetInnerHTML")," is an HTML property that makes it easy to programmatically set the HTML elements from an external source. It has replaced the innerHTML used in the browser DOM.\ndangerouslySetInnerHTML helps React know how to handle the HTML elements in a component where the contents are to be rendered."),(0,a.yg)("h2",{id:"when-to-use-dangerouslysetinnerhtml"},"When to use dangerouslySetInnerHTML?"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"dangerouslySetInnerHTML")," is mostly used in any application where you need to render formatted text in a div element. Also, you can use it to render content exactly as you have formatted it. For instance, let's consider a blog application. The body of a blog is usually formatted with headers, paragrams, images, code blocks, etc."),(0,a.yg)("p",null,"To render such contents in a React application, you'll need to manipulate the DOM to get the HTML elements in the contents and set them to an element using innerHTML. Because React does not allow direct interaction with the DOM, your content will end up not being displayed as it should. However, when dangerouslySetInnerHTML is applied, React recognizes the HTML tags and correctly renders them."),(0,a.yg)("p",null,"Due to its vulnerability to cross-site scripting (XSS) attacks, dangerouslySetInnerHTML might constitute a major threat to your application, as the name suggests. However, DOMPurify has proven to be a highly effective tool in overcoming such difficulties. DOMPurify is a DOM-only XSS sanitizer for HTML for preventing XSS attacks by stripping out all dangerous HTML in content rendered in an application."),(0,a.yg)("h2",{id:"understanding-xss-attacks-and-risks-of-using-innerhtml-in-react"},"Understanding XSS Attacks and Risks of Using innerHTML in React"),(0,a.yg)("p",null,"This led me to think about the XSS attack and some of the security risks directly related to using ",(0,a.yg)("inlineCode",{parentName:"p"},"innerHTML")," in our React applications. Here is a quick overview:"),(0,a.yg)("h3",{id:"what-is-xss"},"What is XSS?"),(0,a.yg)("p",null,"Cross-site scripting, usually known as XSS, is one of the vulnerabilities found in web applications that allow an attacker to inject malicious scripts into web pages accessed by others. In essence, there are three types of XSS attacks:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Stored XSS"),": The injected script is stored on the target server\u2014say, in a database\u2014and later appears within web pages.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Reflected XSS"),": The script is issued by a web server in response to an error message or a search result and executed within the user's browser.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"DOM-Based XSS"),": The exploit lies in the client-side code, hence not on the server side, and it would use the DOM to launch the attack."))),(0,a.yg)("h3",{id:"how-an-xss-attack-works"},"How an XSS Attack Works"),(0,a.yg)("p",null,"This is how XSS attacks work by exploiting vulnerabilities in web applications and enabling malicious scripts to be executed under the user's browser's security context. Here are a couple of examples:"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Stored XSS"),": An attacker injects a malicious script into one of the comment fields, which gets stored in the database. When a different user reads that comment, the script gets executed in the browser, probably obtaining their session cookies or getting them to redirect to a phishing site."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Reflected XSS"),": The attacker sends a link with the URL having the malicious script, and the same gets reflected from the server back to the request made by the victim. On clicking, the script executes in the browser, showing a fake login form to capture credentials.")),(0,a.yg)("p",null,"For example, if users are permitted to insert HTML directly into a web page via a form field, hackers can embed malicious code into the application, causing the application to behave inappropriately or even resulting in data loss. Consider the following code:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"const App = () => {\n  const data = `lorem <b onmouseover=\"alert('mouseover');\">ipsum</b>`;\n\n  return <div dangerouslySetInnerHTML={{ __html: data }} />;\n};\n")),(0,a.yg)("p",null,"A piece of JavaScript code was embedded in the above code. This will trigger an alert each time a user tries to access the application. This is because the data was not sanitized before being rendered in the application. The above code will return the below result."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'lorem ipsum <img src="" onerror="alert(\'mailicious message\');" />\n')),(0,a.yg)("p",null,"As shown below, you can sanitize the data to remove all malicious code and scripts embedded in it."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"import DOMPurify from 'dompurify';\n\nconst App = () => {\n  const data = `lorem <b onmouseover=\"alert('mailicious message');\">test</b>`\n\n  const sanitizedData = () => ({\n    __html: DOMPurify.sanitize(data)\n  })\n\n  return (\n   dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(data)}}></div>\n  );\n}\n\nexport default App;\n")),(0,a.yg)("p",null,"The above code will strip out the script in the data that has been rendered on the application and the result below."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},' lorem test <img src="">\n')),(0,a.yg)("h3",{id:"risks-involved-with-using-innerhtml"},"Risks involved with using innerHTML"),(0,a.yg)("p",null,"Using ",(0,a.yg)("inlineCode",{parentName:"p"},"innerHTML")," directly with React can make our application vulnerable to cross-site scripting attacks. The following are the main risks involved :"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Script Injection"),": It allows us to add malicious scripts to our application, which can end in data theft, session hijacking, and unauthorized activities."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Data Manipulation"),": Threat actors could alter the content displayed in our web pages to deceive users or potentially even manipulate data for the compromise of the integrity of our application."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Unauthorized Requests"),": Unauthorized API calls or even changes in settings of an application that are unauthorized for a user.")),(0,a.yg)("p",null,"These all can be cleared out only if we ensure not to use ",(0,a.yg)("inlineCode",{parentName:"p"},"innerHTML")," at any cost. Instead, we use libraries like DOMPurify to sanitize any form of HTML content before rendering into our applications."),(0,a.yg)("h3",{id:"building-a-simple-example-app"},"Building a simple example app"),(0,a.yg)("p",null,"To demonstrate how dangerouslySetInnerHTML works in a React application, let's build a simple blog application. To make things easier, we'll use ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/pankod/superplate"},"superplate")," CLI to create React apps."),(0,a.yg)("p",null,"To get started, create a new app with the command below."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"npx superplate-cli blog\n")),(0,a.yg)("p",null,"The above command will prompt you to choose the configuration for your project. Your selection should look like the screenshot below."),(0,a.yg)("div",{class:"img-container","align-items":"center",style:{alignSelf:"center",width:"400px"}},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-25-react-dangerouslyInnerhtml/dangerouslySetInnerhtml-cli.png",alt:"dangerouslySetInnerhtml cli"})),(0,a.yg)("br",null),(0,a.yg)("p",null,"Once you complete the prompts, Superlate will install all the required packages and set up the project folders for your application."),(0,a.yg)("p",null,"Now install the Dompurify module to sanitize the HTML codes we'll render in the app."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"npm install dompurify @types/dompurify\n")),(0,a.yg)("p",null,"Next, open the application in your favorite text editor. Then create a ",(0,a.yg)("inlineCode",{parentName:"p"},"data.json")," file in the src folder of the project and add the dummy data below."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'{\n  "blogs": [\n    {\n      "title": "<h3>Node.js for begineers</h3>",\n      "content": "<p>Lorem ipsum dolor <b>sit</b> amet consectetur adipisicing elit. <strike>Enim ex a</strike> veniam, molestiae praesentium culpa, mollitia officiis quas quia vitae voluptates</p>"\n    },\n    {\n      "title": "<h3>Sit amet consectetur adipisicing eli</h3>",\n      "content": "<p>Lorem ipsum dolor <b>sit</b> amet consectetur adipisicing elit. <strike>Enim ex a</strike> veniam, molestiae praesentium culpa, mollitia officiis quas quia vitae voluptates</p>"\n    },\n    {\n      "title": "<h3>Sit amet consectetur adipisicing eli</h3>",\n      "content": "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <i>Enim ex a</i> veniam, molestiae praesentium culpa, mollitia officiis quas quia vitae voluptates</p>"\n    }\n  ]\n}\n')),(0,a.yg)("p",null,"In the above JSON data, we created some HTML formatted blog data we'll render to the application."),(0,a.yg)("p",null,"Now update the code in the ",(0,a.yg)("inlineCode",{parentName:"p"},"pages/index.ts")," file to render the data with the code snippet below."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport DOMPurify from "dompurify";\nimport { Row, Col, Container, Card } from "react-bootstrap";\nimport data from "../data.json";\n\nconst Home: React.FC = () => {\n  return (\n    <div className="d-flex flex-column min-vh-100">\n      <Container className="flex-grow-1 my-5">\n        <Row>\n          {data.blogs.map((data) => (\n            <Col md={4} key={data.title} className="mb-3">\n              <Card className="border-none">\n                <Card.Body>\n                  <Card.Title>\n                    <div\n                      dangerouslySetInnerHTML={{\n                        __html: DOMPurify.sanitize(data.title),\n                      }}\n                    ></div>\n                  </Card.Title>\n                  <Card.Text>\n                    <div\n                      dangerouslySetInnerHTML={{\n                        __html: DOMPurify.sanitize(data.content),\n                      }}\n                    ></div>\n                  </Card.Text>\n                </Card.Body>\n              </Card>\n            </Col>\n          ))}\n        </Row>\n      </Container>\n    </div>\n  );\n};\n\nexport default Home;\n')),(0,a.yg)("p",null,"In the above code snippet, we imported dompurify to sanitize the contents in the blog, react-bootstrap components to style the application, and the dummy JSON data we created. Then in the card, we looped through the blogs to access and render the data in the objects."),(0,a.yg)("p",null,"For the Card title and Text, we added div elements and attached the ",(0,a.yg)("strong",{parentName:"p"},"dangerouslySetInnerHTML")," property to render the contents according to how they were formatted."),(0,a.yg)("p",null,"To allow the div where the contents are rendered to have children, we passed in the ",(0,a.yg)("inlineCode",{parentName:"p"},"--html")," key to ",(0,a.yg)("strong",{parentName:"p"},"dangerouslySetInnerHTML")," and wrapped the content to be rendered in the dompurify ",(0,a.yg)("strong",{parentName:"p"},"sanitize")," method."),(0,a.yg)("div",{class:"img-container","align-items":"center"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-25-react-dangerouslyInnerhtml/dangerouslySetInnerhtml-usage.png",alt:"dangerouslySetInnerhtml usage"})),(0,a.yg)("br",null),(0,a.yg)("p",null,"In the above screenshot, ",(0,a.yg)("inlineCode",{parentName:"p"},"dangerouslySetInnerHTML")," has rendered the contents just the way they were been formatted to look like."),(0,a.yg)("h2",{id:"alternatives-to-dangerouslysetinnerhtml"},"Alternatives to dangerouslySetInnerHTML"),(0,a.yg)("p",null,"I wanted to take a moment and look at alternatives to using dangerouslySetInnerHTML within our React applications. More secure methods of rendering with HTML can help us eliminate those potential security vulnerabilities, for example, XSS attacks. Here's a quick overview:"),(0,a.yg)("h3",{id:"safe-html-rendering-using-libraries"},"Safe HTML Rendering Using Libraries"),(0,a.yg)("h4",{id:"dompurify"},"DOMPurify"),(0,a.yg)("p",null,"DOMPurify is a popular library for HTML sanitizer and removal of potentially dangerous code."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Pros")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Works greatly to prevent XSS attacks."),(0,a.yg)("li",{parentName:"ul"},"Easy to integrate with React."),(0,a.yg)("li",{parentName:"ul"},"Regularly maintained and updated.")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Cons")),(0,a.yg)("p",null,"\u2014 Adding a tiny overhead to the application due to the sanitization process."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Requires extra configuration for a specific use case.")),(0,a.yg)("h4",{id:"sanitizerjs"},"Sanitizer.js"),(0,a.yg)("p",null,"Sanitizer.js is yet another library to clean and sanitize HTML content."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Pros")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"It provides strong protection against XSS attacks."),(0,a.yg)("li",{parentName:"ul"},"Can be configured for different levels of sanitization.")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Cons"),"\nThis is less widespread to use and support than DOMPurify."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"May require more initial setup and understanding to use effectively.")),(0,a.yg)("h3",{id:"generating-html-safe-content"},"Generating HTML-Safe Content"),(0,a.yg)("h4",{id:"html-content-generation-best-practices-safely-on-the-server-side"},"HTML Content Generation Best Practices Safely on the Server Side"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Escape HTML Content"),": Always ensure you escape any user-generated content before sending it to the client. In many programming languages or libraries, this can be quickly done with built-in functions.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Validate user input: All kinds of user input need to be validated and sanitized at the server end, including form data, query parameters, and any other inputs a user might make.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Used trusted sources: Always render HTML content from trusted sources. Do not show the raw HTML of some untrusted or unknown source.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Regular security audit: Periodic security audits of your codebase should be done to identify all possible loopholes related to HTML rendering.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Content Security Policy (CSP)"),": Apply a Content Security Policy to prevent the execution of untrusted scripts."))),(0,a.yg)("p",null,"But by following the practices elaborated above and using libraries like DOMPurify or Sanitizer.js, we can safely render HTML content in our React applications without ",(0,a.yg)("inlineCode",{parentName:"p"},"dangerouslySetInnerHTML"),"."),(0,a.yg)("h2",{id:"conclusion"},"Conclusion"),(0,a.yg)("p",null,"dangerouslySetInnerHTML in a React application. We started by explaining what dangerouslySetInnerHTML is, when to use it, and the best practices for using it in a React application."))}m.isMDXComponent=!0}}]);