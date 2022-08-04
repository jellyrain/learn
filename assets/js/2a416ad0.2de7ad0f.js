"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9600],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},17122:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),l=["components"],o={sidebar_position:7},p=void 0,c={unversionedId:"web/JavaScript/\u5bf9\u8c61",id:"web/JavaScript/\u5bf9\u8c61",title:"\u5bf9\u8c61",description:"\u5bf9\u8c61\u6982\u5ff5\uff1a \u5bf9\u8c61\u662f\u4e00\u4e2a\u5305\u542b\u76f8\u5173\u6570\u636e\u548c\u65b9\u6cd5\u7684\u96c6\u5408\uff08\u901a\u5e38\u7531\u4e00\u4e9b\u53d8\u91cf\u548c\u51fd\u6570\u7ec4\u6210\uff0c\u6211\u4eec\u79f0\u4e4b\u4e3a\u5bf9\u8c61\u91cc\u9762\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\uff09",source:"@site/docs\\2-web\\3-JavaScript\\\u5bf9\u8c61.md",sourceDirName:"2-web/3-JavaScript",slug:"/web/JavaScript/\u5bf9\u8c61",permalink:"/learn/web/JavaScript/\u5bf9\u8c61",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\u6570\u7ec4",permalink:"/learn/web/JavaScript/\u6570\u7ec4"},next:{title:"\u51fd\u6570",permalink:"/learn/web/JavaScript/\u51fd\u6570"}},u={},s=[{value:"1. \u5bf9\u8c61\u7684\u5b9a\u4e49\uff1a",id:"1-\u5bf9\u8c61\u7684\u5b9a\u4e49",level:2},{value:"2. \u7ed9\u5bf9\u8c61\u6dfb\u52a0\u5c5e\u6027\uff1a",id:"2-\u7ed9\u5bf9\u8c61\u6dfb\u52a0\u5c5e\u6027",level:2},{value:"3. \u8bfb\u53d6\u5c5e\u6027\uff1a",id:"3-\u8bfb\u53d6\u5c5e\u6027",level:2},{value:"4. <code>this</code> \u5173\u952e\u5b57\uff1a",id:"4-this-\u5173\u952e\u5b57",level:2},{value:"1. \u9ed8\u8ba4\u7ed1\u5b9a\uff1a",id:"1-\u9ed8\u8ba4\u7ed1\u5b9a",level:3},{value:"2. \u9690\u5f0f\u7ed1\u5b9a\uff1a",id:"2-\u9690\u5f0f\u7ed1\u5b9a",level:3},{value:"3. \u663e\u5f0f(\u786c)\u7ed1\u5b9a\uff1a",id:"3-\u663e\u5f0f\u786c\u7ed1\u5b9a",level:3},{value:"4. new \u7ed1\u5b9a\uff1a",id:"4-new-\u7ed1\u5b9a",level:3},{value:"5. ES6 \u65b0\u589e\u7bad\u5934\u51fd\u6570\u7ed1\u5b9a\uff1a",id:"5-es6-\u65b0\u589e\u7bad\u5934\u51fd\u6570\u7ed1\u5b9a",level:3}],d={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5bf9\u8c61\u6982\u5ff5\uff1a")," \u5bf9\u8c61\u662f\u4e00\u4e2a\u5305\u542b\u76f8\u5173\u6570\u636e\u548c\u65b9\u6cd5\u7684\u96c6\u5408\uff08\u901a\u5e38\u7531\u4e00\u4e9b\u53d8\u91cf\u548c\u51fd\u6570\u7ec4\u6210\uff0c\u6211\u4eec\u79f0\u4e4b\u4e3a\u5bf9\u8c61\u91cc\u9762\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\uff09"),(0,i.kt)("h2",{id:"1-\u5bf9\u8c61\u7684\u5b9a\u4e49"},"1. \u5bf9\u8c61\u7684\u5b9a\u4e49\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const obj = {} // \u63a8\u8350\n\nconst obj = new Object()\n")),(0,i.kt)("h2",{id:"2-\u7ed9\u5bf9\u8c61\u6dfb\u52a0\u5c5e\u6027"},"2. \u7ed9\u5bf9\u8c61\u6dfb\u52a0\u5c5e\u6027\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u6784\u9020\u65f6\nconst obj = {\n  a: 10,\n  b: function () {},\n}\n\n// \u70b9\u8868\u793a\u6cd5\nobj.a = 10\n\nboj.b = function () {}\n\n// \u62ec\u53f7\u8868\u793a\u6cd5\nobj['a'] = 10\n\nboj['b'] = function () {}\n")),(0,i.kt)("h2",{id:"3-\u8bfb\u53d6\u5c5e\u6027"},"3. \u8bfb\u53d6\u5c5e\u6027\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u70b9\u8868\u793a\u6cd5\nobj.a\n\n// \u62ec\u53f7\u8868\u793a\u6cd5\nobj['a']\n")),(0,i.kt)("h2",{id:"4-this-\u5173\u952e\u5b57"},"4. ",(0,i.kt)("inlineCode",{parentName:"h2"},"this")," \u5173\u952e\u5b57\uff1a"),(0,i.kt)("p",null,"\u5f53\u524d\u6267\u884c\u4e0a\u4e0b\u6587\uff08global\u3001function \u6216 eval\uff09\u7684\u4e00\u4e2a\u5c5e\u6027\uff0c\u5728\u975e\u4e25\u683c\u6a21\u5f0f\u4e0b\uff0c\u603b\u662f\u6307\u5411\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5728\u4e25\u683c\u6a21\u5f0f\u4e0b\u53ef\u4ee5\u662f\u4efb\u610f\u503c"),(0,i.kt)("h3",{id:"1-\u9ed8\u8ba4\u7ed1\u5b9a"},"1. \u9ed8\u8ba4\u7ed1\u5b9a\uff1a"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u7ed1\u5b9a\u901a\u5e38\u662f\u6307 ",(0,i.kt)("strong",{parentName:"p"},"\u51fd\u6570\u72ec\u7acb\u8c03\u7528"),"\uff0c\u4e0d\u6d89\u53ca\u5176\u4ed6\u7ed1\u5b9a\u89c4\u5219"),(0,i.kt)("p",null,"\u975e\u4e25\u683c\u6a21\u5f0f\u4e0b\uff0cthis \u6307\u5411 window"),(0,i.kt)("p",null,"\u4e25\u683c\u6a21\u5f0f\u4e0b\uff0cthis \u6307\u5411 undefined"),(0,i.kt)("h3",{id:"2-\u9690\u5f0f\u7ed1\u5b9a"},"2. \u9690\u5f0f\u7ed1\u5b9a\uff1a"),(0,i.kt)("p",null,"\u51fd\u6570\u7684\u8c03\u7528\u662f\u5728\u67d0\u4e2a\u5bf9\u8c61\u4e0a\u89e6\u53d1\u7684\uff0c\u5373\u8c03\u7528\u4f4d\u7f6e\u5b58\u5728\u4e0a\u4e0b\u6587\u5bf9\u8c61\uff0c\u901a\u4fd7\u70b9\u8bf4\u5c31\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"XXX.func()")," \u8fd9\u79cd\u8c03\u7528\u6a21\u5f0f"),(0,i.kt)("h3",{id:"3-\u663e\u5f0f\u786c\u7ed1\u5b9a"},"3. \u663e\u5f0f(\u786c)\u7ed1\u5b9a\uff1a"),(0,i.kt)("p",null,"\u663e\u5f0f\u7ed1\u5b9a\u6bd4\u8f83\u597d\u7406\u89e3\uff0c\u5c31\u662f\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"call()"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"apply()"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"bind()"),"\u65b9\u6cd5\uff0c\u5f3a\u884c\u6539\u53d8 this \u6307\u5411"),(0,i.kt)("p",null,"\u4e0a\u9762\u7684\u65b9\u6cd5\u867d\u7136\u90fd\u53ef\u4ee5\u6539\u53d8 this \u6307\u5411\uff0c\u4f46\u4f7f\u7528\u8d77\u6765\u7565\u6709\u5dee\u522b\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"call()")," \u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"apply()")," \u51fd\u6570\u4f1a\u7acb\u5373\u6267\u884c"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"bind()")," \u51fd\u6570\u4f1a\u8fd4\u56de\u65b0\u51fd\u6570\uff0c\u4e0d\u4f1a\u7acb\u5373\u6267\u884c\u51fd\u6570"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"call()")," \u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"apply()")," \u7684\u533a\u522b\u5728\u4e8e call \u63a5\u53d7\u82e5\u5e72\u4e2a\u53c2\u6570\uff0capply \u63a5\u53d7\u6570\u7ec4")),(0,i.kt)("h3",{id:"4-new-\u7ed1\u5b9a"},"4. new \u7ed1\u5b9a\uff1a"),(0,i.kt)("p",null,"\u4f7f\u7528 new \u6765\u6784\u5efa\u51fd\u6570\uff0c\u4f1a\u6267\u884c\u5982\u4e0b\u56db\u90e8\u64cd\u4f5c\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u521b\u5efa\u4e00\u4e2a\u7a7a\u7684\u7b80\u5355 JavaScript \u5bf9\u8c61\uff08\u5373",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"\uff09"),(0,i.kt)("li",{parentName:"ol"},"\u4e3a\u6b65\u9aa4 1 \u65b0\u521b\u5efa\u7684\u5bf9\u8c61\u6dfb\u52a0\u5c5e\u6027",(0,i.kt)("strong",{parentName:"li"},"proto"),"\uff0c\u5c06\u8be5\u5c5e\u6027\u94fe\u63a5\u81f3\u6784\u9020\u51fd\u6570\u7684\u539f\u578b\u5bf9\u8c61"),(0,i.kt)("li",{parentName:"ol"},"\u5c06\u6b65\u9aa4 1 \u65b0\u521b\u5efa\u7684\u5bf9\u8c61\u4f5c\u4e3a this \u7684\u4e0a\u4e0b\u6587"),(0,i.kt)("li",{parentName:"ol"},"\u5982\u679c\u8be5\u51fd\u6570\u6ca1\u6709\u8fd4\u56de\u5bf9\u8c61\uff0c\u5219\u8fd4\u56de this")),(0,i.kt)("p",null,"\u901a\u8fc7 new \u6765\u8c03\u7528\u6784\u9020\u51fd\u6570\uff0c\u4f1a\u751f\u6210\u4e00\u4e2a\u65b0\u5bf9\u8c61\uff0c\u5e76\u4e14\u628a\u8fd9\u4e2a\u65b0\u5bf9\u8c61\u7ed1\u5b9a\u4e3a\u8c03\u7528\u51fd\u6570\u7684 this"),(0,i.kt)("h3",{id:"5-es6-\u65b0\u589e\u7bad\u5934\u51fd\u6570\u7ed1\u5b9a"},"5. ES6 \u65b0\u589e\u7bad\u5934\u51fd\u6570\u7ed1\u5b9a\uff1a"),(0,i.kt)("p",null,"\u7bad\u5934\u51fd\u6570\u6ca1\u6709 this\uff0c\u5b83\u7684 this \u662f\u901a\u8fc7\u4f5c\u7528\u57df\u94fe\u67e5\u5230\u5916\u5c42\u4f5c\u7528\u57df\u7684 this\uff0c\u4e14\u6307\u5411 ",(0,i.kt)("strong",{parentName:"p"},"\u51fd\u6570\u5b9a\u4e49\u65f6")," \u7684 this \u800c\u975e\u6267\u884c\u65f6"))}m.isMDXComponent=!0}}]);