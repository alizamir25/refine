"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7787],{58860:(e,t,i)=>{i.d(t,{xA:()=>p,yg:()=>d});var a=i(37953);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(i),m=n,d=g["".concat(s,".").concat(m)]||g[m]||u[m]||r;return i?a.createElement(d,o(o({ref:t},p),{},{components:i})):a.createElement(d,o({ref:t},p))}));function d(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<r;c++)o[c]=i[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}m.displayName="MDXCreateElement"},78289:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>g});i(37953);var a=i(58860);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))})),e}function o(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}const l={title:"Kubernetes Image Pull Policy - A Detailed Guide",description:"Image pull policy in Kubernetes is a strategic decision that impacts applications' efficiency, reliability, and security.",slug:"kubernetes-image-pull-policy",authors:"muhammad_khabbab",tags:["kubernetes","docker"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-03-k8s-image-pull/social.png",hide_table_of_contents:!1},s=void 0,c={permalink:"/blog/kubernetes-image-pull-policy",source:"@site/blog/2024-01-03-k8s-image-pull.md",title:"Kubernetes Image Pull Policy - A Detailed Guide",description:"Image pull policy in Kubernetes is a strategic decision that impacts applications' efficiency, reliability, and security.",date:"2024-01-03T00:00:00.000Z",formattedDate:"January 3, 2024",tags:[{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"docker",permalink:"/blog/tags/docker"}],readingTime:8.045,hasTruncateMarker:!1,authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],frontMatter:{title:"Kubernetes Image Pull Policy - A Detailed Guide",description:"Image pull policy in Kubernetes is a strategic decision that impacts applications' efficiency, reliability, and security.",slug:"kubernetes-image-pull-policy",authors:"muhammad_khabbab",tags:["kubernetes","docker"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-03-k8s-image-pull/social.png",hide_table_of_contents:!1},prevItem:{title:"Kubernetes Statefulset vs Deployment with Examples",permalink:"/blog/kubernetes-statefulset-vs-deployment"},nextItem:{title:"Using kubectl logs - DevOps Guide",permalink:"/blog/kubectl-logs"},relatedPosts:[{title:"A Detailed Guide on Docker Volumes",description:"We'll go over the fundamentals of Docker volumes, including what they are, why they're important, and how to use them.",permalink:"/blog/docker-volumes",formattedDate:"July 11, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:10.64,date:"2023-07-11T00:00:00.000Z"},{title:"Kubectl Cheat Sheet - With Examples",description:"Kubectl is a very handy tool if you want to manage your applications deployed in Kubernetes.",permalink:"/blog/kubectl-cheat-sheet",formattedDate:"December 15, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.235,date:"2023-12-15T00:00:00.000Z"},{title:"Understanding the Basics of Kubernetes CronJob",description:"CronJobs in Kubernetes is the way of running jobs automatically based on time intervals.",permalink:"/blog/kubernetes-cron-jobs",formattedDate:"December 12, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:10.52,date:"2023-12-12T00:00:00.000Z"}],authorPosts:[{title:"Kubernetes vs Docker - A Detailed Comparison",description:"Explore an in-depth comparison between Docker and Kubernetes, focusing on their unique features, advantages, and ideal use scenarios.",permalink:"/blog/kubernetes-vs-docker",formattedDate:"January 26, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:14.36,date:"2024-01-26T00:00:00.000Z"},{title:"git diff - Comparing Changes in Git",description:"We'll explore Git's 'git diff' which helps you track changes throughout your working directory, commits, and branches.",permalink:"/blog/git-diff-command",formattedDate:"July 29, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:13.765,date:"2024-07-29T00:00:00.000Z"},{title:"Django REST Framework - How to use it to create APIs?",description:"Explore the Django REST Framework and learn how to create APIs using it.",permalink:"/blog/django-rest-framework",formattedDate:"April 3, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.68,date:"2024-04-03T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},g=[{value:"Introduction",id:"introduction",level:2},{value:"What is a Kubernetes Image?",id:"what-is-a-kubernetes-image",level:2},{value:"A. Definition and Role in Containerized Applications",id:"a-definition-and-role-in-containerized-applications",level:3},{value:"B. Storage and Reference in Kubernetes",id:"b-storage-and-reference-in-kubernetes",level:3},{value:"Image Repositories and Registry in Kubernetes",id:"image-repositories-and-registry-in-kubernetes",level:2},{value:"Public Repositories",id:"public-repositories",level:3},{value:"Private Repositories",id:"private-repositories",level:3},{value:"Configuring Kubernetes to Use Specific Image Repositories",id:"configuring-kubernetes-to-use-specific-image-repositories",level:3},{value:"Using Public Repositories",id:"using-public-repositories",level:3},{value:"Using Private Repositories",id:"using-private-repositories",level:3},{value:"Image Pull Policy in Kubernetes",id:"image-pull-policy-in-kubernetes",level:3},{value:"Setting Image Pull Policy",id:"setting-image-pull-policy",level:3},{value:"Configuring Image Pull Secrets",id:"configuring-image-pull-secrets",level:2},{value:"A. Step-by-Step Guide on Creating and Configuring Image Pull Secrets",id:"a-step-by-step-guide-on-creating-and-configuring-image-pull-secrets",level:3},{value:"B. How to Attach These Secrets to a Service Account or a Specific Pod",id:"b-how-to-attach-these-secrets-to-a-service-account-or-a-specific-pod",level:3},{value:"Understanding Image Pull Policies",id:"understanding-image-pull-policies",level:2},{value:"A. Detailed Explanation of Different Image Pull Policies",id:"a-detailed-explanation-of-different-image-pull-policies",level:3},{value:"B. Examples Showing YAML Configuration for Each Policy",id:"b-examples-showing-yaml-configuration-for-each-policy",level:3},{value:"C. When to Use Each Policy for Optimal Performance and Security",id:"c-when-to-use-each-policy-for-optimal-performance-and-security",level:3},{value:"Conclusion",id:"conclusion",level:2}],u={toc:g},m="wrapper";function d(e){var{components:t}=e,i=o(e,["components"]);return(0,a.yg)(m,r(function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},a=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),a.forEach((function(t){n(e,t,i[t])}))}return e}({},u,i),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"In the dynamic world of Kubernetes, container images are the building blocks of application deployment. The choice of image pull policy ",(0,a.yg)("inlineCode",{parentName:"p"},"Always"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"IfNotPresent"),", or ",(0,a.yg)("inlineCode",{parentName:"p"},"Never")," is more than a configuration detail; it's a strategic decision that impacts applications' efficiency, reliability, and security."),(0,a.yg)("p",null,"This article will provide a detailed guide to understanding and implementing these policies, ensuring developers and DevOps professionals can optimize container management in Kubernetes environments. Let's start by understanding what an image is and why its pull policy matters."),(0,a.yg)("h2",{id:"what-is-a-kubernetes-image"},"What is a Kubernetes Image?"),(0,a.yg)("h3",{id:"a-definition-and-role-in-containerized-applications"},"A. Definition and Role in Containerized Applications"),(0,a.yg)("p",null,"Kubernetes images are lightweight, standalone, executable packages that contain code, runtime, system tools, libraries, and settings to run software. Image-based containers are the basic units of deployment in Kubernetes clusters."),(0,a.yg)("p",null,'Containerized applications depend on these images for a consistent running environment. Consistency is essential in a Kubernetes ecosystem, where applications are deployed on developer laptops and high-capacity cloud servers. Kubernetes eliminates the "it works on my machine" problem by using images to ensure consistent application behavior across deployments.'),(0,a.yg)("h3",{id:"b-storage-and-reference-in-kubernetes"},"B. Storage and Reference in Kubernetes"),(0,a.yg)("p",null,"In Kubernetes, images are typically stored in a container registry, which can be either a public registry like Docker Hub or a private one hosted within an organization. These images are then referenced in Kubernetes manifests, such as Pods or Deployment configurations, by their unique names."),(0,a.yg)("p",null,"The image name usually consists of the registry location, the image's path within the registry, and a tag that identifies the version of the image. For example, ",(0,a.yg)("inlineCode",{parentName:"p"},"registry.example.com/my-application:v1.2.3")," specifies an image named ",(0,a.yg)("inlineCode",{parentName:"p"},"my-application"),", version ",(0,a.yg)("inlineCode",{parentName:"p"},"v1.2.3"),", stored in ",(0,a.yg)("inlineCode",{parentName:"p"},"registry.example.com"),"."),(0,a.yg)("p",null,"Kubernetes uses these references to pull the required images from the specified container registry to the nodes within the cluster where the containers will run. This process is governed by the image pull policy, which determines when and how new images are downloaded. The policy can always be set to pull the latest version, pull if not present on the node, or never pull if an image already exists, providing flexibility and control over how container images are managed in a Kubernetes environment."),(0,a.yg)("h2",{id:"image-repositories-and-registry-in-kubernetes"},"Image Repositories and Registry in Kubernetes"),(0,a.yg)("h3",{id:"public-repositories"},"Public Repositories"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Definition"),": Public image repositories, like Docker Hub, are accessible by anyone. They host container images made available to the public."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Use Cases"),": Ideal for standard, open-source images or for sharing images broadly."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Example"),": ",(0,a.yg)("inlineCode",{parentName:"li"},"nginx"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"redis"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"node"),": standard images used universally.")),(0,a.yg)("h3",{id:"private-repositories"},"Private Repositories"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Definition"),": Private repositories are restricted, requiring authentication for access. They host proprietary or sensitive images."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Use Cases"),": Ideal for enterprise applications or sensitive data handling."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Example"),": Corporate image repositories hosting proprietary software.")),(0,a.yg)("h3",{id:"configuring-kubernetes-to-use-specific-image-repositories"},"Configuring Kubernetes to Use Specific Image Repositories"),(0,a.yg)("h3",{id:"using-public-repositories"},"Using Public Repositories"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Default Behavior"),": Kubernetes pulls images from public repositories without any special configuration by default."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Example"),": Deploying an Nginx pod using a public image.",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"kubectl create deployment mysql --image=mysql"))))),(0,a.yg)("h3",{id:"using-private-repositories"},"Using Private Repositories"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Creating a Secret for Authentication"),":"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Command: ",(0,a.yg)("inlineCode",{parentName:"li"},"kubectl create secret docker-registry my-registry-secret --docker-server=DOCKER_REGISTRY_SERVER --docker-username=DOCKER_USER --docker-password=DOCKER_PASSWORD --docker-email=DOCKER_EMAIL")),(0,a.yg)("li",{parentName:"ul"},"This secret will be used to authenticate with the private repository."))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Referencing the Secret in a Pod Configuration"),":"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Use the ",(0,a.yg)("inlineCode",{parentName:"li"},"imagePullSecrets")," field in the pod specification to reference the created secret. See a sample YAML configuration below:")))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: my-private-image-pod\nspec:\n  containers:\n    name: private-container\n    image: <your-private-image>\n  imagePullSecrets:\n    name: my-registry-secret\n")),(0,a.yg)("h3",{id:"image-pull-policy-in-kubernetes"},"Image Pull Policy in Kubernetes"),(0,a.yg)("p",null,"Kubernetes supports different image pull policies:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Always"),": Always pull the image from the repository."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"IfNotPresent"),": Pulls the image if not already present locally."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Never"),": Never pull the image; only use local images.")),(0,a.yg)("h3",{id:"setting-image-pull-policy"},"Setting Image Pull Policy"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Specify the ",(0,a.yg)("inlineCode",{parentName:"li"},"imagePullPolicy")," in the container spec."),(0,a.yg)("li",{parentName:"ul"},"Example: Setting to ",(0,a.yg)("inlineCode",{parentName:"li"},"Always")," for a development environment.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"    apiVersion: v1\n    kind: Pod\n    metadata:\n      name: staging-pod\n    spec:\n      containers:\n      - name: staging-container\n        image: <your-image>\n        imagePullPolicy: Always\n")),(0,a.yg)("h2",{id:"configuring-image-pull-secrets"},"Configuring Image Pull Secrets"),(0,a.yg)("h3",{id:"a-step-by-step-guide-on-creating-and-configuring-image-pull-secrets"},"A. Step-by-Step Guide on Creating and Configuring Image Pull Secrets"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Create a Docker Registry Secret"),": Use the ",(0,a.yg)("inlineCode",{parentName:"li"},"kubectl create secret")," command. Replace the placeholders with appropriate credentials and the URL of your private docker registry (e.g., GCR, ECR).\n",(0,a.yg)("inlineCode",{parentName:"li"},"kubectl create secret docker-registry myregistrykey --docker-username=[your_username] --docker-password=[your_password] --docker-email=[your_email] --docker-server=[your_registry]"))),(0,a.yg)("p",null,"On GCR, I executed the command, and you can see the results below. Note that the command to create the secret on GCR is slightly different than dockerhub as GCR requires a keyfile.json too. Read more about it in the expert tip below."),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-03-k8s-image-pull/image1.PNG",alt:"Getting list of pods"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Expert Tip:")," Traditional docker registries (like dockerhub) rely on username and password for authentication. They are simpler and are typically used for individual or less complex enterprise setups. Whereas cloud-based registries (like GCR) use service accounts and JSON key files for authentication, offering more robust security features suitable for complex, automated, and scalable cloud environments."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Verify the Secret"),": To ensure the secret is created, run ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl get secrets"),". Look for ",(0,a.yg)("inlineCode",{parentName:"p"},"myregistrykey")," in the output. The above screenshot shows the execution of this command and gcr key successfully displayed.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Inspect the Secret"),": Use ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl describe secret <my-registry-key>")," for a detailed view of the secret's configuration, verifying its correct setup."),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-03-k8s-image-pull/image2.PNG",alt:"Getting list of pods"})))),(0,a.yg)("h3",{id:"b-how-to-attach-these-secrets-to-a-service-account-or-a-specific-pod"},"B. How to Attach These Secrets to a Service Account or a Specific Pod"),(0,a.yg)("p",null,"Now, you have two options here. You can attach this image secret directly to a pod, or you can attach it to a service account. Here are the differences between these two approaches."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Scope:")," Direct pod attachment is pod-specific, while service account attachment is broader, affecting all pods using that service account."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Management:")," Pod-specific secrets require more management effort if many pods need access to the secret. Service account attachment is more manageable in such scenarios."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Flexibility vs. Simplicity:")," Attaching secrets to individual pods offers more flexibility (different secrets for different pods), while attaching to a service account offers simplicity (one secret for many pods)."),(0,a.yg)("p",null,"So:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Attach it to pod directly for a few specific pods or when different\npods require different credentials."),(0,a.yg)("li",{parentName:"ul"},"Attach it to service account for ease of management and when many pods use the same registry credentials")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Attaching to a Service Account"),":"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Create a service account:")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"kubectl create serviceaccount myserviceaccount")),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-03-k8s-image-pull/image3.PNG",alt:"Getting list of pods"})),(0,a.yg)("p",null,"You might need to give necessary permissions/add role to this service account (e.g. if it needs to interact with Kubernetes API for example)."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Attach the secret to the service account:\n",(0,a.yg)("inlineCode",{parentName:"p"},'kubectl patch serviceaccount myserviceaccount -p \'{"imagePullSecrets": [{"name": "myregistrykey"}]}\'')),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-03-k8s-image-pull/image4.PNG",alt:"Getting list of pods"})))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Attaching to a Specific Pod"),":"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Modify your Pod specification to include ",(0,a.yg)("inlineCode",{parentName:"li"},"imagePullSecrets"),":")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"  apiVersion: v1\n  kind: Pod\n  metadata:\n  name: mypod\n  spec:\n  containers: - name: mycontainer\n  image: myimage\n  imagePullSecrets: - name: <my-registry-key>\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Apply this configuration using ",(0,a.yg)("inlineCode",{parentName:"li"},"kubectl apply -f podspec.yaml"),".")),(0,a.yg)("h2",{id:"understanding-image-pull-policies"},"Understanding Image Pull Policies"),(0,a.yg)("p",null,"Kubernetes, a powerful orchestration tool for container management, provides flexibility in how images are pulled from repositories. Understanding the image pull policies\u2014",(0,a.yg)("inlineCode",{parentName:"p"},"Always"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"IfNotPresent"),", and ",(0,a.yg)("inlineCode",{parentName:"p"},"Never"),"\u2014is crucial for both performance optimization and maintaining security."),(0,a.yg)("h3",{id:"a-detailed-explanation-of-different-image-pull-policies"},"A. Detailed Explanation of Different Image Pull Policies"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Always"),": This policy forces Kubernetes always to pull the image from the repository, regardless of whether it is already present on the node. It ensures that the container always uses the latest version of the image, making it ideal for development environments where updates are frequent."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"IfNotPresent"),": Kubernetes will pull the image if it is not already present on the node. If the image is on the node, it won't attempt to pull it again. This policy is a balance between resource utilization and ensuring currency. It is useful in production environments where stability and resource optimization are crucial."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Never"),": With this policy, Kubernetes will never pull the image from the repository. It will strictly use local images. This policy is suitable for scenarios where you're using custom or pre-loaded images and don't want any automatic updates from remote repositories.")),(0,a.yg)("h3",{id:"b-examples-showing-yaml-configuration-for-each-policy"},"B. Examples Showing YAML Configuration for Each Policy"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Always"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: always-pull-policy\nspec:\n  containers:\n  - name: demo-container\n    image: demo/image\n    imagePullPolicy: Always\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"IfNotPresent"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: if-not-present-policy\nspec:\n  containers:\n  - name: demo-container\n    image: demo/image\n    imagePullPolicy: IfNotPresent\n")),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Never"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: never-pull-policy\nspec:\n  containers:\n  - name: demo-container\n    image: demo/image\n    imagePullPolicy: Never\n")),(0,a.yg)("h3",{id:"c-when-to-use-each-policy-for-optimal-performance-and-security"},"C. When to Use Each Policy for Optimal Performance and Security"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Always"),":",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Use in development environments to ensure the latest updates are always tested."),(0,a.yg)("li",{parentName:"ul"},"Helpful for continuous integration setups where the latest code changes need to be reflected immediately."),(0,a.yg)("li",{parentName:"ul"},"Ensures that every time a pod starts, it uses the most recent version of the image, critical for applications requiring up-to-date functionality or security patches."))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"IfNotPresent"),":",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Ideal for production environments where stability and resource conservation are priorities."),(0,a.yg)("li",{parentName:"ul"},"Best for scenarios where frequent image updates are not necessary or when network bandwidth is a concern."))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Never"),":",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Suitable for offline environments or when using tightly controlled, pre-validated images."),(0,a.yg)("li",{parentName:"ul"},"Ensures security by preventing unauthorized or unexpected image updates."),(0,a.yg)("li",{parentName:"ul"},"Relies solely on local images, ensuring that pods only use images that have been pre-approved and manually loaded onto the node.")))),(0,a.yg)("h2",{id:"conclusion"},"Conclusion"),(0,a.yg)("p",null,"Mastering Kubernetes image pull policies is critical for streamlined and secure container management. This article has highlighted the use cases of different policies and their practical applications, from rapid development cycles to stable production environments. Adopting the right image pull policy is crucial for maintaining the balance between application consistency, resource optimization, and security in your Kubernetes clusters."))}d.isMDXComponent=!0}}]);