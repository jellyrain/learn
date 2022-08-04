"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1126],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return v}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=u(n),v=a,f=s["".concat(c,".").concat(v)]||s[v]||d[v]||l;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},68747:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});var r=n(83117),a=n(80102),l=(n(67294),n(3905)),i=["components"],o={sidebar_position:7},c=void 0,u={unversionedId:"web/JavaScript/\u96c6\u5408\u5f15\u7528\u7c7b\u578b/Set",id:"web/JavaScript/\u96c6\u5408\u5f15\u7528\u7c7b\u578b/Set",title:"Set",description:"\u5141\u8bb8\u4f60\u5b58\u50a8\u4efb\u4f55\u7c7b\u578b\u7684\u552f\u4e00\u503c\uff0c\u65e0\u8bba\u662f\u539f\u59cb\u503c\u6216\u8005\u662f\u5bf9\u8c61\u5f15\u7528",source:"@site/docs\\2-web\\3-JavaScript\\10-\u96c6\u5408\u5f15\u7528\u7c7b\u578b\\Set.md",sourceDirName:"2-web/3-JavaScript/10-\u96c6\u5408\u5f15\u7528\u7c7b\u578b",slug:"/web/JavaScript/\u96c6\u5408\u5f15\u7528\u7c7b\u578b/Set",permalink:"/learn/web/JavaScript/\u96c6\u5408\u5f15\u7528\u7c7b\u578b/Set",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"WeakMap",permalink:"/learn/web/JavaScript/\u96c6\u5408\u5f15\u7528\u7c7b\u578b/WeakMap"},next:{title:"WeakSet",permalink:"/learn/web/JavaScript/\u96c6\u5408\u5f15\u7528\u7c7b\u578b/WeakSet"}},p={},d=[{value:"1. \u521b\u5efa Set \u5bf9\u8c61\uff1a",id:"1-\u521b\u5efa-set-\u5bf9\u8c61",level:2},{value:"2. \u5b9e\u4f8b\u5c5e\u6027\uff1a",id:"2-\u5b9e\u4f8b\u5c5e\u6027",level:2},{value:"1. <code>size</code>\uff1a",id:"1-size",level:3},{value:"3. \u5b9e\u4f8b\u65b9\u6cd5\uff1a",id:"3-\u5b9e\u4f8b\u65b9\u6cd5",level:2},{value:"1. <code>add(value)</code>\uff1a",id:"1-addvalue",level:3},{value:"2. <code>clear()</code>\uff1a",id:"2-clear",level:3},{value:"3. <code>delete(value)</code>\uff1a",id:"3-deletevalue",level:3},{value:"4. <code>entries()</code>\uff1a",id:"4-entries",level:3},{value:"5. <code>forEach(callbackFn[, thisArg])</code>\uff1a",id:"5-foreachcallbackfn-thisarg",level:3},{value:"6. <code>has(value)</code>\uff1a",id:"6-hasvalue",level:3},{value:"7. <code>keys()</code>\uff1a",id:"7-keys",level:3},{value:"8. <code>values()</code>\uff1a",id:"8-values",level:3}],s={toc:d};function v(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5141\u8bb8\u4f60\u5b58\u50a8\u4efb\u4f55\u7c7b\u578b\u7684\u552f\u4e00\u503c\uff0c\u65e0\u8bba\u662f\u539f\u59cb\u503c\u6216\u8005\u662f\u5bf9\u8c61\u5f15\u7528"),(0,l.kt)("p",null,"Set \u5bf9\u8c61\u662f\u503c\u7684\u96c6\u5408\uff0c\u4f60\u53ef\u4ee5\u6309\u7167\u63d2\u5165\u7684\u987a\u5e8f\u8fed\u4ee3\u5b83\u7684\u5143\u7d20\u3002Set \u4e2d\u7684\u5143\u7d20\u53ea\u4f1a\u51fa\u73b0\u4e00\u6b21\uff0c\u5373 Set \u4e2d\u7684\u5143\u7d20\u662f\u552f\u4e00\u7684"),(0,l.kt)("h2",{id:"1-\u521b\u5efa-set-\u5bf9\u8c61"},"1. \u521b\u5efa Set \u5bf9\u8c61\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"new Set()\n\nnew Set([iterable])\n")),(0,l.kt)("p",null,"iterable\uff1a\u662f\u4e00\u4e2a\u6570\u7ec4\uff08\u4e8c\u5143\u6570\u7ec4\uff09\u6216\u8005\u5176\u4ed6\u53ef\u8fed\u4ee3\u7684\u4e14\u5176\u5143\u7d20\u662f\u952e\u503c\u5bf9\u7684\u5bf9\u8c61\uff0cnull \u4f1a\u88ab\u5f53\u505a undefined"),(0,l.kt)("h2",{id:"2-\u5b9e\u4f8b\u5c5e\u6027"},"2. \u5b9e\u4f8b\u5c5e\u6027\uff1a"),(0,l.kt)("h3",{id:"1-size"},"1. ",(0,l.kt)("inlineCode",{parentName:"h3"},"size"),"\uff1a"),(0,l.kt)("p",null,"\u8fd4\u56de Set \u5bf9\u8c61\u4e2d\u7684\u503c\u7684\u4e2a\u6570"),(0,l.kt)("h2",{id:"3-\u5b9e\u4f8b\u65b9\u6cd5"},"3. \u5b9e\u4f8b\u65b9\u6cd5\uff1a"),(0,l.kt)("h3",{id:"1-addvalue"},"1. ",(0,l.kt)("inlineCode",{parentName:"h3"},"add(value)"),"\uff1a"),(0,l.kt)("p",null,"\u5728 Set \u5bf9\u8c61\u5c3e\u90e8\u6dfb\u52a0\u4e00\u4e2a\u5143\u7d20\u3002\u8fd4\u56de\u8be5 Set \u5bf9\u8c61"),(0,l.kt)("h3",{id:"2-clear"},"2. ",(0,l.kt)("inlineCode",{parentName:"h3"},"clear()"),"\uff1a"),(0,l.kt)("p",null,"\u79fb\u9664 Set \u5bf9\u8c61\u5185\u7684\u6240\u6709\u5143\u7d20"),(0,l.kt)("h3",{id:"3-deletevalue"},"3. ",(0,l.kt)("inlineCode",{parentName:"h3"},"delete(value)"),"\uff1a"),(0,l.kt)("p",null,"\u79fb\u9664\u503c\u4e3a value \u7684\u5143\u7d20\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\u6765\u8868\u793a\u662f\u5426\u79fb\u9664\u6210\u529f\u3002`Set.prototype.has(value)`` \u4f1a\u5728\u6b64\u4e4b\u540e\u8fd4\u56de false"),(0,l.kt)("h3",{id:"4-entries"},"4. ",(0,l.kt)("inlineCode",{parentName:"h3"},"entries()"),"\uff1a"),(0,l.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u8fed\u4ee3\u5668\u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u5305\u542b Set \u5bf9\u8c61\u4e2d\u7684\u6309\u63d2\u5165\u987a\u5e8f\u6392\u5217\u7684\u6240\u6709\u5143\u7d20\u7684\u503c\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"[value, value]")," \u6570\u7ec4\u3002\u4e3a\u4e86\u4f7f\u8fd9\u4e2a\u65b9\u6cd5\u548c Map \u5bf9\u8c61\u4fdd\u6301\u76f8\u4f3c\uff0c \u6bcf\u4e2a\u503c\u7684\u952e\u548c\u503c\u76f8\u7b49"),(0,l.kt)("h3",{id:"5-foreachcallbackfn-thisarg"},"5. ",(0,l.kt)("inlineCode",{parentName:"h3"},"forEach(callbackFn[, thisArg])"),"\uff1a"),(0,l.kt)("p",null,"\u6309\u7167\u63d2\u5165\u987a\u5e8f\uff0c\u4e3a Set \u5bf9\u8c61\u4e2d\u7684\u6bcf\u4e00\u4e2a\u503c\u8c03\u7528\u4e00\u6b21 callBackFn\u3002\u5982\u679c\u63d0\u4f9b\u4e86 thisArg \u53c2\u6570\uff0c\u56de\u8c03\u4e2d\u7684 this \u4f1a\u662f\u8fd9\u4e2a\u53c2\u6570"),(0,l.kt)("h3",{id:"6-hasvalue"},"6. ",(0,l.kt)("inlineCode",{parentName:"h3"},"has(value)"),"\uff1a"),(0,l.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u8be5\u503c\u5728 Set \u4e2d\u5b58\u5728\u4e0e\u5426"),(0,l.kt)("h3",{id:"7-keys"},"7. ",(0,l.kt)("inlineCode",{parentName:"h3"},"keys()"),"\uff1a"),(0,l.kt)("p",null,"\u4e0e values() \u65b9\u6cd5\u76f8\u540c\uff0c\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u8fed\u4ee3\u5668\u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u5305\u542b Set \u5bf9\u8c61\u4e2d\u7684\u6309\u63d2\u5165\u987a\u5e8f\u6392\u5217\u7684\u6240\u6709\u5143\u7d20\u7684\u503c"),(0,l.kt)("h3",{id:"8-values"},"8. ",(0,l.kt)("inlineCode",{parentName:"h3"},"values()"),"\uff1a"),(0,l.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u8fed\u4ee3\u5668\u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u5305\u542b Set \u5bf9\u8c61\u4e2d\u7684\u6309\u63d2\u5165\u987a\u5e8f\u6392\u5217\u7684\u6240\u6709\u5143\u7d20\u7684\u503c"))}v.isMDXComponent=!0}}]);