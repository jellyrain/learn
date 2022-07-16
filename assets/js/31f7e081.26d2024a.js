"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9498],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=p(t),d=o,m=f["".concat(l,".").concat(d)]||f[d]||s[d]||a;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},84008:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});var r=t(83117),o=t(80102),a=(t(67294),t(3905)),i=["components"],c={sidebar_position:1},l=void 0,p={unversionedId:"Hadoop/Hive/\u4f18\u5316/\u6267\u884c\u8ba1\u5212\uff08Explain\uff09",id:"Hadoop/Hive/\u4f18\u5316/\u6267\u884c\u8ba1\u5212\uff08Explain\uff09",title:"\u6267\u884c\u8ba1\u5212\uff08Explain\uff09",description:"1. \u57fa\u672c\u8bed\u6cd5\uff1a",source:"@site/docs\\Hadoop\\Hive\\\u4f18\u5316\\\u6267\u884c\u8ba1\u5212\uff08Explain\uff09.md",sourceDirName:"Hadoop/Hive/\u4f18\u5316",slug:"/Hadoop/Hive/\u4f18\u5316/\u6267\u884c\u8ba1\u5212\uff08Explain\uff09",permalink:"/learn/Hadoop/Hive/\u4f18\u5316/\u6267\u884c\u8ba1\u5212\uff08Explain\uff09",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"union",permalink:"/learn/Hadoop/Hive/DQL/\u8054\u5408\u67e5\u8be2/union"},next:{title:"Fetch\u6293\u53d6",permalink:"/learn/Hadoop/Hive/\u4f18\u5316/Fetch\u6293\u53d6"}},u={},s=[{value:"1. \u57fa\u672c\u8bed\u6cd5\uff1a",id:"1-\u57fa\u672c\u8bed\u6cd5",level:3},{value:"2. \u793a\u4f8b\uff1a",id:"2-\u793a\u4f8b",level:3}],f={toc:s};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"1-\u57fa\u672c\u8bed\u6cd5"},"1. \u57fa\u672c\u8bed\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"EXPLAIN [EXTENDED | DEPENDENCY | AUTHORIZATION] sql_query\n")),(0,a.kt)("h3",{id:"2-\u793a\u4f8b"},"2. \u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"explain select * from emp; -- \u67e5\u770b \u6267\u884c\u8ba1\u5212\n\nexplain extended select * from emp; -- \u67e5\u770b \u8be6\u7ec6 \u6267\u884c\u8ba1\u5212\n")))}d.isMDXComponent=!0}}]);