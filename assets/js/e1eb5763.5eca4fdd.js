"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2531],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return v}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=d(a),v=r,m=s["".concat(c,".").concat(v)]||s[v]||u[v]||i;return a?n.createElement(m,l(l({ref:t},p),{},{components:a})):n.createElement(m,l({ref:t},p))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},97148:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),l=["components"],o={sidebar_position:5},c=void 0,d={unversionedId:"web/JavaScript/DOM/CharacterData",id:"web/JavaScript/DOM/CharacterData",title:"CharacterData",description:"CharacterData \u62bd\u8c61\u63a5\u53e3\uff08abstract interface\uff09\u4ee3\u8868 Node \u5bf9\u8c61\u5305\u542b\u7684\u5b57\u7b26\u3002\u8fd9\u662f\u4e00\u4e2a\u62bd\u8c61\u63a5\u53e3\uff0c\u610f\u5473\u7740\u6ca1\u6709 CharacterData \u7c7b\u578b\u7684\u5bf9\u8c61\u3002 \u5b83\u662f\u5728\u5176\u4ed6\u63a5\u53e3\u4e2d\u88ab\u5b9e\u73b0\u7684\uff0c\u5982 Text\u3001Comment \u6216 ProcessingInstruction \u8fd9\u4e9b\u975e\u62bd\u8c61\u63a5\u53e3",source:"@site/docs/2-web/3-JavaScript/17-DOM/CharacterData.md",sourceDirName:"2-web/3-JavaScript/17-DOM",slug:"/web/JavaScript/DOM/CharacterData",permalink:"/learn/web/JavaScript/DOM/CharacterData",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Element",permalink:"/learn/web/JavaScript/DOM/Element"},next:{title:"DocumentFragment",permalink:"/learn/web/JavaScript/DOM/DocumentFragment"}},p={},u=[{value:"1. \u5b9e\u4f8b\u5c5e\u6027\uff1a",id:"1-\u5b9e\u4f8b\u5c5e\u6027",level:2},{value:"1. <code>data</code>\uff1a",id:"1-data",level:3},{value:"2. <code>length \u53ea\u8bfb</code>\uff1a",id:"2-length-\u53ea\u8bfb",level:3},{value:"3. <code>nextElementSibling \u53ea\u8bfb</code>\uff1a",id:"3-nextelementsibling-\u53ea\u8bfb",level:3},{value:"4. <code>previousElementSibling \u53ea\u8bfb</code>\uff1a",id:"4-previouselementsibling-\u53ea\u8bfb",level:3},{value:"2. \u5b9e\u4f8b\u65b9\u6cd5\uff1a",id:"2-\u5b9e\u4f8b\u65b9\u6cd5",level:2},{value:"1. <code>appendData()</code>\uff1a",id:"1-appenddata",level:3},{value:"2. <code>deleteData()</code>\uff1a",id:"2-deletedata",level:3},{value:"3. <code>insertData()</code>\uff1a",id:"3-insertdata",level:3},{value:"4. <code>remove()</code>\uff1a",id:"4-remove",level:3},{value:"5. <code>replaceData()</code>\uff1a",id:"5-replacedata",level:3},{value:"6. <code>substringData()</code>\uff1a",id:"6-substringdata",level:3},{value:"3. Text \u63a5\u53e3\uff1a",id:"3-text-\u63a5\u53e3",level:2},{value:"1. \u5b9e\u4f8b\u5c5e\u6027\uff1a",id:"1-\u5b9e\u4f8b\u5c5e\u6027-1",level:3},{value:"2. \u5b9e\u4f8b\u65b9\u6cd5\uff1a",id:"2-\u5b9e\u4f8b\u65b9\u6cd5-1",level:3},{value:"1. <code>splitText()</code>\uff1a",id:"1-splittext",level:3},{value:"1. \u53c2\u6570",id:"1-\u53c2\u6570",level:4},{value:"2. \u8fd4\u56de\u503c\uff1a",id:"2-\u8fd4\u56de\u503c",level:4}],s={toc:u};function v(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"CharacterData \u62bd\u8c61\u63a5\u53e3\uff08abstract interface\uff09\u4ee3\u8868 Node \u5bf9\u8c61\u5305\u542b\u7684\u5b57\u7b26\u3002\u8fd9\u662f\u4e00\u4e2a\u62bd\u8c61\u63a5\u53e3\uff0c\u610f\u5473\u7740\u6ca1\u6709 CharacterData \u7c7b\u578b\u7684\u5bf9\u8c61\u3002 \u5b83\u662f\u5728\u5176\u4ed6\u63a5\u53e3\u4e2d\u88ab\u5b9e\u73b0\u7684\uff0c\u5982 Text\u3001Comment \u6216 ProcessingInstruction \u8fd9\u4e9b\u975e\u62bd\u8c61\u63a5\u53e3"),(0,i.kt)("h2",{id:"1-\u5b9e\u4f8b\u5c5e\u6027"},"1. \u5b9e\u4f8b\u5c5e\u6027\uff1a"),(0,i.kt)("h3",{id:"1-data"},"1. ",(0,i.kt)("inlineCode",{parentName:"h3"},"data"),"\uff1a"),(0,i.kt)("p",null,"\u4e00\u4e2a DOMString\uff0c\u8868\u793a\u8be5\u5bf9\u8c61\u4e2d\u5305\u542b\u7684\u6587\u672c\u6570\u636e"),(0,i.kt)("h3",{id:"2-length-\u53ea\u8bfb"},"2. ",(0,i.kt)("inlineCode",{parentName:"h3"},"length \u53ea\u8bfb"),"\uff1a"),(0,i.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a unsigned long \u7684\u8868\u793a ",(0,i.kt)("inlineCode",{parentName:"p"},"CharacterData.data")," \u5305\u542b\u7684\u5b57\u7b26\u4e32\u7684\u5927\u5c0f"),(0,i.kt)("h3",{id:"3-nextelementsibling-\u53ea\u8bfb"},"3. ",(0,i.kt)("inlineCode",{parentName:"h3"},"nextElementSibling \u53ea\u8bfb"),"\uff1a"),(0,i.kt)("p",null,"\u8fd4\u56de\u5176\u7236\u8282\u70b9\u6240\u5728\u7684\u5b50\u8282\u70b9\u5217\u8868\uff08children list\uff09\u4e2d\u7d27\u8ddf\u7740\u7684\u5143\u7d20\u8282\u70b9 Element\uff0c\u6216\u8005 null"),(0,i.kt)("h3",{id:"4-previouselementsibling-\u53ea\u8bfb"},"4. ",(0,i.kt)("inlineCode",{parentName:"h3"},"previousElementSibling \u53ea\u8bfb"),"\uff1a"),(0,i.kt)("p",null,"\u8fd4\u56de\u5176\u7236\u8282\u70b9\u6240\u5728\u7684\u5b50\u8282\u70b9\u5217\u8868\uff08children list\uff09\u4e2d\u524d\u4e00\u4e2a\u5143\u7d20\u8282\u70b9 Element\uff0c\u6216\u8005 null"),(0,i.kt)("h2",{id:"2-\u5b9e\u4f8b\u65b9\u6cd5"},"2. \u5b9e\u4f8b\u65b9\u6cd5\uff1a"),(0,i.kt)("h3",{id:"1-appenddata"},"1. ",(0,i.kt)("inlineCode",{parentName:"h3"},"appendData()"),"\uff1a"),(0,i.kt)("p",null,"\u4e3a CharacterData.data \u5b57\u7b26\u4e32\u8ffd\u52a0\u6307\u5b9a\u7684 DOMString \uff1b\u5f53\u65b9\u6cd5\u8fd4\u56de\u65f6\uff0cdata \u5305\u542b\u7684\u662f\u5df2\u5408\u5e76\u7684 DOMString"),(0,i.kt)("h3",{id:"2-deletedata"},"2. ",(0,i.kt)("inlineCode",{parentName:"h3"},"deleteData()"),"\uff1a"),(0,i.kt)("p",null,"\u5728 CharacterData.data \u5b57\u7b26\u4e32\u4e2d\uff0c\u4ece\u6307\u5b9a\u4f4d\u7f6e\u5f00\u59cb\uff0c\u5220\u9664\u6307\u5b9a\u6570\u91cf\u7684\u5b57\u7b26\uff1b\u5f53\u65b9\u6cd5\u8fd4\u56de\u65f6\uff0cdata \u5305\u542b\u7684\u662f\u7f29\u77ed\u4e86\u7684 DOMString"),(0,i.kt)("h3",{id:"3-insertdata"},"3. ",(0,i.kt)("inlineCode",{parentName:"h3"},"insertData()"),"\uff1a"),(0,i.kt)("p",null,"\u5728 CharacterData.data \u5b57\u7b26\u4e32\u4e2d\uff0c\u5728\u6307\u5b9a\u7684\u4f4d\u7f6e\uff0c\u63d2\u5165\u6307\u5b9a\u7684\u5b57\u7b26\uff1b\u5f53\u65b9\u6cd5\u8fd4\u56de\u65f6\uff0cdata \u5305\u542b\u7684\u662f\u5df2\u4fee\u6539\u7684 DOMString"),(0,i.kt)("h3",{id:"4-remove"},"4. ",(0,i.kt)("inlineCode",{parentName:"h3"},"remove()"),"\uff1a"),(0,i.kt)("p",null,"\u628a\u5bf9\u8c61\u4ece\u5176\u7236\u8282\u70b9\u7684 children list \u4e2d\u5220\u9664"),(0,i.kt)("h3",{id:"5-replacedata"},"5. ",(0,i.kt)("inlineCode",{parentName:"h3"},"replaceData()"),"\uff1a"),(0,i.kt)("p",null,"\u5728 CharacterData.data \u5b57\u7b26\u4e32\u4e2d\uff0c\u4ece\u6307\u5b9a\u4f4d\u7f6e\u5f00\u59cb\uff0c\u628a\u6307\u5b9a\u6570\u91cf\u7684\u5b57\u7b26\u66ff\u6362\u4e3a\u6307\u5b9a\u7684 DOMString; \u5f53\u65b9\u6cd5\u8fd4\u56de\u65f6, data \u5305\u542b\u7684\u662f\u5df2\u4fee\u6539\u7684 DOMString"),(0,i.kt)("h3",{id:"6-substringdata"},"6. ",(0,i.kt)("inlineCode",{parentName:"h3"},"substringData()"),"\uff1a"),(0,i.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u5305\u542b\u4e86\u4ece CharacterData.data \u4e2d\u7684\u6307\u5b9a\u4f4d\u7f6e\u5f00\u59cb\uff0c\u6307\u5b9a\u957f\u5ea6\u7684 DOMString"),(0,i.kt)("h2",{id:"3-text-\u63a5\u53e3"},"3. Text \u63a5\u53e3\uff1a"),(0,i.kt)("h3",{id:"1-\u5b9e\u4f8b\u5c5e\u6027-1"},"1. \u5b9e\u4f8b\u5c5e\u6027\uff1a"),(0,i.kt)("p",null,"\u7ee7\u627f\u81ea\u7236\u63a5\u53e3 CharacterData \u7684\u5c5e\u6027"),(0,i.kt)("h3",{id:"2-\u5b9e\u4f8b\u65b9\u6cd5-1"},"2. \u5b9e\u4f8b\u65b9\u6cd5\uff1a"),(0,i.kt)("p",null,"\u7ee7\u627f\u81ea\u7236\u63a5\u53e3 CharacterData \u7684\u65b9\u6cd5"),(0,i.kt)("h3",{id:"1-splittext"},"1. ",(0,i.kt)("inlineCode",{parentName:"h3"},"splitText()"),"\uff1a"),(0,i.kt)("p",null,"\u53ef\u4ee5\u6839\u636e\u6307\u5b9a\u7684\u504f\u79fb\u91cf\u5c06\u4e00\u4e2a Text \u8282\u70b9\u5206\u5272\u6210\u524d\u540e\u4e24\u4e2a\u72ec\u7acb\u7684\u5144\u5f1f\u8282\u70b9"),(0,i.kt)("p",null,"\u5982\u679c\u6307\u5b9a\u7684\u504f\u79fb\u91cf\u521a\u597d\u7b49\u4e8e\u539f\u6587\u672c\u8282\u70b9\u6240\u5305\u542b\u5b57\u7b26\u4e32\u7684\u957f\u5ea6,\u5219\u8fd4\u56de\u4e00\u4e2a\u5185\u5bb9\u4e3a\u7a7a\u7684\u6587\u672c\u8282\u70b9"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"textNode.splitText(offset)\n")),(0,i.kt)("h4",{id:"1-\u53c2\u6570"},"1. \u53c2\u6570"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"offset"),"\uff1a\u5728\u4e2d\u65ad\u6587\u672c\u8282\u70b9 ",(0,i.kt)("strong",{parentName:"p"},"\u524d")," \u7684\u7d22\u5f15\u4f4d\u7f6e"),(0,i.kt)("h4",{id:"2-\u8fd4\u56de\u503c"},"2. \u8fd4\u56de\u503c\uff1a"),(0,i.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u65b0\u521b\u5efa\u7684 Text \u8282\u70b9"))}v.isMDXComponent=!0}}]);