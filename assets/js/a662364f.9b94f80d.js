"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3642],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return k}});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},i=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),i=d(a),k=l,c=i["".concat(s,".").concat(k)]||i[k]||u[k]||r;return a?n.createElement(c,o(o({ref:t},m),{},{components:a})):n.createElement(c,o({ref:t},m))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=i;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:l,o[1]=p;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}i.displayName="MDXCreateElement"},93892:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return u}});var n=a(83117),l=a(80102),r=(a(67294),a(3905)),o=["components"],p={sidebar_position:3},s=void 0,d={unversionedId:"Hadoop/Hadoop\u5b8c\u5168\u5206\u5e03\u5f0f\u642d\u5efa",id:"Hadoop/Hadoop\u5b8c\u5168\u5206\u5e03\u5f0f\u642d\u5efa",title:"Hadoop\u5b8c\u5168\u5206\u5e03\u5f0f\u642d\u5efa",description:"1. Linux \u5206\u53d1\u6307\u4ee4\uff1a",source:"@site/docs\\8-Hadoop\\Hadoop\u5b8c\u5168\u5206\u5e03\u5f0f\u642d\u5efa.md",sourceDirName:"8-Hadoop",slug:"/Hadoop/Hadoop\u5b8c\u5168\u5206\u5e03\u5f0f\u642d\u5efa",permalink:"/learn/Hadoop/Hadoop\u5b8c\u5168\u5206\u5e03\u5f0f\u642d\u5efa",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Hadoop\u642d\u5efa",permalink:"/learn/Hadoop/Hadoop\u642d\u5efa"},next:{title:"Hadoop\u5e38\u7528\u811a\u672c",permalink:"/learn/Hadoop/Hadoop\u5e38\u7528\u811a\u672c"}},m={},u=[{value:"1. Linux \u5206\u53d1\u6307\u4ee4\uff1a",id:"1-linux-\u5206\u53d1\u6307\u4ee4",level:2},{value:"1. scp\uff1a",id:"1-scp",level:3},{value:"2. rsync \u8fdc\u7a0b\u540c\u6b65\u5de5\u5177\uff08\u4f7f\u7528 yum \u5b89\u88c5\uff09\uff1a",id:"2-rsync-\u8fdc\u7a0b\u540c\u6b65\u5de5\u5177\u4f7f\u7528-yum-\u5b89\u88c5",level:3},{value:"2. \u81ea\u52a8\u5206\u53d1\u811a\u672c\uff1a",id:"2-\u81ea\u52a8\u5206\u53d1\u811a\u672c",level:2},{value:"3. SSH \u65e0\u5bc6\u767b\u5f55\uff1a",id:"3-ssh-\u65e0\u5bc6\u767b\u5f55",level:2},{value:"\u6ce8\u610f\uff1a",id:"\u6ce8\u610f",level:4},{value:"4. \u96c6\u7fa4\u914d\u7f6e\uff1a",id:"4-\u96c6\u7fa4\u914d\u7f6e",level:2},{value:"1. \u6838\u5fc3 \u914d\u7f6e\u6587\u4ef6\uff1a",id:"1-\u6838\u5fc3-\u914d\u7f6e\u6587\u4ef6",level:4},{value:"2. HDFS \u914d\u7f6e\u6587\u4ef6\uff1a",id:"2-hdfs-\u914d\u7f6e\u6587\u4ef6",level:4},{value:"3. YARN \u914d\u7f6e\u6587\u4ef6\uff1a",id:"3-yarn-\u914d\u7f6e\u6587\u4ef6",level:4},{value:"4. MapReduce \u914d\u7f6e\u6587\u4ef6\uff1a",id:"4-mapreduce-\u914d\u7f6e\u6587\u4ef6",level:4},{value:"5. \u96c6\u7fa4\u5206\u53d1\u914d\u7f6e\u6587\u4ef6\uff1a",id:"5-\u96c6\u7fa4\u5206\u53d1\u914d\u7f6e\u6587\u4ef6",level:4},{value:"5. \u7fa4\u8d77\u96c6\u7fa4\uff1a",id:"5-\u7fa4\u8d77\u96c6\u7fa4",level:2},{value:"1. \u914d\u7f6eworkers\uff1a",id:"1-\u914d\u7f6eworkers",level:3},{value:"\u6ce8\u610f\uff1a",id:"\u6ce8\u610f-1",level:5},{value:"2. \u542f\u52a8\u96c6\u7fa4",id:"2-\u542f\u52a8\u96c6\u7fa4",level:3},{value:"1. \u7b2c\u4e00\u6b21\u542f\u52a8\u96c6\u7fa4\uff1a",id:"1-\u7b2c\u4e00\u6b21\u542f\u52a8\u96c6\u7fa4",level:4},{value:"\u6ce8\u610f\uff1a",id:"\u6ce8\u610f-2",level:5},{value:"2. \u542f\u52a8HDFS\uff1a",id:"2-\u542f\u52a8hdfs",level:4},{value:"3. \u542f\u52a8YARN\uff1a",id:"3-\u542f\u52a8yarn",level:4},{value:"3. \u96c6\u7fa4\u542f\u52a8/\u505c\u6b62\u65b9\u5f0f\uff1a",id:"3-\u96c6\u7fa4\u542f\u52a8\u505c\u6b62\u65b9\u5f0f",level:3},{value:"1. \u5404\u4e2a\u670d\u52a1\u7ec4\u4ef6\u9010\u4e00\u542f\u52a8/\u505c\u6b62\uff1a",id:"1-\u5404\u4e2a\u670d\u52a1\u7ec4\u4ef6\u9010\u4e00\u542f\u52a8\u505c\u6b62",level:4},{value:"2. \u5404\u4e2a\u6a21\u5757\u5206\u5f00\u542f\u52a8/\u505c\u6b62\uff08\u914d\u7f6essh\u662f\u524d\u63d0\uff09\u5e38\u7528\uff1a",id:"2-\u5404\u4e2a\u6a21\u5757\u5206\u5f00\u542f\u52a8\u505c\u6b62\u914d\u7f6essh\u662f\u524d\u63d0\u5e38\u7528",level:4},{value:"6. \u914d\u7f6e\u5386\u53f2\u670d\u52a1\u5668\uff1a",id:"6-\u914d\u7f6e\u5386\u53f2\u670d\u52a1\u5668",level:2},{value:"7. \u914d\u7f6e\u65e5\u5fd7\u7684\u805a\u96c6\uff1a",id:"7-\u914d\u7f6e\u65e5\u5fd7\u7684\u805a\u96c6",level:2},{value:"8. \u96c6\u7fa4\u65f6\u95f4\u540c\u6b65\uff08\u53ef\u9009\uff09\uff1a",id:"8-\u96c6\u7fa4\u65f6\u95f4\u540c\u6b65\u53ef\u9009",level:2},{value:"1. \u65f6\u95f4\u670d\u52a1\u5668\u914d\u7f6e\uff08\u5fc5\u987broot\u7528\u6237\uff09\uff1a",id:"1-\u65f6\u95f4\u670d\u52a1\u5668\u914d\u7f6e\u5fc5\u987broot\u7528\u6237",level:3},{value:"2. \u5176\u4ed6\u673a\u5668\u914d\u7f6e\uff08\u5fc5\u987broot\u7528\u6237\uff09\uff1a",id:"2-\u5176\u4ed6\u673a\u5668\u914d\u7f6e\u5fc5\u987broot\u7528\u6237",level:3}],i={toc:u};function k(e){var t=e.components,p=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},i,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-linux-\u5206\u53d1\u6307\u4ee4"},"1. Linux \u5206\u53d1\u6307\u4ee4\uff1a"),(0,r.kt)("h3",{id:"1-scp"},"1. scp\uff1a"),(0,r.kt)("p",null,"scp\u53ef\u4ee5\u5b9e\u73b0\u670d\u52a1\u5668\u4e0e\u670d\u52a1\u5668\u4e4b\u95f4\u7684\u6570\u636e\u62f7\u8d1d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"scp    -r          $pdir/$fname              $user@hadoop$host:$pdir/$fname\n\u547d\u4ee4   \u9012\u5f52         \u8981\u62f7\u8d1d\u7684\u6587\u4ef6\u8def\u5f84/\u540d\u79f0             \u76ee\u7684\u7528\u6237@\u4e3b\u673a:\u76ee\u7684\u8def\u5f84/\u540d\u79f0\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5728hadoop102\u4e0a"),"\uff0c\u5c06hadoop102\u4e2d/opt/module/jdk1.8.0_212\u76ee\u5f55\u62f7\u8d1d\u5230hadoop103\u4e0a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"scp -r /opt/module/jdk1.8.0_212  jellyrain@hadoop103:/opt/module\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"hadoop103\u4e0a"),"\uff0c\u5c06hadoop102\u4e2d/opt/module/hadoop-3.1.3\u76ee\u5f55\u62f7\u8d1d\u5230hadoop103\u4e0a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"scp -r jellyrain@hadoop102:/opt/module/hadoop-3.1.3 /opt/module/\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5728hadoop103\u4e0a"),"\u64cd\u4f5c\uff0c\u5c06hadoop102\u4e2d/opt/module\u76ee\u5f55\u4e0b\u6240\u6709\u76ee\u5f55\u62f7\u8d1d\u5230hadoop104\u4e0a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"scp -r jellyrain@hadoop102:/opt/module/* jellyrain@hadoop104:/opt/module\n")),(0,r.kt)("h3",{id:"2-rsync-\u8fdc\u7a0b\u540c\u6b65\u5de5\u5177\u4f7f\u7528-yum-\u5b89\u88c5"},"2. rsync \u8fdc\u7a0b\u540c\u6b65\u5de5\u5177\uff08\u4f7f\u7528 yum \u5b89\u88c5\uff09\uff1a"),(0,r.kt)("p",null,"rsync\u4e3b\u8981\u7528\u4e8e\u5907\u4efd\u548c\u955c\u50cf\u3002\u5177\u6709\u901f\u5ea6\u5feb\u3001\u907f\u514d\u590d\u5236\u76f8\u540c\u5185\u5bb9\u548c\u652f\u6301\u7b26\u53f7\u94fe\u63a5\u7684\u4f18\u70b9\u3002"),(0,r.kt)("p",null,"rsync\u548cscp\u533a\u522b\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u7528 rsync \u505a\u6587\u4ef6\u7684\u590d\u5236\u8981\u6bd4 scp \u7684\u901f\u5ea6\u5feb\uff0crsync \u53ea\u5bf9\u5dee\u5f02\u6587\u4ef6\u505a\u66f4\u65b0"),(0,r.kt)("li",{parentName:"ol"},"scp \u662f\u628a\u6240\u6709\u6587\u4ef6\u90fd\u590d\u5236\u8fc7\u53bb")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"rsync    -av       $pdir/$fname              $user@hadoop$host:$pdir/$fname\n\u547d\u4ee4    \u9009\u9879\u53c2\u6570     \u8981\u62f7\u8d1d\u7684\u6587\u4ef6\u8def\u5f84/\u540d\u79f0              \u76ee\u7684\u7528\u6237@\u4e3b\u673a:\u76ee\u7684\u8def\u5f84/\u540d\u79f0\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f52\u6863\u62f7\u8d1d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-v"),(0,r.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u590d\u5236\u8fc7\u7a0b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-q"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7cbe\u7b80\u8f93\u51fa")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-u"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ec5\u4ec5\u8fdb\u884c\u66f4\u65b0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-l"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4fdd\u7559\u8f6f\u8fde\u63a5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-p"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4fdd\u6301\u6587\u4ef6\u6743\u9650")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-o"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4fdd\u6301\u6587\u4ef6\u5c5e\u4e3b\u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-g"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4fdd\u6301\u6587\u4ef6\u5c5e\u7ec4\u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-t"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4fdd\u6301\u6587\u4ef6\u65f6\u95f4\u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-version"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6253\u5370\u7248\u672c\u4fe1\u606f")))),(0,r.kt)("p",null,"\u628ahadoop102\u673a\u5668\u4e0a\u7684/opt/software\u76ee\u5f55\u540c\u6b65\u5230hadoop103\u670d\u52a1\u5668\u7684/opt/software\u76ee\u5f55\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"rsync -av /opt/software/* jellyrain@hadoop103:/opt/software\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53ef\u9009\uff1a",(0,r.kt)("a",{parentName:"strong",href:"https://www.linuxprobe.com/rsync-scp.html"},"rsync\u5b9e\u65f6\u540c\u6b65"))),(0,r.kt)("h2",{id:"2-\u81ea\u52a8\u5206\u53d1\u811a\u672c"},"2. \u81ea\u52a8\u5206\u53d1\u811a\u672c\uff1a"),(0,r.kt)("p",null,"\u8bf4\u660e\uff1a\u5728/home/",(0,r.kt)("strong",{parentName:"p"},"\u7528\u6237"),"/bin\u8fd9\u4e2a\u76ee\u5f55\u4e0b\u5b58\u653e\u7684\u811a\u672c\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u7528\u6237\u53ef\u4ee5\u5728\u7cfb\u7edf\u4efb\u4f55\u5730\u65b9\u76f4\u63a5\u6267\u884c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'#!/bin/bash\n#1. \u5224\u65ad\u53c2\u6570\u4e2a\u6570\nif [ $# -lt 1 ]\nthen\n  echo Not Enough Arguement!\n  exit;\nfi\n#2. \u904d\u5386\u96c6\u7fa4\u6240\u6709\u673a\u5668\nfor host in 192.168.231.101 192.168.231.102 192.168.231.103 # \u673a\u5668 IP \u6216\u8005 \u4f60\u8bbe\u7f6e\u7684 host \u503c\ndo\n  echo ====================  $host  ====================\n  #3. \u904d\u5386\u6240\u6709\u76ee\u5f55\uff0c\u6328\u4e2a\u53d1\u9001\n  for file in $@\n  do\n    #4. \u5224\u65ad\u6587\u4ef6\u662f\u5426\u5b58\u5728\n    if [ -e $file ]\n    then\n      #5. \u83b7\u53d6\u7236\u76ee\u5f55\n      pdir=$(cd -P $(dirname $file); pwd)\n      #6. \u83b7\u53d6\u5f53\u524d\u6587\u4ef6\u7684\u540d\u79f0\n      fname=$(basename $file)\n      ssh $host "mkdir -p $pdir"\n      rsync -av $pdir/$fname $host:$pdir\n    else\n      echo $file does not exists!\n    fi\n  done\ndone\n')),(0,r.kt)("p",null,"\u4fee\u6539\u811a\u672c xsync \u5177\u6709\u6267\u884c\u6743\u9650\uff08",(0,r.kt)("strong",{parentName:"p"},"\u4ee5\u4e0b\u6f14\u793a\u5206\u53d1\u90fd\u662f\u8fd9\u4e2a\u540d\u5b57"),"\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"chmod +x xsync\n")),(0,r.kt)("h2",{id:"3-ssh-\u65e0\u5bc6\u767b\u5f55"},"3. SSH \u65e0\u5bc6\u767b\u5f55\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"SSH \u5bc6\u94a5\u5de5\u4f5c\u6d41\u7a0b\uff1a")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(53567).Z,width:"806",height:"417"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u751f\u6210\u516c\u94a5\u548c\u79c1\u94a5")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ssh-keygen -t rsa\n")),(0,r.kt)("p",null,"\u7136\u540e\u6572\uff08\u4e09\u4e2a\u56de\u8f66\uff09\uff0c\u5c31\u4f1a\u751f\u6210\u4e24\u4e2a\u6587\u4ef6id_rsa\uff08\u79c1\u94a5\uff09\u3001id_rsa.pub\uff08\u516c\u94a5\uff09"),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u5c06\u516c\u94a5\u62f7\u8d1d\u5230\u8981\u514d\u5bc6\u767b\u5f55\u7684\u76ee\u6807\u673a\u5668\u4e0a\uff08",(0,r.kt)("strong",{parentName:"li"},"\u5305\u62ec\u81ea\u5df1"),"\uff09")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ssh-copy-id 192.168.231.102\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},".ssh\u6587\u4ef6\u5939\u4e0b\uff08~/.ssh\uff09\u7684\u6587\u4ef6\u529f\u80fd\u89e3\u91ca")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u5b57"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"known_hosts"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bb0\u5f55ssh\u8bbf\u95ee\u8fc7\u8ba1\u7b97\u673a\u7684\u516c\u94a5(public  key)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id_rsa"),(0,r.kt)("td",{parentName:"tr",align:null},"\u751f\u6210\u7684\u79c1\u94a5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id_rsa.pub"),(0,r.kt)("td",{parentName:"tr",align:null},"\u751f\u6210\u7684\u516c\u94a5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"authorized_keys"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b58\u653e\u6388\u6743\u8fc7\u7684\u65e0\u5bc6\u767b\u5f55\u670d\u52a1\u5668\u516c\u94a5")))),(0,r.kt)("h4",{id:"\u6ce8\u610f"},"\u6ce8\u610f\uff1a"),(0,r.kt)("p",null,"\u96c6\u7fa4\u6240\u6709\u673a\u5668\u90fd\u8981",(0,r.kt)("strong",{parentName:"p"},"\u6765\u4e00\u904d\u6765\u6574\u4e2a\u6d41\u7a0b"),"\u6765\u4fdd\u8bc1\u4e92\u76f8\u90fd\u53ef\u4ee5\u514d\u5bc6\u7801\u767b\u5f55"),(0,r.kt)("h2",{id:"4-\u96c6\u7fa4\u914d\u7f6e"},"4. \u96c6\u7fa4\u914d\u7f6e\uff1a"),(0,r.kt)("p",null,"Hadoop\u914d\u7f6e\u6587\u4ef6\u5206\u4e24\u7c7b\uff1a",(0,r.kt)("strong",{parentName:"p"},"\u9ed8\u8ba4\u914d\u7f6e"),"\u6587\u4ef6 \u548c ",(0,r.kt)("strong",{parentName:"p"},"\u81ea\u5b9a\u4e49\u914d\u7f6e"),"\u6587\u4ef6\uff0c\u53ea\u6709\u7528\u6237\u60f3\u4fee\u6539\u67d0\u4e00\u9ed8\u8ba4\u914d\u7f6e\u503c\u65f6\uff0c\u624d\u9700\u8981\u4fee\u6539\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6\uff0c\u66f4\u6539\u76f8\u5e94\u5c5e\u6027\u503c"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6\uff1a")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u8981\u83b7\u53d6\u7684\u9ed8\u8ba4\u6587\u4ef6"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6587\u4ef6\u5b58\u653e\u5728Hadoop\u7684jar\u5305\u4e2d\u7684\u4f4d\u7f6e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[core-default.xml]"),(0,r.kt)("td",{parentName:"tr",align:null},"hadoop-common-3.1.3.jar/  core-default.xml")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[hdfs-default.xml]"),(0,r.kt)("td",{parentName:"tr",align:null},"hadoop-hdfs-3.1.3.jar/  hdfs-default.xml")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[yarn-default.xml]"),(0,r.kt)("td",{parentName:"tr",align:null},"hadoop-yarn-common-3.1.3.jar/  yarn-default.xml")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[mapred-default.xml]"),(0,r.kt)("td",{parentName:"tr",align:null},"hadoop-mapreduce-client-core-3.1.3.jar/  mapred-default.xml")))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6\uff1a")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"core-site.xml\u3001hdfs-site.xml\u3001yarn-site.xml\u3001mapred-site.xml"),"\u56db\u4e2a\u914d\u7f6e\u6587\u4ef6\u5b58\u653e\u5728$HADOOP_HOME/etc/hadoop\u8fd9\u4e2a\u8def\u5f84\u4e0a\uff0c\u7528\u6237\u53ef\u4ee5\u6839\u636e\u9879\u76ee\u9700\u6c42\u91cd\u65b0\u8fdb\u884c\u4fee\u6539\u914d\u7f6e"),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u5e38\u7528\u7aef\u53e3\u53f7\u8bf4\u660e\uff1a")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Daemon"),(0,r.kt)("th",{parentName:"tr",align:null},"App"),(0,r.kt)("th",{parentName:"tr",align:null},"Hadoop2"),(0,r.kt)("th",{parentName:"tr",align:null},"Hadoop3"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NameNode Port"),(0,r.kt)("td",{parentName:"tr",align:null},"Hadoop HDFS NameNode"),(0,r.kt)("td",{parentName:"tr",align:null},"8020 / 9000"),(0,r.kt)("td",{parentName:"tr",align:null},"9820")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Hadoop HDFS NameNode HTTP UI"),(0,r.kt)("td",{parentName:"tr",align:null},"50070"),(0,r.kt)("td",{parentName:"tr",align:null},"9870")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Secondary NameNode Port"),(0,r.kt)("td",{parentName:"tr",align:null},"Secondary NameNode"),(0,r.kt)("td",{parentName:"tr",align:null},"50091"),(0,r.kt)("td",{parentName:"tr",align:null},"9869")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Secondary NameNode HTTP UI"),(0,r.kt)("td",{parentName:"tr",align:null},"50090"),(0,r.kt)("td",{parentName:"tr",align:null},"9868")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DataNode Port"),(0,r.kt)("td",{parentName:"tr",align:null},"Hadoop HDFS DataNode IPC"),(0,r.kt)("td",{parentName:"tr",align:null},"50020"),(0,r.kt)("td",{parentName:"tr",align:null},"9867")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Hadoop HDFS DataNode"),(0,r.kt)("td",{parentName:"tr",align:null},"50010"),(0,r.kt)("td",{parentName:"tr",align:null},"9866")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Hadoop HDFS DataNode HTTP UI"),(0,r.kt)("td",{parentName:"tr",align:null},"50075"),(0,r.kt)("td",{parentName:"tr",align:null},"9864")))),(0,r.kt)("h4",{id:"1-\u6838\u5fc3-\u914d\u7f6e\u6587\u4ef6"},"1. \u6838\u5fc3 \u914d\u7f6e\u6587\u4ef6\uff1a"),(0,r.kt)("p",null,"\u914d\u7f6e core-site.xml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd $HADOOP_HOME/etc/hadoop\n\nvim core-site.xml\n")),(0,r.kt)("p",null,"\u6587\u4ef6\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/xsl" href="configuration.xsl"?>\n\n<configuration>\n    \x3c!-- \u6307\u5b9aNameNode\u7684\u5730\u5740 --\x3e\n    <property>\n        <name>fs.defaultFS</name>\n        <value>hdfs://192.168.231.101:9820</value>\n    </property>\n    \x3c!-- \u6307\u5b9ahadoop\u6570\u636e\u7684\u5b58\u50a8\u76ee\u5f55 --\x3e\n    <property>\n        <name>hadoop.tmp.dir</name>\n        <value>/opt/module/hadoop-3.1.3/data</value>\n    </property>\n\n    \x3c!-- \u914d\u7f6eHDFS\u7f51\u9875\u767b\u5f55\u4f7f\u7528\u7684\u9759\u6001\u7528\u6237\u4e3ajellyrain --\x3e\n    <property>\n        <name>hadoop.http.staticuser.user</name>\n        <value>jellyrain</value>\n    </property>\n    \n    \x3c!-- \u914d\u7f6e\u8be5jellyrain(superUser)\u5141\u8bb8\u901a\u8fc7\u4ee3\u7406\u8bbf\u95ee\u7684\u4e3b\u673a\u8282\u70b9 --\x3e\n    <property>\n        <name>hadoop.proxyuser.jellyrain.hosts</name>\n        <value>*</value>\n    </property>\n    \x3c!-- \u914d\u7f6e\u8be5jellyrain(superUser)\u5141\u8bb8\u901a\u8fc7\u4ee3\u7406\u7528\u6237\u6240\u5c5e\u7ec4 --\x3e\n    <property>\n        <name>hadoop.proxyuser.jellyrain.groups</name>\n        <value>*</value>\n    </property>\n</configuration>\n')),(0,r.kt)("h4",{id:"2-hdfs-\u914d\u7f6e\u6587\u4ef6"},"2. HDFS \u914d\u7f6e\u6587\u4ef6\uff1a"),(0,r.kt)("p",null,"\u914d\u7f6e hdfs-site.xml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd $HADOOP_HOME/etc/hadoop\n\nvim hdfs-site.xml\n")),(0,r.kt)("p",null,"\u6587\u4ef6\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/xsl" href="configuration.xsl"?>\n\n<configuration>\n    \x3c!-- nn web\u7aef\u8bbf\u95ee\u5730\u5740--\x3e\n    <property>\n        <name>dfs.namenode.http-address</name>\n        <value>192.168.231.101:9870</value>\n    </property>\n    \x3c!-- 2nn web\u7aef\u8bbf\u95ee\u5730\u5740--\x3e\n    <property>\n        <name>dfs.namenode.secondary.http-address</name>\n        <value>192.168.231.103:9868</value>\n    </property>\n</configuration>\n')),(0,r.kt)("h4",{id:"3-yarn-\u914d\u7f6e\u6587\u4ef6"},"3. YARN \u914d\u7f6e\u6587\u4ef6\uff1a"),(0,r.kt)("p",null,"\u914d\u7f6e yarn-site.xml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd $HADOOP_HOME/etc/hadoop\n\nvim yarn-site.xml\n")),(0,r.kt)("p",null,"\u6587\u4ef6\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/xsl" href="configuration.xsl"?>\n\n<configuration>\n    \x3c!-- \u6307\u5b9aMR\u8d70shuffle --\x3e\n    <property>\n        <name>yarn.nodemanager.aux-services</name>\n        <value>mapreduce_shuffle</value>\n    </property>\n    \x3c!-- \u6307\u5b9aResourceManager\u7684\u5730\u5740--\x3e\n    <property>\n        <name>yarn.resourcemanager.hostname</name>\n        <value>192.168.231.102</value>\n    </property>\n    \x3c!-- \u73af\u5883\u53d8\u91cf\u7684\u7ee7\u627f --\x3e\n    <property>\n        <name>yarn.nodemanager.env-whitelist</name>\n        <value>JAVA_HOME,HADOOP_COMMON_HOME,HADOOP_HDFS_HOME,HADOOP_CONF_DIR,CLASSPATH_PREPEND_DISTCACHE,HADOOP_YARN_HOME,HADOOP_MAPRED_HOME</value>\n    </property>\n    \n    \x3c!-- \u5173\u95edyarn\u5bf9\u7269\u7406\u5185\u5b58\u548c\u865a\u62df\u5185\u5b58\u7684\u9650\u5236\u68c0\u67e5 --\x3e\n    <property>\n        <name>yarn.nodemanager.pmem-check-enabled</name>\n        <value>false</value>\n    </property>\n    <property>\n        <name>yarn.nodemanager.vmem-check-enabled</name>\n        <value>false</value>\n    </property>\n    \n     \x3c!-- \u4e0b\u9762\u4e3a\u53ef\u9009\u914d\u7f6e --\x3e\n    \x3c!-- yarn\u5bb9\u5668\u5141\u8bb8\u5206\u914d\u7684\u6700\u5927\u6700\u5c0f\u5185\u5b58 --\x3e\n    <property>\n        <name>yarn.scheduler.minimum-allocation-mb</name>\n        <value>512</value>\n    </property>\n    <property>\n        <name>yarn.scheduler.maximum-allocation-mb</name>\n        <value>4096</value>\n    </property>\n    \x3c!-- yarn\u5bb9\u5668\u5141\u8bb8\u7ba1\u7406\u7684\u7269\u7406\u5185\u5b58\u5927\u5c0f --\x3e\n    <property>\n        <name>yarn.nodemanager.resource.memory-mb</name>\n        <value>4096</value>\n    </property>\n</configuration>\n')),(0,r.kt)("h4",{id:"4-mapreduce-\u914d\u7f6e\u6587\u4ef6"},"4. MapReduce \u914d\u7f6e\u6587\u4ef6\uff1a"),(0,r.kt)("p",null,"\u914d\u7f6e mapred-site.xml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd $HADOOP_HOME/etc/hadoop\n\nvim mapred-site.xml\n")),(0,r.kt)("p",null,"\u6587\u4ef6\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/xsl" href="configuration.xsl"?>\n\n<configuration>\n    \x3c!-- \u6307\u5b9aMapReduce\u7a0b\u5e8f\u8fd0\u884c\u5728Yarn\u4e0a --\x3e\n    <property>\n        <name>mapreduce.framework.name</name>\n        <value>yarn</value>\n    </property>\n</configuration>\n')),(0,r.kt)("h4",{id:"5-\u96c6\u7fa4\u5206\u53d1\u914d\u7f6e\u6587\u4ef6"},"5. \u96c6\u7fa4\u5206\u53d1\u914d\u7f6e\u6587\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"xsync /opt/module/hadoop-3.1.3/etc/hadoop/ # Hadoop \u586b\u5199\u81ea\u5df1\u5b89\u88c5\u7684\u7248\u672c\n")),(0,r.kt)("h2",{id:"5-\u7fa4\u8d77\u96c6\u7fa4"},"5. \u7fa4\u8d77\u96c6\u7fa4\uff1a"),(0,r.kt)("h3",{id:"1-\u914d\u7f6eworkers"},"1. \u914d\u7f6eworkers\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"vim /opt/module/hadoop-3.1.3/etc/hadoop/workers # Hadoop \u586b\u5199\u81ea\u5df1\u5b89\u88c5\u7684\u7248\u672c\n")),(0,r.kt)("p",null,"\u5728\u8be5\u6587\u4ef6\u4e2d\u589e\u52a0\u5982\u4e0b\u5185\u5bb9\uff08\u4f60\u9700\u8981\u7fa4\u8d77\u7684\u673a\u5668IP\uff09\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"192.168.231.101\n192.168.231.102\n192.168.231.103\n")),(0,r.kt)("h5",{id:"\u6ce8\u610f-1"},"\u6ce8\u610f\uff1a"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8be5\u6587\u4ef6\u4e2d\u6dfb\u52a0\u7684\u5185\u5bb9\u7ed3\u5c3e\u4e0d\u5141\u8bb8\u6709\u7a7a\u683c\uff0c\u6587\u4ef6\u4e2d\u4e0d\u5141\u8bb8\u6709\u7a7a\u884c")),(0,r.kt)("p",null,"\u96c6\u7fa4\u5206\u53d1\u914d\u7f6e\u6587\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"xsync /opt/module/hadoop-3.1.3/etc # Hadoop \u586b\u5199\u81ea\u5df1\u5b89\u88c5\u7684\u7248\u672c\n")),(0,r.kt)("h3",{id:"2-\u542f\u52a8\u96c6\u7fa4"},"2. \u542f\u52a8\u96c6\u7fa4"),(0,r.kt)("h4",{id:"1-\u7b2c\u4e00\u6b21\u542f\u52a8\u96c6\u7fa4"},"1. \u7b2c\u4e00\u6b21\u542f\u52a8\u96c6\u7fa4\uff1a"),(0,r.kt)("p",null,"\u9700\u8981\u5728 \u5f00\u542fNameNode\u7684\u673a\u5668\uff08\u6309\u7167\u914d\u7f6e\u7684\u8bdd\u662f",(0,r.kt)("strong",{parentName:"p"},"101"),"\uff09 \u8282\u70b9\u683c\u5f0f\u5316NameNode"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"hdfs namenode -format\n")),(0,r.kt)("h5",{id:"\u6ce8\u610f-2"},"\u6ce8\u610f\uff1a"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u683c\u5f0f\u5316NameNode\uff0c\u4f1a\u4ea7\u751f\u65b0\u7684\u96c6\u7fa4id\uff0c\u5bfc\u81f4NameNode\u548cDataNode\u7684\u96c6\u7fa4id\u4e0d\u4e00\u81f4\uff0c\u96c6\u7fa4\u627e\u4e0d\u5230\u5df2\u5f80\u6570\u636e\u3002\u5982\u679c\u96c6\u7fa4\u5728\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u62a5\u9519\uff0c\u9700\u8981\u91cd\u65b0\u683c\u5f0f\u5316NameNode\u7684\u8bdd\uff0c\u4e00\u5b9a\u8981\u5148\u505c\u6b62namenode\u548cdatanode\u8fdb\u7a0b\uff0c\u5e76\u4e14\u8981\u5220\u9664\u6240\u6709\u673a\u5668\u7684data\u548clogs\u76ee\u5f55\uff0c\u7136\u540e\u518d\u8fdb\u884c\u683c\u5f0f\u5316")),(0,r.kt)("h4",{id:"2-\u542f\u52a8hdfs"},"2. \u542f\u52a8HDFS\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$HADOOP_HOME/sbin/start-dfs.sh\n")),(0,r.kt)("h4",{id:"3-\u542f\u52a8yarn"},"3. \u542f\u52a8YARN\uff1a"),(0,r.kt)("p",null,"\u5728\u914d\u7f6e\u4e86ResourceManager\u7684\u8282\u70b9\uff08\u6309\u7167\u914d\u7f6e\u7684\u8bdd\u662f",(0,r.kt)("strong",{parentName:"p"},"102"),"\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$HADOOP_HOME/sbin/start-yarn.sh\n")),(0,r.kt)("h3",{id:"3-\u96c6\u7fa4\u542f\u52a8\u505c\u6b62\u65b9\u5f0f"},"3. \u96c6\u7fa4\u542f\u52a8/\u505c\u6b62\u65b9\u5f0f\uff1a"),(0,r.kt)("h4",{id:"1-\u5404\u4e2a\u670d\u52a1\u7ec4\u4ef6\u9010\u4e00\u542f\u52a8\u505c\u6b62"},"1. \u5404\u4e2a\u670d\u52a1\u7ec4\u4ef6\u9010\u4e00\u542f\u52a8/\u505c\u6b62\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5206\u522b\u542f\u52a8/\u505c\u6b62HDFS\u7ec4\u4ef6")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"hdfs --daemon start/stop namenode/datanode/secondarynamenode\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u542f\u52a8/\u505c\u6b62YARN")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn --daemon start/stop resourcemanager/nodemanager\n")),(0,r.kt)("h4",{id:"2-\u5404\u4e2a\u6a21\u5757\u5206\u5f00\u542f\u52a8\u505c\u6b62\u914d\u7f6essh\u662f\u524d\u63d0\u5e38\u7528"},"2. \u5404\u4e2a\u6a21\u5757\u5206\u5f00\u542f\u52a8/\u505c\u6b62\uff08\u914d\u7f6essh\u662f\u524d\u63d0\uff09\u5e38\u7528\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6574\u4f53\u542f\u52a8/\u505c\u6b62HDFS")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shel"},"start-dfs.sh/stop-dfs.sh\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u6574\u4f53\u542f\u52a8/\u505c\u6b62YARN")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"start-yarn.sh/stop-yarn.sh\n")),(0,r.kt)("h2",{id:"6-\u914d\u7f6e\u5386\u53f2\u670d\u52a1\u5668"},"6. \u914d\u7f6e\u5386\u53f2\u670d\u52a1\u5668\uff1a"),(0,r.kt)("p",null,"\u4e3a\u4e86\u67e5\u770b\u7a0b\u5e8f\u7684\u5386\u53f2\u8fd0\u884c\u60c5\u51b5\uff0c\u9700\u8981\u914d\u7f6e\u4e00\u4e0b\u5386\u53f2\u670d\u52a1\u5668"),(0,r.kt)("p",null,"\u914d\u7f6e mapred-site.xml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd $HADOOP_HOME/etc/hadoop\n\nvim mapred-site.xml\n")),(0,r.kt)("p",null,"\u5728\u8be5\u6587\u4ef6\u91cc\u9762\u589e\u52a0 \u5982\u4e0b\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- \u5386\u53f2\u670d\u52a1\u5668\u7aef\u5730\u5740 --\x3e\n<property>\n    <name>mapreduce.jobhistory.address</name>\n    <value>192.168.231.101:10020</value>\n</property>\n\n\x3c!-- \u5386\u53f2\u670d\u52a1\u5668web\u7aef\u5730\u5740 --\x3e\n<property>\n    <name>mapreduce.jobhistory.webapp.address</name>\n    <value>192.168.231.101:19888</value>\n</property>\n")),(0,r.kt)("p",null,"\u5206\u53d1\u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"xsync $HADOOP_HOME/etc/hadoop/mapred-site.xml\n")),(0,r.kt)("p",null,"\u542f\u52a8\u5386\u53f2\u670d\u52a1\u5668\uff08\u548c\u914d\u7f6e\u586b\u7684\u670d\u52a1\u5668\u4e00\u6837\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mapred --daemon start historyserver\n")),(0,r.kt)("h2",{id:"7-\u914d\u7f6e\u65e5\u5fd7\u7684\u805a\u96c6"},"7. \u914d\u7f6e\u65e5\u5fd7\u7684\u805a\u96c6\uff1a"),(0,r.kt)("p",null,"\u65e5\u5fd7\u805a\u96c6\u6982\u5ff5\uff1a\u5e94\u7528\u8fd0\u884c\u5b8c\u6210\u4ee5\u540e\uff0c\u5c06\u7a0b\u5e8f\u8fd0\u884c\u65e5\u5fd7\u4fe1\u606f\u4e0a\u4f20\u5230HDFS\u7cfb\u7edf\u4e0a"),(0,r.kt)("p",null,"\u65e5\u5fd7\u805a\u96c6\u529f\u80fd\u597d\u5904\uff1a\u53ef\u4ee5\u65b9\u4fbf\u7684\u67e5\u770b\u5230\u7a0b\u5e8f\u8fd0\u884c\u8be6\u60c5\uff0c\u65b9\u4fbf\u5f00\u53d1\u8c03\u8bd5"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u5f00\u542f\u65e5\u5fd7\u805a\u96c6\u529f\u80fd\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u9700\u8981\u91cd\u65b0\u542f\u52a8NodeManager \u3001ResourceManager\u548cHistoryServer")),(0,r.kt)("p",null,"\u914d\u7f6e ",(0,r.kt)("strong",{parentName:"p"},"yarn-site.xml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd $HADOOP_HOME/etc/hadoop\n\nvim yarn-site.xml\n")),(0,r.kt)("p",null,"\u5728\u8be5\u6587\u4ef6\u91cc\u9762\u589e\u52a0 \u5982\u4e0b\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- \u5f00\u542f\u65e5\u5fd7\u805a\u96c6\u529f\u80fd --\x3e\n<property>\n    <name>yarn.log-aggregation-enable</name>\n    <value>true</value>\n</property>\n\x3c!-- \u8bbe\u7f6e\u65e5\u5fd7\u805a\u96c6\u670d\u52a1\u5668\u5730\u5740 --\x3e\n<property>  \n    <name>yarn.log.server.url</name>  \n    <value>http://192.168.231.101:19888/jobhistory/logs</value>\n</property>\n\x3c!-- \u8bbe\u7f6e\u65e5\u5fd7\u4fdd\u7559\u65f6\u95f4\u4e3a7\u5929 --\x3e\n<property>\n    <name>yarn.log-aggregation.retain-seconds</name>\n    <value>604800</value>\n</property>\n")),(0,r.kt)("p",null,"\u5206\u53d1\u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"xsync $HADOOP_HOME/etc/hadoop/yarn-site.xml\n")),(0,r.kt)("p",null,"\u5173\u95edNodeManager \u3001ResourceManager\u548cHistoryServer"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"stop-yarn.sh # ResourceManager \u542f\u52a8\u7684\u670d\u52a1\u5668\n\nmapred --daemon stop historyserver # HistoryServer \u542f\u52a8\u7684\u670d\u52a1\u5668\n")),(0,r.kt)("p",null,"\u542f\u52a8NodeManager \u3001ResourceManage\u548cHistoryServer"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"start-yarn.sh # ResourceManager \u542f\u52a8\u7684\u670d\u52a1\u5668\n\nmapred --daemon start historyserver # HistoryServer \u542f\u52a8\u7684\u670d\u52a1\u5668\n")),(0,r.kt)("p",null,"\u5220\u9664HDFS\u4e0a\u5df2\u7ecf\u5b58\u5728\u7684\u8f93\u51fa\u6587\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"hadoop fs -rm -r /output\n")),(0,r.kt)("h2",{id:"8-\u96c6\u7fa4\u65f6\u95f4\u540c\u6b65\u53ef\u9009"},"8. \u96c6\u7fa4\u65f6\u95f4\u540c\u6b65\uff08\u53ef\u9009\uff09\uff1a"),(0,r.kt)("p",null,"\u4e0d\u4f7f\u7528\u5916\u7f51\u7684\u60c5\u51b5\u4e0b\uff0c\u4f7f\u7528\u4e00\u53f0\u670d\u52a1\u5668\u4f5c\u4e3a\u65f6\u95f4\u540c\u6b65\u670d\u52a1\u5668\uff0c\u5176\u4ed6\u670d\u52a1\u5668\u5b9a\u65f6\u540c\u6b65\u65f6\u95f4"),(0,r.kt)("h3",{id:"1-\u65f6\u95f4\u670d\u52a1\u5668\u914d\u7f6e\u5fc5\u987broot\u7528\u6237"},"1. \u65f6\u95f4\u670d\u52a1\u5668\u914d\u7f6e\uff08\u5fc5\u987broot\u7528\u6237\uff09\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u67e5\u770b\u6240\u6709\u8282\u70b9ntpd\u670d\u52a1\u72b6\u6001\u548c\u5f00\u673a\u81ea\u542f\u52a8\u72b6\u6001")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo systemctl status ntpd\n\nsudo systemctl is-enabled ntpd\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u5728\u6240\u6709\u8282\u70b9\u5173\u95edntpd\u670d\u52a1\u548c\u81ea\u542f\u52a8")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo systemctl stop ntpd\n\nsudo systemctl disable ntpd\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u4fee\u6539hadoop102\u7684ntp.conf\u914d\u7f6e\u6587\u4ef6(\u5047\u8bbe\u5c06 ",(0,r.kt)("strong",{parentName:"li"},"101")," \u4f5c\u4e3a\u65f6\u95f4\u670d\u52a1\u5668)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo vim /etc/ntp.conf\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u89e3\u5f00\u8fd9\u4e00\u884c\u6ce8\u91ca\uff08\u6388\u6743192.168.1.0-192.168.1.255\u7f51\u6bb5\u4e0a\u7684\u6240\u6709\u673a\u5668\u53ef\u4ee5\u4ece\u8fd9\u53f0\u673a\u5668\u4e0a\u67e5\u8be2\u548c\u540c\u6b65\u65f6\u95f4\uff09\n# restrict 192.168.1.0 mask 255.255.255.0 nomodify notrap \n\n# \u6ce8\u91ca\u8fd9\u51e0\u884c\uff08\u96c6\u7fa4\u5728\u5c40\u57df\u7f51\u4e2d\uff0c\u4e0d\u4f7f\u7528\u5176\u4ed6\u4e92\u8054\u7f51\u4e0a\u7684\u65f6\u95f4\uff09\nserver 0.centos.pool.ntp.org iburst\nserver 1.centos.pool.ntp.org iburst\nserver 2.centos.pool.ntp.org iburst\nserver 3.centos.pool.ntp.org iburst\n\n# \u6dfb\u52a0\u8fd9\u51e0\u884c\uff08\u5f53\u8be5\u8282\u70b9\u4e22\u5931\u7f51\u7edc\u8fde\u63a5\uff0c\u4f9d\u7136\u53ef\u4ee5\u91c7\u7528\u672c\u5730\u65f6\u95f4\u4f5c\u4e3a\u65f6\u95f4\u670d\u52a1\u5668\u4e3a\u96c6\u7fa4\u4e2d\u7684\u5176\u4ed6\u8282\u70b9\u63d0\u4f9b\u65f6\u95f4\u540c\u6b65\uff09\nserver 127.127.1.0\nfudge 127.127.1.0 stratum 10\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"\u4fee\u6539 ",(0,r.kt)("strong",{parentName:"li"},"101")," \u7684 ",(0,r.kt)("strong",{parentName:"li"},"/etc/sysconfig/ntpd")," \u6587\u4ef6")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo vim /etc/sysconfig/ntpd\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u6dfb\u52a0\u8fd9\u4e00\u884c\nSYNC_HWCLOCK=yes\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"\u91cd\u65b0\u542f\u52a8 ",(0,r.kt)("strong",{parentName:"li"},"ntpd")," \u670d\u52a1")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo systemctl start ntpd\n")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e ",(0,r.kt)("strong",{parentName:"li"},"ntpd")," \u670d\u52a1\u5f00\u673a\u542f\u52a8")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo systemctl enable ntpd\n")),(0,r.kt)("h3",{id:"2-\u5176\u4ed6\u673a\u5668\u914d\u7f6e\u5fc5\u987broot\u7528\u6237"},"2. \u5176\u4ed6\u673a\u5668\u914d\u7f6e\uff08\u5fc5\u987broot\u7528\u6237\uff09\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5728\u5176\u4ed6\u673a\u5668\u914d\u7f6e10\u5206\u949f\u4e0e\u65f6\u95f4\u670d\u52a1\u5668\u540c\u6b65\u4e00\u6b21")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo crontab -e\n")),(0,r.kt)("p",null,"\u7f16\u5199\u5b9a\u65f6\u4efb\u52a1\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"*/10 * * * * /usr/sbin/ntpdate hadoop102\n")))}k.isMDXComponent=!0},53567:function(e,t,a){t.Z=a.p+"assets/images/20220416193615-0a2ce1f34aa53e83990ca8f6154a2ea4.png"}}]);