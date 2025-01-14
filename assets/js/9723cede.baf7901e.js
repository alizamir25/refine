"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[62019],{58860:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>g});var n=a(37953);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=s,g=c["".concat(o,".").concat(m)]||c[m]||u[m]||i;return a?n.createElement(g,r(r({ref:t},d),{},{components:a})):n.createElement(g,r({ref:t},d))}));function g(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=a.length,r=new Array(i);r[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:s,r[1]=l;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},37717:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>c});a(37953);var n=a(58860);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function r(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}const l={title:"Kubernetes Statefulset vs Deployment with Examples",description:"We'll discuss the practical differences between Deployments and StatefulSets.",slug:"kubernetes-statefulset-vs-deployment",authors:"muhammad_khabbab",tags:["kubernetes","docker"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-04-k8s-statefulset/social.png",hide_table_of_contents:!1},o=void 0,p={permalink:"/blog/kubernetes-statefulset-vs-deployment",source:"@site/blog/2024-01-04-k8s-statefulset.md",title:"Kubernetes Statefulset vs Deployment with Examples",description:"We'll discuss the practical differences between Deployments and StatefulSets.",date:"2024-01-04T00:00:00.000Z",formattedDate:"January 4, 2024",tags:[{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"docker",permalink:"/blog/tags/docker"}],readingTime:9.095,hasTruncateMarker:!1,authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],frontMatter:{title:"Kubernetes Statefulset vs Deployment with Examples",description:"We'll discuss the practical differences between Deployments and StatefulSets.",slug:"kubernetes-statefulset-vs-deployment",authors:"muhammad_khabbab",tags:["kubernetes","docker"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-04-k8s-statefulset/social.png",hide_table_of_contents:!1},prevItem:{title:"Check Kubernetes Version - Advanced Use Cases with kubectl version",permalink:"/blog/kubectl-version"},nextItem:{title:"Kubernetes Image Pull Policy - A Detailed Guide",permalink:"/blog/kubernetes-image-pull-policy"},relatedPosts:[{title:"Check Kubernetes Version - Advanced Use Cases with kubectl version",description:"Kubectl version is a very basic command, however, you might still face some errors like connection issues, version mismatches, or configuration problems. Here are some steps to debug these common errors.",permalink:"/blog/kubectl-version",formattedDate:"January 5, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:6.98,date:"2024-01-05T00:00:00.000Z"},{title:"Kubernetes Operators",description:"This article digs deep into the essence of Kubernetes operators, explaining their purpose, functionality, and how they are actually implemented.",permalink:"/blog/kubernetes-operators",formattedDate:"January 12, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.425,date:"2024-01-12T00:00:00.000Z"},{title:"How to use Docker Build Args and Environment Variables",description:"A guide for using Docker Build Args to Configure Image Builds",permalink:"/blog/docker-build-args-and-env-vars",formattedDate:"September 28, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.225,date:"2022-09-28T00:00:00.000Z"}],authorPosts:[{title:"git switch and git checkout \u2013 How to switch branches in git",description:"We will go through different use cases and examples for using git checkout and git switch.",permalink:"/blog/git-switch-and-git-checkout",formattedDate:"November 27, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:12.005,date:"2024-11-27T00:00:00.000Z"},{title:"Docker Swarm Mode Guide",description:"We'll cover the basics of Docker Swarm mode, including how to set up your first Swarm, join nodes to the Swarm, deploy services, scale services, and monitor services.",permalink:"/blog/docker-swarm",formattedDate:"October 5, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.53,date:"2023-10-05T00:00:00.000Z"},{title:"A Complete Guide to Listing Docker Containers",description:"We'll discuss the importance of listing docker containers, how to list running and stopped containers, listing the latest containers, and how to disable truncation of container names.",permalink:"/blog/docker-list-containers",formattedDate:"June 6, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.265,date:"2023-06-06T00:00:00.000Z"}]},d={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"What is Deployment",id:"what-is-deployment",level:2},{value:"Key deployment features:",id:"key-deployment-features",level:3},{value:"A sample deployment configuration",id:"a-sample-deployment-configuration",level:3},{value:"What is StatefulSet",id:"what-is-statefulset",level:2},{value:"Key StatefulSet features:",id:"key-statefulset-features",level:3},{value:"A sample StatefulSet configuration",id:"a-sample-statefulset-configuration",level:3},{value:"Practical example - deploying a stateful application",id:"practical-example---deploying-a-stateful-application",level:2},{value:"Create your YAML file",id:"create-your-yaml-file",level:3},{value:"Apply the statefulset YAML file",id:"apply-the-statefulset-yaml-file",level:3},{value:"Verify the statefulset successfully running",id:"verify-the-statefulset-successfully-running",level:3},{value:"Possible errors when using statefulsets",id:"possible-errors-when-using-statefulsets",level:3},{value:"Practical example - deploying a stateless application",id:"practical-example---deploying-a-stateless-application",level:2},{value:"Create your YAML file",id:"create-your-yaml-file-1",level:3},{value:"Apply the stateless YAML file",id:"apply-the-stateless-yaml-file",level:3},{value:"Verify the deployment is successfully running",id:"verify-the-deployment-is-successfully-running",level:3},{value:"Comparison of deployment and statefulset",id:"comparison-of-deployment-and-statefulset",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:c},m="wrapper";function g(e){var{components:t}=e,a=r(e,["components"]);return(0,n.yg)(m,i(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){s(e,t,a[t])}))}return e}({},u,a),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"introduction"},"Introduction"),(0,n.yg)("p",null,"Kubernetes provides powerful solutions for deploying and managing containerized applications. Two main choices in this regard are Deployment and StatefulSet. However, understanding the differences between these two resources can be a challenge. This article discusses the practical differences between Deployments and StatefulSets. While both serve the critical role of managing applications, they cater to distinct needs and scenarios. Deployments are ideal for stateless applications, where each instance is essentially identical and interchangeable."),(0,n.yg)("p",null,"On the other hand, StatefulSets are designed for stateful applications that require stable, unique identities and persistent storage. By exploring the functionalities, advantages, and limitations of each, this article aims to provide developers with a clear understanding of when and how to use these Kubernetes resources effectively."),(0,n.yg)("h2",{id:"what-is-deployment"},"What is Deployment"),(0,n.yg)("p",null,"Kubernetes deployment creates and manages application replicas. It seamlessly updates your app and lets you revert if something goes wrong. Applications are highly available, and scale and load balance easily with deployments."),(0,n.yg)("h3",{id:"key-deployment-features"},"Key deployment features:"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Demand-based scaling:")," Increase or decrease running instances automatically."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Rollout and Rollback:")," Smoothly roll out new features or revert to previous versions without downtime."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Auto-healing:")," The Deployment replaces failed or deleted nodes to maintain the desired state."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Update Strategy:")," Roll out updates simultaneously or gradually to minimize disruption."),(0,n.yg)("h3",{id:"a-sample-deployment-configuration"},"A sample deployment configuration"),(0,n.yg)("p",null,"Below is a simple example of a deployment configuration. This YAML file specifies a deployment that manages a set of three replicas of a simple nginx application."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"    apiVersion: apps/v1\n    kind: Deployment\n    metadata:\n      name: proxy-deployment\n    spec:\n      replicas: 3\n      selector:\n        matchLabels:\n          app: proxy\n      template:\n        metadata:\n          labels:\n            app: proxy\n        spec:\n          containers:\n          - name: nginx\n            image: nginx:1.14.2\n            ports:\n            - containerPort: 80\n")),(0,n.yg)("p",null,"Let's decode the content of this YAML file:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"apiVersion"),": Specifies the Kubernetes API version."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"kind"),": Indicates that this is a Deployment."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"metadata"),": Provides names and labels for identifying the Deployment."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"spec.replicas"),": Indicates the desired number of replicas."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"selector"),": Selects the pods that this Deployment manages."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"template"),": Describes how the pod replicas should be constructed, including the container image and ports.")),(0,n.yg)("h2",{id:"what-is-statefulset"},"What is StatefulSet"),(0,n.yg)("p",null,"Consider a scenario where you are developing an e-commerce application where you have to maintain the state of the cart and sessions, you would need some way of persisting the data and the state. This is where StatefulSets enter the scene, ensuring that each pod's identity and data are maintained across restarts and rescheduling. Unlike deployment, which is great for stateless applications (think of them as forgetful), a StatefulSet remembers its data (state) even if moved around in a cluster."),(0,n.yg)("h3",{id:"key-statefulset-features"},"Key StatefulSet features:"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Stable, Unique Network Identifiers:")," Each pod in a StatefulSet gets a unique, stable hostname and network identifier, ensuring consistent and identifiable access to the network and storage, which is crucial for stateful applications like databases."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Persistent Storage Management:")," StatefulSets manage the deployment and scaling of a set of Pods, while maintaining the persistent storage associated with each pod. This means that even if a pod is rescheduled to a different node, it retains its storage, ensuring data persistence."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Ordered, Graceful Deployment and Scaling:")," Pods in a StatefulSet are created, updated, and deleted in a strict, ordered manner (based on their ordinal index). This ensures controlled scaling and rolling updates, maintaining the order and integrity crucial for stateful applications."),(0,n.yg)("h3",{id:"a-sample-statefulset-configuration"},"A sample StatefulSet configuration"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'    apiVersion: apps/v1\n    kind: StatefulSet\n    metadata:\n      name: scheduling-statefulset\n    spec:\n      serviceName: "scheduling-service"\n      replicas: 3\n      selector:\n        matchLabels:\n          app: scheduling-app\n      template:\n        metadata:\n          labels:\n            app: scheduling-app\n        spec:\n          containers:\n          - name: scheduling-container\n            image: scheduling-image\n      volumeClaimTemplates:\n      - metadata:\n          name: scheduling-storage\n        spec:\n          accessModes: [ "ReadWriteOnce" ]\n          resources:\n            requests:\n              storage: 2Gi\n\n')),(0,n.yg)("p",null,"In this sample, we have a StatefulSet named ",(0,n.yg)("inlineCode",{parentName:"p"},"scheduling-statefulset"),", with three replicas. Notice the ",(0,n.yg)("inlineCode",{parentName:"p"},"serviceName"),", which is key to maintaining the network identity for each pod. The ",(0,n.yg)("inlineCode",{parentName:"p"},"volumeClaimTemplates")," section is where the StatefulSet plays and important role, allowing each pod in the set to have its own persistent storage."),(0,n.yg)("h2",{id:"practical-example---deploying-a-stateful-application"},"Practical example - deploying a stateful application"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Pre-requisite:")," You have already created a cluster successfully."),(0,n.yg)("h3",{id:"create-your-yaml-file"},"Create your YAML file"),(0,n.yg)("p",null,"Create the Statefulset through YAML file. Let's create a Mysql database, which is an example of a stateful application. We will use a public image of Mysql. See the below YAML file for details."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'    apiVersion: apps/v1\n    kind: StatefulSet\n    metadata:\n      name: mysql-statefulset\n    spec:\n      serviceName: "mysql"\n      replicas: 1\n      selector:\n        matchLabels:\n          app: mysql\n      template:\n        metadata:\n          labels:\n            app: mysql\n        spec:\n          containers:\n          - name: mysql\n            image: mysql:5.7\n            env:\n            - name: MYSQL_ROOT_PASSWORD\n              value: <YOUR_PASSWORD>\n            ports:\n            - containerPort: 3306\n            volumeMounts:\n            - name: mysql-persistent-storage\n              mountPath: /var/lib/mysql\n      volumeClaimTemplates:\n      - metadata:\n          name: mysql-persistent-storage\n        spec:\n          accessModes: ["ReadWriteOnce"]\n          resources:\n            requests:\n              storage: 1Gi\n')),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Expert tip:")," Keep an eye on the environment variables needed for this YAML to work. In this case of SQL, we need to provide the master password of Mysql as part of the YAML file. This is referenced by ",(0,n.yg)("inlineCode",{parentName:"p"},"<YOUR_PASSWORD>")," in the above-mentioned YAML file."),(0,n.yg)("h3",{id:"apply-the-statefulset-yaml-file"},"Apply the statefulset YAML file"),(0,n.yg)("p",null,"Now we just need to apply this YAML file through the command ",(0,n.yg)("inlineCode",{parentName:"p"},"kubectl apply -f mysql.yaml")),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-04-k8s-statefulset/image1.PNG",alt:"Creating statefulset"})),(0,n.yg)("h3",{id:"verify-the-statefulset-successfully-running"},"Verify the statefulset successfully running"),(0,n.yg)("p",null,"Let's verify if our statefulset is actually created or not. This can be checked by the command ",(0,n.yg)("inlineCode",{parentName:"p"},"kubectl get statefulsets")),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-04-k8s-statefulset/image2.PNG",alt:"Getting list of statefulsets"})),(0,n.yg)("p",null,"You can also see the pods associated with this statefulset, Just run the command ",(0,n.yg)("inlineCode",{parentName:"p"},"kubectl get pods -l <label-key>=<label-value>")," In my case, it was ",(0,n.yg)("inlineCode",{parentName:"p"},"app=mysql")," so I executed below command. You can see the pods running for this statefulset."),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-04-k8s-statefulset/image3.PNG",alt:"Getting list of pods of statefulset"})),(0,n.yg)("p",null,"To scale your statefulset, you can use the command ",(0,n.yg)("inlineCode",{parentName:"p"},"kubectl scale statefulsets [statefulset-name] --replicas=[new-replica-count]"),". Similalry you can update the container image used in your statefulset to deploy a new version of your application.\nby running the command: ",(0,n.yg)("inlineCode",{parentName:"p"},"kubectl set image statefulset [statefulset-name] [container-name]=[new-image-name]")),(0,n.yg)("h3",{id:"possible-errors-when-using-statefulsets"},"Possible errors when using statefulsets"),(0,n.yg)("p",null,"Statefulsets are state-conscious as compared to deployment that is stateless. As a result, you are likely to face more errors when creating a statefulset. Below are some possible issues you might encounter only when creating statefulsets."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Persistent Volume Claim (PVC) Conflicts:")," Error when the specified PVCs are not available or in use by another StatefulSet or pod."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Headless Service Requirement:")," Error due to the absence of a required headless service for the StatefulSet's network identity."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Pod Naming Issue:")," Error if the StatefulSet's pod name format conflicts with Kubernetes naming conventions."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Update Strategy Misconfiguration:")," Error caused by an improperly configured update strategy, unlike Deployments that support rolling updates by default."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Stateful Pod Scheduling Failure:")," Error when pods fail to schedule due to persistent storage affinity constraints, not common in stateless Deployments."),(0,n.yg)("h2",{id:"practical-example---deploying-a-stateless-application"},"Practical example - deploying a stateless application"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Pre-requisite:")," You have already created a cluster successfully."),(0,n.yg)("h3",{id:"create-your-yaml-file-1"},"Create your YAML file"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'    apiVersion: apps/v1\n    kind: Deployment\n    metadata:\n      name: stateless-app1\n      namespace: default\n    spec:\n      replicas: 3\n      selector:\n        matchLabels:\n          app: stateless-app1\n      template:\n        metadata:\n          labels:\n            app: stateless-app1\n        spec:\n          containers:\n          - name: hello-app-1\n            image: gcr.io/google-samples/hello-app:2.0\n            resources:\n              requests:\n                cpu: "500m"\n                memory: "2Gi"\n              limits:\n                cpu: "500m"\n                memory: "2Gi"\n')),(0,n.yg)("p",null,"In this YAML file:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"API Version and Kind"),": The ",(0,n.yg)("inlineCode",{parentName:"p"},"apiVersion")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"kind")," fields specify the API version of the resource and the type of resource, which is a ",(0,n.yg)("inlineCode",{parentName:"p"},"Deployment")," in this case."),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Metadata"),": Includes the ",(0,n.yg)("inlineCode",{parentName:"li"},"name")," and ",(0,n.yg)("inlineCode",{parentName:"li"},"namespace")," for the deployment. The ",(0,n.yg)("inlineCode",{parentName:"li"},"namespace")," defaults to ",(0,n.yg)("inlineCode",{parentName:"li"},"default")," if not specified."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Spec"),": Defines the desired state of the deployment:"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"replicas"),": The number of desired pods."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"selector"),": Specifies how the deployment finds the pods it manages using ",(0,n.yg)("inlineCode",{parentName:"li"},"matchLabels"),"."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"template"),": Defines the pods to be created with a ",(0,n.yg)("inlineCode",{parentName:"li"},"metadata")," section for labels and a ",(0,n.yg)("inlineCode",{parentName:"li"},"spec")," section detailing the container configuration."))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Container Specs"),": Include the ",(0,n.yg)("inlineCode",{parentName:"p"},"name")," of the container, the ",(0,n.yg)("inlineCode",{parentName:"p"},"image")," to use, and the ",(0,n.yg)("inlineCode",{parentName:"p"},"resources")," block, which defines the CPU and memory ",(0,n.yg)("inlineCode",{parentName:"p"},"requests")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"limits")," for the container."))),(0,n.yg)("h3",{id:"apply-the-stateless-yaml-file"},"Apply the stateless YAML file"),(0,n.yg)("p",null,"Now we just need to apply this YAML file through the command ",(0,n.yg)("inlineCode",{parentName:"p"},"kubectl apply -f stateless-app1.yaml")),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-04-k8s-statefulset/image4.PNG",alt:"Creating deployment"})),(0,n.yg)("h3",{id:"verify-the-deployment-is-successfully-running"},"Verify the deployment is successfully running"),(0,n.yg)("p",null,"Let's verify if our deployment is actually created or not. This can be checked by the command ",(0,n.yg)("inlineCode",{parentName:"p"},"kubectl rollout status deployment/[deployment-name]")," Let's verify this"),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-04-k8s-statefulset/image5.PNG",alt:"Verify successful deployment"})),(0,n.yg)("p",null,"As you can see from the above screenshot, the deployment was rolled out successfully. To confirm how many pods for this deployment are currently running, the command is ",(0,n.yg)("inlineCode",{parentName:"p"},"kubectl get pods -l app=[deployment-label]")," The above screenshots shows 3 pods (replicas) running for this deployment."),(0,n.yg)("h2",{id:"comparison-of-deployment-and-statefulset"},"Comparison of deployment and statefulset"),(0,n.yg)("p",null,"The below comparison table will help you understand the difference between these two important entities in Kubernetes world."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Aspect"),(0,n.yg)("th",{parentName:"tr",align:null},"Deployment"),(0,n.yg)("th",{parentName:"tr",align:null},"StatefulSet"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("strong",{parentName:"td"},"Primary Use-Case")),(0,n.yg)("td",{parentName:"tr",align:null},"Managing stateless applications."),(0,n.yg)("td",{parentName:"tr",align:null},"Managing stateful applications.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("strong",{parentName:"td"},"When to Use")),(0,n.yg)("td",{parentName:"tr",align:null},"- When you need to scale stateless applications. - For applications where each instance is interchangeable."),(0,n.yg)("td",{parentName:"tr",align:null},"- When you need stable, unique network identifiers - For applications that require persistent storage.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("strong",{parentName:"td"},"Replica Management")),(0,n.yg)("td",{parentName:"tr",align:null},"Each pod gets a random hash value as part of its name."),(0,n.yg)("td",{parentName:"tr",align:null},"Each pod is assigned a unique ordinal index that remains as long as the pod exists.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("strong",{parentName:"td"},"Storage")),(0,n.yg)("td",{parentName:"tr",align:null},"Usually uses ephemeral storage. Persistent volumes can be used but are not managed as part of the deployment lifecycle."),(0,n.yg)("td",{parentName:"tr",align:null},"Supports stable storage using Persistent Volumes that are linked to each pod's ordinal index.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("strong",{parentName:"td"},"Scaling Behavior")),(0,n.yg)("td",{parentName:"tr",align:null},"Scales out replicas without considering order or state."),(0,n.yg)("td",{parentName:"tr",align:null},"Scales out replicas in a predictable order. Pods are created and deleted in order.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("strong",{parentName:"td"},"Update Strategy")),(0,n.yg)("td",{parentName:"tr",align:null},"Supports Rolling Update and Recreate strategies."),(0,n.yg)("td",{parentName:"tr",align:null},"Primarily uses Rolling Updates. Updates proceed in the reverse order of the pod ordinal index.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("strong",{parentName:"td"},"Failover Behavior")),(0,n.yg)("td",{parentName:"tr",align:null},"In case of node failure, pods are rescheduled without regard to the original state."),(0,n.yg)("td",{parentName:"tr",align:null},"Maintains the same network identity even after rescheduling, which is crucial for certain data-heavy applications.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("strong",{parentName:"td"},"Pod Name Preservation")),(0,n.yg)("td",{parentName:"tr",align:null},"Pod names change when pods are replaced."),(0,n.yg)("td",{parentName:"tr",align:null},"Pod names are preserved (using a sticky identity) when pods are rescheduled.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("strong",{parentName:"td"},"Use Case Examples")),(0,n.yg)("td",{parentName:"tr",align:null},"- Web servers - Stateless backend services"),(0,n.yg)("td",{parentName:"tr",align:null},"- Databases (like MySQL, PostgreSQL) - Any system where data consistency and order are important")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("strong",{parentName:"td"},"Pre-Requisites")),(0,n.yg)("td",{parentName:"tr",align:null},"Basic understanding of Kubernetes objects."),(0,n.yg)("td",{parentName:"tr",align:null},"Understanding of persistent storage and headless services for stable network identifiers.")))),(0,n.yg)("h2",{id:"conclusion"},"Conclusion"),(0,n.yg)("p",null,"Kubernetes Deployments and StatefulSets cater to different needs in application management. Deployments are ideal for stateless applications, offering features like automatic scaling, easy updates, and high availability. Deployments excel in scenarios where quick scaling and rapid deployment changes are needed."),(0,n.yg)("p",null,"In contrast, StatefulSets are designed for stateful applications, ensuring stable network identifiers and persistent storage. They're essential when dealing with applications like databases, where data persistence and order are crucial. Choosing between a Deployment and a StatefulSet depends on whether your application requires statefulness or benefits from statelessness."))}g.isMDXComponent=!0}}]);