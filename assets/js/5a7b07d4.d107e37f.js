"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[56929],{58860:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>h});var r=n(37953);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=o,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},83133:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>m});n(37953);var r=n(58860);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={title:"How to Import CSV File with React",description:"In this guide, I will show you how to import CSV files using React and JavaScript.",slug:"how-to-import-csv",authors:"melih",tags:["javascript","react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},s=void 0,p={permalink:"/blog/how-to-import-csv",source:"@site/blog/2022-01-18-csv-import.md",title:"How to Import CSV File with React",description:"In this guide, I will show you how to import CSV files using React and JavaScript.",date:"2022-01-18T00:00:00.000Z",formattedDate:"January 18, 2022",tags:[{label:"javascript",permalink:"/blog/tags/javascript"},{label:"react",permalink:"/blog/tags/react"}],readingTime:4.365,hasTruncateMarker:!0,authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],frontMatter:{title:"How to Import CSV File with React",description:"In this guide, I will show you how to import CSV files using React and JavaScript.",slug:"how-to-import-csv",authors:"melih",tags:["javascript","react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"Top React JS Frameworks Every Developer Should Know",permalink:"/blog/best-react-frameworks"},nextItem:{title:"How to Multipart File Upload Using FormData with HTML",permalink:"/blog/how-to-multipart-upload"},relatedPosts:[{title:"Redirect in React Router V6 with Navigate Component",description:"We'll see how to redirect using Navigate Component in React Router V6",permalink:"/blog/navigate-react-router-redirect",formattedDate:"June 14, 2024",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:9.735,date:"2024-06-14T00:00:00.000Z"},{title:"A Guide on Material UI AutoComplete in React",description:"We'll discover the Material UI AutoComplete component with examples",permalink:"/blog/material-ui-autocomplete-component",formattedDate:"July 3, 2024",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:18.89,date:"2024-07-03T00:00:00.000Z"},{title:"React useEffect Cleanup Function",description:"Understanding the cleanup function of the useEffect hook in React. Learn how to clean up side effects in React components to prevent memory leaks and improve performance.",permalink:"/blog/useeffect-cleanup",formattedDate:"March 22, 2024",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:5.865,date:"2024-03-22T00:00:00.000Z"}],authorPosts:[{title:"How to upload files from your HTML form using Base64 encoding",description:"Uploading files using Base64 encoding is a common practice. In this guide, I'm going to show you how to upload files using base64 encoding",permalink:"/blog/how-to-base64-upload",formattedDate:"December 22, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:3.145,date:"2021-12-22T00:00:00.000Z"},{title:"We are going back to 1995! The perfect harmony of Modern stack and Win95",description:"With the Refine being headless, we may use any UI we choose for our Admin Panel. In this tutorial, we'll create a Nostalgic-style admin panel using Refine and React95 UI.",permalink:"/blog/awesome-react-windows95-ui-with-refine",formattedDate:"March 22, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:18.485,date:"2022-03-22T00:00:00.000Z"},{title:"ReactJS Frameworks You Should Know Before Start Developing B2B/Internal Application",description:"We have listed Open source ReactJS frameworks that will help and speed you up while developing internal-tool applications.",permalink:"/blog/best-internal-tool-react-frameworks",formattedDate:"March 16, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:4.115,date:"2022-03-16T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},m=[{value:"Example",id:"example",level:2},{value:"Live Codesandbox Example",id:"live-codesandbox-example",level:2},{value:"How to CSV Import with Refine?",id:"how-to-csv-import-with-refine",level:2},{value:"Refine CSV Import Usage",id:"refine-csv-import-usage",level:2},{value:"Example",id:"example-1",level:2}],d={toc:m},u="wrapper";function h(e){var{components:t}=e,n=i(e,["components"]);return(0,r.yg)(u,a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"This post was created using version 3.x.x of ",(0,r.yg)("strong",{parentName:"p"},"Refine"),". Although we plan to update it with the latest version of ",(0,r.yg)("strong",{parentName:"p"},"Refine")," as soon as possible, you can still benefit from the post in the meantime."),(0,r.yg)("p",{parentName:"admonition"},"You should know that ",(0,r.yg)("strong",{parentName:"p"},"Refine")," version 4.x.x is backward compatible with version 3.x.x, so there is no need to worry. If you want to see the differences between the two versions, check out the ",(0,r.yg)("a",{parentName:"p",href:"https://refine.dev/docs/migration-guide/"},"migration guide"),"."),(0,r.yg)("p",{parentName:"admonition"},"Just be aware that the source code example in this post have been updated to version 4.x.x.")),(0,r.yg)("p",null,"In this guide, we will learn how to import any CSV file received from the user with React. Our application will consist of two parts. We will create a form for the user to select a file. Next, we will do some operations with JavaScript to be able to view this CSV file. Let's start with our example."),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("p",null,"First, let's create a ",(0,r.yg)("a",{parentName:"p",href:"https://tr.reactjs.org/docs/forms.html"},"Form")," in React so that the user can upload a CSV file."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.js"',title:'"App.js"'},'function App() {\n  return (\n    <div style={{ textAlign: "center" }}>\n      <h1>REACTJS CSV IMPORT EXAMPLE </h1>\n      <form>\n        //highlight-start\n        <input type={"file"} accept={".csv"} />\n        //highlight-end\n        <button>IMPORT CSV</button>\n      </form>\n    </div>\n  );\n}\n')),(0,r.yg)("p",null,"We created a simple form and our input items. With the accept feature of the input element, we specify that the format of the file can only be CSV. Now, let's load and read the CSV file selected by the user with ",(0,r.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/FileReader"},"FileReader"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState } from "react";\n\nfunction App() {\n  const [file, setFile] = useState();\n\n  const fileReader = new FileReader();\n\n  const handleOnChange = (e) => {\n    setFile(e.target.files[0]);\n  };\n\n  const handleOnSubmit = (e) => {\n    e.preventDefault();\n\n    if (file) {\n      fileReader.onload = function (event) {\n        const csvOutput = event.target.result;\n      };\n\n      fileReader.readAsText(file);\n    }\n  };\n\n  return (\n    <div style={{ textAlign: "center" }}>\n      <h1>REACTJS CSV IMPORT EXAMPLE </h1>\n      <form>\n        <input\n          type={"file"}\n          id={"csvFileInput"}\n          accept={".csv"}\n          onChange={handleOnChange}\n        />\n\n        <button\n          onClick={(e) => {\n            handleOnSubmit(e);\n          }}\n        >\n          IMPORT CSV\n        </button>\n      </form>\n    </div>\n  );\n}\n')),(0,r.yg)("p",null,"Here, once the user-selected file has been successfully uploaded, we can process and display the file. Now let's load a sample CSV file and see it output on our console."),(0,r.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-01-18-csv-import/console.gif",alt:"console_csv_output"}),(0,r.yg)("br",null),(0,r.yg)("p",null,"As you can see, we can now read a selected CSV file. We can convert this file, which we read as a plain text type, into an Array of Object with JavaScript and place it inside a Table element."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'function App() {\n import React, { useState } from "react";\n\nfunction App() {\n  const [file, setFile] = useState();\n  const [array, setArray] = useState([]);\n\n  const fileReader = new FileReader();\n\n  const handleOnChange = (e) => {\n    setFile(e.target.files[0]);\n  };\n\n  const csvFileToArray = string => {\n    const csvHeader = string.slice(0, string.indexOf("\\n")).split(",");\n    const csvRows = string.slice(string.indexOf("\\n") + 1).split("\\n");\n\n    const array = csvRows.map(i => {\n      const values = i.split(",");\n      const obj = csvHeader.reduce((object, header, index) => {\n        object[header] = values[index];\n        return object;\n      }, {});\n      return obj;\n    });\n\n    setArray(array);\n  };\n\n  const handleOnSubmit = (e) => {\n    e.preventDefault();\n\n    if (file) {\n      fileReader.onload = function (event) {\n        const text = event.target.result;\n        csvFileToArray(text);\n      };\n\n      fileReader.readAsText(file);\n    }\n  };\n\n  const headerKeys = Object.keys(Object.assign({}, ...array));\n\n  return (\n    <div style={{ textAlign: "center" }}>\n      <h1>REACTJS CSV IMPORT EXAMPLE </h1>\n      <form>\n        <input\n          type={"file"}\n          id={"csvFileInput"}\n          accept={".csv"}\n          onChange={handleOnChange}\n        />\n\n        <button\n          onClick={(e) => {\n            handleOnSubmit(e);\n          }}\n        >\n          IMPORT CSV\n        </button>\n      </form>\n\n      <br />\n\n      <table>\n        <thead>\n          <tr key={"header"}>\n            {headerKeys.map((key) => (\n              <th>{key}</th>\n            ))}\n          </tr>\n        </thead>\n\n        <tbody>\n          {array.map((item) => (\n            <tr key={item.id}>\n              {Object.values(item).map((val) => (\n                <td>{val}</td>\n              ))}\n            </tr>\n          ))}\n        </tbody>\n      </table>\n    </div>\n  );\n}\n....\n')),(0,r.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-01-18-csv-import/overview.gif",alt:"overview_csv"}),(0,r.yg)("br",null),(0,r.yg)("p",null,"We formatted the CSV file that came in plain text format, using Javascript ",(0,r.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice"},"slice")," and ",(0,r.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split"},"split")," methods, and created two separate array. Then we converted Header and Rows arrays to Array of Object format as Key, Value."),(0,r.yg)("h2",{id:"live-codesandbox-example"},"Live Codesandbox Example"),(0,r.yg)("iframe",{src:"https://codesandbox.io/embed/csv-import-example-hw3ne?autoresize=1&fontsize=14&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"csv-import-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,r.yg)("h2",{id:"how-to-csv-import-with-refine"},"How to CSV Import with Refine?"),(0,r.yg)("p",null,"The CSV import with ",(0,r.yg)("strong",{parentName:"p"},"Refine")," is very simple and out-of-the-box feature. How to use it is explained step by step in the guide and example."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://refine.dev/docs/guides-and-concepts/import-export/csv-import/"},"Refer to the ",(0,r.yg)("strong",{parentName:"a"},"Refine")," CSV import guide for more information. \u2192")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/blob/main/examples/import-export-antd/src/pages/posts/list.tsx#L32"},"View Source")),(0,r.yg)("h2",{id:"refine-csv-import-usage"},"Refine CSV Import Usage"),(0,r.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-01-18-csv-import/importing.gif",alt:"importing_csv"}),(0,r.yg)("br",null),(0,r.yg)("p",null,"Importing CSV files is simple and fast using the ",(0,r.yg)("a",{parentName:"p",href:"https://refine.dev/docs/core/hooks/import-export/useImport/"},(0,r.yg)("inlineCode",{parentName:"a"},"useImport"))," hook and ",(0,r.yg)("a",{parentName:"p",href:"https://refine.dev/docs/ui-frameworks/antd/components/buttons/import-button/"},(0,r.yg)("inlineCode",{parentName:"a"},"ImportButton"))," provided by ",(0,r.yg)("strong",{parentName:"p"},"Refine"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'import {\n  List,\n  Table,\n  useTable,\n  //highlight-start\n  useImport,\n  ImportButton,\n  //highlight-end\n} from "@refinedev/antd";\n\nexport const PostList: React.FC = () => {\n  const { tableProps } = useTable<IPost>();\n\n  //highlight-start\n  const importProps = useImport<IPostFile>();\n  //highlight-end\n\n  return (\n    <List\n      pageHeaderProps={{\n        //highlight-start\n        extra: <ImportButton {...importProps} />,\n        //highlight-end\n      }}\n    >\n      <Table {...tableProps} rowKey="id">\n        <Table.Column dataIndex="id" title="ID" />\n        <Table.Column dataIndex="title" title="Title" />\n        <Table.Column dataIndex="status" title="Status" />\n      </Table>\n    </List>\n  );\n};\n\ninterface IPostFile {\n  title: string;\n  categoryId: string;\n}\ninterface IPost {\n  id: string;\n  title: string;\n  status: string;\n}\n')),(0,r.yg)("p",null,"You can also divide the data into chunk with the ",(0,r.yg)("inlineCode",{parentName:"p"},"batchSize")," option while performing the insertion process."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://refine.dev/docs/core/hooks/import-export/useImport/#api-reference"},"Refer to the ",(0,r.yg)("strong",{parentName:"a"},"Refine")," CSV Import API References for more information. \u2192")),(0,r.yg)("h2",{id:"example-1"},"Example"),(0,r.yg)("iframe",{src:"https://codesandbox.io/embed/refine-import-export-example-4nneu?autoresize=1&fontsize=14&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-import-export-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}h.isMDXComponent=!0}}]);