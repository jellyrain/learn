"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9367],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(t),m=o,d=f["".concat(l,".").concat(m)]||f[m]||s[m]||i;return t?r.createElement(d,a(a({ref:n},p),{},{components:t})):r.createElement(d,a({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},84246:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var r=t(83117),o=t(80102),i=(t(67294),t(3905)),a=["components"],c={sidebar_position:1},l=void 0,u={unversionedId:"Hive/\u4f18\u5316/\u6267\u884c\u8ba1\u5212\uff08Explain\uff09",id:"Hive/\u4f18\u5316/\u6267\u884c\u8ba1\u5212\uff08Explain\uff09",title:"\u6267\u884c\u8ba1\u5212\uff08Explain\uff09",description:"1. \u57fa\u672c\u8bed\u6cd5\uff1a",source:"@site/docs\\Hive\\\u4f18\u5316\\\u6267\u884c\u8ba1\u5212\uff08Explain\uff09.md",sourceDirName:"Hive/\u4f18\u5316",slug:"/Hive/\u4f18\u5316/\u6267\u884c\u8ba1\u5212\uff08Explain\uff09",permalink:"/learn/Hive/\u4f18\u5316/\u6267\u884c\u8ba1\u5212\uff08Explain\uff09",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"union",permalink:"/learn/Hive/DQL/\u8054\u5408\u67e5\u8be2/union"},next:{title:"Fetch\u6293\u53d6",permalink:"/learn/Hive/\u4f18\u5316/Fetch\u6293\u53d6"}},p={},s=[{value:"1. \u57fa\u672c\u8bed\u6cd5\uff1a",id:"1-\u57fa\u672c\u8bed\u6cd5",level:3},{value:"2. \u793a\u4f8b\uff1a",id:"2-\u793a\u4f8b",level:3}],f={toc:s};function m(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"1-\u57fa\u672c\u8bed\u6cd5"},"1. \u57fa\u672c\u8bed\u6cd5\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"EXPLAIN [EXTENDED | DEPENDENCY | AUTHORIZATION] sql_query\n")),(0,i.kt)("h3",{id:"2-\u793a\u4f8b"},"2. \u793a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"explain select * from emp; -- \u67e5\u770b \u6267\u884c\u8ba1\u5212\n\nexplain extended select * from emp; -- \u67e5\u770b \u8be6\u7ec6 \u6267\u884c\u8ba1\u5212\n")))}m.isMDXComponent=!0}}]);