"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1491],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=l(t),m=a,v=f["".concat(u,".").concat(m)]||f[m]||p[m]||o;return t?r.createElement(v,c(c({ref:n},s),{},{components:t})):r.createElement(v,c({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=f;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},57067:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var r=t(83117),a=t(80102),o=(t(67294),t(3905)),c=["components"],i={sidebar_position:6},u=void 0,l={unversionedId:"web/JavaScript/\u9ad8\u9636\u51fd\u6570/\u79c1\u6709\u53d8\u91cf",id:"web/JavaScript/\u9ad8\u9636\u51fd\u6570/\u79c1\u6709\u53d8\u91cf",title:"\u79c1\u6709\u53d8\u91cf",description:"1. \u95ed\u5305\uff1a",source:"@site/docs\\1-web\\3-JavaScript\\14-\u9ad8\u9636\u51fd\u6570\\\u79c1\u6709\u53d8\u91cf.md",sourceDirName:"1-web/3-JavaScript/14-\u9ad8\u9636\u51fd\u6570",slug:"/web/JavaScript/\u9ad8\u9636\u51fd\u6570/\u79c1\u6709\u53d8\u91cf",permalink:"/learn/web/JavaScript/\u9ad8\u9636\u51fd\u6570/\u79c1\u6709\u53d8\u91cf",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"IIFE\uff08\u7acb\u5373\u8c03\u7528\u51fd\u6570\u8868\u8fbe\u5f0f\uff09",permalink:"/learn/web/JavaScript/\u9ad8\u9636\u51fd\u6570/IIFE\uff08\u7acb\u5373\u8c03\u7528\u51fd\u6570\u8868\u8fbe\u5f0f\uff09"},next:{title:"\u5f02\u6b65\u7f16\u7a0b",permalink:"/learn/web/JavaScript/\u671f\u7ea6\u4e0e\u5f02\u6b65\u51fd\u6570/\u5f02\u6b65\u7f16\u7a0b"}},s={},p=[{value:"1. \u95ed\u5305\uff1a",id:"1-\u95ed\u5305",level:2},{value:"2. class\uff1a",id:"2-class",level:2}],f={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-\u95ed\u5305"},"1. \u95ed\u5305\uff1a"),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u95ed\u5305\u6765\u6a21\u62df\u79c1\u6709\u5c5e\u6027"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const User = function (name) {\n    let userName = name,\n    return {\n        getName() {\n            return userName\n        },\n        setName(name) {\n            userName = name\n        }\n    }\n}\n")),(0,o.kt)("h2",{id:"2-class"},"2. class\uff1a"),(0,o.kt)("p",null,"ES2022\uff0c\u6709\u4e00\u4e2a\u63d0\u6848\uff0c\u4e3a class \u52a0\u4e86\u79c1\u6709\u5c5e\u6027\u3002\u65b9\u6cd5\u662f\u5728\u5c5e\u6027\u540d\u4e4b\u524d\uff0c\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"#")," \u8868\u793a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"class IncreasingCounter {\n  #count = 0\n  get value() {\n    console.log('Getting the current value!')\n    return this.#count\n  }\n  set value(value) {\n    this.#count = value\n  }\n  increment() {\n    this.#count++\n  }\n}\n\nconst counter = new IncreasingCounter()\ncounter.#count // \u62a5\u9519\ncounter.#count = 42 // \u62a5\u9519\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u79c1\u6709\u5c5e\u6027\u4e5f\u53ef\u4ee5\u8bbe\u7f6e getter \u548c setter \u65b9\u6cd5"))}m.isMDXComponent=!0}}]);