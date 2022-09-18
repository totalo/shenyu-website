"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[21614],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,y=d["".concat(l,".").concat(u)]||d[u]||s[u]||o;return n?a.createElement(y,i(i({ref:t},m),{},{components:n})):a.createElement(y,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},53070:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:2,title:"Binary Packages Deployment",keywords:["Deployment"],description:"Binary Packages Deployment"},i=void 0,p={unversionedId:"deployment/deployment-package",id:"deployment/deployment-package",isDocsHomePage:!1,title:"Binary Packages Deployment",description:"Binary Packages Deployment",source:"@site/docs/deployment/deployment-package.md",sourceDirName:"deployment",slug:"/deployment/deployment-package",permalink:"/docs/next/deployment/deployment-package",editUrl:"https://github.com/apache/shenyu-website/edit/main/docs/deployment/deployment-package.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Binary Packages Deployment",keywords:["Deployment"],description:"Binary Packages Deployment"},sidebar:"tutorialSidebar",previous:{title:"Local Quick Deployment",permalink:"/docs/next/deployment/deployment-quick"},next:{title:"Docker-compose Deployment",permalink:"/docs/next/deployment/deployment-docker-compose"}},l=[{value:"Start Apache ShenYu Admin",id:"start-apache-shenyu-admin",children:[]},{value:"Start Apache ShenYu Bootstrap",id:"start-apache-shenyu-bootstrap",children:[]}],c={toc:l};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This article introduces the deployment of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway using the binary packages."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Before you read this document, you need to complete some preparations before deploying Shenyu according to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/deployment/deployment-before"},"Deployment Prerequisites document"),".")),(0,r.kt)("h3",{id:"start-apache-shenyu-admin"},"Start Apache ShenYu Admin"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"download ",(0,r.kt)("a",{parentName:"p",href:"https://archive.apache.org/dist/shenyu/2.5.0/apache-shenyu-2.5.0-admin-bin.tar.gz"},"apache-shenyu-${current.version}-admin-bin.tar.gz"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"unzip ",(0,r.kt)("inlineCode",{parentName:"p"},"apache-shenyu-${current.version}-admin-bin.tar.gz"),"\u3002 go to the ",(0,r.kt)("inlineCode",{parentName:"p"},"bin")," directory."))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"After version 2.5.1, ",(0,r.kt)("inlineCode",{parentName:"p"},"start.sh")," started to support custom JVM startup parameters through the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"ADMIN_JVM"),".")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"use ",(0,r.kt)("inlineCode",{parentName:"li"},"h2")," to store data\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> windows: start.bat\n\n> linux: ./start.sh\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"use ",(0,r.kt)("inlineCode",{parentName:"p"},"MySQL")," to store data, follow the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/deployment/deployment-before#mysql"},"guide document")," to initialize the database, copy ",(0,r.kt)("a",{parentName:"p",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.18/mysql-connector-java-8.0.18.jar"},"mysql-connector.jar")," to /$(your_work_dir)/ext-lib, go to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/conf")," directory, and modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"JDBC")," configuration in ",(0,r.kt)("inlineCode",{parentName:"p"},"application-mysql.yml"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Modify ",(0,r.kt)("inlineCode",{parentName:"p"},"spring.profiles.active")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/application.yml")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"mysql")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> windows: start.bat\n\n> linux: ./start.sh\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"use ",(0,r.kt)("inlineCode",{parentName:"p"},"PostgreSql")," to store data, follow the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/deployment/deployment-before#postgresql"},"guide document")," to initialize the database, go to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/conf")," directory, and modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"JDBC")," configuration in ",(0,r.kt)("inlineCode",{parentName:"p"},"application-pg.yml"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Modify ",(0,r.kt)("inlineCode",{parentName:"p"},"spring.profiles.active")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/application.yml")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"pg")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> windows: start.bat\n\n> linux: ./start.sh --spring.profiles.active = pg\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"use ",(0,r.kt)("inlineCode",{parentName:"p"},"Oracle")," to store data, follow the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/deployment/deployment-before#oracle"},"guide document")," to initialize the database, go to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/conf")," directory, and modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"JDBC")," configuration in ",(0,r.kt)("inlineCode",{parentName:"p"},"application-oracle.yml"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Modify ",(0,r.kt)("inlineCode",{parentName:"p"},"spring.profiles.active")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/application.yml")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"oracle")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> windows: start.bat\n\n> linux: ./start.sh\n")),(0,r.kt)("h3",{id:"start-apache-shenyu-bootstrap"},"Start Apache ShenYu Bootstrap"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"download ",(0,r.kt)("a",{parentName:"p",href:"https://archive.apache.org/dist/shenyu/2.5.0/apache-shenyu-2.5.0-bootstrap-bin.tar.gz"},"apache-shenyu-${current.version}-bootstrap-bin.tar.gz"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"unzip ",(0,r.kt)("inlineCode",{parentName:"p"},"apache-shenyu-${current.version}-bootstrap-bin.tar.gz"),"\u3002 go to the ",(0,r.kt)("inlineCode",{parentName:"p"},"bin")," directory."))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"After version 2.5.1, ",(0,r.kt)("inlineCode",{parentName:"p"},"start.sh")," started to support custom JVM startup parameters through the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"BOOT_JVM"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> windwos : start.bat \n\n> linux : ./start.sh \n")))}m.isMDXComponent=!0}}]);