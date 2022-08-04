"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1371],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(n),h=o,v=s["".concat(c,".").concat(h)]||s[h]||u[h]||i;return n?r.createElement(v,a(a({ref:t},d),{},{components:n})):r.createElement(v,a({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},50309:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=["components"],l={sidebar_position:2},c=void 0,p={unversionedId:"web/JavaScript/BOM/location",id:"web/JavaScript/BOM/location",title:"location",description:"location \u662f\u6700\u6709\u7528\u7684 BOM \u5bf9\u8c61\u4e4b\u4e00\uff0c\u63d0\u4f9b\u4e86\u5f53\u524d\u7a97\u53e3\u4e2d\u52a0\u8f7d\u6587\u6863\u7684\u4fe1\u606f\uff0c\u4ee5\u53ca\u901a\u5e38\u7684\u5bfc\u822a\u529f\u80fd",source:"@site/docs/2-web/3-JavaScript/16-BOM/location.md",sourceDirName:"2-web/3-JavaScript/16-BOM",slug:"/web/JavaScript/BOM/location",permalink:"/learn/web/JavaScript/BOM/location",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"window",permalink:"/learn/web/JavaScript/BOM/window"},next:{title:"navigator",permalink:"/learn/web/JavaScript/BOM/navigator"}},d={},u=[{value:"1. \u9759\u6001\u5c5e\u6027\uff1a",id:"1-\u9759\u6001\u5c5e\u6027",level:2},{value:"1. <code>href</code>\uff1a",id:"1-href",level:3},{value:"2. <code>protocol</code>\uff1a",id:"2-protocol",level:3},{value:"3. <code>host</code>\uff1a",id:"3-host",level:3},{value:"4. <code>hostname</code>\uff1a",id:"4-hostname",level:3},{value:"5. <code>port</code>\uff1a",id:"5-port",level:3},{value:"6. <code>pathname</code>\uff1a",id:"6-pathname",level:3},{value:"7. <code>search</code>\uff1a",id:"7-search",level:3},{value:"8. <code>hash</code>\uff1a",id:"8-hash",level:3},{value:"9. <code>origin \u53ea\u8bfb</code>\uff1a",id:"9-origin-\u53ea\u8bfb",level:3},{value:"2. \u9759\u6001\u65b9\u6cd5\uff1a",id:"2-\u9759\u6001\u65b9\u6cd5",level:2},{value:"1. <code>assign()</code>\uff1a",id:"1-assign",level:3},{value:"2. <code>reload()</code>\uff1a",id:"2-reload",level:3},{value:"3. <code>replace()</code>\uff1a",id:"3-replace",level:3},{value:"4. <code>toString()</code>\uff1a",id:"4-tostring",level:3}],s={toc:u};function h(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"location \u662f\u6700\u6709\u7528\u7684 BOM \u5bf9\u8c61\u4e4b\u4e00\uff0c\u63d0\u4f9b\u4e86\u5f53\u524d\u7a97\u53e3\u4e2d\u52a0\u8f7d\u6587\u6863\u7684\u4fe1\u606f\uff0c\u4ee5\u53ca\u901a\u5e38\u7684\u5bfc\u822a\u529f\u80fd"),(0,i.kt)("p",null,"\u8fd9\u4e2a\u5bf9\u8c61\u72ec\u7279\u7684\u5730\u65b9\u5728\u4e8e\uff0c\u5b83\u65e2\u662f window \u7684\u5c5e\u6027\uff0c\u4e5f\u662f document \u7684\u5c5e\u6027\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c window.location \u548c document.location \u6307\u5411\u540c\u4e00\u4e2a\u5bf9\u8c61"),(0,i.kt)("p",null,"location \u5bf9\u8c61\u4e0d\u4ec5\u4fdd\u5b58\u7740\u5f53\u524d\u52a0\u8f7d\u6587\u6863\u7684\u4fe1\u606f\uff0c\u4e5f\u4fdd\u5b58\u7740\u628a URL \u89e3\u6790\u4e3a\u79bb\u6563\u7247\u6bb5\u540e\u80fd\u591f\u901a\u8fc7\u5c5e\u6027\u8bbf\u95ee\u7684\u4fe1\u606f"),(0,i.kt)("h2",{id:"1-\u9759\u6001\u5c5e\u6027"},"1. \u9759\u6001\u5c5e\u6027\uff1a"),(0,i.kt)("h3",{id:"1-href"},"1. ",(0,i.kt)("inlineCode",{parentName:"h3"},"href"),"\uff1a"),(0,i.kt)("p",null,"\u5305\u542b\u6574\u4e2a URL \u7684\u4e00\u4e2a DOMString"),(0,i.kt)("h3",{id:"2-protocol"},"2. ",(0,i.kt)("inlineCode",{parentName:"h3"},"protocol"),"\uff1a"),(0,i.kt)("p",null,'\u5305\u542b URL \u5bf9\u5e94\u534f\u8bae\u7684\u4e00\u4e2a DOMString\uff0c\u6700\u540e\u6709\u4e00\u4e2a ":"'),(0,i.kt)("h3",{id:"3-host"},"3. ",(0,i.kt)("inlineCode",{parentName:"h3"},"host"),"\uff1a"),(0,i.kt)("p",null,'\u5305\u542b\u4e86\u57df\u540d\u7684\u4e00\u4e2a DOMString\uff0c\u53ef\u80fd\u5728\u8be5\u4e32\u6700\u540e\u5e26\u6709\u4e00\u4e2a ":" \u5e76\u8ddf\u4e0a URL \u7684\u7aef\u53e3\u53f7'),(0,i.kt)("h3",{id:"4-hostname"},"4. ",(0,i.kt)("inlineCode",{parentName:"h3"},"hostname"),"\uff1a"),(0,i.kt)("p",null,"\u5305\u542b URL \u57df\u540d\u7684\u4e00\u4e2a DOMString"),(0,i.kt)("h3",{id:"5-port"},"5. ",(0,i.kt)("inlineCode",{parentName:"h3"},"port"),"\uff1a"),(0,i.kt)("p",null,"\u5305\u542b\u7aef\u53e3\u53f7\u7684\u4e00\u4e2a DOMString"),(0,i.kt)("h3",{id:"6-pathname"},"6. ",(0,i.kt)("inlineCode",{parentName:"h3"},"pathname"),"\uff1a"),(0,i.kt)("p",null,'\u5305\u542b URL \u4e2d\u8def\u5f84\u90e8\u5206\u7684\u4e00\u4e2a DOMString\uff0c\u5f00\u5934\u6709\u4e00\u4e2a \u201c/"'),(0,i.kt)("h3",{id:"7-search"},"7. ",(0,i.kt)("inlineCode",{parentName:"h3"},"search"),"\uff1a"),(0,i.kt)("p",null,"\u5305\u542b URL \u53c2\u6570\u7684\u4e00\u4e2a DOMString\uff0c\u5f00\u5934\u6709\u4e00\u4e2a \u201c?\u201d"),(0,i.kt)("h3",{id:"8-hash"},"8. ",(0,i.kt)("inlineCode",{parentName:"h3"},"hash"),"\uff1a"),(0,i.kt)("p",null,"\u5305\u542b\u5757\u6807\u8bc6\u7b26\u7684 DOMString\uff0c\u5f00\u5934\u6709\u4e00\u4e2a \u201c#\u201d"),(0,i.kt)("h3",{id:"9-origin-\u53ea\u8bfb"},"9. ",(0,i.kt)("inlineCode",{parentName:"h3"},"origin \u53ea\u8bfb"),"\uff1a"),(0,i.kt)("p",null,"\u5305\u542b\u9875\u9762\u6765\u6e90\u7684\u57df\u540d\u7684\u6807\u51c6\u5f62\u5f0f DOMString"),(0,i.kt)("h2",{id:"2-\u9759\u6001\u65b9\u6cd5"},"2. \u9759\u6001\u65b9\u6cd5\uff1a"),(0,i.kt)("h3",{id:"1-assign"},"1. ",(0,i.kt)("inlineCode",{parentName:"h3"},"assign()"),"\uff1a"),(0,i.kt)("p",null,"\u89e6\u53d1\u7a97\u53e3\u52a0\u8f7d\u5e76\u663e\u793a\u6307\u5b9a\u7684 URL \u7684\u5185\u5bb9"),(0,i.kt)("h3",{id:"2-reload"},"2. ",(0,i.kt)("inlineCode",{parentName:"h3"},"reload()"),"\uff1a"),(0,i.kt)("p",null,"\u91cd\u65b0\u52a0\u8f7d\u5f53\u524d\u9875\u9762\uff0c\u5c31\u50cf\u5237\u65b0\u6309\u94ae\u4e00\u6837"),(0,i.kt)("h3",{id:"3-replace"},"3. ",(0,i.kt)("inlineCode",{parentName:"h3"},"replace()"),"\uff1a"),(0,i.kt)("p",null,"\u4ee5\u7ed9\u5b9a\u7684 URL \u6765\u66ff\u6362\u5f53\u524d\u7684\u8d44\u6e90\u3002 \u4e0e ",(0,i.kt)("inlineCode",{parentName:"p"},"assign()")," \u65b9\u6cd5 \u4e0d\u540c\u7684\u662f\uff0c\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"replace()")," \u65b9\u6cd5\u540e\uff0c\u5f53\u524d\u9875\u9762\u4e0d\u4f1a\u4fdd\u5b58\u5230\u4f1a\u8bdd\u5386\u53f2\u4e2d\uff08session History\uff09\uff0c\u8fd9\u6837\uff0c\u7528\u6237\u70b9\u51fb\u56de\u9000\u6309\u94ae\u65f6\uff0c\u5c06\u4e0d\u4f1a\u518d\u8df3\u8f6c\u5230\u8be5\u9875\u9762"),(0,i.kt)("h3",{id:"4-tostring"},"4. ",(0,i.kt)("inlineCode",{parentName:"h3"},"toString()"),"\uff1a"),(0,i.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a DOMString\uff0c\u5305\u542b\u6574\u4e2a URL\u3002 \u5b83\u548c\u8bfb\u53d6 ",(0,i.kt)("inlineCode",{parentName:"p"},"Location.href")," \u7684\u6548\u679c\u76f8\u540c\u3002\u4f46\u662f\u7528\u5b83\u662f\u4e0d\u80fd\u591f\u4fee\u6539 Location \u7684\u503c"))}h.isMDXComponent=!0}}]);