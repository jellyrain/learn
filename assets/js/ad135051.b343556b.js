"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5871],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),c=r,N=d["".concat(p,".").concat(c)]||d[c]||m[c]||o;return n?a.createElement(N,i(i({ref:t},s),{},{components:n})):a.createElement(N,i({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93435:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return m}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=["components"],l={sidebar_position:1},p=void 0,u={unversionedId:"Hadoop/\u751f\u4ea7\u8c03\u4f18/HDFS \u6838\u5fc3\u53c2\u6570",id:"Hadoop/\u751f\u4ea7\u8c03\u4f18/HDFS \u6838\u5fc3\u53c2\u6570",title:"HDFS \u6838\u5fc3\u53c2\u6570",description:"1. NameNode\u5185\u5b58\u751f\u4ea7\u914d\u7f6e\uff1a",source:"@site/docs\\7-Hadoop\\8-\u751f\u4ea7\u8c03\u4f18\\HDFS \u6838\u5fc3\u53c2\u6570.md",sourceDirName:"7-Hadoop/8-\u751f\u4ea7\u8c03\u4f18",slug:"/Hadoop/\u751f\u4ea7\u8c03\u4f18/HDFS \u6838\u5fc3\u53c2\u6570",permalink:"/learn/Hadoop/\u751f\u4ea7\u8c03\u4f18/HDFS \u6838\u5fc3\u53c2\u6570",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Yarn\u7684Tool\u63a5\u53e3\u6848\u4f8b",permalink:"/learn/Hadoop/Yarn/Yarn\u7684Tool\u63a5\u53e3\u6848\u4f8b"},next:{title:"HDFS \u96c6\u7fa4\u6d4b\u538b",permalink:"/learn/Hadoop/\u751f\u4ea7\u8c03\u4f18/HDFS \u96c6\u7fa4\u6d4b\u538b"}},s={},m=[{value:"1. NameNode\u5185\u5b58\u751f\u4ea7\u914d\u7f6e\uff1a",id:"1-namenode\u5185\u5b58\u751f\u4ea7\u914d\u7f6e",level:2},{value:"1. NameNode\u5185\u5b58\u8ba1\u7b97\uff1a",id:"1-namenode\u5185\u5b58\u8ba1\u7b97",level:3},{value:"2. Hadoop2.x\u7cfb\u5217\uff0c\u914d\u7f6e NameNode \u5185\u5b58\uff1a",id:"2-hadoop2x\u7cfb\u5217\u914d\u7f6e-namenode-\u5185\u5b58",level:3},{value:"3. Hadoop3.x\u7cfb\u5217\uff0c\u914d\u7f6e NameNode \u5185\u5b58\uff1a",id:"3-hadoop3x\u7cfb\u5217\u914d\u7f6e-namenode-\u5185\u5b58",level:3},{value:"2. NameNode\u5fc3\u8df3\u5e76\u53d1\u914d\u7f6e\uff1a",id:"2-namenode\u5fc3\u8df3\u5e76\u53d1\u914d\u7f6e",level:2},{value:"3. \u5f00\u542f\u56de\u6536\u7ad9\u914d\u7f6e\uff08\u9664\u975e\u9700\u8981 \u4e00\u822c\u4e0d\u5f00\u542f\uff09\uff1a",id:"3-\u5f00\u542f\u56de\u6536\u7ad9\u914d\u7f6e\u9664\u975e\u9700\u8981-\u4e00\u822c\u4e0d\u5f00\u542f",level:2}],d={toc:m};function c(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-namenode\u5185\u5b58\u751f\u4ea7\u914d\u7f6e"},"1. NameNode\u5185\u5b58\u751f\u4ea7\u914d\u7f6e\uff1a"),(0,o.kt)("h3",{id:"1-namenode\u5185\u5b58\u8ba1\u7b97"},"1. NameNode\u5185\u5b58\u8ba1\u7b97\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(63528).Z,width:"868",height:"148"})),(0,o.kt)("h3",{id:"2-hadoop2x\u7cfb\u5217\u914d\u7f6e-namenode-\u5185\u5b58"},"2. Hadoop2.x\u7cfb\u5217\uff0c\u914d\u7f6e NameNode \u5185\u5b58\uff1a"),(0,o.kt)("p",null,"NameNode\u5185\u5b58\u9ed8\u8ba42000m\uff0c\u5982\u679c\u670d\u52a1\u5668\u5185\u5b584G\uff0cNameNode\u5185\u5b58\u53ef\u4ee5\u914d\u7f6e3g"),(0,o.kt)("p",null,"\u5728hadoop-env.sh\u6587\u4ef6\u4e2d\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"HADOOP_NAMENODE_OPTS=-Xmx3072m\n")),(0,o.kt)("h3",{id:"3-hadoop3x\u7cfb\u5217\u914d\u7f6e-namenode-\u5185\u5b58"},"3. Hadoop3.x\u7cfb\u5217\uff0c\u914d\u7f6e NameNode \u5185\u5b58\uff1a"),(0,o.kt)("p",null,"\u67e5\u770bNameNode\u5360\u7528\u5185\u5b58\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"jps\n\njmap -heap 2611 # \u5bf9\u5e94 \u8fdb\u7a0bid\n")),(0,o.kt)("p",null,"\u63a8\u8350\u914d\u7f6e\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(20447).Z,width:"842",height:"528"})),(0,o.kt)("p",null,"\u5177\u4f53\u4fee\u6539 hadoop-env.sh\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'export HDFS_NAMENODE_OPTS="-Dhadoop.security.logger=INFO,RFAS -Xmx1024m"\n\nexport HDFS_DATANODE_OPTS="-Dhadoop.security.logger=ERROR,RFAS -Xmx1024m"\n')),(0,o.kt)("h2",{id:"2-namenode\u5fc3\u8df3\u5e76\u53d1\u914d\u7f6e"},"2. NameNode\u5fc3\u8df3\u5e76\u53d1\u914d\u7f6e\uff1a"),(0,o.kt)("p",null,"NameNode\u6709\u4e00\u4e2a\u5de5\u4f5c\u7ebf\u7a0b\u6c60\uff0c\u7528\u6765\u5904\u7406\u4e0d\u540cDataNode\u7684\u5e76\u53d1\u5fc3\u8df3\u4ee5\u53ca\u5ba2\u6237\u7aef\u5e76\u53d1\u7684\u5143\u6570\u636e\u64cd\u4f5c"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u8ba1\u7b97\u7ebf\u7a0b\u6570\u91cf\uff1a")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(86517).Z,width:"558",height:"36"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"cluster size\uff1a\u670d\u52a1\u5668\u6570\u91cf")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u914d\u7f6e hdfs-site.xml\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<property>\n    <name>dfs.namenode.handler.count</name>\n    \x3c!-- \u5f00\u542f\u7ebf\u7a0b\u6570\u91cf --\x3e\n    <value>21</value> \n</property>\n\n")),(0,o.kt)("h2",{id:"3-\u5f00\u542f\u56de\u6536\u7ad9\u914d\u7f6e\u9664\u975e\u9700\u8981-\u4e00\u822c\u4e0d\u5f00\u542f"},"3. \u5f00\u542f\u56de\u6536\u7ad9\u914d\u7f6e\uff08\u9664\u975e\u9700\u8981 \u4e00\u822c\u4e0d\u5f00\u542f\uff09\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u56de\u6536\u7ad9\u5de5\u4f5c\u673a\u5236")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(7633).Z,width:"475",height:"321"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u5f00\u542f\u56de\u6536\u7ad9\u529f\u80fd\u53c2\u6570\u8bf4\u660e")),(0,o.kt)("p",null,"\uff081\uff09\u9ed8\u8ba4\u503cfs.trash.interval = 0\uff0c",(0,o.kt)("strong",{parentName:"p"},"0\u8868\u793a\u7981\u7528\u56de\u6536\u7ad9"),"\uff1b\u5176\u4ed6\u503c\u8868\u793a\u8bbe\u7f6e\u6587\u4ef6\u7684\u5b58\u6d3b\u65f6\u95f4"),(0,o.kt)("p",null,"\uff082\uff09\u9ed8\u8ba4\u503cfs.trash.checkpoint.interval = 0\uff0c\u68c0\u67e5\u56de\u6536\u7ad9\u7684\u95f4\u9694\u65f6\u95f4\u3002",(0,o.kt)("strong",{parentName:"p"},"\u5982\u679c\u8be5\u503c\u4e3a0\uff0c\u5219\u8be5\u503c\u8bbe\u7f6e\u548cfs.trash.interval\u7684\u53c2\u6570\u503c\u76f8\u7b49")),(0,o.kt)("p",null,"\uff083\uff09\u8981\u6c42 ",(0,o.kt)("strong",{parentName:"p"},"fs.trash.checkpoint.interval <= fs.trash.interval")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u542f\u7528\u56de\u6536\u7ad9\uff1a"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"\u4fee\u6539core-site.xml\uff0c\u914d\u7f6e\u5783\u573e\u56de\u6536\u65f6\u95f4\u4e3a1\u5206\u949f")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<property>\n    <name>fs.trash.interval</name>\n    <value>1</value>\n</property>\n\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"\u67e5\u770b\u56de\u6536\u7ad9\uff1a")),(0,o.kt)("p",null,"\u56de\u6536\u7ad9\u76ee\u5f55\u5728HDFS\u96c6\u7fa4\u4e2d\u7684\u8def\u5f84\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"/user/atguigu/.Trash/\u2026")),(0,o.kt)("p",null,"\u6ce8\u610f\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u7f51\u9875\u4e0a\u76f4\u63a5\u5220\u9664\u7684\u6587\u4ef6\u4e5f\u4e0d\u4f1a\u8d70\u56de\u6536\u7ad9"),(0,o.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u7a0b\u5e8f\uff08java\uff09\u5220\u9664\u7684\u6587\u4ef6\u4e0d\u4f1a\u7ecf\u8fc7\u56de\u6536\u7ad9\uff0c\u9700\u8981\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"moveToTrash()")," \u624d\u8fdb\u5165\u56de\u6536\u7ad9"),(0,o.kt)("li",{parentName:"ol"},"\u53ea\u6709\u5728\u547d\u4ee4\u884c\u5229\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"hadoop fs -rm")," \u547d\u4ee4\u5220\u9664\u7684\u6587\u4ef6\u624d\u4f1a\u8d70\u56de\u6536\u7ad9"),(0,o.kt)("li",{parentName:"ol"},"\u6062\u590d\u56de\u6536\u7ad9\u6570\u636e ",(0,o.kt)("strong",{parentName:"li"},"\uff08\u5728\u672a\u6e05\u7a7a\u4e4b\u524d \u590d\u5236\u51fa\u6765\u3002\u3002\u3002\uff09\uff08\u65e0\u8bed\uff09"))))}c.isMDXComponent=!0},63528:function(e,t,n){t.Z=n.p+"assets/images/Snipaste_2022-05-04_09-22-50-05fcb6ebef9698e19ddf626d94b22bad.png"},20447:function(e,t,n){t.Z=n.p+"assets/images/Snipaste_2022-05-04_09-29-27-1fdb7f9b24ef158f68e80a3508ed0656.png"},86517:function(e,t){t.Z="data:image/png;base64,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"},7633:function(e,t,n){t.Z=n.p+"assets/images/Snipaste_2022-05-04_09-39-30-06ed5eeef54bf595fe0bfd54b047f8e1.png"}}]);