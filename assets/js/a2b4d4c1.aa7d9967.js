"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3915],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),f=i(n),m=a,d=f["".concat(l,".").concat(m)]||f[m]||s[m]||o;return n?r.createElement(d,u(u({ref:t},c),{},{components:n})):r.createElement(d,u({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,u[1]=p;for(var i=2;i<o;i++)u[i]=n[i];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},68707:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return s}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),u=["components"],p={},l=void 0,i={unversionedId:"SQL/DML/update",id:"SQL/DML/update",title:"update",description:"1. update\u57fa\u7840\u4f7f\u7528\uff1a",source:"@site/docs/7-SQL/DML/update.md",sourceDirName:"7-SQL/DML",slug:"/SQL/DML/update",permalink:"/learn/SQL/DML/update",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"merge",permalink:"/learn/SQL/DML/merge"},next:{title:"select",permalink:"/learn/SQL/DQL/select"}},c={},s=[{value:"1. update\u57fa\u7840\u4f7f\u7528\uff1a",id:"1-update\u57fa\u7840\u4f7f\u7528",level:3},{value:"2. \u6ce8\u610f\uff1a",id:"2-\u6ce8\u610f",level:3}],f={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"1-update\u57fa\u7840\u4f7f\u7528"},"1. update\u57fa\u7840\u4f7f\u7528\uff1a"),(0,o.kt)("p",null,"update \u8bed\u53e5 \u7528\u4e8e\u7ed9\u8868\u66f4\u65b0\u6570\u636e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"1. \u7528\u5217\u540d\u548c\u503c\u4e00\u4e00\u5bf9\u5e94\u7684\u65b9\u5f0f\u8fdb\u884c\u66f4\u65b0\uff1a\nupdate \u8868\u540d set \u5217\u540d = 'values' , \u5217\u540d = 'values' where \u7b5b\u9009\u6761\u4ef6\n\n2. \u4fee\u6539\u503c\u6309\u7167\u8868\u7ed3\u679c\u96c6\u66f4\u65b0\uff1a\nupdate \u8868\u540d set \u5217\u540d = (select * from \u8868\u540d) where \u7b5b\u9009\u6761\u4ef6\n\n3. \u591a\u6761\u4ef6\u591a\u7ed3\u679c\u66f4\u65b0\uff1a\nupdate \u8868\u540d set \u5217\u540d = (\n    case when \u5224\u65ad\u6761\u4ef6 then \u6267\u884c\u8bed\u53e5\n        when \u5224\u65ad\u6761\u4ef6 then \u6267\u884c\u8bed\u53e5\n        ......\n        when \u5224\u65ad\u6761\u4ef6 then \u6267\u884c\u8bed\u53e5\n        else \u6267\u884c\u8bed\u53e5\n    end\n)  where \u7b5b\u9009\u6761\u4ef6\n")),(0,o.kt)("h3",{id:"2-\u6ce8\u610f"},"2. \u6ce8\u610f\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5982\u679c\u4fee\u6539\u503c\u4f7f\u7528\u8868\u7684\u7ed3\u679c\u96c6\uff0c\u7ed3\u679c\u96c6\u53ea\u80fd\u53ea\u6709\u4e00\u4e2a\u503c")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5982\u679c ",(0,o.kt)("strong",{parentName:"p"},"update")," \u4e0d\u5199 ",(0,o.kt)("strong",{parentName:"p"},"where")," \u6761\u4ef6\uff0c\u5fc5\u987b ",(0,o.kt)("strong",{parentName:"p"},"case when")," \u5185 \u5fc5\u987b\u5199 ",(0,o.kt)("strong",{parentName:"p"},"else")," \u5426\u5219\u4f1a\u51fa\u73b0 ",(0,o.kt)("strong",{parentName:"p"},"null")," \u503c"))))}m.isMDXComponent=!0}}]);