"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8854],{3905:function(e,t,a){a.d(t,{Zo:function(){return i},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},i=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),k=c(a),d=r,m=k["".concat(l,".").concat(d)]||k[d]||s[d]||p;return a?n.createElement(m,o(o({ref:t},i),{},{components:a})):n.createElement(m,o({ref:t},i))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,o=new Array(p);o[0]=k;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var c=2;c<p;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},47669:function(e,t,a){a.r(t),a.d(t,{assets:function(){return i},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return s}});var n=a(83117),r=a(80102),p=(a(67294),a(3905)),o=["components"],u={sidebar_position:8},l=void 0,c={unversionedId:"Hadoop/MapReduce/MapReduce\u5185\u6838\u89e3\u6790",id:"Hadoop/MapReduce/MapReduce\u5185\u6838\u89e3\u6790",title:"MapReduce\u5185\u6838\u89e3\u6790",description:"1. MapTask \u5de5\u4f5c\u673a\u5236\uff1a",source:"@site/docs\\8-Hadoop\\6-MapReduce\\MapReduce\u5185\u6838\u89e3\u6790.md",sourceDirName:"8-Hadoop/6-MapReduce",slug:"/Hadoop/MapReduce/MapReduce\u5185\u6838\u89e3\u6790",permalink:"/learn/Hadoop/MapReduce/MapReduce\u5185\u6838\u89e3\u6790",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"OutputFormat\u6570\u636e\u8f93\u51fa",permalink:"/learn/Hadoop/MapReduce/OutputFormat\u6570\u636e\u8f93\u51fa"},next:{title:"Join\u5e94\u7528",permalink:"/learn/Hadoop/MapReduce/Join\u5e94\u7528"}},i={},s=[{value:"1. MapTask \u5de5\u4f5c\u673a\u5236\uff1a",id:"1-maptask-\u5de5\u4f5c\u673a\u5236",level:2},{value:"2. ReduceTask\u5de5\u4f5c\u673a\u5236\uff1a",id:"2-reducetask\u5de5\u4f5c\u673a\u5236",level:2},{value:"3. ReduceTask\u5e76\u884c\u5ea6\u51b3\u5b9a\u673a\u5236\uff1a",id:"3-reducetask\u5e76\u884c\u5ea6\u51b3\u5b9a\u673a\u5236",level:2},{value:"1. \u8bbe\u7f6eReduceTask\u5e76\u884c\u5ea6\uff08\u4e2a\u6570\uff09\uff1a",id:"1-\u8bbe\u7f6ereducetask\u5e76\u884c\u5ea6\u4e2a\u6570",level:3},{value:"2. \u6ce8\u610f\uff1a",id:"2-\u6ce8\u610f",level:3}],k={toc:s};function d(e){var t=e.components,u=(0,r.Z)(e,o);return(0,p.kt)("wrapper",(0,n.Z)({},k,u,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"1-maptask-\u5de5\u4f5c\u673a\u5236"},"1. MapTask \u5de5\u4f5c\u673a\u5236\uff1a"),(0,p.kt)("p",null,(0,p.kt)("img",{src:a(26949).Z,width:"1326",height:"662"})),(0,p.kt)("p",null,"\u200b\t\uff081\uff09Read\u9636\u6bb5\uff1aMapTask\u901a\u8fc7InputFormat\u83b7\u5f97\u7684RecordReader\uff0c\u4ece\u8f93\u5165InputSplit\u4e2d\u89e3\u6790\u51fa\u4e00\u4e2a\u4e2akey/value"),(0,p.kt)("p",null,"\u200b    \uff082\uff09Map\u9636\u6bb5\uff1a\u8be5\u8282\u70b9\u4e3b\u8981\u662f\u5c06\u89e3\u6790\u51fa\u7684key/value\u4ea4\u7ed9\u7528\u6237\u7f16\u5199map()\u51fd\u6570\u5904\u7406\uff0c\u5e76\u4ea7\u751f\u4e00\u7cfb\u5217\u65b0\u7684key/value"),(0,p.kt)("p",null,"\u200b    \uff083\uff09Collect\u6536\u96c6\u9636\u6bb5\uff1a\u5728\u7528\u6237\u7f16\u5199map()\u51fd\u6570\u4e2d\uff0c\u5f53\u6570\u636e\u5904\u7406\u5b8c\u6210\u540e\uff0c\u4e00\u822c\u4f1a\u8c03\u7528OutputCollector.collect()\u8f93\u51fa\u7ed3\u679c\u3002\u5728\u8be5\u51fd\u6570\u5185\u90e8\uff0c\u5b83\u4f1a\u5c06\u751f\u6210\u7684key/value\u5206\u533a\uff08\u8c03\u7528Partitioner\uff09\uff0c",(0,p.kt)("strong",{parentName:"p"},"\u5e76\u5199\u5165\u4e00\u4e2a\u73af\u5f62\u5185\u5b58\u7f13\u51b2\u533a\u4e2d")),(0,p.kt)("p",null,"\u200b    \uff084\uff09Spill\u9636\u6bb5\uff1a\u5373\u201c\u6ea2\u5199\u201d\uff0c\u5f53\u73af\u5f62\u7f13\u51b2\u533a\u6ee1\u540e\uff0c",(0,p.kt)("strong",{parentName:"p"},"MapReduce\u4f1a\u5c06\u6570\u636e\u5199\u5230\u672c\u5730\u78c1\u76d8\u4e0a\uff0c\u751f\u6210\u4e00\u4e2a\u4e34\u65f6\u6587\u4ef6"),"\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5c06\u6570\u636e\u5199\u5165\u672c\u5730\u78c1\u76d8\u4e4b\u524d\uff0c",(0,p.kt)("strong",{parentName:"p"},"\u5148\u8981\u5bf9\u6570\u636e\u8fdb\u884c\u4e00\u6b21\u672c\u5730\u6392\u5e8f\uff0c\u5e76\u5728\u5fc5\u8981\u65f6\u5bf9\u6570\u636e\u8fdb\u884c\u5408\u5e76\u3001\u538b\u7f29\u7b49\u64cd\u4f5c")),(0,p.kt)("p",null,"\u200b    \u6ea2\u5199\u9636\u6bb5\u8be6\u60c5\uff1a"),(0,p.kt)("p",null,"\u200b    \u6b65\u9aa41\uff1a\u5229\u7528",(0,p.kt)("strong",{parentName:"p"},"\u5feb\u901f\u6392\u5e8f\u7b97\u6cd5\u5bf9\u7f13\u5b58\u533a\u5185\u7684\u6570\u636e\u8fdb\u884c\u6392\u5e8f"),"\uff0c\u6392\u5e8f\u65b9\u5f0f\u662f\uff0c",(0,p.kt)("strong",{parentName:"p"},"\u5148\u6309\u7167\u5206\u533a\u7f16\u53f7Partition\u8fdb\u884c\u6392\u5e8f\uff0c\u7136\u540e\u6309\u7167key\u8fdb\u884c\u6392\u5e8f"),"\u3002\u8fd9\u6837\uff0c\u7ecf\u8fc7\u6392\u5e8f\u540e\uff0c\u6570\u636e\u4ee5\u5206\u533a\u4e3a\u5355\u4f4d\u805a\u96c6\u5728\u4e00\u8d77\uff0c\u4e14\u540c\u4e00\u5206\u533a\u5185\u6240\u6709\u6570\u636e\u6309\u7167key\u6709\u5e8f"),(0,p.kt)("p",null,"\u200b    \u6b65\u9aa42\uff1a",(0,p.kt)("strong",{parentName:"p"},"\u6309\u7167\u5206\u533a\u7f16\u53f7\u7531\u5c0f\u5230\u5927\u4f9d\u6b21\u5c06\u6bcf\u4e2a\u5206\u533a\u4e2d\u7684\u6570\u636e\u5199\u5165\u4efb\u52a1\u5de5\u4f5c\u76ee\u5f55\u4e0b\u7684\u4e34\u65f6\u6587\u4ef6output/spillN.out"),"\uff08N\u8868\u793a\u5f53\u524d\u6ea2\u5199\u6b21\u6570\uff09\u4e2d\u3002",(0,p.kt)("strong",{parentName:"p"},"\u5982\u679c\u7528\u6237\u8bbe\u7f6e\u4e86Combiner\uff0c\u5219\u5199\u5165\u6587\u4ef6\u4e4b\u524d\uff0c\u5bf9\u6bcf\u4e2a\u5206\u533a\u4e2d\u7684\u6570\u636e\u8fdb\u884c\u4e00\u6b21\u805a\u96c6\u64cd\u4f5c")),(0,p.kt)("p",null,"\u200b    \u6b65\u9aa43\uff1a",(0,p.kt)("strong",{parentName:"p"},"\u5c06\u5206\u533a\u6570\u636e\u7684\u5143\u4fe1\u606f\u5199\u5230\u5185\u5b58\u7d22\u5f15\u6570\u636e\u7ed3\u6784SpillRecord\u4e2d\uff0c\u5176\u4e2d\u6bcf\u4e2a\u5206\u533a\u7684\u5143\u4fe1\u606f\u5305\u62ec\u5728\u4e34\u65f6\u6587\u4ef6\u4e2d\u7684\u504f\u79fb\u91cf\u3001\u538b\u7f29\u524d\u6570\u636e\u5927\u5c0f\u548c\u538b\u7f29\u540e\u6570\u636e\u5927\u5c0f"),"\u3002",(0,p.kt)("strong",{parentName:"p"},"\u5982\u679c\u5f53\u524d\u5185\u5b58\u7d22\u5f15\u5927\u5c0f\u8d85\u8fc71MB\uff0c\u5219\u5c06\u5185\u5b58\u7d22\u5f15\u5199\u5230\u6587\u4ef6output/spillN.out.index\u4e2d")),(0,p.kt)("p",null,"\u200b    \uff085\uff09Merge\u9636\u6bb5\uff1a\u5f53\u6240\u6709\u6570\u636e\u5904\u7406\u5b8c\u6210\u540e\uff0c",(0,p.kt)("strong",{parentName:"p"},"MapTask\u5bf9\u6240\u6709\u4e34\u65f6\u6587\u4ef6\u8fdb\u884c\u4e00\u6b21\u5408\u5e76"),"\uff0c\u4ee5",(0,p.kt)("strong",{parentName:"p"},"\u786e\u4fdd\u6700\u7ec8\u53ea\u4f1a\u751f\u6210\u4e00\u4e2a\u6570\u636e\u6587\u4ef6")),(0,p.kt)("p",null,"\u200b    ",(0,p.kt)("strong",{parentName:"p"},"\u5f53\u6240\u6709\u6570\u636e\u5904\u7406\u5b8c\u540e\uff0cMapTask\u4f1a\u5c06\u6240\u6709\u4e34\u65f6\u6587\u4ef6\u5408\u5e76\u6210\u4e00\u4e2a\u5927\u6587\u4ef6\uff0c\u5e76\u4fdd\u5b58\u5230\u6587\u4ef6output/file.out\u4e2d\uff0c\u540c\u65f6\u751f\u6210\u76f8\u5e94\u7684\u7d22\u5f15\u6587\u4ef6output/file.out.index")),(0,p.kt)("p",null,"\u200b    \u5728\u8fdb\u884c\u6587\u4ef6\u5408\u5e76\u8fc7\u7a0b\u4e2d\uff0cMapTask\u4ee5\u5206\u533a\u4e3a\u5355\u4f4d\u8fdb\u884c\u5408\u5e76\u3002\u5bf9\u4e8e\u67d0\u4e2a\u5206\u533a\uff0c\u5b83\u5c06\u91c7\u7528\u591a\u8f6e\u9012\u5f52\u5408\u5e76\u7684\u65b9\u5f0f\u3002\u6bcf\u8f6e\u5408\u5e76mapreduce.task.io.sort.factor\uff08\u9ed8\u8ba410\uff09\u4e2a\u6587\u4ef6\uff0c\u5e76\u5c06\u4ea7\u751f\u7684\u6587\u4ef6\u91cd\u65b0\u52a0\u5165\u5f85\u5408\u5e76\u5217\u8868\u4e2d\uff0c\u5bf9\u6587\u4ef6\u6392\u5e8f\u540e\uff0c\u91cd\u590d\u4ee5\u4e0a\u8fc7\u7a0b\uff0c\u76f4\u5230\u6700\u7ec8\u5f97\u5230\u4e00\u4e2a\u5927\u6587\u4ef6"),(0,p.kt)("p",null,"\u200b    ",(0,p.kt)("strong",{parentName:"p"},"\u8ba9\u6bcf\u4e2aMapTask\u6700\u7ec8\u53ea\u751f\u6210\u4e00\u4e2a\u6570\u636e\u6587\u4ef6\uff0c\u53ef\u907f\u514d\u540c\u65f6\u6253\u5f00\u5927\u91cf\u6587\u4ef6\u548c\u540c\u65f6\u8bfb\u53d6\u5927\u91cf\u5c0f\u6587\u4ef6\u4ea7\u751f\u7684\u968f\u673a\u8bfb\u53d6\u5e26\u6765\u5f00\u9500")),(0,p.kt)("h2",{id:"2-reducetask\u5de5\u4f5c\u673a\u5236"},"2. ReduceTask\u5de5\u4f5c\u673a\u5236\uff1a"),(0,p.kt)("p",null,(0,p.kt)("img",{src:a(51689).Z,width:"1286",height:"601"})),(0,p.kt)("p",null,"\u200b    \uff081\uff09Copy\u9636\u6bb5\uff1aReduceTask\u4ece\u5404\u4e2aMapTask\u4e0a\u8fdc\u7a0b\u62f7\u8d1d\u4e00\u7247\u6570\u636e\uff0c",(0,p.kt)("strong",{parentName:"p"},"\u5e76\u9488\u5bf9\u67d0\u4e00\u7247\u6570\u636e\uff0c\u5982\u679c\u5176\u5927\u5c0f\u8d85\u8fc7\u4e00\u5b9a\u9608\u503c\uff0c\u5219\u5199\u5230\u78c1\u76d8\u4e0a\uff0c\u5426\u5219\u76f4\u63a5\u653e\u5230\u5185\u5b58\u4e2d")),(0,p.kt)("p",null,"\u200b    \uff082\uff09Sort\u9636\u6bb5\uff1a\u5728\u8fdc\u7a0b\u62f7\u8d1d\u6570\u636e\u7684\u540c\u65f6\uff0cReduceTask\u542f\u52a8\u4e86",(0,p.kt)("strong",{parentName:"p"},"\u4e24\u4e2a\u540e\u53f0\u7ebf\u7a0b\u5bf9\u5185\u5b58\u548c\u78c1\u76d8\u4e0a\u7684\u6587\u4ef6\u8fdb\u884c\u5408\u5e76"),"\uff0c\u4ee5\u9632\u6b62\u5185\u5b58\u4f7f\u7528\u8fc7\u591a\u6216\u78c1\u76d8\u4e0a\u6587\u4ef6\u8fc7\u591a\u3002\u6309\u7167MapReduce\u8bed\u4e49\uff0c\u7528\u6237\u7f16\u5199reduce()\u51fd\u6570\u8f93\u5165\u6570\u636e\u662f\u6309key\u8fdb\u884c\u805a\u96c6\u7684\u4e00\u7ec4\u6570\u636e\u3002\u4e3a\u4e86\u5c06key\u76f8\u540c\u7684\u6570\u636e\u805a\u5728\u4e00\u8d77\uff0cHadoop\u91c7\u7528\u4e86\u57fa\u4e8e\u6392\u5e8f\u7684\u7b56\u7565\u3002\u7531\u4e8e\u5404\u4e2aMapTask\u5df2\u7ecf\u5b9e\u73b0\u5bf9\u81ea\u5df1\u7684\u5904\u7406\u7ed3\u679c\u8fdb\u884c\u4e86\u5c40\u90e8\u6392\u5e8f\uff0c\u56e0\u6b64\uff0c",(0,p.kt)("strong",{parentName:"p"},"ReduceTask\u53ea\u9700\u5bf9\u6240\u6709\u6570\u636e\u8fdb\u884c\u4e00\u6b21\u5f52\u5e76\u6392\u5e8f\u5373\u53ef")),(0,p.kt)("p",null,"\u200b    \uff083\uff09Reduce\u9636\u6bb5\uff1areduce()\u51fd\u6570\u5c06\u8ba1\u7b97\u7ed3\u679c\u5199\u5230HDFS\u4e0a"),(0,p.kt)("h2",{id:"3-reducetask\u5e76\u884c\u5ea6\u51b3\u5b9a\u673a\u5236"},"3. ReduceTask\u5e76\u884c\u5ea6\u51b3\u5b9a\u673a\u5236\uff1a"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"MapTask\u5e76\u884c\u5ea6\u7531\u5207\u7247\u4e2a\u6570\u51b3\u5b9a\uff0c\u5207\u7247\u4e2a\u6570\u7531\u8f93\u5165\u6587\u4ef6\u548c\u5207\u7247\u89c4\u5219\u51b3\u5b9a")),(0,p.kt)("h3",{id:"1-\u8bbe\u7f6ereducetask\u5e76\u884c\u5ea6\u4e2a\u6570"},"1. \u8bbe\u7f6eReduceTask\u5e76\u884c\u5ea6\uff08\u4e2a\u6570\uff09\uff1a"),(0,p.kt)("p",null,"ReduceTask \u7684\u5e76\u884c\u5ea6\u540c\u6837\u5f71\u54cd\u6574\u4e2a Job \u6267\u884c\u5e76\u53d1\u5ea6\u548c\u6267\u884c\u6548\u7387\uff0c\u4f46\u4e0e MapTask \u7684\u5e76\u53d1\u6570\u7531\u5207\u7247\u6570\u51b3\u5b9a\u4e0d\u540c\uff0cReduceTask \u6570\u91cf\u7684\u51b3\u5b9a\u662f\u53ef\u4ee5\u76f4\u63a5\u624b\u52a8\u8bbe\u7f6e\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-java"},"// \u9ed8\u8ba4\u503c\u662f1\uff0c\u624b\u52a8\u8bbe\u7f6e\u4e3a4\njob.setNumReduceTasks(4);\n")),(0,p.kt)("h3",{id:"2-\u6ce8\u610f"},"2. \u6ce8\u610f\uff1a"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"ReduceTask = 0\uff0c\u8868\u793a\u6ca1\u6709 ",(0,p.kt)("strong",{parentName:"p"},"Reduce\u9636\u6bb5"),"\uff0c\u8f93\u51fa\u6587\u4ef6\u4e2a\u6570\u548c Map\u4e2a\u6570 \u4e00\u81f4")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"ReduceTask \u9ed8\u8ba4\u503c\u5c31\u662f1\uff0c\u6240\u4ee5\u8f93\u51fa\u6587\u4ef6\u4e2a\u6570\u4e3a\u4e00\u4e2a")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u5982\u679c\u6570\u636e\u5206\u5e03\u4e0d\u5747\u5300\uff0c\u5c31\u6709\u53ef\u80fd\u5728Reduce\u9636\u6bb5\u4ea7\u751f\u6570\u636e\u503e\u659c\uff08\u67d0\u4e00\u4e2a ReduceTask \u5904\u7406\u6570\u636e\u8fc7\u591a \u5176\u4ed6 ReduceTask \u7a7a\u95f2\uff09")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"ReduceTask\u6570\u91cf\u5e76\u4e0d\u662f\u4efb\u610f\u8bbe\u7f6e\uff0c\u8fd8\u8981\u8003\u8651\u4e1a\u52a1\u903b\u8f91\u9700\u6c42\uff0c\u6709\u4e9b\u60c5\u51b5\u4e0b\uff0c",(0,p.kt)("strong",{parentName:"p"},"\u9700\u8981\u8ba1\u7b97\u5168\u5c40\u6c47\u603b\u7ed3\u679c\uff0c\u5c31\u53ea\u80fd\u67091\u4e2aReduceTask"))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u5177\u4f53\u591a\u5c11\u4e2aReduceTask\uff0c\u9700\u8981\u6839\u636e\u96c6\u7fa4\u6027\u80fd\u800c\u5b9a")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u5982\u679c\u5206\u533a\u6570\u4e0d\u662f1\uff0c\u4f46\u662fReduceTask\u4e3a1\uff0c\u662f\u5426\u6267\u884c\u5206\u533a\u8fc7\u7a0b\uff1f"),(0,p.kt)("p",{parentName:"li"},"\u7b54\u6848\u662f\uff1a\u4e0d\u6267\u884c\u5206\u533a\u8fc7\u7a0b\u3002\u56e0\u4e3a\u5728MapTask\u7684\u6e90\u7801\u4e2d\uff0c\u6267\u884c\u5206\u533a\u7684\u524d\u63d0\u662f\u5148\u5224\u65adReduceNum\u4e2a\u6570\u662f\u5426\u5927\u4e8e1\u3002\u4e0d\u5927\u4e8e1\u80af\u5b9a\u4e0d\u6267\u884c"))))}d.isMDXComponent=!0},26949:function(e,t,a){t.Z=a.p+"assets/images/Snipaste_2022-04-23_16-06-05-5959333f8041dc733790c03b1ecee2d4.png"},51689:function(e,t,a){t.Z=a.p+"assets/images/Snipaste_2022-04-23_16-13-31-0a72f92351c8b27d2d682e0bc9cac7f1.png"}}]);