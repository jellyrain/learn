"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3412],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62376:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var r=n(83117),a=n(80102),l=(n(67294),n(3905)),o=["components"],i={sidebar_position:1},p=void 0,c={unversionedId:"SQL/DQL/select",id:"SQL/DQL/select",title:"select",description:"1. select\u57fa\u7840\u4f7f\u7528\uff1a",source:"@site/docs/6-SQL/DQL/select.md",sourceDirName:"6-SQL/DQL",slug:"/SQL/DQL/select",permalink:"/learn/SQL/DQL/select",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"update",permalink:"/learn/SQL/DML/update"},next:{title:"from",permalink:"/learn/SQL/DQL/from"}},u={},s=[{value:"1. select\u57fa\u7840\u4f7f\u7528\uff1a",id:"1-select\u57fa\u7840\u4f7f\u7528",level:3},{value:"2. distinct \u53bb\u91cd\uff1a",id:"2-distinct-\u53bb\u91cd",level:3},{value:"3. \u8fd0\u7b97\uff1a",id:"3-\u8fd0\u7b97",level:3},{value:"4. \u5141\u8bb8\u503c\uff1a",id:"4-\u5141\u8bb8\u503c",level:3},{value:"5. \u5217\u7684\u522b\u540d\uff1a",id:"5-\u5217\u7684\u522b\u540d",level:3}],m={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"1-select\u57fa\u7840\u4f7f\u7528"},"1. select\u57fa\u7840\u4f7f\u7528\uff1a"),(0,l.kt)("p",null,"select \u8bed\u53e5 \u7528\u4e8e\u4ece\u8868\u4e2d\u9009\u53d6\u6570\u636e\u5c55\u793a\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'    select \u5217\u540d\u79f0 from \u8868\u540d\u79f0 (\u5355\u5217\u67e5\u8be2)\n\u6216\u8005\uff1a\n    select * from \u8868\u540d\u79f0 (\u5168\u5217\u67e5\u8be2)\n\u6216\u8005\uff1a\n    select LastName, FirstName from Persons (\u67e5\u8be2\u540d\u4e3a "LastName" \u548c "FirstName"\u7684\u5217\u7684\u5185\u5bb9)\n')),(0,l.kt)("h3",{id:"2-distinct-\u53bb\u91cd"},"2. distinct \u53bb\u91cd\uff1a"),(0,l.kt)("p",null,"\u5728\u8868\u4e2d\uff0c\u53ef\u80fd\u4f1a\u5305\u542b\u91cd\u590d\u503c\u3002\u8fd9\u5e76\u4e0d\u6210\u95ee\u9898\uff0c\u4e0d\u8fc7\uff0c\u6709\u65f6\u60a8\u4e5f\u8bb8\u5e0c\u671b\u4ec5\u4ec5\u5217\u51fa\u4e0d\u540c\uff08distinct\uff09\u7684\u503c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select distinct \u5217\u540d\u79f0 from \u8868\u540d\u79f0\n")),(0,l.kt)("h3",{id:"3-\u8fd0\u7b97"},"3. \u8fd0\u7b97\uff1a"),(0,l.kt)("p",null,"select \u8bed\u53e5\u5c55\u793a\u7684\u5217\u53ef\u4ee5\u8fdb\u884c\u8fd0\u7b97\u5728\u663e\u793a\uff08",(0,l.kt)("strong",{parentName:"p"},"\u6570\u5b57\u548c\u65e5\u671f"),"\uff09\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u64cd\u4f5c\u7b26"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"+"),(0,l.kt)("td",{parentName:"tr",align:null},"\u52a0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"\u51cf")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"*"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e58")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9664")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u64cd\u4f5c\u7b26\u4f18\u5148\u7ea7"),"\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4e58\u9664\u7684\u4f18\u5148\u7ea7\u9ad8\u4e8e\u52a0\u51cf\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u540c\u4e00\u4f18\u5148\u7ea7\u8fd0\u7b97\u7b26\u4ece\u5de6\u5411\u53f3\u6267\u884c\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u62ec\u53f7\u5185\u7684\u8fd0\u7b97\u5148\u6267\u884c\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select \u5de5\u8d44 + \u6d25\u8d34 from \u8868\u540d\u79f0\n")),(0,l.kt)("h3",{id:"4-\u5141\u8bb8\u503c"},"4. \u5141\u8bb8\u503c\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5b57\u6bb5\uff08\u5217\u540d\uff09"),(0,l.kt)("li",{parentName:"ol"},"\u5b57\u7b26\u4e32\u5e38\u91cf"),(0,l.kt)("li",{parentName:"ol"},"\u6570\u5b57"),(0,l.kt)("li",{parentName:"ol"},"null"),(0,l.kt)("li",{parentName:"ol"},"\u7279\u6b8a\u5173\u952e\u5b57\uff1a\u5982 sysdate \u67e5\u8be2\u5f53\u524d\u65f6\u95f4"),(0,l.kt)("li",{parentName:"ol"},"\u51fd\u6570\u8fd4\u56de\u7ed3\u679c"),(0,l.kt)("li",{parentName:"ol"},"|| \u5b57\u7b26\u4e32\u62fc\u88c5\u7ed3\u679c"),(0,l.kt)("li",{parentName:"ol"},"rowid \u4f2a\u5217\uff1a\u63d2\u5165\u65f6\u751f\u6210\u7684\u7269\u7406id"),(0,l.kt)("li",{parentName:"ol"},"rownum \u4f2a\u5217\uff1a\u67e5\u8be2\u8868\u65f6\u751f\u6210\u7684id")),(0,l.kt)("h3",{id:"5-\u5217\u7684\u522b\u540d"},"5. \u5217\u7684\u522b\u540d\uff1a"),(0,l.kt)("p",null,"\u53ef\u4ee5\u91cd\u547d\u540d\u4e00\u4e2a\u5217\u7684\u540d\u5b57\uff0c\u4f7f\u7528 as \u5173\u952e\u5b57 \uff08as \u53ef\u4ee5\u7701\u7565\u4e0d\u5199\uff09\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"\u5b8c\u6574\uff1aselect \u5de5\u8d44 as \u5c0f\u94b1\u94b1 from \u8868\u540d\u79f0\n\n\u7b80\u5199\uff1aselect \u5de5\u8d44 \u5c0f\u94b1\u94b1 from \u8868\u540d\u79f0\n")),(0,l.kt)("p",null,"\u5217\u7684\u522b\u540d\u5982\u679c\u51fa\u73b0 ",(0,l.kt)("strong",{parentName:"p"},"\u7279\u6b8a\u5b57\u7b26")," \u9700\u8981\u4f7f\u7528\u53cc\u5f15\u53f7\u5305\u88f9\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'select \u5de5\u8d44 "\u5c0f\u94b1\u94b1 ~(o v o)~" from \u8868\u540d\u79f0\n')))}d.isMDXComponent=!0}}]);