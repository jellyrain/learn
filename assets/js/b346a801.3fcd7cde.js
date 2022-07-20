"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[512],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),k=p(n),s=a,d=k["".concat(u,".").concat(s)]||k[s]||m[s]||l;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},20797:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var r=n(83117),a=n(80102),l=(n(67294),n(3905)),o=["components"],i={},u=void 0,p={unversionedId:"SQL/DDL/\u7ea6\u675f\u8868",id:"SQL/DDL/\u7ea6\u675f\u8868",title:"\u7ea6\u675f\u8868",description:"1. \u4e3b\u952e\u7ea6\u675f (primary key)\uff1a",source:"@site/docs\\7-SQL\\DDL\\\u7ea6\u675f\u8868.md",sourceDirName:"7-SQL/DDL",slug:"/SQL/DDL/\u7ea6\u675f\u8868",permalink:"/learn/SQL/DDL/\u7ea6\u675f\u8868",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7d22\u5f15\u4e8c",permalink:"/learn/SQL/DDL/\u7d22\u5f15\u4e8c"},next:{title:"delete",permalink:"/learn/SQL/DML/delete"}},c={},m=[{value:"1. \u4e3b\u952e\u7ea6\u675f (primary key)\uff1a",id:"1-\u4e3b\u952e\u7ea6\u675f-primary-key",level:3},{value:"2. \u552f\u4e00\u6027\u7ea6\u675f (unique)\uff1a",id:"2-\u552f\u4e00\u6027\u7ea6\u675f-unique",level:3},{value:"3. \u975e\u7a7a\u7ea6\u675f (not null)\uff1a",id:"3-\u975e\u7a7a\u7ea6\u675f-not-null",level:3},{value:"4. \u5916\u952e\u7ea6\u675f (foreign key)\uff1a",id:"4-\u5916\u952e\u7ea6\u675f-foreign-key",level:3},{value:"5. \u68c0\u67e5\u7ea6\u675f (check)\uff1a",id:"5-\u68c0\u67e5\u7ea6\u675f-check",level:3}],k={toc:m};function s(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"1-\u4e3b\u952e\u7ea6\u675f-primary-key"},"1. \u4e3b\u952e\u7ea6\u675f (primary key)\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u952e\u5217\u5fc5\u987b\u5fc5\u987b\u5177\u6709\u552f\u4e00\u6027\uff0c\u4e14\u4e0d\u80fd\u4e3a\u7a7a\uff0c\u5176\u5b9e\u4e3b\u952e\u7ea6\u675f \u76f8\u5f53\u4e8e unique + not null"),(0,l.kt)("li",{parentName:"ol"},"\u4e00\u4e2a\u8868\u53ea\u5141\u8bb8\u6709\u4e00\u4e2a\u4e3b\u952e"),(0,l.kt)("li",{parentName:"ol"},"\u4e3b\u952e\u6240\u5728\u5217\u5fc5\u987b\u5177\u6709\u7d22\u5f15\uff08\u4e3b\u952e\u7684\u552f\u4e00\u7ea6\u675f\u901a\u8fc7\u7d22\u5f15\u6765\u5b9e\u73b0\uff09\uff0c\u5982\u679c\u4e0d\u5b58\u5728\uff0c\u5c06\u4f1a\u5728\u7d22\u5f15\u6dfb\u52a0\u7684\u65f6\u5019\u81ea\u52a8\u521b\u5efa"),(0,l.kt)("li",{parentName:"ol"},"\u7ea6\u675f\u7684\u6dfb\u52a0\u53ef\u5728\u5efa\u8868\u65f6\u521b\u5efa\uff0c\u4e5f\u53ef\u5982\u4e0b\u6240\u793a\u5728\u5efa\u8868\u540e\u6dfb\u52a0\uff0c\u4e00\u822c\u63a8\u8350\u5efa\u8868\u540e\u6dfb\u52a0\uff0c\u7075\u6d3b\u5ea6\u66f4\u9ad8\u4e00\u4e9b\uff0c\u5efa\u8868\u65f6\u6dfb\u52a0\u67d0\u4e9b\u7ea6\u675f\u4f1a\u6709\u9650\u5236")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"constraint \u7ea6\u675f\u540d primary key(\u5217\u540d)\n")),(0,l.kt)("h3",{id:"2-\u552f\u4e00\u6027\u7ea6\u675f-unique"},"2. \u552f\u4e00\u6027\u7ea6\u675f (unique)\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5bf9\u4e8eunique\u7ea6\u675f\u6765\u8bb2\uff0c\u7d22\u5f15\u662f\u5fc5\u987b\u7684\u3002\u5982\u679c\u4e0d\u5b58\u5728\uff0c\u5c31\u81ea\u52a8\u521b\u5efa\u4e00\u4e2a\uff08unique\u7684\u552f\u4e00\u6027\u672c\u8d28\u4e0a\u662f\u901a\u8fc7\u7d22\u5f15\u6765\u4fdd\u8bc1\u7684\uff09"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"unique "),"\u5141\u8bb8 ",(0,l.kt)("strong",{parentName:"li"},"null")," \u503c\uff0c",(0,l.kt)("strong",{parentName:"li"},"unique")," \u7ea6\u675f\u7684\u5217\u53ef\u5b58\u5728\u591a\u4e2a ",(0,l.kt)("strong",{parentName:"li"},"null")," \u3002\u8fd9\u662f\u56e0\u4e3a\uff0c",(0,l.kt)("strong",{parentName:"li"},"unique")," \u552f\u4e00\u6027\u901a\u8fc7 ",(0,l.kt)("strong",{parentName:"li"},"btree "),"\u7d22\u5f15\u6765\u5b9e\u73b0\uff0c\u800c ",(0,l.kt)("strong",{parentName:"li"},"btree "),"\u7d22\u5f15\u4e2d\u4e0d\u5305\u542b ",(0,l.kt)("strong",{parentName:"li"},"null"),"\u3002\u5f53\u7136\uff0c\u8fd9\u4e5f\u9020\u6210\u4e86\u5728 ",(0,l.kt)("strong",{parentName:"li"},"where")," \u8bed\u53e5\u4e2d\u7528 ",(0,l.kt)("strong",{parentName:"li"},"null")," \u503c\u8fdb\u884c\u8fc7\u6ee4\u4f1a\u9020\u6210\u5168\u8868\u626b\u63cf\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"constraint \u7ea6\u675f\u540d unique(\u5217\u540d)\n")),(0,l.kt)("h3",{id:"3-\u975e\u7a7a\u7ea6\u675f-not-null"},"3. \u975e\u7a7a\u7ea6\u675f (not null)\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5f3a\u5236\u952e\u5217\u4e2d\u5fc5\u987b\u6709\u503c\uff0c\u5f53\u7136\u5efa\u8868\u65f6\u5019\u82e5\u4f7f\u7528default\u5173\u952e\u5b57\u6307\u5b9a\u4e86\u9ed8\u8ba4\u503c\uff0c\u5219\u53ef\u4e0d\u8f93\u5165")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"\u5217\u540d \u7c7b\u578b not null\n")),(0,l.kt)("h3",{id:"4-\u5916\u952e\u7ea6\u675f-foreign-key"},"4. \u5916\u952e\u7ea6\u675f (foreign key)\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5916\u952e\u7ea6\u675f\u7684\u5b50\u8868\u4e2d\u7684\u5217\u548c\u5bf9\u5e94\u7236\u8868\u4e2d\u7684\u5217\u6570\u636e\u7c7b\u578b\u5fc5\u987b\u76f8\u540c\uff0c\u5217\u540d\u53ef\u4ee5\u4e0d\u540c"),(0,l.kt)("li",{parentName:"ol"},"\u5bf9\u5e94\u7684\u7236\u8868\u5217\u5fc5\u987b\u5b58\u5728 \u4e3b\u952e\u7ea6\u675f\uff08primary key\uff09\u6216 \u552f\u4e00\u7ea6\u675f\uff08unique\uff09"),(0,l.kt)("li",{parentName:"ol"},"\u5916\u952e\u7ea6\u675f\u5217\u5141\u8bb8 ",(0,l.kt)("strong",{parentName:"li"},"null")," \u503c\uff0c\u5bf9\u5e94\u7684\u884c\u5c31\u6210\u4e86\u5b64\u513f\u884c")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"constraint \u7ea6\u675f\u540d foreign key(\u5217\u540d) references \u8868\u540d(\u5217\u540d) [on update | on delete \u5173\u952e\u8bcd]\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5173\u952e\u8bcd"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"no action"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8868\u793a \u4e0d\u505a\u4efb\u4f55\u64cd\u4f5c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"set null"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u5728\u5916\u952e\u8868\u4e2d\u5c06\u76f8\u5e94\u5b57\u6bb5\u8bbe\u7f6e\u4e3anull")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"set default"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\u503c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cascade"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u7ea7\u8054\u64cd\u4f5c\uff0c\u5c31\u662f\u8bf4\uff0c\u5982\u679c\u4e3b\u952e\u8868\u4e2d\u88ab\u53c2\u8003\u5b57\u6bb5\u66f4\u65b0\uff0c\u5916\u952e\u8868\u4e2d\u4e5f\u66f4\u65b0\uff0c\u4e3b\u952e\u8868\u4e2d\u7684\u8bb0\u5f55\u88ab\u5220\u9664\uff0c\u5916\u952e\u8868\u4e2d\u6539\u884c\u4e5f\u76f8\u5e94\u5220\u9664")))),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5916\u952e\u5220\u9664\u6570\u636e\u64cd\u4f5c\uff1a"),(0,l.kt)("p",{parentName:"li"},"5.1 \u5916\u952e\u7ea6\u675f\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"on delete cascade")," \uff1a\u4e3b\u952e\u8868\u4e2d\u7684\u8bb0\u5f55\u88ab\u5220\u9664\uff0c\u5916\u952e\u8868\u4e2d\u8be5\u884c\u4e5f\u76f8\u5e94\u5220\u9664"),(0,l.kt)("p",{parentName:"li"},"5.2 \u5916\u952e\u7ea6\u675f\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"on delete set null")," \uff1a\u5220\u9664\u592b\u8868\u5bf9\u5e94\u884c\uff0c\u4f1a\u5c06\u5bf9\u5e94\u5b50\u8868\u4e2d\u7684\u6240\u6709\u5339\u914d\u884c\u7684\u5916\u952e\u7ea6\u675f\u5217\u7f6e\u4e3a ",(0,l.kt)("strong",{parentName:"p"},"null")))),(0,l.kt)("h3",{id:"5-\u68c0\u67e5\u7ea6\u675f-check"},"5. \u68c0\u67e5\u7ea6\u675f (check)\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u68c0\u67e5\u7ea6\u675f\u53ef\u7528\u6765\u5b9e\u65bd\u4e00\u4e9b\u7b80\u5355\u7684\u89c4\u5219\uff0c\u68c0\u67e5\u7684\u89c4\u5219\u5fc5\u987b\u662f\u4e00\u4e2a\u7ed3\u679c\u4e3a ",(0,l.kt)("strong",{parentName:"li"},"true")," \u6216 ",(0,l.kt)("strong",{parentName:"li"},"false"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"constraint \u7ea6\u675f\u540d check(\u5224\u65ad\u6761\u4ef6)\n")))}s.isMDXComponent=!0}}]);