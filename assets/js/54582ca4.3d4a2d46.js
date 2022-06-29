"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3254],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return s}});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.createContext({}),u=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return l.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=u(n),s=a,c=d["".concat(p,".").concat(s)]||d[s]||k[s]||r;return n?l.createElement(c,i(i({ref:t},m),{},{components:n})):l.createElement(c,i({ref:t},m))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51026:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return k}});var l=n(83117),a=n(80102),r=(n(67294),n(3905)),i=["components"],o={sidebar_position:3},p=void 0,u={unversionedId:"Hive/DQL/where",id:"Hive/DQL/where",title:"where",description:"1. where\u57fa\u7840\u4f7f\u7528\uff1a",source:"@site/docs/Hive/DQL/where.md",sourceDirName:"Hive/DQL",slug:"/Hive/DQL/where",permalink:"/learn/Hive/DQL/where",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"from",permalink:"/learn/Hive/DQL/from"},next:{title:"limit",permalink:"/learn/Hive/DQL/limit"}},m={},k=[{value:"1. where\u57fa\u7840\u4f7f\u7528\uff1a",id:"1-where\u57fa\u7840\u4f7f\u7528",level:3},{value:"2. \u64cd\u4f5c\u7b26\uff1a",id:"2-\u64cd\u4f5c\u7b26",level:3},{value:"1. \u57fa\u7840\u64cd\u4f5c\u7b26\uff1a",id:"1-\u57fa\u7840\u64cd\u4f5c\u7b26",level:4},{value:"2.\u7279\u6b8a\u64cd\u4f5c\u7b26\uff1a",id:"2\u7279\u6b8a\u64cd\u4f5c\u7b26",level:4},{value:"1. and\uff1a",id:"1-and",level:5},{value:"2. or\uff1a",id:"2-or",level:5},{value:"3. not\uff1a",id:"3-not",level:5},{value:"4. any\uff1a",id:"4-any",level:5},{value:"5. all\uff1a",id:"5-all",level:5},{value:"6. in\uff1a",id:"6-in",level:5},{value:"7. exists\uff1a",id:"7-exists",level:5},{value:"8. between\uff1a",id:"8-between",level:5},{value:"9. like\uff1a",id:"9-like",level:5},{value:"10.rlike\uff1a",id:"10rlike",level:5},{value:"11. is (not) null\uff1a",id:"11-is-not-null",level:5}],d={toc:k};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"1-where\u57fa\u7840\u4f7f\u7528"},"1. where\u57fa\u7840\u4f7f\u7528\uff1a"),(0,r.kt)("p",null,"\u5982\u9700\u6709\u6761\u4ef6\u7684\u4ece\u8868\u4e2d\u9009\u53d6\u6570\u636e\uff0c\u53ef\u5c06 where\u5b50\u53e5\u6dfb\u52a0\u5230 select \u8bed\u53e5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT \u5217\u540d\u79f0 FROM \u8868\u540d\u79f0 WHERE \u5217\u540d\u79f0 \u8fd0\u7b97\u7b26 \u503c\n")),(0,r.kt)("h3",{id:"2-\u64cd\u4f5c\u7b26"},"2. \u64cd\u4f5c\u7b26\uff1a"),(0,r.kt)("h4",{id:"1-\u57fa\u7840\u64cd\u4f5c\u7b26"},"1. \u57fa\u7840\u64cd\u4f5c\u7b26\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u64cd\u4f5c\u7b26"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"=")),(0,r.kt)("td",{parentName:"tr",align:null},"\u7b49\u4e8e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<> \u6216 !=")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0d\u7b49\u4e8e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},">")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5927\u4e8e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c0f\u4e8e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},">=")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5927\u4e8e\u7b49\u4e8e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<=")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c0f\u4e8e\u7b49\u4e8e")))),(0,r.kt)("h4",{id:"2\u7279\u6b8a\u64cd\u4f5c\u7b26"},"2.\u7279\u6b8a\u64cd\u4f5c\u7b26\uff1a"),(0,r.kt)("h5",{id:"1-and"},"1. and\uff1a"),(0,r.kt)("p",null,"\u4e24\u4e2a\u6761\u4ef6\u505a ",(0,r.kt)("strong",{parentName:"p"},"\u4e0e")," \u8fd0\u7b97\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select * from \u8868 where \u5224\u65ad\u6761\u4ef61 and \u5224\u65ad\u6761\u4ef62\n")),(0,r.kt)("h5",{id:"2-or"},"2. or\uff1a"),(0,r.kt)("p",null,"\u4e24\u4e2a\u6761\u4ef6\u505a ",(0,r.kt)("strong",{parentName:"p"},"\u6216")," \u8fd0\u7b97\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select * from \u8868 where \u5224\u65ad\u6761\u4ef61 and \u5224\u65ad\u6761\u4ef62\n")),(0,r.kt)("h5",{id:"3-not"},"3. not\uff1a"),(0,r.kt)("p",null,"\u6761\u4ef6\u53d6\u53cd ",(0,r.kt)("strong",{parentName:"p"},"\u975e")," \u8fd0\u7b97\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"select * from \u8868 where not \u5224\u65ad\u6761\u4ef6\n")),(0,r.kt)("h5",{id:"4-any"},"4. any\uff1a"),(0,r.kt)("p",null,"\u53ea\u8981\u6ee1\u8db3\u5185\u90e8\u4efb\u610f\u4e00\u4e2a\u5c31\u53ef\u4ee5\u901a\u8fc7\uff0c\u9700\u8981\u4f7f\u7528\u57fa\u7840\u64cd\u4f5c\u7b26\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select * from \u8868 where \u59d3\u540d =any('\u5c0f\u660e', '\u5c0f\u7ea2')\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"any\u540e\u9762\u53ef\u4ee5\u63a5\u5b50\u67e5\u8be2"),(0,r.kt)("li",{parentName:"ol"},">","any\uff1a\u8868\u793a\u5927\u4e8e\u6700\u5c0f\u503c"),(0,r.kt)("li",{parentName:"ol"},"<any\uff1a\u8868\u793a\u5c0f\u4e8e\u6700\u5927\u503c"),(0,r.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u5728any \u524d\u52a0 not \u53d6\u53cd")),(0,r.kt)("h5",{id:"5-all"},"5. all\uff1a"),(0,r.kt)("p",null,"\u53ea\u8981\u6ee1\u8db3\u5185\u90e8\u4efb\u610f\u4e00\u4e2a\u5c31\u53ef\u4ee5\u901a\u8fc7\uff0c\u9700\u8981\u4f7f\u7528\u57fa\u7840\u64cd\u4f5c\u7b26\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select * from \u8868 where \u5de5\u8d44 > all(100, 200)\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"all\u540e\u9762\u53ef\u4ee5\u63a5\u5b50\u67e5\u8be2"),(0,r.kt)("li",{parentName:"ol"},">","all: \u8868\u793a\u5927\u4e8e\u6700\u5927\u503c"),(0,r.kt)("li",{parentName:"ol"},"<all\uff1a\u8868\u793a\u5c0f\u4e8e\u6700\u5c0f\u503c"),(0,r.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u5728all \u524d\u52a0 not \u53d6\u53cd")),(0,r.kt)("h5",{id:"6-in"},"6. in\uff1a"),(0,r.kt)("p",null,"\u903b\u8f91\u4e0a\u7b49\u4e8e\uff1a=any"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select * from \u8868 where \u59d3\u540d in('\u5c0f\u660e', '\u5c0f\u7ea2')\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"all\u540e\u9762\u53ef\u4ee5\u63a5\u5b50\u67e5\u8be2")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u5728in \u524d\u52a0 not \u53d6\u53cd")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u662f\u591a\u5217\u5b50\u67e5\u8be2\uff0c\u9700\u8981in\u524d\u9762\u4e5f\u662f\u591a\u5217"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select * from \u8868 where (\u59d3\u540d, \u5de5\u8d44) in(select \u59d3\u540d, \u5de5\u8d44 from \u8868)\n")),(0,r.kt)("h5",{id:"7-exists"},"7. exists\uff1a"),(0,r.kt)("p",null,"\u903b\u8f91\u4e0a\u7b49\u4e8e\uff1a=any"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select * from \u88681 where exists(select * from \u88682 where \u88681.\u59d3\u540d = \u88682.\u59d3\u540d)\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u5728 exists \u524d\u52a0 not \u53d6\u53cd")),(0,r.kt)("h5",{id:"8-between"},"8. between\uff1a"),(0,r.kt)("p",null,"\u6765\u663e\u793a\u5728\u4e00\u4e2a\u533a\u95f4\u5185\u7684\u503c\u3002 \u903b\u8f91\u4e0a\u7b49\u4e8e\uff1a\u503c => xx and \u503c <= xx"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select * from \u8868 where \u5de5\u8d44 between 1000 and 3000\n\u7b49\u4ef7\nselect * from \u8868 where \u5de5\u8d44 => 1000 and \u5de5\u8d44 <= 3000\n")),(0,r.kt)("h5",{id:"9-like"},"9. like\uff1a"),(0,r.kt)("p",null,"\u7528\u6765\u6a21\u7cca\u67e5\u8be2\u5b57\u7b26\u4e32\u4f7f\u7528\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7279\u6b8a\u5b57\u7b26\uff1a"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u7b26"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"%"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee3\u8868\u96f6\u4e2a\u6216\u591a\u4e2a\u5b57\u7b26(\u4efb\u610f\u4e2a\u5b57\u7b26)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee3\u8868\u4e00\u4e2a\u5b57\u7b26")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[charlist]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u5217\u4e2d\u7684\u4efb\u4f55\u5355\u4e00\u5b57\u7b26")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[^charlist]\u6216\u8005[!charlist]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0d\u5728\u5b57\u7b26"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8f6c\u4e49\u5b57\u7b26\uff1a"),(0,r.kt)("p",{parentName:"li"},"\u9700\u8981\u4f7f\u7528\u7279\u6b8a\u7b26\u53f7\u7684\u65f6\u5019\u9700\u8981\u5148\u8fdb\u884c\u8f6c\u4e49 ",(0,r.kt)("strong",{parentName:"p"},"escape")," \u8bbe\u7f6e\u8f6c\u4e49\u5b57\u7b26(\u4e00\u822c\u4f7f\u7528 ","\\"," \u53cd\u659c\u6760)"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select * from \u8868 where \u59d3\u540d like '%\u7ea2%'\n\nselect * from \u8868 where \u59d3\u540d like '\\%' escape '\\'\n")),(0,r.kt)("h5",{id:"10rlike"},"10.rlike\uff1a"),(0,r.kt)("p",null,"rlike\u5b50\u53e5\u662f Hive \u4e2d\u8fd9\u4e2a\u529f\u80fd\u7684\u4e00\u4e2a\u6269\u5c55\uff0c\u5176\u53ef\u4ee5\u901a\u8fc7Java\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u8fd9\u4e2a\u66f4\u5f3a\u5927\u7684\u8bed\u8a00\u6765\u6307\u5b9a\u5339\u914d\u6761\u4ef6\uff08",(0,r.kt)("strong",{parentName:"p"},"\u6269\u5c55like"),"\uff09"),(0,r.kt)("h5",{id:"11-is-not-null"},"11. is (not) null\uff1a"),(0,r.kt)("p",null,"\u5224\u65ad\u662f\u5426\u662f\u7a7a\u503c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select * from \u8868 where \u59d3\u540d is null\n")))}s.isMDXComponent=!0}}]);