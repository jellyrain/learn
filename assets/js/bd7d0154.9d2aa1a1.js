"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7964],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=u(n),d=a,m=f["".concat(c,".").concat(d)]||f[d]||s[d]||l;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},27528:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var r=n(83117),a=n(80102),l=(n(67294),n(3905)),o=["components"],i={sidebar_position:2},c=void 0,u={unversionedId:"Hadoop/Hive/DQL/\u51fd\u6570/\u6761\u4ef6\u8fd0\u7b97",id:"Hadoop/Hive/DQL/\u51fd\u6570/\u6761\u4ef6\u8fd0\u7b97",title:"\u6761\u4ef6\u8fd0\u7b97",description:"1. IF \u51fd\u6570\uff1aIF",source:"@site/docs\\7-Hadoop\\9-Hive\\DQL\\\u51fd\u6570\\\u6761\u4ef6\u8fd0\u7b97.md",sourceDirName:"7-Hadoop/9-Hive/DQL/\u51fd\u6570",slug:"/Hadoop/Hive/DQL/\u51fd\u6570/\u6761\u4ef6\u8fd0\u7b97",permalink:"/learn/Hadoop/Hive/DQL/\u51fd\u6570/\u6761\u4ef6\u8fd0\u7b97",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u67e5\u8be2\u51fd\u6570\u7528\u6cd5",permalink:"/learn/Hadoop/Hive/DQL/\u51fd\u6570/\u67e5\u8be2\u51fd\u6570\u7528\u6cd5"},next:{title:"\u6570\u503c\u8ba1\u7b97",permalink:"/learn/Hadoop/Hive/DQL/\u51fd\u6570/\u6570\u503c\u8ba1\u7b97"}},p={},s=[{value:"1. IF \u51fd\u6570\uff1aIF",id:"1-if-\u51fd\u6570if",level:3},{value:"2. \u975e\u7a7a\u67e5\u627e\u51fd\u6570\uff1aCOALESCE",id:"2-\u975e\u7a7a\u67e5\u627e\u51fd\u6570coalesce",level:3},{value:"3. \u6761\u4ef6\u5224\u65ad\u51fd\u6570\uff1aCASE",id:"3-\u6761\u4ef6\u5224\u65ad\u51fd\u6570case",level:3},{value:"4. \u6761\u4ef6\u5224\u65ad\u51fd\u6570\uff1aCASE",id:"4-\u6761\u4ef6\u5224\u65ad\u51fd\u6570case",level:3}],f={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"1-if-\u51fd\u6570if"},"1. IF \u51fd\u6570\uff1aIF"),(0,l.kt)("p",null,"\u8bed\u6cd5\uff1aIF(boolean testCondition, T valueTrue, T valueFalseOrNull)"),(0,l.kt)("p",null,"\u8fd4\u56de\u7c7b\u578b\uff1aT"),(0,l.kt)("p",null,"\u63cf\u8ff0\uff1a\u5f53\u6761\u4ef6 testCondition \u4e3a True \u65f6\uff0c\u8fd4\u56de valueTrue\uff1b\u5426\u5219\u8fd4\u56de valueFalseOrNull\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select if(1 = 2, 100, 200);\n")),(0,l.kt)("h3",{id:"2-\u975e\u7a7a\u67e5\u627e\u51fd\u6570coalesce"},"2. \u975e\u7a7a\u67e5\u627e\u51fd\u6570\uff1aCOALESCE"),(0,l.kt)("p",null,"\u8bed\u6cd5\uff1a COALESCE(T v1, T v2, \u2026)"),(0,l.kt)("p",null,"\u8fd4\u56de\u7c7b\u578b\uff1aT"),(0,l.kt)("p",null,"\u63cf\u8ff0\uff1a\u8fd4\u56de\u53c2\u6570\u4e2d\u7684",(0,l.kt)("strong",{parentName:"p"},"\u7b2c\u4e00\u4e2a\u975e\u7a7a\u503c"),"\uff1b\u5982\u679c\u6240\u6709\u503c\u90fd\u4e3a NULL\uff0c\u90a3\u4e48\u8fd4\u56deNULL\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select coalesce(null, '100', '50');\n")),(0,l.kt)("h3",{id:"3-\u6761\u4ef6\u5224\u65ad\u51fd\u6570case"},"3. \u6761\u4ef6\u5224\u65ad\u51fd\u6570\uff1aCASE"),(0,l.kt)("p",null,"\u8bed\u6cd5\uff1a CASE a WHEN b THEN c ","[WHEN d THEN e]","* ","[ELSE f]"," END"),(0,l.kt)("p",null,"\u8fd4\u56de\u7c7b\u578b\uff1aT"),(0,l.kt)("p",null,"\u63cf\u8ff0\uff1a\u5982\u679c a \u7b49\u4e8e b\uff0c\u90a3\u4e48\u8fd4\u56de c\uff1b\u5982\u679c a \u7b49\u4e8e d\uff0c\u90a3\u4e48\u8fd4\u56de e\uff1b\u5426\u5219\u8fd4\u56de f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select case 100 when 50 then 'tom' when 100 then 'jack' else 'mary' end \n")),(0,l.kt)("h3",{id:"4-\u6761\u4ef6\u5224\u65ad\u51fd\u6570case"},"4. \u6761\u4ef6\u5224\u65ad\u51fd\u6570\uff1aCASE"),(0,l.kt)("p",null,"\u8bed\u6cd5\uff1a CASE WHEN a THEN b ","[WHEN c THEN d]","* ","[ELSE e]"," END"),(0,l.kt)("p",null,"\u8fd4\u56de\u7c7b\u578b\uff1aT"),(0,l.kt)("p",null,"\u63cf\u8ff0\uff1a\u5982\u679c a \u4e3a TRUE\uff0c\u5219\u8fd4\u56de b\uff1b\u5982\u679c c \u4e3a TRUE\uff0c\u5219\u8fd4\u56de d\uff1b\u5426\u5219\u8fd4\u56de e\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select case when 1 = 2 then 'tom' when 2 = 2 then 'jack' else 'mary' end \n")))}d.isMDXComponent=!0}}]);