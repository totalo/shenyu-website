"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[81187],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?o.createElement(y,a(a({ref:t},s),{},{components:n})):o.createElement(y,a({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},96252:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=["components"],c={sidebar_position:3,title:"Docker-compose Deployment",keywords:["docker-compose","Deployment"],description:"Docker-compose Deployment"},l=void 0,p={unversionedId:"deployment/deployment-docker-compose",id:"deployment/deployment-docker-compose",isDocsHomePage:!1,title:"Docker-compose Deployment",description:"Docker-compose Deployment",source:"@site/docs/deployment/deployment-docker-compose.md",sourceDirName:"deployment",slug:"/deployment/deployment-docker-compose",permalink:"/docs/next/deployment/deployment-docker-compose",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/docs/deployment/deployment-docker-compose.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Docker-compose Deployment",keywords:["docker-compose","Deployment"],description:"Docker-compose Deployment"},sidebar:"tutorialSidebar",previous:{title:"Binary Packages Deployment",permalink:"/docs/next/deployment/deployment-package"},next:{title:"Docker Deployment",permalink:"/docs/next/deployment/deployment-docker"}},s=[{value:"Download shell script",id:"download-shell-script",children:[]},{value:"execute script",id:"execute-script",children:[]},{value:"Initialize the <code>shenyu-admin</code> database",id:"initialize-the-shenyu-admin-database",children:[]},{value:"Modify the configuration file",id:"modify-the-configuration-file",children:[]},{value:"Execute docker-compose",id:"execute-docker-compose",children:[]}],d={toc:s};function u(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This article introduces the use of ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose")," to deploy the ",(0,i.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Before you read this document, you need to complete some preparations before deploying Shenyu according to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/deployment/deployment-before"},"Deployment Prerequisites document"),".")),(0,i.kt)("h3",{id:"download-shell-script"},"Download shell script"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl -O https://raw.githubusercontent.com/apache/incubator-shenyu/master/shenyu-dist/shenyu-docker-compose-dist/src/main/resources/install.sh\n")),(0,i.kt)("h3",{id:"execute-script"},"execute script"),(0,i.kt)("p",null,"This script will download the required configuration files and mysql-connector, and can be executed repeatedly if the download fails."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sh ./install.sh #The latest configuration is pulled by default. If you need to deploy the released version, you can add a parameter to indicate the version number, such as: v2.4.2 or latest\n")),(0,i.kt)("h3",{id:"initialize-the-shenyu-admin-database"},"Initialize the ",(0,i.kt)("inlineCode",{parentName:"h3"},"shenyu-admin")," database"),(0,i.kt)("p",null,"Refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/deployment/deployment-before#database-initialize"},"database initialization documentation")," to initialize the database."),(0,i.kt)("h3",{id:"modify-the-configuration-file"},"Modify the configuration file"),(0,i.kt)("p",null,"Modify the configuration file downloaded by the script to set up configurations such as ",(0,i.kt)("inlineCode",{parentName:"p"},"JDBC"),"."),(0,i.kt)("h3",{id:"execute-docker-compose"},"Execute docker-compose"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cd shenyu-${VERSION}\ndocker-compose -f ./shenyu-${VERSION}/docker-compose.yaml up -d\n")))}u.isMDXComponent=!0}}]);