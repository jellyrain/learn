"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5861],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=l.createContext({}),c=function(e){var t=l.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return l.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,k=u["".concat(d,".").concat(h)]||u[h]||s[h]||a;return n?l.createElement(k,i(i({ref:t},p),{},{components:n})):l.createElement(k,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<a;c++)i[c]=n[c];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1598:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s}});var l=n(83117),r=n(80102),a=(n(67294),n(3905)),i=["components"],o={sidebar_position:3},d=void 0,c={unversionedId:"web/JavaScript/\u57fa\u672c\u5f15\u7528\u7c7b\u578b/\u539f\u59cb\u503c\u5305\u88c5\u7c7b\u578b/String",id:"web/JavaScript/\u57fa\u672c\u5f15\u7528\u7c7b\u578b/\u539f\u59cb\u503c\u5305\u88c5\u7c7b\u578b/String",title:"String",description:"\u4e00\u4e2a\u7528\u4e8e\u5b57\u7b26\u4e32\u6216\u4e00\u4e2a\u5b57\u7b26\u5e8f\u5217\u7684\u6784\u9020\u51fd\u6570",source:"@site/docs\\web\\3-JavaScript\\9-\u57fa\u672c\u5f15\u7528\u7c7b\u578b\\3-\u539f\u59cb\u503c\u5305\u88c5\u7c7b\u578b\\String.md",sourceDirName:"web/3-JavaScript/9-\u57fa\u672c\u5f15\u7528\u7c7b\u578b/3-\u539f\u59cb\u503c\u5305\u88c5\u7c7b\u578b",slug:"/web/JavaScript/\u57fa\u672c\u5f15\u7528\u7c7b\u578b/\u539f\u59cb\u503c\u5305\u88c5\u7c7b\u578b/String",permalink:"/learn/web/JavaScript/\u57fa\u672c\u5f15\u7528\u7c7b\u578b/\u539f\u59cb\u503c\u5305\u88c5\u7c7b\u578b/String",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Number",permalink:"/learn/web/JavaScript/\u57fa\u672c\u5f15\u7528\u7c7b\u578b/\u539f\u59cb\u503c\u5305\u88c5\u7c7b\u578b/Number"},next:{title:"BigInt",permalink:"/learn/web/JavaScript/\u57fa\u672c\u5f15\u7528\u7c7b\u578b/\u539f\u59cb\u503c\u5305\u88c5\u7c7b\u578b/BigInt"}},p={},s=[{value:"1. \u521b\u5efa String \u5bf9\u8c61\uff1a",id:"1-\u521b\u5efa-string-\u5bf9\u8c61",level:2},{value:"3. \u9759\u6001\u65b9\u6cd5\uff1a",id:"3-\u9759\u6001\u65b9\u6cd5",level:2},{value:"1. <code>fromCharCode()</code>\uff1a",id:"1-fromcharcode",level:3},{value:"2. <code>fromCodePoint()</code>\uff1a",id:"2-fromcodepoint",level:3},{value:"3. <code>raw()</code>\uff1a",id:"3-raw",level:3},{value:"4. \u5b9e\u4f8b\u5c5e\u6027\uff1a",id:"4-\u5b9e\u4f8b\u5c5e\u6027",level:2},{value:"1. <code>length</code>\uff1a",id:"1-length",level:3},{value:"4. \u5b9e\u4f8b\u65b9\u6cd5\uff1a",id:"4-\u5b9e\u4f8b\u65b9\u6cd5",level:2},{value:"1. <code>at(index)</code>\uff1a",id:"1-atindex",level:3},{value:"2. <code>charAt(index)</code>\uff1a",id:"2-charatindex",level:3},{value:"3. <code>charCodeAt(index)</code>\uff1a",id:"3-charcodeatindex",level:3},{value:"4. <code>codePointAt(pos)</code>\uff1a",id:"4-codepointatpos",level:3},{value:"5. <code>concat(str [, ...strN ])</code>\uff1a",id:"5-concatstr--strn-",level:3},{value:"6. <code>includes(searchString [, position])</code>\uff1a",id:"6-includessearchstring--position",level:3},{value:"7. <code>endsWith(searchString [, length])</code>\uff1a",id:"7-endswithsearchstring--length",level:3},{value:"8. <code>indexOf(searchValue [, fromIndex])</code>\uff1a",id:"8-indexofsearchvalue--fromindex",level:3},{value:"9. <code>lastIndexOf(searchValue [, fromIndex])</code>\uff1a",id:"9-lastindexofsearchvalue--fromindex",level:3},{value:"10. <code>localeCompare(compareString [, locales [, options]])</code>\uff1a",id:"10-localecomparecomparestring--locales--options",level:3},{value:"11. <code>match(regexp)</code>\uff1a",id:"11-matchregexp",level:3},{value:"12. <code>matchAll(regexp)</code>\uff1a",id:"12-matchallregexp",level:3},{value:"13. <code>normalize([form])</code>\uff1a",id:"13-normalizeform",level:3},{value:"14. <code>padEnd(targetLength [, padString])</code>\uff1a",id:"14-padendtargetlength--padstring",level:3},{value:"15. <code>padStart(targetLength [, padString])</code>\uff1a",id:"15-padstarttargetlength--padstring",level:3},{value:"16. <code>repeat(count)</code>\uff1a",id:"16-repeatcount",level:3},{value:"17. <code>replace(searchFor, replaceWith)</code>\uff1a",id:"17-replacesearchfor-replacewith",level:3},{value:"18. <code>replaceAll(searchFor, replaceWith)</code>\uff1a",id:"18-replaceallsearchfor-replacewith",level:3},{value:"19. <code>search(regexp)</code>\uff1a",id:"19-searchregexp",level:3},{value:"20. <code>slice(beginIndex[, endIndex])</code>\uff1a",id:"20-slicebeginindex-endindex",level:3},{value:"21. <code>split([sep [, limit] ])</code>\uff1a",id:"21-splitsep--limit-",level:3},{value:"22. <code>startsWith(searchString [, length])</code>\uff1a",id:"22-startswithsearchstring--length",level:3},{value:"23. <code>substring(indexStart [, indexEnd])</code>\uff1a",id:"23-substringindexstart--indexend",level:3},{value:"24. <code>toLocaleLowerCase([locale, ...locales])</code>\uff1a",id:"24-tolocalelowercaselocale-locales",level:3},{value:"25. <code>toLocaleUpperCase([locale, ...locales])</code>\uff1a",id:"25-tolocaleuppercaselocale-locales",level:3},{value:"26. <code>toLowerCase()</code>\uff1a",id:"26-tolowercase",level:3},{value:"27. <code>toString()</code>\uff1a",id:"27-tostring",level:3},{value:"28. <code>toUpperCase()</code>\uff1a",id:"28-touppercase",level:3},{value:"29. <code>trim()</code>\uff1a",id:"29-trim",level:3},{value:"30. <code>trimStart()</code>\uff1a",id:"30-trimstart",level:3},{value:"31. <code>trimEnd()</code>\uff1a",id:"31-trimend",level:3},{value:"32. <code>valueOf()</code>\uff1a",id:"32-valueof",level:3},{value:"5. <code>slice</code> \u548c <code>substring</code> \u548c <code>substr</code> \u7684\u533a\u522b\uff1a",id:"5-slice-\u548c-substring-\u548c-substr-\u7684\u533a\u522b",level:2},{value:"1. \u4e0d\u4f20\u53c2\u6570\uff1a\u5982\u679c\u4e0d\u4f20\u53c2\u6570\uff0c\u9ed8\u8ba4\u7ed3\u679c\u4e3a\u672c\u8eab",id:"1-\u4e0d\u4f20\u53c2\u6570\u5982\u679c\u4e0d\u4f20\u53c2\u6570\u9ed8\u8ba4\u7ed3\u679c\u4e3a\u672c\u8eab",level:3},{value:"2. 1 \u4e2a\u53c2\u6570\uff1a",id:"2-1-\u4e2a\u53c2\u6570",level:3},{value:"3. 2 \u4e2a\u53c2\u6570\uff1a\uff08\u7b2c\u4e00\u4e2a\u4e3a\u6b63\uff09\uff1a",id:"3-2-\u4e2a\u53c2\u6570\u7b2c\u4e00\u4e2a\u4e3a\u6b63",level:3},{value:"4. 2 \u4e2a\u53c2\u6570\uff1a\uff08\u7b2c\u4e00\u4e2a\u4e3a\u8d1f\uff09\uff1a",id:"4-2-\u4e2a\u53c2\u6570\u7b2c\u4e00\u4e2a\u4e3a\u8d1f",level:3},{value:"\u603b\u7ed3\uff1a",id:"\u603b\u7ed3",level:3}],u={toc:s};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4e00\u4e2a\u7528\u4e8e\u5b57\u7b26\u4e32\u6216\u4e00\u4e2a\u5b57\u7b26\u5e8f\u5217\u7684\u6784\u9020\u51fd\u6570"),(0,a.kt)("h2",{id:"1-\u521b\u5efa-string-\u5bf9\u8c61"},"1. \u521b\u5efa String \u5bf9\u8c61\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"String(thing)\nnew String(thing)\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"thing"),"\uff1a\u4efb\u4f55\u53ef\u4ee5\u88ab\u8f6c\u6362\u6210\u5b57\u7b26\u4e32\u7684\u503c"),(0,a.kt)("h2",{id:"3-\u9759\u6001\u65b9\u6cd5"},"3. \u9759\u6001\u65b9\u6cd5\uff1a"),(0,a.kt)("h3",{id:"1-fromcharcode"},"1. ",(0,a.kt)("inlineCode",{parentName:"h3"},"fromCharCode()"),"\uff1a"),(0,a.kt)("p",null,"\u901a\u8fc7\u4e00\u4e32 Unicode \u521b\u5efa\u5b57\u7b26\u4e32\uff08ES5 \u4e0d\u80fd\u8bc6\u522b\u5927\u4e8e 32 \u4f4d\uff09"),(0,a.kt)("h3",{id:"2-fromcodepoint"},"2. ",(0,a.kt)("inlineCode",{parentName:"h3"},"fromCodePoint()"),"\uff1a"),(0,a.kt)("p",null,"\u901a\u8fc7\u4e00\u4e32 \u7801\u70b9 \u521b\u5efa\u5b57\u7b26\u4e32\uff08ES6 \u80fd\u8bc6\u522b\u5927\u4e8e 32 \u4f4d\uff09"),(0,a.kt)("h3",{id:"3-raw"},"3. ",(0,a.kt)("inlineCode",{parentName:"h3"},"raw()"),"\uff1a"),(0,a.kt)("p",null,"\u901a\u8fc7\u6a21\u677f\u5b57\u7b26\u4e32\u521b\u5efa\u5b57\u7b26\u4e32"),(0,a.kt)("h2",{id:"4-\u5b9e\u4f8b\u5c5e\u6027"},"4. \u5b9e\u4f8b\u5c5e\u6027\uff1a"),(0,a.kt)("h3",{id:"1-length"},"1. ",(0,a.kt)("inlineCode",{parentName:"h3"},"length"),"\uff1a"),(0,a.kt)("p",null,"\u5b57\u7b26\u4e32\u4e2d\u7684 \u5b57\u7b26\u5143\u7d20 \u4e2a\u6570"),(0,a.kt)("h2",{id:"4-\u5b9e\u4f8b\u65b9\u6cd5"},"4. \u5b9e\u4f8b\u65b9\u6cd5\uff1a"),(0,a.kt)("h3",{id:"1-atindex"},"1. ",(0,a.kt)("inlineCode",{parentName:"h3"},"at(index)"),"\uff1a"),(0,a.kt)("p",null,"\u63a5\u6536\u4e00\u4e2a\u6574\u6570\u503c\u5e76\u8fd4\u56de\u8be5\u7d22\u5f15\u7684 \u5b57\u7b26\u5143\u7d20\uff0c\u5141\u8bb8\u6b63\u6570\u548c\u8d1f\u6570"),(0,a.kt)("p",null,"\u8d1f\u6574\u6570\u4ece\u5b57\u7b26\u4e32\u4e2d\u7684\u6700\u540e\u4e00\u4e2a \u5b57\u7b26\u5143\u7d20 \u5f00\u59cb\u5012\u6570"),(0,a.kt)("h3",{id:"2-charatindex"},"2. ",(0,a.kt)("inlineCode",{parentName:"h3"},"charAt(index)"),"\uff1a"),(0,a.kt)("p",null,"\u63a5\u6536\u4e00\u4e2a\u6574\u6570\u503c\u5e76\u8fd4\u56de\u8be5\u7d22\u5f15\u7684 \u5b57\u7b26\u5143\u7d20\uff0c\u5141\u8bb8\u6b63\u6570"),(0,a.kt)("h3",{id:"3-charcodeatindex"},"3. ",(0,a.kt)("inlineCode",{parentName:"h3"},"charCodeAt(index)"),"\uff1a"),(0,a.kt)("p",null,"\u63a5\u6536\u4e00\u4e2a\u6574\u6570\u503c\u5e76\u8fd4\u56de\u8be5\u7d22\u5f15\u7684 Unicode \u7801\u503c"),(0,a.kt)("p",null,"\u5982\u679c\u6307\u5b9a\u7684 index \u5c0f\u4e8e 0 \u3001\u7b49\u4e8e \u6216 \u5927\u4e8e \u5b57\u7b26\u4e32\u7684\u957f\u5ea6\uff0c\u5219 charCodeAt \u8fd4\u56de NaN"),(0,a.kt)("p",null,"\u5904\u7406\u4e0d\u4e86 Unicode \u6269\u5c55\u7f16\u7801\u5b57\u7b26\uff0832 \u4f4d 2 \u8fdb\u5236\uff09"),(0,a.kt)("h3",{id:"4-codepointatpos"},"4. ",(0,a.kt)("inlineCode",{parentName:"h3"},"codePointAt(pos)"),"\uff1a"),(0,a.kt)("p",null,"\u63a5\u6536\u4e00\u4e2a\u6574\u6570\u503c\u5e76\u8fd4\u56de\u8be5\u7d22\u5f15\u7684 Unicode \u7801\u503c"),(0,a.kt)("p",null,"\u5982\u679c\u6307\u5b9a\u7684 index \u5c0f\u4e8e 0 \u3001\u7b49\u4e8e \u6216 \u5927\u4e8e \u5b57\u7b26\u4e32\u7684\u957f\u5ea6\uff0c\u5219 charCodeAt \u8fd4\u56de NaN"),(0,a.kt)("p",null,"\u53ef\u4ee5\u5904\u7406 Unicode \u6269\u5c55\u7f16\u7801\u5b57\u7b26\uff0832 \u4f4d 2 \u8fdb\u5236\uff09"),(0,a.kt)("h3",{id:"5-concatstr--strn-"},"5. ",(0,a.kt)("inlineCode",{parentName:"h3"},"concat(str [, ...strN ])"),"\uff1a"),(0,a.kt)("p",null,"\u7528\u4e8e\u5408\u5e76\u4e24\u4e2a\u6216\u591a\u4e2a\u5b57\u7b26\u4e32\u3002\u6b64\u65b9\u6cd5\u4e0d\u4f1a\u66f4\u6539\u73b0\u6709\u5b57\u7b26\u4e32\uff0c\u800c\u662f\u8fd4\u56de\u4e00\u4e2a\u65b0\u5b57\u7b26\u4e32"),(0,a.kt)("h3",{id:"6-includessearchstring--position"},"6. ",(0,a.kt)("inlineCode",{parentName:"h3"},"includes(searchString [, position])"),"\uff1a"),(0,a.kt)("p",null,"\u786e\u5b9a\u8c03\u7528\u5b57\u7b26\u4e32\u662f\u5426\u5305\u542b searchString"),(0,a.kt)("h3",{id:"7-endswithsearchstring--length"},"7. ",(0,a.kt)("inlineCode",{parentName:"h3"},"endsWith(searchString [, length])"),"\uff1a"),(0,a.kt)("p",null,"\u786e\u5b9a\u5b57\u7b26\u4e32\u662f\u5426\u4ee5 searchString \u5b57\u7b26\u4e32\u7684\u5b57\u7b26\u7ed3\u5c3e"),(0,a.kt)("h3",{id:"8-indexofsearchvalue--fromindex"},"8. ",(0,a.kt)("inlineCode",{parentName:"h3"},"indexOf(searchValue [, fromIndex])"),"\uff1a"),(0,a.kt)("p",null,"String \u8fd4\u56de\u8c03\u7528\u5bf9\u8c61\u4e2d\u7b2c\u4e00\u6b21\u51fa\u73b0 \u7684\u7d22\u5f15 searchValue\uff0c\u6216\u8005 ",(0,a.kt)("inlineCode",{parentName:"p"},"-1")," \u5982\u679c\u6ca1\u6709\u627e\u5230"),(0,a.kt)("h3",{id:"9-lastindexofsearchvalue--fromindex"},"9. ",(0,a.kt)("inlineCode",{parentName:"h3"},"lastIndexOf(searchValue [, fromIndex])"),"\uff1a"),(0,a.kt)("p",null,"String \u8fd4\u56de\u6700\u540e\u4e00\u6b21\u51fa\u73b0\u7684\u8c03\u7528\u5bf9\u8c61\u4e2d \u7684\u7d22\u5f15 searchValue\uff0c\u6216\u8005 ",(0,a.kt)("inlineCode",{parentName:"p"},"-1")," \u5982\u679c\u6ca1\u6709\u627e\u5230"),(0,a.kt)("h3",{id:"10-localecomparecomparestring--locales--options"},"10. ",(0,a.kt)("inlineCode",{parentName:"h3"},"localeCompare(compareString [, locales [, options]])"),"\uff1a"),(0,a.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u6570\u5b57\uff0c\u6307\u793a\u5f15\u7528\u5b57\u7b26\u4e32 compareString \u662f\u5728\u7ed9\u5b9a\u5b57\u7b26\u4e32\u4e4b\u524d\u3001\u4e4b\u540e\u8fd8\u662f\u7b49\u4ef7\u4e8e\u6392\u5e8f\u987a\u5e8f"),(0,a.kt)("h3",{id:"11-matchregexp"},"11. ",(0,a.kt)("inlineCode",{parentName:"h3"},"match(regexp)"),"\uff1a"),(0,a.kt)("p",null,"\u7528\u4e8e\u5c06\u6b63\u5219\u8868\u8fbe\u5f0f regexp \u4e0e\u5b57\u7b26\u4e32\u5339\u914d"),(0,a.kt)("h3",{id:"12-matchallregexp"},"12. ",(0,a.kt)("inlineCode",{parentName:"h3"},"matchAll(regexp)"),"\uff1a"),(0,a.kt)("p",null,"regexp \u8fd4\u56de\u6240\u6709\u5339\u914d\u7684\u8fed\u4ee3\u5668"),(0,a.kt)("h3",{id:"13-normalizeform"},"13. ",(0,a.kt)("inlineCode",{parentName:"h3"},"normalize([form])"),"\uff1a"),(0,a.kt)("p",null,"\u8fd4\u56de\u8c03\u7528\u5b57\u7b26\u4e32\u503c\u7684 Unicode \u89c4\u8303\u5316\u5f62\u5f0f"),(0,a.kt)("h3",{id:"14-padendtargetlength--padstring"},"14. ",(0,a.kt)("inlineCode",{parentName:"h3"},"padEnd(targetLength [, padString])"),"\uff1a"),(0,a.kt)("p",null,"\u7528\u4e00\u4e2a\u5b57\u7b26\u4e32\u586b\u5145\u5f53\u524d\u5b57\u7b26\u4e32\uff08\u5982\u679c\u9700\u8981\u7684\u8bdd\u5219\u91cd\u590d\u586b\u5145\uff09\uff0c\u8fd4\u56de\u586b\u5145\u540e\u8fbe\u5230\u6307\u5b9a\u957f\u5ea6\u7684\u5b57\u7b26\u4e32\u3002\u4ece\u5f53\u524d\u5b57\u7b26\u4e32\u7684\u672b\u5c3e\uff08\u53f3\u4fa7\uff09\u5f00\u59cb\u586b\u5145"),(0,a.kt)("p",null,"targetLength\uff1a\u6307\u5b9a\u957f\u5ea6"),(0,a.kt)("p",null,"padString\uff1a\u586b\u5145\u5b57\u7b26\uff08\u9ed8\u8ba4\u503c\u4e3a\u7a7a\u683c\uff09"),(0,a.kt)("h3",{id:"15-padstarttargetlength--padstring"},"15. ",(0,a.kt)("inlineCode",{parentName:"h3"},"padStart(targetLength [, padString])"),"\uff1a"),(0,a.kt)("p",null,"\u65b9\u6cd5\u7528\u53e6\u4e00\u4e2a\u5b57\u7b26\u4e32\u586b\u5145\u5f53\u524d\u5b57\u7b26\u4e32 (\u5982\u679c\u9700\u8981\u7684\u8bdd\uff0c\u4f1a\u91cd\u590d\u591a\u6b21)\uff0c\u4ee5\u4fbf\u4ea7\u751f\u7684\u5b57\u7b26\u4e32\u8fbe\u5230\u7ed9\u5b9a\u7684\u957f\u5ea6\u3002\u4ece\u5f53\u524d\u5b57\u7b26\u4e32\u7684\u5de6\u4fa7\u5f00\u59cb\u586b\u5145"),(0,a.kt)("p",null,"targetLength\uff1a\u6307\u5b9a\u957f\u5ea6"),(0,a.kt)("p",null,"padString\uff1a\u586b\u5145\u5b57\u7b26\uff08\u9ed8\u8ba4\u503c\u4e3a\u7a7a\u683c\uff09"),(0,a.kt)("h3",{id:"16-repeatcount"},"16. ",(0,a.kt)("inlineCode",{parentName:"h3"},"repeat(count)"),"\uff1a"),(0,a.kt)("p",null,"count \u8fd4\u56de\u7531\u5bf9\u8c61\u5143\u7d20\u91cd\u590d\u6b21\u6570 \u7ec4\u6210\u7684\u5b57\u7b26\u4e32"),(0,a.kt)("h3",{id:"17-replacesearchfor-replacewith"},"17. ",(0,a.kt)("inlineCode",{parentName:"h3"},"replace(searchFor, replaceWith)"),"\uff1a"),(0,a.kt)("p",null,"\u7528 replaceWith \u66ff\u6362\u51fa\u73b0\u7684 searchForusing"),(0,a.kt)("p",null,"searchFor\uff1a\u53ef\u4ee5\u662f\u5b57\u7b26\u4e32\u6216\u6b63\u5219\u8868\u8fbe\u5f0f"),(0,a.kt)("p",null,"replaceWith\uff1a\u4e5f\u53ef\u4ee5\u662f\u5b57\u7b26\u4e32\u6216\u51fd\u6570"),(0,a.kt)("h3",{id:"18-replaceallsearchfor-replacewith"},"18. ",(0,a.kt)("inlineCode",{parentName:"h3"},"replaceAll(searchFor, replaceWith)"),"\uff1a"),(0,a.kt)("p",null,"\u7528 replaceWith \u66ff\u6362\u6240\u6709\u51fa\u73b0\u7684 searchForusing"),(0,a.kt)("p",null,"searchFor\uff1a\u53ef\u4ee5\u662f\u5b57\u7b26\u4e32\u6216\u6b63\u5219\u8868\u8fbe\u5f0f"),(0,a.kt)("p",null,"replaceWith\uff1a\u4e5f\u53ef\u4ee5\u662f\u5b57\u7b26\u4e32\u6216\u51fd\u6570"),(0,a.kt)("h3",{id:"19-searchregexp"},"19. ",(0,a.kt)("inlineCode",{parentName:"h3"},"search(regexp)"),"\uff1a"),(0,a.kt)("p",null,"\u641c\u7d22\u6b63\u5219\u8868\u8fbe\u5f0f regexp \u548c \u8c03\u7528\u5b57\u7b26\u4e32\u4e4b\u95f4\u7684\u5339\u914d\u9879"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a"),(0,a.kt)("inlineCode",{parentName:"p"},"/g")," \u4e5f\u53ea\u5339\u914d\u4e00\u4e2a \u9700\u8981\u5339\u914d\u591a\u4e2a \u4f7f\u7528 match"),(0,a.kt)("h3",{id:"20-slicebeginindex-endindex"},"20. ",(0,a.kt)("inlineCode",{parentName:"h3"},"slice(beginIndex[, endIndex])"),"\uff1a"),(0,a.kt)("p",null,"\u63d0\u53d6\u67d0\u4e2a\u5b57\u7b26\u4e32\u7684\u4e00\u90e8\u5206\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u5b57\u7b26\u4e32\uff0c\u4e14\u4e0d\u4f1a\u6539\u52a8\u539f\u5b57\u7b26\u4e32"),(0,a.kt)("h3",{id:"21-splitsep--limit-"},"21. ",(0,a.kt)("inlineCode",{parentName:"h3"},"split([sep [, limit] ])"),"\uff1a"),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"p"},"\u6307\u5b9a\u7684\u5206\u9694\u7b26\u5b57\u7b26\u4e32")," \u5c06\u4e00\u4e2a String \u5bf9\u8c61\u5206\u5272\u6210\u5b50\u5b57\u7b26\u4e32\u6570\u7ec4\uff0c\u4ee5\u4e00\u4e2a\u6307\u5b9a\u7684\u5206\u5272\u5b57\u4e32\u6765\u51b3\u5b9a\u6bcf\u4e2a\u62c6\u5206\u7684\u4f4d\u7f6e"),(0,a.kt)("h3",{id:"22-startswithsearchstring--length"},"22. ",(0,a.kt)("inlineCode",{parentName:"h3"},"startsWith(searchString [, length])"),"\uff1a"),(0,a.kt)("p",null,"\u786e\u5b9a\u8c03\u7528\u5b57\u7b26\u4e32\u662f\u5426\u4ee5 searchString \u5b57\u7b26\u4e32\u7684\u5b57\u7b26\u5f00\u5934"),(0,a.kt)("h3",{id:"23-substringindexstart--indexend"},"23. ",(0,a.kt)("inlineCode",{parentName:"h3"},"substring(indexStart [, indexEnd])"),"\uff1a"),(0,a.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u5b57\u7b26\u4e32\u5728\u5f00\u59cb\u7d22\u5f15\u5230\u7ed3\u675f\u7d22\u5f15\u4e4b\u95f4\u7684\u4e00\u4e2a\u5b50\u96c6, \u6216\u4ece\u5f00\u59cb\u7d22\u5f15\u76f4\u5230\u5b57\u7b26\u4e32\u7684\u672b\u5c3e\u7684\u4e00\u4e2a\u5b50\u96c6"),(0,a.kt)("h3",{id:"24-tolocalelowercaselocale-locales"},"24. ",(0,a.kt)("inlineCode",{parentName:"h3"},"toLocaleLowerCase([locale, ...locales])"),"\uff1a"),(0,a.kt)("p",null,"\u5b57\u7b26\u4e32\u4e2d\u7684\u5b57\u7b26\u5728\u9075\u5b88\u5f53\u524d\u8bed\u8a00\u73af\u5883\u7684\u540c\u65f6\u8f6c\u6362\u4e3a\u5c0f\u5199"),(0,a.kt)("h3",{id:"25-tolocaleuppercaselocale-locales"},"25. ",(0,a.kt)("inlineCode",{parentName:"h3"},"toLocaleUpperCase([locale, ...locales])"),"\uff1a"),(0,a.kt)("p",null,"\u5b57\u7b26\u4e32\u4e2d\u7684\u5b57\u7b26\u5728\u9075\u5b88\u5f53\u524d\u8bed\u8a00\u73af\u5883\u7684\u540c\u65f6\u8f6c\u6362\u4e3a\u5927\u5199"),(0,a.kt)("h3",{id:"26-tolowercase"},"26. ",(0,a.kt)("inlineCode",{parentName:"h3"},"toLowerCase()"),"\uff1a"),(0,a.kt)("p",null,"\u8fd4\u56de\u8f6c\u6362\u4e3a\u5c0f\u5199\u7684\u8c03\u7528\u5b57\u7b26\u4e32\u503c"),(0,a.kt)("h3",{id:"27-tostring"},"27. ",(0,a.kt)("inlineCode",{parentName:"h3"},"toString()"),"\uff1a"),(0,a.kt)("p",null,"\u8fd4\u56de\u8868\u793a\u6307\u5b9a\u5bf9\u8c61\u7684\u5b57\u7b26\u4e32\u3002\u8986\u76d6 ",(0,a.kt)("inlineCode",{parentName:"p"},"Object.prototype.toString()")," \u65b9\u6cd5"),(0,a.kt)("h3",{id:"28-touppercase"},"28. ",(0,a.kt)("inlineCode",{parentName:"h3"},"toUpperCase()"),"\uff1a"),(0,a.kt)("p",null,"\u8fd4\u56de\u8f6c\u6362\u4e3a\u5927\u5199\u7684\u8c03\u7528\u5b57\u7b26\u4e32\u503c"),(0,a.kt)("h3",{id:"29-trim"},"29. ",(0,a.kt)("inlineCode",{parentName:"h3"},"trim()"),"\uff1a"),(0,a.kt)("p",null,"\u4ece\u5b57\u7b26\u4e32\u7684\u5f00\u5934\u548c\u7ed3\u5c3e\u4fee\u526a\u7a7a\u683c\u3002ECMAScript 5 \u6807\u51c6\u7684\u4e00\u90e8\u5206"),(0,a.kt)("h3",{id:"30-trimstart"},"30. ",(0,a.kt)("inlineCode",{parentName:"h3"},"trimStart()"),"\uff1a"),(0,a.kt)("p",null,"\u4ece\u5b57\u7b26\u4e32\u7684\u5f00\u5934\u4fee\u526a\u7a7a\u683c\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"trimLeft()")," \u662f\u8fd9\u4e2a\u65b9\u6cd5\u7684\u522b\u540d"),(0,a.kt)("h3",{id:"31-trimend"},"31. ",(0,a.kt)("inlineCode",{parentName:"h3"},"trimEnd()"),"\uff1a"),(0,a.kt)("p",null,"\u4ece\u5b57\u7b26\u4e32\u672b\u5c3e\u4fee\u526a\u7a7a\u767d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"trimRight()")," \u662f\u8fd9\u4e2a\u65b9\u6cd5\u7684\u522b\u540d"),(0,a.kt)("h3",{id:"32-valueof"},"32. ",(0,a.kt)("inlineCode",{parentName:"h3"},"valueOf()"),"\uff1a"),(0,a.kt)("p",null,"\u8fd4\u56de\u6307\u5b9a\u5bf9\u8c61\u7684\u539f\u59cb\u503c\u3002\u8986\u76d6 ",(0,a.kt)("inlineCode",{parentName:"p"},"Object.prototype.valueOf()")," \u65b9\u6cd5"),(0,a.kt)("h2",{id:"5-slice-\u548c-substring-\u548c-substr-\u7684\u533a\u522b"},"5. ",(0,a.kt)("inlineCode",{parentName:"h2"},"slice")," \u548c ",(0,a.kt)("inlineCode",{parentName:"h2"},"substring")," \u548c ",(0,a.kt)("inlineCode",{parentName:"h2"},"substr")," \u7684\u533a\u522b\uff1a"),(0,a.kt)("h3",{id:"1-\u4e0d\u4f20\u53c2\u6570\u5982\u679c\u4e0d\u4f20\u53c2\u6570\u9ed8\u8ba4\u7ed3\u679c\u4e3a\u672c\u8eab"},"1. \u4e0d\u4f20\u53c2\u6570\uff1a\u5982\u679c\u4e0d\u4f20\u53c2\u6570\uff0c\u9ed8\u8ba4\u7ed3\u679c\u4e3a\u672c\u8eab"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"slice \u53ef\u7528\u4e8e\u6570\u7ec4\u622a\u53d6"),(0,a.kt)("li",{parentName:"ol"},"substring\u3001substr \u53ea\u80fd\u7528\u4e8e\u5b57\u7b26\u4e32\u622a\u53d6")),(0,a.kt)("h3",{id:"2-1-\u4e2a\u53c2\u6570"},"2. 1 \u4e2a\u53c2\u6570\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"substring \u4f20\u4e00\u4e2a\u53c2\u6570\u4e14\u4e3a\u8d1f\u503c\u65f6\u7ed3\u679c\u4e3a str \u672c\u8eab"),(0,a.kt)("li",{parentName:"ol"},"slice\u3001substr \u4f1a\u4e0e\u81ea\u8eab length \u76f8\u52a0\uff0c\u503c\u4e3a\u6b63\uff0c\u5219\u6b63\u5e38\u8fd0\u7b97\uff0c\u503c\u4e3a\u8d1f\uff0c\u5219\u7ed3\u679c\u4e3a str \u672c\u8eab")),(0,a.kt)("h3",{id:"3-2-\u4e2a\u53c2\u6570\u7b2c\u4e00\u4e2a\u4e3a\u6b63"},"3. 2 \u4e2a\u53c2\u6570\uff1a\uff08\u7b2c\u4e00\u4e2a\u4e3a\u6b63\uff09\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"slice \u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a\u8d1f\u503c\u65f6\uff0c\u4f1a\u4e0e length \u76f8\u52a0 \u8fd8\u4e3a\u8d1f\u503c\u7684\u65f6\u5019\uff0c\u4e3a 0 \uff0c\u622a\u53d6\u7684\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"''")),(0,a.kt)("li",{parentName:"ol"},"substring \u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a\u8d1f\u503c\u65f6\u5019\u4f1a\u8bb0\u4e3a 0\uff0c \u5e76\u4e14\u4f1a\u5bf9\u53c2\u6570\u9ed8\u8ba4\u8fdb\u884c\u6392\u5e8f\u3002\uff08\u5c0f\u7684\u5728\u524d\uff09"),(0,a.kt)("li",{parentName:"ol"},"substr \u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u622a\u53d6\u7684\u4f4d\u6570\uff0c\u4e3a\u8d1f\u503c\u7684\u65f6\u5019\uff0c\u622a\u53d6\u7684\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"''"))),(0,a.kt)("h3",{id:"4-2-\u4e2a\u53c2\u6570\u7b2c\u4e00\u4e2a\u4e3a\u8d1f"},"4. 2 \u4e2a\u53c2\u6570\uff1a\uff08\u7b2c\u4e00\u4e2a\u4e3a\u8d1f\uff09\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"slice \u7b2c 1 \u4e2a\u53c2\u6570\u4e3a\u8d1f\u503c\u65f6\uff0c\u4f1a\u4e0e length \u76f8\u52a0 \u8fd8\u4e3a\u8d1f\u503c\u7684\u65f6\u5019\uff0c\u4e3a 0 \uff0c\u7136\u540e\u8fd0\u7b97"),(0,a.kt)("li",{parentName:"ol"},"substring \u7b2c 1 \u4e2a\u53c2\u6570\u4e3a\u8d1f\u503c\u65f6\u5019\u4f1a\u8bb0\u4e3a 0"),(0,a.kt)("li",{parentName:"ol"},"substr \u7b2c 1 \u4e2a\u53c2\u6570\u4e3a\u8d1f\u503c\u65f6\uff0c\u4f1a\u4e0e length \u76f8\u52a0 \u8fd8\u4e3a\u8d1f\u503c\u7684\u65f6\u5019\uff0c\u4e3a 0 \uff0c\u7136\u540e\u8fd0\u7b97")),(0,a.kt)("h3",{id:"\u603b\u7ed3"},"\u603b\u7ed3\uff1a"),(0,a.kt)("p",null,"1.\u622a\u53d6\u6570\u7ec4\u7528 slice\n2.slice \u53c2\u6570\u4e3a\u8d1f\u503c\u65f6\uff0c\u4f1a\u4e0e length \u76f8\u52a0\u8fd8\u4e3a\u8d1f\u503c\u7684\u8bdd\uff0c\u8bb0\u4e3a 0 \uff08\u8f6c\u5316\u540e\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e0d\u5927\u4e8e\u7b2c\u4e00\u4e2a\u53c2\u6570\uff0c\u622a\u53d6\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"''"),"\uff09\n3.substring \u53c2\u6570\u4e3a\u8d1f\u503c\u65f6\u5019\u4f1a\u8bb0\u4e3a 0\uff0c\u5e76\u4e14\u4f1a\u5bf9\u53c2\u6570\u9ed8\u8ba4\u8fdb\u884c\u6392\u5e8f\uff08\u5c0f\u7684\u5728\u524d\uff09\n4.substr \u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a\u8d1f\u503c\u65f6\uff0c\u4f1a\u4e0e length \u76f8\u52a0 \u8fd8\u4e3a\u8d1f\u503c\u7684\u8bdd\uff0c\u8bb0\u4e3a 0 \uff0c\u7136\u540e\u8fd0\u7b97\u3002\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u622a\u53d6\u7684\u4f4d\u6570\uff0c\u4e3a\u8d1f\u503c\u7684\u65f6\u5019\uff0c\u622a\u53d6\u7684\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"''")," \uff08 ECMAscript \u6ca1\u6709\u5bf9\u8be5\u65b9\u6cd5\u8fdb\u884c\u6807\u51c6\u5316\uff0c\u56e0\u6b64\u53cd\u5bf9\u4f7f\u7528\u5b83\uff09"))}h.isMDXComponent=!0}}]);