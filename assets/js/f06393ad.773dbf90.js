"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[795],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=c(r),d=n,k=s["".concat(l,".").concat(d)]||s[d]||u[d]||i;return r?a.createElement(k,p(p({ref:t},m),{},{components:r})):a.createElement(k,p({ref:t},m))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,p=new Array(i);p[0]=s;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,p[1]=o;for(var c=2;c<i;c++)p[c]=r[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},89913:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var a=r(83117),n=r(80102),i=(r(67294),r(3905)),p=["components"],o={sidebar_position:7},l=void 0,c={unversionedId:"Hadoop/Hive/\u4f18\u5316/\u5408\u7406\u8bbe\u7f6eMap\u53caReduce\u6570",id:"Hadoop/Hive/\u4f18\u5316/\u5408\u7406\u8bbe\u7f6eMap\u53caReduce\u6570",title:"\u5408\u7406\u8bbe\u7f6eMap\u53caReduce\u6570",description:"1. \u590d\u6742\u6587\u4ef6\u589e\u52a0 Map \u6570\uff1a",source:"@site/docs\\Hadoop\\Hive\\\u4f18\u5316\\\u5408\u7406\u8bbe\u7f6eMap\u53caReduce\u6570.md",sourceDirName:"Hadoop/Hive/\u4f18\u5316",slug:"/Hadoop/Hive/\u4f18\u5316/\u5408\u7406\u8bbe\u7f6eMap\u53caReduce\u6570",permalink:"/learn/Hadoop/Hive/\u4f18\u5316/\u5408\u7406\u8bbe\u7f6eMap\u53caReduce\u6570",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\u4e25\u683c\u6a21\u5f0f",permalink:"/learn/Hadoop/Hive/\u4f18\u5316/\u4e25\u683c\u6a21\u5f0f"},next:{title:"Hadoop\u6570\u636e\u538b\u7f29",permalink:"/learn/Hadoop/Hive/\u538b\u7f29/Hadoop\u6570\u636e\u538b\u7f29"}},m={},u=[{value:"1. \u590d\u6742\u6587\u4ef6\u589e\u52a0 Map \u6570\uff1a",id:"1-\u590d\u6742\u6587\u4ef6\u589e\u52a0-map-\u6570",level:3},{value:"2. \u5c0f\u6587\u4ef6\u8fdb\u884c\u5408\u5e76\uff1a",id:"2-\u5c0f\u6587\u4ef6\u8fdb\u884c\u5408\u5e76",level:3},{value:"3. \u5408\u7406\u8bbe\u7f6eReduce\u6570\uff1a",id:"3-\u5408\u7406\u8bbe\u7f6ereduce\u6570",level:3}],s={toc:u};function d(e){var t=e.components,r=(0,n.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"1-\u590d\u6742\u6587\u4ef6\u589e\u52a0-map-\u6570"},"1. \u590d\u6742\u6587\u4ef6\u589e\u52a0 Map \u6570\uff1a"),(0,i.kt)("p",null,"\u589e\u52a0map\u7684\u65b9\u6cd5\u4e3a\uff1a\u6839\u636e\n",(0,i.kt)("inlineCode",{parentName:"p"},"computeSliteSize(Math.max(minSize,Math.min(maxSize,blocksize))) = blocksize(\u5927\u5c0f\u4e3a128M)"),"\n\u516c\u5f0f\uff0c\u8c03\u6574 ",(0,i.kt)("inlineCode",{parentName:"p"},"maxSize")," \u6700\u5927\u503c\u3002\u8ba9 ",(0,i.kt)("inlineCode",{parentName:"p"},"maxSize")," \u6700\u5927\u503c\u4f4e\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"blocksize")," \u5c31\u53ef\u4ee5\u589e\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},"map")," \u7684\u4e2a\u6570"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8bbe\u7f6e\u6700\u5927\u5207\u7247\u503c\u4e3a100\u4e2a\u5b57\u8282\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hive"},"set mapreduce.input.fileinputformat.split.maxsize=100;\n")),(0,i.kt)("h3",{id:"2-\u5c0f\u6587\u4ef6\u8fdb\u884c\u5408\u5e76"},"2. \u5c0f\u6587\u4ef6\u8fdb\u884c\u5408\u5e76\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5f00\u542fCombineHiveInputFormat\u6a21\u5f0f\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hive"},"set hive.input.format= org.apache.hadoop.hive.ql.io.CombineHiveInputFormat;\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5728Map-Reduce\u7684\u4efb\u52a1\u7ed3\u675f\u65f6\u5408\u5e76\u5c0f\u6587\u4ef6\u7684\u8bbe\u7f6e\uff1a"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5728map-only\u4efb\u52a1\u7ed3\u675f\u65f6\u5408\u5e76\u5c0f\u6587\u4ef6\uff0c\u9ed8\u8ba4true"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-hive"},"set hive.merge.mapfiles = true;\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5728map-reduce\u4efb\u52a1\u7ed3\u675f\u65f6\u5408\u5e76\u5c0f\u6587\u4ef6\uff0c\u9ed8\u8ba4false\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-hive"},"set hive.merge.mapredfiles = true;\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5408\u5e76\u6587\u4ef6\u7684\u5927\u5c0f\uff0c\u9ed8\u8ba4256M\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-hive"},"set hive.merge.size.per.task = 268435456;\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5f53\u8f93\u51fa\u6587\u4ef6\u7684\u5e73\u5747\u5927\u5c0f\u5c0f\u4e8e\u8be5\u503c\u65f6\uff0c\u542f\u52a8\u4e00\u4e2a\u72ec\u7acb\u7684map-reduce\u4efb\u52a1\u8fdb\u884c\u6587\u4ef6merge\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-hive"},"set hive.merge.smallfiles.avgsize = 16777216;\n")))))),(0,i.kt)("h3",{id:"3-\u5408\u7406\u8bbe\u7f6ereduce\u6570"},"3. \u5408\u7406\u8bbe\u7f6eReduce\u6570\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u8c03\u6574reduce\u4e2a\u6570\u65b9\u6cd5\u4e00\uff1a"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"\u6bcf\u4e2aReduce\u5904\u7406\u7684\u6570\u636e\u91cf\u9ed8\u8ba4\u662f256MB\uff1a")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-hive"},"hive.exec.reducers.bytes.per.reducer=256000000\n")),(0,i.kt)("ol",{parentName:"li",start:2},(0,i.kt)("li",{parentName:"ol"},"\u6bcf\u4e2a\u4efb\u52a1\u6700\u5927\u7684reduce\u6570\uff0c\u9ed8\u8ba4\u4e3a1009\uff1a")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-hive"},"hive.exec.reducers.max=1009\n")),(0,i.kt)("ol",{parentName:"li",start:3},(0,i.kt)("li",{parentName:"ol"},"\u8ba1\u7b97reducer\u6570\u7684\u516c\u5f0f\uff1a")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-hive"},"N=min(\u53c2\u65702\uff0c\u603b\u8f93\u5165\u6570\u636e\u91cf/\u53c2\u65701)\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u8c03\u6574reduce\u4e2a\u6570\u65b9\u6cd5\u4e8c\uff1a"),(0,i.kt)("p",{parentName:"li"},"\u5728hadoop\u7684mapred-default.xml\u6587\u4ef6\u4e2d\u4fee\u6539\n\u8bbe\u7f6e\u6bcf\u4e2ajob\u7684Reduce\u4e2a\u6570"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-hive"},"set mapreduce.job.reduces = 15;\n")))))}d.isMDXComponent=!0}}]);