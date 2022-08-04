"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7848],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return m}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=t.createContext({}),l=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},p=function(e){var n=l(e.components);return t.createElement(u.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=l(r),m=o,d=s["".concat(u,".").concat(m)]||s[m]||f[m]||i;return r?t.createElement(d,a(a({ref:n},p),{},{components:r})):t.createElement(d,a({ref:n},p))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=s;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}s.displayName="MDXCreateElement"},75924:function(e,n,r){r.r(n),r.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return f}});var t=r(83117),o=r(80102),i=(r(67294),r(3905)),a=["components"],c={},u=void 0,l={unversionedId:"SQL/PLSQL/\u51fd\u6570",id:"SQL/PLSQL/\u51fd\u6570",title:"\u51fd\u6570",description:"1. \u51fd\u6570\u7684\u521b\u5efa\uff1a",source:"@site/docs\\7-SQL\\PLSQL\\\u51fd\u6570.md",sourceDirName:"7-SQL/PLSQL",slug:"/SQL/PLSQL/\u51fd\u6570",permalink:"/learn/SQL/PLSQL/\u51fd\u6570",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PLSQL\u57fa\u7840",permalink:"/learn/SQL/PLSQL/PLSQL\u57fa\u7840"},next:{title:"\u52a8\u6001SQL",permalink:"/learn/SQL/PLSQL/\u52a8\u6001SQL"}},p={},f=[{value:"1. \u51fd\u6570\u7684\u521b\u5efa\uff1a",id:"1-\u51fd\u6570\u7684\u521b\u5efa",level:3},{value:"2. \u51fd\u6570\u7684\u4f7f\u7528\uff1a",id:"2-\u51fd\u6570\u7684\u4f7f\u7528",level:3}],s={toc:f};function m(e){var n=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"1-\u51fd\u6570\u7684\u521b\u5efa"},"1. \u51fd\u6570\u7684\u521b\u5efa\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create or replace function [\u6240\u6709\u8005.]\u51fd\u6570\u540d\u79f0(\u53c2\u6570[, \u53c2\u6570, ...])\nreturn \u8fd4\u56de\u6570\u636e\u7c7b\u578b\n[authid define|current_user]\n--\u6307\u5b9a\u8fc7\u7a0b\u662f\u4f7f\u7528\u7528\u6237\u6743\u9650\u8fd8\u662f\u521b\u5efa\u8005\u6743\u9650\u8fd0\u884c\n[DETERMINISTIC]--\u4f18\u5316\u5668\u63d0\u793a\uff0c\u590d\u5236\u4e00\u4e2a\u4fdd\u7559\u503c\n[PARALLEL_ENABLE...]--\u4f18\u5316\u5668\u63d0\u793a\uff0c\u5e76\u884c\u5904\u7406\n[PIPELINED]--\u51fd\u6570\u7ed3\u679c\u662f\u5426\u5e94\u8be5\u901a\u8fc7pipe row\u591a\u6b21\u8fd4\u56de\n[RESULT_CACHE...]--\u8f93\u5165\u548c\u8fd4\u56de\u503c\u662f\u5426\u4fdd\u7559\u5728\u65b0\u7684\u51fd\u6570\u7ed3\u679c\u7f13\u5b58\u4e2d\u3002\nis\n\u58f0\u660e\u90e8\u5206\nbegin\n\u6267\u884c\u8bed\u53e5\nreturn \u8fd4\u56de\u5185\u5bb9\nexception\n\u5f02\u5e38\u5904\u7406\nend [\u8fc7\u7a0b\u540d\u79f0];\n")),(0,i.kt)("h3",{id:"2-\u51fd\u6570\u7684\u4f7f\u7528"},"2. \u51fd\u6570\u7684\u4f7f\u7528\uff1a"),(0,i.kt)("p",null,"\u6ce8\u610f\uff1a\u4e0d\u80fd\u4f7f\u7528 exec \u6216 call \u8c03\u7528\u51fd\u6570\uff0c\u5fc5\u987b\u4f9d\u8d56\u73b0\u6210\u7684\u5b58\u50a8\u8fc7\u7a0b\u6216\u8005\u4e00\u6bb5\u5b8c\u6574 plsql \u4ee3\u7801"))}m.isMDXComponent=!0}}]);