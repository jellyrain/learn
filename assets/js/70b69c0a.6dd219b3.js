"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6023],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return s}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),s=o,d=m["".concat(u,".").concat(s)]||m[s]||f[s]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function s(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},42892:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return f}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),i=["components"],l={},u=void 0,c={unversionedId:"SQL/DQL/\u51fd\u6570/\u5206\u6790\u51fd\u6570/rank",id:"SQL/DQL/\u51fd\u6570/\u5206\u6790\u51fd\u6570/rank",title:"rank",description:"\u63cf\u8ff0\uff1a",source:"@site/docs\\SQL\\DQL\\\u51fd\u6570\\\u5206\u6790\u51fd\u6570\\rank.md",sourceDirName:"SQL/DQL/\u51fd\u6570/\u5206\u6790\u51fd\u6570",slug:"/SQL/DQL/\u51fd\u6570/\u5206\u6790\u51fd\u6570/rank",permalink:"/learn/SQL/DQL/\u51fd\u6570/\u5206\u6790\u51fd\u6570/rank",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"min",permalink:"/learn/SQL/DQL/\u51fd\u6570/\u5206\u6790\u51fd\u6570/min"},next:{title:"row_number",permalink:"/learn/SQL/DQL/\u51fd\u6570/\u5206\u6790\u51fd\u6570/row_number"}},p={},f=[{value:"\u63cf\u8ff0\uff1a",id:"\u63cf\u8ff0",level:4},{value:"\u7c7b\u578b\uff1a",id:"\u7c7b\u578b",level:4},{value:"\u683c\u5f0f\uff1a",id:"\u683c\u5f0f",level:4},{value:"\u8fd4\u56de\u503c\uff1a",id:"\u8fd4\u56de\u503c",level:4},{value:"\u53c2\u6570\uff1a",id:"\u53c2\u6570",level:4},{value:"\u6ce8\u610f\uff1a",id:"\u6ce8\u610f",level:4}],m={toc:f};function s(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0\uff1a"),(0,a.kt)("p",null,"rank \u51fd\u6570\u7528\u6765\u7ed9\u67e5\u8be2\u6392\u5e8f"),(0,a.kt)("h4",{id:"\u7c7b\u578b"},"\u7c7b\u578b\uff1a"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Funciton")),(0,a.kt)("h4",{id:"\u683c\u5f0f"},"\u683c\u5f0f\uff1a"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"rank() over(partition by expr1 order by expr2)")),(0,a.kt)("h4",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c\uff1a"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"expr1\uff08\u5fc5\u586b\uff09\u5206\u7ec4\u4f7f\u7528\u7684\u5217"),(0,a.kt)("li",{parentName:"ol"},"expr2\uff08\u5fc5\u586b\uff09\u6392\u5e8f\u5217")),(0,a.kt)("h4",{id:"\u6ce8\u610f"},"\u6ce8\u610f\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4f1a\u8003\u8651\u76f8\u540c\u503c\uff0c\u6392\u5e8f\u7f16\u53f7\u4e00\u6837"),(0,a.kt)("li",{parentName:"ol"},"\u4f1a\u8df3\u53f7\uff0c\u5982\u679c\u6709\u76f8\u540c\u503c\u4e0b\u4e00\u4e2a\u4e0d\u76f8\u540c\u503c\u6309\u7167\u6ca1\u76f8\u540c\u503c\u7684\u5e8f\u53f7\u7ee7\u7eed\u5f80\u4e0b\u6392\u5e8f")))}s.isMDXComponent=!0}}]);