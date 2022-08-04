"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4235],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=u(r),d=a,f=g["".concat(c,".").concat(d)]||g[d]||s[d]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},36309:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var n=r(83117),a=r(80102),i=(r(67294),r(3905)),o=["components"],l={sidebar_position:3},c=void 0,u={unversionedId:"web/JavaScript/\u96c6\u5408\u5f15\u7528\u7c7b\u578b/Function",id:"web/JavaScript/\u96c6\u5408\u5f15\u7528\u7c7b\u578b/Function",title:"Function",description:"\u6bcf\u4e2a JavaScript \u51fd\u6570\u5b9e\u9645\u4e0a\u90fd\u662f\u4e00\u4e2a Function \u5bf9\u8c61",source:"@site/docs\\2-web\\3-JavaScript\\10-\u96c6\u5408\u5f15\u7528\u7c7b\u578b\\Function.md",sourceDirName:"2-web/3-JavaScript/10-\u96c6\u5408\u5f15\u7528\u7c7b\u578b",slug:"/web/JavaScript/\u96c6\u5408\u5f15\u7528\u7c7b\u578b/Function",permalink:"/learn/web/JavaScript/\u96c6\u5408\u5f15\u7528\u7c7b\u578b/Function",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Array",permalink:"/learn/web/JavaScript/\u96c6\u5408\u5f15\u7528\u7c7b\u578b/Array"},next:{title:"ArrayBuffer",permalink:"/learn/web/JavaScript/\u96c6\u5408\u5f15\u7528\u7c7b\u578b/\u5b9a\u578b\u6570\u7ec4/ArrayBuffer"}},p={},s=[{value:"1. \u521b\u5efa Function \u5bf9\u8c61\uff1a",id:"1-\u521b\u5efa-function-\u5bf9\u8c61",level:2},{value:"2. \u5b9e\u4f8b\u5c5e\u6027\uff1a",id:"2-\u5b9e\u4f8b\u5c5e\u6027",level:2},{value:"1. <code>length</code>\uff1a",id:"1-length",level:3},{value:"2. <code>name</code>\uff1a",id:"2-name",level:3},{value:"3. \u5b9e\u4f8b\u65b9\u6cd5\uff1a",id:"3-\u5b9e\u4f8b\u65b9\u6cd5",level:2},{value:"1. <code>apply(thisArg [, argsArray])</code>\uff1a",id:"1-applythisarg--argsarray",level:3},{value:"2. <code>bind(thisArg[, arg1[, arg2[, ...argN]]])</code>\uff1a",id:"2-bindthisarg-arg1-arg2-argn",level:3},{value:"3. <code>call(thisArg[, arg1, arg2, ...argN])</code>\uff1a",id:"3-callthisarg-arg1-arg2-argn",level:3},{value:"4. <code>toString()</code>\uff1a",id:"4-tostring",level:3}],g={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u6bcf\u4e2a JavaScript \u51fd\u6570\u5b9e\u9645\u4e0a\u90fd\u662f\u4e00\u4e2a Function \u5bf9\u8c61"),(0,i.kt)("h2",{id:"1-\u521b\u5efa-function-\u5bf9\u8c61"},"1. \u521b\u5efa Function \u5bf9\u8c61\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"new Function() // \u521b\u5efa\u4e00\u4e2a\u7a7a\u7684\u51fd\u6570\n\nnew Function(functionBody) // \u521b\u5efa\u4e00\u4e2a\u65e0\u53c2\u51fd\u6570\n\nnew Function(arg1, ...argN, functionBody) // \u4f20\u591a\u4e2a\u53c2\u6570\u7684\u60c5\u51b5\uff0c\u6700\u540e\u4e00\u4e2a\u53c2\u6570\u4e3a\u51fd\u6570\u4f53\uff0c\u524d\u9762\u7684\u53c2\u6570\u90fd\u662f\u8be5\u51fd\u6570\u7684\u5f62\u53c2\u540d\n")),(0,i.kt)("h2",{id:"2-\u5b9e\u4f8b\u5c5e\u6027"},"2. \u5b9e\u4f8b\u5c5e\u6027\uff1a"),(0,i.kt)("h3",{id:"1-length"},"1. ",(0,i.kt)("inlineCode",{parentName:"h3"},"length"),"\uff1a"),(0,i.kt)("p",null,"\u51fd\u6570\u671f\u671b\u7684\u53c2\u6570\u6570\u91cf"),(0,i.kt)("h3",{id:"2-name"},"2. ",(0,i.kt)("inlineCode",{parentName:"h3"},"name"),"\uff1a"),(0,i.kt)("p",null,"\u51fd\u6570\u7684\u540d\u79f0"),(0,i.kt)("h2",{id:"3-\u5b9e\u4f8b\u65b9\u6cd5"},"3. \u5b9e\u4f8b\u65b9\u6cd5\uff1a"),(0,i.kt)("h3",{id:"1-applythisarg--argsarray"},"1. ",(0,i.kt)("inlineCode",{parentName:"h3"},"apply(thisArg [, argsArray])"),"\uff1a"),(0,i.kt)("p",null,"\u8c03\u7528\u4e00\u4e2a\u51fd\u6570\u5e76\u5c06\u5176 this \u7684\u503c\u8bbe\u7f6e\u4e3a\u63d0\u4f9b\u7684 thisArg\u3002\u53c2\u6570\u53ef\u7528\u4ee5\u901a\u8fc7 ",(0,i.kt)("strong",{parentName:"p"},"\u6570\u7ec4\u5bf9\u8c61")," \u4f20\u9012"),(0,i.kt)("h3",{id:"2-bindthisarg-arg1-arg2-argn"},"2. ",(0,i.kt)("inlineCode",{parentName:"h3"},"bind(thisArg[, arg1[, arg2[, ...argN]]])"),"\uff1a"),(0,i.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a",(0,i.kt)("strong",{parentName:"p"},"\u65b0\u7684\u51fd\u6570"),"\uff0c\u8be5\u51fd\u6570\u5728\u8c03\u7528\u65f6\uff0c\u4f1a\u5c06 this \u8bbe\u7f6e\u4e3a\u63d0\u4f9b\u7684 thisArg\u3002\u5728\u8c03\u7528\u65b0\u7ed1\u5b9a\u7684\u51fd\u6570\u65f6\uff0c\u53ef\u9009\u7684\u53c2\u6570\u5e8f\u5217",(0,i.kt)("inlineCode",{parentName:"p"},"\uff08[, arg1[, arg2[, ...argN]]]\uff09"),"\u4f1a\u88ab\u63d0\u524d\u6dfb\u52a0\u5230\u53c2\u6570\u5e8f\u5217\u4e2d\uff08\u8bd1\u8005\u6ce8\uff1a\u5373\u8c03\u7528\u7ed1\u5b9a\u521b\u5efa\u7684\u51fd\u6570\u65f6\uff0c\u4f20\u9012\u7684\u53c2\u6570\u4f1a\u63a5\u7eed\u5728\u53ef\u9009\u53c2\u6570\u5e8f\u5217\u540e\uff09"),(0,i.kt)("h3",{id:"3-callthisarg-arg1-arg2-argn"},"3. ",(0,i.kt)("inlineCode",{parentName:"h3"},"call(thisArg[, arg1, arg2, ...argN])"),"\uff1a"),(0,i.kt)("p",null,"\u8c03\u7528\u4e00\u4e2a\u51fd\u6570\uff0c\u5e76\u5c06\u5176 this \u503c\u8bbe\u7f6e\u4e3a\u63d0\u4f9b\u7684\u503c\u3002\u4e5f\u53ef\u4ee5\u9009\u62e9\u4f20\u8f93",(0,i.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,i.kt)("h3",{id:"4-tostring"},"4. ",(0,i.kt)("inlineCode",{parentName:"h3"},"toString()"),"\uff1a"),(0,i.kt)("p",null,"\u8fd4\u56de\u8868\u793a\u51fd\u6570\u6e90\u7801\u7684\u5b57\u7b26\u4e32\u3002\u8986\u76d6\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"Object.prototype.toString()")," \u65b9\u6cd5"))}d.isMDXComponent=!0}}]);