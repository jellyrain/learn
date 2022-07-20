"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8833],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return s}});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=n.createContext({}),k=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=k(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=k(r),s=l,g=u["".concat(p,".").concat(s)]||u[s]||c[s]||a;return r?n.createElement(g,o(o({ref:t},d),{},{components:r})):n.createElement(g,o({ref:t},d))}));function s(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var k=2;k<a;k++)o[k]=r[k];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3697:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return i},metadata:function(){return k},toc:function(){return c}});var n=r(83117),l=r(80102),a=(r(67294),r(3905)),o=["components"],i={sidebar_position:1},p=void 0,k={unversionedId:"web/JavaScript/\u4ee3\u7406\u548c\u53cd\u5c04/Proxy",id:"web/JavaScript/\u4ee3\u7406\u548c\u53cd\u5c04/Proxy",title:"Proxy",description:"Proxy \u53ef\u4ee5\u7406\u89e3\u6210\uff0c\u5728\u76ee\u6807\u5bf9\u8c61\u4e4b\u524d\u67b6\u8bbe\u4e00\u5c42\u201c\u62e6\u622a\u201d\uff0c\u5916\u754c\u5bf9\u8be5\u5bf9\u8c61\u7684\u8bbf\u95ee\uff0c\u90fd\u5fc5\u987b\u5148\u901a\u8fc7\u8fd9\u5c42\u62e6\u622a\uff0c\u56e0\u6b64\u63d0\u4f9b\u4e86\u4e00\u79cd\u673a\u5236\uff0c\u53ef\u4ee5\u5bf9\u5916\u754c\u7684\u8bbf\u95ee\u8fdb\u884c\u8fc7\u6ee4\u548c\u6539\u5199",source:"@site/docs\\1-web\\3-JavaScript\\13-\u4ee3\u7406\u548c\u53cd\u5c04\\Proxy.md",sourceDirName:"1-web/3-JavaScript/13-\u4ee3\u7406\u548c\u53cd\u5c04",slug:"/web/JavaScript/\u4ee3\u7406\u548c\u53cd\u5c04/Proxy",permalink:"/learn/web/JavaScript/\u4ee3\u7406\u548c\u53cd\u5c04/Proxy",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u7c7b",permalink:"/learn/web/JavaScript/\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b/\u7c7b"},next:{title:"Reflect",permalink:"/learn/web/JavaScript/\u4ee3\u7406\u548c\u53cd\u5c04/Reflect"}},d={},c=[{value:"1. \u521b\u5efa Proxy \u4ee3\u7406\u5bf9\u8c61\uff1a",id:"1-\u521b\u5efa-proxy-\u4ee3\u7406\u5bf9\u8c61",level:2},{value:"2. \u9759\u6001\u65b9\u6cd5\uff1a",id:"2-\u9759\u6001\u65b9\u6cd5",level:2},{value:"1. <code>revocable(target, handler)</code>\uff1a",id:"1-revocabletarget-handler",level:3},{value:"3. handler \u5bf9\u8c61\u7684\u65b9\u6cd5\uff1a",id:"3-handler-\u5bf9\u8c61\u7684\u65b9\u6cd5",level:2},{value:"1. <code>get(target, property, receiver)</code>\uff1a",id:"1-gettarget-property-receiver",level:3},{value:"1. \u53c2\u6570\u63cf\u8ff0\uff1a",id:"1-\u53c2\u6570\u63cf\u8ff0",level:4},{value:"2. \u62e6\u622a\u76ee\u6807\uff1a",id:"2-\u62e6\u622a\u76ee\u6807",level:4},{value:"3. \u8fd4\u56de\u503c\uff1a",id:"3-\u8fd4\u56de\u503c",level:4},{value:"2. <code>set(target, property, value, receiver)</code>\uff1a",id:"2-settarget-property-value-receiver",level:3},{value:"1. \u53c2\u6570\u63cf\u8ff0\uff1a",id:"1-\u53c2\u6570\u63cf\u8ff0-1",level:4},{value:"2. \u62e6\u622a\u76ee\u6807\uff1a",id:"2-\u62e6\u622a\u76ee\u6807-1",level:4},{value:"3. \u8fd4\u56de\u503c\uff1a",id:"3-\u8fd4\u56de\u503c-1",level:4},{value:"3. <code>apply(target, thisArg, argumentsList)</code>\uff1a",id:"3-applytarget-thisarg-argumentslist",level:3},{value:"1. \u53c2\u6570\u63cf\u8ff0\uff1a",id:"1-\u53c2\u6570\u63cf\u8ff0-2",level:4},{value:"2. \u62e6\u622a\u76ee\u6807\uff1a",id:"2-\u62e6\u622a\u76ee\u6807-2",level:4},{value:"3. \u8fd4\u56de\u503c\uff1a",id:"3-\u8fd4\u56de\u503c-2",level:4},{value:"4. <code>has(target, prop)</code>\uff1a",id:"4-hastarget-prop",level:3},{value:"1. \u53c2\u6570\u63cf\u8ff0\uff1a",id:"1-\u53c2\u6570\u63cf\u8ff0-3",level:4},{value:"2. \u62e6\u622a\u76ee\u6807\uff1a",id:"2-\u62e6\u622a\u76ee\u6807-3",level:4},{value:"3. \u8fd4\u56de\u503c\uff1a",id:"3-\u8fd4\u56de\u503c-3",level:4},{value:"5. <code>construct(target, argumentsList, newTarget)</code>\uff1a",id:"5-constructtarget-argumentslist-newtarget",level:3},{value:"1. \u53c2\u6570\u63cf\u8ff0\uff1a",id:"1-\u53c2\u6570\u63cf\u8ff0-4",level:4},{value:"2. \u62e6\u622a\u76ee\u6807\uff1a",id:"2-\u62e6\u622a\u76ee\u6807-4",level:4},{value:"3. \u8fd4\u56de\u503c\uff1a",id:"3-\u8fd4\u56de\u503c-4",level:4},{value:"6. <code>deleteProperty(target, property)</code>\uff1a",id:"6-deletepropertytarget-property",level:3},{value:"1. \u53c2\u6570\u63cf\u8ff0\uff1a",id:"1-\u53c2\u6570\u63cf\u8ff0-5",level:4},{value:"2. \u62e6\u622a\u76ee\u6807\uff1a",id:"2-\u62e6\u622a\u76ee\u6807-5",level:4},{value:"3. \u8fd4\u56de\u503c\uff1a",id:"3-\u8fd4\u56de\u503c-5",level:4},{value:"7. <code>defineProperty(target, property, descriptor)</code>\uff1a",id:"7-definepropertytarget-property-descriptor",level:3},{value:"1. \u53c2\u6570\u63cf\u8ff0\uff1a",id:"1-\u53c2\u6570\u63cf\u8ff0-6",level:4},{value:"2. \u62e6\u622a\u76ee\u6807\uff1a",id:"2-\u62e6\u622a\u76ee\u6807-6",level:4},{value:"3. \u8fd4\u56de\u503c\uff1a",id:"3-\u8fd4\u56de\u503c-6",level:4},{value:"8. <code>getOwnPropertyDescriptor(target, prop)</code>\uff1a",id:"8-getownpropertydescriptortarget-prop",level:3},{value:"1. \u53c2\u6570\u63cf\u8ff0\uff1a",id:"1-\u53c2\u6570\u63cf\u8ff0-7",level:4},{value:"2. \u62e6\u622a\u76ee\u6807\uff1a",id:"2-\u62e6\u622a\u76ee\u6807-7",level:4},{value:"3. \u8fd4\u56de\u503c\uff1a",id:"3-\u8fd4\u56de\u503c-7",level:4},{value:"9. <code>getPrototypeOf(target)</code>\uff1a",id:"9-getprototypeoftarget",level:3},{value:"1. \u53c2\u6570\u63cf\u8ff0\uff1a",id:"1-\u53c2\u6570\u63cf\u8ff0-8",level:4},{value:"2. \u62e6\u622a\u76ee\u6807\uff1a",id:"2-\u62e6\u622a\u76ee\u6807-8",level:4},{value:"3. \u8fd4\u56de\u503c\uff1a",id:"3-\u8fd4\u56de\u503c-8",level:4},{value:"10. <code>isExtensible(target)</code>\uff1a",id:"10-isextensibletarget",level:3},{value:"1. \u53c2\u6570\u63cf\u8ff0\uff1a",id:"1-\u53c2\u6570\u63cf\u8ff0-9",level:4},{value:"2. \u62e6\u622a\u76ee\u6807\uff1a",id:"2-\u62e6\u622a\u76ee\u6807-9",level:4},{value:"3. \u8fd4\u56de\u503c\uff1a",id:"3-\u8fd4\u56de\u503c-9",level:4},{value:"11. <code>ownKeys(target)</code>\uff1a",id:"11-ownkeystarget",level:3},{value:"1. \u53c2\u6570\u63cf\u8ff0\uff1a",id:"1-\u53c2\u6570\u63cf\u8ff0-10",level:4},{value:"2. \u62e6\u622a\u76ee\u6807\uff1a",id:"2-\u62e6\u622a\u76ee\u6807-10",level:4},{value:"3. \u8fd4\u56de\u503c\uff1a",id:"3-\u8fd4\u56de\u503c-10",level:4},{value:"12. <code>preventExtensions(target)</code>\uff1a",id:"12-preventextensionstarget",level:3},{value:"1. \u53c2\u6570\u63cf\u8ff0\uff1a",id:"1-\u53c2\u6570\u63cf\u8ff0-11",level:4},{value:"2. \u62e6\u622a\u76ee\u6807\uff1a",id:"2-\u62e6\u622a\u76ee\u6807-11",level:4},{value:"3. \u8fd4\u56de\u503c\uff1a",id:"3-\u8fd4\u56de\u503c-11",level:4},{value:"13. <code>setPrototypeOf(target\uff0c prototype)</code>\uff1a",id:"13-setprototypeoftarget-prototype",level:3},{value:"1. \u53c2\u6570\u63cf\u8ff0\uff1a",id:"1-\u53c2\u6570\u63cf\u8ff0-12",level:4},{value:"2. \u62e6\u622a\u76ee\u6807\uff1a",id:"2-\u62e6\u622a\u76ee\u6807-12",level:4},{value:"3. \u8fd4\u56de\u503c\uff1a",id:"3-\u8fd4\u56de\u503c-12",level:4},{value:"4. Proxy \u7279\u70b9\uff1a",id:"4-proxy-\u7279\u70b9",level:2},{value:"1. \u76ee\u6807\u5bf9\u8c61\u7684\u4efb\u610f\u5c5e\u6027\uff1a",id:"1-\u76ee\u6807\u5bf9\u8c61\u7684\u4efb\u610f\u5c5e\u6027",level:3},{value:"2. this \u95ee\u9898\uff1a",id:"2-this-\u95ee\u9898",level:3}],u={toc:c};function s(e){var t=e.components,r=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Proxy \u53ef\u4ee5\u7406\u89e3\u6210\uff0c\u5728\u76ee\u6807\u5bf9\u8c61\u4e4b\u524d\u67b6\u8bbe\u4e00\u5c42\u201c\u62e6\u622a\u201d\uff0c\u5916\u754c\u5bf9\u8be5\u5bf9\u8c61\u7684\u8bbf\u95ee\uff0c\u90fd\u5fc5\u987b\u5148\u901a\u8fc7\u8fd9\u5c42\u62e6\u622a\uff0c\u56e0\u6b64\u63d0\u4f9b\u4e86\u4e00\u79cd\u673a\u5236\uff0c\u53ef\u4ee5\u5bf9\u5916\u754c\u7684\u8bbf\u95ee\u8fdb\u884c\u8fc7\u6ee4\u548c\u6539\u5199"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u8bcd\u7684\u539f\u610f\u662f\u4ee3\u7406\uff0c\u7528\u5728\u8fd9\u91cc\u8868\u793a\u7531\u5b83\u6765\u201c\u4ee3\u7406\u201d\u67d0\u4e9b\u64cd\u4f5c\uff0c\u53ef\u4ee5\u8bd1\u4e3a\u201c\u4ee3\u7406\u5668\u201d"),(0,a.kt)("h2",{id:"1-\u521b\u5efa-proxy-\u4ee3\u7406\u5bf9\u8c61"},"1. \u521b\u5efa Proxy \u4ee3\u7406\u5bf9\u8c61\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"new Proxy(target, handler)\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"target\uff1a")),(0,a.kt)("p",null,"\u8981\u4f7f\u7528 Proxy \u5305\u88c5\u7684\u76ee\u6807\u5bf9\u8c61\uff08\u53ef\u4ee5\u662f\u4efb\u4f55\u7c7b\u578b\u7684\u5bf9\u8c61\uff0c\u5305\u62ec\u539f\u751f\u6570\u7ec4\uff0c\u51fd\u6570\uff0c\u751a\u81f3\u53e6\u4e00\u4e2a\u4ee3\u7406\uff09"),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"handler\uff1a")),(0,a.kt)("p",null,"\u4e00\u4e2a\u901a\u5e38\u4ee5\u51fd\u6570\u4f5c\u4e3a\u5c5e\u6027\u7684\u5bf9\u8c61\uff0c\u5404\u5c5e\u6027\u4e2d\u7684\u51fd\u6570\u5206\u522b\u5b9a\u4e49\u4e86\u5728\u6267\u884c\u5404\u79cd\u64cd\u4f5c\u65f6 \u4ee3\u7406 \u7684\u884c\u4e3a"),(0,a.kt)("h2",{id:"2-\u9759\u6001\u65b9\u6cd5"},"2. \u9759\u6001\u65b9\u6cd5\uff1a"),(0,a.kt)("h3",{id:"1-revocabletarget-handler"},"1. ",(0,a.kt)("inlineCode",{parentName:"h3"},"revocable(target, handler)"),"\uff1a"),(0,a.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u53ef\u64a4\u9500\u7684 Proxy \u5bf9\u8c61"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"Proxy.revocable(target, handler)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8be5\u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5176\u7ed3\u6784\u4e3a\uff1a ",(0,a.kt)("inlineCode",{parentName:"li"},'{"proxy": proxy, "revoke": revoke}'))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"proxy\uff1a")),(0,a.kt)("p",null,"\u8868\u793a\u65b0\u751f\u6210\u7684\u4ee3\u7406\u5bf9\u8c61\u672c\u8eab\uff0c\u548c\u7528\u4e00\u822c\u65b9\u5f0f new Proxy(target, handler) \u521b\u5efa\u7684\u4ee3\u7406\u5bf9\u8c61\u6ca1\u4ec0\u4e48\u4e0d\u540c\uff0c\u53ea\u662f\u5b83\u53ef\u4ee5\u88ab\u64a4\u9500\u6389"),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"revoke\uff1a")),(0,a.kt)("p",null,"\u64a4\u9500\u65b9\u6cd5\uff0c\u8c03\u7528\u7684\u65f6\u5019\u4e0d\u9700\u8981\u52a0\u4efb\u4f55\u53c2\u6570\uff0c\u5c31\u53ef\u4ee5\u64a4\u9500\u6389\u548c\u5b83\u4e00\u8d77\u751f\u6210\u7684\u90a3\u4e2a\u4ee3\u7406\u5bf9\u8c61"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4e00\u65e6\u67d0\u4e2a\u4ee3\u7406\u5bf9\u8c61\u88ab\u64a4\u9500\uff0c\u5b83\u5c06\u53d8\u5f97\u51e0\u4e4e\u5b8c\u5168\u4e0d\u53ef\u8c03\u7528\uff0c\u5728\u5b83\u8eab\u4e0a\u6267\u884c\u4efb\u4f55\u7684\u53ef\u4ee3\u7406\u64cd\u4f5c\u90fd\u4f1a\u629b\u51fa TypeError \u5f02\u5e38\uff08\u6ce8\u610f\uff0c\u53ef\u4ee3\u7406\u64cd\u4f5c\u4e00\u5171\u6709 14 \u79cd\uff0c\u6267\u884c\u8fd9 14 \u79cd\u64cd\u4f5c\u4ee5\u5916\u7684\u64cd\u4f5c\u4e0d\u4f1a\u629b\u51fa\u5f02\u5e38\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u4e00\u65e6\u88ab\u64a4\u9500\uff0c\u8fd9\u4e2a\u4ee3\u7406\u5bf9\u8c61\u4fbf\u4e0d\u53ef\u80fd\u88ab\u76f4\u63a5\u6062\u590d\u5230\u539f\u6765\u7684\u72b6\u6001\uff0c\u540c\u65f6\u548c\u5b83\u5173\u8054\u7684\u76ee\u6807\u5bf9\u8c61\u4ee5\u53ca\u5904\u7406\u5668\u5bf9\u8c61\u90fd\u6709\u53ef\u80fd\u88ab\u5783\u573e\u56de\u6536\u6389"),(0,a.kt)("li",{parentName:"ol"},"\u518d\u6b21\u8c03\u7528\u64a4\u9500\u65b9\u6cd5 ",(0,a.kt)("inlineCode",{parentName:"li"},"revoke()")," \u5219\u4e0d\u4f1a\u6709\u4efb\u4f55\u6548\u679c\uff0c\u4f46\u4e5f\u4e0d\u4f1a\u62a5")),(0,a.kt)("h2",{id:"3-handler-\u5bf9\u8c61\u7684\u65b9\u6cd5"},"3. handler \u5bf9\u8c61\u7684\u65b9\u6cd5\uff1a"),(0,a.kt)("h3",{id:"1-gettarget-property-receiver"},"1. ",(0,a.kt)("inlineCode",{parentName:"h3"},"get(target, property, receiver)"),"\uff1a"),(0,a.kt)("p",null,"\u7528\u4e8e\u62e6\u622a\u5bf9\u8c61\u7684 \u8bfb\u53d6\u5c5e\u6027 \u64cd\u4f5c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var p = new Proxy(target, {\n  get: function (target, property, receiver) {\n    return Reflect.get(target, propKey, receiver)\n  },\n})\n")),(0,a.kt)("h4",{id:"1-\u53c2\u6570\u63cf\u8ff0"},"1. \u53c2\u6570\u63cf\u8ff0\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"target\uff1a\u76ee\u6807\u5bf9\u8c61"),(0,a.kt)("li",{parentName:"ol"},"property\uff1a\u88ab\u83b7\u53d6\u7684\u5c5e\u6027\u540d"),(0,a.kt)("li",{parentName:"ol"},"receiver\uff1aProxy \u6216\u8005\u7ee7\u627f Proxy \u7684\u5bf9\u8c61")),(0,a.kt)("h4",{id:"2-\u62e6\u622a\u76ee\u6807"},"2. \u62e6\u622a\u76ee\u6807\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8bbf\u95ee\u5c5e\u6027\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"proxy[foo]")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"proxy.bar")),(0,a.kt)("li",{parentName:"ol"},"\u8bbf\u95ee\u539f\u578b\u94fe\u4e0a\u7684\u5c5e\u6027\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"Object.create(proxy)[foo]"),"\uff08get \u65b9\u6cd5\u53ef\u4ee5\u7ee7\u627f\uff09"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Reflect.get()"))),(0,a.kt)("h4",{id:"3-\u8fd4\u56de\u503c"},"3. \u8fd4\u56de\u503c\uff1a"),(0,a.kt)("p",null,"\u53ef\u4ee5\u8fd4\u56de\u4efb\u4f55\u503c"),(0,a.kt)("h3",{id:"2-settarget-property-value-receiver"},"2. ",(0,a.kt)("inlineCode",{parentName:"h3"},"set(target, property, value, receiver)"),"\uff1a"),(0,a.kt)("p",null,"\u7528\u4e8e\u62e6\u622a\u5bf9\u8c61\u7684 \u8bbe\u7f6e\u5c5e\u6027\u503c \u64cd\u4f5c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const p = new Proxy(target, {\n  set: function (target, property, value, receiver) {\n    return Reflect.set(target, propKey, value, receiver)\n  },\n})\n")),(0,a.kt)("h4",{id:"1-\u53c2\u6570\u63cf\u8ff0-1"},"1. \u53c2\u6570\u63cf\u8ff0\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"target\uff1a\u76ee\u6807\u5bf9\u8c61"),(0,a.kt)("li",{parentName:"ol"},"property\uff1a\u5c06\u88ab\u8bbe\u7f6e\u7684 \u5c5e\u6027\u540d \u6216 Symbol"),(0,a.kt)("li",{parentName:"ol"},"value\uff1a\u65b0\u5c5e\u6027\u503c"),(0,a.kt)("li",{parentName:"ol"},"receiver\uff1aProxy \u6216\u8005\u7ee7\u627f Proxy \u7684\u5bf9\u8c61")),(0,a.kt)("h4",{id:"2-\u62e6\u622a\u76ee\u6807-1"},"2. \u62e6\u622a\u76ee\u6807\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6307\u5b9a\u5c5e\u6027\u503c\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"proxy[foo] = bar")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"proxy.foo = bar")),(0,a.kt)("li",{parentName:"ol"},"\u6307\u5b9a\u7ee7\u627f\u8005\u7684\u5c5e\u6027\u503c\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"Object.create(proxy)[foo] = bar"),"\uff08set \u65b9\u6cd5\u53ef\u4ee5\u7ee7\u627f\uff09"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Reflect.set()"))),(0,a.kt)("h4",{id:"3-\u8fd4\u56de\u503c-1"},"3. \u8fd4\u56de\u503c\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8fd4\u56de true \u4ee3\u8868\u5c5e\u6027\u8bbe\u7f6e\u6210\u529f"),(0,a.kt)("li",{parentName:"ol"},"\u5728\u4e25\u683c\u6a21\u5f0f\u4e0b\uff0c\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"li"},"set()")," \u65b9\u6cd5\u8fd4\u56de false\uff0c\u90a3\u4e48\u4f1a\u629b\u51fa\u4e00\u4e2a TypeError \u5f02\u5e38")),(0,a.kt)("h3",{id:"3-applytarget-thisarg-argumentslist"},"3. ",(0,a.kt)("inlineCode",{parentName:"h3"},"apply(target, thisArg, argumentsList)"),"\uff1a"),(0,a.kt)("p",null,"\u7528\u4e8e\u62e6\u622a\u51fd\u6570\u7684\u8c03\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var p = new Proxy(target, {\n  apply: function (target, thisArg, argumentsList) {\n    return Reflect.apply(target, thisArg, argumentsList)\n  },\n})\n")),(0,a.kt)("h4",{id:"1-\u53c2\u6570\u63cf\u8ff0-2"},"1. \u53c2\u6570\u63cf\u8ff0\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"target\uff1a\u76ee\u6807\u5bf9\u8c61\uff08\u51fd\u6570\uff09"),(0,a.kt)("li",{parentName:"ol"},"thisArg\uff1a\u88ab\u8c03\u7528\u65f6\u7684\u4e0a\u4e0b\u6587\u5bf9\u8c61"),(0,a.kt)("li",{parentName:"ol"},"argumentsList\uff1a\u88ab\u8c03\u7528\u65f6\u7684\u53c2\u6570\u6570\u7ec4")),(0,a.kt)("h4",{id:"2-\u62e6\u622a\u76ee\u6807-2"},"2. \u62e6\u622a\u76ee\u6807\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"proxy(...args)")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Function.prototype.apply()")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"Function.prototype.call()")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Reflect.apply()"))),(0,a.kt)("h4",{id:"3-\u8fd4\u56de\u503c-2"},"3. \u8fd4\u56de\u503c\uff1a"),(0,a.kt)("p",null,"\u53ef\u4ee5\u8fd4\u56de\u4efb\u4f55\u503c"),(0,a.kt)("h3",{id:"4-hastarget-prop"},"4. ",(0,a.kt)("inlineCode",{parentName:"h3"},"has(target, prop)"),"\uff1a"),(0,a.kt)("p",null,"\u662f\u9488\u5bf9 in \u64cd\u4f5c\u7b26\u7684\u4ee3\u7406\u65b9\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var p = new Proxy(target, {\n  has: function (target, prop) {\n    return Reflect.has(target, prop)\n  },\n})\n")),(0,a.kt)("h4",{id:"1-\u53c2\u6570\u63cf\u8ff0-3"},"1. \u53c2\u6570\u63cf\u8ff0\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"target\uff1a\u76ee\u6807\u5bf9\u8c61"),(0,a.kt)("li",{parentName:"ol"},"prop\uff1a\u9700\u8981\u68c0\u67e5\u662f\u5426\u5b58\u5728\u7684\u5c5e\u6027")),(0,a.kt)("h4",{id:"2-\u62e6\u622a\u76ee\u6807-3"},"2. \u62e6\u622a\u76ee\u6807\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5c5e\u6027\u67e5\u8be2\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"foo in proxy")),(0,a.kt)("li",{parentName:"ol"},"\u7ee7\u627f\u5c5e\u6027\u67e5\u8be2\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"foo in Object.create(proxy)")),(0,a.kt)("li",{parentName:"ol"},"with \u68c0\u67e5: ",(0,a.kt)("inlineCode",{parentName:"li"},"with(proxy) { (foo); }")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Reflect.has()"))),(0,a.kt)("h4",{id:"3-\u8fd4\u56de\u503c-3"},"3. \u8fd4\u56de\u503c\uff1a"),(0,a.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a boolean \u5c5e\u6027\u7684\u503c"),(0,a.kt)("h3",{id:"5-constructtarget-argumentslist-newtarget"},"5. ",(0,a.kt)("inlineCode",{parentName:"h3"},"construct(target, argumentsList, newTarget)"),"\uff1a"),(0,a.kt)("p",null,"\u7528\u4e8e\u62e6\u622a new \u64cd\u4f5c\u7b26"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var p = new Proxy(target, {\n  construct: function (target, argumentsList, newTarget) {\n    return Reflect.construct(target, argumentsList, newTarget)\n  },\n})\n")),(0,a.kt)("h4",{id:"1-\u53c2\u6570\u63cf\u8ff0-4"},"1. \u53c2\u6570\u63cf\u8ff0\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"target\uff1a\u76ee\u6807\u5bf9\u8c61"),(0,a.kt)("li",{parentName:"ol"},"argumentsList\uff1aconstructor \u7684\u53c2\u6570\u5217\u8868"),(0,a.kt)("li",{parentName:"ol"},"newTarget\uff1a\u6700\u521d\u88ab\u8c03\u7528\u7684\u6784\u9020\u51fd\u6570")),(0,a.kt)("h4",{id:"2-\u62e6\u622a\u76ee\u6807-4"},"2. \u62e6\u622a\u76ee\u6807\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"new proxy(...args)")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Reflect.construct()"))),(0,a.kt)("h4",{id:"3-\u8fd4\u56de\u503c-4"},"3. \u8fd4\u56de\u503c\uff1a"),(0,a.kt)("p",null,"\u5fc5\u987b\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61"),(0,a.kt)("h3",{id:"6-deletepropertytarget-property"},"6. ",(0,a.kt)("inlineCode",{parentName:"h3"},"deleteProperty(target, property)"),"\uff1a"),(0,a.kt)("p",null,"\u7528\u4e8e\u62e6\u622a\u5bf9\u8c61\u5c5e\u6027\u7684 delete \u64cd\u4f5c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var p = new Proxy(target, {\n  deleteProperty: function (target, property) {\n    return Reflect.deleteProperty(target, property)\n  },\n})\n")),(0,a.kt)("h4",{id:"1-\u53c2\u6570\u63cf\u8ff0-5"},"1. \u53c2\u6570\u63cf\u8ff0\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"target\uff1a\u76ee\u6807\u5bf9\u8c61"),(0,a.kt)("li",{parentName:"ol"},"property\uff1a\u5f85\u5220\u9664\u7684\u5c5e\u6027\u540d")),(0,a.kt)("h4",{id:"2-\u62e6\u622a\u76ee\u6807-5"},"2. \u62e6\u622a\u76ee\u6807\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5220\u9664\u5c5e\u6027\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"delete proxy[foo]")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"delete proxy.foo")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Reflect.deleteProperty()"))),(0,a.kt)("h4",{id:"3-\u8fd4\u56de\u503c-5"},"3. \u8fd4\u56de\u503c\uff1a"),(0,a.kt)("p",null,"\u5fc5\u987b\u8fd4\u56de\u4e00\u4e2a Boolean \u7c7b\u578b\u7684\u503c\uff0c\u8868\u793a\u4e86\u8be5\u5c5e\u6027\u662f\u5426\u88ab\u6210\u529f\u5220\u9664"),(0,a.kt)("h3",{id:"7-definepropertytarget-property-descriptor"},"7. ",(0,a.kt)("inlineCode",{parentName:"h3"},"defineProperty(target, property, descriptor)"),"\uff1a"),(0,a.kt)("p",null,"\u7528\u4e8e\u62e6\u622a\u5bf9\u8c61\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Object.defineProperty()")," \u64cd\u4f5c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var p = new Proxy(target, {\n  defineProperty: function (target, property, descriptor) {\n    return Reflect.defineProperty(target, property, descriptor)\n  },\n})\n")),(0,a.kt)("h4",{id:"1-\u53c2\u6570\u63cf\u8ff0-6"},"1. \u53c2\u6570\u63cf\u8ff0\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"target\uff1a\u76ee\u6807\u5bf9\u8c61"),(0,a.kt)("li",{parentName:"ol"},"property\uff1a\u5f85\u68c0\u7d22\u5176\u63cf\u8ff0\u7684\u5c5e\u6027\u540d"),(0,a.kt)("li",{parentName:"ol"},"descriptor\uff1a\u5f85\u5b9a\u4e49\u6216\u4fee\u6539\u7684\u5c5e\u6027\u7684\u63cf\u8ff0\u7b26")),(0,a.kt)("h4",{id:"2-\u62e6\u622a\u76ee\u6807-6"},"2. \u62e6\u622a\u76ee\u6807\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Object.defineProperty()")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Reflect.defineProperty()"))),(0,a.kt)("h4",{id:"3-\u8fd4\u56de\u503c-6"},"3. \u8fd4\u56de\u503c\uff1a"),(0,a.kt)("p",null,"\u5fc5\u987b\u4ee5\u4e00\u4e2a Boolean \u8fd4\u56de\uff0c\u8868\u793a\u5b9a\u4e49\u8be5\u5c5e\u6027\u7684\u64cd\u4f5c\u6210\u529f\u4e0e\u5426"),(0,a.kt)("h3",{id:"8-getownpropertydescriptortarget-prop"},"8. ",(0,a.kt)("inlineCode",{parentName:"h3"},"getOwnPropertyDescriptor(target, prop)"),"\uff1a"),(0,a.kt)("p",null,"\u7528\u4e8e\u62e6\u622a\u5bf9\u8c61\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Object.defineProperty()")," \u64cd\u4f5c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var p = new Proxy(target, {\n  getOwnPropertyDescriptor: function (target, prop) {\n    return Reflect.getOwnPropertyDescriptor(target, prop)\n  },\n})\n")),(0,a.kt)("h4",{id:"1-\u53c2\u6570\u63cf\u8ff0-7"},"1. \u53c2\u6570\u63cf\u8ff0\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"target\uff1a\u76ee\u6807\u5bf9\u8c61"),(0,a.kt)("li",{parentName:"ol"},"prop\uff1a\u8fd4\u56de\u5c5e\u6027\u540d\u79f0\u7684\u63cf\u8ff0")),(0,a.kt)("h4",{id:"2-\u62e6\u622a\u76ee\u6807-7"},"2. \u62e6\u622a\u76ee\u6807\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Object.getOwnPropertyDescriptor()")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Reflect.getOwnPropertyDescriptor()"))),(0,a.kt)("h4",{id:"3-\u8fd4\u56de\u503c-7"},"3. \u8fd4\u56de\u503c\uff1a"),(0,a.kt)("p",null,"\u5fc5\u987b\u8fd4\u56de\u4e00\u4e2a object \u6216 undefined"),(0,a.kt)("h3",{id:"9-getprototypeoftarget"},"9. ",(0,a.kt)("inlineCode",{parentName:"h3"},"getPrototypeOf(target)"),"\uff1a"),(0,a.kt)("p",null,"\u7528\u4e8e\u62e6\u622a\u5bf9\u8c61\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Object.defineProperty()")," \u64cd\u4f5c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var p = new Proxy(target, {\n  getPrototypeOf: function (target) {\n    return Reflect.getPrototypeOf(target)\n  },\n})\n")),(0,a.kt)("h4",{id:"1-\u53c2\u6570\u63cf\u8ff0-8"},"1. \u53c2\u6570\u63cf\u8ff0\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"target\uff1a\u88ab\u4ee3\u7406\u7684\u76ee\u6807\u5bf9\u8c61")),(0,a.kt)("h4",{id:"2-\u62e6\u622a\u76ee\u6807-8"},"2. \u62e6\u622a\u76ee\u6807\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Object.getPrototypeOf()")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Reflect.getPrototypeOf()")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"__proto__")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Object.prototype.isPrototypeOf()")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"instanceof"))),(0,a.kt)("h4",{id:"3-\u8fd4\u56de\u503c-8"},"3. \u8fd4\u56de\u503c\uff1a"),(0,a.kt)("p",null,"\u5fc5\u987b\u662f\u4e00\u4e2a object \u6216\u8005 null"),(0,a.kt)("h3",{id:"10-isextensibletarget"},"10. ",(0,a.kt)("inlineCode",{parentName:"h3"},"isExtensible(target)"),"\uff1a"),(0,a.kt)("p",null,"\u7528\u4e8e\u62e6\u622a\u5bf9\u8c61\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Object.isExtensible()")," \u64cd\u4f5c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var p = new Proxy(target, {\n  isExtensible: function (target) {\n    return Reflect.isExtensible(target)\n  },\n})\n")),(0,a.kt)("h4",{id:"1-\u53c2\u6570\u63cf\u8ff0-9"},"1. \u53c2\u6570\u63cf\u8ff0\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"target\uff1a\u76ee\u6807\u5bf9\u8c61")),(0,a.kt)("h4",{id:"2-\u62e6\u622a\u76ee\u6807-9"},"2. \u62e6\u622a\u76ee\u6807\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Object.isExtensible()")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Reflect.isExtensible()"))),(0,a.kt)("h4",{id:"3-\u8fd4\u56de\u503c-9"},"3. \u8fd4\u56de\u503c\uff1a"),(0,a.kt)("p",null,"\u5fc5\u987b\u8fd4\u56de\u4e00\u4e2a Boolean \u503c\u6216\u53ef\u8f6c\u6362\u6210 Boolean \u7684\u503c"),(0,a.kt)("h3",{id:"11-ownkeystarget"},"11. ",(0,a.kt)("inlineCode",{parentName:"h3"},"ownKeys(target)"),"\uff1a"),(0,a.kt)("p",null,"\u7528\u4e8e\u62e6\u622a\u5bf9\u8c61\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Object.getOwnPropertyNames()")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"Object.getOwnPropertySymbols()")," \u64cd\u4f5c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var p = new Proxy(target, {\n  ownKeys: function (target) {\n    return Reflect.ownKeys(target)\n  },\n})\n")),(0,a.kt)("h4",{id:"1-\u53c2\u6570\u63cf\u8ff0-10"},"1. \u53c2\u6570\u63cf\u8ff0\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"target\uff1a\u76ee\u6807\u5bf9\u8c61")),(0,a.kt)("h4",{id:"2-\u62e6\u622a\u76ee\u6807-10"},"2. \u62e6\u622a\u76ee\u6807\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Object.getOwnPropertyNames()")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Object.getOwnPropertySymbols()")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Object.keys()")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Reflect.ownKeys()"))),(0,a.kt)("h4",{id:"3-\u8fd4\u56de\u503c-10"},"3. \u8fd4\u56de\u503c\uff1a"),(0,a.kt)("p",null,"\u5fc5\u987b\u8fd4\u56de\u4e00\u4e2a\u53ef\u679a\u4e3e\u5bf9\u8c61"),(0,a.kt)("h3",{id:"12-preventextensionstarget"},"12. ",(0,a.kt)("inlineCode",{parentName:"h3"},"preventExtensions(target)"),"\uff1a"),(0,a.kt)("p",null,"\u7528\u4e8e\u62e6\u622a\u5bf9\u8c61\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Object.preventExtensions()")," \u64cd\u4f5c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var p = new Proxy(target, {\n  preventExtensions: function (target) {\n    return Reflect.preventExtensions(target)\n  },\n})\n")),(0,a.kt)("h4",{id:"1-\u53c2\u6570\u63cf\u8ff0-11"},"1. \u53c2\u6570\u63cf\u8ff0\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"target\uff1a\u76ee\u6807\u5bf9\u8c61")),(0,a.kt)("h4",{id:"2-\u62e6\u622a\u76ee\u6807-11"},"2. \u62e6\u622a\u76ee\u6807\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Object.preventExtensions()")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Reflect.preventExtensions()"))),(0,a.kt)("h4",{id:"3-\u8fd4\u56de\u503c-11"},"3. \u8fd4\u56de\u503c\uff1a"),(0,a.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c"),(0,a.kt)("h3",{id:"13-setprototypeoftarget-prototype"},"13. ",(0,a.kt)("inlineCode",{parentName:"h3"},"setPrototypeOf(target\uff0c prototype)"),"\uff1a"),(0,a.kt)("p",null,"\u7528\u4e8e\u62e6\u622a\u5bf9\u8c61\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Object.setPrototypeOf()")," \u64cd\u4f5c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var p = new Proxy(target, {\n  setPrototypeOf: function (target, prototype) {\n    return Reflect.setPrototypeOf(target\uff0c prototype)\n  },\n})\n")),(0,a.kt)("h4",{id:"1-\u53c2\u6570\u63cf\u8ff0-12"},"1. \u53c2\u6570\u63cf\u8ff0\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"target\uff1a\u76ee\u6807\u5bf9\u8c61"),(0,a.kt)("li",{parentName:"ol"},"prototype\uff1a\u5bf9\u8c61\u65b0\u539f\u578b \u6216\u4e3a null")),(0,a.kt)("h4",{id:"2-\u62e6\u622a\u76ee\u6807-12"},"2. \u62e6\u622a\u76ee\u6807\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Object.setPrototypeOf()")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Reflect.setPrototypeOf()"))),(0,a.kt)("h4",{id:"3-\u8fd4\u56de\u503c-12"},"3. \u8fd4\u56de\u503c\uff1a"),(0,a.kt)("p",null,"\u5982\u679c\u6210\u529f\u4fee\u6539\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"[[Prototype]]"),", setPrototypeOf \u65b9\u6cd5\u8fd4\u56de true,\u5426\u5219\u8fd4\u56de false"),(0,a.kt)("h2",{id:"4-proxy-\u7279\u70b9"},"4. Proxy \u7279\u70b9\uff1a"),(0,a.kt)("h3",{id:"1-\u76ee\u6807\u5bf9\u8c61\u7684\u4efb\u610f\u5c5e\u6027"},"1. \u76ee\u6807\u5bf9\u8c61\u7684\u4efb\u610f\u5c5e\u6027\uff1a"),(0,a.kt)("p",null,"Proxy \u5bf9\u8c61\u53ef\u4ee5\u62e6\u622a\u76ee\u6807\u5bf9\u8c61\u7684\u4efb\u610f\u5c5e\u6027\uff0c\u63a8\u8350\u914d\u5408\u65b0\u7684 Reflect \u5bf9\u8c61 API \u4f7f\u7528"),(0,a.kt)("h3",{id:"2-this-\u95ee\u9898"},"2. this \u95ee\u9898\uff1a"),(0,a.kt)("p",null,"\u867d\u7136 Proxy \u53ef\u4ee5\u4ee3\u7406\u9488\u5bf9\u76ee\u6807\u5bf9\u8c61\u7684\u8bbf\u95ee\uff0c\u4f46\u5b83\u4e0d\u662f\u76ee\u6807\u5bf9\u8c61\u7684\u900f\u660e\u4ee3\u7406\uff0c\u5373\u4e0d\u505a\u4efb\u4f55\u62e6\u622a\u7684\u60c5\u51b5\u4e0b\uff0c\u4e5f\u65e0\u6cd5\u4fdd\u8bc1\u4e0e\u76ee\u6807\u5bf9\u8c61\u7684\u884c\u4e3a\u4e00\u81f4"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4e3b\u8981\u539f\u56e0\u5c31\u662f\u5728 Proxy \u4ee3\u7406\u7684\u60c5\u51b5\u4e0b\uff0c\u76ee\u6807\u5bf9\u8c61\u5185\u90e8\u7684 this \u5173\u952e\u5b57\u4f1a\u6307\u5411 Proxy \u4ee3\u7406")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const target = {\n  m: function () {\n    console.log(this === proxy)\n  },\n}\nconst handler = {}\n\nconst proxy = new Proxy(target, handler)\n\ntarget.m() // false\nproxy.m() // true\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u6709\u4e9b\u539f\u751f\u5bf9\u8c61\u7684\u5185\u90e8\u5c5e\u6027\uff0c\u53ea\u6709\u901a\u8fc7\u6b63\u786e\u7684 this \u624d\u80fd\u62ff\u5230\uff0c\u6240\u4ee5 Proxy \u4e5f\u65e0\u6cd5\u4ee3\u7406\u8fd9\u4e9b\u539f\u751f\u5bf9\u8c61\u7684\u5c5e\u6027")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const target = new Date()\nconst handler = {}\nconst proxy = new Proxy(target, handler)\n\nproxy.getDate()\n// TypeError: this is not a Date object.\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Proxy \u62e6\u622a\u51fd\u6570\u5185\u90e8\u7684 this\uff0c\u6307\u5411\u7684\u662f handler \u5bf9\u8c61")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const handler = {\n  get: function (target, key, receiver) {\n    console.log(this === handler)\n    return 'Hello, ' + key\n  },\n  set: function (target, key, value) {\n    console.log(this === handler)\n    target[key] = value\n    return true\n  },\n}\n\nconst proxy = new Proxy({}, handler)\n\nproxy.foo\n// true\n// Hello, foo\n\nproxy.foo = 1\n// true\n")))}s.isMDXComponent=!0}}]);