"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8943],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(r),d=a,m=s["".concat(u,".").concat(d)]||s[d]||f[d]||o;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},648:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return f}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),l=["components"],i={},u=void 0,c={unversionedId:"SQL/DQL/\u51fd\u6570/\u5206\u6790\u51fd\u6570/lag",id:"SQL/DQL/\u51fd\u6570/\u5206\u6790\u51fd\u6570/lag",title:"lag",description:"\u63cf\u8ff0\uff1a",source:"@site/docs\\7-SQL\\DQL\\\u51fd\u6570\\\u5206\u6790\u51fd\u6570\\lag.md",sourceDirName:"7-SQL/DQL/\u51fd\u6570/\u5206\u6790\u51fd\u6570",slug:"/SQL/DQL/\u51fd\u6570/\u5206\u6790\u51fd\u6570/lag",permalink:"/learn/SQL/DQL/\u51fd\u6570/\u5206\u6790\u51fd\u6570/lag",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"dense_rank",permalink:"/learn/SQL/DQL/\u51fd\u6570/\u5206\u6790\u51fd\u6570/dense_rank"},next:{title:"lead",permalink:"/learn/SQL/DQL/\u51fd\u6570/\u5206\u6790\u51fd\u6570/lead"}},p={},f=[{value:"\u63cf\u8ff0\uff1a",id:"\u63cf\u8ff0",level:4},{value:"\u7c7b\u578b\uff1a",id:"\u7c7b\u578b",level:4},{value:"\u683c\u5f0f\uff1a",id:"\u683c\u5f0f",level:4},{value:"\u8fd4\u56de\u503c\uff1a",id:"\u8fd4\u56de\u503c",level:4},{value:"\u53c2\u6570\uff1a",id:"\u53c2\u6570",level:4}],s={toc:f};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0\uff1a"),(0,o.kt)("p",null,"lag \u51fd\u6570\u7528\u6765\u5411\u4e0a\u504f\u79fb\uff08\u628a\u6307\u5b9a\u5411\u4e0a\u504f\u79fb\u884c\u7684\u5217\u503c\u653e\u5728\u6b64\u884c\uff09"),(0,o.kt)("h4",{id:"\u7c7b\u578b"},"\u7c7b\u578b\uff1a"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Funciton")),(0,o.kt)("h4",{id:"\u683c\u5f0f"},"\u683c\u5f0f\uff1a"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"lag(value_expr, offset, default) over(partition by expr1 order by expr2)")),(0,o.kt)("h4",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c\uff1a"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"value_expr\uff08\u5fc5\u586b\uff09\u504f\u79fb\u7684\u5217"),(0,o.kt)("li",{parentName:"ol"},"offset\uff08\u5fc5\u586b\uff09\u504f\u79fb\u7684\u884c\u6570"),(0,o.kt)("li",{parentName:"ol"},"default\uff08\u5fc5\u586b\uff09\u65e0\u504f\u79fb\u7ed3\u679c\u7684\u9ed8\u8ba4\u503c"),(0,o.kt)("li",{parentName:"ol"},"expr1\uff08\u9009\u586b\uff09\u5206\u7ec4\u4f7f\u7528\u7684\u5217"),(0,o.kt)("li",{parentName:"ol"},"expr2\uff08\u5fc5\u586b\uff09\u6392\u5e8f\u5217")))}d.isMDXComponent=!0}}]);