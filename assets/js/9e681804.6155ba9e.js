"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3993],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return c}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),u=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},d=function(t){var e=u(t.components);return n.createElement(i.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),s=u(a),c=r,k=s["".concat(i,".").concat(c)]||s[c]||m[c]||l;return a?n.createElement(k,p(p({ref:e},d),{},{components:a})):n.createElement(k,p({ref:e},d))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=s;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:r,p[1]=o;for(var u=2;u<l;u++)p[u]=a[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},6946:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return m}});var n=a(83117),r=a(80102),l=(a(67294),a(3905)),p=["components"],o={sidebar_position:1},i=void 0,u={unversionedId:"Hadoop/Hive/\u538b\u7f29/Hadoop\u6570\u636e\u538b\u7f29",id:"Hadoop/Hive/\u538b\u7f29/Hadoop\u6570\u636e\u538b\u7f29",title:"Hadoop\u6570\u636e\u538b\u7f29",description:"1. \u538b\u7f29\u7684\u597d\u5904\u548c\u574f\u5904\uff1a",source:"@site/docs\\7-Hadoop\\9-Hive\\\u538b\u7f29\\Hadoop\u6570\u636e\u538b\u7f29.md",sourceDirName:"7-Hadoop/9-Hive/\u538b\u7f29",slug:"/Hadoop/Hive/\u538b\u7f29/Hadoop\u6570\u636e\u538b\u7f29",permalink:"/learn/Hadoop/Hive/\u538b\u7f29/Hadoop\u6570\u636e\u538b\u7f29",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u5408\u7406\u8bbe\u7f6eMap\u53caReduce\u6570",permalink:"/learn/Hadoop/Hive/\u4f18\u5316/\u5408\u7406\u8bbe\u7f6eMap\u53caReduce\u6570"},next:{title:"\u5f00\u542fMR\u538b\u7f29",permalink:"/learn/Hadoop/Hive/\u538b\u7f29/\u5f00\u542fMR\u538b\u7f29"}},d={},m=[{value:"1. \u538b\u7f29\u7684\u597d\u5904\u548c\u574f\u5904\uff1a",id:"1-\u538b\u7f29\u7684\u597d\u5904\u548c\u574f\u5904",level:2},{value:"2. \u538b\u7f29\u539f\u5219\uff1a",id:"2-\u538b\u7f29\u539f\u5219",level:2},{value:"3. MR \u652f\u6301\u7684\u538b\u7f29\u7f16\u7801\uff1a",id:"3-mr-\u652f\u6301\u7684\u538b\u7f29\u7f16\u7801",level:2},{value:"1. \u538b\u7f29\u7b97\u6cd5\u5bf9\u6bd4\u4ecb\u7ecd\uff1a",id:"1-\u538b\u7f29\u7b97\u6cd5\u5bf9\u6bd4\u4ecb\u7ecd",level:3},{value:"2. \u538b\u7f29\u6027\u80fd\u7684\u6bd4\u8f83\uff1a",id:"2-\u538b\u7f29\u6027\u80fd\u7684\u6bd4\u8f83",level:3},{value:"4. \u538b\u7f29\u65b9\u5f0f\u9009\u62e9\uff1a",id:"4-\u538b\u7f29\u65b9\u5f0f\u9009\u62e9",level:2},{value:"1. Gzip \u538b\u7f29\uff1a",id:"1-gzip-\u538b\u7f29",level:3},{value:"2. Bzip2 \u538b\u7f29\uff1a",id:"2-bzip2-\u538b\u7f29",level:3},{value:"3. Lzo \u538b\u7f29\uff1a",id:"3-lzo-\u538b\u7f29",level:3},{value:"4. Snappy \u538b\u7f29\uff1a",id:"4-snappy-\u538b\u7f29",level:3},{value:"5. \u538b\u7f29\u4f4d\u7f6e\u9009\u62e9\uff1a",id:"5-\u538b\u7f29\u4f4d\u7f6e\u9009\u62e9",level:2},{value:"6. \u538b\u7f29\u53c2\u6570\u914d\u7f6e\uff1a",id:"6-\u538b\u7f29\u53c2\u6570\u914d\u7f6e",level:2},{value:"7. \u538b\u7f29\u5b9e\u64cd\u6848\u4f8b\uff1a",id:"7-\u538b\u7f29\u5b9e\u64cd\u6848\u4f8b",level:2},{value:"1. Map \u8f93\u51fa\u7aef\u91c7\u7528\u538b\u7f29\uff1a",id:"1-map-\u8f93\u51fa\u7aef\u91c7\u7528\u538b\u7f29",level:3},{value:"2. Reduce \u8f93\u51fa\u7aef\u91c7\u7528\u538b\u7f29\uff1a",id:"2-reduce-\u8f93\u51fa\u7aef\u91c7\u7528\u538b\u7f29",level:3}],s={toc:m};function c(t){var e=t.components,o=(0,r.Z)(t,p);return(0,l.kt)("wrapper",(0,n.Z)({},s,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1-\u538b\u7f29\u7684\u597d\u5904\u548c\u574f\u5904"},"1. \u538b\u7f29\u7684\u597d\u5904\u548c\u574f\u5904\uff1a"),(0,l.kt)("p",null,"\u538b\u7f29\u7684\u4f18\u70b9\uff1a\u4ee5\u51cf\u5c11\u78c1\u76d8 IO\u3001\u51cf\u5c11\u78c1\u76d8\u5b58\u50a8\u7a7a\u95f4\u3002"),(0,l.kt)("p",null,"\u538b\u7f29\u7684\u7f3a\u70b9\uff1a\u589e\u52a0 CPU \u5f00\u9500"),(0,l.kt)("h2",{id:"2-\u538b\u7f29\u539f\u5219"},"2. \u538b\u7f29\u539f\u5219\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u8fd0\u7b97\u5bc6\u96c6\u578b\u7684 Job\uff0c\u5c11\u7528\u538b\u7f29"),(0,l.kt)("li",{parentName:"ol"},"IO \u5bc6\u96c6\u578b\u7684 Job\uff0c\u591a\u7528\u538b\u7f29")),(0,l.kt)("h2",{id:"3-mr-\u652f\u6301\u7684\u538b\u7f29\u7f16\u7801"},"3. MR \u652f\u6301\u7684\u538b\u7f29\u7f16\u7801\uff1a"),(0,l.kt)("h3",{id:"1-\u538b\u7f29\u7b97\u6cd5\u5bf9\u6bd4\u4ecb\u7ecd"},"1. \u538b\u7f29\u7b97\u6cd5\u5bf9\u6bd4\u4ecb\u7ecd\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u538b\u7f29\u683c\u5f0f"),(0,l.kt)("th",{parentName:"tr",align:null},"Hadoop \u81ea\u5e26\uff1f"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7b97\u6cd5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6587\u4ef6\u6269\u5c55\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u53ef\u5207\u7247"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6362\u6210\u538b\u7f29\u683c\u5f0f\u540e\uff0c\u539f\u6765\u7684\u7a0b\u5e8f\u662f\u5426\u9700\u8981\u4fee\u6539"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DEFLATE"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\uff0c\u76f4\u63a5\u4f7f\u7528"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFLATE"),(0,l.kt)("td",{parentName:"tr",align:null},".deflate"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u548c\u6587\u672c\u5904\u7406\u4e00\u6837\uff0c\u4e0d\u9700\u8981\u4fee\u6539")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Gzip"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\uff0c\u76f4\u63a5\u4f7f\u7528"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFLATE"),(0,l.kt)("td",{parentName:"tr",align:null},".gz"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u548c\u6587\u672c\u5904\u7406\u4e00\u6837\uff0c\u4e0d\u9700\u8981\u4fee\u6539")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bzip2"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\uff0c\u76f4\u63a5\u4f7f\u7528"),(0,l.kt)("td",{parentName:"tr",align:null},"bzip2"),(0,l.kt)("td",{parentName:"tr",align:null},".bz2"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"\u662f")),(0,l.kt)("td",{parentName:"tr",align:null},"\u548c\u6587\u672c\u5904\u7406\u4e00\u6837\uff0c\u4e0d\u9700\u8981\u4fee\u6539")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LZO"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"\u5426\uff0c\u9700\u8981\u5b89\u88c5")),(0,l.kt)("td",{parentName:"tr",align:null},"LZO"),(0,l.kt)("td",{parentName:"tr",align:null},".lzo"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"\u662f")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"\u9700\u8981\u5efa\u7d22\u5f15\uff0c\u8fd8\u9700\u8981\u6307\u5b9a\u8f93\u5165\u683c\u5f0f"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Snappy"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\uff0c\u76f4\u63a5\u4f7f\u7528"),(0,l.kt)("td",{parentName:"tr",align:null},"Snappy"),(0,l.kt)("td",{parentName:"tr",align:null},".snappy"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u548c\u6587\u672c\u5904\u7406\u4e00\u6837\uff0c\u4e0d\u9700\u8981\u4fee\u6539")))),(0,l.kt)("h3",{id:"2-\u538b\u7f29\u6027\u80fd\u7684\u6bd4\u8f83"},"2. \u538b\u7f29\u6027\u80fd\u7684\u6bd4\u8f83\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u538b\u7f29\u7b97\u6cd5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u539f\u59cb\u6587\u4ef6\u5927\u5c0f"),(0,l.kt)("th",{parentName:"tr",align:null},"\u538b\u7f29\u6587\u4ef6\u5927\u5c0f"),(0,l.kt)("th",{parentName:"tr",align:null},"\u538b\u7f29\u901f\u5ea6"),(0,l.kt)("th",{parentName:"tr",align:null},"\u89e3\u538b\u901f\u5ea6"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gzip"),(0,l.kt)("td",{parentName:"tr",align:null},"8.3GB"),(0,l.kt)("td",{parentName:"tr",align:null},"1.8GB"),(0,l.kt)("td",{parentName:"tr",align:null},"17.5MB/s"),(0,l.kt)("td",{parentName:"tr",align:null},"58MB/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bzip2"),(0,l.kt)("td",{parentName:"tr",align:null},"8.3GB"),(0,l.kt)("td",{parentName:"tr",align:null},"1.1GB"),(0,l.kt)("td",{parentName:"tr",align:null},"2.4MB/s"),(0,l.kt)("td",{parentName:"tr",align:null},"9.5MB/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LZO"),(0,l.kt)("td",{parentName:"tr",align:null},"8.3GB"),(0,l.kt)("td",{parentName:"tr",align:null},"2.9GB"),(0,l.kt)("td",{parentName:"tr",align:null},"49.3MB/s"),(0,l.kt)("td",{parentName:"tr",align:null},"74.6MB/s")))),(0,l.kt)("p",null,"\u9ad8\u901f\u89e3\u538b\u7f29\uff1asnappy ",(0,l.kt)("a",{parentName:"p",href:"http://google.github.io/snappy/"},"\u4ecb\u7ecd\u7f51\u7ad9")),(0,l.kt)("h2",{id:"4-\u538b\u7f29\u65b9\u5f0f\u9009\u62e9"},"4. \u538b\u7f29\u65b9\u5f0f\u9009\u62e9\uff1a"),(0,l.kt)("p",null,"\u538b\u7f29\u65b9\u5f0f\u9009\u62e9\u65f6\u91cd\u70b9\u8003\u8651\uff1a",(0,l.kt)("strong",{parentName:"p"},"\u538b\u7f29/\u89e3\u538b\u7f29\u901f\u5ea6\u3001\u538b\u7f29\u7387"),"\uff08\u538b\u7f29\u540e\u5b58\u50a8\u5927\u5c0f\uff09\u3001",(0,l.kt)("strong",{parentName:"p"},"\u538b\u7f29\u540e\u662f\u5426\u53ef\u4ee5\u652f\u6301\u5207\u7247")),(0,l.kt)("h3",{id:"1-gzip-\u538b\u7f29"},"1. Gzip \u538b\u7f29\uff1a"),(0,l.kt)("p",null,"\u4f18\u70b9\uff1a\u538b\u7f29\u7387\u6bd4\u8f83\u9ad8"),(0,l.kt)("p",null,"\u7f3a\u70b9\uff1a\u4e0d\u652f\u6301 Split\uff1b\u538b\u7f29/\u89e3\u538b\u901f\u5ea6\u4e00\u822c"),(0,l.kt)("h3",{id:"2-bzip2-\u538b\u7f29"},"2. Bzip2 \u538b\u7f29\uff1a"),(0,l.kt)("p",null,"\u4f18\u70b9\uff1a\u538b\u7f29\u7387\u9ad8\uff1b\u652f\u6301 Split"),(0,l.kt)("p",null,"\u7f3a\u70b9\uff1a\u538b\u7f29/\u89e3\u538b\u901f\u5ea6\u6162"),(0,l.kt)("h3",{id:"3-lzo-\u538b\u7f29"},"3. Lzo \u538b\u7f29\uff1a"),(0,l.kt)("p",null,"\u4f18\u70b9\uff1a\u538b\u7f29/\u89e3\u538b\u901f\u5ea6\u6bd4\u8f83\u5feb\uff1b\u652f\u6301 Split"),(0,l.kt)("p",null,"\u7f3a\u70b9\uff1a\u538b\u7f29\u7387\u4e00\u822c\uff1b\u60f3\u652f\u6301\u5207\u7247\u9700\u8981\u989d\u5916\u521b\u5efa\u7d22\u5f15"),(0,l.kt)("h3",{id:"4-snappy-\u538b\u7f29"},"4. Snappy \u538b\u7f29\uff1a"),(0,l.kt)("p",null,"\u4f18\u70b9\uff1a\u538b\u7f29\u548c\u89e3\u538b\u7f29\u901f\u5ea6\u5feb"),(0,l.kt)("p",null,"\u7f3a\u70b9\uff1a\u4e0d\u652f\u6301 Split\uff1b\u538b\u7f29\u7387\u4e00\u822c"),(0,l.kt)("h2",{id:"5-\u538b\u7f29\u4f4d\u7f6e\u9009\u62e9"},"5. \u538b\u7f29\u4f4d\u7f6e\u9009\u62e9\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(32381).Z,width:"1263",height:"535"})),(0,l.kt)("h2",{id:"6-\u538b\u7f29\u53c2\u6570\u914d\u7f6e"},"6. \u538b\u7f29\u53c2\u6570\u914d\u7f6e\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4e3a\u4e86\u652f\u6301\u591a\u79cd\u538b\u7f29/\u89e3\u538b\u7f29\u7b97\u6cd5\uff0cHadoop \u5f15\u5165\u4e86\u7f16\u7801/\u89e3\u7801\u5668\uff1a")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u538b\u7f29\u683c\u5f0f"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5bf9\u5e94\u7684\u7f16\u7801/\u89e3\u7801\u5668"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DEFLATE"),(0,l.kt)("td",{parentName:"tr",align:null},"org.apache.hadoop.io.compress.DefaultCodec")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gzip"),(0,l.kt)("td",{parentName:"tr",align:null},"org.apache.hadoop.io.compress.GzipCodec")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bzip2"),(0,l.kt)("td",{parentName:"tr",align:null},"org.apache.hadoop.io.compress.BZip2Codec")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LZO"),(0,l.kt)("td",{parentName:"tr",align:null},"com.hadoop.compression.lzo.LzopCodec")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Snappy ",(0,l.kt)("strong",{parentName:"td"},"\uff08window \u9ed8\u8ba4\u4e0d\u5e26\uff09")),(0,l.kt)("td",{parentName:"tr",align:null},"org.apache.hadoop.io.compress.SnappyCodec")))),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u8981\u5728 Hadoop \u4e2d\u542f\u7528\u538b\u7f29\uff0c\u53ef\u4ee5\u914d\u7f6e\u5982\u4e0b\u53c2\u6570\uff1a")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9636\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5efa\u8bae"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"io.compression.codecs \uff08\u5728 core-site.xml \u4e2d\u914d\u7f6e\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0\uff0c\u8fd9\u4e2a\u9700\u8981\u5728\u547d\u4ee4\u884c\u8f93\u5165 hadoop checknative \u67e5\u770b"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f93\u5165\u538b\u7f29"),(0,l.kt)("td",{parentName:"tr",align:null},"Hadoop \u4f7f\u7528\u6587\u4ef6\u6269\u5c55\u540d\u5224\u65ad\u662f\u5426\u652f\u6301\u67d0\u79cd\u7f16\u89e3\u7801\u5668")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mapreduce.map.output.compress\uff08\u5728 mapred-site.xml \u4e2d\u914d\u7f6e\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"mapper \u8f93\u51fa"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd9\u4e2a\u53c2\u6570\u8bbe\u4e3a true \u542f\u7528\u538b\u7f29")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mapreduce.map.output.compress.codec\uff08\u5728 mapred-site.xml \u4e2d\u914d\u7f6e\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"org.apache.hadoop.io.compress.DefaultCodec"),(0,l.kt)("td",{parentName:"tr",align:null},"mapper \u8f93\u51fa"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f01\u4e1a\u591a\u4f7f\u7528 LZO \u6216 Snappy \u7f16\u89e3\u7801\u5668\u5728\u6b64\u9636\u6bb5\u538b\u7f29\u6570\u636e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mapreduce.output.fileoutputformat.compress\uff08\u5728 mapred-site.xml \u4e2d\u914d\u7f6e\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"reducer \u8f93\u51fa"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd9\u4e2a\u53c2\u6570\u8bbe\u4e3a true \u542f\u7528\u538b\u7f29")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mapreduce.output.fileoutputformat.compress.codec\uff08\u5728 mapred-site.xml \u4e2d\u914d\u7f6e\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"org.apache.hadoop.io.compress.DefaultCodec"),(0,l.kt)("td",{parentName:"tr",align:null},"reducer \u8f93\u51fa"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u6807\u51c6\u5de5\u5177\u6216\u8005\u7f16\u89e3\u7801\u5668\uff0c\u5982 gzip \u548c bzip2")))),(0,l.kt)("h2",{id:"7-\u538b\u7f29\u5b9e\u64cd\u6848\u4f8b"},"7. \u538b\u7f29\u5b9e\u64cd\u6848\u4f8b\uff1a"),(0,l.kt)("h3",{id:"1-map-\u8f93\u51fa\u7aef\u91c7\u7528\u538b\u7f29"},"1. Map \u8f93\u51fa\u7aef\u91c7\u7528\u538b\u7f29\uff1a"),(0,l.kt)("p",null,"\u5373\u4f7f\u4f60\u7684 MapReduce \u7684\u8f93\u5165\u8f93\u51fa\u6587\u4ef6\u90fd\u662f\u672a\u538b\u7f29\u7684\u6587\u4ef6\uff0c\u4f60\u4ecd\u7136\u53ef\u4ee5\u5bf9 Map \u4efb\u52a1\u7684\u4e2d\u95f4\u7ed3\u679c\u8f93\u51fa\u505a\u538b\u7f29\uff0c\u56e0\u4e3a\u5b83\u8981\u5199\u5728\u786c\u76d8\u5e76\u4e14\u901a\u8fc7\u7f51\u7edc\u4f20\u8f93\u5230 Reduce \u8282\u70b9\uff0c\u5bf9\u5176\u538b\u7f29\u53ef\u4ee5\u63d0\u9ad8\u5f88\u591a\u6027\u80fd\uff0c\u8fd9\u4e9b\u5de5\u4f5c\u53ea\u8981\u8bbe\u7f6e\u4e24\u4e2a\u5c5e\u6027\u5373\u53ef"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63d0\u4f9b\u7684 Hadoop \u6e90\u7801\u652f\u6301\u7684\u538b\u7f29\u683c\u5f0f\u6709\uff1aBZip2Codec\u3001DefaultCodec\u3001Snappy \uff08CentOS7 \u4ee5\u4e0a\u81ea\u5e26\uff09\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'package com.atguigu.mapreduce.compress;\nimport java.io.IOException;\nimport org.apache.hadoop.conf.Configuration;\nimport org.apache.hadoop.fs.Path;\nimport org.apache.hadoop.io.IntWritable;\nimport org.apache.hadoop.io.Text;\nimport org.apache.hadoop.io.compress.BZip2Codec;\nimport org.apache.hadoop.io.compress.CompressionCodec;\nimport org.apache.hadoop.io.compress.GzipCodec;\nimport org.apache.hadoop.mapreduce.Job;\nimport org.apache.hadoop.mapreduce.lib.input.FileInputFormat;\nimport org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;\n\npublic class WordCountDriver {\n\n    public static void main(String[] args) throws IOException, ClassNotFoundException, InterruptedException {\n\n        Configuration conf = new Configuration();\n\n        // \u5f00\u542fmap\u7aef\u8f93\u51fa\u538b\u7f29\n        conf.setBoolean("mapreduce.map.output.compress", true);\n\n        // \u8bbe\u7f6emap\u7aef\u8f93\u51fa\u538b\u7f29\u65b9\u5f0f                                   \u538b\u7f29\u5668\n        conf.setClass("mapreduce.map.output.compress.codec", BZip2Codec.class,CompressionCodec.class);\n\n        Job job = Job.getInstance(conf);\n\n        job.setJarByClass(WordCountDriver.class);\n\n        job.setMapperClass(WordCountMapper.class);\n        job.setReducerClass(WordCountReducer.class);\n\n        job.setMapOutputKeyClass(Text.class);\n        job.setMapOutputValueClass(IntWritable.class);\n\n        job.setOutputKeyClass(Text.class);\n        job.setOutputValueClass(IntWritable.class);\n\n        FileInputFormat.setInputPaths(job, new Path(args[0]));\n        FileOutputFormat.setOutputPath(job, new Path(args[1]));\n\n        boolean result = job.waitForCompletion(true);\n\n        System.exit(result ? 0 : 1);\n    }\n}\n')),(0,l.kt)("h3",{id:"2-reduce-\u8f93\u51fa\u7aef\u91c7\u7528\u538b\u7f29"},"2. Reduce \u8f93\u51fa\u7aef\u91c7\u7528\u538b\u7f29\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"package com.atguigu.mapreduce.compress;\nimport java.io.IOException;\nimport org.apache.hadoop.conf.Configuration;\nimport org.apache.hadoop.fs.Path;\nimport org.apache.hadoop.io.IntWritable;\nimport org.apache.hadoop.io.Text;\nimport org.apache.hadoop.io.compress.BZip2Codec;\nimport org.apache.hadoop.io.compress.DefaultCodec;\nimport org.apache.hadoop.io.compress.GzipCodec;\nimport org.apache.hadoop.io.compress.Lz4Codec;\nimport org.apache.hadoop.io.compress.SnappyCodec;\nimport org.apache.hadoop.mapreduce.Job;\nimport org.apache.hadoop.mapreduce.lib.input.FileInputFormat;\nimport org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;\n\npublic class WordCountDriver {\n\n    public static void main(String[] args) throws IOException, ClassNotFoundException, InterruptedException {\n\n        Configuration conf = new Configuration();\n\n        Job job = Job.getInstance(conf);\n\n        job.setJarByClass(WordCountDriver.class);\n\n        job.setMapperClass(WordCountMapper.class);\n        job.setReducerClass(WordCountReducer.class);\n\n        job.setMapOutputKeyClass(Text.class);\n        job.setMapOutputValueClass(IntWritable.class);\n\n        job.setOutputKeyClass(Text.class);\n        job.setOutputValueClass(IntWritable.class);\n\n        FileInputFormat.setInputPaths(job, new Path(args[0]));\n        FileOutputFormat.setOutputPath(job, new Path(args[1]));\n\n        // \u8bbe\u7f6ereduce\u7aef\u8f93\u51fa\u538b\u7f29\u5f00\u542f\n        FileOutputFormat.setCompressOutput(job, true);\n\n        // \u8bbe\u7f6e\u538b\u7f29\u7684\u65b9\u5f0f\n        FileOutputFormat.setOutputCompressorClass(job, BZip2Codec.class);\n//      FileOutputFormat.setOutputCompressorClass(job, GzipCodec.class);\n//      FileOutputFormat.setOutputCompressorClass(job, DefaultCodec.class);\n\n        boolean result = job.waitForCompletion(true);\n\n        System.exit(result?0:1);\n    }\n}\n")))}c.isMDXComponent=!0},32381:function(t,e,a){e.Z=a.p+"assets/images/Snipaste_2022-04-24_16-05-18-214d9279656b9a6020a467687bd3ad93.png"}}]);