"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[24e3],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>g});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=i.createContext({}),p=function(e){var n=i.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return i.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(t),g=r,m=c["".concat(u,".").concat(g)]||c[g]||d[g]||a;return t?i.createElement(m,l(l({ref:n},s),{},{components:t})):i.createElement(m,l({ref:n},s))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=c;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<a;p++)l[p]=t[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},52891:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var i=t(87462),r=(t(67294),t(3905));const a={title:"Spring Cloud Plugin",keywords:["SpringCloud"],description:"SpringCloud Plugin"},l="1. Overview",o={unversionedId:"plugin-center/proxy/spring-cloud-plugin",id:"plugin-center/proxy/spring-cloud-plugin",isDocsHomePage:!1,title:"Spring Cloud Plugin",description:"SpringCloud Plugin",source:"@site/docs/plugin-center/proxy/spring-cloud-plugin.md",sourceDirName:"plugin-center/proxy",slug:"/plugin-center/proxy/spring-cloud-plugin",permalink:"/docs/next/plugin-center/proxy/spring-cloud-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/docs/plugin-center/proxy/spring-cloud-plugin.md",version:"current",frontMatter:{title:"Spring Cloud Plugin",keywords:["SpringCloud"],description:"SpringCloud Plugin"},sidebar:"tutorialSidebar",previous:{title:"Sofa Plugin",permalink:"/docs/next/plugin-center/proxy/sofa-plugin"},next:{title:"Tars Plugin",permalink:"/docs/next/plugin-center/proxy/tars-plugin"}},u=[{value:"1.1 Plugin Name",id:"11-plugin-name",children:[]},{value:"1.2 Appropriate Scenario",id:"12-appropriate-scenario",children:[]},{value:"1.3 Plugin functionality",id:"13-plugin-functionality",children:[]},{value:"1.4 Plugin code",id:"14-plugin-code",children:[]},{value:"1.5 Added Since Which shenyu version",id:"15-added-since-which-shenyu-version",children:[]},{value:"2.1 Plugin-use procedure chart",id:"21-plugin-use-procedure-chart",children:[]},{value:"2.2 Import pom",id:"22-import-pom",children:[]},{value:"2.3 Config SpringCloud in ShenYu-Boostrap",id:"23-config-springcloud-in-shenyu-boostrap",children:[{value:"2.3.1 Config SpringCloud Registry With Eureka",id:"231-config-springcloud-registry-with-eureka",children:[]},{value:"2.3.2 Config SpringCloud Registry With Nacos",id:"232-config-springcloud-registry-with-nacos",children:[]},{value:"2.3.3 Config SpringCloud LoadBalancer",id:"233-config-springcloud-loadbalancer",children:[]}]},{value:"2.4 Enable plugin",id:"24-enable-plugin",children:[]},{value:"2.5 Config plugin",id:"25-config-plugin",children:[{value:"2.5.1 Plugin config",id:"251-plugin-config",children:[]},{value:"2.5.2 Selector And Gray Config",id:"252-selector-and-gray-config",children:[]},{value:"2.5.3 Rule Config",id:"253-rule-config",children:[]}]},{value:"2.6 Examples",id:"26-examples",children:[{value:"2.6.1 Use ShenYu Request SpringCloud Service",id:"261-use-shenyu-request-springcloud-service",children:[]},{value:"2.6.2 Use ShenYu Request Unregistered SpringCloud Service",id:"262-use-shenyu-request-unregistered-springcloud-service",children:[]}]}],p={toc:u};function s(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"1-overview"},"1. Overview"),(0,r.kt)("h2",{id:"11-plugin-name"},"1.1 Plugin Name"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SpringCloud Plugin")),(0,r.kt)("h2",{id:"12-appropriate-scenario"},"1.2 Appropriate Scenario"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"transform http to springcloud"),(0,r.kt)("li",{parentName:"ul"},"springcloud gray flow control")),(0,r.kt)("h2",{id:"13-plugin-functionality"},"1.3 Plugin functionality"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"transform http protocol into springCloud protocol.")),(0,r.kt)("h2",{id:"14-plugin-code"},"1.4 Plugin code"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Core Module ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-plugin-springcloud"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Core Class ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.springcloud.SpringCloudPlugin")))),(0,r.kt)("h2",{id:"15-added-since-which-shenyu-version"},"1.5 Added Since Which shenyu version"),(0,r.kt)("p",null,"Since ShenYu 2.4.0"),(0,r.kt)("h1",{id:"2-how-to-use-plugin"},"2. How to use plugin"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add related dependencies and enable plugin, please refer to: ",(0,r.kt)("a",{parentName:"p",href:"../../quick-start/quick-start-springcloud"},"Quick start with Spring Cloud")," .")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Spring Cloud")," client access, please refer to: ",(0,r.kt)("a",{parentName:"p",href:"../../user-guide/spring-cloud-proxy"},"Spring Cloud Proxy")," ."))),(0,r.kt)("h2",{id:"21-plugin-use-procedure-chart"},"2.1 Plugin-use procedure chart"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(74327).Z})),(0,r.kt)("h2",{id:"22-import-pom"},"2.2 Import pom"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Eureka Registry")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>org.apache.shenyu</groupId>\n  <artifactId>shenyu-spring-boot-starter-plugin-springcloud</artifactId>\n  <version>${project.version}</version>\n</dependency>\n\n<dependency>\n  <groupId>org.springframework.cloud</groupId>\n  <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>\n  <version>${eureka-client.version}</version>\n</dependency>\n\n<dependency>\n  <groupId>org.springframework.cloud</groupId>\n  <artifactId>spring-cloud-commons</artifactId>\n  <version>${spring-cloud-commons.version}</version>\n</dependency>\n\n<dependency>\n  <groupId>org.apache.shenyu</groupId>\n  <artifactId>shenyu-spring-boot-starter-plugin-httpclient</artifactId>\n  <version>${project.version}</version>\n</dependency>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Nacos Registry")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>org.apache.shenyu</groupId>\n  <artifactId>shenyu-spring-boot-starter-plugin-springcloud</artifactId>\n  <version>${project.version}</version>\n</dependency>\n\n<dependency>\n  <groupId>com.alibaba.cloud</groupId>\n  <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>\n  <version>${nacos-discovery.version}</version>\n</dependency>\n\n<dependency>\n  <groupId>org.springframework.cloud</groupId>\n  <artifactId>spring-cloud-commons</artifactId>\n  <version>${spring-cloud-commons.version}</version>\n</dependency>\n\n<dependency>\n  <groupId>org.apache.shenyu</groupId>\n  <artifactId>shenyu-spring-boot-starter-plugin-httpclient</artifactId>\n  <version>${project.version}</version>\n</dependency>\n")),(0,r.kt)("h2",{id:"23-config-springcloud-in-shenyu-boostrap"},"2.3 Config SpringCloud in ShenYu-Boostrap"),(0,r.kt)("h3",{id:"231-config-springcloud-registry-with-eureka"},"2.3.1 Config SpringCloud Registry With Eureka"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spring:\n  cloud:\n    discovery:\n      enabled: true\n\neureka:\n  client:\n    enabled: true\n    serviceUrl:\n      defaultZone: http://localhost:8761/eureka/\n  instance:\n    prefer-ip-address: true\n")),(0,r.kt)("h3",{id:"232-config-springcloud-registry-with-nacos"},"2.3.2 Config SpringCloud Registry With Nacos"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spring:\n  cloud:\n    discovery:\n      enabled: true\n    nacos:\n      discovery:\n        server-addr: 127.0.0.1:8848 # Spring Cloud Alibaba Dubbo use this.\n        enabled: true\n        namespace: ShenyuRegisterCenter\n")),(0,r.kt)("h3",{id:"233-config-springcloud-loadbalancer"},"2.3.3 Config SpringCloud LoadBalancer"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Notice")),(0,r.kt)("p",{parentName:"blockquote"},"After ShenYu 2.5.0(include), ShenYu use ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-loadbalancer")," as loadbalancer client, you just config loadbalance in springcloud plugin rule.\nif you don't config loadbalance, springcloud plugin will use ",(0,r.kt)("inlineCode",{parentName:"p"},"roundRobin")," algorithm."),(0,r.kt)("p",{parentName:"blockquote"},"Before ShenYu 2.4.3(include), ShenYu use ",(0,r.kt)("inlineCode",{parentName:"p"},"Ribbon")," as loadbalancer client, you must config loadbalancer as follows.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spring:\n  cloud:\n    loadbalancer:\n      ribbon:\n        enabled: false\n")),(0,r.kt)("h2",{id:"24-enable-plugin"},"2.4 Enable plugin"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In shenyu-admin --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,r.kt)("inlineCode",{parentName:"li"},"springCloud")," set Status enabled.")),(0,r.kt)("img",{src:"/img/shenyu/quick-start/springcloud/springcloud_open_en.png",width:"60%",height:"50%"}),(0,r.kt)("h2",{id:"25-config-plugin"},"2.5 Config plugin"),(0,r.kt)("h3",{id:"251-plugin-config"},"2.5.1 Plugin config"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"you must config springcloud registry and set springcloud plugin enabled.")),(0,r.kt)("h3",{id:"252-selector-and-gray-config"},"2.5.2 Selector And Gray Config"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(49066).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Gray routing")),(0,r.kt)("p",null,"if you want to user gray route in springCloud-plugin, you can click the ",(0,r.kt)("inlineCode",{parentName:"p"},"gray")," button."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(57364).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Gray level publishing can customize and control the traffic proportion of new version applications when publishing new version applications, gradually complete the full launch of new version applications, maximize the business risk caused by new version publishing, reduce the impact surface caused by faults, and support rapid roll back.")),(0,r.kt)("p",null,"when the gray is open,Gateway load balancing will select one node from the current node list for routing and you can modify node weights to change the weight of nodes in the load balancing algorithm."),(0,r.kt)("img",{src:"/img/shenyu/plugin/springcloud/gray.png",width:"80%",height:"80%"}),(0,r.kt)("p",null,"It should be noted that,if your business instance not use the client jar of ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-client-springcloud"),", You should add gray node information manually on this selector page."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"serviceId"),": your springcloud service id")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"gray"),"\uff1aenable gray routing."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"protocol"),": protocol default is 'http://'.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"upstreamUrl"),": the server instance host, ip:port.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"weight"),": the server instance and participate in load balancing calculation.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"status"),": true: the server is available\uff0cfalse: the server is unavailable.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"timestamp"),": the server's start time.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"warmup"),": the server's warm up time and and participate in load balancing calculation."))))),(0,r.kt)("h3",{id:"253-rule-config"},"2.5.3 Rule Config"),(0,r.kt)("p",null,"Rule Handler, the ",(0,r.kt)("inlineCode",{parentName:"p"},"handle")," field, can be performed by the gateway after the final matching of traffic. For more information, please refer to ",(0,r.kt)("a",{parentName:"p",href:"../plugin-handle-explanation"},"Plugin handle management")," in Plugin Config."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"use ",(0,r.kt)("inlineCode",{parentName:"li"},"shenyu-client-springcloud")," rule config")),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(25449).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"details\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timeout"),"\uff1aset time out."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"loadbalance"),"\uff1aloadbalance algorithm,there are three options: ",(0,r.kt)("inlineCode",{parentName:"li"},"roundRobin"),",",(0,r.kt)("inlineCode",{parentName:"li"},"random"),",",(0,r.kt)("inlineCode",{parentName:"li"},"hash")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"not use ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-client-springcloud")," rule config"))),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(8956).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"details\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"path"),"\uff1arequest path."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timeout"),"\uff1aset time out.")))),(0,r.kt)("h2",{id:"26-examples"},"2.6 Examples"),(0,r.kt)("h3",{id:"261-use-shenyu-request-springcloud-service"},"2.6.1 Use ShenYu Request SpringCloud Service"),(0,r.kt)("h4",{id:"2611-preparation"},"2.6.1.1 Preparation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Start ",(0,r.kt)("inlineCode",{parentName:"li"},"Eureka")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Nacos")," Registry, if you use eureka, start ",(0,r.kt)("inlineCode",{parentName:"li"},"shenyu-examples-eureka")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"shenyu-example")),(0,r.kt)("li",{parentName:"ul"},"Start ",(0,r.kt)("inlineCode",{parentName:"li"},"ShenYu Admin")," application"),(0,r.kt)("li",{parentName:"ul"},"Start ",(0,r.kt)("inlineCode",{parentName:"li"},"shenyu-examples-springcloud"))),(0,r.kt)("h4",{id:"2612-plugin-config"},"2.6.1.2 Plugin Config"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In shenyu-admin --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,r.kt)("inlineCode",{parentName:"p"},"springCloud")," set Status enabled.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Config SpringCloud Registry in ",(0,r.kt)("inlineCode",{parentName:"p"},"ShenYu Bootstrap"),", please read ","[2.3 Config SpringCloud in ShenYu-Boostrap]","(#2.3 Config SpringCloud in ShenYu-Boostrap)"))),(0,r.kt)("h4",{id:"2613-selector-config"},"2.6.1.3 Selector Config"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(49066).Z})),(0,r.kt)("p",null,"if your want to use gray flow and the gray flow have registered to ",(0,r.kt)("inlineCode",{parentName:"p"},"ShenyYu"),", you must config gray upstream as follows."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(57364).Z})),(0,r.kt)("h4",{id:"2614-rule-config"},"2.6.1.4 Rule Config"),(0,r.kt)("p",null,"if you use ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-client-springcloud")," register service to ",(0,r.kt)("inlineCode",{parentName:"p"},"ShenYu"),", you don't config rule, if you want to change rule config,\nplease read ","[2.5.3 Rule Config]","(#2.5.3 Rule Config)"),(0,r.kt)("h4",{id:"2615-request-springcloud-service-and-check-result"},"2.6.1.5 Request SpringCloud Service and Check Result"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(92764).Z})),(0,r.kt)("h3",{id:"262-use-shenyu-request-unregistered-springcloud-service"},"2.6.2 Use ShenYu Request Unregistered SpringCloud Service"),(0,r.kt)("h4",{id:"2621-preparation"},"2.6.2.1 Preparation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Start ",(0,r.kt)("inlineCode",{parentName:"li"},"Eureka")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Nacos")," Registry, if you use eureka, start ",(0,r.kt)("inlineCode",{parentName:"li"},"shenyu-examples-eureka")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"shenyu-example")),(0,r.kt)("li",{parentName:"ul"},"Start ",(0,r.kt)("inlineCode",{parentName:"li"},"ShenYu Admin")," application"),(0,r.kt)("li",{parentName:"ul"},"Start ",(0,r.kt)("inlineCode",{parentName:"li"},"shenyu-examples-springcloud"))),(0,r.kt)("h4",{id:"2622-plugin-config"},"2.6.2.2 Plugin Config"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In shenyu-admin --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,r.kt)("inlineCode",{parentName:"p"},"springCloud")," set Status enabled.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Config SpringCloud Registry in ",(0,r.kt)("inlineCode",{parentName:"p"},"ShenYu Bootstrap"),", please read ","[2.3 Config SpringCloud in ShenYu-Boostrap]","(#2.3 Config SpringCloud in ShenYu-Boostrap)"))),(0,r.kt)("h4",{id:"2623-selector-config"},"2.6.2.3 Selector Config"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(49066).Z})),(0,r.kt)("p",null,"if your want to use gray flow and the gray flow unregister to ",(0,r.kt)("inlineCode",{parentName:"p"},"ShenyYu"),", you must config gray upstream as follows."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(57364).Z})),(0,r.kt)("h4",{id:"2624-rule-config"},"2.6.2.4 Rule Config"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(8956).Z})),(0,r.kt)("p",null,"you must config ",(0,r.kt)("inlineCode",{parentName:"p"},"path")," in rule config, ",(0,r.kt)("inlineCode",{parentName:"p"},"path")," is your service uri, for example: ",(0,r.kt)("inlineCode",{parentName:"p"},"/springcloud/new/feature/gateway/not"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"timeout")," is your service allow timeout."),(0,r.kt)("h4",{id:"2625-access-unregistered-services-through-configuration"},"2.6.2.5 Access Unregistered Services Through Configuration"),(0,r.kt)("h5",{id:"26251-use-the-field-rpc_type-in-http-request-header"},"2.6.2.5.1 use the field ",(0,r.kt)("inlineCode",{parentName:"h5"},"rpc_type")," in http request header"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"### shengyu getway proxy not support\nPOST http://localhost:9195/springcloud/new/feature/gateway/not\nAccept: application/json\nContent-Type: application/json\nrpc_type: springCloud\n")),(0,r.kt)("h5",{id:"26252-add-meta_data-in-shenyu-admin"},"2.6.2.5.2 add meta_data in ShenYu Admin"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(78886).Z})),(0,r.kt)("h4",{id:"2626-request-springcloud-service-and-check-result"},"2.6.2.6 Request SpringCloud Service and Check Result"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(2107).Z})),(0,r.kt)("h1",{id:"3-how-to-disable-plugin"},"3. How to disable plugin"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In ",(0,r.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,r.kt)("inlineCode",{parentName:"li"},"springCloud")," set Status disable.")))}s.isMDXComponent=!0},74327:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/plugin_use_en-8b5661551cdf92fdabc9cb2e7947cffc.jpg"},57364:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/gray_en_2-a6f62d441d0d0b41452abdc8962eb544.png"},8956:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/rule_en-ac80ec4eabec57e3005aca1b5c9fa3c1.png"},25449:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/rule_en_2-accf682c14590865cbcdcb39b6d58b54.png"},49066:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/selector_en_2-ee54c943437d9b25d6014ebf6fd2ef4e.png"},2107:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/springcloud-request-unregistered-9a6e941b32cd45ac1789f4c5ef115529.png"},92764:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/springcloud-request-a2b6b014e19f9de790a62f353723071b.png"},78886:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/springcloud_metadata_en-3dba84d698af7567e3ad9db0c68e0484.png"}}]);