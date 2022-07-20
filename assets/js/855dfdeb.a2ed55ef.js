"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2871],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=i,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},65082:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var n=r(83117),i=r(80102),o=(r(67294),r(3905)),a=["components"],l={},u=void 0,c={unversionedId:"SQL/DQL/\u51fd\u6570/\u805a\u5408\u51fd\u6570/cume_dist",id:"SQL/DQL/\u51fd\u6570/\u805a\u5408\u51fd\u6570/cume_dist",title:"cume_dist",description:"\u63cf\u8ff0\uff1a",source:"@site/docs\\6-SQL\\DQL\\\u51fd\u6570\\\u805a\u5408\u51fd\u6570\\cume_dist.md",sourceDirName:"6-SQL/DQL/\u51fd\u6570/\u805a\u5408\u51fd\u6570",slug:"/SQL/DQL/\u51fd\u6570/\u805a\u5408\u51fd\u6570/cume_dist",permalink:"/learn/SQL/DQL/\u51fd\u6570/\u805a\u5408\u51fd\u6570/cume_dist",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"covar_samp",permalink:"/learn/SQL/DQL/\u51fd\u6570/\u805a\u5408\u51fd\u6570/covar_samp"},next:{title:"dense_rank",permalink:"/learn/SQL/DQL/\u51fd\u6570/\u805a\u5408\u51fd\u6570/dense_rank"}},p={},s=[{value:"\u63cf\u8ff0\uff1a",id:"\u63cf\u8ff0",level:4},{value:"\u7c7b\u578b\uff1a",id:"\u7c7b\u578b",level:4},{value:"\u683c\u5f0f\uff1a",id:"\u683c\u5f0f",level:4},{value:"\u8fd4\u56de\u503c\uff1a",id:"\u8fd4\u56de\u503c",level:4},{value:"\u53c2\u6570\uff1a",id:"\u53c2\u6570",level:4},{value:"\u6ce8\u610f\uff1a",id:"\u6ce8\u610f",level:4}],d={toc:s};function m(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0\uff1a"),(0,o.kt)("p",null,"cume_dist \u51fd\u6570\u7528\u6765\u67e5\u8be2\u6307\u5b9a\u6570\u503c\u5728\u6307\u5b9a\u5206\u7ec4\u5e8f\u5217\u4e2d\u7684\u76f8\u5bf9\u4f4d\u7f6e\uff0c\u8fd4\u56de\u503c\u662f\u4ecb\u4e8e 0 \u548c 1 \u4e4b\u95f4\u7684\u5c0f\u6570\u503c"),(0,o.kt)("h4",{id:"\u7c7b\u578b"},"\u7c7b\u578b\uff1a"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Funciton")),(0,o.kt)("h4",{id:"\u683c\u5f0f"},"\u683c\u5f0f\uff1a"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"cume_dist(expr[, expr...]) within group(order by expr2[, expr2...])")),(0,o.kt)("h4",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c\uff1a"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"expr","[, expr...]","\uff08\u5fc5\u586b\uff09\u4e00\u5217\u6216\u8005\u591a\u5217"),(0,o.kt)("li",{parentName:"ol"},"expr2","[, expr2...]","\uff08\u5fc5\u586b\uff09\u4e00\u5217\u6216\u8005\u591a\u5217")),(0,o.kt)("h4",{id:"\u6ce8\u610f"},"\u6ce8\u610f\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u4e24\u4e2a\u53c2\u6570\u7684\u5217\u6570\u91cf\u5fc5\u987b\u4e00\u6837"),(0,o.kt)("li",{parentName:"ol"},"\u8303\u56f4\uff1a0 < cume_dist() <= 1")))}m.isMDXComponent=!0}}]);