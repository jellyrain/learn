"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2847],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),c=l,k=m["".concat(d,".").concat(c)]||m[c]||o[c]||r;return n?a.createElement(k,u(u({ref:t},p),{},{components:n})):a.createElement(k,u({ref:t},p))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,u=new Array(r);u[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:l,u[1]=i;for(var s=2;s<r;s++)u[s]=n[s];return a.createElement.apply(null,u)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4533:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return o}});var a=n(83117),l=n(80102),r=(n(67294),n(3905)),u=["components"],i={sidebar_position:4},d=void 0,s={unversionedId:"Hadoop/Hive/DQL/\u51fd\u6570/\u65e5\u671f\u51fd\u6570",id:"Hadoop/Hive/DQL/\u51fd\u6570/\u65e5\u671f\u51fd\u6570",title:"\u65e5\u671f\u51fd\u6570",description:"1. UNIX \u65f6\u95f4\u6233\u8f6c\u65e5\u671f\u51fd\u6570\uff1afrom_unixtime",source:"@site/docs\\9-Hadoop\\9-Hive\\DQL\\\u51fd\u6570\\\u65e5\u671f\u51fd\u6570.md",sourceDirName:"9-Hadoop/9-Hive/DQL/\u51fd\u6570",slug:"/Hadoop/Hive/DQL/\u51fd\u6570/\u65e5\u671f\u51fd\u6570",permalink:"/learn/Hadoop/Hive/DQL/\u51fd\u6570/\u65e5\u671f\u51fd\u6570",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u6570\u503c\u8ba1\u7b97",permalink:"/learn/Hadoop/Hive/DQL/\u51fd\u6570/\u6570\u503c\u8ba1\u7b97"},next:{title:"\u5b57\u7b26\u4e32\u51fd\u6570",permalink:"/learn/Hadoop/Hive/DQL/\u51fd\u6570/\u5b57\u7b26\u4e32\u51fd\u6570"}},p={},o=[{value:"1. UNIX \u65f6\u95f4\u6233\u8f6c\u65e5\u671f\u51fd\u6570\uff1afrom_unixtime",id:"1-unix-\u65f6\u95f4\u6233\u8f6c\u65e5\u671f\u51fd\u6570from_unixtime",level:3},{value:"2. \u83b7\u53d6\u5f53\u524d UNIX \u65f6\u95f4\u6233\u51fd\u6570\uff1aunix_timestamp",id:"2-\u83b7\u53d6\u5f53\u524d-unix-\u65f6\u95f4\u6233\u51fd\u6570unix_timestamp",level:3},{value:"3. \u65e5\u671f\u8f6c UNIX \u65f6\u95f4\u6233\u51fd\u6570\uff1aunix_timestamp",id:"3-\u65e5\u671f\u8f6c-unix-\u65f6\u95f4\u6233\u51fd\u6570unix_timestamp",level:3},{value:"4. \u6307\u5b9a\u683c\u5f0f\u65e5\u671f\u8f6c UNIX \u65f6\u95f4\u6233\u51fd\u6570\uff1aunix_timestamp",id:"4-\u6307\u5b9a\u683c\u5f0f\u65e5\u671f\u8f6c-unix-\u65f6\u95f4\u6233\u51fd\u6570unix_timestamp",level:3},{value:"5. \u65e5\u671f\u65f6\u95f4\u8f6c\u65e5\u671f\u51fd\u6570\uff1ato_date",id:"5-\u65e5\u671f\u65f6\u95f4\u8f6c\u65e5\u671f\u51fd\u6570to_date",level:3},{value:"6. \u65e5\u671f\u8f6c\u5e74\u51fd\u6570\uff1ayear",id:"6-\u65e5\u671f\u8f6c\u5e74\u51fd\u6570year",level:3},{value:"7. \u65e5\u671f\u8f6c\u6708\u51fd\u6570\uff1amonth",id:"7-\u65e5\u671f\u8f6c\u6708\u51fd\u6570month",level:3},{value:"8. \u65e5\u671f\u8f6c\u5929\u51fd\u6570\uff1aday",id:"8-\u65e5\u671f\u8f6c\u5929\u51fd\u6570day",level:3},{value:"9. \u65e5\u671f\u8f6c\u5c0f\u65f6\u51fd\u6570\uff1ahour",id:"9-\u65e5\u671f\u8f6c\u5c0f\u65f6\u51fd\u6570hour",level:3},{value:"10. \u65e5\u671f\u8f6c\u5206\u949f\u51fd\u6570\uff1aminute",id:"10-\u65e5\u671f\u8f6c\u5206\u949f\u51fd\u6570minute",level:3},{value:"11. \u65e5\u671f\u8f6c\u79d2\u51fd\u6570\uff1asecond",id:"11-\u65e5\u671f\u8f6c\u79d2\u51fd\u6570second",level:3},{value:"12. \u65e5\u671f\u8f6c\u5468\u51fd\u6570\uff1aweekofyear",id:"12-\u65e5\u671f\u8f6c\u5468\u51fd\u6570weekofyear",level:3},{value:"13. \u65e5\u671f\u6bd4\u8f83\u51fd\u6570\uff1adatediff",id:"13-\u65e5\u671f\u6bd4\u8f83\u51fd\u6570datediff",level:3},{value:"14. \u65e5\u671f\u589e\u52a0\u51fd\u6570\uff1adate_add",id:"14-\u65e5\u671f\u589e\u52a0\u51fd\u6570date_add",level:3},{value:"15. \u65e5\u671f\u51cf\u5c11\u51fd\u6570\uff1adate_sub",id:"15-\u65e5\u671f\u51cf\u5c11\u51fd\u6570date_sub",level:3},{value:"16. \u6708\u4efd\u589e\u52a0\u51fd\u6570\uff1aadd_months",id:"16-\u6708\u4efd\u589e\u52a0\u51fd\u6570add_months",level:3},{value:"17. \u6700\u540e\u4e00\u5929\u7684\u65e5\u671f\u51fd\u6570\uff1alast_day",id:"17-\u6700\u540e\u4e00\u5929\u7684\u65e5\u671f\u51fd\u6570last_day",level:3},{value:"18. \u4e0b\u4e00\u4e2a\u661f\u671fX\u6240\u5bf9\u5e94\u7684\u65e5\u671f\u51fd\u6570\uff1anext_day",id:"18-\u4e0b\u4e00\u4e2a\u661f\u671fx\u6240\u5bf9\u5e94\u7684\u65e5\u671f\u51fd\u6570next_day",level:3},{value:"19. \u76f8\u5dee\u7684\u6708\u4efd\u51fd\u6570\uff1amonths_between",id:"19-\u76f8\u5dee\u7684\u6708\u4efd\u51fd\u6570months_between",level:3},{value:"20. \u6307\u5b9a\u683c\u5f0f\u8fd4\u56de\u65f6\u95f4\u51fd\u6570\uff1adate_format",id:"20-\u6307\u5b9a\u683c\u5f0f\u8fd4\u56de\u65f6\u95f4\u51fd\u6570date_format",level:3},{value:"21. \u5f53\u524d\u661f\u671f\u51fd\u6570\uff1adayofweek",id:"21-\u5f53\u524d\u661f\u671f\u51fd\u6570dayofweek",level:3},{value:"22. \u5f53\u524d\u65f6\u95f4\u65e5\u671f\u51fd\u6570\uff1acurrent_date",id:"22-\u5f53\u524d\u65f6\u95f4\u65e5\u671f\u51fd\u6570current_date",level:3},{value:"23. \u5f53\u524d\u65f6\u95f4\u65e5\u671f\u51fd\u6570\uff1acurrent_timestamp",id:"23-\u5f53\u524d\u65f6\u95f4\u65e5\u671f\u51fd\u6570current_timestamp",level:3}],m={toc:o};function c(e){var t=e.components,n=(0,l.Z)(e,u);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"1-unix-\u65f6\u95f4\u6233\u8f6c\u65e5\u671f\u51fd\u6570from_unixtime"},"1. UNIX \u65f6\u95f4\u6233\u8f6c\u65e5\u671f\u51fd\u6570\uff1afrom_unixtime"),(0,r.kt)("p",null,"\u8bed\u6cd5\uff1afrom_unixtime(bigint unixtime","[, string format]",")"),(0,r.kt)("p",null,"\u8fd4\u56de\u7c7b\u578b\uff1astring"),(0,r.kt)("p",null,"\u8bf4\u660e\uff1a\u8f6c\u5316 UNIX \u65f6\u95f4\u6233\uff08\u4ece1970-01-01 00\uff1a00\uff1a00 UTC \u5230\u6307\u5b9a\u65f6\u95f4\u7684\u79d2\u6570\uff09\u5230\u5f53\u524d\u65f6\u533a\u7684\u65f6\u95f4\u683c\u5f0f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select from_unixtime(1590000000, 'yyyy-MM-dd');\n")),(0,r.kt)("h3",{id:"2-\u83b7\u53d6\u5f53\u524d-unix-\u65f6\u95f4\u6233\u51fd\u6570unix_timestamp"},"2. \u83b7\u53d6\u5f53\u524d UNIX \u65f6\u95f4\u6233\u51fd\u6570\uff1aunix_timestamp"),(0,r.kt)("p",null,"\u8bed\u6cd5\uff1aunix_timestamp()"),(0,r.kt)("p",null,"\u8fd4\u56de\u7c7b\u578b\uff1abigint"),(0,r.kt)("p",null,"\u8bf4\u660e\uff1a\u8f6c\u83b7\u53d6\u5f53\u524d\u65f6\u533a\u7684 UNIX \u65f6\u95f4\u6233"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select unix_timestamp();\n")),(0,r.kt)("h3",{id:"3-\u65e5\u671f\u8f6c-unix-\u65f6\u95f4\u6233\u51fd\u6570unix_timestamp"},"3. \u65e5\u671f\u8f6c UNIX \u65f6\u95f4\u6233\u51fd\u6570\uff1aunix_timestamp"),(0,r.kt)("p",null,"\u8bed\u6cd5\uff1aunix_timestamp(string date)"),(0,r.kt)("p",null,"\u8fd4\u56de\u7c7b\u578b\uff1abigint"),(0,r.kt)("p",null,"\u8bf4\u660e\uff1a\u8f6c\u6362\u683c\u5f0f\u4e3a \u201cyyyy-MM-dd HH\uff1amm\uff1ass\u201d \u7684\u65e5\u671f\u5230 UNIX \u65f6\u95f4\u6233\u3002\u5982\u679c\u8f6c\u6362\u5931\u8d25\uff0c\u5219\u8fd4\u56de NULL\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select unix_timestamp('2020-05-21 02\uff1a40\uff1a00');\n")),(0,r.kt)("h3",{id:"4-\u6307\u5b9a\u683c\u5f0f\u65e5\u671f\u8f6c-unix-\u65f6\u95f4\u6233\u51fd\u6570unix_timestamp"},"4. \u6307\u5b9a\u683c\u5f0f\u65e5\u671f\u8f6c UNIX \u65f6\u95f4\u6233\u51fd\u6570\uff1aunix_timestamp"),(0,r.kt)("p",null,"\u8bed\u6cd5\uff1aunix_timestamp(string date, string pattern)"),(0,r.kt)("p",null,"\u8fd4\u56de\u7c7b\u578b\uff1abigint"),(0,r.kt)("p",null,"\u8bf4\u660e\uff1a\u8f6c\u6362 pattern \u683c\u5f0f\u7684\u65e5\u671f\u5230 UNIX \u65f6\u95f4\u6233\u3002\u5982\u679c\u8f6c\u6362\u5931\u8d25\uff0c\u5219\u8fd4\u56de NULL\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select unix_timestamp('20200521 02\uff1a40\uff1a00', 'yyyyMMdd HH\uff1amm\uff1ass');\n")),(0,r.kt)("h3",{id:"5-\u65e5\u671f\u65f6\u95f4\u8f6c\u65e5\u671f\u51fd\u6570to_date"},"5. \u65e5\u671f\u65f6\u95f4\u8f6c\u65e5\u671f\u51fd\u6570\uff1ato_date"),(0,r.kt)("p",null,"\u8bed\u6cd5\uff1ato_date(string timestamp)"),(0,r.kt)("p",null,"\u8fd4\u56de\u7c7b\u578b\uff1astring"),(0,r.kt)("p",null,"\u8bf4\u660e\uff1a\u8fd4\u56de\u65e5\u671f\u65f6\u95f4\u5b57\u6bb5\u4e2d\u7684",(0,r.kt)("strong",{parentName:"p"},"\u65e5\u671f\u90e8\u5206"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select to_date('2020-05-21 02\uff1a40\uff1a00');\n")),(0,r.kt)("h3",{id:"6-\u65e5\u671f\u8f6c\u5e74\u51fd\u6570year"},"6. \u65e5\u671f\u8f6c\u5e74\u51fd\u6570\uff1ayear"),(0,r.kt)("p",null,"\u8bed\u6cd5\uff1ayear(string date)"),(0,r.kt)("p",null,"\u8fd4\u56de\u7c7b\u578b\uff1aint"),(0,r.kt)("p",null,"\u8bf4\u660e\uff1a\u8fd4\u56de\u65e5\u671f\u4e2d\u7684\u5e74\u4efd\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select year('2020-05-21 02\uff1a40\uff1a00');\n")),(0,r.kt)("h3",{id:"7-\u65e5\u671f\u8f6c\u6708\u51fd\u6570month"},"7. \u65e5\u671f\u8f6c\u6708\u51fd\u6570\uff1amonth"),(0,r.kt)("p",null,"\u8bed\u6cd5\uff1amonth(string date)"),(0,r.kt)("p",null,"\u8fd4\u56de\u7c7b\u578b\uff1aint"),(0,r.kt)("p",null,"\u8bf4\u660e\uff1a\u8fd4\u56de\u65e5\u671f\u4e2d\u7684\u6708\u4efd\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select month('2020-05-21 02\uff1a40\uff1a00');\n")),(0,r.kt)("h3",{id:"8-\u65e5\u671f\u8f6c\u5929\u51fd\u6570day"},"8. \u65e5\u671f\u8f6c\u5929\u51fd\u6570\uff1aday"),(0,r.kt)("p",null,"\u8bed\u6cd5\uff1aday(string date)"),(0,r.kt)("p",null,"\u8fd4\u56de\u7c7b\u578b\uff1aint"),(0,r.kt)("p",null,"\u8bf4\u660e\uff1a\u8fd4\u56de\u65e5\u671f\u4e2d\u7684\u5929\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select day('2020-05-21 02\uff1a40\uff1a00');\n")),(0,r.kt)("h3",{id:"9-\u65e5\u671f\u8f6c\u5c0f\u65f6\u51fd\u6570hour"},"9. \u65e5\u671f\u8f6c\u5c0f\u65f6\u51fd\u6570\uff1ahour"),(0,r.kt)("p",null,"\u8bed\u6cd5\uff1ahour(string date)"),(0,r.kt)("p",null,"\u8fd4\u56de\u7c7b\u578b\uff1aint"),(0,r.kt)("p",null,"\u8bf4\u660e\uff1a\u8fd4\u56de\u65e5\u671f\u4e2d\u7684\u5c0f\u65f6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select hour('2020-05-21 02\uff1a40\uff1a00');\n")),(0,r.kt)("h3",{id:"10-\u65e5\u671f\u8f6c\u5206\u949f\u51fd\u6570minute"},"10. \u65e5\u671f\u8f6c\u5206\u949f\u51fd\u6570\uff1aminute"),(0,r.kt)("p",null,"\u8bed\u6cd5\uff1aminute(string date)"),(0,r.kt)("p",null,"\u8fd4\u56de\u7c7b\u578b\uff1aint"),(0,r.kt)("p",null,"\u8bf4\u660e\uff1a\u8fd4\u56de\u65e5\u671f\u4e2d\u7684\u5206\u949f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select minute('2020-05-21 02\uff1a40\uff1a00');\n")),(0,r.kt)("h3",{id:"11-\u65e5\u671f\u8f6c\u79d2\u51fd\u6570second"},"11. \u65e5\u671f\u8f6c\u79d2\u51fd\u6570\uff1asecond"),(0,r.kt)("p",null,"\u8bed\u6cd5\uff1asecond(string date)"),(0,r.kt)("p",null,"\u8fd4\u56de\u7c7b\u578b\uff1aint"),(0,r.kt)("p",null,"\u8bf4\u660e\uff1a\u8fd4\u56de\u65e5\u671f\u4e2d\u7684\u79d2\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select second('2020-05-21 02\uff1a40\uff1a00');\n")),(0,r.kt)("h3",{id:"12-\u65e5\u671f\u8f6c\u5468\u51fd\u6570weekofyear"},"12. \u65e5\u671f\u8f6c\u5468\u51fd\u6570\uff1aweekofyear"),(0,r.kt)("p",null,"\u8bed\u6cd5\uff1aweekofyear(string date)"),(0,r.kt)("p",null,"\u8fd4\u56de\u7c7b\u578b\uff1aint"),(0,r.kt)("p",null,"\u8bf4\u660e\uff1a\u8fd4\u56de\u65e5\u671f\u5728\u8be5\u5e74\u7684\u5468\u6570\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select weekofyear('2020-05-21 02\uff1a40\uff1a00');\n")),(0,r.kt)("h3",{id:"13-\u65e5\u671f\u6bd4\u8f83\u51fd\u6570datediff"},"13. \u65e5\u671f\u6bd4\u8f83\u51fd\u6570\uff1adatediff"),(0,r.kt)("p",null,"\u8bed\u6cd5\uff1adatediff(string enddate, string startdate)"),(0,r.kt)("p",null,"\u8fd4\u56de\u7c7b\u578b\uff1aint"),(0,r.kt)("p",null,"\u8bf4\u660e\uff1a\u8fd4\u56de\u7ed3\u675f\u65e5\u671f\u51cf\u53bb\u5f00\u59cb\u65e5\u671f\u7684\u5929\u6570\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select datediff('2020-05-21', '2020-01-01');\n")),(0,r.kt)("h3",{id:"14-\u65e5\u671f\u589e\u52a0\u51fd\u6570date_add"},"14. \u65e5\u671f\u589e\u52a0\u51fd\u6570\uff1adate_add"),(0,r.kt)("p",null,"\u8bed\u6cd5\uff1adate_add(string startdate, int days)"),(0,r.kt)("p",null,"\u8fd4\u56de\u7c7b\u578b\uff1astring"),(0,r.kt)("p",null,"\u8bf4\u660e\uff1a\u8fd4\u56de\u5f00\u59cb\u65e5\u671f startdate \u589e\u52a0 days \u5929\u540e\u7684\u65e5\u671f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select date_add('2020-05-21', 10);\n")),(0,r.kt)("h3",{id:"15-\u65e5\u671f\u51cf\u5c11\u51fd\u6570date_sub"},"15. \u65e5\u671f\u51cf\u5c11\u51fd\u6570\uff1adate_sub"),(0,r.kt)("p",null,"\u8bed\u6cd5\uff1adate_sub(string startdate, int days)"),(0,r.kt)("p",null,"\u8fd4\u56de\u7c7b\u578b\uff1astring"),(0,r.kt)("p",null,"\u8bf4\u660e\uff1a\u8fd4\u56de\u5f00\u59cb\u65e5\u671f startdate \u51cf\u5c11 days \u5929\u540e\u7684\u65e5\u671f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select date_sub('2020-05-21', 10);\n")),(0,r.kt)("h3",{id:"16-\u6708\u4efd\u589e\u52a0\u51fd\u6570add_months"},"16. \u6708\u4efd\u589e\u52a0\u51fd\u6570\uff1aadd_months"),(0,r.kt)("p",null,"\u8bed\u6cd5\uff1aadd_months(string start_date, int num_months)"),(0,r.kt)("p",null,"\u8fd4\u56de\u503c\uff1astring"),(0,r.kt)("p",null,"\u8bf4\u660e\uff1a\u8fd4\u56de\u5f53\u524d\u65f6\u95f4\u4e0b\u518d\u589e\u52a0num_months\u4e2a\u6708\u7684\u65e5\u671f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select add_months(\u20181996-10-21\u2019,10);\n")),(0,r.kt)("h3",{id:"17-\u6700\u540e\u4e00\u5929\u7684\u65e5\u671f\u51fd\u6570last_day"},"17. \u6700\u540e\u4e00\u5929\u7684\u65e5\u671f\u51fd\u6570\uff1alast_day"),(0,r.kt)("p",null,"\u8bed\u6cd5\uff1alast_day(string date)"),(0,r.kt)("p",null,"\u8fd4\u56de\u503c\uff1astring"),(0,r.kt)("p",null,"\u8bf4\u660e\uff1a\u8fd4\u56de\u8fd9\u4e2a\u6708\u7684\u6700\u540e\u4e00\u5929\u7684\u65e5\u671f\uff0c\u5ffd\u7565\u65f6\u5206\u79d2\u90e8\u5206\uff08HH\uff1amm\uff1ass\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select last_day(current_date());\n")),(0,r.kt)("h3",{id:"18-\u4e0b\u4e00\u4e2a\u661f\u671fx\u6240\u5bf9\u5e94\u7684\u65e5\u671f\u51fd\u6570next_day"},"18. \u4e0b\u4e00\u4e2a\u661f\u671fX\u6240\u5bf9\u5e94\u7684\u65e5\u671f\u51fd\u6570\uff1anext_day"),(0,r.kt)("p",null,"\u8bed\u6cd5\uff1anext_day(string start_date, string day_of_week)"),(0,r.kt)("p",null,"\u8fd4\u56de\u503c\uff1astring"),(0,r.kt)("p",null,"\u8bf4\u660e\uff1a\u8fd4\u56de\u5f53\u524d\u65f6\u95f4\u7684\u4e0b\u4e00\u4e2a\u661f\u671fX\u6240\u5bf9\u5e94\u7684\u65e5\u671f \u5982\uff1anext_day(\u20182015-01-14\u2019, \u2018TU\u2019) = 2015-01-20 \u4ee52015-01-14\u4e3a\u5f00\u59cb\u65f6\u95f4\uff0c\u5176\u4e0b\u4e00\u4e2a\u661f\u671f\u4e8c\u6240\u5bf9\u5e94\u7684\u65e5\u671f\u4e3a2015-01-20"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select next_day(current_date(),\u2018su\u2019);\n")),(0,r.kt)("h3",{id:"19-\u76f8\u5dee\u7684\u6708\u4efd\u51fd\u6570months_between"},"19. \u76f8\u5dee\u7684\u6708\u4efd\u51fd\u6570\uff1amonths_between"),(0,r.kt)("p",null,"\u8bed\u6cd5\uff1amonths_between(date1, date2)"),(0,r.kt)("p",null,"\u8fd4\u56de\u503c\uff1adouble"),(0,r.kt)("p",null,"\u8bf4\u660e\uff1a\u8fd4\u56dedate1\u4e0edate2\u4e4b\u95f4\u76f8\u5dee\u7684\u6708\u4efd\uff0c\u5982date1>date2\uff0c\u5219\u8fd4\u56de\u6b63\uff0c\u5982\u679cdate1<date2,\u5219\u8fd4\u56de\u8d1f\uff0c\u5426\u5219\u8fd4\u56de0.0 \u5982\uff1amonths_between(\u20181997-02-28 10\uff1a30\uff1a00\u2019, \u20181996-10-30\u2019) = 3.94959677 1997-02-28 10\uff1a30\uff1a00\u4e0e1996-10-30\u76f8\u5dee3.94959677\u4e2a\u6708"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"elect months_between(current_date(),\u20182020-5-13\u2019);\n")),(0,r.kt)("h3",{id:"20-\u6307\u5b9a\u683c\u5f0f\u8fd4\u56de\u65f6\u95f4\u51fd\u6570date_format"},"20. \u6307\u5b9a\u683c\u5f0f\u8fd4\u56de\u65f6\u95f4\u51fd\u6570\uff1adate_format"),(0,r.kt)("p",null,"\u8bed\u6cd5\uff1adate_format(date/timestamp/string ts, string fmt)"),(0,r.kt)("p",null,"\u8fd4\u56de\u503c\uff1astring"),(0,r.kt)("p",null,"\u8bf4\u660e\uff1a\u6309\u6307\u5b9a\u683c\u5f0f\u8fd4\u56de\u65f6\u95f4date \u5982\uff1adate_format(\u201c2016-06-22\u201d,\u201cMM-dd\u201d)=06-22"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select date_format(current_date(),\u2018MM.dd\u2019);\n")),(0,r.kt)("h3",{id:"21-\u5f53\u524d\u661f\u671f\u51fd\u6570dayofweek"},"21. \u5f53\u524d\u661f\u671f\u51fd\u6570\uff1adayofweek"),(0,r.kt)("p",null,"\u8bed\u6cd5\uff1adayofweek(date)"),(0,r.kt)("p",null,"\u8fd4\u56de\u503c\uff1aint"),(0,r.kt)("p",null,"\u8bf4\u660e\uff1a\u8fd4\u56de\u65e5\u671f\u90a3\u5929\u7684\u5468\u51e0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select dayofweek(current_date());\n")),(0,r.kt)("h3",{id:"22-\u5f53\u524d\u65f6\u95f4\u65e5\u671f\u51fd\u6570current_date"},"22. \u5f53\u524d\u65f6\u95f4\u65e5\u671f\u51fd\u6570\uff1acurrent_date"),(0,r.kt)("p",null,"\u8bed\u6cd5\uff1acurrent_date()"),(0,r.kt)("p",null,"\u8fd4\u56de\u503c\uff1adate"),(0,r.kt)("p",null,"\u8bf4\u660e\uff1a\u8fd4\u56de\u5f53\u524d\u65f6\u95f4\u65e5\u671f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select current_date;\n")),(0,r.kt)("h3",{id:"23-\u5f53\u524d\u65f6\u95f4\u65e5\u671f\u51fd\u6570current_timestamp"},"23. \u5f53\u524d\u65f6\u95f4\u65e5\u671f\u51fd\u6570\uff1acurrent_timestamp"),(0,r.kt)("p",null,"\u8bed\u6cd5\uff1acurrent_timestamp()"),(0,r.kt)("p",null,"\u8fd4\u56de\u503c\uff1atimestamp"),(0,r.kt)("p",null,"\u8bf4\u660e\uff1a\u8fd4\u56de\u5f53\u524d\u65f6\u95f4\u6233"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select current_timestamp();\n")))}c.isMDXComponent=!0}}]);