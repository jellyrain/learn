"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2085],{3905:function(e,t,n){n.d(t,{Zo:function(){return k},kt:function(){return N}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},k=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),c=m(n),N=a,s=c["".concat(p,".").concat(N)]||c[N]||u[N]||o;return n?r.createElement(s,l(l({ref:t},k),{},{components:n})):r.createElement(s,l({ref:t},k))}));function N(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var m=2;m<o;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},49242:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return p},default:function(){return N},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return u}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),l=["components"],i={sidebar_position:1},p=void 0,m={unversionedId:"Hadoop/HDFS/HDFS\u6982\u8ff0",id:"Hadoop/HDFS/HDFS\u6982\u8ff0",title:"HDFS\u6982\u8ff0",description:"1. HDFS \u5b9a\u4e49\uff1a",source:"@site/docs\\Hadoop\\HDFS\\HDFS\u6982\u8ff0.md",sourceDirName:"Hadoop/HDFS",slug:"/Hadoop/HDFS/HDFS\u6982\u8ff0",permalink:"/learn/Hadoop/HDFS/HDFS\u6982\u8ff0",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Hadoop\u5e38\u7528\u811a\u672c",permalink:"/learn/Hadoop/Hadoop\u5e38\u7528\u811a\u672c"},next:{title:"HDFS\u64cd\u4f5c",permalink:"/learn/Hadoop/HDFS/HDFS\u64cd\u4f5c"}},k={},u=[{value:"1. HDFS \u5b9a\u4e49\uff1a",id:"1-hdfs-\u5b9a\u4e49",level:3},{value:"2. HDFS \u4f18\u7f3a\u70b9\uff1a",id:"2-hdfs-\u4f18\u7f3a\u70b9",level:3},{value:"1. \u4f18\u70b9\uff1a",id:"1-\u4f18\u70b9",level:4},{value:"2. \u7f3a\u70b9\uff1a",id:"2-\u7f3a\u70b9",level:4},{value:"3. HDFS \u67b6\u6784\uff1a",id:"3-hdfs-\u67b6\u6784",level:3},{value:"4. HDFS \u6587\u4ef6\u5757\u5927\u5c0f\uff1a",id:"4-hdfs-\u6587\u4ef6\u5757\u5927\u5c0f",level:3}],c={toc:u};function N(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"1-hdfs-\u5b9a\u4e49"},"1. HDFS \u5b9a\u4e49\uff1a"),(0,o.kt)("p",null,"HDFS\uff08Hadoop Distributed File System\uff09\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u5b83\u662f\u4e00\u4e2a\u6587\u4ef6\u7cfb\u7edf"),"\uff0c\u7528\u4e8e\u5b58\u50a8\u6587\u4ef6\uff0c\u901a\u8fc7\u76ee\u5f55\u6811\u6765\u5b9a\u4f4d\u6587\u4ef6\uff1b\u5176\u6b21\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u5b83\u662f\u5206\u5e03\u5f0f\u7684"),"\uff0c\u7531\u5f88\u591a\u670d\u52a1\u5668\u8054\u5408\u8d77\u6765\u5b9e\u73b0\u5176\u529f\u80fd\uff0c\u96c6\u7fa4\u4e2d\u7684\u670d\u52a1\u5668\u6709\u5404\u81ea\u7684\u89d2\u8272"),(0,o.kt)("p",null,"HDFS\u7684\u4f7f\u7528\u573a\u666f\uff1a",(0,o.kt)("strong",{parentName:"p"},"\u9002\u5408\u4e00\u6b21\u5199\u5165\uff0c\u591a\u6b21\u8bfb\u51fa\u7684\u573a\u666f\uff0c\u4e14\u4e0d\u652f\u6301\u6587\u4ef6\u7684\u4fee\u6539"),"\u3002\u9002\u5408\u7528\u4e8e\u6570\u636e\u5206\u6790\uff0c\u4f46\u662f\u4e0d\u9002\u5408\u4f5c\u4e3a\u7f51\u76d8\u5e94\u7528"),(0,o.kt)("h3",{id:"2-hdfs-\u4f18\u7f3a\u70b9"},"2. HDFS \u4f18\u7f3a\u70b9\uff1a"),(0,o.kt)("h4",{id:"1-\u4f18\u70b9"},"1. \u4f18\u70b9\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u9ad8\u5bb9\u9519")),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"\u6570\u636e\u81ea\u52a8\u4fdd\u5b58\u591a\u4e2a\u526f\u672c\uff0c\u5b83\u901a\u8fc7\u589e\u52a0\u526f\u672c\u7684\u5f62\u5f0f\uff0c\u63d0\u9ad8\u5bb9\u9519\u6027"),(0,o.kt)("li",{parentName:"ol"},"\u67d0\u4e00\u4e2a\u526f\u672c\u4e22\u5931\u4ee5\u540e\uff0c\u5b83\u53ef\u4ee5\u81ea\u52a8\u6062\u590d"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u9002\u5408\u5904\u7406\u5927\u6570\u636e")),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"\u6570\u636e\u89c4\u6a21\uff1a\u80fd\u591f\u5904\u7406\u6570\u636e\u89c4\u6a21\u8fbe\u5230 ",(0,o.kt)("strong",{parentName:"li"},"GB\u3001TB\u3001\u751a\u81f3\u662fPB\u7ea7\u522b\u7684\u6570\u636e")),(0,o.kt)("li",{parentName:"ol"},"\u6587\u4ef6\u89c4\u6a21\uff1a\u80fd\u591f\u5904\u7406\u767e\u4e07\u89c4\u6a21\u4ee5\u4e0a\u7684\u6587\u4ef6\u7cfb\u7edf\uff0c\u6570\u636e\u91cf\u76f8\u5f53\u4e4b\u5927"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u53ef\u6784\u5efa\u5728\u5ec9\u4ef7\u673a\u5668\u4e0a"),"\uff0c\u901a\u8fc7\u591a\u526f\u672c\u673a\u5236\uff0c\u63d0\u9ad8\u53ef\u9760\u6027"))),(0,o.kt)("h4",{id:"2-\u7f3a\u70b9"},"2. \u7f3a\u70b9\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u4e0d\u9002\u5408\u4f4e\u5ef6\u8fdf\u6570\u636e\u8bbf\u95ee"),"\uff0c\u6bd4\u5982\u6beb\u79d2\u7ea7\u7684\u5b58\u50a8\u6570\u636e\uff0c\u505a\u4e0d\u5230\u7684")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u65e0\u6cd5\u9ad8\u6548\u7684\u5bf9\u5927\u91cf\u5c0f\u6587\u4ef6\u8fdb\u884c\u5b58\u50a8")),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"\u5b58\u50a8\u5927\u91cf\u5c0f\u6587\u4ef6\u7684\u8bdd\uff0c",(0,o.kt)("strong",{parentName:"li"},"\u4ed6\u4f1a\u5360\u7528 NameNode \u5927\u91cf\u7684\u5185\u5b58\u6765\u5b58\u50a8\u6587\u4ef6\u3001\u76ee\u5f55\u548c\u5757\u4fe1\u606f"),"\uff0c\u8fd9\u6837\u662f\u4e0d\u53ef\u53d6\u7684\uff0c\u56e0\u4e3a NameNode \u7684\u5185\u5b58\u662f\u6709\u9650\u7684"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"\u5c0f\u6587\u4ef6\u5b58\u50a8\u7684\u5bfb\u5740\u4f1a\u8d85\u8fc7\u8bfb\u53d6\u65f6\u95f4"),"\uff0c\u5b83\u8fdd\u53cd\u4e86 HDFS \u7684\u8bbe\u8ba1\u76ee\u6807"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u4e0d\u652f\u6301\u5e76\u53d1\u5199\u5165\u3001\u6587\u4ef6\u968f\u673a\u4fee\u6539")),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"\u4e00\u4e2a\u6587\u4ef6\u53ea\u80fd\u6709\u4e00\u4e2a\u5199\uff0c\u4e0d\u80fd\u591a\u4e2a\u7ebf\u7a0b\u540c\u65f6\u5199"),(0,o.kt)("li",{parentName:"ol"},"\u4ec5\u652f\u6301 append\uff08\u8ffd\u52a0\uff09\uff0c\u4e0d\u652f\u6301\u6587\u4ef6\u7684\u968f\u673a\u4fee\u6539")))),(0,o.kt)("h3",{id:"3-hdfs-\u67b6\u6784"},"3. HDFS \u67b6\u6784\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"NameNode\uff08nn\uff09\uff1a",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"\u7ba1\u7406 HDFS \u7684\u547d\u540d\u7a7a\u95f4"),(0,o.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u526f\u672c\u7b56\u7565"),(0,o.kt)("li",{parentName:"ol"},"\u7ba1\u7406\u6570\u636e\u5e93\uff08Block\uff09\u6620\u5c04\u5173\u7cfb"),(0,o.kt)("li",{parentName:"ol"},"\u5904\u7406\u5ba2\u6237\u7aef\u8bfb\u5199\u8bf7\u6c42"))),(0,o.kt)("li",{parentName:"ol"},"DataNode\uff08dn\uff09\uff1a",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"\u5b58\u50a8\u5b9e\u9645\u7684\u6570\u636e\u5757"),(0,o.kt)("li",{parentName:"ol"},"\u6267\u884c\u6570\u636e\u5757\u7684\u8bfb\u3001\u5199\u64cd\u4f5c"))),(0,o.kt)("li",{parentName:"ol"},"Client\uff1a",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"\u6587\u4ef6\u5207\u7247\uff0c\u6587\u4ef6\u4e0a\u4f20 HDFS \u7684\u65f6\u5019\uff0cClient \u5c06\u6587\u4ef6\u5207\u5206\u4e3a\u4e00\u4e2a\u4e2a\u7684 Block\uff0c\u7136\u540e\u8fdb\u884c\u4e0a\u4f20"),(0,o.kt)("li",{parentName:"ol"},"\u4e0e NameNode \u4ea4\u4e92\uff0c\u83b7\u53d6\u6587\u4ef6\u7684\u4f4d\u7f6e\u4fe1\u606f"),(0,o.kt)("li",{parentName:"ol"},"\u4e0e DataNode \u4ea4\u4e92\uff0c\u8bfb\u5199\u6570\u636e"),(0,o.kt)("li",{parentName:"ol"},"Client \u63d0\u4f9b\u4e00\u4e9b\u547d\u4ee4\u6765\u7ba1\u7406 HDFS\uff0c\u6bd4\u5982 NameNode \u683c\u5f0f\u5316"),(0,o.kt)("li",{parentName:"ol"},"Client \u53ef\u4ee5\u63d0\u4f9b\u4e00\u4e9b\u547d\u4ee4\u6765\u8bbf\u95ee HDFS\uff0c\u6bd4\u5982\u5bf9 HDFS \u589e\u5220\u67e5\u6539\u64cd\u4f5c"))),(0,o.kt)("li",{parentName:"ol"},"SecondaryNameNode\uff082nn\uff09\uff1a",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"\u8f85\u52a9 NameNode\uff0c\u5206\u62c5\u5176\u5de5\u4f5c\u91cf\uff0c\u6bd4\u5982\u5b9a\u671f\u5408\u5e76 Fsimage \u548c Edits\uff0c\u5e76\u63a8\u9001\u7ed9 NameNode"),(0,o.kt)("li",{parentName:"ol"},"\u5728\u7d27\u6025\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u8f85\u52a9\u56de\u590d NameNode")))),(0,o.kt)("h3",{id:"4-hdfs-\u6587\u4ef6\u5757\u5927\u5c0f"},"4. HDFS \u6587\u4ef6\u5757\u5927\u5c0f\uff1a"),(0,o.kt)("p",null,"HDFS \u4e2d\u7684\u6587\u4ef6\u5728\u7269\u7406\u5185\u5b58\u4e0a\u662f\u5206\u5757\u5b58\u50a8\u7684\uff08Block\uff09\uff0c\u5757\u7684\u5927\u5c0f\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u53c2\u6570\uff08dfs.blockszie\uff09\u6765\u8bbe\u5b9a\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u9ed8\u8ba4\u5927\u5c0f\u5728 Hadoop 2.x/3.x \u4e2d\u662f 128M\uff0c 1.x \u662f64M")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u4e3a\u4ec0\u4e48\u5757\u7684\u5927\u5c0f\u4e0d\u80fd\u8bbe\u7f6e\u7684\u592a\u5c0f\uff0c\u4e5f\u4e0d\u80fd\u8bbe\u7f6e\u7684\u592a\u5927\uff1f")),(0,o.kt)("blockquote",null,(0,o.kt)("ol",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ol"},"HDFS \u7684\u5757\u8bbe\u7f6e\u7684\u592a\u5c0f\uff0c",(0,o.kt)("strong",{parentName:"li"},"\u4f1a\u589e\u52a0\u5bfb\u5740\u65f6\u95f4"),"\uff0c\u7a0b\u5e8f\u4e00\u76f4\u5728\u627e\u5757\u7684\u5f00\u59cb\u4f4d\u7f6e\uff0c\u800c\u4e14\u5982\u679c\u592a\u5c0f ",(0,o.kt)("strong",{parentName:"li"},"\u5c0f\u6587\u4ef6\u5b58\u50a8\u7684\u5bfb\u5740\u4f1a\u8d85\u8fc7\u8bfb\u53d6\u65f6\u95f4"),"\uff0c\u8fdd\u80ccHDFS \u8bbe\u8ba1\u76ee\u6807"),(0,o.kt)("li",{parentName:"ol"},"\u5982\u679c\u8bbe\u7f6e\u7684\u5757\u592a\u5927\uff0c\u4ece",(0,o.kt)("strong",{parentName:"li"},"\u786c\u76d8\u4f20\u8f93\u6570\u636e\u7684\u65f6\u95f4"),"\u4f1a\u660e\u663e",(0,o.kt)("strong",{parentName:"li"},"\u5927\u4e8e\u5b9a\u4f4d\u4e8e\u8fd9\u4e2a\u5757\u5f00\u59cb\u4f4d\u7f6e\u6240\u9700\u7684\u65f6\u95f4"),"\u3002\u5bfc\u81f4\u7a0b\u5e8f\u5728\u5904\u7406\u8fd9\u5757\u6570\u636e\u7684\u65f6\u5019\u4f1a\u975e\u5e38\u6162"))))}N.isMDXComponent=!0}}]);