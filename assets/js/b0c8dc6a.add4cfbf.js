"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[50617],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,h=d["".concat(s,".").concat(u)]||d[u]||c[u]||o;return n?a.createElement(h,r(r({ref:t},m),{},{components:n})):a.createElement(h,r({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99635:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>c});n(67294);var a=n(3905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const l={title:"Framer Motion examples for React animations",description:"Framer Motion tutorial - Create text and image animations in React apps easily.",slug:"framer-motion-react-animations",authors:"joel_ezimorah",tags:["css","react","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-01-framer-text-animations/social.png",hide_table_of_contents:!1},s=void 0,p={permalink:"/blog/framer-motion-react-animations",source:"@site/blog/2022-09-01-framer-text-animations.md",title:"Framer Motion examples for React animations",description:"Framer Motion tutorial - Create text and image animations in React apps easily.",date:"2022-09-01T00:00:00.000Z",formattedDate:"September 1, 2022",tags:[{label:"css",permalink:"/blog/tags/css"},{label:"react",permalink:"/blog/tags/react"},{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:8.235,hasTruncateMarker:!0,authors:[{name:"Joel Ezimorah",title:"Software Developer",url:"https://github.com/prince-joel",imageURL:"https://github.com/prince-joel.png",key:"joel_ezimorah"}],frontMatter:{title:"Framer Motion examples for React animations",description:"Framer Motion tutorial - Create text and image animations in React apps easily.",slug:"framer-motion-react-animations",authors:"joel_ezimorah",tags:["css","react","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-01-framer-text-animations/social.png",hide_table_of_contents:!1},prevItem:{title:"How to create a CRUD app with SvelteKit",permalink:"/blog/sveltekit-crud-app-with-svelte-mui"},nextItem:{title:"Using Google Lighthouse to improve app performance",permalink:"/blog/lighthouse-google-chrome"},relatedPosts:[{title:"How to Create Dynamic Forms in React CRUD app with Ant Design",description:"Easy way to creating dynamic forms in React CRUD apps with Ant Design",permalink:"/blog/react-crud-app-with-dynamic-form-ant-design",formattedDate:"November 17, 2022",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:25.14,date:"2022-11-17T00:00:00.000Z"},{title:"The Anatomy of the Web Development in 2024",description:"This post depicts a general picture of where web development is headed in 2024 with a focus on the Node.js/React ecosystem - and provides an inside-out report on how Refine.js is starting to make an impact as a React-based meta-framework.",permalink:"/blog/web-development",formattedDate:"December 20, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:14.205,date:"2023-12-20T00:00:00.000Z"},{title:"Introduction to React Table - TanStack Table Adapter for React",description:"We'll explore how to use TanStack Table(React Table) in a react project. We'll also explore how to use TanStack Table with refine.",permalink:"/blog/tanstack-react-table",formattedDate:"October 31, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:11.75,date:"2023-10-31T00:00:00.000Z"}],authorPosts:[]},m={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"What is Framer Motion?",id:"what-is-framer-motion",level:2},{value:"Getting started with Framer Motion in React",id:"getting-started-with-framer-motion-in-react",level:2},{value:"Getting started with text animation",id:"getting-started-with-text-animation",level:2},{value:"Getting started with image animation",id:"getting-started-with-image-animation",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:c};function u(e){var{components:t}=e,n=r(e,["components"]);return(0,a.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"When a tool like Framer Motion is available, why write many lines of CSS code to create an animation? Web applications look more exciting and beautiful when they are animated."),(0,a.kt)("p",null,"Many developers avoid adding animation to their web applications since animation codes can be rigorous to write. However, with Framer Motion, you can execute animations with only a few lines of code. This external library in React.js makes animation incredibly simple, allowing the developer to concentrate on other aspects of the project."),(0,a.kt)("p",null,"In this article, we'll examine Framer Motion's functionality, installation process, and usability by using it to animate text and images."),(0,a.kt)("p",null,"Steps we'll cover:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#what-is-framer-motion"},"What is Framer Motion?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#getting-started-with-framer-motion-in-react"},"Getting started with Framer Motion in React")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#getting-started-with-text-animation"},"Getting started with text animation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#getting-started-with-image-animation"},"Getting started with image animation"))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"To follow along with this tutorial, you need to have:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A clear understanding of basic frontend technologies, i.e., HTML, CSS, and JavaScript."),(0,a.kt)("li",{parentName:"ul"},"Knowledge of React.JS"),(0,a.kt)("li",{parentName:"ul"},"Node Js installed.")),(0,a.kt)("h2",{id:"what-is-framer-motion"},"What is Framer Motion?"),(0,a.kt)("p",null,"Framer motion is a powerful production-ready library from ",(0,a.kt)("a",{parentName:"p",href:"https://www.framer.com/"},"Framer")," that can create different animation styles in the DOM as elements. Framer Motion is an excellent alternative to making complex CSS animations. To use Framer Motion, you need to install the library and integrate it into your React project."),(0,a.kt)("h2",{id:"getting-started-with-framer-motion-in-react"},"Getting started with Framer Motion in React"),(0,a.kt)("p",null,"React requires that we install any external libraries using the npm package before utilizing them. Install Framer motion with the following command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install framer-motion\n")),(0,a.kt)("p",null,"The next step is to import the Framer Motion component you wish to use into your React app."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"We are going to break this article into two sections first, the text animation, and second, the image animation. In the end, we will combine both into one React application.")),(0,a.kt)("h2",{id:"getting-started-with-text-animation"},"Getting started with text animation"),(0,a.kt)("p",null,"In this section, we'll demonstrate how to use Framer Motion when animating text using the ",(0,a.kt)("inlineCode",{parentName:"p"},"motion")," components."),(0,a.kt)("p",null,"Add the following code to your ",(0,a.kt)("inlineCode",{parentName:"p"},"App.js")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="App.js"',title:'"App.js"'},'import { motion } from "framer-motion";\n\nfunction App() {\n  return (\n    <div className="App">\n      <motion.h1\n        animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}\n        transition={{\n          duration: 5,\n          delay: 0.3,\n          ease: [0.5, 0.71, 1, 1.5],\n        }}\n        initial={{ opacity: 0, scale: 0.5 }}\n        whileHover={{ scale: 1.2 }}\n      >\n        Animation made easy with Framer Motion\n      </motion.h1>\n    </div>\n  );\n}\nexport default App;\n')),(0,a.kt)("p",null,"We imported Framer Motion's ",(0,a.kt)("inlineCode",{parentName:"p"},"motion")," component. Look closely at the ",(0,a.kt)("inlineCode",{parentName:"p"},"h1")," element you will notice how it differs from the standard ",(0,a.kt)("inlineCode",{parentName:"p"},"h1")," element."),(0,a.kt)("p",null,"The first step in using Framer Motion to animate is to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"motion")," component, which can be used with any standard HTML element."),(0,a.kt)("p",null,"We will give our text a cool entry animation to show gradually when the page reloads by utilizing the ",(0,a.kt)("inlineCode",{parentName:"p"},"motion")," component in our ",(0,a.kt)("inlineCode",{parentName:"p"},"h1")," and a Framer Motion ",(0,a.kt)("inlineCode",{parentName:"p"},"animate")," prop to accomplish the animation."),(0,a.kt)("p",null,"With this approach, we can animate our text to fulfill our desires. First, we assign a position to our text, indicating where the animation will take place. Then we will animate our text on the x-axis. You can set ",(0,a.kt)("inlineCode",{parentName:"p"},"x")," to have a value of ",(0,a.kt)("inlineCode",{parentName:"p"},"[0, 150, 50]"),"."),(0,a.kt)("p",null,"Next, let's give it an ",(0,a.kt)("inlineCode",{parentName:"p"},"opacity")," of 1."),(0,a.kt)("p",null,"We need to assign a scale to the cool entering animation. We don't want anything wild. We can set the scale to 1. So when the text animation reaches scale 1, it stops increasing in size."),(0,a.kt)("p",null,"Finally, we use the Framer Motion ",(0,a.kt)("inlineCode",{parentName:"p"},"transition")," prop because every effective animation requires a transition process. We will specify the ",(0,a.kt)("inlineCode",{parentName:"p"},"duration"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"delay"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"ease")," of our text animation inside this prop. Give it a duration of 5, a delay of 3, and an ease of ",(0,a.kt)("inlineCode",{parentName:"p"},"[0.5, 0.71, 1, 1.01]"),"."),(0,a.kt)("p",null,"The easing shows the scale at which the text animation enters before going to its original scale."),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-01-framer-text-animations/scale1.gif",alt:"Scale for text"}),(0,a.kt)("br",null),(0,a.kt)("p",null,"However, we don't want to stop with the cool entrance in our text animation. Let's add a beautiful hover effect to our text. When your mouse hovers over it, it will appear to bounce or grow bigger in size."),(0,a.kt)("p",null,"To accomplish this, we'll use the ",(0,a.kt)("inlineCode",{parentName:"p"},"whileHover")," prop and scale it to 1.2."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="App.js"',title:'"App.js"'},'function App() {\n    return (\n        <div className="App">\n            <motion.h1\n              ...\n                // highlight-next-line\n                whileHover={{ scale: 1.2 }}\n            >\n                Animation made easy with Framer Motion\n            </motion.h1>\n        </div>\n    );\n}\n')),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-01-framer-text-animations/scale2.gif",alt:"Scale for text"}),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://github.com/refinedev/refine"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/github-support-banner.png",alt:"github support banner"}))),(0,a.kt)("h2",{id:"getting-started-with-image-animation"},"Getting started with image animation"),(0,a.kt)("p",null,"In this section, we'll demonstrate how to use Framer Motion when animating images."),(0,a.kt)("p",null,'First, you need to create an image folder inside the "src" folder to keep your images. For the sake of this project, I used some random images. Feel free to use any image of your choice.'),(0,a.kt)("p",null,"Create an \u201cimage.js\u201d file inside the \u201csrc\u201d folder and add the following code inside:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/images.js"',title:'"src/images.js"'},'import fox from "./images/pexels-fox-1071249.jpg";\nimport jill from "./images/jill.jpg";\nimport cha1 from "./images/cha1.jpg";\nimport cha2 from "./images/cha2.jpg";\n\nexport default [fox, jill, cha1, cha2];\n')),(0,a.kt)("p",null,"We are going to import all our images into the ",(0,a.kt)("inlineCode",{parentName:"p"},"image.js")," file mentioned above before using them in our ",(0,a.kt)("inlineCode",{parentName:"p"},"App.js")," file. This will help us avoid redundant importation where we will use these images."),(0,a.kt)("p",null,"Add the following code to your ",(0,a.kt)("inlineCode",{parentName:"p"},"App.css")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="App.css"',title:'"App.css"'},".item {\n  min-height: 10rem;\n  min-width: 30rem;\n  padding: 5px;\n}\n\n.item img {\n  width: 60%;\n  height: 50%;\n  border-radius: 1rem;\n  pointer-events: none;\n  padding: 15%;\n}\n\n.inner-carousel {\n  display: flex;\n  background: rgb(76, 76, 76);\n  height: 23rem;\n}\n\n.carousel {\n  cursor: grab;\n  overflow: hidden;\n  background: rgb(215, 216, 215);\n  height: 23rem;\n}\n")),(0,a.kt)("p",null,"Change ",(0,a.kt)("inlineCode",{parentName:"p"},"App.js")," file with the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="App.js"',title:'"App.js"'},'import { motion } from "framer-motion";\nimport "./App.css";\nimport images from "./image";\n\nfunction App() {\n  return (\n    <div className="App">\n      <motion.div className="carousel">\n        <motion.div\n          animate={{\n            scale: [1, 1, 1, 1, 1],\n            rotate: [0, 30, 60, 240, 360],\n          }}\n        >\n          {images.map((image) => {\n            return (\n              <motion.div\n                whileHover={{ scale: 1.2 }}\n                whileTap={{ scale: 2 }}\n                className="item"\n                transition={{ duration: 3 }}\n                key={image}\n              >\n                <img src="https://refine.ams3.cdn.digitaloceanspaces.comundefined" alt="image" />\n              </motion.div>\n            );\n          })}\n        </motion.div>\n      </motion.div>\n    </div>\n  );\n}\n\nexport default App;\n')),(0,a.kt)("p",null,"The image animation will take the form of a carousel with spinning effects each time the page is refreshed, hover effects each time the mouse is moved close to them, and tap effects each time the image is touched."),(0,a.kt)("p",null,"For the carousel, create three containers, one for the outer carousel, one for the inner carousel, and one for the images. All three containers should be created using Framer Motion ",(0,a.kt)("inlineCode",{parentName:"p"},"motion")," components, one inside the other."),(0,a.kt)("p",null,"The inner carousel will perform the spinning and sliding effects. The framer motion ",(0,a.kt)("inlineCode",{parentName:"p"},"animate")," prop will be called in at this point, scaled to ",(0,a.kt)("inlineCode",{parentName:"p"},"[1,1,1,1,1]"),", and rotated to ",(0,a.kt)("inlineCode",{parentName:"p"},"[0,30, 60, 240, 360]"),"."),(0,a.kt)("p",null,"This will give it a unique spinning effect, as you can see below:"),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-01-framer-text-animations/photos-1.gif",alt:"Scale for photo"}),(0,a.kt)("br",null),(0,a.kt)("p",null,"We'll use ",(0,a.kt)("inlineCode",{parentName:"p"},"dragConstraint")," prop and framer motion ",(0,a.kt)("inlineCode",{parentName:"p"},"drag")," to give it a carousel-like feel. \u201cX\u201d will be passed as a parameter in the ",(0,a.kt)("inlineCode",{parentName:"p"},"drag")," prop because we need our carousel to move along the x-axis."),(0,a.kt)("p",null,"To set a stopper in place, utilize the ",(0,a.kt)("inlineCode",{parentName:"p"},"dragConstraint")," prop. For our carousel to travel to the left and then return to its previous location, we set the ",(0,a.kt)("inlineCode",{parentName:"p"},"dragConstraint:{ right: 0, left: -1100 }"),"."),(0,a.kt)("p",null,"It appears too boring to move with just the ",(0,a.kt)("inlineCode",{parentName:"p"},"drag prop")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"dragConstraint")," props; instead, let's add a bounce-like effect at each end of the drag. This can be achieved with the ",(0,a.kt)("inlineCode",{parentName:"p"},"drag transition")," props from Framer Motion."),(0,a.kt)("p",null,'We\'ll take advantage of the "bounceStiffner" and "bounceDamping" for ',(0,a.kt)("inlineCode",{parentName:"p"},"drag transition")," attributes. Give the ",(0,a.kt)("inlineCode",{parentName:"p"},"bounceStiffner")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"bounceDamping")," values of 600 and 8, respectively. Finally, we will navigate through our imported images in this container and add each image back to the carousel."),(0,a.kt)("p",null,"Add highlighted code to ",(0,a.kt)("inlineCode",{parentName:"p"},"App.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'function App() {\n    return (\n        <div className="App">\n            <motion.div className="carousel">\n                <motion.div\n                   ...\n                   // highlight-start\n                    drag="x"\n                    dragConstraints={{right: 0, left:-1100}}\n                    dragTransition={{ bounceStiffness: 600, bounceDamping: 8 }}\n                    // highlight-end\n                >\n                    ...\n                </motion.div>\n            </motion.div>\n        </div>\n    );\n}\n')),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-01-framer-text-animations/photos-2.gif",alt:"Scale for photo"}),(0,a.kt)("br",null),(0,a.kt)("p",null,"The last ",(0,a.kt)("inlineCode",{parentName:"p"},"div")," in the carousel will house the returned images. To create the appropriate animation inside this ",(0,a.kt)("inlineCode",{parentName:"p"},"div,")," we will use the framer motions ",(0,a.kt)("inlineCode",{parentName:"p"},"whileHover"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"whileTap"),", and a transition prop."),(0,a.kt)("p",null,"Use the framer motion ",(0,a.kt)("inlineCode",{parentName:"p"},"whileHover")," with a scale of 1.2 to give our image a nice hover effect. When your mouse is over an image, it will only scale up to this maximum."),(0,a.kt)("p",null,"Then, by giving the ",(0,a.kt)("inlineCode",{parentName:"p"},"whileTap")," prop a scale of 2, we will give our images a tap effect so that they bounce when we tap on them. We must define a transition duration so that hovering and tapping become more engaging. Let's choose 3 seconds as the duration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="App.js"',title:'"App.js"'},'function App() {\n   return (\n       <div className="App">\n           <motion.div className="carousel">\n               <motion.div>\n                   {images.map((image) => {\n                       return (\n                           <motion.div\n                               ...\n                           //highlight-start\n                               whileHover={{ scale: 1.2 }}\n                               whileTap={{ scale: 2 }}\n                             //highlight-end\n                           >\n                               <img src="https://refine.ams3.cdn.digitaloceanspaces.comundefined" alt="image" />\n                           </motion.div>\n                       );\n                   })}\n               </motion.div>\n           </motion.div>\n       </div>\n   );\n}\n')),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-01-framer-text-animations/photos-3.gif",alt:"Scale for photo"}),(0,a.kt)("br",null),(0,a.kt)("p",null,"Contrary to ordinary CSS, we can see that framer motion enabled the above animation to be created quickly and with a few lines of code. Some programmers like to use their own animation with raw CSS, but if you're like me and prefer a simpler solution, you can use Framer Motion for your animation."),(0,a.kt)("p",null,"You can access the app ",(0,a.kt)("a",{parentName:"p",href:"https://framer-motion-animation-snowy.vercel.app/"},"here")),(0,a.kt)("br",null),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://discord.gg/refine"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord-banner.png",alt:"discord banner"}))),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"This article taught us how to use Framer Motion to create a simple text and image animation for a React application. Compared to regular CSS, we saw how easy it is to implement these animations with a few lines of code. We also saw how to use some Framer Motion components and props. ",(0,a.kt)("a",{parentName:"p",href:"https://www.framer.com/docs/introduction/"},"Framer Motion")," has other powerful features we didn't cover in this article. You should check them out. I hope this article becomes valuable to you."))}u.isMDXComponent=!0}}]);