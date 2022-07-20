"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4087],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return N}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function m(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),o=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):m(m({},e),t)),a},u=function(t){var e=o(t.components);return n.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),k=o(a),N=r,s=k["".concat(i,".").concat(N)]||k[N]||d[N]||l;return a?n.createElement(s,m(m({ref:e},u),{},{components:a})):n.createElement(s,m({ref:e},u))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,m=new Array(l);m[0]=k;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:r,m[1]=p;for(var o=2;o<l;o++)m[o]=a[o];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},7533:function(t,e,a){a.r(e),a.d(e,{assets:function(){return u},contentTitle:function(){return i},default:function(){return N},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return d}});var n=a(83117),r=a(80102),l=(a(67294),a(3905)),m=["components"],p={sidebar_position:2},i=void 0,o={unversionedId:"Java/\u57fa\u7840/Java8\u65b0\u7279\u6027/StreamAPI",id:"Java/\u57fa\u7840/Java8\u65b0\u7279\u6027/StreamAPI",title:"StreamAPI",description:"Stream API ( java.util.stream) \u628a\u771f\u6b63\u7684\u51fd\u6570\u5f0f\u7f16\u7a0b\u98ce\u683c\u5f15\u5165\u5230Java\u4e2d\u3002\u8fd9\u662f\u76ee\u524d\u4e3a\u6b62\u5bf9Java\u7c7b\u5e93\u6700\u597d\u7684\u8865\u5145\uff0c\u56e0\u4e3aStream API\u53ef\u4ee5\u6781\u5927\u63d0\u9ad8Java\u7a0b\u5e8f\u5458\u7684\u751f\u4ea7\u529b\uff0c\u8ba9\u7a0b\u5e8f\u5458\u5199\u51fa\u9ad8\u6548\u7387\u3001\u5e72\u51c0\u3001\u7b80\u6d01\u7684\u4ee3\u7801",source:"@site/docs\\3-Java\\\u57fa\u7840\\Java8\u65b0\u7279\u6027\\StreamAPI.md",sourceDirName:"3-Java/\u57fa\u7840/Java8\u65b0\u7279\u6027",slug:"/Java/\u57fa\u7840/Java8\u65b0\u7279\u6027/StreamAPI",permalink:"/learn/Java/\u57fa\u7840/Java8\u65b0\u7279\u6027/StreamAPI",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Lambda\u8868\u8fbe\u5f0f",permalink:"/learn/Java/\u57fa\u7840/Java8\u65b0\u7279\u6027/Lambda\u8868\u8fbe\u5f0f"},next:{title:"\u5f02\u5e38\u6982\u8ff0",permalink:"/learn/Java/\u57fa\u7840/\u5f02\u5e38/\u5f02\u5e38\u6982\u8ff0"}},u={},d=[{value:"1. \u521b\u5efaStream\uff1a",id:"1-\u521b\u5efastream",level:3},{value:"1. \u521b\u5efa Stream\u65b9\u5f0f\u4e00\uff1a\u901a\u8fc7\u96c6\u5408\uff1a",id:"1-\u521b\u5efa-stream\u65b9\u5f0f\u4e00\u901a\u8fc7\u96c6\u5408",level:4},{value:"2. \u521b\u5efa Stream\u65b9\u5f0f\u4e8c\uff1a\u901a\u8fc7\u6570\u7ec4\uff1a",id:"2-\u521b\u5efa-stream\u65b9\u5f0f\u4e8c\u901a\u8fc7\u6570\u7ec4",level:4},{value:"3. \u521b\u5efa Stream\u65b9\u5f0f\u4e09\uff1a\u901a\u8fc7Stream\u7684of()\uff1a",id:"3-\u521b\u5efa-stream\u65b9\u5f0f\u4e09\u901a\u8fc7stream\u7684of",level:4},{value:"4. \u521b\u5efa Stream\u65b9\u5f0f\u56db\uff1a\u521b\u5efa\u65e0\u9650\u6d41\uff1a",id:"4-\u521b\u5efa-stream\u65b9\u5f0f\u56db\u521b\u5efa\u65e0\u9650\u6d41",level:4},{value:"2. \u4e2d\u95f4\u64cd\u4f5c\uff1a",id:"2-\u4e2d\u95f4\u64cd\u4f5c",level:3},{value:"3. \u7ec8\u7ed3\u64cd\u4f5c\uff1a",id:"3-\u7ec8\u7ed3\u64cd\u4f5c",level:3}],k={toc:d};function N(t){var e=t.components,a=(0,r.Z)(t,m);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Stream API ( java.util.stream) \u628a\u771f\u6b63\u7684\u51fd\u6570\u5f0f\u7f16\u7a0b\u98ce\u683c\u5f15\u5165\u5230Java\u4e2d\u3002\u8fd9\u662f\u76ee\u524d\u4e3a\u6b62\u5bf9Java\u7c7b\u5e93\u6700\u597d\u7684\u8865\u5145\uff0c\u56e0\u4e3aStream API\u53ef\u4ee5\u6781\u5927\u63d0\u9ad8Java\u7a0b\u5e8f\u5458\u7684\u751f\u4ea7\u529b\uff0c\u8ba9\u7a0b\u5e8f\u5458\u5199\u51fa\u9ad8\u6548\u7387\u3001\u5e72\u51c0\u3001\u7b80\u6d01\u7684\u4ee3\u7801"),(0,l.kt)("p",null,"Stream \u662f Java8 \u4e2d\u5904\u7406\u96c6\u5408\u7684\u5173\u952e\u62bd\u8c61\u6982\u5ff5\uff0c\u5b83\u53ef\u4ee5\u6307\u5b9a\u4f60\u5e0c\u671b\u5bf9\u96c6\u5408\u8fdb\u884c\u7684\u64cd\u4f5c\uff0c\u53ef\u4ee5\u6267\u884c\u975e\u5e38\u590d\u6742\u7684\u67e5\u627e\u3001\u8fc7\u6ee4\u548c\u6620\u5c04\u6570\u636e\u7b49\u64cd\u4f5c\u3002 \u4f7f\u7528Stream API \u5bf9\u96c6\u5408\u6570\u636e\u8fdb\u884c\u64cd\u4f5c\uff0c\u5c31\u7c7b\u4f3c\u4e8e\u4f7f\u7528 SQL \u6267\u884c\u7684\u6570\u636e\u5e93\u67e5\u8be2\u3002\u4e5f\u53ef\u4ee5\u4f7f\u7528 Stream API \u6765\u5e76\u884c\u6267\u884c\u64cd\u4f5c\u3002\u7b80\u8a00\u4e4b\uff0cStream API \u63d0\u4f9b\u4e86\u4e00\u79cd\u9ad8\u6548\u4e14\u6613\u4e8e\u4f7f\u7528\u7684\u5904\u7406\u6570\u636e\u7684\u65b9\u5f0f"),(0,l.kt)("p",null,"Stream\u662f\u6570\u636e\u6e20\u9053\uff0c\u7528\u4e8e\u64cd\u4f5c\u6570\u636e\u6e90\uff08\u96c6\u5408\u3001\u6570\u7ec4\u7b49\uff09\u6240\u751f\u6210\u7684\u5143\u7d20\u5e8f\u5217\u3002\u201c\u96c6\u5408\u8bb2\u7684\u662f\u6570\u636e\uff0c\u8d1f\u8d23\u5b58\u50a8\u6570\u636e\uff0cStream\u6d41\u8bb2\u7684\u662f\u8ba1\u7b97\uff0c\u8d1f\u8d23\u5904\u7406\u6570\u636e\uff01\u201d"),(0,l.kt)("p",null,"\u6ce8\u610f\uff1a"),(0,l.kt)("p",null,"\u2460Stream ",(0,l.kt)("strong",{parentName:"p"},"\u81ea\u5df1\u4e0d\u4f1a\u5b58\u50a8\u5143\u7d20")),(0,l.kt)("p",null,"\u2461Stream ",(0,l.kt)("strong",{parentName:"p"},"\u4e0d\u4f1a\u6539\u53d8\u6e90\u5bf9\u8c61\u3002\u6bcf\u6b21\u5904\u7406\u90fd\u4f1a\u8fd4\u56de\u4e00\u4e2a\u6301\u6709\u7ed3\u679c\u7684\u65b0Stream")),(0,l.kt)("p",null,"\u2462Stream ",(0,l.kt)("strong",{parentName:"p"},"\u64cd\u4f5c\u662f\u5ef6\u8fdf\u6267\u884c\u7684\u3002\u8fd9\u610f\u5473\u7740\u4ed6\u4eec\u4f1a\u7b49\u5230\u9700\u8981\u7ed3\u679c\u7684\u65f6\u5019\u624d\u6267\u884c")),(0,l.kt)("p",null,"Stream \u7684\u64cd\u4f5c\u4e09\u4e2a\u6b65\u9aa4\uff1a"),(0,l.kt)("p",null,"1- \u521b\u5efa Stream\uff1a\u901a\u8fc7\u4e00\u4e2a\u6570\u636e\u6e90\uff08\u5982\uff1a\u96c6\u5408\u3001\u6570\u7ec4\uff09\uff0c\u83b7\u53d6\u4e00\u4e2a\u6d41"),(0,l.kt)("p",null,"2- \u4e2d\u95f4\u64cd\u4f5c\uff1a\u4e2d\u95f4\u64cd\u4f5c\u662f\u4e2a\u64cd\u4f5c\u94fe\uff0c\u5bf9\u6570\u636e\u6e90\u7684\u6570\u636e\u8fdb\u884cn\u6b21\u5904\u7406\uff0c\u4f46\u662f\u5728\u7ec8\u7ed3\u64cd\u4f5c\u524d\uff0c\u5e76\u4e0d\u4f1a\u771f\u6b63\u6267\u884c"),(0,l.kt)("p",null,"3- \u7ec8\u6b62\u64cd\u4f5c\uff1a\u4e00\u65e6\u6267\u884c\u7ec8\u6b62\u64cd\u4f5c\uff0c\u5c31\u6267\u884c\u4e2d\u95f4\u64cd\u4f5c\u94fe\uff0c\u6700\u7ec8\u4ea7\u751f\u7ed3\u679c\u5e76\u7ed3\u675fStream "),(0,l.kt)("h3",{id:"1-\u521b\u5efastream"},"1. \u521b\u5efaStream\uff1a"),(0,l.kt)("h4",{id:"1-\u521b\u5efa-stream\u65b9\u5f0f\u4e00\u901a\u8fc7\u96c6\u5408"},"1. \u521b\u5efa Stream\u65b9\u5f0f\u4e00\uff1a\u901a\u8fc7\u96c6\u5408\uff1a"),(0,l.kt)("p",null,"Java8 \u4e2d\u7684 Collection \u63a5\u53e3\u88ab\u6269\u5c55\uff0c\u63d0\u4f9b\u4e86\u4e24\u4e2a\u83b7\u53d6\u6d41\u7684\u65b9\u6cd5\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"public default Stream<E> stream() "),": \u8fd4\u56de\u4e00\u4e2a\u987a\u5e8f\u6d41")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"public default Stream<E> parallelStream() "),": \u8fd4\u56de\u4e00\u4e2a\u5e76\u884c\u6d41"))),(0,l.kt)("h4",{id:"2-\u521b\u5efa-stream\u65b9\u5f0f\u4e8c\u901a\u8fc7\u6570\u7ec4"},"2. \u521b\u5efa Stream\u65b9\u5f0f\u4e8c\uff1a\u901a\u8fc7\u6570\u7ec4\uff1a"),(0,l.kt)("p",null,"Java8 \u4e2d\u7684 Arrays \u7684\u9759\u6001\u65b9\u6cd5 stream() \u53ef\u4ee5\u83b7\u53d6\u6570\u7ec4\u6d41\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"public static <T> Stream<T> stream(T[] array)"),": \u8fd4\u56de\u4e00\u4e2a\u6d41")),(0,l.kt)("p",null,"\u91cd\u8f7d\u5f62\u5f0f\uff0c\u80fd\u591f\u5904\u7406\u5bf9\u5e94\u57fa\u672c\u7c7b\u578b\u7684\u6570\u7ec4\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"public static IntStream stream(int[] array)\uff1a\u8fd4\u56de\u4e00\u4e2a\u6574\u578b\u6570\u636e\u6d41"),(0,l.kt)("li",{parentName:"ul"},"public static LongStream stream(long[] array)\uff1a\u8fd4\u56de\u4e00\u4e2a\u957f\u6574\u578b\u6570\u636e\u6d41"),(0,l.kt)("li",{parentName:"ul"},"public static DoubleStream stream(double[] array)\uff1a\u8fd4\u56de\u4e00\u4e2a\u6d6e\u70b9\u578b\u6570\u636e\u6d41")),(0,l.kt)("h4",{id:"3-\u521b\u5efa-stream\u65b9\u5f0f\u4e09\u901a\u8fc7stream\u7684of"},"3. \u521b\u5efa Stream\u65b9\u5f0f\u4e09\uff1a\u901a\u8fc7Stream\u7684of()\uff1a"),(0,l.kt)("p",null,"\u53ef\u4ee5\u8c03\u7528Stream\u7c7b\u9759\u6001\u65b9\u6cd5 of(), \u901a\u8fc7\u663e\u793a\u503c\u521b\u5efa\u4e00\u4e2a\u6d41\u3002\u5b83\u53ef\u4ee5\u63a5\u6536\u4efb\u610f\u6570\u91cf\u7684\u53c2\u6570\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"public static<T> Stream<T> of(T... values) "),": \u8fd4\u56de\u4e00\u4e2a\u987a\u5e8f\u6d41")),(0,l.kt)("h4",{id:"4-\u521b\u5efa-stream\u65b9\u5f0f\u56db\u521b\u5efa\u65e0\u9650\u6d41"},"4. \u521b\u5efa Stream\u65b9\u5f0f\u56db\uff1a\u521b\u5efa\u65e0\u9650\u6d41\uff1a"),(0,l.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u9759\u6001\u65b9\u6cd5 Stream.iterate() \u548c Stream.generate(), \u521b\u5efa\u65e0\u9650\u6d41\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"public static<T> Stream<T> iterate(final T seed, final UnaryOperator<T> f)"),"\uff1a\u8fd4\u56de\u4e00\u4e2a\u65e0\u9650\u6d41"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"public static<T> Stream<T> generate(Supplier<T> s) "),"\uff1a\u8fd4\u56de\u4e00\u4e2a\u65e0\u9650\u6d41")),(0,l.kt)("h3",{id:"2-\u4e2d\u95f4\u64cd\u4f5c"},"2. \u4e2d\u95f4\u64cd\u4f5c\uff1a"),(0,l.kt)("p",null,"\u591a\u4e2a\u4e2d\u95f4\u64cd\u4f5c\u53ef\u4ee5\u8fde\u63a5\u8d77\u6765\u5f62\u6210\u4e00\u4e2a\u6d41\u6c34\u7ebf\uff0c\u9664\u975e\u6d41\u6c34\u7ebf\u4e0a\u89e6\u53d1\u7ec8\u6b62\u64cd\u4f5c\uff0c\u5426\u5219\u4e2d\u95f4\u64cd\u4f5c\u4e0d\u4f1a\u6267\u884c\u4efb\u4f55\u7684\u5904\u7406\uff01\u800c\u5728\u7ec8\u6b62\u64cd\u4f5c\u65f6\u4e00\u6b21\u6027\u5168\u90e8\u5904\u7406\uff0c\u79f0\u4e3a\u201c\u60f0\u6027\u6c42\u503c\u201d\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u65b9  \u6cd5")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u63cf  \u8ff0")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"filter(Predicate p)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536 Lambda \uff0c \u4ece\u6d41\u4e2d\u6392\u9664\u67d0\u4e9b\u5143\u7d20")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"distinct()")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7b5b\u9009\uff0c\u901a\u8fc7\u6d41\u6240\u751f\u6210\u5143\u7d20\u7684equals() \u53bb\u9664\u91cd\u590d\u5143\u7d20")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"limit(long maxSize)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u622a\u65ad\u6d41\uff0c\u4f7f\u5176\u5143\u7d20\u4e0d\u8d85\u8fc7\u7ed9\u5b9a\u6570\u91cf")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"skip(long n)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8df3\u8fc7\u5143\u7d20\uff0c\u8fd4\u56de\u4e00\u4e2a\u6254\u6389\u4e86\u524d n \u4e2a\u5143\u7d20\u7684\u6d41\u3002\u82e5\u6d41\u4e2d\u5143\u7d20\u4e0d\u8db3 n \u4e2a\uff0c\u5219\u8fd4\u56de\u4e00\u4e2a\u7a7a\u6d41\u3002\u4e0e limit(n) \u4e92\u8865")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"peek(Consumer")," ",(0,l.kt)("strong",{parentName:"td"},"action)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536Lambda\uff0c\u5bf9\u6d41\u4e2d\u7684\u6bcf\u4e2a\u6570\u636e\u6267\u884cLambda\u4f53\u64cd\u4f5c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"sorted()")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ea7\u751f\u4e00\u4e2a\u65b0\u6d41\uff0c\u5176\u4e2d\u6309\u81ea\u7136\u987a\u5e8f\u6392\u5e8f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"sorted(Comparator com)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ea7\u751f\u4e00\u4e2a\u65b0\u6d41\uff0c\u5176\u4e2d\u6309\u6bd4\u8f83\u5668\u987a\u5e8f\u6392\u5e8f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"map(Function f)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u4e00\u4e2a\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570\uff0c\u8be5\u51fd\u6570\u4f1a\u88ab\u5e94\u7528\u5230\u6bcf\u4e2a\u5143\u7d20\u4e0a\uff0c\u5e76\u5c06\u5176\u6620\u5c04\u6210\u4e00\u4e2a\u65b0\u7684\u5143\u7d20\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mapToDouble(ToDoubleFunction f)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u4e00\u4e2a\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570\uff0c\u8be5\u51fd\u6570\u4f1a\u88ab\u5e94\u7528\u5230\u6bcf\u4e2a\u5143\u7d20\u4e0a\uff0c\u4ea7\u751f\u4e00\u4e2a\u65b0\u7684 DoubleStream\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mapToInt(ToIntFunction f)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u4e00\u4e2a\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570\uff0c\u8be5\u51fd\u6570\u4f1a\u88ab\u5e94\u7528\u5230\u6bcf\u4e2a\u5143\u7d20\u4e0a\uff0c\u4ea7\u751f\u4e00\u4e2a\u65b0\u7684 IntStream\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mapToLong(ToLongFunction f)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u4e00\u4e2a\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570\uff0c\u8be5\u51fd\u6570\u4f1a\u88ab\u5e94\u7528\u5230\u6bcf\u4e2a\u5143\u7d20\u4e0a\uff0c\u4ea7\u751f\u4e00\u4e2a\u65b0\u7684 LongStream\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"flatMap(Function f)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u4e00\u4e2a\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570\uff0c\u5c06\u6d41\u4e2d\u7684\u6bcf\u4e2a\u503c\u90fd\u6362\u6210\u53e6\u4e00\u4e2a\u6d41\uff0c\u7136\u540e\u628a\u6240\u6709\u6d41\u8fde\u63a5\u6210\u4e00\u4e2a\u6d41")))),(0,l.kt)("h3",{id:"3-\u7ec8\u7ed3\u64cd\u4f5c"},"3. \u7ec8\u7ed3\u64cd\u4f5c\uff1a"),(0,l.kt)("p",null,"\u7ec8\u7aef\u64cd\u4f5c\u4f1a\u4ece\u6d41\u7684\u6d41\u6c34\u7ebf\u751f\u6210\u7ed3\u679c\u3002\u5176\u7ed3\u679c\u53ef\u4ee5\u662f\u4efb\u4f55\u4e0d\u662f\u6d41\u7684\u503c\uff0c\u4f8b\u5982\uff1aList\u3001Integer\uff0c\u751a\u81f3\u662f void\u3002\u6d41\u8fdb\u884c\u4e86\u7ec8\u6b62\u64cd\u4f5c\u540e\uff0c\u4e0d\u80fd\u518d\u6b21\u4f7f\u7528\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u65b9\u6cd5")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u63cf\u8ff0")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"boolean")," ",(0,l.kt)("strong",{parentName:"td"},"allMatch(Predicate p)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u68c0\u67e5\u662f\u5426\u5339\u914d\u6240\u6709\u5143\u7d20")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"boolean")," ",(0,l.kt)("strong",{parentName:"td"},"anyMatch"),"(",(0,l.kt)("strong",{parentName:"td"},"Predicate p"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"\u68c0\u67e5\u662f\u5426\u81f3\u5c11\u5339\u914d\u4e00\u4e2a\u5143\u7d20")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"boolean")," ",(0,l.kt)("strong",{parentName:"td"},"noneMatch(Predicate  p)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u68c0\u67e5\u662f\u5426\u6ca1\u6709\u5339\u914d\u6240\u6709\u5143\u7d20")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Optional<T> findFirst()")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u7b2c\u4e00\u4e2a\u5143\u7d20")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Optional<T> findAny()")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u5f53\u524d\u6d41\u4e2d\u7684\u4efb\u610f\u5143\u7d20")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"long")," ",(0,l.kt)("strong",{parentName:"td"},"count()")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u6d41\u4e2d\u5143\u7d20\u603b\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Optional<T> max(Comparator c)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u6d41\u4e2d\u6700\u5927\u503c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Optional<T> min(Comparator c)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u6d41\u4e2d\u6700\u5c0f\u503c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"void")," ",(0,l.kt)("strong",{parentName:"td"},"forEach(Consumer c)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fed\u4ee3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"T")," ",(0,l.kt)("strong",{parentName:"td"},"reduce(T iden, BinaryOperator b)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u4ee5\u5c06\u6d41\u4e2d\u5143\u7d20\u53cd\u590d\u7ed3\u5408\u8d77\u6765\uff0c\u5f97\u5230\u4e00\u4e2a\u503c\u3002\u8fd4\u56de T")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"U")," ",(0,l.kt)("strong",{parentName:"td"},"reduce(BinaryOperator b)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u4ee5\u5c06\u6d41\u4e2d\u5143\u7d20\u53cd\u590d\u7ed3\u5408\u8d77\u6765\uff0c\u5f97\u5230\u4e00\u4e2a\u503c\u3002\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"td"},"Optional<T>"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"R")," ",(0,l.kt)("strong",{parentName:"td"},"collect(Collector c)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c06\u6d41\u8f6c\u6362\u4e3a\u5176\u4ed6\u5f62\u5f0f\u3002\u63a5\u6536\u4e00\u4e2a Collector\u63a5\u53e3\u7684\u5b9e\u73b0\uff0c\u7528\u4e8e\u7ed9Stream\u4e2d\u5143\u7d20\u505a\u6c47\u603b\u7684\u65b9\u6cd5")))),(0,l.kt)("p",null,"Collector \u63a5\u53e3\u4e2d\u65b9\u6cd5\u7684\u5b9e\u73b0\u51b3\u5b9a\u4e86\u5982\u4f55\u5bf9\u6d41\u6267\u884c\u6536\u96c6\u7684\u64cd\u4f5c(\u5982\u6536\u96c6\u5230 List\u3001Set\u3001Map)\u3002\u53e6\u5916\uff0c Collectors \u5b9e\u7528\u7c7b\u63d0\u4f9b\u4e86\u5f88\u591a\u9759\u6001\u65b9\u6cd5\uff0c\u53ef\u4ee5\u65b9\u4fbf\u5730\u521b\u5efa\u5e38\u89c1\u6536\u96c6\u5668\u5b9e\u4f8b"))}N.isMDXComponent=!0}}]);