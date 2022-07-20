"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5733],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=l.createContext({}),p=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return l.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),k=a,v=m["".concat(u,".").concat(k)]||m[k]||d[k]||i;return n?l.createElement(v,r(r({ref:t},c),{},{components:n})):l.createElement(v,r({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var p=2;p<i;p++)r[p]=n[p];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51008:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var l=n(83117),a=n(80102),i=(n(67294),n(3905)),r=["components"],o={sidebar_position:9},u=void 0,p={unversionedId:"web/JavaScript/DOM/\u4e8b\u4ef6",id:"web/JavaScript/DOM/\u4e8b\u4ef6",title:"\u4e8b\u4ef6",description:"1. \u6ce8\u518c\u4e8b\u4ef6\u65b9\u6cd5\uff1a",source:"@site/docs\\1-web\\3-JavaScript\\17-DOM\\\u4e8b\u4ef6.md",sourceDirName:"1-web/3-JavaScript/17-DOM",slug:"/web/JavaScript/DOM/\u4e8b\u4ef6",permalink:"/learn/web/JavaScript/DOM/\u4e8b\u4ef6",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Event",permalink:"/learn/web/JavaScript/DOM/Event"},next:{title:"requestAnimationFrame",permalink:"/learn/web/JavaScript/Canvas\u52a8\u753b/requestAnimationFrame"}},c={},d=[{value:"1. \u6ce8\u518c\u4e8b\u4ef6\u65b9\u6cd5\uff1a",id:"1-\u6ce8\u518c\u4e8b\u4ef6\u65b9\u6cd5",level:2},{value:"1. \u65b9\u6cd5\u4e00\uff1a",id:"1-\u65b9\u6cd5\u4e00",level:3},{value:"2. \u65b9\u6cd5\u4e8c\uff1a",id:"2-\u65b9\u6cd5\u4e8c",level:3},{value:"3. \u65b9\u6cd5\u4e09\uff1a",id:"3-\u65b9\u6cd5\u4e09",level:3},{value:"2. \u4e8b\u4ef6\uff1a",id:"2-\u4e8b\u4ef6",level:2},{value:"1. FocusEvent\uff1a",id:"1-focusevent",level:3},{value:"2. UiEvent\uff1a",id:"2-uievent",level:3},{value:"3. InputEvent\uff1a",id:"3-inputevent",level:3},{value:"4. Event\uff1a",id:"4-event",level:3},{value:"5. MouseEvent\uff1a",id:"5-mouseevent",level:3},{value:"6. KeyboardEvent\uff1a",id:"6-keyboardevent",level:3},{value:"7. ClipboardEvent\uff1a",id:"7-clipboardevent",level:3},{value:"8. DragEvent\uff1a",id:"8-dragevent",level:3},{value:"9. WheelEvent\uff1a",id:"9-wheelevent",level:3}],m={toc:d};function k(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-\u6ce8\u518c\u4e8b\u4ef6\u65b9\u6cd5"},"1. \u6ce8\u518c\u4e8b\u4ef6\u65b9\u6cd5\uff1a"),(0,i.kt)("h3",{id:"1-\u65b9\u6cd5\u4e00"},"1. \u65b9\u6cd5\u4e00\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"element.addEventListener('click', e => {\n  console.log('click')\n})\n")),(0,i.kt)("h3",{id:"2-\u65b9\u6cd5\u4e8c"},"2. \u65b9\u6cd5\u4e8c\uff1a"),(0,i.kt)("p",null,"\u9700\u8981\u5728\u4e8b\u4ef6\u540d\u524d\u52a0\u4e0a ",(0,i.kt)("inlineCode",{parentName:"p"},"on")," \u524d\u7f00\uff0c\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"onclick")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"element.onclick = e => {\n  console.log('click')\n}\n")),(0,i.kt)("h3",{id:"3-\u65b9\u6cd5\u4e09"},"3. \u65b9\u6cd5\u4e09\uff1a"),(0,i.kt)("p",null,"\u9700\u8981\u5728\u4e8b\u4ef6\u540d\u524d\u52a0\u4e0a ",(0,i.kt)("inlineCode",{parentName:"p"},"on")," \u524d\u7f00\uff0c\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"onclick")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<div onclick=\"handleClick()\"></div>\n\n<script>\n  function handleClick(e) {\n    console.log('click')\n  }\n<\/script>\n")),(0,i.kt)("h2",{id:"2-\u4e8b\u4ef6"},"2. \u4e8b\u4ef6\uff1a"),(0,i.kt)("h3",{id:"1-focusevent"},"1. FocusEvent\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"blur"),"\uff1a\u5931\u53bb\u7126\u70b9\u65f6\u89e6\u53d1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"focus"),"\uff1a\u83b7\u5f97\u7126\u70b9\u65f6\u89e6\u53d1")),(0,i.kt)("h3",{id:"2-uievent"},"2. UiEvent\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"abort"),"\uff1a\u52a0\u8f7d\u4e2d\u6b62\u65f6\u89e6\u53d1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"error"),"\uff1a\u52a0\u8f7d\u5931\u8d25\u65f6\u89e6\u53d1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"load"),"\uff1a\u52a0\u8f7d\u5b8c\u6210\u65f6\u89e6\u53d1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"resize"),"\uff1a\u8c03\u6574\u6d4f\u89c8\u5668\u7a97\u53e3\u5927\u5c0f\u65f6\u89e6\u53d1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"scroll"),"\uff1a\u6eda\u52a8\u6761\u6eda\u52a8\u65f6\u89e6\u53d1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"select"),"\uff1a\u7528\u6237\u9009\u62e9\u6587\u672c\u540e\u89e6\u53d1 (input \u548c textarea)")),(0,i.kt)("h3",{id:"3-inputevent"},"3. InputEvent\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"input"),"\uff1a\u5143\u7d20\u503c\u53d1\u751f\u6539\u53d8\u65f6\u89e6\u53d1")),(0,i.kt)("h3",{id:"4-event"},"4. Event\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"change"),"\uff1a\u5931\u53bb\u7126\u70b9\u4e14\u5185\u5bb9\u53d1\u751f\u6539\u53d8\u65f6\u89e6\u53d1")),(0,i.kt)("h3",{id:"5-mouseevent"},"5. MouseEvent\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"click"),"\uff1a\u5de6\u952e\u5355\u51fb\u5143\u7d20\u65f6\u89e6\u53d1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dblclick"),"\uff1a\u5de6\u952e\u53cc\u51fb\u5143\u7d20\u65f6\u89e6\u53d1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"contextmenu"),"\uff1a\u53f3\u952e\u5355\u51fb\u65f6\u89e6\u53d1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mousedown"),"\uff1a\u5143\u7d20\u4e0a\u6309\u4e0b\u9f20\u6807\u6309\u94ae\u65f6\u89e6\u53d1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mouseup"),"\uff1a\u5143\u7d20\u4e0a\u91ca\u653e\u9f20\u6807\u6309\u94ae\u65f6\u89e6\u53d1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mouseenter"),"\uff1a\u79fb\u5230\u5143\u7d20\u4e0a\u65f6\u89e6\u53d1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mouseleave"),"\uff1a\u79fb\u51fa\u5143\u7d20\u65f6\u89e6\u53d1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mousemove"),"\uff1a\u5143\u7d20\u4e0a\u79fb\u52a8\u65f6\u89e6\u53d1")),(0,i.kt)("h3",{id:"6-keyboardevent"},"6. KeyboardEvent\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"keydown"),"\uff1a\u6309\u4e0b\u6309\u952e\u65f6\u89e6\u53d1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"keypress"),"\uff1a\u6309\u4e0b\u6309\u952e\u65f6\u89e6\u53d1 (\u529f\u80fd\u952e\u4e0d\u89e6\u53d1)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"keyup"),"\uff1a\u91ca\u653e\u6309\u952e\u65f6\u89e6\u53d1")),(0,i.kt)("h3",{id:"7-clipboardevent"},"7. ClipboardEvent\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"copy"),"\uff1a\u590d\u5236\u5143\u7d20\u5185\u5bb9\u65f6\u89e6\u53d1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cut"),"\uff1a\u526a\u5207\u5143\u7d20\u5185\u5bb9\u65f6\u89e6\u53d1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"paste"),"\uff1a\u7c98\u8d34\u5185\u5bb9\u5230\u5143\u7d20\u4e2d\u89e6\u53d1")),(0,i.kt)("h3",{id:"8-dragevent"},"8. DragEvent\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"drag"),"\uff1a\u62d6\u52a8\u5143\u7d20\u65f6\u89e6\u53d1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dragend"),"\uff1a\u62d6\u52a8\u64cd\u4f5c\u7ed3\u675f\u65f6\u89e6\u53d1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dragenter"),"\uff1a\u62d6\u52a8\u5143\u7d20\u79fb\u5230\u76ee\u6807\u65f6\u89e6\u53d1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dragleave"),"\uff1a\u62d6\u52a8\u5143\u7d20\u79fb\u51fa\u76ee\u6807\u65f6\u89e6\u53d1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dragover"),"\uff1a\u62d6\u52a8\u5143\u7d20\u4f4d\u4e8e\u76ee\u6807\u4e0a\u65f6\u89e6\u53d1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dragstart"),"\uff1a\u5f00\u59cb\u62d6\u52a8\u5143\u7d20\u65f6\u89e6\u53d1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"drog"),"\uff1a\u62d6\u52a8\u5143\u7d20\u653e\u7f6e\u5230\u76ee\u6807\u4e0a\u89e6\u53d1")),(0,i.kt)("h3",{id:"9-wheelevent"},"9. WheelEvent\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"wheel"),"\uff1a\u9f20\u6807\u6eda\u8f6e\u6eda\u52a8\u65f6\u89e6\u53d1")))}k.isMDXComponent=!0}}]);