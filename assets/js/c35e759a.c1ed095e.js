"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[761],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=p(n),s=a,d=f["".concat(c,".").concat(s)]||f[s]||m[s]||l;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},61376:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return s},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var r=n(83117),a=n(80102),l=(n(67294),n(3905)),o=["components"],i={},c=void 0,p={unversionedId:"SQL/DDL/alter",id:"SQL/DDL/alter",title:"alter",description:"1. alter\u57fa\u7840\u4f7f\u7528\uff1a",source:"@site/docs/6-SQL/DDL/alter.md",sourceDirName:"6-SQL/DDL",slug:"/SQL/DDL/alter",permalink:"/learn/SQL/DDL/alter",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6743\u9650\u8868",permalink:"/learn/SQL/DCL/\u6743\u9650\u8868"},next:{title:"comment",permalink:"/learn/SQL/DDL/comment"}},u={},m=[{value:"1. alter\u57fa\u7840\u4f7f\u7528\uff1a",id:"1-alter\u57fa\u7840\u4f7f\u7528",level:3},{value:"2. \u6ce8\u610f\uff1a",id:"2-\u6ce8\u610f",level:3}],f={toc:m};function s(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"1-alter\u57fa\u7840\u4f7f\u7528"},"1. alter\u57fa\u7840\u4f7f\u7528\uff1a"),(0,l.kt)("p",null,"alter \u8bed\u53e5 \u7528\u4e8e\u6539\u52a8\u5bf9\u8c61"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"1. \u6dfb\u52a0\u5217\nalter table \u8868\u540d add \u5217\u540d \u7c7b\u578b\n\n2. \u4fee\u6539\u5217\nalter table \u8868\u540d modify \u5217\u540d \u7c7b\u578b\n\n3. \u5220\u9664\u5217\nalter table \u8868\u540d drop column \u5217\u540d\n\n4. \u4fee\u6539\u5217\u540d\nalter table \u8868\u660e rename column \u65e7\u5217\u540d to \u65b0\u5217\u540d\n\n5. \u6dfb\u52a0\u7ea6\u675f\nalter table \u8868\u540d add constraint \u7ea6\u675f\u540d \u7ea6\u675f\u5173\u952e\u5b57(\u5217\u540d)\n\n6. \u6dfb\u52a0\u975e\u7a7a\u7ea6\u675f\nalter table \u8868\u540d modify \u5217\u540d not null\n\n7. \u5220\u9664\u7ea6\u675f\nalter table \u8868\u540d drop [novalidate] constraint \u7ea6\u675f\u540d\n\n8. \u7981\u7528\u7ea6\u675f\nalter table \u8868\u540d disable [validate] constraint \u7ea6\u675f\u540d\n\n9. \u542f\u7528\u7ea6\u675f\nalter table \u8868\u540d enable \n")),(0,l.kt)("h3",{id:"2-\u6ce8\u610f"},"2. \u6ce8\u610f\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u7981\u7528\u548c\u542f\u52a8\u7ea6\u675f\u53ef\u9009\u503c\uff1a"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\u7981\u7528\u7ea6\u675f\uff1a")),(0,l.kt)("p",{parentName:"li"},"disable (\u9ed8\u8ba4novalidate)\uff1a\u5173\u95ed\u7ea6\u675f,\u5220\u9664\u7d22\u5f15,\u53ef\u4ee5\u5bf9\u7ea6\u675f\u5217\u7684\u6570\u636e\u8fdb\u884c\u4fee\u6539\u7b49\u64cd\u4f5c\ndisable validate\uff1a\u5173\u95ed\u7ea6\u675f,\u5220\u9664\u7d22\u5f15,\u4e0d\u80fd\u5bf9\u8868\u8fdb\u884c \u63d2\u5165/\u66f4\u65b0/\u5220\u9664\u7b49\u64cd\u4f5c"),(0,l.kt)("ol",{parentName:"li",start:2},(0,l.kt)("li",{parentName:"ol"},"\u542f\u52a8\u7ea6\u675f\uff1a")),(0,l.kt)("p",{parentName:"li"},"enable (\u9ed8\u8ba4validate)\uff1a\u542f\u7528\u7ea6\u675f,\u521b\u5efa\u7d22\u5f15,\u5bf9\u5df2\u6709\u53ca\u65b0\u52a0\u5165\u7684\u6570\u636e\u6267\u884c\u7ea6\u675f\nenable novalidate\uff1a\u542f\u7528\u7ea6\u675f,\u521b\u5efa\u7d22\u5f15,\u4ec5\u5bf9\u65b0\u52a0\u5165\u7684\u6570\u636e\u5f3a\u5236\u6267\u884c\u7ea6\u675f,\u800c\u4e0d\u7ba1\u8868\u4e2d\u7684\u73b0\u6709\u6570\u636e")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5217\u7684\u7ea6\u675f\u53c2\u8003:  ",(0,l.kt)("a",{parentName:"p",href:"https://jellyrain.github.io/learn/SQL/DDL/%E7%BA%A6%E6%9D%9F%E8%A1%A8#5-%E6%A3%80%E6%9F%A5%E7%BA%A6%E6%9D%9F-check"},"\u7ea6\u675f\u8868")))))}s.isMDXComponent=!0}}]);