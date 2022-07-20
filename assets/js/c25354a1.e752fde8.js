"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7746],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42536:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),l=["components"],i={sidebar_position:1},p=void 0,u={unversionedId:"Hadoop/Hive/DML/\u6570\u636e\u5bfc\u5165",id:"Hadoop/Hive/DML/\u6570\u636e\u5bfc\u5165",title:"\u6570\u636e\u5bfc\u5165",description:"1. Load\uff1a",source:"@site/docs\\7-Hadoop\\9-Hive\\DML\\\u6570\u636e\u5bfc\u5165.md",sourceDirName:"7-Hadoop/9-Hive/DML",slug:"/Hadoop/Hive/DML/\u6570\u636e\u5bfc\u5165",permalink:"/learn/Hadoop/Hive/DML/\u6570\u636e\u5bfc\u5165",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u8868",permalink:"/learn/Hadoop/Hive/DDL/\u8868"},next:{title:"\u6570\u636e\u5bfc\u51fa",permalink:"/learn/Hadoop/Hive/DML/\u6570\u636e\u5bfc\u51fa"}},s={},c=[{value:"1. Load\uff1a",id:"1-load",level:2},{value:"2. Insert\uff1a",id:"2-insert",level:2},{value:"3. As Select\uff1a",id:"3-as-select",level:2},{value:"4. Location\uff1a",id:"4-location",level:2},{value:"5. Import\uff08\u4e0d\u5e38\u7528\uff09\uff1a",id:"5-import\u4e0d\u5e38\u7528",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-load"},"1. Load\uff1a"),(0,o.kt)("p",null,"\u5411\u8868\u4e2d\u5bfc\u5165\u6587\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"load data [local] inpath '\u6570\u636e\u7684path' [overwrite] into table table_name [partition (partcol1=val1,\u2026)];\n")),(0,o.kt)("p",null,"\uff081\uff09load data:\u8868\u793a\u52a0\u8f7d\u6570\u636e"),(0,o.kt)("p",null,"\uff082\uff09local:\u8868\u793a\u4ece\u672c\u5730\u52a0\u8f7d\u6570\u636e\u5230hive\u8868\uff1b",(0,o.kt)("strong",{parentName:"p"},"\u5426\u5219\u4eceHDFS\u52a0\u8f7d\u6570\u636e\u5230hive\u8868"),"\uff08\u526a\u5207\u65b9\u5f0f\uff09"),(0,o.kt)("p",null,"\uff083\uff09inpath:\u8868\u793a\u52a0\u8f7d\u6570\u636e\u7684\u8def\u5f84"),(0,o.kt)("p",null,"\uff084\uff09overwrite:\u8868\u793a\u8986\u76d6\u8868\u4e2d\u5df2\u6709\u6570\u636e\uff0c\u5426\u5219\u8868\u793a\u589e\u52a0"),(0,o.kt)("p",null,"\uff085\uff09into table:\u8868\u793a\u52a0\u8f7d\u5230\u54ea\u5f20\u8868"),(0,o.kt)("p",null,"\uff086\uff09table_name:\u8868\u793a\u5177\u4f53\u7684\u8868"),(0,o.kt)("p",null,"\uff087\uff09partition:\u8868\u793a\u4e0a\u4f20\u5230\u6307\u5b9a\u5206\u533a"),(0,o.kt)("h2",{id:"2-insert"},"2. Insert\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u57fa\u672c\u63d2\u5165\u6570\u636e")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"insert into table table_name values(1,'wangwu'),(2,'zhaoliu');\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u57fa\u672c\u6a21\u5f0f\u63d2\u5165\uff08\u6839\u636e\u5355\u5f20\u8868\u67e5\u8be2\u7ed3\u679c\uff09")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"insert overwrite table table_name \nselect id, name from student where month='201709';\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"\u591a\u8868\uff08\u591a\u5206\u533a\uff09\u63d2\u5165\u6a21\u5f0f\uff08\u6839\u636e\u591a\u5f20\u8868\u67e5\u8be2\u7ed3\u679c\uff09\uff08\u4e0d\u5e38\u7528\uff09")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"from student\ninsert overwrite table student partition(month='201707')\nselect id, name where month='201709'\ninsert overwrite table student partition(month='201706')\nselect id, name where month='201709';\n")),(0,o.kt)("h2",{id:"3-as-select"},"3. As Select\uff1a"),(0,o.kt)("p",null,"\u521b\u5efa\u8868\u7684\u65f6\u5019\u5bfc\u5165\u67e5\u8be2\u7ed3\u679c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"create table if not exists student2\nas \nselect id, name from student;\n")),(0,o.kt)("h2",{id:"4-location"},"4. Location\uff1a"),(0,o.kt)("p",null,"\u521b\u5efa\u8868\u65f6\u6307\u5b9a\u52a0\u8f7d\u6570\u636e\u8def\u5f84"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"create external table if not exists student2(\n    id int, name string\n)\nrow format delimited fields terminated by '\\t'\nlocation '/student;\n")),(0,o.kt)("h2",{id:"5-import\u4e0d\u5e38\u7528"},"5. Import\uff08\u4e0d\u5e38\u7528\uff09\uff1a"),(0,o.kt)("p",null,"\u6ce8\u610f\uff1a\u5148\u7528export\u5bfc\u51fa\u540e\uff0c\u518d\u5c06\u6570\u636e\u5bfc\u5165"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"import table student2 \nfrom '/user/hive/warehouse/export/student';\n")))}m.isMDXComponent=!0}}]);