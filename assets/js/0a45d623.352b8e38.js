"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5491],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},v=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),v=l(t),m=r,d=v["".concat(s,".").concat(m)]||v[m]||u[m]||c;return t?a.createElement(d,i(i({ref:n},p),{},{components:t})):a.createElement(d,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,i=new Array(c);i[0]=v;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<c;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}v.displayName="MDXCreateElement"},46808:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var a=t(83117),r=t(80102),c=(t(67294),t(3905)),i=["components"],o={sidebar_position:2},s=void 0,l={unversionedId:"web/JavaScript/Canvas\u52a8\u753b/Canvas\u57fa\u7840",id:"web/JavaScript/Canvas\u52a8\u753b/Canvas\u57fa\u7840",title:"Canvas\u57fa\u7840",description:"1. `` \u6807\u7b7e\uff1a",source:"@site/docs\\2-web\\3-JavaScript\\18-Canvas\u52a8\u753b\\Canvas\u57fa\u7840.md",sourceDirName:"2-web/3-JavaScript/18-Canvas\u52a8\u753b",slug:"/web/JavaScript/Canvas\u52a8\u753b/Canvas\u57fa\u7840",permalink:"/learn/web/JavaScript/Canvas\u52a8\u753b/Canvas\u57fa\u7840",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"requestAnimationFrame",permalink:"/learn/web/JavaScript/Canvas\u52a8\u753b/requestAnimationFrame"},next:{title:"\u56fe\u50cf",permalink:"/learn/web/JavaScript/Canvas\u52a8\u753b/\u56fe\u5f62"}},p={},u=[{value:"1. <code>&lt;canvas&gt;</code> \u6807\u7b7e\uff1a",id:"1-canvas-\u6807\u7b7e",level:2},{value:"2. \u83b7\u53d6 \u6e32\u67d3\u4e0a\u4e0b\u6587\uff1a",id:"2-\u83b7\u53d6-\u6e32\u67d3\u4e0a\u4e0b\u6587",level:2},{value:"3. \u7ed8\u5236 \u4e00\u4e2a\u957f\u65b9\u5f62\uff1a",id:"3-\u7ed8\u5236-\u4e00\u4e2a\u957f\u65b9\u5f62",level:2}],v={toc:u};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,c.kt)("wrapper",(0,a.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"1-canvas-\u6807\u7b7e"},"1. ",(0,c.kt)("inlineCode",{parentName:"h2"},"<canvas>")," \u6807\u7b7e\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-html"},'<canvas id="canvas" width="400" height="400"></canvas>\n')),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"<canvas>")," \u6807\u7b7e\u53ea\u6709\u4e24\u4e2a\u5c5e\u6027 width \u548c height\u3002\u8fd9\u4e9b\u90fd\u662f\u53ef\u9009\u7684\uff0c\u5e76\u4e14\u540c\u6837\u5229\u7528 DOM properties \u6765\u8bbe\u7f6e"),(0,c.kt)("p",null,"Canvas \u4f1a\u521d\u59cb\u5316 \u5bbd\u5ea6\u4e3a 300 \u50cf\u7d20 \u548c \u9ad8\u5ea6\u4e3a 150 \u50cf\u7d20"),(0,c.kt)("p",null,"\u672a\u652f\u6301 canvas \u7684\u6d4f\u89c8\u5668\u4f1a\u663e\u793a\u4e00\u4e2a \u6807\u7b7e\u5185\u7684\u5185\u5bb9\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-html"},'<canvas id="canvas" width="400" height="400">\n  current stock price: $3.15 +0.15\n</canvas>\n')),(0,c.kt)("h2",{id:"2-\u83b7\u53d6-\u6e32\u67d3\u4e0a\u4e0b\u6587"},"2. \u83b7\u53d6 \u6e32\u67d3\u4e0a\u4e0b\u6587\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-javascript"},"const canvas = document.getElementById('canvas')\nconst ctx = canvas.getContext('2d')\n")),(0,c.kt)("h2",{id:"3-\u7ed8\u5236-\u4e00\u4e2a\u957f\u65b9\u5f62"},"3. \u7ed8\u5236 \u4e00\u4e2a\u957f\u65b9\u5f62\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-html"},'<canvas id="canvas" width="400" height="400"></canvas>\n')),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-javascript"},"const canvas = document.getElementById('canvas')\nconst ctx = canvas.getContext('2d')\n\nctx.fillStyle = 'rgb(200,0,0)'\nctx.fillRect(10, 10, 55, 50)\n")))}m.isMDXComponent=!0}}]);