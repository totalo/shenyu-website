"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[65258],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},d=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=u(t),m=r,b=s["".concat(l,".").concat(m)]||s[m]||c[m]||i;return t?a.createElement(b,p(p({ref:n},d),{},{components:t})):a.createElement(b,p({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,p=new Array(i);p[0]=s;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var u=2;u<i;u++)p[u]=t[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},91241:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=t(87462),r=(t(67294),t(3905));const i={title:"Dubbo\u670d\u52a1\u63a5\u5165",keywords:["Dubbo"],description:"Dubbo\u670d\u52a1\u63a5\u5165"},p=void 0,o={unversionedId:"user-guide/dubbo-proxy",id:"version-2.5.0/user-guide/dubbo-proxy",isDocsHomePage:!1,title:"Dubbo\u670d\u52a1\u63a5\u5165",description:"Dubbo\u670d\u52a1\u63a5\u5165",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5.0/user-guide/dubbo-proxy.md",sourceDirName:"user-guide",slug:"/user-guide/dubbo-proxy",permalink:"/zh/docs/user-guide/dubbo-proxy",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.5.0/user-guide/dubbo-proxy.md",version:"2.5.0",frontMatter:{title:"Dubbo\u670d\u52a1\u63a5\u5165",keywords:["Dubbo"],description:"Dubbo\u670d\u52a1\u63a5\u5165"},sidebar:"version-2.5.0/tutorialSidebar",previous:{title:"\u6570\u636e\u540c\u6b65\u914d\u7f6e",permalink:"/zh/docs/user-guide/property-config/use-data-sync"},next:{title:"gRPC\u670d\u52a1\u63a5\u5165",permalink:"/zh/docs/user-guide/grpc-proxy"}},l=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",children:[]},{value:"\u5728\u7f51\u5173\u4e2d\u5f15\u5165 dubbo \u63d2\u4ef6",id:"\u5728\u7f51\u5173\u4e2d\u5f15\u5165-dubbo-\u63d2\u4ef6",children:[]},{value:"dubbo \u670d\u52a1\u63a5\u5165\u7f51\u5173",id:"dubbo-\u670d\u52a1\u63a5\u5165\u7f51\u5173",children:[]},{value:"dubbo \u63d2\u4ef6\u8bbe\u7f6e",id:"dubbo-\u63d2\u4ef6\u8bbe\u7f6e",children:[]},{value:"\u63a5\u53e3\u6ce8\u518c\u5230\u7f51\u5173",id:"\u63a5\u53e3\u6ce8\u518c\u5230\u7f51\u5173",children:[]},{value:"dubbo\u7528\u6237\u8bf7\u6c42\u53ca\u53c2\u6570\u8bf4\u660e",id:"dubbo\u7528\u6237\u8bf7\u6c42\u53ca\u53c2\u6570\u8bf4\u660e",children:[]},{value:"\u670d\u52a1\u6cbb\u7406",id:"\u670d\u52a1\u6cbb\u7406",children:[]},{value:"Http --&gt; \u7f51\u5173 --&gt; Dubbo Provider",id:"http----\u7f51\u5173----dubbo-provider",children:[]}],u={toc:l};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6b64\u7bc7\u6587\u7ae0\u662f\u4ecb\u7ecd ",(0,r.kt)("inlineCode",{parentName:"li"},"dubbo")," \u670d\u52a1\u63a5\u5165\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"Apache ShenYu")," \u7f51\u5173\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"Apache ShenYu")," \u7f51\u5173\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"dubbo")," \u63d2\u4ef6\u6765\u63a5\u5165",(0,r.kt)("inlineCode",{parentName:"li"},"Dubbo"),"\u670d\u52a1\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5f53\u524d\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"li"},"alibaba dubbo\uff08< 2.7.x\uff09")," \u4ee5\u53ca ",(0,r.kt)("inlineCode",{parentName:"li"},"apache dubbo (>=2.7.x)"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u63a5\u5165\u524d\uff0c\u8bf7\u6b63\u786e\u542f\u52a8 ",(0,r.kt)("inlineCode",{parentName:"li"},"shenyu-admin"),"\uff0c\u5e76\u5f00\u542f",(0,r.kt)("inlineCode",{parentName:"li"},"dubbo"),"\u63d2\u4ef6\uff0c\u5728\u7f51\u5173\u7aef\u548c",(0,r.kt)("inlineCode",{parentName:"li"},"Dubbo"),"\u670d\u52a1\u7aef\u5f15\u5165\u76f8\u5173\u4f9d\u8d56\u3002\u53ef\u4ee5\u53c2\u8003\u524d\u9762\u7684 ",(0,r.kt)("a",{parentName:"li",href:"../quick-start/quick-start-dubbo"},"Dubbo\u5feb\u901f\u5f00\u59cb"),"\u3002")),(0,r.kt)("p",null,"\u5e94\u7528\u5ba2\u6237\u7aef\u63a5\u5165\u7684\u76f8\u5173\u914d\u7f6e\u8bf7\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/user-guide/property-config/register-center-access"},"\u5ba2\u6237\u7aef\u63a5\u5165\u914d\u7f6e"),"\u3002"),(0,r.kt)("p",null,"\u6570\u636e\u540c\u6b65\u7684\u76f8\u5173\u914d\u7f6e\u8bf7\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/user-guide/property-config/use-data-sync"},"\u6570\u636e\u540c\u6b65\u914d\u7f6e"),"\u3002"),(0,r.kt)("h2",{id:"\u5728\u7f51\u5173\u4e2d\u5f15\u5165-dubbo-\u63d2\u4ef6"},"\u5728\u7f51\u5173\u4e2d\u5f15\u5165 dubbo \u63d2\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728\u7f51\u5173\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml")," \u6587\u4ef6\u4e2d\u589e\u52a0\u5982\u4e0b\u4f9d\u8d56\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"alibaba dubbo")," \u7528\u6237, ",(0,r.kt)("inlineCode",{parentName:"p"},"dubbo")," \u7248\u672c\u6362\u6210\u4f60\u7684\uff0c\u5f15\u5165\u4f60\u9700\u8981\u7684\u6ce8\u518c\u4e2d\u5fc3\u4f9d\u8d56\uff0c\u4ee5\u4e0b\u662f\u53c2\u8003\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- apache shenyu alibaba dubbo plugin start--\x3e\n<dependency>\n  <groupId>org.apache.shenyu</groupId>\n  <artifactId>shenyu-spring-boot-starter-plugin-alibaba-dubbo</artifactId>\n   <version>${project.version}</version>\n</dependency>\n\x3c!-- apache shenyu  alibaba dubbo plugin end--\x3e\n<dependency>\n  <groupId>com.alibaba</groupId>\n  <artifactId>dubbo</artifactId>\n  <version>2.6.5</version>\n</dependency>\n<dependency>\n  <groupId>org.apache.curator</groupId>\n  <artifactId>curator-client</artifactId>\n  <version>4.0.1</version>\n</dependency>\n<dependency>\n  <groupId>org.apache.curator</groupId>\n  <artifactId>curator-framework</artifactId>\n  <version>4.0.1</version>\n</dependency>\n<dependency>\n  <groupId>org.apache.curator</groupId>\n  <artifactId>curator-recipes</artifactId>\n  <version>4.0.1</version>\n</dependency>\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"apache dubbo")," \u7528\u6237\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"dubbo")," \u7248\u672c\u6362\u6210\u4f60\u7684\uff0c\u5f15\u5165\u4f60\u9700\u8981\u7684\u6ce8\u518c\u4e2d\u5fc3\u4f9d\u8d56\uff0c\u5982\u4e0b\u662f\u53c2\u8003\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- apache shenyu apache dubbo plugin start--\x3e\n<dependency>\n   <groupId>org.apache.shenyu</groupId>\n   <artifactId>shenyu-spring-boot-starter-plugin-apache-dubbo</artifactId>\n   <version>${project.version}</version>\n</dependency>\n\x3c!-- apache shenyu apache dubbo plugin end--\x3e\n\n<dependency>\n   <groupId>org.apache.dubbo</groupId>\n   <artifactId>dubbo</artifactId>\n   <version>2.7.5</version>\n</dependency>\n\x3c!-- Dubbo Nacos registry dependency start --\x3e\n<dependency>\n   <groupId>org.apache.dubbo</groupId>\n   <artifactId>dubbo-registry-nacos</artifactId>\n   <version>2.7.5</version>\n</dependency>\n<dependency>\n   <groupId>com.alibaba.nacos</groupId>\n   <artifactId>nacos-client</artifactId>\n   <version>1.1.4</version>\n</dependency>\n\x3c!-- Dubbo Nacos registry dependency  end--\x3e\n\n\x3c!-- Dubbo zookeeper registry dependency start--\x3e\n<dependency>\n   <groupId>org.apache.curator</groupId>\n   <artifactId>curator-client</artifactId>\n   <version>4.0.1</version>\n</dependency>\n<dependency>\n   <groupId>org.apache.curator</groupId>\n   <artifactId>curator-framework</artifactId>\n   <version>4.0.1</version>\n</dependency>\n<dependency>\n   <groupId>org.apache.curator</groupId>\n   <artifactId>curator-recipes</artifactId>\n   <version>4.0.1</version>\n</dependency>\n\x3c!-- Dubbo zookeeper registry dependency end --\x3e\n")))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u91cd\u542f\u7f51\u5173\u670d\u52a1\u3002")),(0,r.kt)("h2",{id:"dubbo-\u670d\u52a1\u63a5\u5165\u7f51\u5173"},"dubbo \u670d\u52a1\u63a5\u5165\u7f51\u5173"),(0,r.kt)("p",null,"\u53ef\u4ee5\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/tree/v2.4.0/shenyu-examples/shenyu-examples-dubbo"},"shenyu-examples-dubbo")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"alibaba dubbo \u7528\u6237")),(0,r.kt)("p",null,"\u5982\u679c\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"springboot"),"\u6784\u5efa\uff0c\u5f15\u5165\u4ee5\u4e0b\u4f9d\u8d56\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n     <groupId>org.apache.shenyu</groupId>\n     <artifactId>shenyu-spring-boot-starter-client-alibaba-dubbo</artifactId>\n     <version>${shenyu.version}</version>\n</dependency>\n")),(0,r.kt)("p",null,"\u5982\u679c\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"spring"),"\u6784\u5efa\uff0c\u5f15\u5165\u4ee5\u4e0b\u4f9d\u8d56\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n   <groupId>org.apache.shenyu</groupId>\n   <artifactId>shenyu-client-alibaba-dubbo</artifactId>\n   <version>${shenyu.version}</version>\n</dependency>\n")),(0,r.kt)("p",null,"\u5e76\u5728\u4f60\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"bean")," \u5b9a\u4e49\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"xml")," \u6587\u4ef6\u4e2d\u65b0\u589e\u5982\u4e0b \uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<bean id="clientConfig" class="org.apache.shenyu.register.common.config.PropertiesConfig">\n    <property name="props">\n      <map>\n        <entry key="contextPath" value="/\u4f60\u7684contextPath"/>\n        <entry key="appName" value="\u4f60\u7684\u540d\u5b57"/>\n      </map>\n    </property>\n</bean>\n\n<bean id="shenyuRegisterCenterConfig" class="org.apache.shenyu.register.common.config.ShenyuRegisterCenterConfig">\n   <property name="registerType" value="http"/>\n   <property name="serverList" value="http://localhost:9095"/>\n</bean>\n\n<bean id="shenyuClientRegisterRepository" class="org.apache.shenyu.client.core.register.ShenyuClientRegisterRepositoryFactory" factory-method="newInstance">\n       <property name="shenyuRegisterCenterConfig" ref="shenyuRegisterCenterConfig"/>\n </bean>\n\n<bean id ="alibabaDubboServiceBeanListener" class ="org.apache.shenyu.client.alibaba.dubbo.AlibabaDubboServiceBeanListener">\n   <constructor-arg name="clientConfig" ref="clientConfig"/>\n   <constructor-arg name="shenyuClientRegisterRepository" ref="shenyuClientRegisterRepository"/> \n</bean>\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"apache dubbo \u7528\u6237")),(0,r.kt)("p",null,"\u5982\u679c\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"springboot"),"\u6784\u5efa\uff0c\u5f15\u5165\u4ee5\u4e0b\u4f9d\u8d56\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-spring-boot-starter-client-apache-dubbo</artifactId>\n    <version>${shenyu.version}</version>\n</dependency>\n")),(0,r.kt)("p",null,"\u9700\u8981\u5728\u4f60\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"\u5ba2\u6237\u7aef\u9879\u76ee")," \u5b9a\u4e49\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"application.yml")," \u6587\u4ef6\u4e2d\u65b0\u589e\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"dubbo:\n  registry:\n    address: dubbo\u6ce8\u518c\u4e2d\u5fc3\u5730\u5740\n\nshenyu:\n  register:\n    registerType: shenyu\u670d\u52a1\u6ce8\u518c\u7c7b\u578b #http #zookeeper #etcd #nacos #consul\n    serverLists: shenyu\u670d\u52a1\u6ce8\u518c\u5730\u5740 #http://localhost:9095 #localhost:2181 #http://localhost:2379 #localhost:8848\n  client:\n    dubbo:\n      props:\n        contextPath: /\u4f60\u7684contextPath\n        appName: \u4f60\u7684\u5e94\u7528\u540d\u79f0\n")),(0,r.kt)("p",null,"\u5982\u679c\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"spring"),"\u6784\u5efa\uff0c\u5f15\u5165\u4ee5\u4e0b\u4f9d\u8d56\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n   <groupId>org.apache.shenyu</groupId>\n   <artifactId>shenyu-client-apache-dubbo</artifactId>\n   <version>${shenyu.version}</version>\n</dependency>\n")),(0,r.kt)("p",null,"\u9700\u8981\u5728\u4f60\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"bean")," \u5b9a\u4e49\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"xml")," \u6587\u4ef6\u4e2d\u65b0\u589e\u5982\u4e0b \uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<bean id = "apacheDubboServiceBeanListener" class="org.apache.shenyu.client.apache.dubbo.ApacheDubboServiceBeanListener">\n    <constructor-arg ref="clientPropertiesConfig"/>\n    <constructor-arg ref="clientRegisterRepository"/>\n</bean>\n\n\x3c!-- \u6839\u636e\u5b9e\u9645\u7684\u6ce8\u518c\u7c7b\u578b\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3 --\x3e\n<bean id="shenyuRegisterCenterConfig" class="org.apache.shenyu.register.common.config.ShenyuRegisterCenterConfig">\n    <property name="registerType" value="\u4f60\u7684\u670d\u52a1\u6ce8\u518c\u7c7b\u578b"/>\n    <property name="serverLists" value="\u4f60\u7684\u670d\u52a1\u6ce8\u518c\u5730\u5740"/>\n</bean>\n\n\x3c!-- \u5ba2\u6237\u7aef\u5c5e\u6027\u914d\u7f6e --\x3e\n<bean id="clientPropertiesConfig"\n      class="org.apache.shenyu.register.common.config.ShenyuClientConfig.ClientPropertiesConfig">\n<property name="props">\n  <map>\n    <entry key="contextPath" value="/\u4f60\u7684contextPath"/>\n    <entry key="appName" value="\u4f60\u7684\u5e94\u7528\u540d\u5b57"/>\n  </map>\n</property>\n</bean>\n\n\x3c!-- \u6839\u636e\u5b9e\u9645\u7684\u6ce8\u518c\u7c7b\u578b\u914d\u7f6e\u5ba2\u6237\u7aef\u6ce8\u518c\u4ed3\u5e93 --\x3e\n<bean id="clientRegisterRepository" class="org.apache.shenyu.register.client.http.HttpClientRegisterRepository">\n    <constructor-arg ref="shenyuRegisterCenterConfig"/>\n</bean>\n\n<bean id="shenyuClientShutdownHook" class="org.apache.shenyu.client.core.shutdown.ShenyuClientShutdownHook">\n    <constructor-arg ref="shenyuRegisterCenterConfig"/>\n    <constructor-arg ref="clientRegisterRepository"/>\n</bean>\n')),(0,r.kt)("p",null,"\u9700\u8981\u5728\u4f60\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"\u5ba2\u6237\u7aef\u9879\u76ee")," \u5b9a\u4e49\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"application.yml")," \u6587\u4ef6\u4e2d\u65b0\u589e\u5982\u4e0b\uff1a  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"dubbo:\n  registry:\n    address: dubbo\u6ce8\u518c\u4e2d\u5fc3\u5730\u5740\n    port: dubbo\u670d\u52a1\u7aef\u53e3\u53f7\n")),(0,r.kt)("h2",{id:"dubbo-\u63d2\u4ef6\u8bbe\u7f6e"},"dubbo \u63d2\u4ef6\u8bbe\u7f6e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u9996\u5148\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," \u63d2\u4ef6\u7ba1\u7406\u4e2d\uff0c\u628a",(0,r.kt)("inlineCode",{parentName:"p"},"dubbo")," \u63d2\u4ef6\u8bbe\u7f6e\u4e3a\u5f00\u542f\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5176\u6b21\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"dubbo")," \u63d2\u4ef6\u4e2d\u914d\u7f6e\u4f60\u7684\u6ce8\u518c\u5730\u5740\uff0c\u6216\u8005\u5176\u4ed6\u6ce8\u518c\u4e2d\u5fc3\u7684\u5730\u5740\u3002"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'{"register":"zookeeper://localhost:2181"}   or {"register":"nacos://localhost:8848"}\n')),(0,r.kt)("h2",{id:"\u63a5\u53e3\u6ce8\u518c\u5230\u7f51\u5173"},"\u63a5\u53e3\u6ce8\u518c\u5230\u7f51\u5173"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"dubbo")," \u670d\u52a1\u5b9e\u73b0\u7c7b\u7684\u65b9\u6cd5\u4e0a\u52a0\u4e0a ",(0,r.kt)("inlineCode",{parentName:"p"},"@ShenyuDubboClient")," \u6ce8\u89e3\uff0c\u8868\u793a\u8be5\u63a5\u53e3\u65b9\u6cd5\u6ce8\u518c\u5230\u7f51\u5173\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u542f\u52a8\u4f60\u7684\u63d0\u4f9b\u8005\uff0c\u6210\u529f\u542f\u52a8\u540e\uff0c\u8fdb\u5165\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"\u63d2\u4ef6\u5217\u8868 -> rpc proxy -> dubbo"),"\uff0c\u4f1a\u770b\u5230\u81ea\u52a8\u6ce8\u518c\u7684\u9009\u62e9\u5668\u548c\u89c4\u5219\u4fe1\u606f\u3002"))),(0,r.kt)("h2",{id:"dubbo\u7528\u6237\u8bf7\u6c42\u53ca\u53c2\u6570\u8bf4\u660e"},"dubbo\u7528\u6237\u8bf7\u6c42\u53ca\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"http")," \u7684\u65b9\u5f0f\u6765\u8bf7\u6c42\u4f60\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"dubbo")," \u670d\u52a1\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u9700\u8981\u6709\u4e00\u4e2a\u8def\u7531\u524d\u7f00\uff0c\u8fd9\u4e2a\u8def\u7531\u524d\u7f00\u5c31\u662f\u4f60\u63a5\u5165\u9879\u76ee\u8fdb\u884c\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"contextPath")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6bd4\u5982\u4f60\u6709\u4e00\u4e2a order\u670d\u52a1 \u5b83\u6709\u4e00\u4e2a\u63a5\u53e3\uff0c\u5b83\u7684\u6ce8\u518c\u8def\u5f84 /order/test/save\n\u73b0\u5728\u5c31\u662f\u901a\u8fc7 post \u65b9\u5f0f\u8bf7\u6c42\u7f51\u5173\uff1ahttp://localhost:9195/order/test/save\n\u5176\u4e2d localhost:9195 \u4e3a\u7f51\u5173\u7684 ip \u7aef\u53e3\uff0c\u9ed8\u8ba4\u7aef\u53e3\u662f 9195 \uff0c/order \u662f\u4f60 dubbo \u63a5\u5165\u7f51\u5173\u914d\u7f6e\u7684 contextPath")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u53c2\u6570\u4f20\u9012\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"http"),"\u534f\u8bae\uff0c ",(0,r.kt)("inlineCode",{parentName:"p"},"post")," \u65b9\u5f0f\u8bbf\u95ee\u7f51\u5173\uff0c\u901a\u8fc7\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"http body"),"\u4e2d\u4f20\u5165",(0,r.kt)("inlineCode",{parentName:"p"},"json"),"\u7c7b\u578b\u53c2\u6570\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u66f4\u591a\u53c2\u6570\u7c7b\u578b\u4f20\u9012\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/tree/v2.4.0/shenyu-examples/shenyu-examples-dubbo"},"shenyu-examples-dubbo")," \u4e2d\u7684\u63a5\u53e3\u5b9a\u4e49\uff0c\u4ee5\u53ca\u53c2\u6570\u4f20\u9012\u65b9\u5f0f\u3002")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5355\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"java bean"),"\u53c2\u6570\u7c7b\u578b\uff08\u9ed8\u8ba4\uff09")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u591a\u53c2\u6570\u7c7b\u578b\u652f\u6301\uff0c\u5728\u7f51\u5173\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"yaml")," \u914d\u7f6e\u4e2d\u65b0\u589e\u5982\u4e0b\u914d\u7f6e\uff1a"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n    dubbo:\n      parameter: multi\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u81ea\u5b9a\u4e49\u5b9e\u73b0\u591a\u53c2\u6570\u652f\u6301:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728\u4f60\u642d\u5efa\u7684\u7f51\u5173\u9879\u76ee\u4e2d\uff0c\u65b0\u589e\u4e00\u4e2a\u7c7b ",(0,r.kt)("inlineCode",{parentName:"p"},"MyDubboParamResolveService"),"\uff0c\u5b9e\u73b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.web.dubbo.DubboParamResolveService"),"\u63a5\u53e3\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public interface DubboParamResolveService {\n\n   /**\n    * Build parameter pair.\n    * this is Resolve http body to get dubbo param.\n    *\n    * @param body           the body\n    * @param parameterTypes the parameter types\n    * @return the pair\n    */\n   Pair<String[], Object[]> buildParameter(String body, String parameterTypes);\n}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"body")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"http")," \u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"body")," \u4f20\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"json")," \u5b57\u7b26\u4e32\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"parameterTypes"),": \u5339\u914d\u5230\u7684\u65b9\u6cd5\u53c2\u6570\u7c7b\u578b\u5217\u8868\uff0c\u5982\u679c\u6709\u591a\u4e2a\uff0c\u5219\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},",")," \u5206\u5272\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Pair")," \u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"left")," \u4e3a\u53c2\u6570\u7c7b\u578b\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"right")," \u4e3a\u53c2\u6570\u503c\uff0c\u8fd9\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"dubbo")," \u6cdb\u5316\u8c03\u7528\u7684\u6807\u51c6")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u628a\u4f60\u7684\u7c7b\u6ce8\u518c\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"Spring")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"bean"),"\uff0c\u8986\u76d6\u9ed8\u8ba4\u7684\u5b9e\u73b0\u3002"))),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"}," @Bean\n public DubboParamResolveService myDubboParamResolveService() {\n         return new MyDubboParamResolveService();\n }\n")))),(0,r.kt)("h2",{id:"\u670d\u52a1\u6cbb\u7406"},"\u670d\u52a1\u6cbb\u7406"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6807\u7b7e\u8def\u7531"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u65f6\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"header")," \u4e2d\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"li"},"Dubbo_Tag_Route"),"\uff0c\u5e76\u8bbe\u7f6e\u5bf9\u5e94\u7684\u503c\uff0c\u4e4b\u540e\u5f53\u524d\u8bf7\u6c42\u5c31\u4f1a\u8def\u7531\u5230\u6307\u5b9a ",(0,r.kt)("inlineCode",{parentName:"li"},"tag")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"provider"),"\uff0c\u53ea\u5bf9\u5f53\u524d\u8bf7\u6c42\u6709\u6548\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u670d\u52a1\u63d0\u4f9b\u8005\u76f4\u8fde"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"li"},"@ShenyuDubboClient")," \u6ce8\u89e3\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"url")," \u5c5e\u6027\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"li"},"Admin")," \u63a7\u5236\u53f0\u4fee\u6539\u5143\u6570\u636e\u5185\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"url")," \u5c5e\u6027\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u6240\u6709\u8bf7\u6c42\u6709\u6548\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u53c2\u6570\u9a8c\u8bc1\u548c\u81ea\u5b9a\u4e49\u5f02\u5e38"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6307\u5b9a ",(0,r.kt)("inlineCode",{parentName:"p"},'validation = "shenyuValidation"'),"\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728\u63a5\u53e3\u4e2d\u629b\u51fa ",(0,r.kt)("inlineCode",{parentName:"p"},"ShenyuException")," \u65f6\uff0c\u5f02\u5e38\u4fe1\u606f\u4f1a\u8fd4\u56de\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\u663e\u5f0f\u629b\u51fa ",(0,r.kt)("inlineCode",{parentName:"p"},"ShenyuException"),"\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Service(validation = "shenyuValidation")\npublic class TestServiceImpl implements TestService {\n\n    @Override\n    @ShenyuDubboClient(path = "/test", desc = "test method")\n    public String test(@Valid HelloServiceRequest name) throws ShenyuException {\n        if (true){\n            throw new ShenyuException("Param binding error.");\n        }\n        return "Hello " + name.getName();\n    }\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8bf7\u6c42\u53c2\u6570"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class HelloServiceRequest implements Serializable {\n\n    private static final long serialVersionUID = -5968745817846710197L;\n\n    @NotEmpty(message = "name cannot be empty")\n    private String name;\n\n    @NotNull(message = "age cannot be null")\n    private Integer age;\n\n    public String getName() {\n        return name;\n    }\n\n    public void setName(String name) {\n        this.name = name;\n    }\n\n    public Integer getAge() {\n        return age;\n    }\n\n    public void setAge(Integer age) {\n        this.age = age;\n    }\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u53d1\u9001\u8bf7\u6c42"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": ""\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8fd4\u56de"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "code": 500,\n    "message": "Internal Server Error",\n    "data": "name cannot be empty,age cannot be null"\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5f53\u6309\u7167\u8981\u6c42\u4f20\u9012\u8bf7\u6c42\u53c2\u6570\u65f6\uff0c\u4f1a\u8fd4\u56de\u81ea\u5b9a\u4e49\u5f02\u5e38\u7684\u4fe1\u606f"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "code": 500,\n    "message": "Internal Server Error",\n    "data": "Param binding error."\n}\n')))))),(0,r.kt)("h2",{id:"http----\u7f51\u5173----dubbo-provider"},"Http --\x3e \u7f51\u5173 --\x3e Dubbo Provider"),(0,r.kt)("p",null,"\u5b9e\u9645\u4e0a\u5c31\u662f\u628a ",(0,r.kt)("inlineCode",{parentName:"p"},"http")," \u8bf7\u6c42\uff0c\u8f6c\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"dubbo")," \u534f\u8bae\uff0c\u5185\u90e8\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"dubbo \u6cdb\u5316"),"\u6765\u8fdb\u884c\u8c03\u7528\u3002\n",(0,r.kt)("inlineCode",{parentName:"p"},"dubbo")," \u670d\u52a1\u5728\u63a5\u5165\u7f51\u5173\u7684\u65f6\u5019\uff0c\u52a0\u4e0a\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"@ShenyuDubboClient")," \u6ce8\u89e3\uff0c\u5e76\u8bbe\u7f6e\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"path")," \u5b57\u6bb5\u6765\u6307\u5b9a\u8bf7\u6c42\u8def\u5f84\u3002\n\u7136\u540e\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"yml"),"\u4e2d\u914d\u7f6e\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"contextPath"),"\u3002"),(0,r.kt)("p",null,"\u5047\u5982\u6709\u4e00\u4e2a\u8fd9\u6837\u7684\u65b9\u6cd5, ",(0,r.kt)("inlineCode",{parentName:"p"},"contextPath")," \u914d\u7f6e\u7684\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"/dubbo"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Override\n@ShenyuDubboClient(path = "/insert", desc = "\u63d2\u5165\u4e00\u6761\u6570\u636e")\npublic DubboTest insert(final DubboTest dubboTest) {\n    return dubboTest;\n}\n')),(0,r.kt)("p",null,"\u90a3\u4e48\u8bf7\u6c42\u7684\u8def\u5f84\u4e3a\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:9195/dubbo/insert"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:9195"),"\u662f\u7f51\u5173\u7684\u5730\u5740\uff0c\u5982\u679c\u4f60\u66f4\u6539\u4e86\uff0c\u8fd9\u91cc\u4e5f\u8981\u6539\u3002"),(0,r.kt)("p",null,"\u8bf7\u6c42\u53c2\u6570\uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},"DubboTest")," \u662f\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"javabean")," \u5bf9\u8c61\uff0c\u6709 2 \u4e2a\u5b57\u6bb5\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"id")," \u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," \uff0c\u90a3\u4e48\u6211\u4eec\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"body")," \u4e2d\u4f20\u9012\u8fd9\u4e2a\u5bf9\u8c61\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"json")," \u6570\u636e\u5c31\u597d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"id": "1234", "name": "XIAO5y"}\n')),(0,r.kt)("p",null,"\u5982\u679c\u63a5\u53e3\u4e2d\uff0c\u6ca1\u6709\u53c2\u6570\uff0c\u90a3\u4e48",(0,r.kt)("inlineCode",{parentName:"p"},"body")," \u4f20\u503c\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{}\n")),(0,r.kt)("p",null,"\u5982\u679c\u63a5\u53e3\u6709\u5f88\u591a\u4e2a\u53c2\u6570\uff0c\u8bf7\u53c2\u8003\u4e0a\u9762\u4ecb\u7ecd\u8fc7\u7684\u591a\u53c2\u6570\u7c7b\u578b\u652f\u6301\u3002"))}d.isMDXComponent=!0}}]);