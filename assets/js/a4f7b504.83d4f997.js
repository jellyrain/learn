"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5082],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),i=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=i(e.components);return a.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=i(t),m=r,f=c["".concat(d,".").concat(m)]||c[m]||s[m]||o;return t?a.createElement(f,l(l({ref:n},u),{},{components:t})):a.createElement(f,l({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=c;var p={};for(var d in n)hasOwnProperty.call(n,d)&&(p[d]=n[d]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var i=2;i<o;i++)l[i]=t[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},70039:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return s}});var a=t(83117),r=t(80102),o=(t(67294),t(3905)),l=["components"],p={sidebar_position:3},d=void 0,i={unversionedId:"Hadoop/\u751f\u4ea7\u8c03\u4f18/HDFS \u591a\u76ee\u5f55",id:"Hadoop/\u751f\u4ea7\u8c03\u4f18/HDFS \u591a\u76ee\u5f55",title:"HDFS \u591a\u76ee\u5f55",description:"1. NameNode\u591a\u76ee\u5f55\u914d\u7f6e\uff08\u57fa\u672c\u4e0a\u4e0d\u7528\uff09\uff1a",source:"@site/docs\\7-Hadoop\\8-\u751f\u4ea7\u8c03\u4f18\\HDFS \u591a\u76ee\u5f55.md",sourceDirName:"7-Hadoop/8-\u751f\u4ea7\u8c03\u4f18",slug:"/Hadoop/\u751f\u4ea7\u8c03\u4f18/HDFS \u591a\u76ee\u5f55",permalink:"/learn/Hadoop/\u751f\u4ea7\u8c03\u4f18/HDFS \u591a\u76ee\u5f55",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"HDFS \u96c6\u7fa4\u6d4b\u538b",permalink:"/learn/Hadoop/\u751f\u4ea7\u8c03\u4f18/HDFS \u96c6\u7fa4\u6d4b\u538b"},next:{title:"HDFS \u96c6\u7fa4\u6269\u5bb9\u53ca\u7f29\u5bb9",permalink:"/learn/Hadoop/\u751f\u4ea7\u8c03\u4f18/HDFS \u96c6\u7fa4\u6269\u5bb9\u53ca\u7f29\u5bb9"}},u={},s=[{value:"1. NameNode\u591a\u76ee\u5f55\u914d\u7f6e\uff08\u57fa\u672c\u4e0a\u4e0d\u7528\uff09\uff1a",id:"1-namenode\u591a\u76ee\u5f55\u914d\u7f6e\u57fa\u672c\u4e0a\u4e0d\u7528",level:2},{value:"2. DataNode\u591a\u76ee\u5f55\u914d\u7f6e\uff1a",id:"2-datanode\u591a\u76ee\u5f55\u914d\u7f6e",level:2},{value:"3. \u96c6\u7fa4\u6570\u636e\u5747\u8861\u4e4b\u78c1\u76d8\u95f4\u6570\u636e\u5747\u8861\uff1a",id:"3-\u96c6\u7fa4\u6570\u636e\u5747\u8861\u4e4b\u78c1\u76d8\u95f4\u6570\u636e\u5747\u8861",level:2}],c={toc:s};function m(e){var n=e.components,t=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-namenode\u591a\u76ee\u5f55\u914d\u7f6e\u57fa\u672c\u4e0a\u4e0d\u7528"},"1. NameNode\u591a\u76ee\u5f55\u914d\u7f6e\uff08\u57fa\u672c\u4e0a\u4e0d\u7528\uff09\uff1a"),(0,o.kt)("p",null,"NameNode\u7684\u672c\u5730\u76ee\u5f55\u53ef\u4ee5\u914d\u7f6e\u6210\u591a\u4e2a\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u4e14\u6bcf\u4e2a\u76ee\u5f55\u5b58\u653e\u5185\u5bb9\u76f8\u540c"),"\uff0c\u589e\u52a0\u4e86\u53ef\u9760\u6027"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5177\u4f53\u914d\u7f6e\uff1a")),(0,o.kt)("p",null,"\uff081\uff09\u5728hdfs-site.xml\u6587\u4ef6\u4e2d\u6dfb\u52a0\u5982\u4e0b\u5185\u5bb9"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<property>\n     <name>dfs.namenode.name.dir</name>\n     <value>file://${hadoop.tmp.dir}/dfs/name1,file://${hadoop.tmp.dir}/dfs/name2</value>\n</property>\n")),(0,o.kt)("p",null,"\u6ce8\u610f\uff1a\u56e0\u4e3a\u6bcf\u53f0\u670d\u52a1\u5668\u8282\u70b9\u7684\u78c1\u76d8\u60c5\u51b5\u4e0d\u540c\uff0c\u6240\u4ee5\u8fd9\u4e2a\u914d\u7f6e\u914d\u5b8c\u4e4b\u540e\uff0c\u53ef\u4ee5\u9009\u62e9\u4e0d\u5206\u53d1"),(0,o.kt)("p",null,"\uff082\uff09\u505c\u6b62\u96c6\u7fa4\uff0c\u5220\u9664\u4e09\u53f0\u8282\u70b9\u7684data\u548clogs\u4e2d\u6240\u6709\u6570\u636e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[jellyrain@hadoop101 hadoop-3.1.3]$ rm -rf data/ logs/\n[jellyrain@hadoop102 hadoop-3.1.3]$ rm -rf data/ logs/\n[jellyrain@hadoop103 hadoop-3.1.3]$ rm -rf data/ logs/\n")),(0,o.kt)("p",null,"\uff083\uff09\u683c\u5f0f\u5316\u96c6\u7fa4\u5e76\u542f\u52a8"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[jellyrain@hadoop101 hadoop-3.1.3]$ bin/hdfs namenode -format\n[jellyrain@hadoop101 hadoop-3.1.3]$ sbin/start-dfs.sh\n")),(0,o.kt)("h2",{id:"2-datanode\u591a\u76ee\u5f55\u914d\u7f6e"},"2. DataNode\u591a\u76ee\u5f55\u914d\u7f6e\uff1a"),(0,o.kt)("p",null,"DataNode\u53ef\u4ee5\u914d\u7f6e\u6210\u591a\u4e2a\u76ee\u5f55\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u6bcf\u4e2a\u76ee\u5f55\u5b58\u50a8\u7684\u6570\u636e\u4e0d\u4e00\u6837"),"\uff08\u6570\u636e\u4e0d\u662f\u526f\u672c\uff09"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5177\u4f53\u914d\u7f6e\uff1a")),(0,o.kt)("p",null,"\u5728hdfs-site.xml\u6587\u4ef6\u4e2d\u6dfb\u52a0\u5982\u4e0b\u5185\u5bb9"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<property>\n     <name>dfs.datanode.data.dir</name>\n     <value>file://${hadoop.tmp.dir}/dfs/data1,file://${hadoop.tmp.dir}/dfs/data2</value>\n</property>\n")),(0,o.kt)("h2",{id:"3-\u96c6\u7fa4\u6570\u636e\u5747\u8861\u4e4b\u78c1\u76d8\u95f4\u6570\u636e\u5747\u8861"},"3. \u96c6\u7fa4\u6570\u636e\u5747\u8861\u4e4b\u78c1\u76d8\u95f4\u6570\u636e\u5747\u8861\uff1a"),(0,o.kt)("p",null,"\u751f\u4ea7\u73af\u5883\uff0c\u7531\u4e8e\u786c\u76d8\u7a7a\u95f4\u4e0d\u8db3\uff0c\u5f80\u5f80\u9700\u8981\u589e\u52a0\u4e00\u5757\u786c\u76d8\u3002\u521a\u52a0\u8f7d\u7684\u786c\u76d8\u6ca1\u6709\u6570\u636e\u65f6\uff0c\u53ef\u4ee5\u6267\u884c\u78c1\u76d8\u6570\u636e\u5747\u8861\u547d\u4ee4\u3002",(0,o.kt)("strong",{parentName:"p"},"\uff08Hadoop3.x\u65b0\u7279\u6027\uff09")),(0,o.kt)("p",null,"\uff081\uff09\u751f\u6210\u5747\u8861\u8ba1\u5212\uff08\u53ea\u6709\u4e00\u5757\u78c1\u76d8\uff0c\u4e0d\u4f1a\u751f\u6210\u8ba1\u5212\uff09"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"hdfs diskbalancer -plan hadoop103\n")),(0,o.kt)("p",null,"\uff082\uff09\u6267\u884c\u5747\u8861\u8ba1\u5212"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"hdfs diskbalancer -execute hadoop103.plan.json\n")),(0,o.kt)("p",null,"\uff083\uff09\u67e5\u770b\u5f53\u524d\u5747\u8861\u4efb\u52a1\u7684\u6267\u884c\u60c5\u51b5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"hdfs diskbalancer -query hadoop103\n")),(0,o.kt)("p",null,"\uff084\uff09\u53d6\u6d88\u5747\u8861\u4efb\u52a1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"hdfs diskbalancer -cancel hadoop103.plan.json\n")))}m.isMDXComponent=!0}}]);