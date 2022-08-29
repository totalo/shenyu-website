"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[94261],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),o=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=o(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=o(t),k=i,m=c["".concat(u,".").concat(k)]||c[k]||s[k]||l;return t?r.createElement(m,a(a({ref:n},d),{},{components:t})):r.createElement(m,a({ref:n},d))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,a=new Array(l);a[0]=c;var p={};for(var u in n)hasOwnProperty.call(n,u)&&(p[u]=n[u]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var o=2;o<l;o++)a[o]=t[o];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},99855:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=t(87462),i=(t(67294),t(3905));const l={title:"Spring Cloud\u63d2\u4ef6",keywords:["SpringCloud"],description:"Spring Cloud\u63d2\u4ef6"},a="1. \u6982\u8ff0",p={unversionedId:"plugin-center/proxy/spring-cloud-plugin",id:"version-2.5.0/plugin-center/proxy/spring-cloud-plugin",isDocsHomePage:!1,title:"Spring Cloud\u63d2\u4ef6",description:"Spring Cloud\u63d2\u4ef6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5.0/plugin-center/proxy/spring-cloud-plugin.md",sourceDirName:"plugin-center/proxy",slug:"/plugin-center/proxy/spring-cloud-plugin",permalink:"/zh/docs/plugin-center/proxy/spring-cloud-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.5.0/plugin-center/proxy/spring-cloud-plugin.md",version:"2.5.0",frontMatter:{title:"Spring Cloud\u63d2\u4ef6",keywords:["SpringCloud"],description:"Spring Cloud\u63d2\u4ef6"},sidebar:"version-2.5.0/tutorialSidebar",previous:{title:"Sofa\u63d2\u4ef6",permalink:"/zh/docs/plugin-center/proxy/sofa-plugin"},next:{title:"Tars\u63d2\u4ef6",permalink:"/zh/docs/plugin-center/proxy/tars-plugin"}},u=[{value:"1.1 \u63d2\u4ef6\u540d\u79f0",id:"11-\u63d2\u4ef6\u540d\u79f0",children:[]},{value:"1.2 \u9002\u7528\u573a\u666f",id:"12-\u9002\u7528\u573a\u666f",children:[]},{value:"1.3 \u63d2\u4ef6\u529f\u80fd",id:"13-\u63d2\u4ef6\u529f\u80fd",children:[]},{value:"1.4 \u63d2\u4ef6\u4ee3\u7801",id:"14-\u63d2\u4ef6\u4ee3\u7801",children:[]},{value:"1.5 \u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c",id:"15-\u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c",children:[]},{value:"2.1 \u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe",id:"21-\u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe",children:[]},{value:"2.2 \u5bfc\u5165pom",id:"22-\u5bfc\u5165pom",children:[]},{value:"2.3 \u5728ShenYu Bootstrap\u914d\u7f6eSpringCloud",id:"23-\u5728shenyu-bootstrap\u914d\u7f6espringcloud",children:[{value:"2.3.1 \u914d\u7f6eSpringCloud\u7684Eureka\u670d\u52a1\u6ce8\u518c\u53d1\u73b0",id:"231-\u914d\u7f6espringcloud\u7684eureka\u670d\u52a1\u6ce8\u518c\u53d1\u73b0",children:[]},{value:"2.3.2 \u914d\u7f6eSpringCloud\u7684Nacos\u670d\u52a1\u6ce8\u518c\u53d1\u73b0",id:"232-\u914d\u7f6espringcloud\u7684nacos\u670d\u52a1\u6ce8\u518c\u53d1\u73b0",children:[]},{value:"2.3.3 \u914d\u7f6eSpringCloud\u63d2\u4ef6\u8d1f\u8f7d\u5747\u8861",id:"233-\u914d\u7f6espringcloud\u63d2\u4ef6\u8d1f\u8f7d\u5747\u8861",children:[]}]},{value:"2.4 \u542f\u7528\u63d2\u4ef6",id:"24-\u542f\u7528\u63d2\u4ef6",children:[]},{value:"2.5 \u914d\u7f6e\u63d2\u4ef6",id:"25-\u914d\u7f6e\u63d2\u4ef6",children:[{value:"2.5.1 \u63d2\u4ef6\u914d\u7f6e",id:"251-\u63d2\u4ef6\u914d\u7f6e",children:[]},{value:"2.5.2 \u9009\u62e9\u5668\u548c\u7070\u5ea6\u6d41\u91cf\u914d\u7f6e",id:"252-\u9009\u62e9\u5668\u548c\u7070\u5ea6\u6d41\u91cf\u914d\u7f6e",children:[]},{value:"2.5.3 \u89c4\u5219\u914d\u7f6e",id:"253-\u89c4\u5219\u914d\u7f6e",children:[]}]},{value:"2.6 \u793a\u4f8b",id:"26-\u793a\u4f8b",children:[{value:"2.6.1 \u4f7f\u7528ShenYu\u8bbf\u95eeSpringCloud\u670d\u52a1",id:"261-\u4f7f\u7528shenyu\u8bbf\u95eespringcloud\u670d\u52a1",children:[]},{value:"2.6.2 \u4f7f\u7528ShenYu\u8bbf\u95ee\u672a\u6ce8\u518c\u5230ShenYu\u7684SpringCloud\u670d\u52a1",id:"262-\u4f7f\u7528shenyu\u8bbf\u95ee\u672a\u6ce8\u518c\u5230shenyu\u7684springcloud\u670d\u52a1",children:[]}]}],o={toc:u};function d(e){let{components:n,...l}=e;return(0,i.kt)("wrapper",(0,r.Z)({},o,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"1-\u6982\u8ff0"},"1. \u6982\u8ff0"),(0,i.kt)("h2",{id:"11-\u63d2\u4ef6\u540d\u79f0"},"1.1 \u63d2\u4ef6\u540d\u79f0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SpringCloud\u63d2\u4ef6")),(0,i.kt)("h2",{id:"12-\u9002\u7528\u573a\u666f"},"1.2 \u9002\u7528\u573a\u666f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7528\u6765\u5c06",(0,i.kt)("inlineCode",{parentName:"li"},"http\u534f\u8bae")," \u8f6c\u6210 ",(0,i.kt)("inlineCode",{parentName:"li"},"Spring Cloud\u534f\u8bae"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u7528\u4e8eSpringCloud\u5fae\u670d\u52a1\u7070\u5ea6\u6d41\u91cf\u63a7\u5236\u3002")),(0,i.kt)("h2",{id:"13-\u63d2\u4ef6\u529f\u80fd"},"1.3 \u63d2\u4ef6\u529f\u80fd"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5c06",(0,i.kt)("inlineCode",{parentName:"li"},"http\u534f\u8bae")," \u8f6c\u6210 ",(0,i.kt)("inlineCode",{parentName:"li"},"Spring Cloud\u534f\u8bae"),"\u3002")),(0,i.kt)("h2",{id:"14-\u63d2\u4ef6\u4ee3\u7801"},"1.4 \u63d2\u4ef6\u4ee3\u7801"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6838\u5fc3\u6a21\u5757 ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-plugin-springcloud"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6838\u5fc3\u7c7b ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.springcloud.SpringCloudPlugin")))),(0,i.kt)("h2",{id:"15-\u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c"},"1.5 \u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"2.4.0")),(0,i.kt)("h1",{id:"2-\u5982\u4f55\u4f7f\u7528\u63d2\u4ef6"},"2. \u5982\u4f55\u4f7f\u7528\u63d2\u4ef6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5f15\u5165\u76f8\u5173\u4f9d\u8d56\uff0c\u5f00\u542f\u63d2\u4ef6\uff0c\u8bf7\u53c2\u8003\uff1a",(0,i.kt)("a",{parentName:"p",href:"../../quick-start/quick-start-springcloud"},"Spring Cloud\u5feb\u901f\u5f00\u59cb")," \u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Spring Cloud"),"\u5e94\u7528\u5ba2\u6237\u7aef\u63a5\u5165\uff0c\u8bf7\u53c2\u8003\uff1a",(0,i.kt)("a",{parentName:"p",href:"../../user-guide/spring-cloud-proxy"},"Spring Cloud\u670d\u52a1\u63a5\u5165")," \u3002"))),(0,i.kt)("h2",{id:"21-\u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe"},"2.1 \u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(26692).Z})),(0,i.kt)("h2",{id:"22-\u5bfc\u5165pom"},"2.2 \u5bfc\u5165pom"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Eureka Registry")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>org.apache.shenyu</groupId>\n  <artifactId>shenyu-spring-boot-starter-plugin-springcloud</artifactId>\n  <version>${project.version}</version>\n</dependency>\n\n<dependency>\n  <groupId>org.springframework.cloud</groupId>\n  <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>\n  <version>${eureka-client.version}</version>\n</dependency>\n\n<dependency>\n  <groupId>org.springframework.cloud</groupId>\n  <artifactId>spring-cloud-commons</artifactId>\n  <version>${spring-cloud-commons.version}</version>\n</dependency>\n\n<dependency>\n  <groupId>org.apache.shenyu</groupId>\n  <artifactId>shenyu-spring-boot-starter-plugin-httpclient</artifactId>\n  <version>${project.version}</version>\n</dependency>\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Nacos Registry")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>org.apache.shenyu</groupId>\n  <artifactId>shenyu-spring-boot-starter-plugin-springcloud</artifactId>\n  <version>${project.version}</version>\n</dependency>\n\n<dependency>\n  <groupId>com.alibaba.cloud</groupId>\n  <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>\n  <version>${nacos-discovery.version}</version>\n</dependency>\n\n<dependency>\n  <groupId>org.springframework.cloud</groupId>\n  <artifactId>spring-cloud-commons</artifactId>\n  <version>${spring-cloud-commons.version}</version>\n</dependency>\n\n<dependency>\n  <groupId>org.apache.shenyu</groupId>\n  <artifactId>shenyu-spring-boot-starter-plugin-httpclient</artifactId>\n  <version>${project.version}</version>\n</dependency>\n")),(0,i.kt)("h2",{id:"23-\u5728shenyu-bootstrap\u914d\u7f6espringcloud"},"2.3 \u5728ShenYu Bootstrap\u914d\u7f6eSpringCloud"),(0,i.kt)("h3",{id:"231-\u914d\u7f6espringcloud\u7684eureka\u670d\u52a1\u6ce8\u518c\u53d1\u73b0"},"2.3.1 \u914d\u7f6eSpringCloud\u7684Eureka\u670d\u52a1\u6ce8\u518c\u53d1\u73b0"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"spring:\n  cloud:\n    discovery:\n      enabled: true\n\neureka:\n  client:\n    enabled: true\n    serviceUrl:\n      defaultZone: http://localhost:8761/eureka/\n  instance:\n    prefer-ip-address: true\n")),(0,i.kt)("h3",{id:"232-\u914d\u7f6espringcloud\u7684nacos\u670d\u52a1\u6ce8\u518c\u53d1\u73b0"},"2.3.2 \u914d\u7f6eSpringCloud\u7684Nacos\u670d\u52a1\u6ce8\u518c\u53d1\u73b0"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"spring:\n  cloud:\n    discovery:\n      enabled: true\n    nacos:\n      discovery:\n        server-addr: 127.0.0.1:8848 # Spring Cloud Alibaba Dubbo use this.\n        enabled: true\n        namespace: ShenyuRegisterCenter\n")),(0,i.kt)("h3",{id:"233-\u914d\u7f6espringcloud\u63d2\u4ef6\u8d1f\u8f7d\u5747\u8861"},"2.3.3 \u914d\u7f6eSpringCloud\u63d2\u4ef6\u8d1f\u8f7d\u5747\u8861"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"\u6ce8\u610f")),(0,i.kt)("p",{parentName:"blockquote"},"\u5728ShenYu 2.5.0(\u5305\u62ec)\u4e4b\u540e\uff0cShenYu\u4f7f\u7528\u81ea\u6709\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-loadbalancer"),"\u4f5c\u4e3a\u8d1f\u8f7d\u5747\u8861\u5ba2\u6237\u7aef\uff0c\u4f60\u53ea\u9700\u8981\u5728springcloud\u63d2\u4ef6\u7684\u89c4\u5219\u914d\u7f6e\u4e2d\u914d\u7f6e\u8d1f\u8f7d\u5747\u8861\u3002\n\u5982\u679c\u4f60\u6ca1\u6709\u914d\u7f6e\u8d1f\u8f7d\u5747\u8861\uff0c\u5c06\u4f7f\u7528\u9ed8\u8ba4\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"roundRobin"),"\u7b97\u6cd5\u3002"),(0,i.kt)("p",{parentName:"blockquote"},"\u5728ShenYu 2.4.3(\u5305\u62ec)\u4e4b\u524d\uff0cShenYu\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"Ribbon"),"\u4f5c\u4e3a\u8d1f\u8f7d\u5747\u8861\u5ba2\u6237\u7aef\uff0c\u4f60\u5fc5\u987b\u5982\u4e0b\u914d\u7f6e\u8d1f\u8f7d\u5747\u8861\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"spring:\n  cloud:\n    loadbalancer:\n      ribbon:\n        enabled: false\n")),(0,i.kt)("h2",{id:"24-\u542f\u7528\u63d2\u4ef6"},"2.4 \u542f\u7528\u63d2\u4ef6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e \u57fa\u7840\u914d\u7f6e --\x3e \u63d2\u4ef6\u7ba1\u7406-> ",(0,i.kt)("inlineCode",{parentName:"li"},"springCloud")," \uff0c\u8bbe\u7f6e\u4e3a\u5f00\u542f\u3002")),(0,i.kt)("img",{src:"/img/shenyu/quick-start/springcloud/springcloud_open_en.png",width:"60%",height:"50%"}),(0,i.kt)("h2",{id:"25-\u914d\u7f6e\u63d2\u4ef6"},"2.5 \u914d\u7f6e\u63d2\u4ef6"),(0,i.kt)("h3",{id:"251-\u63d2\u4ef6\u914d\u7f6e"},"2.5.1 \u63d2\u4ef6\u914d\u7f6e"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4f60\u5fc5\u987b\u914d\u7f6e\u4f60\u7684\u670d\u52a1\u6ce8\u518c\u53d1\u73b0\u4e2d\u5fc3\u5e76\u5c06\u63d2\u4ef6\u6253\u5f00\u3002")),(0,i.kt)("h3",{id:"252-\u9009\u62e9\u5668\u548c\u7070\u5ea6\u6d41\u91cf\u914d\u7f6e"},"2.5.2 \u9009\u62e9\u5668\u548c\u7070\u5ea6\u6d41\u91cf\u914d\u7f6e"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(68865).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7070\u5ea6\u8def\u7531")),(0,i.kt)("p",null,"\u5982\u679c\u60a8\u60f3\u5728springCloud\u63d2\u4ef6\u4e2d\u4f7f\u7528\u7070\u8272\u8def\u7531\uff0c\u53ef\u4ee5\u5355\u51fb\u201c\u7070\u8272\u201d\u6309\u94ae\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(34613).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7070\u5ea6\u53d1\u5e03\u53ef\u4ee5\u5728\u53d1\u5e03\u65b0\u7248\u672c\u5e94\u7528\u65f6\uff0c\u81ea\u5b9a\u4e49\u63a7\u5236\u65b0\u7248\u672c\u5e94\u7528\u6d41\u91cf\u6bd4\u91cd\uff0c\u6e10\u8fdb\u5f0f\u5b8c\u6210\u65b0\u7248\u672c\u5e94\u7528\u7684\u5168\u91cf\u4e0a\u7ebf\uff0c\u6700\u5927\u9650\u5ea6\u5730\u63a7\u5236\u65b0\u7248\u672c\u53d1\u5e03\u5e26\u6765\u7684\u4e1a\u52a1\u98ce\u9669\uff0c\u964d\u4f4e\u6545\u969c\u5e26\u6765\u7684\u5f71\u54cd\u9762\uff0c\u540c\u65f6\u652f\u6301\u5feb\u901f\u56de\u6eda\u3002")),(0,i.kt)("p",null,"\u5f53\u5f00\u542f\u7070\u5ea6\u662f\uff0c\u7f51\u5173\u7684\u8d1f\u8f7d\u5e73\u8861\u7b97\u6cd5\u5c06\u4ece\u5f53\u524d\u8282\u70b9\u5217\u8868\u4e2d\u9009\u62e9\u4e00\u4e2a\u8282\u70b9\u8fdb\u884c\u8def\u7531\uff0c\u5e76\u4e14\u60a8\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u8282\u70b9\u6743\u91cd\u4ee5\u66f4\u6539\u8d1f\u8f7d\u5e73\u8861\u7b97\u6cd5\u4e2d\u8282\u70b9\u7684\u6743\u91cd\u3002"),(0,i.kt)("img",{src:"/img/shenyu/plugin/springcloud/gray.png",width:"80%",height:"80%"}),(0,i.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5982\u679c\u60a8\u7684\u4e1a\u52a1\u5b9e\u4f8b\u6ca1\u6709\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-client-springcloud"),"\u7684\u5ba2\u6237\u7aef\u8fdb\u884c\u4e1a\u52a1\u6ce8\u518c\u53d1\u73b0\uff0c\u60a8\u5e94\u8be5\u5728\u5f53\u524d\u9009\u62e9\u5668\u9875\u9762\u4e0a\u624b\u52a8\u6dfb\u52a0\u8282\u70b9\u4fe1\u606f\u8fdb\u884c\u7070\u5ea6\u8def\u7531\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5904\u7406\u914d\u7f6e\u8be6\u89e3\uff1a"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"serviceId"),":serviceId\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"gray"),"\uff1a\u542f\u7528\u7070\u5ea6\u8def\u7531\u3002"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"protocol"),"\uff1a\u534f\u8bae\u9ed8\u8ba4\u503c\u4e3a'http://'\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"upstreamUrl"),": \u670d\u52a1\u5668\u8282\u70b9\u5730\u5740\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"weight"),": \u670d\u52a1\u5668\u8282\u70b9\u6743\u91cd\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"status"),":true\uff1a\u670d\u52a1\u5668\u53ef\u7528\uff0cfalse\uff1a\u670d\u52a1\u5668\u4e0d\u53ef\u7528\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"timestamp"),"\uff1a\u8282\u70b9\u7684\u542f\u52a8\u65f6\u95f4\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"warmup"),"\uff1a\u8282\u70b9\u7684\u9884\u70ed\u65f6\u95f4\uff0c\u53c2\u4e0e\u8d1f\u8f7d\u5747\u8861\u8ba1\u7b97\u3002"))))))),(0,i.kt)("h3",{id:"253-\u89c4\u5219\u914d\u7f6e"},"2.5.3 \u89c4\u5219\u914d\u7f6e"),(0,i.kt)("p",null,"\u89c4\u5219\u5904\u7406\uff0c\u5373",(0,i.kt)("inlineCode",{parentName:"p"},"handle"),"\u5b57\u6bb5\uff0c\u662f\u7f51\u5173\u5bf9\u6d41\u91cf\u5b8c\u6210\u6700\u7ec8\u5339\u914d\u540e\uff0c\u53ef\u4ee5\u8fdb\u884c\u5904\u7406\u7684\u64cd\u4f5c\u3002\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u8003\u63d2\u4ef6\u7ba1\u7406\u4e2d\u7684 ",(0,i.kt)("a",{parentName:"p",href:"../../user-guide/admin-usage/plugin-handle-explanation"},"\u63d2\u4ef6\u5904\u7406\u7ba1\u7406")," \u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"shenyu-client-springcloud")," \u7684\u89c4\u5219\u914d\u7f6e")),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(95327).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u89c4\u5219\u914d\u7f6e\u8be6\u89e3\uff1a"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"timeout"),"\uff1a\u8bbe\u7f6e\u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"loadbalance"),"\uff1a\u8d1f\u8f7d\u5747\u8861\u7b97\u6cd5\uff0c\u6709\u4e09\u4e2a\u53ef\u9009\u9879\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"roundRobin"),",",(0,i.kt)("inlineCode",{parentName:"li"},"random"),",",(0,i.kt)("inlineCode",{parentName:"li"},"hash")," "))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u672a\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-client-springcloud")," \u7684\u89c4\u5219\u914d\u7f6e"))),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(20656).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u89c4\u5219\u914d\u7f6e\u8be6\u89e3\uff1a"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path"),"\uff1a\u8bf7\u6c42\u8def\u5f84\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"timeout"),"\uff1a\u8bbe\u7f6e\u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4\u3002")))),(0,i.kt)("h2",{id:"26-\u793a\u4f8b"},"2.6 \u793a\u4f8b"),(0,i.kt)("h3",{id:"261-\u4f7f\u7528shenyu\u8bbf\u95eespringcloud\u670d\u52a1"},"2.6.1 \u4f7f\u7528ShenYu\u8bbf\u95eeSpringCloud\u670d\u52a1"),(0,i.kt)("h4",{id:"2611-\u51c6\u5907\u5de5\u4f5c"},"2.6.1.1 \u51c6\u5907\u5de5\u4f5c"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u542f\u52a8 ",(0,i.kt)("inlineCode",{parentName:"li"},"Eureka")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"li"},"Nacos")," \u670d\u52a1\u6ce8\u518c\u53d1\u73b0\u4e2d\u5fc3, \u5982\u679c\u4f60\u4f7f\u7528eureka, \u542f\u52a8 ",(0,i.kt)("inlineCode",{parentName:"li"},"shenyu-examples-eureka"),"\u5373\u53ef"),(0,i.kt)("li",{parentName:"ul"},"\u542f\u52a8 ",(0,i.kt)("inlineCode",{parentName:"li"},"ShenYu Admin")," "),(0,i.kt)("li",{parentName:"ul"},"\u542f\u52a8 ",(0,i.kt)("inlineCode",{parentName:"li"},"shenyu-examples-springcloud"))),(0,i.kt)("h4",{id:"2612-\u63d2\u4ef6\u914d\u7f6e"},"2.6.1.2 \u63d2\u4ef6\u914d\u7f6e"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," --\x3e \u57fa\u7840\u914d\u7f6e --\x3e \u63d2\u4ef6\u7ba1\u7406-> ",(0,i.kt)("inlineCode",{parentName:"p"},"springCloud")," \uff0c\u8bbe\u7f6e\u4e3a\u5f00\u542f\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"ShenYu Bootstrap"),"\u914d\u7f6e\u670d\u52a1\u6ce8\u518c\u53d1\u73b0\u4e2d\u5fc3, \u8bf7\u67e5\u770b ","[2.3 \u5728ShenYu Bootstrap\u914d\u7f6eSpringCloud]","(#2.3 \u5728ShenYu Bootstrap\u914d\u7f6eSpringCloud)"))),(0,i.kt)("h4",{id:"2613-\u9009\u62e9\u5668\u914d\u7f6e"},"2.6.1.3 \u9009\u62e9\u5668\u914d\u7f6e"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(68865).Z})),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u4f7f\u7528\u6ce8\u518c\u5230ShenYu\u7684\u7070\u5ea6\u6d41\u91cf\uff0c\u4f60\u5fc5\u987b\u914d\u7f6e\u7070\u5ea6\u8def\u7531\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(34613).Z})),(0,i.kt)("h4",{id:"2614-\u89c4\u5219\u914d\u7f6e"},"2.6.1.4 \u89c4\u5219\u914d\u7f6e"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-client-springcloud"),"\u6ce8\u518c\u670d\u52a1\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"ShenYu"),",\u4f60\u53ef\u4ee5\u4e0d\u7528\u914d\u7f6e\u89c4\u5219\uff0c\u5982\u679c\u4f60\u60f3\u6539\u53d8\u89c4\u5219\uff0c\u8bf7\u67e5\u770b","[2.5.3 \u89c4\u5219\u914d\u7f6e]","(#2.5.3 \u89c4\u5219\u914d\u7f6e)"),(0,i.kt)("h4",{id:"2615-\u8bf7\u6c42\u670d\u52a1\u5e76\u4e14\u9a8c\u8bc1\u7ed3\u679c"},"2.6.1.5 \u8bf7\u6c42\u670d\u52a1\u5e76\u4e14\u9a8c\u8bc1\u7ed3\u679c"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(92764).Z})),(0,i.kt)("h3",{id:"262-\u4f7f\u7528shenyu\u8bbf\u95ee\u672a\u6ce8\u518c\u5230shenyu\u7684springcloud\u670d\u52a1"},"2.6.2 \u4f7f\u7528ShenYu\u8bbf\u95ee\u672a\u6ce8\u518c\u5230ShenYu\u7684SpringCloud\u670d\u52a1"),(0,i.kt)("h4",{id:"2621-\u51c6\u5907\u5de5\u4f5c"},"2.6.2.1 \u51c6\u5907\u5de5\u4f5c"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u542f\u52a8 ",(0,i.kt)("inlineCode",{parentName:"li"},"Eureka")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"li"},"Nacos")," \u670d\u52a1\u6ce8\u518c\u53d1\u73b0\u4e2d\u5fc3, \u5982\u679c\u4f60\u4f7f\u7528eureka, \u542f\u52a8 ",(0,i.kt)("inlineCode",{parentName:"li"},"shenyu-examples-eureka"),"\u5373\u53ef"),(0,i.kt)("li",{parentName:"ul"},"\u542f\u52a8 ",(0,i.kt)("inlineCode",{parentName:"li"},"ShenYu Admin")),(0,i.kt)("li",{parentName:"ul"},"\u542f\u52a8 ",(0,i.kt)("inlineCode",{parentName:"li"},"shenyu-examples-springcloud"))),(0,i.kt)("h4",{id:"2622-\u63d2\u4ef6\u914d\u7f6e"},"2.6.2.2 \u63d2\u4ef6\u914d\u7f6e"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," --\x3e \u57fa\u7840\u914d\u7f6e --\x3e \u63d2\u4ef6\u7ba1\u7406-> ",(0,i.kt)("inlineCode",{parentName:"p"},"springCloud")," \uff0c\u8bbe\u7f6e\u4e3a\u5f00\u542f\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"ShenYu Bootstrap"),"\u914d\u7f6e\u670d\u52a1\u6ce8\u518c\u53d1\u73b0\u4e2d\u5fc3, \u8bf7\u67e5\u770b ","[2.3 \u5728ShenYu Bootstrap\u914d\u7f6eSpringCloud]","(#2.3 \u5728ShenYu Bootstrap\u914d\u7f6eSpringCloud)"))),(0,i.kt)("h4",{id:"2623-\u9009\u62e9\u5668\u914d\u7f6e"},"2.6.2.3 \u9009\u62e9\u5668\u914d\u7f6e"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(68865).Z})),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u4f7f\u7528\u672a\u6ce8\u518c\u5230ShenYu\u7684\u7070\u5ea6\u6d41\u91cf\uff0c\u4f60\u5fc5\u987b\u914d\u7f6e\u7070\u5ea6\u6d41\u91cf\u76f8\u5173\u7684\u914d\u7f6e"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(34613).Z})),(0,i.kt)("h4",{id:"2624-\u89c4\u5219\u914d\u7f6e"},"2.6.2.4 \u89c4\u5219\u914d\u7f6e"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(20656).Z})),(0,i.kt)("p",null,"\u4f60\u5fc5\u987b\u5728\u89c4\u5219\u914d\u7f6e\u4e2d\u914d\u7f6e",(0,i.kt)("inlineCode",{parentName:"p"},"path"),"\u5b57\u6bb5\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"path"),"\u5b57\u6bb5\u4e3a\u4f60\u7684\u670d\u52a1uri\uff0c\u4f8b\u5982\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"/springcloud/new/feature/gateway/not"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"timeout"),"\u4e3a\u4f60\u7684\u670d\u52a1\u5141\u8bb8\u7684\u8d85\u65f6\u65f6\u95f4\u3002"),(0,i.kt)("h4",{id:"2625-\u901a\u8fc7\u914d\u7f6e\u8bbf\u95ee\u672a\u6ce8\u518c\u7684\u670d\u52a1"},"2.6.2.5 \u901a\u8fc7\u914d\u7f6e\u8bbf\u95ee\u672a\u6ce8\u518c\u7684\u670d\u52a1"),(0,i.kt)("h5",{id:"26251-\u5728\u8bf7\u6c42\u5934\u4f7f\u7528-rpc_type\u5b57\u6bb5\u8fdb\u884c\u8bbf\u95ee"},"2.6.2.5.1 \u5728\u8bf7\u6c42\u5934\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"h5"},"rpc_type"),"\u5b57\u6bb5\u8fdb\u884c\u8bbf\u95ee"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"### shengyu getway proxy not support\nPOST http://localhost:9195/springcloud/new/feature/gateway/not\nAccept: application/json\nContent-Type: application/json\nrpc_type: springCloud\n")),(0,i.kt)("h5",{id:"26252-\u5728shenyuadmin-\u6dfb\u52a0\u5143\u4fe1\u606f"},"2.6.2.5.2 \u5728ShenYuAdmin \u6dfb\u52a0\u5143\u4fe1\u606f"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(41829).Z})),(0,i.kt)("h4",{id:"2626-\u8bf7\u6c42\u670d\u52a1\u5e76\u4e14\u9a8c\u8bc1\u7ed3\u679c"},"2.6.2.6 \u8bf7\u6c42\u670d\u52a1\u5e76\u4e14\u9a8c\u8bc1\u7ed3\u679c"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(2107).Z})),(0,i.kt)("h1",{id:"3-\u5982\u4f55\u7981\u7528\u63d2\u4ef6"},"3. \u5982\u4f55\u7981\u7528\u63d2\u4ef6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e \u57fa\u7840\u914d\u7f6e --\x3e \u63d2\u4ef6\u7ba1\u7406-> ",(0,i.kt)("inlineCode",{parentName:"li"},"springCloud")," \uff0c\u8bbe\u7f6e\u4e3a\u5173\u95ed\u3002")))}d.isMDXComponent=!0},26692:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/plugin_use_zh-cf88744e5c4b7cc85accbcf32af6e1a3.jpg"},34613:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/gray_zh_2-6c4389f419d1bf70e3712c33eb6e8156.png"},20656:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/rule_zh-15b9eda338374dbfa9fd55d3f9319ce0.png"},95327:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/rule_zh_2-ac8e8e43b7c4005295423af22f9fcffb.png"},68865:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/selector_zh_2-a51763fcb38a3ad1b1b7cbdf99eaf8c0.png"},2107:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/springcloud-request-unregistered-9a6e941b32cd45ac1789f4c5ef115529.png"},92764:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/springcloud-request-a2b6b014e19f9de790a62f353723071b.png"},41829:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/springcloud_metadata_zh-087632e3bd89be18e50211b3de9de06d.png"}}]);