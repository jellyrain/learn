"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4925],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),k=a,m=d["".concat(p,".").concat(k)]||d[k]||s[k]||l;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},10376:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var r=n(83117),a=n(80102),l=(n(67294),n(3905)),o=["components"],i={sidebar_position:5},p=void 0,c={unversionedId:"web/JavaScript/BOM/history",id:"web/JavaScript/BOM/history",title:"history",description:"\u5141\u8bb8\u64cd\u4f5c\u6d4f\u89c8\u5668\u7684\u66fe\u7ecf\u5728\u6807\u7b7e\u9875\u6216\u8005\u6846\u67b6\u91cc\u8bbf\u95ee\u7684\u4f1a\u8bdd\u5386\u53f2\u8bb0\u5f55",source:"@site/docs/1-web/3-JavaScript/16-BOM/history.md",sourceDirName:"1-web/3-JavaScript/16-BOM",slug:"/web/JavaScript/BOM/history",permalink:"/learn/web/JavaScript/BOM/history",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"screen",permalink:"/learn/web/JavaScript/BOM/screen"},next:{title:"console",permalink:"/learn/web/JavaScript/BOM/console"}},u={},s=[{value:"1. \u9759\u6001\u5c5e\u6027\uff1a",id:"1-\u9759\u6001\u5c5e\u6027",level:2},{value:"1. <code>length \u53ea\u8bfb</code>\uff1a",id:"1-length-\u53ea\u8bfb",level:3},{value:"2. <code>scrollRestoration</code>\uff1a",id:"2-scrollrestoration",level:3},{value:"3. <code>state \u53ea\u8bfb</code>\uff1a",id:"3-state-\u53ea\u8bfb",level:3},{value:"2. \u9759\u6001\u65b9\u6cd5\uff1a",id:"2-\u9759\u6001\u65b9\u6cd5",level:2},{value:"1. <code>back()</code>\uff1a",id:"1-back",level:3},{value:"2. <code>forward()</code>\uff1a",id:"2-forward",level:3},{value:"3. <code>go()</code>\uff1a",id:"3-go",level:3},{value:"4. <code>pushState()</code>\uff1a",id:"4-pushstate",level:3},{value:"5. <code>replaceState()</code>\uff1a",id:"5-replacestate",level:3}],d={toc:s};function k(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5141\u8bb8\u64cd\u4f5c\u6d4f\u89c8\u5668\u7684\u66fe\u7ecf\u5728\u6807\u7b7e\u9875\u6216\u8005\u6846\u67b6\u91cc\u8bbf\u95ee\u7684\u4f1a\u8bdd\u5386\u53f2\u8bb0\u5f55"),(0,l.kt)("p",null,"\u8868\u793a\u5f53\u524d\u7a97\u53e3\u9996\u6b21\u4f7f\u7528\u4ee5\u6765\u7528\u6237\u7684\u5bfc\u822a\u5386\u53f2\u8bb0\u5f55\u3002\u56e0\u4e3a history \u662f window \u7684\u5c5e\u6027\uff0c \u6240\u4ee5\u6bcf\u4e2a window \u90fd\u6709\u81ea\u5df1\u7684 history \u5bf9\u8c61"),(0,l.kt)("p",null,"\u51fa\u4e8e\u5b89\u5168\u8003\u8651\uff0c\u8fd9\u4e2a\u5bf9\u8c61\u4e0d\u4f1a\u66b4\u9732\u7528\u6237\u8bbf\u95ee\u8fc7\u7684 URL\uff0c \u4f46\u53ef\u4ee5\u901a\u8fc7\u5b83\u5728\u4e0d\u77e5\u9053\u5b9e\u9645 URL \u7684\u60c5\u51b5\u4e0b\u524d\u8fdb\u548c\u540e\u9000"),(0,l.kt)("h2",{id:"1-\u9759\u6001\u5c5e\u6027"},"1. \u9759\u6001\u5c5e\u6027\uff1a"),(0,l.kt)("h3",{id:"1-length-\u53ea\u8bfb"},"1. ",(0,l.kt)("inlineCode",{parentName:"h3"},"length \u53ea\u8bfb"),"\uff1a"),(0,l.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u6574\u6570\uff0c\u8be5\u6574\u6570\u8868\u793a\u4f1a\u8bdd\u5386\u53f2\u4e2d\u5143\u7d20\u7684\u6570\u76ee\uff0c\u5305\u62ec\u5f53\u524d\u52a0\u8f7d\u7684\u9875\u3002\u4f8b\u5982\uff0c\u5728\u4e00\u4e2a\u65b0\u7684\u9009\u9879\u5361\u52a0\u8f7d\u7684\u4e00\u4e2a\u9875\u9762\u4e2d\uff0c\u8fd9\u4e2a\u5c5e\u6027\u8fd4\u56de 1"),(0,l.kt)("h3",{id:"2-scrollrestoration"},"2. ",(0,l.kt)("inlineCode",{parentName:"h3"},"scrollRestoration"),"\uff1a"),(0,l.kt)("p",null,"\u5141\u8bb8 Web \u5e94\u7528\u7a0b\u5e8f\u5728\u5386\u53f2\u5bfc\u822a\u4e0a\u663e\u5f0f\u5730\u8bbe\u7f6e\u9ed8\u8ba4\u6eda\u52a8\u6062\u590d\u884c\u4e3a\u3002\u6b64\u5c5e\u6027\u53ef\u4ee5\u662f\u81ea\u52a8\u7684\uff08auto\uff09\u6216\u8005\u624b\u52a8\u7684\uff08manual\uff09"),(0,l.kt)("h3",{id:"3-state-\u53ea\u8bfb"},"3. ",(0,l.kt)("inlineCode",{parentName:"h3"},"state \u53ea\u8bfb"),"\uff1a"),(0,l.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u8868\u793a\u5386\u53f2\u5806\u6808\u9876\u90e8\u7684\u72b6\u6001\u7684\u503c\u3002\u8fd9\u662f\u4e00\u79cd\u53ef\u4ee5\u4e0d\u5fc5\u7b49\u5f85 popstate \u4e8b\u4ef6\u800c\u67e5\u770b\u72b6\u6001\u7684\u65b9\u5f0f"),(0,l.kt)("h2",{id:"2-\u9759\u6001\u65b9\u6cd5"},"2. \u9759\u6001\u65b9\u6cd5\uff1a"),(0,l.kt)("h3",{id:"1-back"},"1. ",(0,l.kt)("inlineCode",{parentName:"h3"},"back()"),"\uff1a"),(0,l.kt)("p",null,"\u5728\u6d4f\u89c8\u5668\u5386\u53f2\u8bb0\u5f55\u91cc\u524d\u5f80\u4e0a\u4e00\u9875\uff0c\u7528\u6237\u53ef\u70b9\u51fb\u6d4f\u89c8\u5668\u5de6\u4e0a\u89d2\u7684\u8fd4\u56de (\u6ce8\uff1a\u2190) \u6309\u94ae\u6a21\u62df\u6b64\u65b9\u6cd5\u3002\u7b49\u4ef7\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"history.go(-1)")),(0,l.kt)("h3",{id:"2-forward"},"2. ",(0,l.kt)("inlineCode",{parentName:"h3"},"forward()"),"\uff1a"),(0,l.kt)("p",null,"\u5728\u6d4f\u89c8\u5668\u5386\u53f2\u8bb0\u5f55\u91cc\u524d\u5f80\u4e0b\u4e00\u9875\uff0c\u7528\u6237\u53ef\u70b9\u51fb\u6d4f\u89c8\u5668\u5de6\u4e0a\u89d2\u7684\u524d\u8fdb (\u6ce8\uff1a\u2192) \u6309\u94ae\u6a21\u62df\u6b64\u65b9\u6cd5\u3002\u7b49\u4ef7\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"history.go(1)")),(0,l.kt)("h3",{id:"3-go"},"3. ",(0,l.kt)("inlineCode",{parentName:"h3"},"go()"),"\uff1a"),(0,l.kt)("p",null,"\u901a\u8fc7\u5f53\u524d\u9875\u9762\u7684\u76f8\u5bf9\u4f4d\u7f6e\u4ece\u6d4f\u89c8\u5668\u5386\u53f2\u8bb0\u5f55 ( \u4f1a\u8bdd\u8bb0\u5f55 ) \u52a0\u8f7d\u9875\u9762"),(0,l.kt)("p",null,"\u6bd4\u5982\uff1a\u53c2\u6570\u4e3a-1 \u7684\u65f6\u5019\u4e3a\u4e0a\u4e00\u9875\uff0c\u53c2\u6570\u4e3a 1 \u7684\u65f6\u5019\u4e3a\u4e0b\u4e00\u9875"),(0,l.kt)("p",null,"\u5982\u679c\u5f53\u524d\u9875\u4e3a\u7b2c\u4e00\u9875\uff0c\u524d\u9762\u5df2\u7ecf\u6ca1\u6709\u9875\u9762\u4e86\uff0c\u6211\u4f20\u53c2\u7684\u503c\u4e3a-1\uff0c\u90a3\u4e48\u8fd9\u4e2a\u65b9\u6cd5\u6ca1\u6709\u4efb\u4f55\u6548\u679c\u4e5f\u4e0d\u4f1a\u62a5\u9519"),(0,l.kt)("p",null,"\u8c03\u7528\u6ca1\u6709\u53c2\u6570\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"go()")," \u65b9\u6cd5\u6216\u8005\u53c2\u6570\u503c\u4e3a 0 \u65f6\uff0c\u91cd\u65b0\u8f7d\u5165\u5f53\u524d\u9875\u9762"),(0,l.kt)("h3",{id:"4-pushstate"},"4. ",(0,l.kt)("inlineCode",{parentName:"h3"},"pushState()"),"\uff1a"),(0,l.kt)("p",null,"\u5411\u5f53\u524d\u6d4f\u89c8\u5668\u4f1a\u8bdd\u7684\u5386\u53f2\u5806\u6808\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u72b6\u6001\uff08state\uff09\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"history.pushState(state, title[, url])\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570"),"\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"state"),"\uff1a\u4e00\u4e2a\u5bf9\u8c61\uff0c\u7528\u4e8e\u5b58\u50a8\u4efb\u610f\u6570\u636e\u3002\u8fd9\u4e2a\u5bf9\u8c61\u4f1a\u88ab\u5b58\u50a8\u5728 event.state \u5c5e\u6027\u4e2d"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"title"),"\uff1a\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u7528\u4e8e\u66f4\u65b0\u6d4f\u89c8\u5668\u7684\u6807\u9898"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"url"),"\uff1a\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u7528\u4e8e\u66f4\u65b0\u6d4f\u89c8\u5668\u7684 URL")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u6d4f\u89c8\u5668\u4e0d\u4f1a\u5728\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"pushState()")," \u4e4b\u540e\u5c1d\u8bd5\u52a0\u8f7d\u6b64 URL\uff0c\u4f46\u53ef\u80fd\u4f1a\u7a0d\u540e\u5c1d\u8bd5\u52a0\u8f7d URL\uff0c\u4f8b\u5982\u5728\u7528\u6237\u91cd\u65b0\u542f\u52a8\u6d4f\u89c8\u5668\u4e4b\u540e"),(0,l.kt)("h3",{id:"5-replacestate"},"5. ",(0,l.kt)("inlineCode",{parentName:"h3"},"replaceState()"),"\uff1a"),(0,l.kt)("p",null,"\u4fee\u6539\u5f53\u524d\u5386\u53f2\u8bb0\u5f55\u5b9e\u4f53\uff0c\u5982\u679c\u4f60\u60f3\u66f4\u65b0\u5f53\u524d\u7684 state \u5bf9\u8c61\u6216\u8005\u5f53\u524d\u5386\u53f2\u5b9e\u4f53\u7684 URL \u6765\u54cd\u5e94\u7528\u6237\u7684\u7684\u52a8\u4f5c\u7684\u8bdd\u8fd9\u4e2a\u65b9\u6cd5\u5c06\u4f1a\u975e\u5e38\u6709\u7528"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"history.replaceState(stateObj, title[, url]);\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570"),"\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"stateObj"),"\uff1a\u4e00\u4e2a\u5bf9\u8c61\uff0c\u7528\u4e8e\u5b58\u50a8\u4efb\u610f\u6570\u636e\u3002\u8fd9\u4e2a\u5bf9\u8c61\u4f1a\u88ab\u5b58\u50a8\u5728 event.state \u5c5e\u6027\u4e2d"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"title"),"\uff1a\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u7528\u4e8e\u66f4\u65b0\u6d4f\u89c8\u5668\u7684\u6807\u9898"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"url"),"\uff1a\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u7528\u4e8e\u66f4\u65b0\u6d4f\u89c8\u5668\u7684 URL")))}k.isMDXComponent=!0}}]);