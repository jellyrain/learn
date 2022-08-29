"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3412],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},49918:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],l={},u=void 0,c={unversionedId:"SQL/DQL/\u51fd\u6570/\u5206\u6790\u51fd\u6570/dense_rank",id:"SQL/DQL/\u51fd\u6570/\u5206\u6790\u51fd\u6570/dense_rank",title:"dense_rank",description:"\u63cf\u8ff0\uff1a",source:"@site/docs\\8-SQL\\DQL\\\u51fd\u6570\\\u5206\u6790\u51fd\u6570\\dense_rank.md",sourceDirName:"8-SQL/DQL/\u51fd\u6570/\u5206\u6790\u51fd\u6570",slug:"/SQL/DQL/\u51fd\u6570/\u5206\u6790\u51fd\u6570/dense_rank",permalink:"/learn/SQL/DQL/\u51fd\u6570/\u5206\u6790\u51fd\u6570/dense_rank",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"cume_dist",permalink:"/learn/SQL/DQL/\u51fd\u6570/\u5206\u6790\u51fd\u6570/cume_dist"},next:{title:"lag",permalink:"/learn/SQL/DQL/\u51fd\u6570/\u5206\u6790\u51fd\u6570/lag"}},p={},s=[{value:"\u63cf\u8ff0\uff1a",id:"\u63cf\u8ff0",level:4},{value:"\u7c7b\u578b\uff1a",id:"\u7c7b\u578b",level:4},{value:"\u683c\u5f0f\uff1a",id:"\u683c\u5f0f",level:4},{value:"\u8fd4\u56de\u503c\uff1a",id:"\u8fd4\u56de\u503c",level:4},{value:"\u53c2\u6570\uff1a",id:"\u53c2\u6570",level:4},{value:"\u6ce8\u610f\uff1a",id:"\u6ce8\u610f",level:4}],d={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0\uff1a"),(0,o.kt)("p",null,"dense_rank \u51fd\u6570\u7528\u6765\u7ed9\u67e5\u8be2\u6392\u5e8f"),(0,o.kt)("h4",{id:"\u7c7b\u578b"},"\u7c7b\u578b\uff1a"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Funciton")),(0,o.kt)("h4",{id:"\u683c\u5f0f"},"\u683c\u5f0f\uff1a"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"dense_rank() over(partition by expr1 order by expr2)")),(0,o.kt)("h4",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c\uff1a"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"expr1\uff08\u5fc5\u586b\uff09\u5206\u7ec4\u4f7f\u7528\u7684\u5217")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"expr2\uff08\u5fc5\u586b\uff09\u6392\u5e8f\u5217"))),(0,o.kt)("h4",{id:"\u6ce8\u610f"},"\u6ce8\u610f\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u4f1a\u8003\u8651\u76f8\u540c\u503c\uff0c\u6392\u5e8f\u7f16\u53f7\u4e00\u6837"),(0,o.kt)("li",{parentName:"ol"},"\u4e0d\u4f1a\u8df3\u53f7\uff0c\u5982\u679c\u6709\u76f8\u540c\u503c\u4e0b\u4e00\u4e2a\u4e0d\u76f8\u540c\u503c\u63a5\u7740\u7f16\u53f7\u7ee7\u7eed\u5f80\u4e0b\u52a0")))}f.isMDXComponent=!0}}]);