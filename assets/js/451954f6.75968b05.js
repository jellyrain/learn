"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[363],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return m}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),f=p(t),m=o,y=f["".concat(l,".").concat(m)]||f[m]||s[m]||a;return t?n.createElement(y,i(i({ref:r},c),{},{components:t})):n.createElement(y,i({ref:r},c))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var u={};for(var l in r)hasOwnProperty.call(r,l)&&(u[l]=r[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},71418:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return s}});var n=t(83117),o=t(80102),a=(t(67294),t(3905)),i=["components"],u={sidebar_position:4},l=void 0,p={unversionedId:"SQL/DQL/group by",id:"SQL/DQL/group by",title:"group by",description:"1. group by\u57fa\u7840\u4f7f\u7528\uff1a",source:"@site/docs/8-SQL/DQL/group by.md",sourceDirName:"8-SQL/DQL",slug:"/SQL/DQL/group by",permalink:"/learn/SQL/DQL/group by",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"where",permalink:"/learn/SQL/DQL/where"},next:{title:"order by",permalink:"/learn/SQL/DQL/order by"}},c={},s=[{value:"1. group by\u57fa\u7840\u4f7f\u7528\uff1a",id:"1-group-by\u57fa\u7840\u4f7f\u7528",level:3},{value:"2. having\uff1a",id:"2-having",level:3}],f={toc:s};function m(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"1-group-by\u57fa\u7840\u4f7f\u7528"},"1. group by\u57fa\u7840\u4f7f\u7528\uff1a"),(0,a.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"p"},"GROUP BY"),"  ",(0,a.kt)("strong",{parentName:"p"},"\u5b50\u53e5")," \u5c06\u8868\u4e2d\u7684\u6570\u636e\u5206\u6210\u82e5\u5e72\u7ec4\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select \u90e8\u95e8, count(1) from \u8868 group by \u90e8\u95e8\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728 ",(0,a.kt)("strong",{parentName:"li"},"SELECT")," \u5217\u8868\u4e2d\u6240\u6709\u672a\u5305\u542b\u5728\u7ec4\u51fd\u6570\u4e2d\u7684\u5217\u90fd\u5e94\u8be5\u5305\u542b \u5728 ",(0,a.kt)("strong",{parentName:"li"},"GROUP BY")," \u5b50\u53e5\u4e2d\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5305\u542b\u5728 ",(0,a.kt)("strong",{parentName:"li"},"GROUP BY")," \u5b50\u53e5\u4e2d\u7684\u5217\u4e0d\u5fc5\u5305\u542b\u5728 ",(0,a.kt)("strong",{parentName:"li"},"SELECT")," \u5217\u8868\u4e2d\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728 ",(0,a.kt)("strong",{parentName:"li"},"GROUP BY")," \u5b50\u53e5\u4e2d\u53ef\u4ee5\u5305\u542b\u591a\u4e2a ",(0,a.kt)("strong",{parentName:"li"},"\u5217"),"\uff0c\u591a\u5217\u7684\u8bdd\u6ee1\u8db3\u5168\u90e8\u5217\u6761\u4ef6\u624d\u662f\u4e00\u7ec4\u3002")),(0,a.kt)("h3",{id:"2-having"},"2. having\uff1a"),(0,a.kt)("p",null,"\u7531\u4e8e where \u6267\u884c\u6bd4group by\u524d\uff0c\u6240\u4ee5 group by \u540e\u9762\u53ef\u4ee5\u63a5 having \u8fdb\u884c\u5224\u65ad\uff0c\u5224\u65ad\u5185\u5bb9\u53c2\u8003 where"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select \u90e8\u95e8, count(1) from \u8868 group by \u90e8\u95e8 having \u90e8\u95e8 = '1\u53f7\u90e8\u95e8'\n")))}m.isMDXComponent=!0}}]);