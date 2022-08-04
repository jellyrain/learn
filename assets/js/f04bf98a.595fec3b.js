"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5680],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,d=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=c(n),m=o,v=s["".concat(d,".").concat(m)]||s[m]||p[m]||l;return n?r.createElement(v,i(i({ref:t},u),{},{components:n})):r.createElement(v,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=s;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},33989:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p}});var r=n(83117),o=n(80102),l=(n(67294),n(3905)),i=["components"],a={sidebar_position:6},d=void 0,c={unversionedId:"web/JavaScript/BOM/console",id:"web/JavaScript/BOM/console",title:"console",description:"\u63d0\u4f9b\u4e86\u6d4f\u89c8\u5668\u63a7\u5236\u53f0\u8c03\u8bd5\u7684\u63a5\u53e3\uff0c\u5728\u4e0d\u540c\u6d4f\u89c8\u5668\u4e0a\u5b83\u7684\u5de5\u4f5c\u65b9\u5f0f\u53ef\u80fd\u4e0d\u4e00\u6837\uff0c\u4f46\u901a\u5e38\u90fd\u4f1a\u63d0\u4f9b\u4e00\u5957\u5171\u6027\u7684\u529f\u80fd",source:"@site/docs/2-web/3-JavaScript/16-BOM/console.md",sourceDirName:"2-web/3-JavaScript/16-BOM",slug:"/web/JavaScript/BOM/console",permalink:"/learn/web/JavaScript/BOM/console",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"history",permalink:"/learn/web/JavaScript/BOM/history"},next:{title:"DOM\u6982\u8ff0",permalink:"/learn/web/JavaScript/DOM/DOM\u6982\u8ff0"}},u={},p=[{value:"1. \u9759\u6001\u65b9\u6cd5\uff1a",id:"1-\u9759\u6001\u65b9\u6cd5",level:2},{value:"1. <code>assert()</code>\uff1a",id:"1-assert",level:3},{value:"2. <code>clear()</code>\uff1a",id:"2-clear",level:3},{value:"3. <code>count()</code>\uff1a",id:"3-count",level:3},{value:"4. <code>countReset()</code>\uff1a",id:"4-countreset",level:3},{value:"5. <code>debug()</code>\uff1a",id:"5-debug",level:3},{value:"6. <code>dir()</code>\uff1a",id:"6-dir",level:3},{value:"7. <code>dirxml()</code>\uff1a",id:"7-dirxml",level:3},{value:"8. <code>error()</code>\uff1a",id:"8-error",level:3},{value:"9. <code>group()</code>\uff1a",id:"9-group",level:3},{value:"10. <code>groupCollapsed()</code>\uff1a",id:"10-groupcollapsed",level:3},{value:"11. <code>groupEnd()</code>\uff1a",id:"11-groupend",level:3},{value:"12. <code>info()</code>\uff1a",id:"12-info",level:3},{value:"13. <code>log()</code>\uff1a",id:"13-log",level:3},{value:"14. <code>table()</code>\uff1a",id:"14-table",level:3},{value:"15. <code>time()</code>\uff1a",id:"15-time",level:3},{value:"16. <code>timeEnd()</code>\uff1a",id:"16-timeend",level:3},{value:"17. <code>timeLog()</code>\uff1a",id:"17-timelog",level:3},{value:"18. <code>trace()</code>\uff1a",id:"18-trace",level:3},{value:"19. <code>warn()</code>\uff1a",id:"19-warn",level:3}],s={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u63d0\u4f9b\u4e86\u6d4f\u89c8\u5668\u63a7\u5236\u53f0\u8c03\u8bd5\u7684\u63a5\u53e3\uff0c\u5728\u4e0d\u540c\u6d4f\u89c8\u5668\u4e0a\u5b83\u7684\u5de5\u4f5c\u65b9\u5f0f\u53ef\u80fd\u4e0d\u4e00\u6837\uff0c\u4f46\u901a\u5e38\u90fd\u4f1a\u63d0\u4f9b\u4e00\u5957\u5171\u6027\u7684\u529f\u80fd"),(0,l.kt)("h2",{id:"1-\u9759\u6001\u65b9\u6cd5"},"1. \u9759\u6001\u65b9\u6cd5\uff1a"),(0,l.kt)("h3",{id:"1-assert"},"1. ",(0,l.kt)("inlineCode",{parentName:"h3"},"assert()"),"\uff1a"),(0,l.kt)("p",null,"\u5982\u679c\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a false \uff0c\u5219\u5c06\u6d88\u606f\u548c\u5806\u6808\u8ddf\u8e2a\u8bb0\u5f55\u5230\u63a7\u5236\u53f0"),(0,l.kt)("h3",{id:"2-clear"},"2. ",(0,l.kt)("inlineCode",{parentName:"h3"},"clear()"),"\uff1a"),(0,l.kt)("p",null,"\u6e05\u7a7a\u63a7\u5236\u53f0\uff0c\u5e76\u8f93\u51fa Console was cleared"),(0,l.kt)("h3",{id:"3-count"},"3. ",(0,l.kt)("inlineCode",{parentName:"h3"},"count()"),"\uff1a"),(0,l.kt)("p",null,"\u4ee5\u53c2\u6570\u4e3a\u6807\u8bc6\u8bb0\u5f55\u8c03\u7528\u7684\u6b21\u6570\uff0c\u8c03\u7528\u65f6\u5728\u63a7\u5236\u53f0\u6253\u5370\u6807\u8bc6\u4ee5\u53ca\u8c03\u7528\u6b21\u6570"),(0,l.kt)("h3",{id:"4-countreset"},"4. ",(0,l.kt)("inlineCode",{parentName:"h3"},"countReset()"),"\uff1a"),(0,l.kt)("p",null,"\u91cd\u7f6e\u6307\u5b9a\u6807\u7b7e\u7684\u8ba1\u6570\u5668\u503c"),(0,l.kt)("h3",{id:"5-debug"},"5. ",(0,l.kt)("inlineCode",{parentName:"h3"},"debug()"),"\uff1a"),(0,l.kt)("p",null,'\u5728\u63a7\u5236\u53f0\u6253\u5370\u4e00\u6761 "debug" \u7ea7\u522b\u7684\u6d88\u606f'),(0,l.kt)("h3",{id:"6-dir"},"6. ",(0,l.kt)("inlineCode",{parentName:"h3"},"dir()"),"\uff1a"),(0,l.kt)("p",null,"\u663e\u793a\u4e00\u4e2a\u7531\u7279\u5b9a\u7684 Javascript \u5bf9\u8c61\u5217\u8868\u7ec4\u6210\u7684\u53ef\u4ea4\u4e92\u5217\u8868\u3002\u8fd9\u4e2a\u5217\u8868\u53ef\u4ee5\u4f7f\u7528\u4e09\u89d2\u5f62\u9690\u85cf\u548c\u663e\u793a\u6765\u5ba1\u67e5\u5b50\u5bf9\u8c61\u7684\u5185\u5bb9"),(0,l.kt)("h3",{id:"7-dirxml"},"7. ",(0,l.kt)("inlineCode",{parentName:"h3"},"dirxml()"),"\uff1a"),(0,l.kt)("p",null,"\u6253\u5370 XML/HTML \u5143\u7d20\u8868\u793a\u7684\u6307\u5b9a\u5bf9\u8c61\uff0c\u5426\u5219\u663e\u793a JavaScript \u5bf9\u8c61\u89c6\u56fe"),(0,l.kt)("h3",{id:"8-error"},"8. ",(0,l.kt)("inlineCode",{parentName:"h3"},"error()"),"\uff1a"),(0,l.kt)("p",null,"\u6253\u5370\u4e00\u6761\u9519\u8bef\u4fe1\u606f"),(0,l.kt)("h3",{id:"9-group"},"9. ",(0,l.kt)("inlineCode",{parentName:"h3"},"group()"),"\uff1a"),(0,l.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5185\u8054 group, \u540e\u7eed\u6240\u6709\u6253\u5370\u5185\u5bb9\u5c06\u4f1a\u4ee5\u5b50\u5c42\u7ea7\u7684\u5f62\u5f0f\u5c55\u793a\u3002\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"groupEnd()")," \u6765\u95ed\u5408\u7ec4"),(0,l.kt)("h3",{id:"10-groupcollapsed"},"10. ",(0,l.kt)("inlineCode",{parentName:"h3"},"groupCollapsed()"),"\uff1a"),(0,l.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5185\u8054 group\u3002\u4f7f\u7528\u65b9\u6cd5\u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"group()")," \u76f8\u540c\uff0c\u4e0d\u540c\u7684\u662f\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"groupCollapsed()")," \u65b9\u6cd5\u6253\u5370\u51fa\u6765\u7684\u5185\u5bb9\u9ed8\u8ba4\u662f\u6298\u53e0\u7684\u3002\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"groupEnd()")," \u6765\u95ed\u5408\u7ec4"),(0,l.kt)("h3",{id:"11-groupend"},"11. ",(0,l.kt)("inlineCode",{parentName:"h3"},"groupEnd()"),"\uff1a"),(0,l.kt)("p",null,"\u95ed\u5408\u5f53\u524d\u5185\u8054 group"),(0,l.kt)("h3",{id:"12-info"},"12. ",(0,l.kt)("inlineCode",{parentName:"h3"},"info()"),"\uff1a"),(0,l.kt)("p",null,"\u6253\u5370\u8d44\u8baf\u7c7b\u8bf4\u660e\u4fe1\u606f"),(0,l.kt)("h3",{id:"13-log"},"13. ",(0,l.kt)("inlineCode",{parentName:"h3"},"log()"),"\uff1a"),(0,l.kt)("p",null,"\u6253\u5370\u5185\u5bb9\u7684\u901a\u7528\u65b9\u6cd5"),(0,l.kt)("h3",{id:"14-table"},"14. ",(0,l.kt)("inlineCode",{parentName:"h3"},"table()"),"\uff1a"),(0,l.kt)("p",null,"\u5c06\u5217\u8868\u578b\u7684\u6570\u636e\u6253\u5370\u6210\u8868\u683c"),(0,l.kt)("h3",{id:"15-time"},"15. ",(0,l.kt)("inlineCode",{parentName:"h3"},"time()"),"\uff1a"),(0,l.kt)("p",null,"\u542f\u52a8\u4e00\u4e2a\u4ee5\u5165\u53c2\u4f5c\u4e3a\u7279\u5b9a\u540d\u79f0\u7684\u8ba1\u65f6\u5668\uff0c\u5728\u663e\u793a\u9875\u9762\u4e2d\u53ef\u540c\u65f6\u8fd0\u884c\u7684\u8ba1\u65f6\u5668\u4e0a\u9650\u4e3a 10,000"),(0,l.kt)("h3",{id:"16-timeend"},"16. ",(0,l.kt)("inlineCode",{parentName:"h3"},"timeEnd()"),"\uff1a"),(0,l.kt)("p",null,"\u7ed3\u675f\u7279\u5b9a\u7684 \u8ba1\u65f6\u5668 \u5e76\u4ee5\u6beb\u79d2\u6253\u5370\u5176\u4ece\u5f00\u59cb\u5230\u7ed3\u675f\u6240\u7528\u7684\u65f6\u95f4"),(0,l.kt)("h3",{id:"17-timelog"},"17. ",(0,l.kt)("inlineCode",{parentName:"h3"},"timeLog()"),"\uff1a"),(0,l.kt)("p",null,"\u6253\u5370\u7279\u5b9a \u8ba1\u65f6\u5668 \u6240\u8fd0\u884c\u7684\u65f6\u95f4"),(0,l.kt)("h3",{id:"18-trace"},"18. ",(0,l.kt)("inlineCode",{parentName:"h3"},"trace()"),"\uff1a"),(0,l.kt)("p",null,"\u8f93\u51fa\u4e00\u4e2a\u5806\u6808\u8ddf\u8e2a"),(0,l.kt)("h3",{id:"19-warn"},"19. ",(0,l.kt)("inlineCode",{parentName:"h3"},"warn()"),"\uff1a"),(0,l.kt)("p",null,"\u6253\u5370\u4e00\u4e2a\u8b66\u544a\u4fe1\u606f\uff0c\u53ef\u4ee5\u4f7f\u7528 string substitution \u548c\u989d\u5916\u7684\u53c2\u6570"))}m.isMDXComponent=!0}}]);