"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7343],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(r),m=l,k=c["".concat(u,".").concat(m)]||c[m]||s[m]||a;return r?n.createElement(k,i(i({ref:t},d),{},{components:r})):n.createElement(k,i({ref:t},d))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},45628:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var n=r(83117),l=r(80102),a=(r(67294),r(3905)),i=["components"],o={sidebar_position:6},u=void 0,p={unversionedId:"DataBase/kettle/\u4f18\u5316",id:"DataBase/kettle/\u4f18\u5316",title:"\u4f18\u5316",description:"1. JVM \u4f18\u5316\uff1a",source:"@site/docs\\7-DataBase\\kettle\\\u4f18\u5316.md",sourceDirName:"7-DataBase/kettle",slug:"/DataBase/kettle/\u4f18\u5316",permalink:"/learn/DataBase/kettle/\u4f18\u5316",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u8d44\u6e90\u5e93",permalink:"/learn/DataBase/kettle/\u8d44\u6e90\u5e93"},next:{title:"\u4ecb\u7ecd",permalink:"/learn/DataBase/\u5e06\u8f6f/\u4ecb\u7ecd"}},d={},s=[{value:"1. JVM \u4f18\u5316\uff1a",id:"1-jvm-\u4f18\u5316",level:2},{value:"2. \u63d0\u4ea4\u6570\u4f18\u5316\uff1a",id:"2-\u63d0\u4ea4\u6570\u4f18\u5316",level:2},{value:"3. \u5c3d\u91cf\u4f7f\u7528\u6570\u636e\u5e93\u8fde\u63a5\u6c60",id:"3-\u5c3d\u91cf\u4f7f\u7528\u6570\u636e\u5e93\u8fde\u63a5\u6c60",level:2},{value:"4. \u5c3d\u91cf\u63d0\u9ad8\u6279\u5904\u7406\u7684 commit size",id:"4-\u5c3d\u91cf\u63d0\u9ad8\u6279\u5904\u7406\u7684-commit-size",level:2},{value:"5. \u5c3d\u91cf\u4f7f\u7528\u7f13\u5b58\uff0c\u7f13\u5b58\u5c3d\u91cf\u5927\u4e00\u4e9b\uff08\u4e3b\u8981\u662f\u6587\u672c\u6587\u4ef6\u548c\u6570\u636e\u6d41\uff09",id:"5-\u5c3d\u91cf\u4f7f\u7528\u7f13\u5b58\u7f13\u5b58\u5c3d\u91cf\u5927\u4e00\u4e9b\u4e3b\u8981\u662f\u6587\u672c\u6587\u4ef6\u548c\u6570\u636e\u6d41",level:2},{value:"6. kettle \u662f Java \u5199\u7684\uff0c\u5c3d\u91cf\u7528\u5927\u4e00\u70b9\u7684\u5185\u5b58\u53c2\u6570\u542f\u52a8 Kettle",id:"6-kettle-\u662f-java-\u5199\u7684\u5c3d\u91cf\u7528\u5927\u4e00\u70b9\u7684\u5185\u5b58\u53c2\u6570\u542f\u52a8-kettle",level:2},{value:"7. \u53ef\u4ee5\u4f7f\u7528 sql \u6765\u505a\u7684\u4e00\u4e9b\u64cd\u4f5c\u5c3d\u91cf\u7528 sql\uff1a",id:"7-\u53ef\u4ee5\u4f7f\u7528-sql-\u6765\u505a\u7684\u4e00\u4e9b\u64cd\u4f5c\u5c3d\u91cf\u7528-sql",level:2},{value:"8. \u63d2\u5165\u5927\u91cf\u6570\u636e\u7684\u65f6\u5019\u5c3d\u91cf\u628a\u7d22\u5f15\u5220\u6389",id:"8-\u63d2\u5165\u5927\u91cf\u6570\u636e\u7684\u65f6\u5019\u5c3d\u91cf\u628a\u7d22\u5f15\u5220\u6389",level:2},{value:"9. \u5c3d\u91cf\u907f\u514d\u4f7f\u7528 update , delete \u64cd\u4f5c",id:"9-\u5c3d\u91cf\u907f\u514d\u4f7f\u7528-update--delete-\u64cd\u4f5c",level:2},{value:"10. \u5220\u9664\u64cd\u4f5c\u65f6\uff1a",id:"10-\u5220\u9664\u64cd\u4f5c\u65f6",level:2},{value:"11. \u5c3d\u91cf\u7f29\u5c0f\u8f93\u5165\u7684\u6570\u636e\u96c6\u7684\u5927\u5c0f\uff08\u589e\u91cf\u66f4\u65b0\u4e5f\u662f\u4e3a\u4e86\u8fd9\u4e2a\u76ee\u7684\uff09",id:"11-\u5c3d\u91cf\u7f29\u5c0f\u8f93\u5165\u7684\u6570\u636e\u96c6\u7684\u5927\u5c0f\u589e\u91cf\u66f4\u65b0\u4e5f\u662f\u4e3a\u4e86\u8fd9\u4e2a\u76ee\u7684",level:2},{value:"12. \u5c3d\u91cf\u4f7f\u7528\u6570\u636e\u5e93\u539f\u751f\u7684\u65b9\u5f0f\u88c5\u8f7d\u6587\u672c\u6587\u4ef6(Oracle \u7684 sqlloader, mysql \u7684 bulk loader \u6b65\u9aa4)",id:"12-\u5c3d\u91cf\u4f7f\u7528\u6570\u636e\u5e93\u539f\u751f\u7684\u65b9\u5f0f\u88c5\u8f7d\u6587\u672c\u6587\u4ef6oracle-\u7684-sqlloader-mysql-\u7684-bulk-loader-\u6b65\u9aa4",level:2}],c={toc:s};function m(e){var t=e.components,r=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-jvm-\u4f18\u5316"},"1. JVM \u4f18\u5316\uff1a"),(0,a.kt)("p",null,"\u8c03\u6574 JVM \u5927\u5c0f\u8fdb\u884c\u6027\u80fd\u4f18\u5316\uff0c\u4fee\u6539 Kettle \u6839\u76ee\u5f55\u4e0b\u7684 Spoon \u811a\u672c"),(0,a.kt)("p",null,"\u53c2\u6570\u53c2\u8003\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63a8\u8350\u914d\u7f6e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"-Xmx2048m"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e JVM \u6700\u5927\u53ef\u7528\u5185\u5b58\u4e3a 2048M")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"-Xms1024m"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e JVM \u4fc3\u4f7f\u5185\u5b58\u4e3a 1024m\u3002\u6b64\u503c\u53ef\u4ee5\u8bbe\u7f6e\u4e0e-Xmx \u76f8\u540c\uff0c\u4ee5\u907f\u514d\u6bcf\u6b21\u5783\u573e\u56de\u6536\u5b8c\u6210\u540e JVM \u91cd\u65b0\u5206\u914d\u5185\u5b58")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"-Xmn2g"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u5e74\u8f7b\u4ee3\u5927\u5c0f\u4e3a 2G\u3002\u6574\u4e2a JVM \u5185\u5b58\u5927\u5c0f=\u5e74\u8f7b\u4ee3\u5927\u5c0f + \u5e74\u8001\u4ee3\u5927\u5c0f + \u6301\u4e45\u4ee3\u5927\u5c0f\u3002\u6301\u4e45\u4ee3\u4e00\u822c\u56fa\u5b9a\u5927\u5c0f\u4e3a 64m\uff0c\u6240\u4ee5\u589e\u5927\u5e74\u8f7b\u4ee3\u540e\uff0c\u5c06\u4f1a\u51cf\u5c0f\u5e74\u8001\u4ee3\u5927\u5c0f\u3002\u6b64\u503c\u5bf9\u7cfb\u7edf\u6027\u80fd\u5f71\u54cd\u8f83\u5927\uff0cSun \u5b98\u65b9\u63a8\u8350\u914d\u7f6e\u4e3a\u6574\u4e2a\u5806\u7684 3/8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"-Xss128k"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u6bcf\u4e2a\u7ebf\u7a0b\u7684\u5806\u6808\u5927\u5c0f\u3002JDK5.0 \u4ee5\u540e\u6bcf\u4e2a\u7ebf\u7a0b\u5806\u6808\u5927\u5c0f\u4e3a 1M\uff0c\u4ee5\u524d\u6bcf\u4e2a\u7ebf\u7a0b\u5806\u6808\u5927\u5c0f\u4e3a 256K\u3002\u66f4\u5177\u5e94\u7528\u7684\u7ebf\u7a0b\u6240\u9700\u5185\u5b58\u5927\u5c0f\u8fdb\u884c\u8c03\u6574\u3002\u5728\u76f8\u540c\u7269\u7406\u5185\u5b58\u4e0b\uff0c\u51cf\u5c0f\u8fd9\u4e2a\u503c\u80fd\u751f\u6210\u66f4\u591a\u7684\u7ebf\u7a0b\u3002\u4f46\u662f\u64cd\u4f5c\u7cfb\u7edf\u5bf9\u4e00\u4e2a\u8fdb\u7a0b\u5185\u7684\u7ebf\u7a0b\u6570\u8fd8\u662f\u6709\u9650\u5236\u7684\uff0c\u4e0d\u80fd\u65e0\u9650\u751f\u6210\uff0c\u7ecf\u9a8c\u503c\u5728 3000~5000 \u5de6\u53f3")))),(0,a.kt)("h2",{id:"2-\u63d0\u4ea4\u6570\u4f18\u5316"},"2. \u63d0\u4ea4\u6570\u4f18\u5316\uff1a"),(0,a.kt)("p",null,"\u8c03\u6574\u63d0\u4ea4\uff08Commit\uff09\u8bb0\u5f55\u6570\u5927\u5c0f\u8fdb\u884c\u4f18\u5316"),(0,a.kt)("p",null,"Kettle \u9ed8\u8ba4 Commit \u6570\u91cf\u4e3a\uff1a1000\uff0c\u53ef\u4ee5\u6839\u636e\u6570\u636e\u91cf\u5927\u5c0f\u6765\u8bbe\u7f6e Commitsize\uff1a1000~50000"),(0,a.kt)("h2",{id:"3-\u5c3d\u91cf\u4f7f\u7528\u6570\u636e\u5e93\u8fde\u63a5\u6c60"},"3. \u5c3d\u91cf\u4f7f\u7528\u6570\u636e\u5e93\u8fde\u63a5\u6c60"),(0,a.kt)("h2",{id:"4-\u5c3d\u91cf\u63d0\u9ad8\u6279\u5904\u7406\u7684-commit-size"},"4. \u5c3d\u91cf\u63d0\u9ad8\u6279\u5904\u7406\u7684 commit size"),(0,a.kt)("h2",{id:"5-\u5c3d\u91cf\u4f7f\u7528\u7f13\u5b58\u7f13\u5b58\u5c3d\u91cf\u5927\u4e00\u4e9b\u4e3b\u8981\u662f\u6587\u672c\u6587\u4ef6\u548c\u6570\u636e\u6d41"},"5. \u5c3d\u91cf\u4f7f\u7528\u7f13\u5b58\uff0c\u7f13\u5b58\u5c3d\u91cf\u5927\u4e00\u4e9b\uff08\u4e3b\u8981\u662f\u6587\u672c\u6587\u4ef6\u548c\u6570\u636e\u6d41\uff09"),(0,a.kt)("h2",{id:"6-kettle-\u662f-java-\u5199\u7684\u5c3d\u91cf\u7528\u5927\u4e00\u70b9\u7684\u5185\u5b58\u53c2\u6570\u542f\u52a8-kettle"},"6. kettle \u662f Java \u5199\u7684\uff0c\u5c3d\u91cf\u7528\u5927\u4e00\u70b9\u7684\u5185\u5b58\u53c2\u6570\u542f\u52a8 Kettle"),(0,a.kt)("h2",{id:"7-\u53ef\u4ee5\u4f7f\u7528-sql-\u6765\u505a\u7684\u4e00\u4e9b\u64cd\u4f5c\u5c3d\u91cf\u7528-sql"},"7. \u53ef\u4ee5\u4f7f\u7528 sql \u6765\u505a\u7684\u4e00\u4e9b\u64cd\u4f5c\u5c3d\u91cf\u7528 sql\uff1a"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Group , merge , stream lookup,split field")," \u8fd9\u4e9b\u64cd\u4f5c\u90fd\u662f\u6bd4\u8f83\u6162\u7684\uff0c\u60f3\u529e\u6cd5\u907f\u514d\u4ed6\u4eec\uff0c\u80fd\u7528 sql \u5c31\u7528 sql"),(0,a.kt)("h2",{id:"8-\u63d2\u5165\u5927\u91cf\u6570\u636e\u7684\u65f6\u5019\u5c3d\u91cf\u628a\u7d22\u5f15\u5220\u6389"},"8. \u63d2\u5165\u5927\u91cf\u6570\u636e\u7684\u65f6\u5019\u5c3d\u91cf\u628a\u7d22\u5f15\u5220\u6389"),(0,a.kt)("h2",{id:"9-\u5c3d\u91cf\u907f\u514d\u4f7f\u7528-update--delete-\u64cd\u4f5c"},"9. \u5c3d\u91cf\u907f\u514d\u4f7f\u7528 update , delete \u64cd\u4f5c"),(0,a.kt)("p",null,"\u5c24\u5176\u662f update, \u5982\u679c\u53ef\u4ee5\u628a update \u53d8\u6210\u5148 delete, \u540e insert"),(0,a.kt)("h2",{id:"10-\u5220\u9664\u64cd\u4f5c\u65f6"},"10. \u5220\u9664\u64cd\u4f5c\u65f6\uff1a"),(0,a.kt)("p",null,"\u80fd\u4f7f\u7528 truncate table \u7684\u65f6\u5019\uff0c\u5c31\u4e0d\u8981\u4f7f\u7528 delete all row \u8fd9\u79cd\u7c7b\u4f3c sql \u5408\u7406\u7684\u5206\u533a"),(0,a.kt)("p",null,"\u5220\u9664\u64cd\u4f5c\u662f\u57fa\u4e8e\u67d0\u4e00\u4e2a\u5206\u533a\u7684\uff0c\u5c31\u4e0d\u8981\u4f7f\u7528 delete row \u8fd9\u79cd\u65b9\u5f0f\uff08\u4e0d\u7ba1\u662f delete sql \u8fd8\u662f delete \u6b65\u9aa4\uff09,",(0,a.kt)("strong",{parentName:"p"},"\u76f4\u63a5\u628a\u5206\u533a drop \u6389\uff0c\u518d\u91cd\u65b0\u521b\u5efa")),(0,a.kt)("h2",{id:"11-\u5c3d\u91cf\u7f29\u5c0f\u8f93\u5165\u7684\u6570\u636e\u96c6\u7684\u5927\u5c0f\u589e\u91cf\u66f4\u65b0\u4e5f\u662f\u4e3a\u4e86\u8fd9\u4e2a\u76ee\u7684"},"11. \u5c3d\u91cf\u7f29\u5c0f\u8f93\u5165\u7684\u6570\u636e\u96c6\u7684\u5927\u5c0f\uff08\u589e\u91cf\u66f4\u65b0\u4e5f\u662f\u4e3a\u4e86\u8fd9\u4e2a\u76ee\u7684\uff09"),(0,a.kt)("h2",{id:"12-\u5c3d\u91cf\u4f7f\u7528\u6570\u636e\u5e93\u539f\u751f\u7684\u65b9\u5f0f\u88c5\u8f7d\u6587\u672c\u6587\u4ef6oracle-\u7684-sqlloader-mysql-\u7684-bulk-loader-\u6b65\u9aa4"},"12. \u5c3d\u91cf\u4f7f\u7528\u6570\u636e\u5e93\u539f\u751f\u7684\u65b9\u5f0f\u88c5\u8f7d\u6587\u672c\u6587\u4ef6(Oracle \u7684 sqlloader, mysql \u7684 bulk loader \u6b65\u9aa4)"))}m.isMDXComponent=!0}}]);