"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[98933],{58860:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var o=n(37953);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),g=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=g(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=g(n),d=a,m=u["".concat(s,".").concat(d)]||u[d]||p[d]||i;return n?o.createElement(m,r(r({ref:t},c),{},{components:n})):o.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,r[1]=l;for(var g=2;g<i;g++)r[g]=n[g];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9021:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>g,toc:()=>u});n(37953);var o=n(58860);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={title:"Using kubectl logs - DevOps Guide",description:"Kubernetes pod logs show container operations and events in real-time. Containers in Kubernetes pods log their stdout and stderr streams. Debugging and monitoring Kubernetes cluster applications requires these logs.",slug:"kubectl-logs",authors:"muhammad_khabbab",tags:["kubernetes","docker"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-12-28-kubectl-logs/social.png",hide_table_of_contents:!1},s=void 0,g={permalink:"/blog/kubectl-logs",source:"@site/blog/2023-12-28-kubectl-logs.md",title:"Using kubectl logs - DevOps Guide",description:"Kubernetes pod logs show container operations and events in real-time. Containers in Kubernetes pods log their stdout and stderr streams. Debugging and monitoring Kubernetes cluster applications requires these logs.",date:"2023-12-28T00:00:00.000Z",formattedDate:"December 28, 2023",tags:[{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"docker",permalink:"/blog/tags/docker"}],readingTime:8.435,hasTruncateMarker:!1,authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],frontMatter:{title:"Using kubectl logs - DevOps Guide",description:"Kubernetes pod logs show container operations and events in real-time. Containers in Kubernetes pods log their stdout and stderr streams. Debugging and monitoring Kubernetes cluster applications requires these logs.",slug:"kubectl-logs",authors:"muhammad_khabbab",tags:["kubernetes","docker"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-12-28-kubectl-logs/social.png",hide_table_of_contents:!1},prevItem:{title:"Kubernetes Image Pull Policy - A Detailed Guide",permalink:"/blog/kubernetes-image-pull-policy"},nextItem:{title:"How to Edit a crontab",permalink:"/blog/edit-crontab"},relatedPosts:[{title:"Kubernetes Operators",description:"This article digs deep into the essence of Kubernetes operators, explaining their purpose, functionality, and how they are actually implemented.",permalink:"/blog/kubernetes-operators",formattedDate:"January 12, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.425,date:"2024-01-12T00:00:00.000Z"},{title:"Docker Swarm vs. Kubernetes - DevOps Guide",description:"We'll present a detailed comparison between both Docker swarm and Kubernetes.",permalink:"/blog/docker-swarm-vs-kubernetes",formattedDate:"February 14, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:8.645,date:"2024-02-14T00:00:00.000Z"},{title:"Docker Cheat Sheet - Most Commonly Used Commands",description:"A reference guide highlighting essential Docker commands to streamline container management tasks efficiently.",permalink:"/blog/docker-cheat-sheet",formattedDate:"February 12, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.675,date:"2024-02-12T00:00:00.000Z"}],authorPosts:[{title:"How to Use Docker Copy Command",description:"We'll discuss how to copy files in Docker using the docker copy command.",permalink:"/blog/docker-copy",formattedDate:"December 28, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.1,date:"2022-12-28T00:00:00.000Z"},{title:"What Exit Code 137 means for Kubernetes",description:"We'll discuss what exit code 137 means for Kubernetes, how it reflects the operating system's intervention due to memory concerns, and how to mitigate memory issues.",permalink:"/blog/kubernetes-exit-code-137",formattedDate:"November 29, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:10.26,date:"2023-11-29T00:00:00.000Z"},{title:"Docker Cheat Sheet - Most Commonly Used Commands",description:"A reference guide highlighting essential Docker commands to streamline container management tasks efficiently.",permalink:"/blog/docker-cheat-sheet",formattedDate:"February 12, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.675,date:"2024-02-12T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},u=[{value:"Introduction",id:"introduction",level:2},{value:"Understanding Pod Logs",id:"understanding-pod-logs",level:2},{value:"Explanation of pod logs",id:"explanation-of-pod-logs",level:3},{value:"Difference between pod logs and system logs",id:"difference-between-pod-logs-and-system-logs",level:3},{value:"Prerequisites for Kubernetes Logging",id:"prerequisites-for-kubernetes-logging",level:2},{value:"Necessary tools: Kubernetes cluster and kubectl",id:"necessary-tools-kubernetes-cluster-and-kubectl",level:3},{value:"Ensure correct access rights and configuration",id:"ensure-correct-access-rights-and-configuration",level:3},{value:"Deploying a Sample Application",id:"deploying-a-sample-application",level:2},{value:"Deploying an application",id:"deploying-an-application",level:3},{value:"Create a Deployment YAML File",id:"create-a-deployment-yaml-file",level:4},{value:"Deploy using Kubectl",id:"deploy-using-kubectl",level:3},{value:"Basic Log Retrieval with kubectl",id:"basic-log-retrieval-with-kubectl",level:2},{value:"Using kubectl logs for basic log retrieval",id:"using-kubectl-logs-for-basic-log-retrieval",level:3},{value:"Advanced Log Retrieval Techniques",id:"advanced-log-retrieval-techniques",level:2},{value:"Retrieving logs from specific containers in a pod",id:"retrieving-logs-from-specific-containers-in-a-pod",level:3},{value:"Tailing logs",id:"tailing-logs",level:3},{value:"Filtering logs by time",id:"filtering-logs-by-time",level:3},{value:"Conclusion",id:"conclusion",level:2}],p={toc:u},d="wrapper";function m(e){var{components:t}=e,n=r(e,["components"]);return(0,o.yg)(d,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){a(e,t,n[t])}))}return e}({},p,n),{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"introduction"},"Introduction"),(0,o.yg)("p",null,"Logging is essential for Kubernetes application monitoring and management. It gives valuable insights into application and Kubernetes infrastructure performance. Pods, nodes, and other system components generate logs in a Kubernetes cluster."),(0,o.yg)("p",null,"The distributed and dynamic Kubernetes environment makes logging difficult. Kubernetes pods can be scheduled on multiple nodes and have ephemeral containers, making centralized logging absolutely critical. Pod logs are retained when a container restarts or a pod is evicted or deleted."),(0,o.yg)("p",null,"Today we will focus on pod-level logs through the command ",(0,o.yg)("inlineCode",{parentName:"p"},"kubectl logs"),". This command greatly helps with debugging and monitoring. This article will reveal all the secrets of ",(0,o.yg)("inlineCode",{parentName:"p"},"kubectl logs")," through examples and practical use cases. Let's start with pod-level logging basics."),(0,o.yg)("h2",{id:"understanding-pod-logs"},"Understanding Pod Logs"),(0,o.yg)("h3",{id:"explanation-of-pod-logs"},"Explanation of pod logs"),(0,o.yg)("p",null,"Kubernetes pod logs show container operations and events in real-time. Containers in Kubernetes pods log their stdout and stderr streams. Debugging and monitoring Kubernetes cluster applications requires these logs."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Key Points:")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Location"),": Pod logs are stored on the node where the pod is running."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Access"),": They can be accessed using the Kubernetes command-line tool ",(0,o.yg)("strong",{parentName:"li"},"kubectl"),"."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Persistence"),": By default, these logs are not persistent; they are deleted when the pod is deleted.")),(0,o.yg)("p",null,"The example command to view pod's log is ",(0,o.yg)("inlineCode",{parentName:"p"},"kubectl logs [POD_NAME]"),". We will discuss this in detail in this article."),(0,o.yg)("h3",{id:"difference-between-pod-logs-and-system-logs"},"Difference between pod logs and system logs"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"Pod Logs"),":")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Scope"),": Specific to a single pod."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Content"),": Includes output from the application or service running inside the pod."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Use Case"),": Debugging application-level issues, monitoring application performance, and troubleshooting."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Accessed Through"),": ",(0,o.yg)("inlineCode",{parentName:"li"},"kubectl logs"),".")),(0,o.yg)("ol",{start:3},(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"System Logs"),":")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Scope"),": Related to the Kubernetes node or the entire Kubernetes system."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Content"),": Includes logs from the kubelet, container runtime, and other system components."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Use Case"),": Diagnosing cluster-level issues, node-level problems, and monitoring the health of the Kubernetes infrastructure."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Accessed Through"),": System tools like ",(0,o.yg)("inlineCode",{parentName:"li"},"journalctl")," or log files in ",(0,o.yg)("inlineCode",{parentName:"li"},"/var/log/"),".\nAn example of a pod log is an error thrown by your application code. At the same time, a kubelet error on a node will be shown in the system log.")),(0,o.yg)("p",null,"Let's start with getting the list of the pods and see what details are displayed after executing the ",(0,o.yg)("inlineCode",{parentName:"p"},"kubectl")," command."),(0,o.yg)("div",{className:"centered-image"},(0,o.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-12-28-kubectl-logs/image1.png",alt:"Getting list of pods"})),(0,o.yg)("p",null,"As you can see, there is only one pod because it is a small application. Here is the description of each of the columns shown in this example screenshot."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Name"),": Name of the pod."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Ready"),": Number of containers in the pod that are ready. In our case there was only one container"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Status"),": Current status of the pod (e.g., Running, Pending, Failed)."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Restart"),": Number of times the containers in the pod have restarted."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Age"),": How long has the pod been running? In our case it is more than 40 mins.")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Expert tips:")," Note that excessive logging can consume storage. Also, in the production environment, keep an eye on logging the sensitive information about customers like their email addresses or their IP addresses, etc. Last but not least, ensure that the time is synchronized across your cluster to avoid confusion when correlating logs from different sources."),(0,o.yg)("h2",{id:"prerequisites-for-kubernetes-logging"},"Prerequisites for Kubernetes Logging"),(0,o.yg)("h3",{id:"necessary-tools-kubernetes-cluster-and-kubectl"},"Necessary tools: Kubernetes cluster and kubectl"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"1. Kubernetes Cluster:")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Setup"),": You need an up-and-running Kubernetes cluster. This can be a Minikube cluster for local development, a cloud-based cluster like GKE (Google Kubernetes Engine), EKS (Elastic Kubernetes Service from AWS), or AKS (Azure Kubernetes Service), or a self-hosted Kubernetes."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Verification"),": Use ",(0,o.yg)("inlineCode",{parentName:"li"},"kubectl get nodes")," to verify that your cluster is up and running. You should see a list of available nodes.")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"2. kubectl:")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Installation"),": Ensure that ",(0,o.yg)("strong",{parentName:"li"},"kubectl"),", the Kubernetes command-line tool, is installed on your machine. It's the primary tool for communicating with your cluster."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Configuration"),": ",(0,o.yg)("strong",{parentName:"li"},"kubectl")," should be configured to interact with your Kubernetes cluster. This typically involves setting up a ",(0,o.yg)("strong",{parentName:"li"},"kubeconfig")," file, often located at ",(0,o.yg)("inlineCode",{parentName:"li"},"~/.kube/config"),"."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Verification Command"),": Run ",(0,o.yg)("inlineCode",{parentName:"li"},"kubectl version")," to confirm it is installed and configured correctly. This command shows both the client and server versions. If your cluster is not working, it will not show the server version, but it will still show you the version information.",(0,o.yg)("div",{className:"centered-image"},(0,o.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-12-28-kubectl-logs/image2.png",alt:"Getting list of pods"})))),(0,o.yg)("p",null,"As you can see in the above image, both client and server versions are shown, which means you are good to go. Another command to verify your cluster's health is ",(0,o.yg)("inlineCode",{parentName:"p"},"kubectl cluster-info ."),"It will display information about the control node and services in the cluster, along with their IP addresses. It is a quick way to confirm that you can access the cluster and that it's operational."),(0,o.yg)("h3",{id:"ensure-correct-access-rights-and-configuration"},"Ensure correct access rights and configuration"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Access rights"),"\nKubernetes manages resource access with RBAC. Your user or service account must have log access and viewing permissions. View or edit roles at the namespace level and cluster-admin for cluster-level access are common logging roles. Forbidden or Access Denied errors may result from incorrect permissions."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Correct configuration of kubectl"),"\n",(0,o.yg)("strong",{parentName:"p"},"Contexts"),": In Kubernetes, you can switch between different clusters and namespaces using contexts. For example, switching between dev and production contexts. Make sure you are using the correct context for the cluster you plan to work with. Use ",(0,o.yg)("inlineCode",{parentName:"p"},"kubectl config get-contexts")," to list and ",(0,o.yg)("inlineCode",{parentName:"p"},"kubectl config use-context [context-name]")," to switch contexts."),(0,o.yg)("h2",{id:"deploying-a-sample-application"},"Deploying a Sample Application"),(0,o.yg)("h3",{id:"deploying-an-application"},"Deploying an application"),(0,o.yg)("h4",{id:"create-a-deployment-yaml-file"},"Create a Deployment YAML File"),(0,o.yg)("p",null,"First, create a YAML file that describes your deployment. This file specifies the desired state of your deployment, including the number of replicas, container images, ports, etc.\nHere's an example ",(0,o.yg)("inlineCode",{parentName:"p"},"helloapp-deployment.yaml"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"  apiVersion: apps/v1\n    kind: Deployment\n    metadata:\n      name: hello-app\n      labels:\n        app: hello-app\n    spec:\n      replicas: 1\n      selector:\n        matchLabels:\n          app: hello-app\n      template:\n        metadata:\n          labels:\n")),(0,o.yg)("p",null,"This file will create a deployment named ",(0,o.yg)("inlineCode",{parentName:"p"},"hello-app")," with one pod."),(0,o.yg)("h3",{id:"deploy-using-kubectl"},"Deploy using Kubectl"),(0,o.yg)("p",null,"With the YAML file ready, use ",(0,o.yg)("inlineCode",{parentName:"p"},"kubectl")," to apply the deployment. Here is the command:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"kubectl apply -f hello-app.yaml\n")),(0,o.yg)("p",null,"This command is instructing Kubernetes to create the deployment as described in the ",(0,o.yg)("em",{parentName:"p"},"hello-app.yaml")," file."),(0,o.yg)("div",{className:"centered-image"},(0,o.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-12-28-kubectl-logs/image3.png",alt:"Applying yaml file to pod"})),(0,o.yg)("p",null,"As you can see from the screenshot, the pod is successfully configured with this yaml file. You can also see a warning that kubectl will not be able to track the last applied configuration of the pod without the annotation. This means that if you make changes to the pod specs and then run kubectl apply, kubectl may not patch the pod specs correctly."),(0,o.yg)("h2",{id:"basic-log-retrieval-with-kubectl"},"Basic Log Retrieval with kubectl"),(0,o.yg)("h3",{id:"using-kubectl-logs-for-basic-log-retrieval"},"Using kubectl logs for basic log retrieval"),(0,o.yg)("p",null,"Let's retrieve logs of a pod through ",(0,o.yg)("inlineCode",{parentName:"p"},"kubectl logs <pod-name>")),(0,o.yg)("div",{className:"centered-image"},(0,o.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-12-28-kubectl-logs/image4.png",alt:"Getting pod logs"})),(0,o.yg)("p",null,"As you can see, all the logs for this particular pod are displayed. If you want to download these logs to a text file for analysis, then you can use ",(0,o.yg)("inlineCode",{parentName:"p"},"kubectl logs my-pod > my-pod-logs.txt")," command to do that. The only possible error you might get when running this command is that the pod is not in a running state. In that case you will see an error."),(0,o.yg)("h2",{id:"advanced-log-retrieval-techniques"},"Advanced Log Retrieval Techniques"),(0,o.yg)("h3",{id:"retrieving-logs-from-specific-containers-in-a-pod"},"Retrieving logs from specific containers in a pod"),(0,o.yg)("p",null,"Remember the command to retrieve the logs for a pod ",(0,o.yg)("inlineCode",{parentName:"p"},"kubectl logs <pod-name>"),"? We know that each pod can have multiple running containers. Which container's logs will be printed when we execute the above-mentioned command? The answer is simple: it will show the primary (the first container) logs. The primary container is the one running your application, while other containers are considered helper containers. That brings us to the next point: how to to view the logs of a particular container. Let's see the command."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"kubectl logs <pod-name> -c <container-name>\n")),(0,o.yg)("p",null,"You need to specify both the pod name and the container name. Let's try this out."),(0,o.yg)("div",{className:"centered-image"},(0,o.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-12-28-kubectl-logs/image5.png",alt:"Getting pod's container log"})),(0,o.yg)("p",null,"Similarly, if you want to see the logs from the previous instance of the container, you can use the ",(0,o.yg)("inlineCode",{parentName:"p"},"-previous")," flag like this ",(0,o.yg)("inlineCode",{parentName:"p"},"kubectl logs <pod-name> -c <container-name> -previous")," This is helpful where the container has restarted and you would like to view the logs before that restart."),(0,o.yg)("h3",{id:"tailing-logs"},"Tailing logs"),(0,o.yg)("p",null,"If you want to see the container logs in real-time on the go, you can the ",(0,o.yg)("inlineCode",{parentName:"p"},"-f")," flag like this ",(0,o.yg)("inlineCode",{parentName:"p"},"kubectl logs <pod-name> -c <container-name> -f")," It will keep your connection open and will display logs in real-time, until you terminate the execution through ",(0,o.yg)("inlineCode",{parentName:"p"},"Ctrl+C"),". It is useful for monitoring application behavior and identifying potential issues in real-time."),(0,o.yg)("h3",{id:"filtering-logs-by-time"},"Filtering logs by time"),(0,o.yg)("p",null,"Sometimes, you would like to see logs only for a particular time period, like the last hour. You can use the --since flag to do that. Here is an example below."),(0,o.yg)("div",{className:"centered-image"},(0,o.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-12-28-kubectl-logs/image6.png",alt:"Time specific container logs"})),(0,o.yg)("p",null,"You can also use 1d for one day and 1m for one minute."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Expert tips")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"You can also get logs of multiple pods in one go. Just use label selectors with ",(0,o.yg)("inlineCode",{parentName:"li"},"kubectl logs -l")," to view logs from multiple pods simultaneously. For example, ",(0,o.yg)("inlineCode",{parentName:"li"},"kubectl logs -l appname=stagingapp")," would show logs from all pods labeled with ",(0,o.yg)("inlineCode",{parentName:"li"},"appname=stagingapp")),(0,o.yg)("li",{parentName:"ul"},"We had earlier mentioned that by default, you will be shown the logs of just one container of the pod. However, you can also see logs of all the containers of a pod using ",(0,o.yg)("inlineCode",{parentName:"li"},"kubectl logs <pod name> --all-containers=true")),(0,o.yg)("li",{parentName:"ul"},"If you work with multiple Kubernetes clusters at the same time, you can use ",(0,o.yg)("inlineCode",{parentName:"li"},"kubectl logs <pod name> --context=<context-name>")," to specify which cluster's logs you want to view.")),(0,o.yg)("h2",{id:"conclusion"},"Conclusion"),(0,o.yg)("p",null,"A pod is the basic unit of work in Kubernetes. In case of any issue in your application, the first thing you will do is check the logs of the pod. This guide has discussed the pods logs in detail. We have gone through different examples to show the result of kubectl commands to view pod's logs."),(0,o.yg)("p",null,"After reading this article, you will be fully equipped to troubleshoot any issues in your Kubernetes pod. Continue practicing the commands outlined in this article to gain practical experience and become an expert in Kubernetes."))}m.isMDXComponent=!0}}]);