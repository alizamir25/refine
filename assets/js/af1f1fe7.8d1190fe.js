"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[75378],{58860:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>u});var a=t(37953);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(t),p=r,u=d["".concat(l,".").concat(p)]||d[p]||g[p]||o;return t?a.createElement(u,i(i({ref:n},m),{},{components:t})):a.createElement(u,i({ref:n},m))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9149:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});t(37953);var a=t(58860);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const s={title:"Docker Swarm Mode Guide",description:"We'll cover the basics of Docker Swarm mode, including how to set up your first Swarm, join nodes to the Swarm, deploy services, scale services, and monitor services.",slug:"docker-swarm",authors:"muhammad_khabbab",tags:["docker","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/social.png",hide_table_of_contents:!1},l=void 0,c={permalink:"/blog/docker-swarm",source:"@site/blog/2023-10-05-docker-swarm.md",title:"Docker Swarm Mode Guide",description:"We'll cover the basics of Docker Swarm mode, including how to set up your first Swarm, join nodes to the Swarm, deploy services, scale services, and monitor services.",date:"2023-10-05T00:00:00.000Z",formattedDate:"October 5, 2023",tags:[{label:"docker",permalink:"/blog/tags/docker"},{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:9.53,hasTruncateMarker:!1,authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],frontMatter:{title:"Docker Swarm Mode Guide",description:"We'll cover the basics of Docker Swarm mode, including how to set up your first Swarm, join nodes to the Swarm, deploy services, scale services, and monitor services.",slug:"docker-swarm",authors:"muhammad_khabbab",tags:["docker","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/social.png",hide_table_of_contents:!1},prevItem:{title:"Introduction to Docker Networking",permalink:"/blog/docker-networking"},nextItem:{title:"Building a Complete React CRM App with Refine, Ant Design and GraphQL",permalink:"/blog/react-crm-with-refine"},relatedPosts:[{title:"Kubectl Cheat Sheet - With Examples",description:"Kubectl is a very handy tool if you want to manage your applications deployed in Kubernetes.",permalink:"/blog/kubectl-cheat-sheet",formattedDate:"December 15, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.235,date:"2023-12-15T00:00:00.000Z"},{title:"Low Code Limitations - Exploring the Risk of Vendor Lock-In",description:"We discuss the limitations and risks associated with low-code platforms and how to avoid getting stuck with one vendor.",permalink:"/blog/low-code-tools",formattedDate:"April 19, 2024",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:7.255,date:"2024-04-19T00:00:00.000Z"},{title:"How to Use Nodemon to Automatically Restart Node.js Applications",description:"This guide shows you how to install and use Nodemon to streamline your development process.",permalink:"/blog/nodemon",formattedDate:"November 8, 2024",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:10.62,date:"2024-11-08T00:00:00.000Z"}],authorPosts:[{title:"Introduction to Nest JS",description:"In this article, we will discuss how to create a simple web application using NestJS and its major components.",permalink:"/blog/nest-js",formattedDate:"April 29, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.14,date:"2024-04-29T00:00:00.000Z"},{title:"Kubernetes Operators",description:"This article digs deep into the essence of Kubernetes operators, explaining their purpose, functionality, and how they are actually implemented.",permalink:"/blog/kubernetes-operators",formattedDate:"January 12, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.425,date:"2024-01-12T00:00:00.000Z"},{title:"A Detailed Guide on Docker run Command",description:"We'll discuss the Docker run command in detail, including its syntax, options, and examples.",permalink:"/blog/docker-run-command",formattedDate:"June 24, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:11.855,date:"2023-06-24T00:00:00.000Z"}]},m={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"Brief overview of Docker",id:"brief-overview-of-docker",level:3},{value:"Explanation of what Docker Swarm mode is and its significance",id:"explanation-of-what-docker-swarm-mode-is-and-its-significance",level:2},{value:"Docker Swarm Mode is Significant due to the following reasons:",id:"docker-swarm-mode-is-significant-due-to-the-following-reasons",level:3},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Setting up Your First Swarm",id:"setting-up-your-first-swarm",level:2},{value:"Joining Nodes to the Swarm",id:"joining-nodes-to-the-swarm",level:2},{value:"Deploying Services in Swarm",id:"deploying-services-in-swarm",level:2},{value:"Scaling Services",id:"scaling-services",level:2},{value:"Rolling Updates and Rollbacks",id:"rolling-updates-and-rollbacks",level:2},{value:"Monitoring Swarm Services",id:"monitoring-swarm-services",level:2},{value:"Cleaning Up and Removing Nodes",id:"cleaning-up-and-removing-nodes",level:2},{value:"Conclusion",id:"conclusion",level:2}],g={toc:d},p="wrapper";function u(e){var{components:n}=e,t=i(e,["components"]);return(0,a.yg)(p,o(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){r(e,n,t[n])}))}return e}({},g,t),{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("h3",{id:"brief-overview-of-docker"},"Brief overview of Docker"),(0,a.yg)("p",null,"In the modern world of DevOps, you can package up your application(s) in portable containers using the Docker platform. Containers bundle software with all dependencies, ensuring consistent execution across environments. This enables a team of developers to concurrently work on multiple components of software. This isolation, portability, and scalability make Docker preferred for microservices, development consistency, and efficient resource utilization."),(0,a.yg)("p",null,"Steps we'll cover:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#brief-overview-of-docker"},"Brief overview of Docker")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#explanation-of-what-docker-swarm-mode-is-and-its-significance"},"Explanation of what Docker Swarm mode is and its significance"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#docker-swarm-mode-is-significant-due-to-the-following-reasons"},"Docker Swarm Mode is Significant due to the following reasons:")))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#pre-requisites"},"Pre-requisites")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#setting-up-your-first-swarm"},"Setting up Your First Swarm")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#joining-nodes-to-the-swarm"},"Joining Nodes to the Swarm")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#deploying-services-in-swarm"},"Deploying Services in Swarm")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#scaling-services"},"Scaling Services")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#rolling-updates-and-rollbacks"},"Rolling Updates and Rollbacks")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#monitoring-swarm-services"},"Monitoring Swarm Services")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#cleaning-up-and-removing-nodes"},"Cleaning Up and Removing Nodes"))),(0,a.yg)("h2",{id:"explanation-of-what-docker-swarm-mode-is-and-its-significance"},"Explanation of what Docker Swarm mode is and its significance"),(0,a.yg)("p",null,"Docker Swarm mode is a feature of Docker Engine that allows you to create and manage a cluster of Docker nodes called a swarm. Basically, a swarm consists of multiple Docker hosts that function as managers and workers, where managers control delegation and membership while workers handle the swarm services. But a particular Docker host can act as a manager, a worker, or both."),(0,a.yg)("h3",{id:"docker-swarm-mode-is-significant-due-to-the-following-reasons"},"Docker Swarm Mode is Significant due to the following reasons:"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Scalability (Automated load-balancing):")," You can declare the number of tasks you want to run for each service. The swarm manager automatically adapts by adding or removing tasks to maintain the desired state whenever you scale up or down. When demand for the service grows, it will add more replicas to the service.\n",(0,a.yg)("strong",{parentName:"p"},"Simple to Use:")," You can use the same Docker CLI commands to create, manage, and operate a swarm as you would use to work with individual containers, which means there's no need to install additional software to use it.\n",(0,a.yg)("strong",{parentName:"p"},"Integrated Solution:")," Docker Swarm mode offers built-in features such as service discovery, load balancing, networking, security, and rolling updates. It uses its dedicated API and was specifically designed to make it easy to create and manage clusters of Docker nodes."),(0,a.yg)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Docker Installation:")," Installing Docker Swarm is simple, even for those just getting started with container orchestration. All nodes that will be included in the Swarm must have Docker installed on them. You can install Docker according to your OS (Linux, Windows or macOS) from the following links:"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Linux/distro/macOS:")," ",(0,a.yg)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"Install Docker Engine | Docker Docs")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Windows:")," ",(0,a.yg)("a",{parentName:"p",href:"https://docs.docker.com/desktop/install/windows-install/"},"Install Docker Desktop on Windows | Docker Docs")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Basic familiarity with Docker commands:")," There is no need to run or install a separate or new CLI because Docker Swarm natively integrates with the Docker CLI. Therefore, it's crucial to understand fundamental Docker commands and concepts like images, containers, and networks."),(0,a.yg)("h2",{id:"setting-up-your-first-swarm"},"Setting up Your First Swarm"),(0,a.yg)("p",null,"A node is a Docker engine instance that participates in the Swarm. This is also known as a Docker node. Although one or more nodes can run on a single physical computer or cloud server, production swarm deployments often have Docker nodes spread over multiple physical and cloud machines. Swarm mode consists of two types of nodes:\n",(0,a.yg)("strong",{parentName:"p"},"Manager:"),"\nThe manager node, as the name suggests, is responsible for cluster administration activities such as maintaining the cluster state, scheduling services, and serving Swarm mode HTTP API endpoints. It is recommended to implement more than one manager node for the production environment."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Workers:"),"\nThe manager node transfers tasks to the worker nodes, who receive and execute them. Worker nodes are not involved in task management. You can configure commands and services to be global or replicated: a global service will operate on every Swarm node, whereas a replicated service will allocate tasks to worker nodes through the manager node."),(0,a.yg)("p",null,"In order to set up your first Swarm and initialize the swarm mode, you can run the following command:"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"docker swarm init")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"This command will return the following output:")),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/swarm-init.png",alt:"docker swarm"})),(0,a.yg)("br",null),(0,a.yg)("h2",{id:"joining-nodes-to-the-swarm"},"Joining Nodes to the Swarm"),(0,a.yg)("p",null,"As previously explained, there are two types of nodes in a cluster: manager nodes and worker nodes. Suppose you already have Swarm up and running and want to add more nodes to it. To join nodes to the Swarm, you must have the join token generated by the manager node when the Swarm was initiated by running the '",(0,a.yg)("strong",{parentName:"p"},"docker swarm init"),"' command. The join token is a secret that allows a node to become a manager or worker in the Swarm.\nYou can join a node as a worker or a manager. Let's assume that you are the administrator of the manager node and you want to add a new worker node in Swarm. For that purpose, first of all, you need to retrieve the join token by running the following command:"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"docker swarm join-token worker")),(0,a.yg)("p",null,"This command will return you the full command of '",(0,a.yg)("strong",{parentName:"p"},"docker swarm join"),"' along with a token that you just need to run for the worker node to join the Swarm."),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/worker-1.png",alt:"docker swarm"})),(0,a.yg)("br",null),(0,a.yg)("p",null,"Now, you need to copy and run the full command you get in the output of '",(0,a.yg)("strong",{parentName:"p"},"docker swarm join-token worker"),"' in your ",(0,a.yg)("strong",{parentName:"p"},"worker node")," to join the Swarm."),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/worker-2.png",alt:"docker swarm"})),(0,a.yg)("br",null),(0,a.yg)("h2",{id:"deploying-services-in-swarm"},"Deploying Services in Swarm"),(0,a.yg)("p",null,"Swarm containers are started via services, and service is the definition of tasks to be executed by nodes. When creating a service, you must specify the container image you intend to utilize. A global service will operate on all Swarm nodes, but a replicated service would have the manager node for distributing tasks to worker nodes.\nIn order to deploy a new Docker Swarm service, you can run the command below by replacing your service-specific parameters."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"docker service create [parameters]")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Service Replicas"),"\nDocker services enable you to declare the desired state, such as the number of replicas, and Swarm can maintain the state across the cluster. For instance, if you set three replicas of a service and one node fails, Swarm will make sure that another node immediately launches an instance to keep the service running. This ensures high availability and fault tolerance.\nWe can deploy the '",(0,a.yg)("strong",{parentName:"p"},"nginx"),"' service in the docker swarm with 3 service replicas by running the following command on the manager node:"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"docker service create --name nginx-service --replicas 3 --publish published=80,target=80 nginx:latest")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"This command will return the following output:")),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/ngix-1.png",alt:"docker swarm"})),(0,a.yg)("br",null),(0,a.yg)("p",null,"To ensure that the service is correctly deployed, you can list the services with the state and the established replicas by running the command below:"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"docker service ls")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"This command will return the following output:")),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/service-ls.png",alt:"docker swarm"})),(0,a.yg)("br",null),(0,a.yg)("h2",{id:"scaling-services"},"Scaling Services"),(0,a.yg)("p",null,"Docker Swarm mode makes scaling effortless. Scaling is important in modern application deployment, ensuring services can accommodate varying loads by adjusting the number of active instances. In Docker Swarm, this adjustment involves altering the number of replicas.\nIn order to scale an existing service on a Docker Swarm cluster, you can make use of the docker service scale command. This command allows you to either increase or decrease the number of service replicas. We can use the following command for scaling the services:"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"docker service scale SERVICE_NAME=REPLICA_COUNT")),(0,a.yg)("p",null,"Where ",(0,a.yg)("strong",{parentName:"p"},"SERVICE_NAME")," is the name of the service to be scaled, and ",(0,a.yg)("strong",{parentName:"p"},"REPLICA_COUNT")," is the new number of replicas desired. For Example, if you wish to increase the number of copies of the existing '",(0,a.yg)("strong",{parentName:"p"},"nginx"),"' service from three to 4, execute the following command:"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"docker service scale nginx-service=4")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"This command will return the following output:")),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/scaling-service-1.png",alt:"docker swarm"})),(0,a.yg)("br",null),(0,a.yg)("h2",{id:"rolling-updates-and-rollbacks"},"Rolling Updates and Rollbacks"),(0,a.yg)("p",null,"Application deployment and administration require updates that are seamless. We need to ensure that the release of new features, bug fixes and enhancements to the application does not cause any disruption to users. Not all upgrades work as planned, and sometimes, we just need to revert the update immediately to prevent failures and minimize downtime.\nRolling updates make it possible to deploy new versions of containers without interfering with the availability of your application. For that purpose, you can make use of the docker service update command below by replacing your service-specific parameters:"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"docker service update [parameters] ")),(0,a.yg)("p",null,"For Example, if we want to update the version of '",(0,a.yg)("strong",{parentName:"p"},"nginx-service"),"', we can utilize '",(0,a.yg)("strong",{parentName:"p"},"--image"),"' parameter:"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"docker service update --image nginx:1.21.4 nginx-service")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"This command will return the following output:")),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/rolling-1.png",alt:"docker swarm"})),(0,a.yg)("br",null),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Rollback Update:"),"\nThe ability to rollback or return to a previous state is extremely valuable not only to minimize downtime but also to ensure efficient handling of failures. The following command in Docker CLI enables quick rollbacks to earlier versions, where SERVICE_NAME is the name of the service required to revert."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"docker service rollback SERVICE_NAME")),(0,a.yg)("p",null,"For Example, if there is any issue in an updated version, you can rollback to the previous version of '",(0,a.yg)("strong",{parentName:"p"},"nginx-service"),"':"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"docker service rollback nginx-service")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"This command will return the following output:")),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/rolling-2.png",alt:"docker swarm"})),(0,a.yg)("br",null),(0,a.yg)("h2",{id:"monitoring-swarm-services"},"Monitoring Swarm Services"),(0,a.yg)("p",null,"Any production environment must have monitoring as a critical component. Applications work easily and consistently when services are monitored for health, performance, and status. Given the distributed structure of services across multiple nodes in Docker Swarm, understanding the state of services and their tasks becomes extremely important.\nFor monitoring purposes, you can run the command that will provide insights related to tasks of any service. For Example, if we want to list the tasks with insights for '",(0,a.yg)("strong",{parentName:"p"},"nginx-service"),"', we can run the following command:"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"docker service ps nginx-service")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"This command will return the following output:")),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/monitoring-1.png",alt:"docker swarm"})),(0,a.yg)("br",null),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Service Logs:"),"\nSometimes, while troubleshooting an issue, you might need to view detailed logs related to a specific service. In order to access logs of any particular service, you can make use of the docker service logs command. As an example, the below command displays the logs related to '",(0,a.yg)("strong",{parentName:"p"},"nginx-service"),"':"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"docker service logs nginx-service")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"This command will return the following output:")),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/monitoring-2.png",alt:"docker swarm"})),(0,a.yg)("br",null),(0,a.yg)("h2",{id:"cleaning-up-and-removing-nodes"},"Cleaning Up and Removing Nodes"),(0,a.yg)("p",null,"While administrating the docker swarm cluster, you may be required to restructure or scale down the Swarm gracefully. In order to remove the node, it first needs to be removed from the Swarm. You need to run the command below on the node to leave the Swarm. You can add an additional parameter '",(0,a.yg)("strong",{parentName:"p"},"\u2014force"),"' to the same command if you are on Manager Node."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"docker swarm leave")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"This command will return the following output:")),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/cleaning-1.png",alt:"docker swarm"})),(0,a.yg)("br",null),(0,a.yg)("p",null,"Managers can remove a node from the node list if it has left the Swarm or if it is unavailable by replacing the ",(0,a.yg)("strong",{parentName:"p"},"NODE_NAME")," with the name or ID of any particular node they want to remove:"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"docker node rm NODE_NAME")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"This command will return the following output:")),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-05-docker-swarm/cleaning-2.png",alt:"docker swarm"})),(0,a.yg)("br",null),(0,a.yg)("h2",{id:"conclusion"},"Conclusion"),(0,a.yg)("p",null,"Application Development and its operations have been transformed by Docker Swarm, which focuses on consistency, scalability, and integrated solutions. Application management is effective due to its smooth integration with the Docker CLI. Docker Swarm is ready to take your operations to new heights, whether you're trying to optimize current workflows or starting new projects. Embrace it, experiment with it, dive deeper and let Docker Swarm take your applications to the next level."))}u.isMDXComponent=!0}}]);