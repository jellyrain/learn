"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7291],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=c(n),m=o,d=f["".concat(u,".").concat(m)]||f[m]||s[m]||l;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},36313:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s}});var r=n(83117),o=n(80102),l=(n(67294),n(3905)),i=["components"],a={},u=void 0,c={unversionedId:"SQL/DQL/\u51fd\u6570/\u5206\u6790\u51fd\u6570/count",id:"SQL/DQL/\u51fd\u6570/\u5206\u6790\u51fd\u6570/count",title:"count",description:"\u63cf\u8ff0\uff1a",source:"@site/docs\\8-SQL\\DQL\\\u51fd\u6570\\\u5206\u6790\u51fd\u6570\\count.md",sourceDirName:"8-SQL/DQL/\u51fd\u6570/\u5206\u6790\u51fd\u6570",slug:"/SQL/DQL/\u51fd\u6570/\u5206\u6790\u51fd\u6570/count",permalink:"/learn/SQL/DQL/\u51fd\u6570/\u5206\u6790\u51fd\u6570/count",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"corr",permalink:"/learn/SQL/DQL/\u51fd\u6570/\u5206\u6790\u51fd\u6570/corr"},next:{title:"covar_pop",permalink:"/learn/SQL/DQL/\u51fd\u6570/\u5206\u6790\u51fd\u6570/covar_pop"}},p={},s=[{value:"\u63cf\u8ff0\uff1a",id:"\u63cf\u8ff0",level:4},{value:"\u7c7b\u578b\uff1a",id:"\u7c7b\u578b",level:4},{value:"\u683c\u5f0f\uff1a",id:"\u683c\u5f0f",level:4},{value:"\u8fd4\u56de\u503c\uff1a",id:"\u8fd4\u56de\u503c",level:4},{value:"\u53c2\u6570\uff1a",id:"\u53c2\u6570",level:4},{value:"\u793a\u4f8b\uff1a",id:"\u793a\u4f8b",level:4},{value:"\u6ce8\u610f:",id:"\u6ce8\u610f",level:4}],f={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0\uff1a"),(0,l.kt)("p",null,"count \u51fd\u6570\u7528\u6765\u7edf\u8ba1\u884c\u6570"),(0,l.kt)("h4",{id:"\u7c7b\u578b"},"\u7c7b\u578b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Funciton")),(0,l.kt)("h4",{id:"\u683c\u5f0f"},"\u683c\u5f0f\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"count(expr) over(partition by expr2)")),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"expr\uff08\u5fc5\u586b\uff09\u9700\u6c42\u7edf\u8ba1\u7684\u5217 \u6216 * \u6216 1"),(0,l.kt)("li",{parentName:"ol"},"expr2\uff08\u5fc5\u586b\uff09\u5206\u7ec4\u4f7f\u7528\u7684\u5217")),(0,l.kt)("h4",{id:"\u793a\u4f8b"},"\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select distinct deptno, count(empno) over(partition by deptno) from emp\n")),(0,l.kt)("h4",{id:"\u6ce8\u610f"},"\u6ce8\u610f:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"*")," \u5305\u542b null \uff08\u53ea\u6709\u4e00\u5217 \u4f18\u5148\u4f7f\u7528\uff09 mysql\u6709\u7279\u522b\u4f18\u5316\uff1a \u4f7f\u7528 * \u4e5f\u662f\u4f7f\u7528 1"),(0,l.kt)("li",{parentName:"ol"},"\u5217 \u4e0d\u5305\u542b null \uff08\u5217\u540d\u662f\u4e3b\u952e \u4f18\u5148\u4f7f\u7528\uff09 \u5141\u8bb8\u5728\u524d\u9762\u4f7f\u7528 distinct \u53bb\u91cd"),(0,l.kt)("li",{parentName:"ol"},"1 \u5305\u542b null\uff08\u4e0d\u5305\u542b\u4e3b\u952e \u6216 \u5217\u540d\u90fd\u4e0d\u662f\u4e3b\u952e \u4f18\u5148\u4f7f\u7528\uff09"),(0,l.kt)("li",{parentName:"ol"},"\u63a8\u8350\u4f7f\u7528 ",(0,l.kt)("strong",{parentName:"li"},"distinct")," \u53bb\u91cd")))}m.isMDXComponent=!0}}]);