"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[47003],{58860:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>d});var a=t(37953);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},g=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),m=p(t),u=l,d=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return t?a.createElement(d,r(r({ref:n},g),{},{components:t})):a.createElement(d,r({ref:n},g))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,r=new Array(o);r[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[m]="string"==typeof e?e:l,r[1]=i;for(var p=2;p<o;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},19803:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>m});t(37953);var a=t(58860);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function r(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}const i={title:"Kubectl Cheat Sheet - With Examples",description:"Kubectl is a very handy tool if you want to manage your applications deployed in Kubernetes.",slug:"kubectl-cheat-sheet",authors:"muhammad_khabbab",tags:["kubernetes","docker"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-12-15-kubectl-cheat-sheet/social.png",hide_table_of_contents:!1},s=void 0,p={permalink:"/blog/kubectl-cheat-sheet",source:"@site/blog/2023-12-15-kubectl-cheat-sheet.md",title:"Kubectl Cheat Sheet - With Examples",description:"Kubectl is a very handy tool if you want to manage your applications deployed in Kubernetes.",date:"2023-12-15T00:00:00.000Z",formattedDate:"December 15, 2023",tags:[{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"docker",permalink:"/blog/tags/docker"}],readingTime:9.235,hasTruncateMarker:!1,authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],frontMatter:{title:"Kubectl Cheat Sheet - With Examples",description:"Kubectl is a very handy tool if you want to manage your applications deployed in Kubernetes.",slug:"kubectl-cheat-sheet",authors:"muhammad_khabbab",tags:["kubernetes","docker"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-12-15-kubectl-cheat-sheet/social.png",hide_table_of_contents:!1},prevItem:{title:"The Anatomy of the Web Development in 2024",permalink:"/blog/web-development"},nextItem:{title:"Kubernetes Persistent Volumes - Best Practices and Use Cases",permalink:"/blog/kubernetes-persistent-volumes"},relatedPosts:[{title:"How to Edit a crontab",description:"Crontab is a powerful scheduling tool in Unix-like systems. This article provides a comprehensive guide on using crontab, covering the basics of creating a crontab, setting up environment variables, scheduling jobs, and error handling.",permalink:"/blog/edit-crontab",formattedDate:"January 3, 2025",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:10.745,date:"2025-01-03T00:00:00.000Z"},{title:"Kubectl Restart Pod - Restarting Pods in Kubernetes",description:"We'll discuss the importance of restarting pods in Kubernetes, the different methods to do so, and the best practices to follow.",permalink:"/blog/kubectl-restart-pod",formattedDate:"October 22, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.14,date:"2023-10-22T00:00:00.000Z"},{title:"Docker Alternatives",description:"We'll discuss top alternatives of Docker walking your through their pros and cons and how they compare to Docker.",permalink:"/blog/docker-alternatives",formattedDate:"February 5, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:11.35,date:"2024-02-05T00:00:00.000Z"}],authorPosts:[{title:"A Guide for Delete Pods from Kubernetes Nodes - kubectl delete",description:"We'll learn how to delete pods from Kubernetes nodes using the kubectl delete command.",permalink:"/blog/kubectl-delete-pod",formattedDate:"November 20, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:11.225,date:"2023-11-20T00:00:00.000Z"},{title:"git switch and git checkout \u2013 How to switch branches in git",description:"We will go through different use cases and examples for using git checkout and git switch.",permalink:"/blog/git-switch-and-git-checkout",formattedDate:"November 27, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:12.005,date:"2024-11-27T00:00:00.000Z"},{title:"esbuild - Next-generation JavaScript bundler",description:"The advantages of using esbuild and how to use it in your project.",permalink:"/blog/what-is-esbuild",formattedDate:"November 12, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:18.025,date:"2024-11-12T00:00:00.000Z"}]},g={authorsImageUrls:[void 0]},m=[{value:"Introduction",id:"introduction",level:2},{value:"Setup and Basic Commands",id:"setup-and-basic-commands",level:2},{value:"Installing kubectl: version",id:"installing-kubectl-version",level:3},{value:"Basic Syntax",id:"basic-syntax",level:3},{value:"Cluster Management and Context",id:"cluster-management-and-context",level:2},{value:"Viewing Cluster Info",id:"viewing-cluster-info",level:3},{value:"Switching Context",id:"switching-context",level:3},{value:"Working with Namespaces",id:"working-with-namespaces",level:2},{value:"Namespace Creation",id:"namespace-creation",level:3},{value:"Namespace Listing",id:"namespace-listing",level:3},{value:"Namespace Deletion",id:"namespace-deletion",level:3},{value:"Management of pods and deployment",id:"management-of-pods-and-deployment",level:2},{value:"Pods Creating",id:"pods-creating",level:3},{value:"Get list of pods",id:"get-list-of-pods",level:3},{value:"Deleting Pods",id:"deleting-pods",level:3},{value:"Creating Deployments",id:"creating-deployments",level:3},{value:"Listing deployments",id:"listing-deployments",level:3},{value:"<strong>Handling Services and Nodes</strong>",id:"handling-services-and-nodes",level:2},{value:"Manage Services",id:"manage-services",level:3},{value:"List Nodes",id:"list-nodes",level:3},{value:"Advanced Resource Management",id:"advanced-resource-management",level:2},{value:"Kubectl Labels",id:"kubectl-labels",level:3},{value:"Scale deployments with kubectl",id:"scale-deployments-with-kubectl",level:3},{value:"<strong>Debugging and Logs</strong>",id:"debugging-and-logs",level:2},{value:"Log Access",id:"log-access",level:3},{value:"Tailing Logs",id:"tailing-logs",level:3},{value:"<strong>Secrets and ConfigMaps</strong>",id:"secrets-and-configmaps",level:2},{value:"Creating Secrets",id:"creating-secrets",level:3},{value:"Using ConfigMaps",id:"using-configmaps",level:3},{value:"<strong>Useful Tips and Tricks</strong>",id:"useful-tips-and-tricks",level:2},{value:"Aliases for efficiency",id:"aliases-for-efficiency",level:3},{value:"Kubectl Autocomplete for Faster Command Completion",id:"kubectl-autocomplete-for-faster-command-completion",level:3},{value:"Using Kubectl Port-Forward for Accessing Services Locally",id:"using-kubectl-port-forward-for-accessing-services-locally",level:3},{value:"Conclusion",id:"conclusion",level:2}],c={toc:m},u="wrapper";function d(e){var{components:n}=e,t=r(e,["components"]);return(0,a.yg)(u,o(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){l(e,n,t[n])}))}return e}({},c,t),{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"Kubernetes is a famous container orchestration tool that is very popular in modern software development. If you are using Kubernetes, you must have used Kubectl, which is the command line tool to manage your Kubernetes applications. This guide will walk you through the most frequently used commands for Kubectl. Not only will we discuss the important commands, but we will also discuss the practical code examples and the common errors that are faced during their execution. Some examples of what it can do includes:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Management of your pods"),(0,a.yg)("li",{parentName:"ul"},"Management of your deployments"),(0,a.yg)("li",{parentName:"ul"},"Management of your services"),(0,a.yg)("li",{parentName:"ul"},"And many more")),(0,a.yg)("p",null,"Now, we may not be able to cover each and every command, but be assured that the commands discussed below will certainly be of value if your application is using Kubernetes. Let's start with the basic one i.e. installation and setup of Kubectl."),(0,a.yg)("h2",{id:"setup-and-basic-commands"},"Setup and Basic Commands"),(0,a.yg)("h3",{id:"installing-kubectl-version"},"Installing kubectl: version"),(0,a.yg)("p",null,"Checks kubectl installation and version."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Common errors:")," command not found (No kubectl installed)."),(0,a.yg)("p",null,"Refused connection to localhost:8080: Kubernetes cluster is not running or kubectl is misconfigured."),(0,a.yg)("h3",{id:"basic-syntax"},"Basic Syntax"),(0,a.yg)("p",null,"The basic syntax of any kubectl command is: ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl [command] Type [name] [flags]"),"\nNote that 'TYPE' and 'NAME' are context-dependent and may not be required in that order."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Common Flags:")),(0,a.yg)("p",null,"Command include get, describe, and create."),(0,a.yg)("p",null,"Type: pod, service."),(0,a.yg)("p",null,"Name: Optional for commanding all resources of a type."),(0,a.yg)("p",null,"Optional flags, like ",(0,a.yg)("inlineCode",{parentName:"p"},"--namespace")," ."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Example:")," ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl get pods -n mynamespace")),(0,a.yg)("p",null,"This command lists all 'mynamespace' pods."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Common Flags:")),(0,a.yg)("p",null,"Use the -n or --namespace flag to specify the namespace."),(0,a.yg)("p",null,"Use ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl get pods -n mynamespace")," with -o or --output for output formats like json or yaml. E.g. ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl get pod mypod json")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Common Errors:"),' Invalid namespace or output format can cause server errors like "Not Found".'),(0,a.yg)("h2",{id:"cluster-management-and-context"},"Cluster Management and Context"),(0,a.yg)("h3",{id:"viewing-cluster-info"},"Viewing Cluster Info"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"kubectl cluster-info")),(0,a.yg)("p",null,"Displays cluster master and service endpoints."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Common Flags:")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"--kubeconfig")," This option specifies the kubeconfig file."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Common Errors:")," Unable to connect to server due to network or connection issues."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Example:")," ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl cluster-info --kubeconfig=/myconfig")),(0,a.yg)("h3",{id:"switching-context"},"Switching Context"),(0,a.yg)("p",null,"Switches one context to another."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"kubectl config use-context [context_name]")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Common Flags:")," It is most of the time used without any specific flags"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Common Errors:")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"error: no context exists with the name: [context_name]")," : If context does not exist."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Example:")," ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl config use-context staging-context")),(0,a.yg)("h2",{id:"working-with-namespaces"},"Working with Namespaces"),(0,a.yg)("p",null,"Kubernetes namespaces segment and manage resources. Important namespace operations are below."),(0,a.yg)("h3",{id:"namespace-creation"},"Namespace Creation"),(0,a.yg)("p",null,"This simple command creates a Kubernetes namespace. Due to its specific functionality, it has few variants and flags.\n",(0,a.yg)("strong",{parentName:"p"},"Example:")),(0,a.yg)("p",null,"Create a dev namespace using: ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl create namespace dev")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Common Errors:")),(0,a.yg)("p",null,"Trying to create an existing namespace.\n",(0,a.yg)("strong",{parentName:"p"},"Common flags:")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"--dry-run")," Shows the namespace without creating it."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"-o [format]")," Outputs details in yaml or json format.")),(0,a.yg)("h3",{id:"namespace-listing"},"Namespace Listing"),(0,a.yg)("p",null,"This command displays all Kubernetes namespaces."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Example:"),"\nSimple list: ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl get namespaces"),"\nDetailed list: ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl get namespaces -o wide")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Common Errors:"),"\nUsing wrong flags or formats."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Common Flags:")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"-o wide"),": Shows namespace details like age."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"-o json")," or ",(0,a.yg)("inlineCode",{parentName:"li"},"-o yaml")," The details are output in JSON or YAML."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"--show-labels"),": It shows Namespace labels.")),(0,a.yg)("h3",{id:"namespace-deletion"},"Namespace Deletion"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"kubectl delete [namespace_name]")),(0,a.yg)("p",null,"This removes a namespace and its resources. Be careful since this is an irreversible operation."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Example:"),"\nYou can delete test namespace using: ",(0,a.yg)("inlineCode",{parentName:"p"},"Run kubectl delete namespace test")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Common Errors:")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Trying to delete a system or nonexistent namespace.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Not migrating or backing up namespace resources."),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Common Flags:")))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"--grace-period=[seconds]")," Allows setting a grace period before deletion."),(0,a.yg)("li",{parentName:"ul"},"Use ",(0,a.yg)("inlineCode",{parentName:"li"},"--force")," to delete the namespace forecibly."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"--cascade")," : Decides whether to delete namespace resources or not.")),(0,a.yg)("h2",{id:"management-of-pods-and-deployment"},"Management of pods and deployment"),(0,a.yg)("h3",{id:"pods-creating"},"Pods Creating"),(0,a.yg)("p",null,"Pods are created with ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl run [pod_name]. --image=[image_name]")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Common Flags:")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"--env")," Configure environment variables."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"-l, --labels")," Labels the pod."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"--dry-run")," Simulate pod-making. It is useful for testing on QA/Staging before deployment to production.")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Example:"),"\nUsing the 'nginx' image to create 'nginx-pod' ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl run nginx-pod --image=nginx")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Common Error:"),"\nThe ",(0,a.yg)("inlineCode",{parentName:"p"},"Error: image not found")," error occurs when the container image does not exist."),(0,a.yg)("h3",{id:"get-list-of-pods"},"Get list of pods"),(0,a.yg)("p",null,"See all the pods in currently set namespace ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl get pods")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Common Flags"),":"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"-o wide ")," To display the details like node name."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"--show-labels")," Labels also display for each pod.\n",(0,a.yg)("strong",{parentName:"li"},"Example:"),(0,a.yg)("inlineCode",{parentName:"li"},"kubectl get pods -o wide")," will show all pods with all their details.")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Common Error:"),"\nThe ",(0,a.yg)("inlineCode",{parentName:"p"},"No resources found")," error occurs when the namespace has no pods."),(0,a.yg)("h3",{id:"deleting-pods"},"Deleting Pods"),(0,a.yg)("p",null,"The command to delete a pod is ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl delete pod [pod_name]")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Common Flags:")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"--grace-period"),": Pause before killing the pod forcibly."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"--force"),": Immediately delete pod forcibly.")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Example:")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"kubectl delete nginx-pod")," removes 'nginx-pod'."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Common Error:"),"\nA common error is ",(0,a.yg)("inlineCode",{parentName:"p"},"Pod not found")," when the pod does not exist."),(0,a.yg)("h3",{id:"creating-deployments"},"Creating Deployments"),(0,a.yg)("p",null,"Creates a deployment with its name and image ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl create deployment [name] --image=[image]")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Common Flags:")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"--replicas")," Set desired number of replicas."),(0,a.yg)("li",{parentName:"ul"},"Run ",(0,a.yg)("inlineCode",{parentName:"li"},"--dry-run")," to simulate deployment instead of actual deployment.")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Example:"),"\nUse the 'nginx' image to create 'nginx-deployment' ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl create deployment nginx-deployment --image=nginx")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Common Error:"),"\nImage format errors often result in ",(0,a.yg)("inlineCode",{parentName:"p"},"Invalid image name")," errors."),(0,a.yg)("h3",{id:"listing-deployments"},"Listing deployments"),(0,a.yg)("p",null,"Shows namespace deployments ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl get deployments")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Common Flags:"),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"-o wide")," Shows extra details like replica count."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Example:")),(0,a.yg)("p",null,"Displays all deployments ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl get deployments")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Common Error:"),"\nThe ",(0,a.yg)("inlineCode",{parentName:"p"},"No resources found")," error occurs when the namespace has no deployments."),(0,a.yg)("h2",{id:"handling-services-and-nodes"},(0,a.yg)("strong",{parentName:"h2"},"Handling Services and Nodes")),(0,a.yg)("h3",{id:"manage-services"},"Manage Services"),(0,a.yg)("p",null,"Overview\n",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl get services")," helps users quickly view all Kubernetes cluster services and their status."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Common Flags"),":"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"-o wide")," : Provides additional details for each service."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"--all-namespaces")," You can see all the services present in all the namespaces."),(0,a.yg)("li",{parentName:"ul"},"`--watch```Monitors service changes and updates display.")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Example:"),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl get services -o wide"),"\nThis command will display all default namespace services in detail."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Common Error:"),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"Services' service-name' not found")," Typing a service name incorrectly or querying a nonexistent service."),(0,a.yg)("h3",{id:"list-nodes"},"List Nodes"),(0,a.yg)("p",null,"Command ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl get nodes")," displays all cluster nodes for size and health assessment."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Common Flags:")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"-o wide")," Displays extra details like IP addresses, OS, kernel version, etc."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"--selecto")," Filters nodes by label."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"--showlabels")," Shows node labels.")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Example:"),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl get nodes --selector=environment=production")," This command displays all production nodes."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Common Error:"),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"Connection to server localhost:8080 refused")," Usually due to incorrect kubectl configuration or inaccessible Kubernetes clusters."),(0,a.yg)("h2",{id:"advanced-resource-management"},"Advanced Resource Management"),(0,a.yg)("h3",{id:"kubectl-labels"},"Kubectl Labels"),(0,a.yg)("p",null,"Kubernetes labels are key-value pairs on pods. They organize and select object subsets. The command ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl get pods -l ")," retrieves pods by label."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Common Flags:")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"--l")," or ",(0,a.yg)("inlineCode",{parentName:"li"},"--selector"),": Specifies label selector"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"--all-namespaces")," searches all namespaces"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"-o' or "),"--output` Outputs the format (yaml, json)")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Example:"),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl get pods -l app=myApp"),' lists all pods with the label "app" equal to myApp.'),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Common Error"),":\nIncorrect label names or values often result in no results. Ensure pod labels are correct."),(0,a.yg)("h3",{id:"scale-deployments-with-kubectl"},"Scale deployments with kubectl"),(0,a.yg)("p",null,"Scaling deployments involves changing the number of pod replicas (instances). The ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl scale")," command does this magic."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Common Flags:")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"--replicas")," Specifies number of copies needed"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"--current-replicas")," Current replica count (For conditional scaling)"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"--timeout:"),"Time to wait for scale operation completion")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Example:")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"kubectl scale deployment myDeployment --replicas=5")," scales myDeployment to 5 replicas."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Common Error"),":\nA ",(0,a.yg)("inlineCode",{parentName:"p"},"deployment not found")," error often occurs when scaling a nonexistent or misnamed deployment. The deployment name must be in the current namespace."),(0,a.yg)("h2",{id:"debugging-and-logs"},(0,a.yg)("strong",{parentName:"h2"},"Debugging and Logs")),(0,a.yg)("h3",{id:"log-access"},"Log Access"),(0,a.yg)("p",null,"Kubernetes pod logs can be retrieved using ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl logs [pod_name]"),". Understanding pod-running applications and diagnosing issues requires this command."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Example:"),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl logs my-app-pod"),' will show logs of the pod named "my-app-pod".'),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Common Error:"),"\n",(0,a.yg)("inlineCode",{parentName:"p"},'Error from server (NotFound): pods "my-app-pod" not found')," This error occurs when the Kubernetes cluster does not have any pod with this name."),(0,a.yg)("h3",{id:"tailing-logs"},"Tailing Logs"),(0,a.yg)("p",null,'You can stream or "tail" pod logs with ',(0,a.yg)("inlineCode",{parentName:"p"},"kubectl logs -f [pod_name]"),". This helps monitor log outputs in real-time, especially in dynamic environments."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Example:"),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl logs -f my-app-pod"),' Logs from the pod "my-app-pod" will be streamed live by this command.'),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Common Error:"),"\n",(0,a.yg)("inlineCode",{parentName:"p"},'Error from server (NotFound): pods "my-app-pod" not found'),". This error means the Kubernetes cluster does not have the specified pod."),(0,a.yg)("h2",{id:"secrets-and-configmaps"},(0,a.yg)("strong",{parentName:"h2"},"Secrets and ConfigMaps")),(0,a.yg)("h3",{id:"creating-secrets"},"Creating Secrets"),(0,a.yg)("p",null,"Kubernetes secrets store and manage passwords, OAuth tokens, and ssh keys. You can easily create these secrets with ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl create secret generic [secret_name] --from-literal=[key]=[value]")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Common Flags:")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"--from-literal")," This flag specifies secret data as key-value pairs on the command line."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"--from-file")," Create secret from a file. In this case file name would be considered the key and its content will be the value."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"--dry-run")," Displays the object that would be sent to the cluster without actually sending it."),(0,a.yg)("li",{parentName:"ul"}),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"--output")," or `-o' sets the output format (yaml or json).")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Example:"),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl create secret generic my-secret --from-literal=password=myStrongPassword")),(0,a.yg)("p",null,"This command creates a secret named my-secret with one entry: password and myStrongPassword."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Common Error:")),(0,a.yg)("p",null,"Incorrect or malformed key-value pairs are common when creating secrets. Following key=value format is essential."),(0,a.yg)("h3",{id:"using-configmaps"},"Using ConfigMaps"),(0,a.yg)("p",null,"Kubernetes ConfigMaps stores non-confidential data in key-value pairs. Configuration files, command-line arguments, environment variables, port numbers, etc. can be stored there. The format is ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl create configmap [name] --from-literal=[key]=[value]")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Common Flags")),(0,a.yg)("p",null,"Same as creating secrets (see above)"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Example:")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"kubectl create configmap app-config --from-literal=app_mode=production")),(0,a.yg)("p",null,'A ConfigMap named "app-config" with app_mode set to production is created.'),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Common Error:")),(0,a.yg)("p",null,"When using ",(0,a.yg)("inlineCode",{parentName:"p"},"--from-file"),", referencing nonexistent files or directories is a common error. Verify file paths are correct and accessible."),(0,a.yg)("h2",{id:"useful-tips-and-tricks"},(0,a.yg)("strong",{parentName:"h2"},"Useful Tips and Tricks")),(0,a.yg)("h3",{id:"aliases-for-efficiency"},"Aliases for efficiency"),(0,a.yg)("p",null,"Using aliases for kubectl can speed up workflow by reducing keystrokes for each command."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Example:")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Alias k=kubectl"),"\nYou frequently check pod status. The alias lets you type ",(0,a.yg)("inlineCode",{parentName:"p"},"k get pods")," instead of typing the whole word of kubectl."),(0,a.yg)("h3",{id:"kubectl-autocomplete-for-faster-command-completion"},"Kubectl Autocomplete for Faster Command Completion"),(0,a.yg)("p",null,"Kubectl supports command-line autocompletion, saving significant time. This feature speeds up command, argument, and resource name completion."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Setting up autocomplete:")),(0,a.yg)("p",null,"Source the autocomplete script in your shell's configuration file. For bash, You can add ",(0,a.yg)("inlineCode",{parentName:"p"},"source <(kubectl completion bash) "),"to your ",(0,a.yg)("inlineCode",{parentName:"p"},".bashrc"),". Add ",(0,a.yg)("inlineCode",{parentName:"p"},"source <(kubectl completion zsh)")," to your ",(0,a.yg)("inlineCode",{parentName:"p"},".zshrc")," file for zsh."),(0,a.yg)("p",null,"After setting up, typing a command like ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl get pod")," and pressing tab completes this command to ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl get pods"),"."),(0,a.yg)("h3",{id:"using-kubectl-port-forward-for-accessing-services-locally"},"Using Kubectl Port-Forward for Accessing Services Locally"),(0,a.yg)("p",null,"When using ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl port-forward"),", you can access and interact with internal Kubernetes cluster services from your local machine."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Example:")),(0,a.yg)("p",null,"Use ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl port-forward svc/my-web-app 5000:8080")," to forward a cluster service on port 8080."),(0,a.yg)("p",null,"The service's port 8080 receives traffic from your local machine's port 5000, so you can access the application at http://localhost:5000 in your browser."),(0,a.yg)("h2",{id:"conclusion"},"Conclusion"),(0,a.yg)("p",null,"Kubetcl is a very handy tool if you want to manage your applications deployed in Kubernetes. Whether you are a novice or a seasoned practitioner, this guide will help you on every step of your Kubernetes journey, whether you are creating a pod or scaling your cluster."),(0,a.yg)("p",null,"Give special attention to the different tips and tricks mentioned in this article because they will save you a lot of time and effort. We encourage you to try the commands mentioned in this article and get your hands dirty; that's the best way to master Kubectl."))}d.isMDXComponent=!0}}]);