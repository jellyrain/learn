"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9851],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=o,f=m["".concat(i,".").concat(d)]||m[d]||s[d]||a;return t?r.createElement(f,c(c({ref:n},u),{},{components:t})):r.createElement(f,c({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var p=2;p<a;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},41170:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var r=t(83117),o=t(80102),a=(t(67294),t(3905)),c=["components"],l={sidebar_position:23},i=void 0,p={unversionedId:"web/CSS/\u53d8\u91cf\u548c\u8ba1\u7b97",id:"web/CSS/\u53d8\u91cf\u548c\u8ba1\u7b97",title:"\u53d8\u91cf\u548c\u8ba1\u7b97",description:"1. --*(\u81ea\u5b9a\u4e49\u5c5e\u6027)\uff1a",source:"@site/docs\\web\\2-CSS\\\u53d8\u91cf\u548c\u8ba1\u7b97.md",sourceDirName:"web/2-CSS",slug:"/web/CSS/\u53d8\u91cf\u548c\u8ba1\u7b97",permalink:"/learn/web/CSS/\u53d8\u91cf\u548c\u8ba1\u7b97",draft:!1,tags:[],version:"current",sidebarPosition:23,frontMatter:{sidebar_position:23},sidebar:"tutorialSidebar",previous:{title:"\u52a8\u753b",permalink:"/learn/web/CSS/\u52a8\u753b"},next:{title:"@\u89c4\u5219",permalink:"/learn/web/CSS/@\u89c4\u5219"}},u={},s=[{value:"1. <code>--*(\u81ea\u5b9a\u4e49\u5c5e\u6027)</code>\uff1a",id:"1---\u81ea\u5b9a\u4e49\u5c5e\u6027",level:2},{value:"2. <code>var()</code>\uff1a",id:"2-var",level:2},{value:"3. <code>calc()</code>\uff1a",id:"3-calc",level:2}],m={toc:s};function d(e){var n=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1---\u81ea\u5b9a\u4e49\u5c5e\u6027"},"1. ",(0,a.kt)("inlineCode",{parentName:"h2"},"--*(\u81ea\u5b9a\u4e49\u5c5e\u6027)"),"\uff1a"),(0,a.kt)("p",null,"\u6839\u636e ",(0,a.kt)("strong",{parentName:"p"},"\u4f5c\u7528\u57df")," \u83b7\u53d6\u503c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"/* \u5168\u5c40\u53d8\u91cf */\n:root {\n  --somekeyword: left;\n}\n\n/* \u5c40\u90e8\u53d8\u91cf */\n.box {\n  --somekeyword: left;\n}\n")),(0,a.kt)("h2",{id:"2-var"},"2. ",(0,a.kt)("inlineCode",{parentName:"h2"},"var()"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"var( <custom-property-name> , <declaration-value>? )\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<custom-property-name>")," \u81ea\u5b9a\u4e49\u5c5e\u6027\u540d"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<declaration-value>")," \u58f0\u660e\u503c\uff08\u540e\u5907\u503c\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},":root {\n  --main-bg-color: pink;\n}\n\nbody {\n  background-color: var(--main-bg-color);\n}\n")),(0,a.kt)("h2",{id:"3-calc"},"3. ",(0,a.kt)("inlineCode",{parentName:"h2"},"calc()"),"\uff1a"),(0,a.kt)("p",null,"\u5141\u8bb8\u5728\u58f0\u660e CSS \u5c5e\u6027\u503c\u65f6\u6267\u884c\u4e00\u4e9b\u8ba1\u7b97"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5141\u8bb8\u4e0d\u540c\u5355\u4f4d\u7684\u8ba1\u7b97")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"input {\n  width: calc(100% - 1em);\n}\n")))}d.isMDXComponent=!0}}]);