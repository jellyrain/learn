"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1632],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return m}});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var i=n.createContext({}),o=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},u=function(t){var e=o(t.components);return n.createElement(i.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},b=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,i=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),b=o(a),m=l,d=b["".concat(i,".").concat(m)]||b[m]||c[m]||r;return a?n.createElement(d,s(s({ref:e},u),{},{components:a})):n.createElement(d,s({ref:e},u))}));function m(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,s=new Array(r);s[0]=b;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:l,s[1]=p;for(var o=2;o<r;o++)s[o]=a[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},91884:function(t,e,a){a.r(e),a.d(e,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return c}});var n=a(83117),l=a(80102),r=(a(67294),a(3905)),s=["components"],p={},i=void 0,o={unversionedId:"SQL/DDL/\u5206\u533a\u8868",id:"SQL/DDL/\u5206\u533a\u8868",title:"\u5206\u533a\u8868",description:"\u5206\u533a\u662f\u5c06\u4e00\u4e2a\u8868\u6216\u7d22\u5f15\u7269\u7406\u5730\u5206\u89e3\u4e3a\u591a\u4e2a\u66f4\u5c0f\u3001\u66f4\u53ef\u7ba1\u7406\u7684\u90e8\u5206",source:"@site/docs\\SQL\\DDL\\\u5206\u533a\u8868.md",sourceDirName:"SQL/DDL",slug:"/SQL/DDL/\u5206\u533a\u8868",permalink:"/learn/SQL/DDL/\u5206\u533a\u8868",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"truncate",permalink:"/learn/SQL/DDL/truncate"},next:{title:"\u5e8f\u5217",permalink:"/learn/SQL/DDL/\u5e8f\u5217"}},u={},c=[{value:"1. \u8303\u56f4\u5206\u533a\uff08range\uff09\uff1a",id:"1-\u8303\u56f4\u5206\u533arange",level:3},{value:"2. \u54c8\u5e0c\u5206\u533a | \u6563\u5217\u5206\u533a\uff08hash\uff09\uff1a",id:"2-\u54c8\u5e0c\u5206\u533a--\u6563\u5217\u5206\u533ahash",level:3},{value:"3. \u5217\u8868\u5206\u533a\uff08list\uff09\uff1a",id:"3-\u5217\u8868\u5206\u533alist",level:3},{value:"4. \u7ec4\u5408\u5206\u533a\uff1a",id:"4-\u7ec4\u5408\u5206\u533a",level:3},{value:"5. \u95f4\u9694\u5206\u533a\uff1a",id:"5-\u95f4\u9694\u5206\u533a",level:3},{value:"6. \u5206\u533a\u7d22\u5f15\uff1a",id:"6-\u5206\u533a\u7d22\u5f15",level:3},{value:"1. \u5c40\u90e8\uff08\u672c\u5730\uff09\u7d22\u5f15\uff08local\uff09\uff1a",id:"1-\u5c40\u90e8\u672c\u5730\u7d22\u5f15local",level:4},{value:"2. \u5168\u5c40\u7d22\u5f15\uff1a",id:"2-\u5168\u5c40\u7d22\u5f15",level:4},{value:"3. \u5206\u533a\u7d22\u5f15\u5b57\u5178\uff1a",id:"3-\u5206\u533a\u7d22\u5f15\u5b57\u5178",level:4}],b={toc:c};function m(t){var e=t.components,p=(0,l.Z)(t,s);return(0,r.kt)("wrapper",(0,n.Z)({},b,p,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5206\u533a\u662f\u5c06\u4e00\u4e2a\u8868\u6216\u7d22\u5f15\u7269\u7406\u5730\u5206\u89e3\u4e3a\u591a\u4e2a\u66f4\u5c0f\u3001\u66f4\u53ef\u7ba1\u7406\u7684\u90e8\u5206"),(0,r.kt)("h3",{id:"1-\u8303\u56f4\u5206\u533arange"},"1. \u8303\u56f4\u5206\u533a\uff08range\uff09\uff1a"),(0,r.kt)("p",null,"range \u5206\u533a\u662f\u5e94\u7528\u8303\u56f4\u6bd4\u8f83\u5e7f\u7684\u8868\u5206\u533a\u65b9\u5f0f\uff0c\u5b83\u662f\u4ee5\u5217\u7684\u503c\u7684\u8303\u56f4\u6765\u505a\u4e3a\u5206\u533a\u7684\u5212\u5206\u6761\u4ef6\uff0c\u5c06\u8bb0\u5f55\u653e\u5230\u5217\u503c\n\u6240\u5bf9\u5e94\u7684\u5206\u533a\u4e2d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create table pt_range_test1(\n  pid   number(10),\n  pname varchar2(30)\n) partition by range(pid) (\n  partition p1 values less than(1000) tablespace tetstbs1,\n  partition p2 values less than(2000) tablespace tetstbs2,\n  partition p3 values less than(maxvalue) tablespace tetstbs3\n) enable row movement;\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u4e0d\u5fc5\u4e3a\u6700\u540e\u4e00\u4e2a\u5206\u533a\u6307\u5b9a\u6700\u5927\u503c\uff0cmaxvalue \u5173\u952e\u5b57\u4f1a\u544a\u8bc9 oracle \u4f7f\u7528\u8fd9\u4e2a\u5206\u533a\u6765\u5b58\u50a8\u5728\u524d\u9762\u51e0\u4e2a\u5206\u533a\u4e2d\u4e0d\u80fd\u5b58\u50a8\u7684\u6570\u636e")),(0,r.kt)("h3",{id:"2-\u54c8\u5e0c\u5206\u533a--\u6563\u5217\u5206\u533ahash"},"2. \u54c8\u5e0c\u5206\u533a | \u6563\u5217\u5206\u533a\uff08hash\uff09\uff1a"),(0,r.kt)("p",null,"\u6563\u5217\u5206\u533a(hash \u5206\u533a)\u901a\u8fc7\u5728\u5206\u533a\u952e\u503c\u4e0a\u6267\u884c\u4e00\u4e2a\u6563\u5217\u51fd\u6570\u6765\u51b3\u5b9a\u6570\u636e\u7684\u7269\u7406\u4f4d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create table pt_hash_test(\n  pid   number(10),\n  pname varchar2(30)\n) partition by hash(pid) (\n  partition p1 tablespace tetstbs1,\n  partition p2 tablespace tetstbs2,\n  partition p3 tablespace tetstbs3,\n  partition p4 tablespace tetstbs4\n);\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8fde\u7eed\u7684\u5206\u533a\u952e\u503c\u4e00\u822c\u4e0d\u5b58\u50a8\u5728\u76f8\u540c\u7684\u5206\u533a\u4e2d\uff0c\u6563\u5217\u5206\u533a\u628a\u8bb0\u5f55\u5206\u5e03\u5728\u6bd4\u8303\u56f4\u5206\u533a\u66f4\u591a\u7684\u5206\u533a\u4e0a\uff0c\n\u8fd9\u964d\u4f4e\u4e86 I/O \u4e89\u7528\u7684\u53ef\u80fd\u6027")),(0,r.kt)("h3",{id:"3-\u5217\u8868\u5206\u533alist"},"3. \u5217\u8868\u5206\u533a\uff08list\uff09\uff1a"),(0,r.kt)("p",null,"List \u5206\u533a\u4e5f\u9700\u8981\u6307\u5b9a\u5217\u7684\u503c\uff0c\u5176\u5206\u533a\u503c\u5fc5\u987b\u660e\u786e\u6307\u5b9a\uff0c\u8be5\u5206\u533a\u5217\u53ea\u80fd\u6709\u4e00\u4e2a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create table pt_list_test(\n  pid   number(10),\n  pname varchar2(30),\n  sex   varchar2(10)\n) partition by list(sex) (\n  partition p1 values ('MAN', '\u7537') tablespace tetstbs1,\n  partition p2 values ('WOMAN', '\u5973') tablespace tetstbs2,\n  partition p3 values (default) tablespace tetstbs3\n) enable row movement;\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5728\u5206\u533a\u65f6\u5fc5\u987b\u786e\u5b9a\u5206\u533a\u5217\u53ef\u80fd\u5b58\u5728\u7684\u503c\uff0c\u4e00\u65e6\u63d2\u5165\u7684\u5217\u503c\u4e0d\u5728\u5206\u533a\u8303\u56f4\u5185\uff0c\n\u5219\u63d2\u5165/\u66f4\u65b0\u5c31\u4f1a\u5931\u8d25\uff0c \u56e0\u6b64\u901a\u5e38\u5efa\u8bae\u4f7f\u7528 list \u5206\u533a\u65f6\uff0c\u8981\u521b\u5efa\u4e00\u4e2a default \u5206\u533a\n\u5b58\u50a8\u90a3\u4e9b\u4e0d\u5728\u6307\u5b9a\u8303\u56f4\u5185\u7684\u8bb0\u5f55\uff0c\u7c7b\u4f3c range \u5206\u533a\u4e2d\u7684 maxvalue \u5206\u533a")),(0,r.kt)("h3",{id:"4-\u7ec4\u5408\u5206\u533a"},"4. \u7ec4\u5408\u5206\u533a\uff1a"),(0,r.kt)("p",null,"\u5982\u679c\u67d0\u8868\u6309\u7167\u67d0\u5217\u5206\u533a\u4e4b\u540e\uff0c\u4ecd\u7136\u8f83\u5927\uff0c\u6216\u8005\u662f\u4e00\u4e9b\u5176\u5b83\u7684\u9700\u6c42\uff0c\u8fd8\u53ef\u4ee5\u901a\n\u8fc7\u5206\u533a\u5185\u518d\u5efa\u5b50\u5206\u533a\u7684\u65b9\u5f0f\u5c06\u5206\u533a\u518d\u5206\u533a\uff0c\u5373\u7ec4\u5408\u5206\u533a\u7684\u65b9\u5f0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u60c5\u51b51\uff1arange + list\ncreate table pt_range_list_test(\n   pid         number(10),\n   pname       varchar2(30),\n   sex         varchar2(10),\n   create_date date\n) partition by range(create_date)\n  subpartition by list(sex) (\n    partition p1 values less than(to_date('2020-01-01', 'YYYY-MM-DD')) tablespace tetstbs1(\n      subpartition sub1p1 values('MAN') tablespace tetstbs1,\n      subpartition sub2p1 values('WOMAN') tablespace tetstbs1,\n      subpartition sub3p1 values(default) tablespace tetstbs1\n    ),\n    partition p2 values less than(to_date('2021-01-01', 'YYYY-MM-DD')) tablespace tetstbs2(\n      subpartition sub1p2 values('MAN') tablespace tetstbs2,\n      subpartition sub2p2 values('WOMAN') tablespace tetstbs2,\n      subpartition sub3p2 values(default) tablespace tetstbs2\n    ),\n    partition p3 values less than(maxvalue) tablespace tetstbs3(\n      subpartition sub1p3 values('MAN') tablespace tetstbs3,\n      subpartition sub2p3 values('WOMAN') tablespace tetstbs3,\n      subpartition sub3p3 values(default) tablespace tetstbs3\n    )\n  ) enable row movement;\n\n-- \u60c5\u51b52\uff1arange + hash\n  create table pt_range_hash_test(\n   pid         number(10),\n   pname       varchar2(30),\n   sex         varchar2(10),\n   create_date date\n) partition by range(create_date)\n  subpartition by hash(pid) subpartitions 4 store in (tetstbs1, tetstbs2, tetstbs3, tetstbs4)(\n     partition p1 values less than(to_date('2020-01-01', 'YYYY-MM-DD')) tablespace tetstbs1,\n     partition p2 values less than(to_date('2021-01-01', 'YYYY-MM-DD')) tablespace tetstbs2,\n     partition p3 values less than(to_date('2022-01-01', 'YYYY-MM-DD')) tablespace tetstbs3,\n     partition p4 values less than(maxvalue) tablespace tetstbs4\n  ) enable row movement;\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u7ec4\u5408\u5206\u533a\u5728 10g \u4e2d\u6709\u4e24\u79cd\uff1arange-hash\uff0crange-list\u3002\u6ce8\u610f\u987a\u5e8f\uff0c\u6839\u5206\u533a\u53ea\n\u80fd\u662f range \u5206\u533a\uff0c\u5b50\u5206\u533a\u53ef\u4ee5\u662f hash \u5206\u533a\u6216 list \u5206\u533a")),(0,r.kt)("p",null,"\u4e00\u822c\u4e00\u5f20\u8868\u8d85\u8fc7 2G \u7684\u5927\u5c0f\uff0cORACLE \u662f\u63a8\u8350\u4f7f\u7528\u5206\u533a\u8868\u7684\uff0c\u5206\u533a\u4e00\u822c\u90fd\u9700\u8981 \u521b\u5efa\u7d22\u5f15\uff0c\u8bf4\u5230\u5206\u533a\u7d22\u5f15\uff0c\n\u5c31\u53ef\u4ee5\u5206\u4e3a\uff1a\u5168\u5c40\u7d22\u5f15\u3001\u5206\u533a\u7d22\u5f15\uff0c\u5373\uff1aglobal \u7d22\u5f15\u548c local \u7d22\u5f15\uff0c\u524d\u8005\u4e3a\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5728\u5206\u533a\u8868\u4e0a\u521b\u5efa\u7d22\n\u5f15\u65f6\u7684\u7d22\u5f15\u65b9\u5f0f\uff0c\u5e76 \u4e0d\u5bf9\u7d22\u5f15\u8fdb\u884c\u5206\u533a\uff08\u7d22\u5f15\u4e5f\u662f\u8868\u7ed3\u6784\uff0c\u7d22\u5f15\u5927\u4e86\u4e5f\u9700\u8981\u5206\u533a\uff0c\u5173\u4e8e\u7d22\u5f15\u4ee5\u540e\u4e13\u95e8\u5199\n\u70b9\uff09\u800c\u5168\u5c40\u7d22\u5f15\u53ef\u4fee\u9970\u4e3a\u5206\u533a\u7d22\u5f15\uff0c\u4f46\u662f\u548c local \u7d22\u5f15\u6709\u6240\u533a\u522b\uff0c\u524d\u8005\u7684\u5206\u533a \u65b9\u5f0f\u5b8c\u5168\u6309\u7167\u81ea\u5b9a\u4e49\u65b9\u5f0f\u53bb\n\u521b\u5efa\uff0c\u548c\u8868\u7ed3\u6784\u5b8c\u5168\u65e0\u5173"),(0,r.kt)("h3",{id:"5-\u95f4\u9694\u5206\u533a"},"5. \u95f4\u9694\u5206\u533a\uff1a"),(0,r.kt)("p",null,"\u5728 oracle11g \u4e2d\u53ef\u7528\u7684\u53e6\u4e00\u79cd\u65b0\u7684\u5206\u533a\u7c7b\u578b\u662f\u95f4\u9694\u5206\u533a\u3002\u5728\u95f4\u9694\u5206\u533a\u4e2d\uff0c\u4e0d\u5fc5\u4e3a\u6bcf\u4e2a\u5206\u533a\n\u6307\u5b9a\u7279\u5b9a\u7684\u8303\u56f4\u503c\uff0c\u800c\u662f\u6307\u5b9a\u95f4\u9694\u6301\u7eed\u7684\u65f6\u95f4\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u4e0d\u662f\u6307\u5b9a\u5206\u533a 1 \u5728\n1 \u6708 31 \u65e5\u7ed3\u675f\uff0c\u5206\u533a 2 \u5728 2 \u6708 29 \u65e5\u7ed3\u675f\uff0c\u800c\u662f\u6307\u5b9a\u6bcf\u4e2a\u5206\u533a\u4e3a 1 \u4e2a\u6708\u957f\u7684\u65f6"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5f53\u63d2\u5165\u65b0\u884c\u65f6\uff0coracle \u5c06\u6839\u636e\u95f4\u9694\u5b9a\u4e49\u786e\u5b9a\u5c06\u6b64\u884c\u63d2\u5165\u5230\u54ea\u4e2a\u5206\u533a\u3002\u5982\u679c\u6ca1\u6709\u4e3a\u90a3\u4e2a\u6708\u521b\u5efa\u5206\u533a\uff0c\n\u6570\u636e\u5e93\u5c06\u81ea\u52a8\u521b\u5efa\u4e00\u4e2a\u5206\u533a")),(0,r.kt)("h3",{id:"6-\u5206\u533a\u7d22\u5f15"},"6. \u5206\u533a\u7d22\u5f15\uff1a"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5206\u533a\u7d22\u5f15\u662f\u6307\u5206\u533a\u8868\u7684\u7d22\u5f15\uff0c\u800c\u4e0d\u662f\u666e\u901a\u8868\u7684\u7d22\u5f15")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(18754).Z,width:"969",height:"313"})),(0,r.kt)("h4",{id:"1-\u5c40\u90e8\u672c\u5730\u7d22\u5f15local"},"1. \u5c40\u90e8\uff08\u672c\u5730\uff09\u7d22\u5f15\uff08local\uff09\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5c40\u90e8\u7d22\u5f15\u53ea\u80fd\u4f9d\u9644\u4e8e\u5206\u533a\u8868\u4e0a"),(0,r.kt)("li",{parentName:"ol"},"\u7d22\u5f15\u5206\u7c7b\uff1a",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\u5c40\u90e8\u524d\u7f00\u5206\u533a\u7d22\u5f15\uff1aPrefixed \u7d22\u5f15\u5217 ",(0,r.kt)("inlineCode",{parentName:"li"},"=")," \u5206\u533a\u5217"),(0,r.kt)("li",{parentName:"ol"},"\u5c40\u90e8\u975e\u524d\u7f00\u5206\u533a\u7d22\u5f15\uff1aNonprefixed \u7d22\u5f15\u5217 ",(0,r.kt)("inlineCode",{parentName:"li"},"!=")," \u5206\u533a\u5217"))),(0,r.kt)("li",{parentName:"ol"},"\u5c40\u90e8\u7d22\u5f15\u7684\u5206\u533a\u673a\u5236\u548c\u8868\u7684\u5206\u533a\u673a\u5236\u4e00\u6837"),(0,r.kt)("li",{parentName:"ol"},"\u5c40\u90e8\u7d22\u5f15\u53ea\u652f\u6301\u5206\u533a\u5185\u7684\u552f\u4e00\u6027\uff0c\u65e0\u6cd5\u652f\u6301\u8868\u4e0a\u7684\u552f\u4e00\u6027"),(0,r.kt)("li",{parentName:"ol"},"\u5c40\u90e8\u7d22\u5f15\u591a\u7528\u4e8e OLAP \u7cfb\u7edf")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u4f4d\u56fe\u7d22\u5f15"),"\u53ea\u80fd\u4f7f\u7528\u5c40\u90e8\u7d22\u5f15"),(0,r.kt)("li",{parentName:"ol"},"\u5c40\u90e8\u7d22\u5f15\u662f\u9488\u5bf9\u4e8e\u5355\u4e2a\u5206\u533a\u7684"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u7d22\u5f15\u6570\u91cf\u548c\u5206\u533a\u6570\u91cf\u5fc5\u987b\u4e00\u81f4"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create table scott.partition (\n  p_id   number,\n  p_id2  number,\n  p_name varchar2(50),\n  p_date date\n) partition by range(p_id)(\n  partition p1 values less than (20000),\n  partition p2 values less than (40000),\n  partition p3 values less than (80000),\n  partition p4 values less than (100000),\n  partition p5 values less than (maxvalue)\n);\n\n-- \u521b\u5efa\u672c\u5730\u5206\u533a\u7d22\u5f15\ncreate index scott.partition_local on scott.partition(p_id)\nlocal(partition p1, -- \u7d22\u5f15\u5206\u533a\u4e2a\u6570 \u5fc5\u987b\u4e0e \u8868\u5206\u533a\u6570 \u5b8c\u5168\u5bf9\u5e94\n      partition p2,\n      partition p3,\n      partition p4,\n      partition p5);\n\n-- \u7b49\u540c\u4e0a\u8ff0\uff0c\u5199\u6cd5\u7b80\u6d01\uff0c\u63a8\u8350\ncreate index scott.partition_local on scott.partition(p_id)\nlocal;\n")),(0,r.kt)("h4",{id:"2-\u5168\u5c40\u7d22\u5f15"},"2. \u5168\u5c40\u7d22\u5f15\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5168\u5c40\u7d22\u5f15\u53ef\u4ee5\u4f9d\u9644\u4e8e\u975e\u5206\u533a\u8868\u4e0a\uff0c\u4e5f\u53ef\u4ee5\u4f9d\u9644\u4e8e\u5206\u533a\u8868\u4e0a"),(0,r.kt)("li",{parentName:"ol"},"\u5168\u5c40\u7d22\u5f15 \u53ef\u4ee5\u5206\u533a \u4e5f \u53ef\u4ee5\u4e0d\u5206\u533a\uff0c\u4f46\u662f\u5fc5\u987b\u662f\u524d\u7f00\u7d22\u5f15"),(0,r.kt)("li",{parentName:"ol"},"\u5168\u5c40\u7d22\u5f15\u7684\u5206\u533a\u952e\u548c\u5206\u533a\u6570 \u548c \u8868\u7684\u5206\u533a\u952e\u548c\u5206\u533a\u6570\u53ef\u4ee5\u4e0d\u4e00\u6837"),(0,r.kt)("li",{parentName:"ol"},"\u5c40\u90e8\u7d22\u5f15\u7684\u5206\u533a\u673a\u5236\u548c\u8868\u7684\u5206\u533a\u673a\u5236\u4e0d \u4e00\u6837"),(0,r.kt)("li",{parentName:"ol"},"\u5c40\u90e8\u7d22\u5f15\u591a\u7528\u4e8e OLTP \u7cfb\u7edf")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create index scott.partition_global on scott.partition(p_date)\nglobal partition by range(p_date)\n(partition pg1 values less than(to_date('2020-01-01', 'YYYY-MM-DD')),\n partition pg2 values less than(to_date('2021-01-01', 'YYYY-MM-DD')),\n partition pg3 values less than(to_date('2022-01-01', 'YYYY-MM-DD')),\n partition pg4 values less than(to_date('2023-01-01', 'YYYY-MM-DD')),\n partition pg5 values less than(maxvalue));\n\n-- \u540c\u7406\uff0c\u82e5\u5206\u533a\u8868\u5df2\u5b58\u5728\u5217\u5206\u533a\uff0c\u4ee5\u4e0b\u4e3a\u7b80\u6d01\u5199\u6cd5\ncreate index scott.partition_global on scott.partition(p_date)\nglobal;\n")),(0,r.kt)("h4",{id:"3-\u5206\u533a\u7d22\u5f15\u5b57\u5178"},"3. \u5206\u533a\u7d22\u5f15\u5b57\u5178\uff1a"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"DBA_PART_INDEXES")," \u5206\u533a\u7d22\u5f15\u7684\u6982\u8981\u7edf\u8ba1\u4fe1\u606f\uff0c\u53ef\u4ee5\u5f97\u77e5\u6bcf\u4e2a\u8868\u4e0a\u6709\u54ea\u4e9b\u5206\u533a\u7d22\u5f15\uff0c\u5206\u533a\u7d22\u5f15\u7684\u7c7b\u578b(local/global)\n",(0,r.kt)("strong",{parentName:"p"},"Dba_ind_partitions")," \u6bcf\u4e2a\u5206\u533a\u7d22\u5f15\u7684\u5206\u533a\u7ea7\u7edf\u8ba1\u4fe1\u606f\n",(0,r.kt)("strong",{parentName:"p"},"Dba_indexes/dba_part_indexes")," \u53ef\u4ee5\u5f97\u5230\u6bcf\u4e2a\u8868\u4e0a\u6709\u54ea\u4e9b\u975e\u5206\u533a\u7d22\u5f15"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u5206\u533a\u7d22\u5f15\nselect * from dba_part_indexes;\nselect * from dba_ind_partitions;\n\n-- \u666e\u901a\u7d22\u5f15\nselect * from dba_indexes;\n")))}m.isMDXComponent=!0},18754:function(t,e,a){e.Z=a.p+"assets/images/Snipaste_2022-06-20_14-53-52-44315b34d7e3098f4dc75b32e432807f.png"}}]);