"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7494],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=m(n),k=r,s=d["".concat(p,".").concat(k)]||d[k]||c[k]||l;return n?a.createElement(s,i(i({ref:t},u),{},{components:n})):a.createElement(s,i({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91097:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return c}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),i=["components"],o={sidebar_position:1},p=void 0,m={unversionedId:"web/HTML/head/meta",id:"web/HTML/head/meta",title:"meta",description:"meta \u5143\u7d20\u5b9a\u4e49\u7684\u5143\u6570\u636e\u7684\u7c7b\u578b\u5305\u62ec\u4ee5\u4e0b\u51e0\u79cd\uff1a",source:"@site/docs/2-web/1-HTML/2-head/meta.md",sourceDirName:"2-web/1-HTML/2-head",slug:"/web/HTML/head/meta",permalink:"/learn/web/HTML/head/meta",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"HTML \u4ecb\u7ecd",permalink:"/learn/web/HTML/HTML \u4ecb\u7ecd"},next:{title:"link",permalink:"/learn/web/HTML/head/link"}},u={},c=[{value:"<code>name</code>\uff1a",id:"name",level:3},{value:"<code>http-equiv</code>\uff1a",id:"http-equiv",level:3}],d={toc:c};function k(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<meta charset="UTF-8" />\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"meta")," \u5143\u7d20\u5b9a\u4e49\u7684\u5143\u6570\u636e\u7684\u7c7b\u578b\u5305\u62ec\u4ee5\u4e0b\u51e0\u79cd\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u8bbe\u7f6e\u4e86 ",(0,l.kt)("inlineCode",{parentName:"li"},"name")," \u5c5e\u6027\uff0cmeta \u5143\u7d20\u63d0\u4f9b\u7684\u662f\u6587\u6863\u7ea7\u522b\uff08document-level\uff09\u7684\u5143\u6570\u636e\uff0c\u5e94\u7528\u4e8e\u6574\u4e2a\u9875\u9762"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u8bbe\u7f6e\u4e86 ",(0,l.kt)("inlineCode",{parentName:"li"},"http-equiv")," \u5c5e\u6027\uff0cmeta \u5143\u7d20\u5219\u662f\u7f16\u8bd1\u6307\u4ee4\uff0c\u63d0\u4f9b\u7684\u4fe1\u606f\u4e0e\u7c7b\u4f3c\u547d\u540d\u7684 HTTP \u5934\u90e8\u76f8\u540c"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u8bbe\u7f6e\u4e86 ",(0,l.kt)("inlineCode",{parentName:"li"},"charset")," \u5c5e\u6027\uff0cmeta \u5143\u7d20\u662f\u4e00\u4e2a\u5b57\u7b26\u96c6\u58f0\u660e\uff0c\u544a\u8bc9\u6587\u6863\u4f7f\u7528\u54ea\u79cd\u5b57\u7b26\u7f16\u7801"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u8bbe\u7f6e\u4e86 ",(0,l.kt)("inlineCode",{parentName:"li"},"itemprop")," \u5c5e\u6027\uff0cmeta \u5143\u7d20\u63d0\u4f9b\u7528\u6237\u5b9a\u4e49\u7684\u5143\u6570\u636e")),(0,l.kt)("h3",{id:"name"},(0,l.kt)("inlineCode",{parentName:"h3"},"name"),"\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keywords")),(0,l.kt)("td",{parentName:"tr",align:null},"keywords \u7528\u6765\u544a\u8bc9\u641c\u7d22\u5f15\u64ce\u4f60\u7f51\u9875\u7684\u5173\u952e\u5b57\u662f\u4ec0\u4e48")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"description")),(0,l.kt)("td",{parentName:"tr",align:null},"description \u7528\u6765\u544a\u8bc9\u641c\u7d22\u5f15\u64ce\u4f60\u7684\u7f51\u7ad9\u4e3b\u8981\u5185\u5bb9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"robots")),(0,l.kt)("td",{parentName:"tr",align:null},"robots \u7528\u6765\u544a\u8bc9\u641c\u7d22\u673a\u5668\u4eba\u54ea\u4e9b\u9875\u9762\u9700\u8981\u7d22\u5f15\uff0c\u54ea\u4e9b\u9875\u9762\u4e0d\u9700\u8981\u7d22\u5f15")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"author")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6807\u6ce8\u7f51\u9875\u7684\u4f5c\u8005")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"generator")),(0,l.kt)("td",{parentName:"tr",align:null},"\u751f\u6210\u6b64\u9875\u9762\u7684\u8f6f\u4ef6")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<meta\n  name="keywords"\n  content="science,education,culture,politics,ecnomics,relationships,entertainment,human"\n/>\n\n<meta\n  name="description"\n  content="This page is about the meaning of science,education,culture."\n/>\n\n\x3c!-- content\u7684\u53c2\u6570\u6709all,none,index,noindex,follow,nofollow\u3002\u9ed8\u8ba4\u662fall --\x3e\n<meta name="robots" content="none" />\n\n<meta name="author" content="jellyrain" />\n')),(0,l.kt)("h3",{id:"http-equiv"},(0,l.kt)("inlineCode",{parentName:"h3"},"http-equiv"),"\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Expires")),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u4ee5\u7528\u4e8e\u8bbe\u5b9a\u7f51\u9875\u7684\u5230\u671f\u65f6\u95f4\u3002\u4e00\u65e6\u7f51\u9875\u8fc7\u671f\uff0c\u5fc5\u987b\u5230\u670d\u52a1\u5668\u4e0a\u91cd\u65b0\u4f20\u8f93")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Pragma")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7981\u6b62\u6d4f\u89c8\u5668\u4ece\u672c\u5730\u8ba1\u7b97\u673a\u7684\u7f13\u5b58\u4e2d\u8bbf\u95ee\u9875\u9762\u5185\u5bb9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Refresh")),(0,l.kt)("td",{parentName:"tr",align:null},"\u81ea\u52a8\u5237\u65b0\u5e76\u8f6c\u5230\u65b0\u9875\u9762")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Set-Cookie")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u7f51\u9875\u8fc7\u671f\uff0c\u90a3\u4e48\u5b58\u76d8\u7684 cookie \u5c06\u88ab\u5220\u9664")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Window-target")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f3a\u5236\u9875\u9762\u5728\u5f53\u524d\u7a97\u53e3\u4ee5\u72ec\u7acb\u9875\u9762\u663e\u793a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"content-Type")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u5b9a\u9875\u9762\u4f7f\u7528\u7684\u5b57\u7b26\u96c6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"content-Language")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u5b9a\u9875\u9762\u4f7f\u7528\u7684\u8bed\u8a00")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- \u6ce8\u610f\uff1a\u5fc5\u987b\u4f7f\u7528GMT\u7684\u65f6\u95f4\u683c\u5f0f --\x3e\n<meta http-equiv="expires" content="Fri,12 Jan 2001 18:18:18 GMT" />\n\n\x3c!-- \u8fd9\u6837\u8bbe\u5b9a\uff0c\u8bbf\u95ee\u8005\u5c06\u65e0\u6cd5\u8131\u673a\u6d4f\u89c8 --\x3e\n<meta http-equiv="Pragma" content="no-cache" />\n\n\x3c!-- \u5176\u4e2d\u76842\u662f\u6307\u505c\u75592\u79d2\u949f\u540e\u81ea\u52a8\u5237\u65b0\u5230URL\u7f51\u5740 --\x3e\n<meta http-equiv="Refresh" content="2;URL" />\n\n\x3c!-- \u5fc5\u987b\u4f7f\u7528GMT\u7684\u65f6\u95f4\u683c\u5f0f --\x3e\n<meta\n  http-equiv="Set-Cookie"\n  content="cookievalue=xxx; expires=Friday,12-Jan-2001 18:18:18 GMT; path=/"\n/>\n\n\x3c!-- \u7528\u6765\u9632\u6b62\u522b\u4eba\u5728\u6846\u67b6\u91cc\u8c03\u7528\u81ea\u5df1\u7684\u9875\u9762 --\x3e\n<meta http-equiv="Window-target" content="_top" />\n\n\x3c!-- \u7b49\u4ef7\u4e8e <meta charset="gb2312" /> --\x3e\n<meta http-equiv="content-Type" content="text/html; charset=gb2312" />\n\n<meta http-equiv="Content-Language" content="zh-cn" />\n')))}k.isMDXComponent=!0}}]);