"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6983],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),k=u(n),d=a,N=k["".concat(p,".").concat(d)]||k[d]||c[d]||l;return n?r.createElement(N,o(o({ref:e},m),{},{components:n})):r.createElement(N,o({ref:e},m))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},76279:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var r=n(83117),a=n(80102),l=(n(67294),n(3905)),o=["components"],i={},p=void 0,u={unversionedId:"SQL/TCL/\u4e8b\u52a1",id:"SQL/TCL/\u4e8b\u52a1",title:"\u4e8b\u52a1",description:"1. \u4e8b\u52a1\u5f00\u59cb\u7ed3\u675f\uff1a",source:"@site/docs\\6-SQL\\TCL\\\u4e8b\u52a1.md",sourceDirName:"6-SQL/TCL",slug:"/SQL/TCL/\u4e8b\u52a1",permalink:"/learn/SQL/TCL/\u4e8b\u52a1",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4e0a\u9501\u548c\u89e3\u9501",permalink:"/learn/SQL/TCL/\u4e0a\u9501\u548c\u89e3\u9501"},next:{title:"\u6570\u636e\u5e93\u4e2d\u6587\u6587\u6863",permalink:"/learn/SQL/\u6570\u636e\u5e93\u4e2d\u6587\u6587\u6863"}},m={},c=[{value:"1. \u4e8b\u52a1\u5f00\u59cb\u7ed3\u675f\uff1a",id:"1-\u4e8b\u52a1\u5f00\u59cb\u7ed3\u675f",level:3},{value:"2. \u4e8b\u52a1\u7684\u7279\u6027\uff1a",id:"2-\u4e8b\u52a1\u7684\u7279\u6027",level:3},{value:"3. \u4e8b\u52a1\u5e76\u53d1\u95ee\u9898\uff1a",id:"3-\u4e8b\u52a1\u5e76\u53d1\u95ee\u9898",level:3},{value:"4. \u4e8b\u52a1\u9501\uff1a",id:"4-\u4e8b\u52a1\u9501",level:3},{value:"5. \u9501\u7ea7\u522b\uff1a",id:"5-\u9501\u7ea7\u522b",level:3},{value:"6. \u907f\u514d\u9501\u6b7b\uff1a",id:"6-\u907f\u514d\u9501\u6b7b",level:3}],k={toc:c};function d(t){var e=t.components,n=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"1-\u4e8b\u52a1\u5f00\u59cb\u7ed3\u675f"},"1. \u4e8b\u52a1\u5f00\u59cb\u7ed3\u675f\uff1a"),(0,l.kt)("p",null,"\u4e8b\u52a1\u7531\u8fde\u63a5\u5230\u6570\u636e\u5e93\u540e\uff0c\u6267\u884cDML\u3001DCL\u3001DDL\u8bed\u53e5\u5f00\u59cb\uff0c\u4ee5\u4e0b\u60c5\u51b5\u53d1\u9001\u540e\u7ed3\u675f\u4e8b\u52a1\uff1a "),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6267\u884cDDL(\u5982\uff1acreate table ), DCL(\u5982\uff1agrant ), \u7cfb\u7edf\u81ea\u52a8\u6267\u884c commit \u8bed\u53e5 "),(0,l.kt)("li",{parentName:"ol"},"\u6267\u884c commit / rollback"),(0,l.kt)("li",{parentName:"ol"},"\u9000\u51fa/\u65ad\u5f00\u6570\u636e\u5e93\u7684\u8fde\u63a5\u81ea\u52a8\u6267\u884c commit \u8bed\u53e5 "),(0,l.kt)("li",{parentName:"ol"},"\u8fdb\u7a0b\u610f\u5916\u7ec8\u6b62\uff0c\u4e8b\u52a1\u81ea\u52a8 rollback "),(0,l.kt)("li",{parentName:"ol"},"\u4e8b\u52a1 commit  \u65f6\u4f1a\u751f\u6210\u4e00\u4e2a\u552f\u4e00\u7684\u7cfb\u7edf\u53d8\u5316\u53f7\uff08SCN\uff09\u4fdd\u5b58\u5230\u4e8b\u52a1\u8868")),(0,l.kt)("h3",{id:"2-\u4e8b\u52a1\u7684\u7279\u6027"},"2. \u4e8b\u52a1\u7684\u7279\u6027\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Atomicity\uff08\u539f\u5b50\u6027\uff09: \u4e8b\u52a1\u4e2d sql \u8bed\u53e5\u4e0d\u53ef\u5206\u5272\uff0c\u8981\u4e48\u90fd\u505a\uff0c\u8981\u4e48\u90fd\u4e0d\u505a "),(0,l.kt)("li",{parentName:"ol"},"Consistency(\u4e00\u81f4\u6027) \uff1a \u6307\u4e8b\u52a1\u64cd\u4f5c\u524d\u540e\uff0c\u6570\u636e\u5e93\u4e2d\u6570\u636e\u662f\u4e00\u81f4\u7684\uff0c\u6570\u636e\u6ee1\u8db3\u4e1a\u52a1\u89c4\u5219\u7ea6\u675f \uff08\u4f8b\u5982\u8d26\u6237\u91d1\u989d\u7684\u8f6c\u51fa\u548c\u8f6c\u5165\uff09\uff0c\u4e0e\u539f\u5b50\u6027\u5bf9\u5e94\u3002 "),(0,l.kt)("li",{parentName:"ol"},"Isolation\uff08\u9694\u79bb\u6027\uff09\uff1a\u591a\u4e2a\u5e76\u53d1\u4e8b\u52a1\u53ef\u4ee5\u72ec\u7acb\u8fd0\u884c\uff0c\u800c\u4e0d\u80fd\u76f8\u4e92\u5e72\u6270\uff0c\u4e00\u4e2a\u4e8b\u52a1\u4fee\u6539\u6570 \u636e\u672a\u63d0\u4ea4\u524d\uff0c\u5176\u4ed6\u4e8b\u52a1\u770b\u4e0d\u5230\u5b83\u6240\u505a\u7684\u66f4\u6539\u3002 "),(0,l.kt)("li",{parentName:"ol"},"Durability\uff08\u6301\u4e45\u6027\uff09\uff1a\u4e8b\u52a1\u63d0\u4ea4\u540e\uff0c\u6570\u636e\u7684\u4fee\u6539\u662f\u6c38\u4e45\u7684\u3002")),(0,l.kt)("h3",{id:"3-\u4e8b\u52a1\u5e76\u53d1\u95ee\u9898"},"3. \u4e8b\u52a1\u5e76\u53d1\u95ee\u9898\uff1a"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"oracle\u652f\u6301\u7684\u9694\u79bb\u7ea7\u522b\uff1a\u4e0d\u652f\u6301\u810f\u8bfb")," "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5e7b\u8bfb"),"\uff1a\u4e8b\u52a1T1\u8bfb\u53d6\u4e00\u6761\u6307\u5b9awhere\u6761\u4ef6\u7684\u8bed\u53e5\uff0c\u8fd4\u56de\u7ed3\u679c\u96c6\u3002\u6b64\u65f6\u4e8b\u52a1T2\u63d2\u5165\u4e00\u884c\u65b0\u8bb0\u5f55\u5e76commit\uff0c \u6070\u597d\u6ee1\u8db3T1\u7684where\u6761\u4ef6\u3002\u7136\u540eT1\u4f7f\u7528\u76f8\u540c\u7684\u6761\u4ef6\u518d\u6b21\u67e5\u8be2\uff0c\u7ed3\u679c\u96c6\u4e2d\u53ef\u4ee5\u770b\u5230T2\u63d2\u5165\u7684\u8bb0\u5f55\uff0c\u8fd9\u6761\u65b0 \u7eaa\u5f55\u5c31\u662f\u5e7b\u60f3\u3002 "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4e0d\u53ef\u91cd\u590d\u8bfb"),"\uff1a\u4e8b\u52a1T1\u8bfb\u53d6\u4e00\u884c\u8bb0\u5f55\uff0c\u7d27\u63a5\u7740\u4e8b\u52a1T2\u4fee\u6539\u4e86T1\u521a\u521a\u8bfb\u53d6\u7684\u8bb0\u5f55\u5e76commit\uff0c\u7136\u540eT1\u518d\u6b21\u67e5 \u8be2\uff0c\u53d1\u73b0\u4e0e\u7b2c\u4e00\u6b21\u8bfb\u53d6\u7684\u8bb0\u5f55\u4e0d\u540c\uff0c\u8fd9\u79f0\u4e3a\u4e0d\u53ef\u91cd\u590d\u8bfb\u3002 "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u810f\u8bfb"),"\uff1a\u4e8b\u52a1T1\u66f4\u65b0\u4e86\u4e00\u884c\u8bb0\u5f55\uff0c\u8fd8\u672a\u63d0\u4ea4\u6240\u505a\u7684\u4fee\u6539\uff0c\u8fd9\u4e2aT2\u8bfb\u53d6\u4e86\u66f4\u65b0\u540e\u7684\u6570\u636e\uff0c\u7136\u540eT1\u6267\u884c\u56de\u6eda\u64cd \u4f5c\uff0c\u53d6\u6d88\u521a\u624d\u7684\u4fee\u6539\uff0c\u6240\u4ee5T2\u6240\u8bfb\u53d6\u7684\u884c\u5c31\u65e0\u6548\uff0c\u4e5f\u5c31\u662f\u810f\u6570\u636e\u3002"),(0,l.kt)("h3",{id:"4-\u4e8b\u52a1\u9501"},"4. \u4e8b\u52a1\u9501\uff1a"),(0,l.kt)("p",null,"\u9501\u662f\u4e00\u79cd\u673a\u5236\uff0c\u591a\u4e2a\u4e8b\u52a1\u540c\u65f6\u8bbf\u95ee\u4e00\u4e2a\u6570\u636e\u5e93\u5bf9\u8c61\u65f6\uff0c\u8be5\u673a\u5236\u53ef\u4ee5\u5b9e\u73b0\u5bf9\u5e76\u53d1\u7684\u63a7\u5236 "),(0,l.kt)("p",null,"oracle\u4e2d\u9501\u7684\u7c7b\u522b "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"DDL\u9501\uff1a oracle\u81ea\u52a8\u7684\u65bd\u52a0\u548c\u91ca\u653e"),(0,l.kt)("li",{parentName:"ul"},"DML\u9501\uff1a\u4e8b\u52a1\u5f00\u59cb\u65f6\u65bd\u52a0\uff0c\u4f7f\u7528 commit \u540e\u8005 rollback \u88ab\u91ca\u653e"),(0,l.kt)("li",{parentName:"ul"},"\u5185\u90e8\u9501\uff1a \u7531oracle\u81ea\u5df1\u7ba1\u7406\u4ee5\u4fdd\u62a4\u5185\u90e8\u6570\u636e\u5e93\u7ed3\u6784 ")),(0,l.kt)("p",null,"oracle\u9501\u7684\u7c92\u5ea6 "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u884c\u7ea7\u9501\uff08TX\uff09\uff1a\u963b\u6b62\u8be5\u884c\u4e0a\u7684DML\u64cd\u4f5c\uff0c\u76f4\u5230 commit \u6216\u8005 rollback"),(0,l.kt)("li",{parentName:"ul"},"\u8868\u7ea7\u9501\uff08TM\uff09\uff1a\u7528\u4e8e\u786e\u4fdd\u5728\u4fee\u6539\u8868\u7684\u5185\u5bb9\u65f6\uff0c\u8868\u7684\u7ed3\u6784\u4e0d\u4f1a\u6539\u53d8"),(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u5e93\u7ea7\u9501\uff08EG\uff09\uff1a \u5c06\u6570\u636e\u5e93\u9501\u5b9a\u4e3a\u53ea\u8bfb\u6a21\u5f0f alter database open read only;")),(0,l.kt)("h3",{id:"5-\u9501\u7ea7\u522b"},"5. \u9501\u7ea7\u522b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u9501\u6a21\u5f0f"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9501\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u89e3\u91ca"),(0,l.kt)("th",{parentName:"tr",align:null},"SQL\u64cd\u4f5c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"null"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"select")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"RS\uff08\u884c\u7ea7\u5171\u4eab\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5176\u4ed6\u4e8b\u52a1\u53ea\u80fd\u67e5\u8be2"),(0,l.kt)("td",{parentName:"tr",align:null},"for update","|","lock for update","|","lock row share")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"RX\uff08\u884c\u7ea7\u6392\u4ed6\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8be5\u4e8b\u52a1\u63d0\u4ea4\u524d\u5176\u4ed6\u4e8b\u52a1\u65e0\u6cd5"),(0,l.kt)("td",{parentName:"tr",align:null},"dml insert","|","update","|","delete","|","lock row share")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"S\uff08\u5171\u4eab\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5171\u4eab\u9501"),(0,l.kt)("td",{parentName:"tr",align:null},"create index","|","lock share")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"SRX\uff08\u5171\u4eab\u884c\u7ea7\u6392\u4ed6\u9501\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"lock share row exclusive"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"X\uff08\u6392\u4ed6\u9501\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6392\u4ed6\u9501"),(0,l.kt)("td",{parentName:"tr",align:null},"alter table","|","drop table","|","drop index","|","truncate","|","lock exclusive")))),(0,l.kt)("h3",{id:"6-\u907f\u514d\u9501\u6b7b"},"6. \u907f\u514d\u9501\u6b7b\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u907f\u514d\u5e94\u7528\u4e0d\u8fd0\u884c\u957f\u4e8b\u52a1"),(0,l.kt)("li",{parentName:"ol"},"\u7ecf\u5e38\u63d0\u4ea4\u4ee5\u907f\u514d\u957f\u65f6\u95f4\u9501\u5b9a\u884c"),(0,l.kt)("li",{parentName:"ol"},"\u907f\u514d\u4f7f\u7528LOCK\u547d\u4ee4\u9501\u5b9a\u8868"),(0,l.kt)("li",{parentName:"ol"},"\u5728\u975e\u9ad8\u5cf0\u671f\u95f4\u6267\u884cDDL\u64cd\u4f5c\uff0c\u5728\u975e\u9ad8\u5cf0\u671f\u95f4\u6267\u884c\u957f\u65f6\u95f4\u8fd0\u884c\u7684\u67e5\u8be2\u6216\u4e8b\u52a1")))}d.isMDXComponent=!0}}]);