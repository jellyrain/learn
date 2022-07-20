"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4728],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return s}});var a=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),k=c(r),s=l,g=k["".concat(i,".").concat(s)]||k[s]||d[s]||n;return r?a.createElement(g,p(p({ref:t},u),{},{components:r})):a.createElement(g,p({ref:t},u))}));function s(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,p=new Array(n);p[0]=k;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:l,p[1]=o;for(var c=2;c<n;c++)p[c]=r[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},52293:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var a=r(83117),l=r(80102),n=(r(67294),r(3905)),p=["components"],o={sidebar_position:2},i=void 0,c={unversionedId:"web/JavaScript/\u4ee3\u7406\u548c\u53cd\u5c04/Reflect",id:"web/JavaScript/\u4ee3\u7406\u548c\u53cd\u5c04/Reflect",title:"Reflect",description:"1. \u53cd\u5c04\u673a\u5236\u63cf\u8ff0\uff1a",source:"@site/docs\\1-web\\3-JavaScript\\13-\u4ee3\u7406\u548c\u53cd\u5c04\\Reflect.md",sourceDirName:"1-web/3-JavaScript/13-\u4ee3\u7406\u548c\u53cd\u5c04",slug:"/web/JavaScript/\u4ee3\u7406\u548c\u53cd\u5c04/Reflect",permalink:"/learn/web/JavaScript/\u4ee3\u7406\u548c\u53cd\u5c04/Reflect",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Proxy",permalink:"/learn/web/JavaScript/\u4ee3\u7406\u548c\u53cd\u5c04/Proxy"},next:{title:"\u7bad\u5934\u51fd\u6570",permalink:"/learn/web/JavaScript/\u9ad8\u9636\u51fd\u6570/\u7bad\u5934\u51fd\u6570"}},u={},d=[{value:"1. \u53cd\u5c04\u673a\u5236\u63cf\u8ff0\uff1a",id:"1-\u53cd\u5c04\u673a\u5236\u63cf\u8ff0",level:2},{value:"2. Reflect \u7b80\u8ff0\uff1a",id:"2-reflect-\u7b80\u8ff0",level:2},{value:"3. Reflect \u8bbe\u8ba1\u76ee\u7684\uff1a",id:"3-reflect-\u8bbe\u8ba1\u76ee\u7684",level:2},{value:"1. \u5c06 Object \u5bf9\u8c61\u7684\u4e00\u4e9b\u660e\u663e\u5c5e\u4e8e\u8bed\u8a00\u5185\u90e8\u7684\u65b9\u6cd5\uff08\u6bd4\u5982 <code>Object.defineProperty</code>\uff09\uff0c\u653e\u5230 Reflect \u5bf9\u8c61\u4e0a\uff1a",id:"1-\u5c06-object-\u5bf9\u8c61\u7684\u4e00\u4e9b\u660e\u663e\u5c5e\u4e8e\u8bed\u8a00\u5185\u90e8\u7684\u65b9\u6cd5\u6bd4\u5982-objectdefineproperty\u653e\u5230-reflect-\u5bf9\u8c61\u4e0a",level:3},{value:"2. \u4fee\u6539\u67d0\u4e9b Object \u65b9\u6cd5\u7684\u8fd4\u56de\u7ed3\u679c\uff0c\u8ba9\u5176\u53d8\u5f97\u66f4\u5408\u7406\uff1a",id:"2-\u4fee\u6539\u67d0\u4e9b-object-\u65b9\u6cd5\u7684\u8fd4\u56de\u7ed3\u679c\u8ba9\u5176\u53d8\u5f97\u66f4\u5408\u7406",level:3},{value:"3. \u8ba9 Object \u64cd\u4f5c\u90fd\u53d8\u6210\u51fd\u6570\u884c\u4e3a\uff1a",id:"3-\u8ba9-object-\u64cd\u4f5c\u90fd\u53d8\u6210\u51fd\u6570\u884c\u4e3a",level:3},{value:"4. Reflect \u5bf9\u8c61\u7684\u65b9\u6cd5\u4e0e Proxy \u5bf9\u8c61\u7684\u65b9\u6cd5\u4e00\u4e00\u5bf9\u5e94\uff0c\u53ea\u8981\u662f Proxy \u5bf9\u8c61\u7684\u65b9\u6cd5\uff0c\u5c31\u80fd\u5728 Reflect \u5bf9\u8c61\u4e0a\u627e\u5230\u5bf9\u5e94\u7684\u65b9\u6cd5\uff1a",id:"4-reflect-\u5bf9\u8c61\u7684\u65b9\u6cd5\u4e0e-proxy-\u5bf9\u8c61\u7684\u65b9\u6cd5\u4e00\u4e00\u5bf9\u5e94\u53ea\u8981\u662f-proxy-\u5bf9\u8c61\u7684\u65b9\u6cd5\u5c31\u80fd\u5728-reflect-\u5bf9\u8c61\u4e0a\u627e\u5230\u5bf9\u5e94\u7684\u65b9\u6cd5",level:3},{value:"4. \u9759\u6001\u65b9\u6cd5\uff1a",id:"4-\u9759\u6001\u65b9\u6cd5",level:2},{value:"1. <code>get(target, propertyKey, receiver)</code>\uff1a",id:"1-gettarget-propertykey-receiver",level:3},{value:"1. \u53c2\u6570\u63cf\u8ff0\uff1a",id:"1-\u53c2\u6570\u63cf\u8ff0",level:4},{value:"2. \u8fd4\u56de\u503c\uff1a",id:"2-\u8fd4\u56de\u503c",level:4},{value:"3. \u4ee3\u66ff\u65b9\u5f0f\uff1a",id:"3-\u4ee3\u66ff\u65b9\u5f0f",level:4},{value:"2. <code>set(target, propertyKey, value, receiver)</code>\uff1a",id:"2-settarget-propertykey-value-receiver",level:3},{value:"1. \u53c2\u6570\u63cf\u8ff0\uff1a",id:"1-\u53c2\u6570\u63cf\u8ff0-1",level:4},{value:"2. \u8fd4\u56de\u503c\uff1a",id:"2-\u8fd4\u56de\u503c-1",level:4},{value:"3. \u4ee3\u66ff\u65b9\u5f0f\uff1a",id:"3-\u4ee3\u66ff\u65b9\u5f0f-1",level:4},{value:"3. <code>has(target, propertyKey)</code>\uff1a",id:"3-hastarget-propertykey",level:3},{value:"1. \u53c2\u6570\u63cf\u8ff0\uff1a",id:"1-\u53c2\u6570\u63cf\u8ff0-2",level:4},{value:"2. \u8fd4\u56de\u503c\uff1a",id:"2-\u8fd4\u56de\u503c-2",level:4},{value:"3. \u4ee3\u66ff\u65b9\u5f0f\uff1a",id:"3-\u4ee3\u66ff\u65b9\u5f0f-2",level:4},{value:"4. <code>deleteProperty(target, propertyKey)</code>\uff1a",id:"4-deletepropertytarget-propertykey",level:3},{value:"1. \u53c2\u6570\u63cf\u8ff0\uff1a",id:"1-\u53c2\u6570\u63cf\u8ff0-3",level:4},{value:"2. \u8fd4\u56de\u503c\uff1a",id:"2-\u8fd4\u56de\u503c-3",level:4},{value:"3. \u4ee3\u66ff\u65b9\u5f0f\uff1a",id:"3-\u4ee3\u66ff\u65b9\u5f0f-3",level:4},{value:"5. <code>construct(target, argumentsList, newTarget)</code>\uff1a",id:"5-constructtarget-argumentslist-newtarget",level:3},{value:"1. \u53c2\u6570\u63cf\u8ff0\uff1a",id:"1-\u53c2\u6570\u63cf\u8ff0-4",level:4},{value:"2. \u8fd4\u56de\u503c\uff1a",id:"2-\u8fd4\u56de\u503c-4",level:4},{value:"3. \u4ee3\u66ff\u65b9\u5f0f\uff1a",id:"3-\u4ee3\u66ff\u65b9\u5f0f-4",level:4},{value:"6. <code>getPrototypeOf(target)</code>\uff1a",id:"6-getprototypeoftarget",level:3},{value:"1. \u53c2\u6570\u63cf\u8ff0\uff1a",id:"1-\u53c2\u6570\u63cf\u8ff0-5",level:4},{value:"2. \u8fd4\u56de\u503c\uff1a",id:"2-\u8fd4\u56de\u503c-5",level:4},{value:"3. \u4ee3\u66ff\u65b9\u5f0f\uff1a",id:"3-\u4ee3\u66ff\u65b9\u5f0f-5",level:4},{value:"7. <code>setPrototypeOf(target, prototype)</code>\uff1a",id:"7-setprototypeoftarget-prototype",level:3},{value:"1. \u53c2\u6570\u63cf\u8ff0\uff1a",id:"1-\u53c2\u6570\u63cf\u8ff0-6",level:4},{value:"2. \u8fd4\u56de\u503c\uff1a",id:"2-\u8fd4\u56de\u503c-6",level:4},{value:"3. \u4ee3\u66ff\u65b9\u5f0f\uff1a",id:"3-\u4ee3\u66ff\u65b9\u5f0f-6",level:4},{value:"8. <code>apply(target, prototype)</code>\uff1a",id:"8-applytarget-prototype",level:3},{value:"1. \u53c2\u6570\u63cf\u8ff0\uff1a",id:"1-\u53c2\u6570\u63cf\u8ff0-7",level:4},{value:"2. \u8fd4\u56de\u503c\uff1a",id:"2-\u8fd4\u56de\u503c-7",level:4},{value:"3. \u4ee3\u66ff\u65b9\u5f0f\uff1a",id:"3-\u4ee3\u66ff\u65b9\u5f0f-7",level:4},{value:"9. <code>defineProperty(target, propertyKey, attributes)</code>\uff1a",id:"9-definepropertytarget-propertykey-attributes",level:3},{value:"1. \u53c2\u6570\u63cf\u8ff0\uff1a",id:"1-\u53c2\u6570\u63cf\u8ff0-8",level:4},{value:"2. \u8fd4\u56de\u503c\uff1a",id:"2-\u8fd4\u56de\u503c-8",level:4},{value:"3. \u4ee3\u66ff\u65b9\u5f0f\uff1a",id:"3-\u4ee3\u66ff\u65b9\u5f0f-8",level:4},{value:"10. <code>getOwnPropertyDescriptor(target, propertyKey)</code>\uff1a",id:"10-getownpropertydescriptortarget-propertykey",level:3},{value:"1. \u53c2\u6570\u63cf\u8ff0\uff1a",id:"1-\u53c2\u6570\u63cf\u8ff0-9",level:4},{value:"2. \u8fd4\u56de\u503c\uff1a",id:"2-\u8fd4\u56de\u503c-9",level:4},{value:"3. \u4ee3\u66ff\u65b9\u5f0f\uff1a",id:"3-\u4ee3\u66ff\u65b9\u5f0f-9",level:4},{value:"11. <code>isExtensible(target)</code>\uff1a",id:"11-isextensibletarget",level:3},{value:"1. \u53c2\u6570\u63cf\u8ff0\uff1a",id:"1-\u53c2\u6570\u63cf\u8ff0-10",level:4},{value:"2. \u8fd4\u56de\u503c\uff1a",id:"2-\u8fd4\u56de\u503c-10",level:4},{value:"3. \u4ee3\u66ff\u65b9\u5f0f\uff1a",id:"3-\u4ee3\u66ff\u65b9\u5f0f-10",level:4},{value:"12. <code>preventExtensions(target)</code>\uff1a",id:"12-preventextensionstarget",level:3},{value:"1. \u53c2\u6570\u63cf\u8ff0\uff1a",id:"1-\u53c2\u6570\u63cf\u8ff0-11",level:4},{value:"2. \u8fd4\u56de\u503c\uff1a",id:"2-\u8fd4\u56de\u503c-11",level:4},{value:"3. \u4ee3\u66ff\u65b9\u5f0f\uff1a",id:"3-\u4ee3\u66ff\u65b9\u5f0f-11",level:4},{value:"13. <code>ownKeys(target)</code>\uff1a",id:"13-ownkeystarget",level:3},{value:"1. \u53c2\u6570\u63cf\u8ff0\uff1a",id:"1-\u53c2\u6570\u63cf\u8ff0-12",level:4},{value:"2. \u8fd4\u56de\u503c\uff1a",id:"2-\u8fd4\u56de\u503c-12",level:4},{value:"3. \u4ee3\u66ff\u65b9\u5f0f\uff1a",id:"3-\u4ee3\u66ff\u65b9\u5f0f-12",level:4}],k={toc:d};function s(e){var t=e.components,r=(0,l.Z)(e,p);return(0,n.kt)("wrapper",(0,a.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"1-\u53cd\u5c04\u673a\u5236\u63cf\u8ff0"},"1. \u53cd\u5c04\u673a\u5236\u63cf\u8ff0\uff1a"),(0,n.kt)("p",null,"\u53cd\u5c04\u673a\u5236\u6307\u7684\u662f\u7a0b\u5e8f\u5728\u8fd0\u884c\u65f6\u80fd\u591f\u83b7\u53d6\u81ea\u8eab\u7684\u4fe1\u606f"),(0,n.kt)("h2",{id:"2-reflect-\u7b80\u8ff0"},"2. Reflect \u7b80\u8ff0\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Reflect \u662f\u4e00\u4e2a\u5185\u5efa\u7684\u5bf9\u8c61\uff0c\u7528\u6765\u63d0\u4f9b\u65b9\u6cd5\u53bb\u62e6\u622a JavaScript \u7684\u64cd\u4f5c\uff08",(0,n.kt)("strong",{parentName:"li"},"\u5c01\u88c5\u539f\u59cb\u884c\u4e3a"),"\uff09"),(0,n.kt)("li",{parentName:"ol"},"Reflect \u4e0d\u662f\u4e00\u4e2a\u51fd\u6570\u5bf9\u8c61\uff0c\u6240\u4ee5\u5b83\u662f\u4e0d\u53ef\u6784\u9020\u7684\uff0c\u4e5f\u5c31\u662f\u8bf4\u5b83\u4e0d\u662f\u4e00\u4e2a\u6784\u9020\u5668\uff0c\u4f60\u4e0d\u80fd\u901a\u8fc7",(0,n.kt)("inlineCode",{parentName:"li"},"new"),"\u64cd\u4f5c\u7b26\u53bb\u65b0\u5efa\u6216\u8005\u5c06\u5176\u4f5c\u4e3a\u4e00\u4e2a\u51fd\u6570\u53bb\u8c03\u7528 Reflect \u5bf9\u8c61"),(0,n.kt)("li",{parentName:"ol"},"Reflect \u7684\u6240\u6709\u5c5e\u6027\u548c\u65b9\u6cd5\u90fd\u662f\u9759\u6001\u7684"),(0,n.kt)("li",{parentName:"ol"},"Reflect \u5185\u90e8\u5c01\u88c5\u4e86\u4e00\u7cfb\u5217\u5bf9\u8c61\u7684\u5e95\u5c42\u64cd\u4f5c"),(0,n.kt)("li",{parentName:"ol"},"Reflect \u6210\u5458\u65b9\u6cd5\u5c31\u662f Proxy \u5904\u7406\u5bf9\u8c61\u7684\u9ed8\u8ba4\u5b9e\u73b0")),(0,n.kt)("h2",{id:"3-reflect-\u8bbe\u8ba1\u76ee\u7684"},"3. Reflect \u8bbe\u8ba1\u76ee\u7684\uff1a"),(0,n.kt)("h3",{id:"1-\u5c06-object-\u5bf9\u8c61\u7684\u4e00\u4e9b\u660e\u663e\u5c5e\u4e8e\u8bed\u8a00\u5185\u90e8\u7684\u65b9\u6cd5\u6bd4\u5982-objectdefineproperty\u653e\u5230-reflect-\u5bf9\u8c61\u4e0a"},"1. \u5c06 Object \u5bf9\u8c61\u7684\u4e00\u4e9b\u660e\u663e\u5c5e\u4e8e\u8bed\u8a00\u5185\u90e8\u7684\u65b9\u6cd5\uff08\u6bd4\u5982 ",(0,n.kt)("inlineCode",{parentName:"h3"},"Object.defineProperty"),"\uff09\uff0c\u653e\u5230 Reflect \u5bf9\u8c61\u4e0a\uff1a"),(0,n.kt)("p",null,"\u73b0\u9636\u6bb5\uff0c\u67d0\u4e9b\u65b9\u6cd5\u540c\u65f6\u5728 Object \u548c Reflect \u5bf9\u8c61\u4e0a\u90e8\u7f72\uff0c\u672a\u6765\u7684\u65b0\u65b9\u6cd5\u5c06\u53ea\u90e8\u7f72\u5728 Reflect \u5bf9\u8c61\u4e0a\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u4ece Reflect \u5bf9\u8c61\u4e0a\u53ef\u4ee5\u62ff\u5230\u8bed\u8a00\u5185\u90e8\u7684\u65b9\u6cd5"),(0,n.kt)("h3",{id:"2-\u4fee\u6539\u67d0\u4e9b-object-\u65b9\u6cd5\u7684\u8fd4\u56de\u7ed3\u679c\u8ba9\u5176\u53d8\u5f97\u66f4\u5408\u7406"},"2. \u4fee\u6539\u67d0\u4e9b Object \u65b9\u6cd5\u7684\u8fd4\u56de\u7ed3\u679c\uff0c\u8ba9\u5176\u53d8\u5f97\u66f4\u5408\u7406\uff1a"),(0,n.kt)("p",null,"\u6bd4\u5982\uff0c",(0,n.kt)("inlineCode",{parentName:"p"},"Object.defineProperty(obj, name, desc)")," \u5728\u65e0\u6cd5\u5b9a\u4e49\u5c5e\u6027\u65f6\uff0c\u4f1a\u629b\u51fa\u4e00\u4e2a\u9519\u8bef\uff0c\u800c ",(0,n.kt)("inlineCode",{parentName:"p"},"Reflect.defineProperty(obj, name, desc)")," \u5219\u4f1a\u8fd4\u56de false"),(0,n.kt)("h3",{id:"3-\u8ba9-object-\u64cd\u4f5c\u90fd\u53d8\u6210\u51fd\u6570\u884c\u4e3a"},"3. \u8ba9 Object \u64cd\u4f5c\u90fd\u53d8\u6210\u51fd\u6570\u884c\u4e3a\uff1a"),(0,n.kt)("p",null,"\u67d0\u4e9b Object \u64cd\u4f5c\u662f\u547d\u4ee4\u5f0f\uff0c\u6bd4\u5982 ",(0,n.kt)("inlineCode",{parentName:"p"},"name in obj")," \u548c ",(0,n.kt)("inlineCode",{parentName:"p"},"delete obj[name]"),"\uff0c\u800c ",(0,n.kt)("inlineCode",{parentName:"p"},"Reflect.has(obj, name)")," \u548c ",(0,n.kt)("inlineCode",{parentName:"p"},"Reflect.deleteProperty(obj, name)")," \u8ba9\u5b83\u4eec\u53d8\u6210\u4e86\u51fd\u6570\u884c\u4e3a"),(0,n.kt)("h3",{id:"4-reflect-\u5bf9\u8c61\u7684\u65b9\u6cd5\u4e0e-proxy-\u5bf9\u8c61\u7684\u65b9\u6cd5\u4e00\u4e00\u5bf9\u5e94\u53ea\u8981\u662f-proxy-\u5bf9\u8c61\u7684\u65b9\u6cd5\u5c31\u80fd\u5728-reflect-\u5bf9\u8c61\u4e0a\u627e\u5230\u5bf9\u5e94\u7684\u65b9\u6cd5"},"4. Reflect \u5bf9\u8c61\u7684\u65b9\u6cd5\u4e0e Proxy \u5bf9\u8c61\u7684\u65b9\u6cd5\u4e00\u4e00\u5bf9\u5e94\uff0c\u53ea\u8981\u662f Proxy \u5bf9\u8c61\u7684\u65b9\u6cd5\uff0c\u5c31\u80fd\u5728 Reflect \u5bf9\u8c61\u4e0a\u627e\u5230\u5bf9\u5e94\u7684\u65b9\u6cd5\uff1a"),(0,n.kt)("p",null,"\u8fd9\u5c31\u8ba9 Proxy \u5bf9\u8c61\u53ef\u4ee5\u65b9\u4fbf\u5730\u8c03\u7528\u5bf9\u5e94\u7684 Reflect \u65b9\u6cd5\uff0c\u5b8c\u6210\u9ed8\u8ba4\u884c\u4e3a\uff0c\u4f5c\u4e3a\u4fee\u6539\u884c\u4e3a\u7684\u57fa\u7840\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u4e0d\u7ba1 Proxy \u600e\u4e48\u4fee\u6539\u9ed8\u8ba4\u884c\u4e3a\uff0c\u4f60\u603b\u53ef\u4ee5\u5728 Reflect \u4e0a\u83b7\u53d6\u9ed8\u8ba4\u884c\u4e3a"),(0,n.kt)("h2",{id:"4-\u9759\u6001\u65b9\u6cd5"},"4. \u9759\u6001\u65b9\u6cd5\uff1a"),(0,n.kt)("h3",{id:"1-gettarget-propertykey-receiver"},"1. ",(0,n.kt)("inlineCode",{parentName:"h3"},"get(target, propertyKey, receiver)"),"\uff1a"),(0,n.kt)("p",null,"\u4e0e\u4ece\u5bf9\u8c61 ",(0,n.kt)("inlineCode",{parentName:"p"},"target[propertyKey]")," \u4e2d\u8bfb\u53d6\u5c5e\u6027\u7c7b\u4f3c\uff0c\u4f46\u5b83\u662f\u901a\u8fc7\u4e00\u4e2a\u51fd\u6570\u6267\u884c\u6765\u64cd\u4f5c\u7684"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"Reflect.get(target, propertyKey[, receiver])\n")),(0,n.kt)("h4",{id:"1-\u53c2\u6570\u63cf\u8ff0"},"1. \u53c2\u6570\u63cf\u8ff0\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"target\uff1a\u76ee\u6807\u5bf9\u8c61"),(0,n.kt)("li",{parentName:"ol"},"propertyKey\uff1a\u9700\u8981\u83b7\u53d6\u7684\u503c\u7684\u952e\u503c"),(0,n.kt)("li",{parentName:"ol"},"receiver\uff1a\u5982\u679c target \u5bf9\u8c61\u4e2d\u6307\u5b9a\u4e86 getter\uff0creceiver \u5219\u4e3a getter \u8c03\u7528\u65f6\u7684 this \u503c")),(0,n.kt)("h4",{id:"2-\u8fd4\u56de\u503c"},"2. \u8fd4\u56de\u503c\uff1a"),(0,n.kt)("p",null,"\u5c5e\u6027\u7684\u503c"),(0,n.kt)("h4",{id:"3-\u4ee3\u66ff\u65b9\u5f0f"},"3. \u4ee3\u66ff\u65b9\u5f0f\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"target[propertyKey]\n")),(0,n.kt)("h3",{id:"2-settarget-propertykey-value-receiver"},"2. ",(0,n.kt)("inlineCode",{parentName:"h3"},"set(target, propertyKey, value, receiver)"),"\uff1a"),(0,n.kt)("p",null,"\u5c31\u50cf\u5728\u4e00\u4e2a\u5bf9\u8c61\u4e0a\u8bbe\u7f6e\u4e00\u4e2a\u5c5e\u6027"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"Reflect.set(target, propertyKey, value[, receiver])\n")),(0,n.kt)("h4",{id:"1-\u53c2\u6570\u63cf\u8ff0-1"},"1. \u53c2\u6570\u63cf\u8ff0\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"target\uff1a\u8bbe\u7f6e\u5c5e\u6027\u7684\u76ee\u6807\u5bf9\u8c61"),(0,n.kt)("li",{parentName:"ol"},"propertyKey\uff1a\u8bbe\u7f6e\u7684\u5c5e\u6027\u7684\u540d\u79f0"),(0,n.kt)("li",{parentName:"ol"},"value\uff1a\u8bbe\u7f6e\u7684\u503c"),(0,n.kt)("li",{parentName:"ol"},"receiver\uff1a\u5982\u679c\u9047\u5230 setter\uff0creceiver \u5219\u4e3a setter \u8c03\u7528\u65f6\u7684 this \u503c")),(0,n.kt)("h4",{id:"2-\u8fd4\u56de\u503c-1"},"2. \u8fd4\u56de\u503c\uff1a"),(0,n.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a Boolean \u503c\u8868\u660e\u662f\u5426\u6210\u529f\u8bbe\u7f6e\u5c5e\u6027"),(0,n.kt)("h4",{id:"3-\u4ee3\u66ff\u65b9\u5f0f-1"},"3. \u4ee3\u66ff\u65b9\u5f0f\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"target[propertyKey] = value\n")),(0,n.kt)("h3",{id:"3-hastarget-propertykey"},"3. ",(0,n.kt)("inlineCode",{parentName:"h3"},"has(target, propertyKey)"),"\uff1a"),(0,n.kt)("p",null,"\u4e0e in \u64cd\u4f5c\u7b26 \u76f8\u540c"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"Reflect.has(target, propertyKey)\n")),(0,n.kt)("h4",{id:"1-\u53c2\u6570\u63cf\u8ff0-2"},"1. \u53c2\u6570\u63cf\u8ff0\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"target\uff1a\u76ee\u6807\u5bf9\u8c61"),(0,n.kt)("li",{parentName:"ol"},"propertyKey\uff1a\u5c5e\u6027\u540d\uff0c\u9700\u8981\u68c0\u67e5\u76ee\u6807\u5bf9\u8c61\u662f\u5426\u5b58\u5728\u6b64\u5c5e\u6027")),(0,n.kt)("h4",{id:"2-\u8fd4\u56de\u503c-2"},"2. \u8fd4\u56de\u503c\uff1a"),(0,n.kt)("p",null,"\u4e00\u4e2a Boolean \u7c7b\u578b\u7684\u5bf9\u8c61\u6307\u793a\u662f\u5426\u5b58\u5728\u6b64\u5c5e\u6027"),(0,n.kt)("h4",{id:"3-\u4ee3\u66ff\u65b9\u5f0f-2"},"3. \u4ee3\u66ff\u65b9\u5f0f\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"propertyKey in target\n")),(0,n.kt)("h3",{id:"4-deletepropertytarget-propertykey"},"4. ",(0,n.kt)("inlineCode",{parentName:"h3"},"deleteProperty(target, propertyKey)"),"\uff1a"),(0,n.kt)("p",null,"\u4e0e in \u64cd\u4f5c\u7b26 \u76f8\u540c"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"Reflect.deleteProperty(target, propertyKey)\n")),(0,n.kt)("h4",{id:"1-\u53c2\u6570\u63cf\u8ff0-3"},"1. \u53c2\u6570\u63cf\u8ff0\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"target\uff1a\u5220\u9664\u5c5e\u6027\u7684\u76ee\u6807\u5bf9\u8c61"),(0,n.kt)("li",{parentName:"ol"},"propertyKey\uff1a\u9700\u8981\u5220\u9664\u7684\u5c5e\u6027\u7684\u540d\u79f0")),(0,n.kt)("h4",{id:"2-\u8fd4\u56de\u503c-3"},"2. \u8fd4\u56de\u503c\uff1a"),(0,n.kt)("p",null,"Boolean \u503c\u8868\u660e\u8be5\u5c5e\u6027\u662f\u5426\u88ab\u6210\u529f\u5220\u9664"),(0,n.kt)("h4",{id:"3-\u4ee3\u66ff\u65b9\u5f0f-3"},"3. \u4ee3\u66ff\u65b9\u5f0f\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"delete target[propertyKey]\n")),(0,n.kt)("h3",{id:"5-constructtarget-argumentslist-newtarget"},"5. ",(0,n.kt)("inlineCode",{parentName:"h3"},"construct(target, argumentsList, newTarget)"),"\uff1a"),(0,n.kt)("p",null,"\u6709\u70b9\u50cf new \u64cd\u4f5c\u7b26 \u6784\u9020\u51fd\u6570"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"Reflect.construct(target, argumentsList[, newTarget])\n")),(0,n.kt)("h4",{id:"1-\u53c2\u6570\u63cf\u8ff0-4"},"1. \u53c2\u6570\u63cf\u8ff0\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"target\uff1a\u88ab\u8fd0\u884c\u7684\u76ee\u6807\u6784\u9020\u51fd\u6570"),(0,n.kt)("li",{parentName:"ol"},"argumentsList\uff1a\u7c7b\u6570\u7ec4\uff0c\u76ee\u6807\u6784\u9020\u51fd\u6570\u8c03\u7528\u65f6\u7684\u53c2\u6570"),(0,n.kt)("li",{parentName:"ol"},"newTarget\uff1a\u4f5c\u4e3a\u65b0\u521b\u5efa\u5bf9\u8c61\u7684\u539f\u578b\u5bf9\u8c61\u7684 constructor \u5c5e\u6027\uff0c \u53c2\u8003 new.target \u64cd\u4f5c\u7b26\uff0c\u9ed8\u8ba4\u503c\u4e3a target")),(0,n.kt)("h4",{id:"2-\u8fd4\u56de\u503c-4"},"2. \u8fd4\u56de\u503c\uff1a"),(0,n.kt)("p",null,"\u4ee5 target\uff08\u5982\u679c newTarget \u5b58\u5728\uff0c\u5219\u4e3a newTarget\uff09\u51fd\u6570\u4e3a\u6784\u9020\u51fd\u6570\uff0cargumentList \u4e3a\u5176\u521d\u59cb\u5316\u53c2\u6570\u7684\u5bf9\u8c61\u5b9e\u4f8b"),(0,n.kt)("h4",{id:"3-\u4ee3\u66ff\u65b9\u5f0f-4"},"3. \u4ee3\u66ff\u65b9\u5f0f\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"new target(...argumentsList)\n")),(0,n.kt)("h3",{id:"6-getprototypeoftarget"},"6. ",(0,n.kt)("inlineCode",{parentName:"h3"},"getPrototypeOf(target)"),"\uff1a"),(0,n.kt)("p",null,"\u4e0e ",(0,n.kt)("inlineCode",{parentName:"p"},"Object.getPrototypeOf()")," \u65b9\u6cd5\u51e0\u4e4e\u662f\u4e00\u6837\u7684\u3002\u90fd\u662f\u8fd4\u56de\u6307\u5b9a\u5bf9\u8c61\u7684\u539f\u578b\uff08\u5373\u5185\u90e8\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"[[Prototype]]")," \u5c5e\u6027\u7684\u503c\uff09"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"Reflect.getPrototypeOf(target)\n")),(0,n.kt)("h4",{id:"1-\u53c2\u6570\u63cf\u8ff0-5"},"1. \u53c2\u6570\u63cf\u8ff0\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"target\uff1a\u83b7\u53d6\u539f\u578b\u7684\u76ee\u6807\u5bf9\u8c61")),(0,n.kt)("h4",{id:"2-\u8fd4\u56de\u503c-5"},"2. \u8fd4\u56de\u503c\uff1a"),(0,n.kt)("p",null,"\u7ed9\u5b9a\u5bf9\u8c61\u7684\u539f\u578b\u3002\u5982\u679c\u7ed9\u5b9a\u5bf9\u8c61\u6ca1\u6709\u7ee7\u627f\u7684\u5c5e\u6027\uff0c\u5219\u8fd4\u56de null"),(0,n.kt)("h4",{id:"3-\u4ee3\u66ff\u65b9\u5f0f-5"},"3. \u4ee3\u66ff\u65b9\u5f0f\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"Object.getPrototypeOf(target)\n")),(0,n.kt)("h3",{id:"7-setprototypeoftarget-prototype"},"7. ",(0,n.kt)("inlineCode",{parentName:"h3"},"setPrototypeOf(target, prototype)"),"\uff1a"),(0,n.kt)("p",null,"\u4e0e ",(0,n.kt)("inlineCode",{parentName:"p"},"Object.setPrototypeOf()")," \u65b9\u6cd5\u51e0\u4e4e\u662f\u4e00\u6837\u7684\u3002\u5b83\u53ef\u8bbe\u7f6e\u5bf9\u8c61\u7684\u539f\u578b\uff08\u5373\u5185\u90e8\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"[[Prototype]]")," \u5c5e\u6027\uff09\u4e3a\u53e6\u4e00\u4e2a\u5bf9\u8c61\u6216 null\uff0c\u5982\u679c\u64cd\u4f5c\u6210\u529f\u8fd4\u56de true\uff0c\u5426\u5219\u8fd4\u56de false"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"Reflect.setPrototypeOf(target, prototype)\n")),(0,n.kt)("h4",{id:"1-\u53c2\u6570\u63cf\u8ff0-6"},"1. \u53c2\u6570\u63cf\u8ff0\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"target\uff1a\u83b7\u53d6\u539f\u578b\u7684\u76ee\u6807\u5bf9\u8c61"),(0,n.kt)("li",{parentName:"ol"},"prototype\uff1a\u5bf9\u8c61\u7684\u65b0\u539f\u578b\uff08\u4e00\u4e2a\u5bf9\u8c61\u6216 null\uff09")),(0,n.kt)("h4",{id:"2-\u8fd4\u56de\u503c-6"},"2. \u8fd4\u56de\u503c\uff1a"),(0,n.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a Boolean \u503c\u8868\u660e\u662f\u5426\u539f\u578b\u5df2\u7ecf\u6210\u529f\u8bbe\u7f6e"),(0,n.kt)("h4",{id:"3-\u4ee3\u66ff\u65b9\u5f0f-6"},"3. \u4ee3\u66ff\u65b9\u5f0f\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"Object.setPrototypeOf(target, prototype)\n")),(0,n.kt)("h3",{id:"8-applytarget-prototype"},"8. ",(0,n.kt)("inlineCode",{parentName:"h3"},"apply(target, prototype)"),"\uff1a"),(0,n.kt)("p",null,"\u901a\u8fc7\u6307\u5b9a\u7684\u53c2\u6570\u5217\u8868\u53d1\u8d77\u5bf9\u76ee\u6807 ",(0,n.kt)("inlineCode",{parentName:"p"},"(target)")," \u51fd\u6570\u7684\u8c03\u7528"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"Reflect.apply(target, thisArgument, argumentsList)\n")),(0,n.kt)("h4",{id:"1-\u53c2\u6570\u63cf\u8ff0-7"},"1. \u53c2\u6570\u63cf\u8ff0\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"target\uff1a\u76ee\u6807\u51fd\u6570"),(0,n.kt)("li",{parentName:"ol"},"thisArgument\uff1a\u8c03\u7528\u65f6\u7ed1\u5b9a\u7684 this \u5bf9\u8c61"),(0,n.kt)("li",{parentName:"ol"},"argumentsList\uff1a\u8c03\u7528\u65f6\u4f20\u5165\u7684\u5b9e\u53c2\u5217\u8868\uff0c\u8be5\u53c2\u6570\u5e94\u8be5\u662f\u4e00\u4e2a\u7c7b\u6570\u7ec4\u7684\u5bf9\u8c61")),(0,n.kt)("h4",{id:"2-\u8fd4\u56de\u503c-7"},"2. \u8fd4\u56de\u503c\uff1a"),(0,n.kt)("p",null,"\u8fd4\u56de\u503c\u662f\u8c03\u7528\u5b8c\u5e26\u7740\u6307\u5b9a\u53c2\u6570\u548c this \u503c\u7684\u7ed9\u5b9a\u7684\u51fd\u6570\u540e\u8fd4\u56de\u7684\u7ed3\u679c"),(0,n.kt)("h4",{id:"3-\u4ee3\u66ff\u65b9\u5f0f-7"},"3. \u4ee3\u66ff\u65b9\u5f0f\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"target.apply(thisArgument, argumentsList)\n")),(0,n.kt)("h3",{id:"9-definepropertytarget-propertykey-attributes"},"9. ",(0,n.kt)("inlineCode",{parentName:"h3"},"defineProperty(target, propertyKey, attributes)"),"\uff1a"),(0,n.kt)("p",null,"\u57fa\u672c\u7b49\u540c\u4e8e ",(0,n.kt)("inlineCode",{parentName:"p"},"Object.defineProperty()")," \u65b9\u6cd5\uff0c\u552f\u4e00\u4e0d\u540c\u662f\u8fd4\u56de Boolean \u503c"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"Reflect.defineProperty(target, propertyKey, attributes)\n")),(0,n.kt)("h4",{id:"1-\u53c2\u6570\u63cf\u8ff0-8"},"1. \u53c2\u6570\u63cf\u8ff0\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"target\uff1a\u76ee\u6807\u5bf9\u8c61"),(0,n.kt)("li",{parentName:"ol"},"propertyKey\uff1a\u8981\u5b9a\u4e49\u6216\u4fee\u6539\u7684\u5c5e\u6027\u7684\u540d\u79f0"),(0,n.kt)("li",{parentName:"ol"},"attributes\uff1a\u8981\u5b9a\u4e49\u6216\u4fee\u6539\u7684\u5c5e\u6027\u7684\u63cf\u8ff0\u7b26\uff08\u5177\u4f53\u67e5\u770b ",(0,n.kt)("inlineCode",{parentName:"li"},"Object.defineProperty")," \u90e8\u5206\uff09")),(0,n.kt)("h4",{id:"2-\u8fd4\u56de\u503c-8"},"2. \u8fd4\u56de\u503c\uff1a"),(0,n.kt)("p",null,"Boolean \u503c\u6307\u793a\u4e86\u5c5e\u6027\u662f\u5426\u88ab\u6210\u529f\u5b9a\u4e49"),(0,n.kt)("h4",{id:"3-\u4ee3\u66ff\u65b9\u5f0f-8"},"3. \u4ee3\u66ff\u65b9\u5f0f\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"Object.defineProperty(target, propertyKey, attributes)\n")),(0,n.kt)("h3",{id:"10-getownpropertydescriptortarget-propertykey"},"10. ",(0,n.kt)("inlineCode",{parentName:"h3"},"getOwnPropertyDescriptor(target, propertyKey)"),"\uff1a"),(0,n.kt)("p",null,"\u4e0e ",(0,n.kt)("inlineCode",{parentName:"p"},"Object.getOwnPropertyDescriptor()")," \u65b9\u6cd5\u76f8\u4f3c\u3002\u5982\u679c\u5728\u5bf9\u8c61\u4e2d\u5b58\u5728\uff0c\u5219\u8fd4\u56de\u7ed9\u5b9a\u7684\u5c5e\u6027\u7684\u5c5e\u6027\u63cf\u8ff0\u7b26\u3002\u5426\u5219\u8fd4\u56de undefined"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"Reflect.getOwnPropertyDescriptor(target, propertyKey)\n")),(0,n.kt)("h4",{id:"1-\u53c2\u6570\u63cf\u8ff0-9"},"1. \u53c2\u6570\u63cf\u8ff0\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"target\uff1a\u9700\u8981\u5bfb\u627e\u5c5e\u6027\u7684\u76ee\u6807\u5bf9\u8c61"),(0,n.kt)("li",{parentName:"ol"},"propertyKey\uff1a\u83b7\u53d6\u81ea\u5df1\u7684\u5c5e\u6027\u63cf\u8ff0\u7b26\u7684\u5c5e\u6027\u7684\u540d\u79f0")),(0,n.kt)("h4",{id:"2-\u8fd4\u56de\u503c-9"},"2. \u8fd4\u56de\u503c\uff1a"),(0,n.kt)("p",null,"\u5982\u679c\u5c5e\u6027\u5b58\u5728\u4e8e\u7ed9\u5b9a\u7684\u76ee\u6807\u5bf9\u8c61\u4e2d\uff0c\u5219\u8fd4\u56de\u5c5e\u6027\u63cf\u8ff0\u7b26\uff1b\u5426\u5219\uff0c\u8fd4\u56de undefined"),(0,n.kt)("h4",{id:"3-\u4ee3\u66ff\u65b9\u5f0f-9"},"3. \u4ee3\u66ff\u65b9\u5f0f\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"Object.getOwnPropertyDescriptor(target, propertyKey)\n")),(0,n.kt)("h3",{id:"11-isextensibletarget"},"11. ",(0,n.kt)("inlineCode",{parentName:"h3"},"isExtensible(target)"),"\uff1a"),(0,n.kt)("p",null,"\u5224\u65ad\u4e00\u4e2a\u5bf9\u8c61\u662f\u5426\u53ef\u6269\u5c55\uff08\u5373\u662f\u5426\u80fd\u591f\u6dfb\u52a0\u65b0\u7684\u5c5e\u6027\uff09\u3002\u4e0e\u5b83 ",(0,n.kt)("inlineCode",{parentName:"p"},"Object.isExtensible()")," \u65b9\u6cd5\u76f8\u4f3c"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"Reflect.isExtensible(target)\n")),(0,n.kt)("h4",{id:"1-\u53c2\u6570\u63cf\u8ff0-10"},"1. \u53c2\u6570\u63cf\u8ff0\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"target\uff1a\u68c0\u67e5\u662f\u5426\u53ef\u6269\u5c55\u7684\u76ee\u6807\u5bf9\u8c61")),(0,n.kt)("h4",{id:"2-\u8fd4\u56de\u503c-10"},"2. \u8fd4\u56de\u503c\uff1a"),(0,n.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a Boolean \u503c\u8868\u660e\u8be5\u5bf9\u8c61\u662f\u5426\u53ef\u6269\u5c55"),(0,n.kt)("h4",{id:"3-\u4ee3\u66ff\u65b9\u5f0f-10"},"3. \u4ee3\u66ff\u65b9\u5f0f\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"Object.isExtensible(target)\n")),(0,n.kt)("h3",{id:"12-preventextensionstarget"},"12. ",(0,n.kt)("inlineCode",{parentName:"h3"},"preventExtensions(target)"),"\uff1a"),(0,n.kt)("p",null,"\u963b\u6b62\u65b0\u5c5e\u6027\u6dfb\u52a0\u5230\u5bf9\u8c61 \uff08\u4f8b\u5982\uff1a\u9632\u6b62\u5c06\u6765\u5bf9\u5bf9\u8c61\u7684\u6269\u5c55\u88ab\u6dfb\u52a0\u5230\u5bf9\u8c61\u4e2d\uff09\u3002\u4e0e\u5b83 ",(0,n.kt)("inlineCode",{parentName:"p"},"Object.preventExtensions()")," \u65b9\u6cd5\u76f8\u4f3c"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"Reflect.preventExtensions(target)\n")),(0,n.kt)("h4",{id:"1-\u53c2\u6570\u63cf\u8ff0-11"},"1. \u53c2\u6570\u63cf\u8ff0\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"target\uff1a\u963b\u6b62\u6269\u5c55\u7684\u76ee\u6807\u5bf9\u8c61")),(0,n.kt)("h4",{id:"2-\u8fd4\u56de\u503c-11"},"2. \u8fd4\u56de\u503c\uff1a"),(0,n.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a Boolean \u503c\u8868\u660e\u76ee\u6807\u5bf9\u8c61\u662f\u5426\u6210\u529f\u88ab\u8bbe\u7f6e\u4e3a\u4e0d\u53ef\u6269\u5c55"),(0,n.kt)("h4",{id:"3-\u4ee3\u66ff\u65b9\u5f0f-11"},"3. \u4ee3\u66ff\u65b9\u5f0f\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"Object.preventExtensions(target)\n")),(0,n.kt)("h3",{id:"13-ownkeystarget"},"13. ",(0,n.kt)("inlineCode",{parentName:"h3"},"ownKeys(target)"),"\uff1a"),(0,n.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u7531\u76ee\u6807\u5bf9\u8c61\u81ea\u8eab\u7684\u5c5e\u6027\u952e\u7ec4\u6210\u7684\u6570\u7ec4"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"Reflect.ownKeys(target)\n")),(0,n.kt)("h4",{id:"1-\u53c2\u6570\u63cf\u8ff0-12"},"1. \u53c2\u6570\u63cf\u8ff0\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"target\uff1a\u83b7\u53d6\u81ea\u8eab\u5c5e\u6027\u952e\u7684\u76ee\u6807\u5bf9\u8c61")),(0,n.kt)("h4",{id:"2-\u8fd4\u56de\u503c-12"},"2. \u8fd4\u56de\u503c\uff1a"),(0,n.kt)("p",null,"\u7531\u76ee\u6807\u5bf9\u8c61\u7684\u81ea\u8eab\u5c5e\u6027\u952e\u7ec4\u6210\u7684 Array"),(0,n.kt)("h4",{id:"3-\u4ee3\u66ff\u65b9\u5f0f-12"},"3. \u4ee3\u66ff\u65b9\u5f0f\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"Object.keys(target)\n")))}s.isMDXComponent=!0}}]);