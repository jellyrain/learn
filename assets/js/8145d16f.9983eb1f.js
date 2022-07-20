"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5564],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||s[f]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70861:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],l={},c=void 0,u={unversionedId:"SQL/PLSQL/\u52a8\u6001SQL",id:"SQL/PLSQL/\u52a8\u6001SQL",title:"\u52a8\u6001SQL",description:"1. \u52a8\u6001SQL\uff1a",source:"@site/docs\\7-SQL\\PLSQL\\\u52a8\u6001SQL.md",sourceDirName:"7-SQL/PLSQL",slug:"/SQL/PLSQL/\u52a8\u6001SQL",permalink:"/learn/SQL/PLSQL/\u52a8\u6001SQL",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u51fd\u6570",permalink:"/learn/SQL/PLSQL/\u51fd\u6570"},next:{title:"\u5305",permalink:"/learn/SQL/PLSQL/\u5305"}},p={},s=[{value:"1. \u52a8\u6001SQL\uff1a",id:"1-\u52a8\u6001sql",level:3},{value:"2. execute immediate\u8bed\u53e5\uff1a",id:"2-execute-immediate\u8bed\u53e5",level:3},{value:"3. dbms_sql\u5305\uff1a",id:"3-dbms_sql\u5305",level:3}],m={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"1-\u52a8\u6001sql"},"1. \u52a8\u6001SQL\uff1a"),(0,a.kt)("p",null,"\u6240\u8c13\u7684\u52a8\u6001SQL\u5c31\u662f\u81ea\u5df1\u62fc\u63a5 SQL\u5b57\u7b26\u4e32\uff0c\u5728\u7528 Oracle \u5185\u65b9\u6cd5\u6267\u884c SQL\u5b57\u7b26\u4e32"),(0,a.kt)("h3",{id:"2-execute-immediate\u8bed\u53e5"},"2. execute immediate\u8bed\u53e5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"execute immediate sql\u5b57\u7b26\u4e32 [into(\u53ea\u6709\u5728\u6267\u884c\u67e5\u8be2\u65f6\u4f7f\u7528) \u53d8\u91cf[, \u53d8\u91cf ...]]\n[using \u53c2\u6570[, \u53c2\u6570 ...]];\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"declare\n-- \u58f0\u540d\u4e00\u4e2a\u53d8\u91cf\u4fdd\u5b58sql\u8bed\u53e5\nv_sql varchar2(255);\n-- \u58f0\u540d\u4e00\u4e2arowtype\u7c7b\u578b\u53d8\u91cf\u4fdd\u5b58\u4e00\u6761\u5458\u5de5\u4fe1\u606f\nv emp%rowtype;\n-- \u58f0\u540d\u4e00\u4e2a\u53d8\u91cf\u63a5\u6536\u4ece\u952e\u76d8\u8f93\u5165\u7684\u5458\u5de5\u7f16\u53f7\nv_empno emp.empno%type:=&empno;\nbegin\nv_sql:='select * from emp where empno = :1 [and ename = :2]';\ndbms_output.put_line(v_sql);\nexecute immediate v_sql into v using 7369[, 'king'];\n-- execute immediate v_sql into v using v_empno;\n-- \u6253\u5370\u53d8\u91cfv\u7684\u503c\n\n")),(0,a.kt)("h3",{id:"3-dbms_sql\u5305"},"3. dbms_sql\u5305\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5148\u5c06\u8981\u6267\u884c\u7684SQL\u8bed\u53e5\u6216\u4e00\u4e2a\u8bed\u53e5\u5757\u653e\u5230\u4e00\u4e2a\u5b57\u7b26\u4e32\u53d8\u91cf\u4e2d"),(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528DBMS_SQL\u5305\u7684parse\u8fc7\u7a0b\u6765\u5206\u6790\u8be5\u5b57\u7b26\u4e32"),(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528DBMS_SQL\u5305\u7684bind_variable\u8fc7\u7a0b\u6765\u7ed1\u5b9a\u53d8\u91cf"),(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528DBMS_SQL\u5305\u7684execute\u51fd\u6570\u6765\u6267\u884c\u8bed\u53e5\u3002")))}f.isMDXComponent=!0}}]);