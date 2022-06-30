"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5158],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(r),d=n,m=s["".concat(p,".").concat(d)]||s[d]||k[d]||l;return r?a.createElement(m,o(o({ref:t},c),{},{components:r})):a.createElement(m,o({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},95100:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return k}});var a=r(83117),n=r(80102),l=(r(67294),r(3905)),o=["components"],i={sidebar_position:1},p=void 0,u={unversionedId:"web/JavaScript/\u4ee3\u7406\u548c\u53cd\u5c04/Proxy",id:"web/JavaScript/\u4ee3\u7406\u548c\u53cd\u5c04/Proxy",title:"Proxy",description:"Proxy \u53ef\u4ee5\u7406\u89e3\u6210\uff0c\u5728\u76ee\u6807\u5bf9\u8c61\u4e4b\u524d\u67b6\u8bbe\u4e00\u5c42\u201c\u62e6\u622a\u201d\uff0c\u5916\u754c\u5bf9\u8be5\u5bf9\u8c61\u7684\u8bbf\u95ee\uff0c\u90fd\u5fc5\u987b\u5148\u901a\u8fc7\u8fd9\u5c42\u62e6\u622a\uff0c\u56e0\u6b64\u63d0\u4f9b\u4e86\u4e00\u79cd\u673a\u5236\uff0c\u53ef\u4ee5\u5bf9\u5916\u754c\u7684\u8bbf\u95ee\u8fdb\u884c\u8fc7\u6ee4\u548c\u6539\u5199",source:"@site/docs\\web\\3-JavaScript\\13-\u4ee3\u7406\u548c\u53cd\u5c04\\Proxy.md",sourceDirName:"web/3-JavaScript/13-\u4ee3\u7406\u548c\u53cd\u5c04",slug:"/web/JavaScript/\u4ee3\u7406\u548c\u53cd\u5c04/Proxy",permalink:"/learn/web/JavaScript/\u4ee3\u7406\u548c\u53cd\u5c04/Proxy",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u7c7b",permalink:"/learn/web/JavaScript/\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b/\u7c7b"},next:{title:"\u5b57\u4f53",permalink:"/learn/web/\u7f51\u9875\u8bbe\u8ba1\u6307\u5357/\u5b57\u4f53"}},c={},k=[{value:"1. \u521b\u5efa Proxy \u4ee3\u7406\u5bf9\u8c61\uff1a",id:"1-\u521b\u5efa-proxy-\u4ee3\u7406\u5bf9\u8c61",level:2},{value:"2. \u9759\u6001\u65b9\u6cd5\uff1a",id:"2-\u9759\u6001\u65b9\u6cd5",level:2},{value:"1. <code>revocable(target, handler)</code>\uff1a",id:"1-revocabletarget-handler",level:3},{value:"3. handler \u5bf9\u8c61\u7684\u65b9\u6cd5\uff1a",id:"3-handler-\u5bf9\u8c61\u7684\u65b9\u6cd5",level:2},{value:"1. <code>get(target, propKey, receiver)</code>\uff1a",id:"1-gettarget-propkey-receiver",level:3},{value:"1. \u53c2\u6570\u63cf\u8ff0\uff1a",id:"1-\u53c2\u6570\u63cf\u8ff0",level:4},{value:"2. \u62e6\u622a\u76ee\u6807\uff1a",id:"2-\u62e6\u622a\u76ee\u6807",level:4},{value:"3. \u8fd4\u56de\u503c\uff1a",id:"3-\u8fd4\u56de\u503c",level:4},{value:"2. <code>set(target, property, value, receiver)</code>\uff1a",id:"2-settarget-property-value-receiver",level:3},{value:"1. \u53c2\u6570\u63cf\u8ff0\uff1a",id:"1-\u53c2\u6570\u63cf\u8ff0-1",level:4},{value:"2. \u62e6\u622a\u76ee\u6807\uff1a",id:"2-\u62e6\u622a\u76ee\u6807-1",level:4},{value:"3. \u8fd4\u56de\u503c\uff1a",id:"3-\u8fd4\u56de\u503c-1",level:4},{value:"3. <code>apply(target, thisArg, argumentsList)</code>\uff1a",id:"3-applytarget-thisarg-argumentslist",level:3},{value:"1. \u53c2\u6570\u63cf\u8ff0\uff1a",id:"1-\u53c2\u6570\u63cf\u8ff0-2",level:4},{value:"2. \u62e6\u622a\u76ee\u6807\uff1a",id:"2-\u62e6\u622a\u76ee\u6807-2",level:4},{value:"3. \u8fd4\u56de\u503c\uff1a",id:"3-\u8fd4\u56de\u503c-2",level:4},{value:"4. <code>has(target, prop)</code>\uff1a",id:"4-hastarget-prop",level:3},{value:"1. \u53c2\u6570\u63cf\u8ff0\uff1a",id:"1-\u53c2\u6570\u63cf\u8ff0-3",level:4},{value:"2. \u62e6\u622a\u76ee\u6807\uff1a",id:"2-\u62e6\u622a\u76ee\u6807-3",level:4},{value:"3. \u8fd4\u56de\u503c\uff1a",id:"3-\u8fd4\u56de\u503c-3",level:4},{value:"5. <code>construct(target, argumentsList, newTarget)</code>\uff1a",id:"5-constructtarget-argumentslist-newtarget",level:3},{value:"1. \u53c2\u6570\u63cf\u8ff0\uff1a",id:"1-\u53c2\u6570\u63cf\u8ff0-4",level:4},{value:"2. \u62e6\u622a\u76ee\u6807\uff1a",id:"2-\u62e6\u622a\u76ee\u6807-4",level:4},{value:"3. \u8fd4\u56de\u503c\uff1a",id:"3-\u8fd4\u56de\u503c-4",level:4}],s={toc:k};function d(e){var t=e.components,r=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Proxy \u53ef\u4ee5\u7406\u89e3\u6210\uff0c\u5728\u76ee\u6807\u5bf9\u8c61\u4e4b\u524d\u67b6\u8bbe\u4e00\u5c42\u201c\u62e6\u622a\u201d\uff0c\u5916\u754c\u5bf9\u8be5\u5bf9\u8c61\u7684\u8bbf\u95ee\uff0c\u90fd\u5fc5\u987b\u5148\u901a\u8fc7\u8fd9\u5c42\u62e6\u622a\uff0c\u56e0\u6b64\u63d0\u4f9b\u4e86\u4e00\u79cd\u673a\u5236\uff0c\u53ef\u4ee5\u5bf9\u5916\u754c\u7684\u8bbf\u95ee\u8fdb\u884c\u8fc7\u6ee4\u548c\u6539\u5199"),(0,l.kt)("p",null,"\u8fd9\u4e2a\u8bcd\u7684\u539f\u610f\u662f\u4ee3\u7406\uff0c\u7528\u5728\u8fd9\u91cc\u8868\u793a\u7531\u5b83\u6765\u201c\u4ee3\u7406\u201d\u67d0\u4e9b\u64cd\u4f5c\uff0c\u53ef\u4ee5\u8bd1\u4e3a\u201c\u4ee3\u7406\u5668\u201d"),(0,l.kt)("h2",{id:"1-\u521b\u5efa-proxy-\u4ee3\u7406\u5bf9\u8c61"},"1. \u521b\u5efa Proxy \u4ee3\u7406\u5bf9\u8c61\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"new Proxy(target, handler)\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"target\uff1a")),(0,l.kt)("p",null,"\u8981\u4f7f\u7528 Proxy \u5305\u88c5\u7684\u76ee\u6807\u5bf9\u8c61\uff08\u53ef\u4ee5\u662f\u4efb\u4f55\u7c7b\u578b\u7684\u5bf9\u8c61\uff0c\u5305\u62ec\u539f\u751f\u6570\u7ec4\uff0c\u51fd\u6570\uff0c\u751a\u81f3\u53e6\u4e00\u4e2a\u4ee3\u7406\uff09"),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"handler\uff1a")),(0,l.kt)("p",null,"\u4e00\u4e2a\u901a\u5e38\u4ee5\u51fd\u6570\u4f5c\u4e3a\u5c5e\u6027\u7684\u5bf9\u8c61\uff0c\u5404\u5c5e\u6027\u4e2d\u7684\u51fd\u6570\u5206\u522b\u5b9a\u4e49\u4e86\u5728\u6267\u884c\u5404\u79cd\u64cd\u4f5c\u65f6 \u4ee3\u7406 \u7684\u884c\u4e3a"),(0,l.kt)("h2",{id:"2-\u9759\u6001\u65b9\u6cd5"},"2. \u9759\u6001\u65b9\u6cd5\uff1a"),(0,l.kt)("h3",{id:"1-revocabletarget-handler"},"1. ",(0,l.kt)("inlineCode",{parentName:"h3"},"revocable(target, handler)"),"\uff1a"),(0,l.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u53ef\u64a4\u9500\u7684 Proxy \u5bf9\u8c61"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"Proxy.revocable(target, handler)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8be5\u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5176\u7ed3\u6784\u4e3a\uff1a ",(0,l.kt)("inlineCode",{parentName:"li"},'{"proxy": proxy, "revoke": revoke}'))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"proxy\uff1a")),(0,l.kt)("p",null,"\u8868\u793a\u65b0\u751f\u6210\u7684\u4ee3\u7406\u5bf9\u8c61\u672c\u8eab\uff0c\u548c\u7528\u4e00\u822c\u65b9\u5f0f new Proxy(target, handler) \u521b\u5efa\u7684\u4ee3\u7406\u5bf9\u8c61\u6ca1\u4ec0\u4e48\u4e0d\u540c\uff0c\u53ea\u662f\u5b83\u53ef\u4ee5\u88ab\u64a4\u9500\u6389"),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"revoke\uff1a")),(0,l.kt)("p",null,"\u64a4\u9500\u65b9\u6cd5\uff0c\u8c03\u7528\u7684\u65f6\u5019\u4e0d\u9700\u8981\u52a0\u4efb\u4f55\u53c2\u6570\uff0c\u5c31\u53ef\u4ee5\u64a4\u9500\u6389\u548c\u5b83\u4e00\u8d77\u751f\u6210\u7684\u90a3\u4e2a\u4ee3\u7406\u5bf9\u8c61"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4e00\u65e6\u67d0\u4e2a\u4ee3\u7406\u5bf9\u8c61\u88ab\u64a4\u9500\uff0c\u5b83\u5c06\u53d8\u5f97\u51e0\u4e4e\u5b8c\u5168\u4e0d\u53ef\u8c03\u7528\uff0c\u5728\u5b83\u8eab\u4e0a\u6267\u884c\u4efb\u4f55\u7684\u53ef\u4ee3\u7406\u64cd\u4f5c\u90fd\u4f1a\u629b\u51fa TypeError \u5f02\u5e38\uff08\u6ce8\u610f\uff0c\u53ef\u4ee3\u7406\u64cd\u4f5c\u4e00\u5171\u6709 14 \u79cd\uff0c\u6267\u884c\u8fd9 14 \u79cd\u64cd\u4f5c\u4ee5\u5916\u7684\u64cd\u4f5c\u4e0d\u4f1a\u629b\u51fa\u5f02\u5e38\uff09"),(0,l.kt)("li",{parentName:"ol"},"\u4e00\u65e6\u88ab\u64a4\u9500\uff0c\u8fd9\u4e2a\u4ee3\u7406\u5bf9\u8c61\u4fbf\u4e0d\u53ef\u80fd\u88ab\u76f4\u63a5\u6062\u590d\u5230\u539f\u6765\u7684\u72b6\u6001\uff0c\u540c\u65f6\u548c\u5b83\u5173\u8054\u7684\u76ee\u6807\u5bf9\u8c61\u4ee5\u53ca\u5904\u7406\u5668\u5bf9\u8c61\u90fd\u6709\u53ef\u80fd\u88ab\u5783\u573e\u56de\u6536\u6389"),(0,l.kt)("li",{parentName:"ol"},"\u518d\u6b21\u8c03\u7528\u64a4\u9500\u65b9\u6cd5 ",(0,l.kt)("inlineCode",{parentName:"li"},"revoke()")," \u5219\u4e0d\u4f1a\u6709\u4efb\u4f55\u6548\u679c\uff0c\u4f46\u4e5f\u4e0d\u4f1a\u62a5")),(0,l.kt)("h2",{id:"3-handler-\u5bf9\u8c61\u7684\u65b9\u6cd5"},"3. handler \u5bf9\u8c61\u7684\u65b9\u6cd5\uff1a"),(0,l.kt)("h3",{id:"1-gettarget-propkey-receiver"},"1. ",(0,l.kt)("inlineCode",{parentName:"h3"},"get(target, propKey, receiver)"),"\uff1a"),(0,l.kt)("p",null,"\u7528\u4e8e\u62e6\u622a\u5bf9\u8c61\u7684 \u8bfb\u53d6\u5c5e\u6027 \u64cd\u4f5c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var p = new Proxy(target, {\n  get: function (target, property, receiver) {\n    return Reflect.get(target, propKey, receiver)\n  },\n})\n")),(0,l.kt)("h4",{id:"1-\u53c2\u6570\u63cf\u8ff0"},"1. \u53c2\u6570\u63cf\u8ff0\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"target\uff1a\u76ee\u6807\u5bf9\u8c61"),(0,l.kt)("li",{parentName:"ol"},"property\uff1a\u88ab\u83b7\u53d6\u7684\u5c5e\u6027\u540d"),(0,l.kt)("li",{parentName:"ol"},"receiver\uff1aProxy \u6216\u8005\u7ee7\u627f Proxy \u7684\u5bf9\u8c61")),(0,l.kt)("h4",{id:"2-\u62e6\u622a\u76ee\u6807"},"2. \u62e6\u622a\u76ee\u6807\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u8bbf\u95ee\u5c5e\u6027\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"proxy[foo]")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"proxy.bar")),(0,l.kt)("li",{parentName:"ol"},"\u8bbf\u95ee\u539f\u578b\u94fe\u4e0a\u7684\u5c5e\u6027\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"Object.create(proxy)[foo]"),"\uff08get \u65b9\u6cd5\u53ef\u4ee5\u7ee7\u627f\uff09"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"Reflect.get()"))),(0,l.kt)("h4",{id:"3-\u8fd4\u56de\u503c"},"3. \u8fd4\u56de\u503c\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u8fd4\u56de\u4efb\u4f55\u503c")),(0,l.kt)("h3",{id:"2-settarget-property-value-receiver"},"2. ",(0,l.kt)("inlineCode",{parentName:"h3"},"set(target, property, value, receiver)"),"\uff1a"),(0,l.kt)("p",null,"\u7528\u4e8e\u62e6\u622a\u5bf9\u8c61\u7684 \u8bbe\u7f6e\u5c5e\u6027\u503c \u64cd\u4f5c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const p = new Proxy(target, {\n  set: function (target, property, value, receiver) {\n    return Reflect.set(target, propKey, value, receiver)\n  },\n})\n")),(0,l.kt)("h4",{id:"1-\u53c2\u6570\u63cf\u8ff0-1"},"1. \u53c2\u6570\u63cf\u8ff0\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"target\uff1a\u76ee\u6807\u5bf9\u8c61"),(0,l.kt)("li",{parentName:"ol"},"property\uff1a\u5c06\u88ab\u8bbe\u7f6e\u7684 \u5c5e\u6027\u540d \u6216 Symbol"),(0,l.kt)("li",{parentName:"ol"},"value\uff1a\u65b0\u5c5e\u6027\u503c"),(0,l.kt)("li",{parentName:"ol"},"receiver\uff1aProxy \u6216\u8005\u7ee7\u627f Proxy \u7684\u5bf9\u8c61")),(0,l.kt)("h4",{id:"2-\u62e6\u622a\u76ee\u6807-1"},"2. \u62e6\u622a\u76ee\u6807\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6307\u5b9a\u5c5e\u6027\u503c\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"proxy[foo] = bar")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"proxy.foo = bar")),(0,l.kt)("li",{parentName:"ol"},"\u6307\u5b9a\u7ee7\u627f\u8005\u7684\u5c5e\u6027\u503c\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"Object.create(proxy)[foo] = bar"),"\uff08set \u65b9\u6cd5\u53ef\u4ee5\u7ee7\u627f\uff09"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"Reflect.set()"))),(0,l.kt)("h4",{id:"3-\u8fd4\u56de\u503c-1"},"3. \u8fd4\u56de\u503c\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u8fd4\u56de true \u4ee3\u8868\u5c5e\u6027\u8bbe\u7f6e\u6210\u529f"),(0,l.kt)("li",{parentName:"ol"},"\u5728\u4e25\u683c\u6a21\u5f0f\u4e0b\uff0c\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"li"},"set()")," \u65b9\u6cd5\u8fd4\u56de false\uff0c\u90a3\u4e48\u4f1a\u629b\u51fa\u4e00\u4e2a TypeError \u5f02\u5e38")),(0,l.kt)("h3",{id:"3-applytarget-thisarg-argumentslist"},"3. ",(0,l.kt)("inlineCode",{parentName:"h3"},"apply(target, thisArg, argumentsList)"),"\uff1a"),(0,l.kt)("p",null,"\u7528\u4e8e\u62e6\u622a\u51fd\u6570\u7684\u8c03\u7528"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var p = new Proxy(target, {\n  apply: function (target, thisArg, argumentsList) {\n    return Reflect.apply(target, thisArg, argumentsList)\n  },\n})\n")),(0,l.kt)("h4",{id:"1-\u53c2\u6570\u63cf\u8ff0-2"},"1. \u53c2\u6570\u63cf\u8ff0\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"target\uff1a\u76ee\u6807\u5bf9\u8c61\uff08\u51fd\u6570\uff09"),(0,l.kt)("li",{parentName:"ol"},"thisArg\uff1a\u88ab\u8c03\u7528\u65f6\u7684\u4e0a\u4e0b\u6587\u5bf9\u8c61"),(0,l.kt)("li",{parentName:"ol"},"argumentsList\uff1a\u88ab\u8c03\u7528\u65f6\u7684\u53c2\u6570\u6570\u7ec4")),(0,l.kt)("h4",{id:"2-\u62e6\u622a\u76ee\u6807-2"},"2. \u62e6\u622a\u76ee\u6807\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"proxy(...args)")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"Function.prototype.apply()")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"Function.prototype.call()")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"Reflect.apply()"))),(0,l.kt)("h4",{id:"3-\u8fd4\u56de\u503c-2"},"3. \u8fd4\u56de\u503c\uff1a"),(0,l.kt)("p",null,"\u53ef\u4ee5\u8fd4\u56de\u4efb\u4f55\u503c"),(0,l.kt)("h3",{id:"4-hastarget-prop"},"4. ",(0,l.kt)("inlineCode",{parentName:"h3"},"has(target, prop)"),"\uff1a"),(0,l.kt)("p",null,"\u662f\u9488\u5bf9 in \u64cd\u4f5c\u7b26\u7684\u4ee3\u7406\u65b9\u6cd5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var p = new Proxy(target, {\n  has: function (target, prop) {\n    return Reflect.has(target, prop)\n  },\n})\n")),(0,l.kt)("h4",{id:"1-\u53c2\u6570\u63cf\u8ff0-3"},"1. \u53c2\u6570\u63cf\u8ff0\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"target\uff1a\u76ee\u6807\u5bf9\u8c61"),(0,l.kt)("li",{parentName:"ol"},"prop\uff1a\u9700\u8981\u68c0\u67e5\u662f\u5426\u5b58\u5728\u7684\u5c5e\u6027")),(0,l.kt)("h4",{id:"2-\u62e6\u622a\u76ee\u6807-3"},"2. \u62e6\u622a\u76ee\u6807\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5c5e\u6027\u67e5\u8be2\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"foo in proxy")),(0,l.kt)("li",{parentName:"ol"},"\u7ee7\u627f\u5c5e\u6027\u67e5\u8be2\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"foo in Object.create(proxy)")),(0,l.kt)("li",{parentName:"ol"},"with \u68c0\u67e5: ",(0,l.kt)("inlineCode",{parentName:"li"},"with(proxy) { (foo); }")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"Reflect.has()"))),(0,l.kt)("h4",{id:"3-\u8fd4\u56de\u503c-3"},"3. \u8fd4\u56de\u503c\uff1a"),(0,l.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a boolean \u5c5e\u6027\u7684\u503c"),(0,l.kt)("h3",{id:"5-constructtarget-argumentslist-newtarget"},"5. ",(0,l.kt)("inlineCode",{parentName:"h3"},"construct(target, argumentsList, newTarget)"),"\uff1a"),(0,l.kt)("p",null,"\u7528\u4e8e\u62e6\u622a new \u64cd\u4f5c\u7b26"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var p = new Proxy(target, {\n  construct: function (target, argumentsList, newTarget) {\n    return Reflect.construct(target, argumentsList, newTarget)\n  },\n})\n")),(0,l.kt)("h4",{id:"1-\u53c2\u6570\u63cf\u8ff0-4"},"1. \u53c2\u6570\u63cf\u8ff0\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"target\uff1a\u76ee\u6807\u5bf9\u8c61"),(0,l.kt)("li",{parentName:"ol"},"argumentsList\uff1aconstructor \u7684\u53c2\u6570\u5217\u8868"),(0,l.kt)("li",{parentName:"ol"},"newTarget\uff1a\u6700\u521d\u88ab\u8c03\u7528\u7684\u6784\u9020\u51fd\u6570")),(0,l.kt)("h4",{id:"2-\u62e6\u622a\u76ee\u6807-4"},"2. \u62e6\u622a\u76ee\u6807\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"new proxy(...args)")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"Reflect.construct()"))),(0,l.kt)("h4",{id:"3-\u8fd4\u56de\u503c-4"},"3. \u8fd4\u56de\u503c\uff1a"),(0,l.kt)("p",null,"\u5fc5\u987b\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61"))}d.isMDXComponent=!0}}]);