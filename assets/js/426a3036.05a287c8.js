"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8680],{3905:function(t,n,a){a.d(n,{Zo:function(){return d},kt:function(){return g}});var e=a(67294);function l(t,n,a){return n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t}function r(t,n){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),a.push.apply(a,e)}return a}function i(t){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(t,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(a,n))}))}return t}function p(t,n){if(null==t)return{};var a,e,l=function(t,n){if(null==t)return{};var a,e,l={},r=Object.keys(t);for(e=0;e<r.length;e++)a=r[e],n.indexOf(a)>=0||(l[a]=t[a]);return l}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(e=0;e<r.length;e++)a=r[e],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var u=e.createContext({}),o=function(t){var n=e.useContext(u),a=n;return t&&(a="function"==typeof t?t(n):i(i({},n),t)),a},d=function(t){var n=o(t.components);return e.createElement(u.Provider,{value:n},t.children)},m={inlineCode:"code",wrapper:function(t){var n=t.children;return e.createElement(e.Fragment,{},n)}},k=e.forwardRef((function(t,n){var a=t.components,l=t.mdxType,r=t.originalType,u=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),k=o(a),g=l,N=k["".concat(u,".").concat(g)]||k[g]||m[g]||r;return a?e.createElement(N,i(i({ref:n},d),{},{components:a})):e.createElement(N,i({ref:n},d))}));function g(t,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=k;var p={};for(var u in n)hasOwnProperty.call(n,u)&&(p[u]=n[u]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var o=2;o<r;o++)i[o]=a[o];return e.createElement.apply(null,i)}return e.createElement.apply(null,a)}k.displayName="MDXCreateElement"},9151:function(t,n,a){a.r(n),a.d(n,{assets:function(){return d},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return m}});var e=a(83117),l=a(80102),r=(a(67294),a(3905)),i=["components"],p={sidebar_position:1},u=void 0,o={unversionedId:"Java/\u57fa\u7840/Java8\u65b0\u7279\u6027/Lambda\u8868\u8fbe\u5f0f",id:"Java/\u57fa\u7840/Java8\u65b0\u7279\u6027/Lambda\u8868\u8fbe\u5f0f",title:"Lambda\u8868\u8fbe\u5f0f",description:"1. \u51fd\u6570\u5f0f\u7f16\u7a0b\u601d\u60f3\uff1a",source:"@site/docs\\2-Java\\\u57fa\u7840\\Java8\u65b0\u7279\u6027\\Lambda\u8868\u8fbe\u5f0f.md",sourceDirName:"2-Java/\u57fa\u7840/Java8\u65b0\u7279\u6027",slug:"/Java/\u57fa\u7840/Java8\u65b0\u7279\u6027/Lambda\u8868\u8fbe\u5f0f",permalink:"/learn/Java/\u57fa\u7840/Java8\u65b0\u7279\u6027/Lambda\u8868\u8fbe\u5f0f",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u53cd\u5c04",permalink:"/learn/Java/\u57fa\u7840/\u53cd\u5c04"},next:{title:"StreamAPI",permalink:"/learn/Java/\u57fa\u7840/Java8\u65b0\u7279\u6027/StreamAPI"}},d={},m=[{value:"1. \u51fd\u6570\u5f0f\u7f16\u7a0b\u601d\u60f3\uff1a",id:"1-\u51fd\u6570\u5f0f\u7f16\u7a0b\u601d\u60f3",level:3},{value:"2. \u51fd\u6570\u5f0f\u63a5\u53e3\uff1a",id:"2-\u51fd\u6570\u5f0f\u63a5\u53e3",level:3},{value:"1. \u81ea\u5b9a\u4e49\u51fd\u6570\u5f0f\u63a5\u53e3\uff1a",id:"1-\u81ea\u5b9a\u4e49\u51fd\u6570\u5f0f\u63a5\u53e3",level:4},{value:"2. \u6d88\u8d39\u578b\u63a5\u53e3\uff1a",id:"2-\u6d88\u8d39\u578b\u63a5\u53e3",level:4},{value:"3. \u4f9b\u7ed9\u578b\u63a5\u53e3\uff1a",id:"3-\u4f9b\u7ed9\u578b\u63a5\u53e3",level:4},{value:"4. \u5224\u65ad\u578b\u63a5\u53e3\uff1a",id:"4-\u5224\u65ad\u578b\u63a5\u53e3",level:4},{value:"5. \u529f\u80fd\u578b\u63a5\u53e3\uff1a",id:"5-\u529f\u80fd\u578b\u63a5\u53e3",level:4},{value:"3. Lambda\u8868\u8fbe\u5f0f\u8bed\u6cd5\uff1a",id:"3-lambda\u8868\u8fbe\u5f0f\u8bed\u6cd5",level:3},{value:"4. \u65b9\u6cd5\u5f15\u7528\u4e0e\u6784\u9020\u5668\u5f15\u7528\uff1a",id:"4-\u65b9\u6cd5\u5f15\u7528\u4e0e\u6784\u9020\u5668\u5f15\u7528",level:3},{value:"1. \u65b9\u6cd5\u5f15\u7528\uff1a",id:"1-\u65b9\u6cd5\u5f15\u7528",level:4},{value:"2. \u6784\u9020\u5668\u5f15\u7528\uff1a",id:"2-\u6784\u9020\u5668\u5f15\u7528",level:4}],k={toc:m};function g(t){var n=t.components,a=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,e.Z)({},k,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"1-\u51fd\u6570\u5f0f\u7f16\u7a0b\u601d\u60f3"},"1. \u51fd\u6570\u5f0f\u7f16\u7a0b\u601d\u60f3\uff1a"),(0,r.kt)("p",null,"\u5728\u6570\u5b66\u4e2d\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u51fd\u6570"),"\u5c31\u662f\u6709\u8f93\u5165\u91cf\u3001\u8f93\u51fa\u91cf\u7684\u4e00\u5957\u8ba1\u7b97\u65b9\u6848\uff0c\u4e5f\u5c31\u662f\u201c\u62ff\u4ec0\u4e48\u4e1c\u897f\u505a\u4ec0\u4e48\u4e8b\u60c5\u201d\u3002\u7f16\u7a0b\u4e2d\u7684\u51fd\u6570\uff0c\u4e5f\u6709\u7c7b\u4f3c\u7684\u6982\u5ff5\uff0c\u4f60\u8c03\u7528\u6211\u7684\u65f6\u5019\uff0c\u7ed9\u6211\u5b9e\u53c2\u4e3a\u5f62\u53c2\u8d4b\u503c\uff0c\u7136\u540e\u901a\u8fc7\u8fd0\u884c\u65b9\u6cd5\u4f53\uff0c\u7ed9\u4f60\u8fd4\u56de\u4e00\u4e2a\u7ed3\u679c\u3002\u5bf9\u4e8e\u8c03\u7528\u8005\u6765\u505a\uff0c\u5173\u6ce8\u8fd9\u4e2a\u65b9\u6cd5\u5177\u5907\u4ec0\u4e48\u6837\u7684\u529f\u80fd\u3002\u76f8\u5bf9\u800c\u8a00\uff0c\u9762\u5411\u5bf9\u8c61\u8fc7\u5206\u5f3a\u8c03\u201c\u5fc5\u987b\u901a\u8fc7\u5bf9\u8c61\u7684\u5f62\u5f0f\u6765\u505a\u4e8b\u60c5\u201d\uff0c\u800c\u51fd\u6570\u5f0f\u601d\u60f3\u5219\u5c3d\u91cf\u5ffd\u7565\u9762\u5411\u5bf9\u8c61\u7684\u590d\u6742\u8bed\u6cd5\u2014\u2014",(0,r.kt)("strong",{parentName:"p"},"\u5f3a\u8c03\u505a\u4ec0\u4e48\uff0c\u800c\u4e0d\u662f\u4ee5\u4ec0\u4e48\u5f62\u5f0f\u505a")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u9762\u5411\u5bf9\u8c61\u7684\u601d\u60f3:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u505a\u4e00\u4ef6\u4e8b\u60c5,\u627e\u4e00\u4e2a\u80fd\u89e3\u51b3\u8fd9\u4e2a\u4e8b\u60c5\u7684\u5bf9\u8c61,\u8c03\u7528\u5bf9\u8c61\u7684\u65b9\u6cd5,\u5b8c\u6210\u4e8b\u60c5"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u51fd\u6570\u5f0f\u7f16\u7a0b\u601d\u60f3:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u53ea\u8981\u80fd\u83b7\u53d6\u5230\u7ed3\u679c,\u8c01\u53bb\u505a\u7684,\u600e\u4e48\u505a\u7684\u90fd\u4e0d\u91cd\u8981,\u91cd\u89c6\u7684\u662f\u7ed3\u679c,\u4e0d\u91cd\u89c6\u8fc7\u7a0b")))),(0,r.kt)("p",null,"Java8\u5f15\u5165\u4e86Lambda\u8868\u8fbe\u5f0f\u4e4b\u540e\uff0cJava\u4e5f\u5f00\u59cb\u652f\u6301\u51fd\u6570\u5f0f\u7f16\u7a0b"),(0,r.kt)("h3",{id:"2-\u51fd\u6570\u5f0f\u63a5\u53e3"},"2. \u51fd\u6570\u5f0f\u63a5\u53e3\uff1a"),(0,r.kt)("p",null,"lambda\u8868\u8fbe\u5f0f\u5176\u5b9e\u5c31\u662f\u5b9e\u73b0SAM\u63a5\u53e3\u7684\u8bed\u6cd5\u7cd6\uff0c\u6240\u8c13SAM\u63a5\u53e3\u5c31\u662fSingle Abstract Method\uff0c\u5373",(0,r.kt)("strong",{parentName:"p"},"\u8be5\u63a5\u53e3\u4e2d\u53ea\u6709\u4e00\u4e2a\u62bd\u8c61\u65b9\u6cd5\u9700\u8981\u5b9e\u73b0\uff0c\u5f53\u7136\u8be5\u63a5\u53e3\u53ef\u4ee5\u5305\u542b\u5176\u4ed6\u975e\u62bd\u8c61\u65b9\u6cd5")),(0,r.kt)("p",null,"\u5176\u5b9e\u53ea\u8981\u6ee1\u8db3\u201cSAM\u201d\u7279\u5f81\u7684\u63a5\u53e3\u90fd\u53ef\u4ee5\u79f0\u4e3a\u51fd\u6570\u5f0f\u63a5\u53e3\uff0c\u90fd\u53ef\u4ee5\u4f7f\u7528Lambda\u8868\u8fbe\u5f0f\uff0c\u4f46\u662f\u5982\u679c\u8981\u66f4\u660e\u786e\u4e00\u70b9\uff0c\u6700\u597d\u5728\u58f0\u660e\u63a5\u53e3\u65f6\uff0c\u52a0\u4e0a",(0,r.kt)("strong",{parentName:"p"},"@FunctionalInterface\u3002\u4e00\u65e6\u4f7f\u7528\u8be5\u6ce8\u89e3\u6765\u5b9a\u4e49\u63a5\u53e3\uff0c\u7f16\u8bd1\u5668\u5c06\u4f1a\u5f3a\u5236\u68c0\u67e5\u8be5\u63a5\u53e3\u662f\u5426\u786e\u5b9e\u6709\u4e14\u4ec5\u6709\u4e00\u4e2a\u62bd\u8c61\u65b9\u6cd5\uff0c\u5426\u5219\u5c06\u4f1a\u62a5\u9519")),(0,r.kt)("p",null,"\u4e4b\u524d\u5b66\u8fc7\u7684SAM\u63a5\u53e3\u4e2d\uff0c\u6807\u8bb0\u4e86@FunctionalInterface\u7684\u51fd\u6570\u5f0f\u63a5\u53e3\u7684\u6709\uff1aRunnable\uff0cComparator\uff0cFileFilter"),(0,r.kt)("p",null,"Java8\u5728java.util.function\u65b0\u589e\u4e86\u5f88\u591a\u51fd\u6570\u5f0f\u63a5\u53e3\uff1a\u4e3b\u8981\u5206\u4e3a\u56db\u5927\u7c7b\uff0c\u6d88\u8d39\u578b\u3001\u4f9b\u7ed9\u578b\u3001\u5224\u65ad\u578b\u3001\u529f\u80fd\u578b\u3002\u57fa\u672c\u53ef\u4ee5\u6ee1\u8db3\u6211\u4eec\u7684\u5f00\u53d1\u9700\u6c42"),(0,r.kt)("p",null,"\u5f53\u7136\u4f60\u4e5f\u53ef\u4ee5\u5b9a\u4e49\u81ea\u5df1\u7684\u51fd\u6570\u5f0f\u63a5\u53e3"),(0,r.kt)("h4",{id:"1-\u81ea\u5b9a\u4e49\u51fd\u6570\u5f0f\u63a5\u53e3"},"1. \u81ea\u5b9a\u4e49\u51fd\u6570\u5f0f\u63a5\u53e3\uff1a"),(0,r.kt)("p",null,"\u53ea\u8981\u786e\u4fdd\u63a5\u53e3\u4e2d\u6709\u4e14\u4ec5\u6709\u4e00\u4e2a\u62bd\u8c61\u65b9\u6cd5\u5373\u53ef\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\u4fee\u9970\u7b26\xa0interface\xa0\u63a5\u53e3\u540d\u79f0\xa0{\n\xa0\xa0\xa0\xa0public\xa0abstract\xa0\u8fd4\u56de\u503c\u7c7b\u578b\xa0\u65b9\u6cd5\u540d\u79f0(\u53ef\u9009\u53c2\u6570\u4fe1\u606f);\n\xa0\xa0\xa0\xa0//\xa0\u5176\u4ed6\u975e\u62bd\u8c61\u65b9\u6cd5\u5185\u5bb9\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u63a5\u53e3\u5f53\u4e2d\u62bd\u8c61\u65b9\u6cd5\u7684 public abstract \u662f\u53ef\u4ee5\u7701\u7565\u7684")),(0,r.kt)("p",null,"\u4f8b\u5982\uff1a\u58f0\u660e\u4e00\u4e2a\u8ba1\u7b97\u5668",(0,r.kt)("inlineCode",{parentName:"p"},"Calculator"),"\u63a5\u53e3\uff0c\u5185\u542b\u62bd\u8c61\u65b9\u6cd5",(0,r.kt)("inlineCode",{parentName:"p"},"calc"),"\u53ef\u4ee5\u5bf9\u4e24\u4e2aint\u6570\u5b57\u8fdb\u884c\u8ba1\u7b97\uff0c\u5e76\u8fd4\u56de\u7ed3\u679c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public interface Calculator {\n    int calc(int a, int b);\n}\n")),(0,r.kt)("p",null,"\u5728\u6d4b\u8bd5\u7c7b\u4e2d\uff0c\u58f0\u660e\u4e00\u4e2a\u5982\u4e0b\u65b9\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'    public static void invokeCalc(int a, int b, Calculator calculator) {\n        int result = calculator.calc(a, b);\n        System.out.println("\u7ed3\u679c\u662f\uff1a" + result);\n    }\n')),(0,r.kt)("p",null,"\u4e0b\u9762\u8fdb\u884c\u6d4b\u8bd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    public static void main(String[] args) {\n        invokeCalc(1, 2, (int a,int b)-> {return a+b;});\n        invokeCalc(1, 2, (int a,int b)-> {return a-b;});\n        invokeCalc(1, 2, (int a,int b)-> {return a*b;});\n        invokeCalc(1, 2, (int a,int b)-> {return a/b;});\n        invokeCalc(1, 2, (int a,int b)-> {return a%b;});\n        invokeCalc(1, 2, (int a,int b)-> {return a>b?a:b;});\n    }\n")),(0,r.kt)("h4",{id:"2-\u6d88\u8d39\u578b\u63a5\u53e3"},"2. \u6d88\u8d39\u578b\u63a5\u53e3\uff1a"),(0,r.kt)("p",null,"\u6d88\u8d39\u578b\u63a5\u53e3\u7684\u62bd\u8c61\u65b9\u6cd5\u7279\u70b9\uff1a\u6709\u53c2\uff0c\u4f46\u662f\u65e0\u8fd4\u56de\u503c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u63a5\u53e3\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u62bd\u8c61\u65b9\u6cd5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Consumer<T>")),(0,r.kt)("td",{parentName:"tr",align:null},"void accept(T t)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u4e00\u4e2a\u5bf9\u8c61\u7528\u4e8e\u5b8c\u6210\u529f\u80fd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BiConsumer<T,U>"),(0,r.kt)("td",{parentName:"tr",align:null},"void accept(T t, U u)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u4e24\u4e2a\u5bf9\u8c61\u7528\u4e8e\u5b8c\u6210\u529f\u80fd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DoubleConsumer"),(0,r.kt)("td",{parentName:"tr",align:null},"void accept(double value)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u4e00\u4e2adouble\u503c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IntConsumer"),(0,r.kt)("td",{parentName:"tr",align:null},"void accept(int value)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u4e00\u4e2aint\u503c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LongConsumer"),(0,r.kt)("td",{parentName:"tr",align:null},"void accept(long value)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u4e00\u4e2along\u503c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ObjDoubleConsumer<T>")),(0,r.kt)("td",{parentName:"tr",align:null},"void accept(T t, double value)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u4e00\u4e2a\u5bf9\u8c61\u548c\u4e00\u4e2adouble\u503c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ObjIntConsumer<T>")),(0,r.kt)("td",{parentName:"tr",align:null},"void accept(T t, int value)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u4e00\u4e2a\u5bf9\u8c61\u548c\u4e00\u4e2aint\u503c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ObjLongConsumer<T>")),(0,r.kt)("td",{parentName:"tr",align:null},"void accept(T t, long value)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u4e00\u4e2a\u5bf9\u8c61\u548c\u4e00\u4e2along\u503c")))),(0,r.kt)("h4",{id:"3-\u4f9b\u7ed9\u578b\u63a5\u53e3"},"3. \u4f9b\u7ed9\u578b\u63a5\u53e3\uff1a"),(0,r.kt)("p",null,"\u8fd9\u7c7b\u63a5\u53e3\u7684\u62bd\u8c61\u65b9\u6cd5\u7279\u70b9\uff1a\u65e0\u53c2\uff0c\u4f46\u662f\u6709\u8fd4\u56de\u503c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u63a5\u53e3\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u62bd\u8c61\u65b9\u6cd5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Supplier<T>")),(0,r.kt)("td",{parentName:"tr",align:null},"T get()"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BooleanSupplier"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean getAsBoolean()"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u4e00\u4e2aboolean\u503c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DoubleSupplier"),(0,r.kt)("td",{parentName:"tr",align:null},"double getAsDouble()"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u4e00\u4e2adouble\u503c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IntSupplier"),(0,r.kt)("td",{parentName:"tr",align:null},"int getAsInt()"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u4e00\u4e2aint\u503c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LongSupplier"),(0,r.kt)("td",{parentName:"tr",align:null},"long getAsLong()"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u4e00\u4e2along\u503c")))),(0,r.kt)("h4",{id:"4-\u5224\u65ad\u578b\u63a5\u53e3"},"4. \u5224\u65ad\u578b\u63a5\u53e3\uff1a"),(0,r.kt)("p",null,"\u8fd9\u91cc\u63a5\u53e3\u7684\u62bd\u8c61\u65b9\u6cd5\u7279\u70b9\uff1a\u6709\u53c2\uff0c\u4f46\u662f\u8fd4\u56de\u503c\u7c7b\u578b\u662fboolean\u7ed3\u679c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u63a5\u53e3\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u62bd\u8c61\u65b9\u6cd5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Predicate<T>")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean test(T t)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u4e00\u4e2a\u5bf9\u8c61")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BiPredicate<T,U>"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean test(T t, U u)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u4e24\u4e2a\u5bf9\u8c61")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DoublePredicate"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean test(double value)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u4e00\u4e2adouble\u503c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IntPredicate"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean test(int value)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u4e00\u4e2aint\u503c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LongPredicate"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean test(long value)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u4e00\u4e2along\u503c")))),(0,r.kt)("h4",{id:"5-\u529f\u80fd\u578b\u63a5\u53e3"},"5. \u529f\u80fd\u578b\u63a5\u53e3\uff1a"),(0,r.kt)("p",null,"\u8fd9\u7c7b\u63a5\u53e3\u7684\u62bd\u8c61\u65b9\u6cd5\u7279\u70b9\uff1a\u65e2\u6709\u53c2\u6570\u53c8\u6709\u8fd4\u56de\u503c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u63a5\u53e3\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u62bd\u8c61\u65b9\u6cd5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Function<T,R>"),(0,r.kt)("td",{parentName:"tr",align:null},"R apply(T t)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u4e00\u4e2aT\u7c7b\u578b\u5bf9\u8c61\uff0c\u8fd4\u56de\u4e00\u4e2aR\u7c7b\u578b\u5bf9\u8c61\u7ed3\u679c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UnaryOperator<T>")),(0,r.kt)("td",{parentName:"tr",align:null},"T apply(T t)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u4e00\u4e2aT\u7c7b\u578b\u5bf9\u8c61\uff0c\u8fd4\u56de\u4e00\u4e2aT\u7c7b\u578b\u5bf9\u8c61\u7ed3\u679c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DoubleFunction<R>")),(0,r.kt)("td",{parentName:"tr",align:null},"R apply(double value)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u4e00\u4e2adouble\u503c\uff0c\u8fd4\u56de\u4e00\u4e2aR\u7c7b\u578b\u5bf9\u8c61")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"IntFunction<R>")),(0,r.kt)("td",{parentName:"tr",align:null},"R apply(int value)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u4e00\u4e2aint\u503c\uff0c\u8fd4\u56de\u4e00\u4e2aR\u7c7b\u578b\u5bf9\u8c61")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LongFunction<R>")),(0,r.kt)("td",{parentName:"tr",align:null},"R apply(long value)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u4e00\u4e2along\u503c\uff0c\u8fd4\u56de\u4e00\u4e2aR\u7c7b\u578b\u5bf9\u8c61")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ToDoubleFunction<T>")),(0,r.kt)("td",{parentName:"tr",align:null},"double applyAsDouble(T value)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u4e00\u4e2aT\u7c7b\u578b\u5bf9\u8c61\uff0c\u8fd4\u56de\u4e00\u4e2adouble")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ToIntFunction<T>")),(0,r.kt)("td",{parentName:"tr",align:null},"int applyAsInt(T value)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u4e00\u4e2aT\u7c7b\u578b\u5bf9\u8c61\uff0c\u8fd4\u56de\u4e00\u4e2aint")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ToLongFunction<T>")),(0,r.kt)("td",{parentName:"tr",align:null},"long applyAsLong(T value)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u4e00\u4e2aT\u7c7b\u578b\u5bf9\u8c61\uff0c\u8fd4\u56de\u4e00\u4e2along")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DoubleToIntFunction"),(0,r.kt)("td",{parentName:"tr",align:null},"int applyAsInt(double value)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u4e00\u4e2adouble\u503c\uff0c\u8fd4\u56de\u4e00\u4e2aint\u7ed3\u679c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DoubleToLongFunction"),(0,r.kt)("td",{parentName:"tr",align:null},"long applyAsLong(double value)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u4e00\u4e2adouble\u503c\uff0c\u8fd4\u56de\u4e00\u4e2along\u7ed3\u679c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IntToDoubleFunction"),(0,r.kt)("td",{parentName:"tr",align:null},"double applyAsDouble(int value)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u4e00\u4e2aint\u503c\uff0c\u8fd4\u56de\u4e00\u4e2adouble\u7ed3\u679c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IntToLongFunction"),(0,r.kt)("td",{parentName:"tr",align:null},"long applyAsLong(int value)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u4e00\u4e2aint\u503c\uff0c\u8fd4\u56de\u4e00\u4e2along\u7ed3\u679c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LongToDoubleFunction"),(0,r.kt)("td",{parentName:"tr",align:null},"double applyAsDouble(long value)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u4e00\u4e2along\u503c\uff0c\u8fd4\u56de\u4e00\u4e2adouble\u7ed3\u679c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LongToIntFunction"),(0,r.kt)("td",{parentName:"tr",align:null},"int applyAsInt(long value)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u4e00\u4e2along\u503c\uff0c\u8fd4\u56de\u4e00\u4e2aint\u7ed3\u679c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DoubleUnaryOperator"),(0,r.kt)("td",{parentName:"tr",align:null},"double applyAsDouble(double operand)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u4e00\u4e2adouble\u503c\uff0c\u8fd4\u56de\u4e00\u4e2adouble")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IntUnaryOperator"),(0,r.kt)("td",{parentName:"tr",align:null},"int applyAsInt(int operand)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u4e00\u4e2aint\u503c\uff0c\u8fd4\u56de\u4e00\u4e2aint\u7ed3\u679c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LongUnaryOperator"),(0,r.kt)("td",{parentName:"tr",align:null},"long applyAsLong(long operand)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u4e00\u4e2along\u503c\uff0c\u8fd4\u56de\u4e00\u4e2along\u7ed3\u679c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BiFunction<T,U,R>"),(0,r.kt)("td",{parentName:"tr",align:null},"R apply(T t, U u)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u4e00\u4e2aT\u7c7b\u578b\u548c\u4e00\u4e2aU\u7c7b\u578b\u5bf9\u8c61\uff0c\u8fd4\u56de\u4e00\u4e2aR\u7c7b\u578b\u5bf9\u8c61\u7ed3\u679c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"BinaryOperator<T>")),(0,r.kt)("td",{parentName:"tr",align:null},"T apply(T t, T u)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u4e24\u4e2aT\u7c7b\u578b\u5bf9\u8c61\uff0c\u8fd4\u56de\u4e00\u4e2aT\u7c7b\u578b\u5bf9\u8c61\u7ed3\u679c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ToDoubleBiFunction<T,U>"),(0,r.kt)("td",{parentName:"tr",align:null},"double applyAsDouble(T t, U u)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u4e00\u4e2aT\u7c7b\u578b\u548c\u4e00\u4e2aU\u7c7b\u578b\u5bf9\u8c61\uff0c\u8fd4\u56de\u4e00\u4e2adouble")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ToIntBiFunction<T,U>"),(0,r.kt)("td",{parentName:"tr",align:null},"int applyAsInt(T t, U u)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u4e00\u4e2aT\u7c7b\u578b\u548c\u4e00\u4e2aU\u7c7b\u578b\u5bf9\u8c61\uff0c\u8fd4\u56de\u4e00\u4e2aint")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ToLongBiFunction<T,U>"),(0,r.kt)("td",{parentName:"tr",align:null},"long applyAsLong(T t, U u)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u4e00\u4e2aT\u7c7b\u578b\u548c\u4e00\u4e2aU\u7c7b\u578b\u5bf9\u8c61\uff0c\u8fd4\u56de\u4e00\u4e2along")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DoubleBinaryOperator"),(0,r.kt)("td",{parentName:"tr",align:null},"double applyAsDouble(double left, double right)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u4e24\u4e2adouble\u503c\uff0c\u8fd4\u56de\u4e00\u4e2adouble\u7ed3\u679c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IntBinaryOperator"),(0,r.kt)("td",{parentName:"tr",align:null},"int applyAsInt(int left, int right)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u4e24\u4e2aint\u503c\uff0c\u8fd4\u56de\u4e00\u4e2aint\u7ed3\u679c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LongBinaryOperator"),(0,r.kt)("td",{parentName:"tr",align:null},"long applyAsLong(long left, long right)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u4e24\u4e2along\u503c\uff0c\u8fd4\u56de\u4e00\u4e2along\u7ed3\u679c")))),(0,r.kt)("h3",{id:"3-lambda\u8868\u8fbe\u5f0f\u8bed\u6cd5"},"3. Lambda\u8868\u8fbe\u5f0f\u8bed\u6cd5\uff1a"),(0,r.kt)("p",null,"Lambda\u8868\u8fbe\u5f0f\u662f\u7528\u6765\u7ed9\u3010\u51fd\u6570\u5f0f\u63a5\u53e3\u3011\u7684\u53d8\u91cf\u6216\u5f62\u53c2\u8d4b\u503c\u7528\u7684\u3002"),(0,r.kt)("p",null,"\u5176\u5b9e\u672c\u8d28\u4e0a\uff0cLambda\u8868\u8fbe\u5f0f\u662f\u7528\u4e8e\u5b9e\u73b0\u3010\u51fd\u6570\u5f0f\u63a5\u53e3\u3011\u7684\u201c\u62bd\u8c61\u65b9\u6cd5\u201d"),(0,r.kt)("p",null,"Lambda\u8868\u8fbe\u5f0f\u8bed\u6cd5\u683c\u5f0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"(\u5f62\u53c2\u5217\u8868) -> {Lambda\u4f53}\n")),(0,r.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"(\u5f62\u53c2\u5217\u8868)\u5b83\u5c31\u662f\u4f60\u8981\u8d4b\u503c\u7684\u51fd\u6570\u5f0f\u63a5\u53e3\u7684\u62bd\u8c61\u65b9\u6cd5\u7684(\u5f62\u53c2\u5217\u8868)\uff0c\u7167\u6284"),(0,r.kt)("li",{parentName:"ul"},"{Lambda\u4f53}\u5c31\u662f\u5b9e\u73b0\u8fd9\u4e2a\u62bd\u8c61\u65b9\u6cd5\u7684\u65b9\u6cd5\u4f53"),(0,r.kt)("li",{parentName:"ul"},"-> \u79f0\u4e3aLambda\u64cd\u4f5c\u7b26\uff08\u51cf\u53f7\u548c\u5927\u4e8e\u53f7\u4e2d\u95f4\u4e0d\u80fd\u6709\u7a7a\u683c\uff0c\u800c\u4e14\u5fc5\u987b\u662f\u82f1\u6587\u72b6\u6001\u4e0b\u534a\u89d2\u8f93\u5165\u65b9\u5f0f\uff09")),(0,r.kt)("p",null,"\u4f18\u5316\uff1aLambda\u8868\u8fbe\u5f0f\u53ef\u4ee5\u7cbe\u7b80"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5f53{Lambda\u4f53}\u4e2d\u53ea\u6709\u4e00\u53e5\u8bed\u53e5\u65f6\uff0c\u53ef\u4ee5\u7701\u7565{}\u548c{;}"),(0,r.kt)("li",{parentName:"ul"},"\u5f53{Lambda\u4f53}\u4e2d\u53ea\u6709\u4e00\u53e5\u8bed\u53e5\u65f6\uff0c\u5e76\u4e14\u8fd9\u4e2a\u8bed\u53e5\u8fd8\u662f\u4e00\u4e2areturn\u8bed\u53e5\uff0c\u90a3\u4e48return\u4e5f\u53ef\u4ee5\u7701\u7565\uff0c\u4f46\u662f\u5982\u679c{;}\u6ca1\u6709\u7701\u7565\u7684\u8bdd\uff0creturn\u662f\u4e0d\u80fd\u7701\u7565\u7684"),(0,r.kt)("li",{parentName:"ul"},"(\u5f62\u53c2\u5217\u8868)\u7684\u7c7b\u578b\u53ef\u4ee5\u7701\u7565"),(0,r.kt)("li",{parentName:"ul"},"\u5f53(\u5f62\u53c2\u5217\u8868)\u7684\u5f62\u53c2\u4e2a\u6570\u53ea\u6709\u4e00\u4e2a\uff0c\u90a3\u4e48\u53ef\u4ee5\u628a\u6570\u636e\u7c7b\u578b\u548c()\u4e00\u8d77\u7701\u7565\uff0c\u4f46\u662f\u5f62\u53c2\u540d\u4e0d\u80fd\u7701\u7565"),(0,r.kt)("li",{parentName:"ul"},"\u5f53(\u5f62\u53c2\u5217\u8868)\u662f\u7a7a\u53c2\u65f6\uff0c()\u4e0d\u80fd\u7701\u7565")),(0,r.kt)("h3",{id:"4-\u65b9\u6cd5\u5f15\u7528\u4e0e\u6784\u9020\u5668\u5f15\u7528"},"4. \u65b9\u6cd5\u5f15\u7528\u4e0e\u6784\u9020\u5668\u5f15\u7528\uff1a"),(0,r.kt)("p",null,"Lambda\u8868\u8fbe\u5f0f\u662f\u53ef\u4ee5\u7b80\u5316\u51fd\u6570\u5f0f\u63a5\u53e3\u7684\u53d8\u91cf\u4e0e\u5f62\u53c2\u8d4b\u503c\u7684\u8bed\u6cd5\u3002\u800c\u65b9\u6cd5\u5f15\u7528\u548c\u6784\u9020\u5668\u5f15\u7528\u662f\u4e3a\u4e86\u7b80\u5316Lambda\u8868\u8fbe\u5f0f\u7684\u3002\u5f53Lambda\u8868\u8fbe\u5f0f\u6ee1\u8db3\u4e00\u4e9b\u7279\u6b8a\u7684\u60c5\u51b5\u65f6\uff0c\u8fd8\u53ef\u4ee5\u518d\u7b80\u5316\uff1a"),(0,r.kt)("p",null,"\uff081\uff09Lambda\u4f53\u53ea\u6709\u4e00\u53e5\u8bed\u53e5\uff0c\u5e76\u4e14\u662f\u901a\u8fc7\u8c03\u7528\u4e00\u4e2a\u5bf9\u8c61\u7684/\u7c7b\u73b0\u6709\u7684\u65b9\u6cd5\u6765\u5b8c\u6210\u7684"),(0,r.kt)("p",null,"\u4f8b\u5982\uff1aSystem.out\u5bf9\u8c61\uff0c\u8c03\u7528println()\u65b9\u6cd5\u6765\u5b8c\u6210Lambda\u4f53"),(0,r.kt)("p",null,"\u200b          Math\u7c7b\uff0c\u8c03\u7528random()\u9759\u6001\u65b9\u6cd5\u6765\u5b8c\u6210Lambda\u4f53"),(0,r.kt)("p",null,"\uff082\uff09\u5e76\u4e14Lambda\u8868\u8fbe\u5f0f\u7684\u5f62\u53c2\u6b63\u597d\u662f\u7ed9\u8be5\u65b9\u6cd5\u7684\u5b9e\u53c2"),(0,r.kt)("p",null,"\u4f8b\u5982\uff1at -> System.out.println(t)"),(0,r.kt)("p",null,"\u200b        ( ) -> Math.random() \u90fd\u662f\u65e0\u53c2"),(0,r.kt)("h4",{id:"1-\u65b9\u6cd5\u5f15\u7528"},"1. \u65b9\u6cd5\u5f15\u7528\uff1a"),(0,r.kt)("p",null,"\u65b9\u6cd5\u5f15\u7528\u7684\u8bed\u6cd5\u683c\u5f0f\uff1a"),(0,r.kt)("p",null,"\uff081\uff09\u5b9e\u4f8b\u5bf9\u8c61\u540d::\u5b9e\u4f8b\u65b9\u6cd5\t\t"),(0,r.kt)("p",null,"\uff082\uff09\u7c7b\u540d :: \u9759\u6001\u65b9\u6cd5"),(0,r.kt)("p",null,"\uff083\uff09\u7c7b\u540d :: \u5b9e\u4f8b\u65b9\u6cd5"),(0,r.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},":: \u79f0\u4e3a\u65b9\u6cd5\u5f15\u7528\u64cd\u4f5c\u7b26\uff08\u4e24\u4e2a:\u4e2d\u95f4\u4e0d\u80fd\u6709\u7a7a\u683c\uff0c\u800c\u4e14\u5fc5\u987b\u82f1\u6587\u72b6\u6001\u4e0b\u534a\u89d2\u8f93\u5165\uff09"),(0,r.kt)("li",{parentName:"ul"},"Lambda\u8868\u8fbe\u5f0f\u7684\u5f62\u53c2\u5217\u8868\uff0c\u5168\u90e8\u5728Lambda\u4f53\u4e2d\u4f7f\u7528\u4e0a\u4e86\uff0c\u8981\u4e48\u662f\u4f5c\u4e3a\u8c03\u7528\u65b9\u6cd5\u7684\u5bf9\u8c61\uff0c\u8981\u4e48\u662f\u4f5c\u4e3a\u65b9\u6cd5\u7684\u5b9e\u53c2\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u6574\u4e2aLambda\u4f53\u4e2d\u6ca1\u6709\u989d\u5916\u7684\u6570\u636e\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'    \n    @Test\n    public void test4(){\n//      Runnable r = () -> System.out.println("hello lambda");\n        Runnable r = System.out::println;//\u6253\u5370\u7a7a\u884c\n        \n        //\u4e0d\u80fd\u7b80\u5316\u65b9\u6cd5\u5f15\u7528\uff0c\u56e0\u4e3a"hello lambda"\u8fd9\u4e2a\u65e0\u6cd5\u7701\u7565\n    }\n    \n    @Test\n    public void test3(){\n        String[] arr = {"Hello","java","chai"};\n//      Arrays.sort(arr, (s1,s2) -> s1.compareToIgnoreCase(s2));\n        \n        //\u7528\u65b9\u6cd5\u5f15\u7528\u7b80\u5316\n        /*\n         * Lambda\u8868\u8fbe\u5f0f\u7684\u5f62\u53c2\uff0c\u7b2c\u4e00\u4e2a\uff08\u4f8b\u5982\uff1as1\uff09\uff0c\u6b63\u597d\u662f\u8c03\u7528\u65b9\u6cd5\u7684\u5bf9\u8c61\uff0c\u5269\u4e0b\u7684\u5f62\u53c2(\u4f8b\u5982:s2)\u6b63\u597d\u662f\u7ed9\u8fd9\u4e2a\u65b9\u6cd5\u7684\u5b9e\u53c2\n         */\n        Arrays.sort(arr, String::compareToIgnoreCase);\n    }\n    \n    @Test\n    public void test2(){\n//      Stream<Double> stream = Stream.generate(() -> Math.random());\n        \n        //\u7528\u65b9\u6cd5\u5f15\u7528\u7b80\u5316\n        Stream<Double> stream = Stream.generate(Math::random);\n    }\n    \n    @Test\n    public void test1(){\n        List<Integer> list = Arrays.asList(1,3,4,8,9);\n        \n        //list.forEach(t -> System.out.println(t));\n        \n        //\u7528\u65b9\u6cd5\u518d\u7b80\u5316\n        list.forEach(System.out::println);\n    }\n')),(0,r.kt)("h4",{id:"2-\u6784\u9020\u5668\u5f15\u7528"},"2. \u6784\u9020\u5668\u5f15\u7528\uff1a"),(0,r.kt)("p",null,"\uff081\uff09\u5f53Lambda\u8868\u8fbe\u5f0f\u662f\u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5e76\u4e14\u6ee1\u8db3Lambda\u8868\u8fbe\u5f0f\u5f62\u53c2\uff0c\u6b63\u597d\u662f\u7ed9\u521b\u5efa\u8fd9\u4e2a\u5bf9\u8c61\u7684\u6784\u9020\u5668\u7684\u5b9e\u53c2\u5217\u8868\u3002"),(0,r.kt)("p",null,"\uff082\uff09  \u5f53Lambda\u8868\u8fbe\u5f0f\u662f\u521b\u5efa\u4e00\u4e2a\u6570\u7ec4\u5bf9\u8c61\uff0c\u5e76\u4e14\u6ee1\u8db3Lambda\u8868\u8fbe\u5f0f\u5f62\u53c2\uff0c\u6b63\u597d\u662f\u7ed9\u521b\u5efa\u8fd9\u4e2a\u6570\u7ec4\u5bf9\u8c61\u7684\u957f\u5ea6"),(0,r.kt)("p",null,"\u6784\u9020\u5668\u5f15\u7528\u7684\u8bed\u6cd5\u683c\u5f0f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u540d :: new"),(0,r.kt)("li",{parentName:"ul"},"\u6570\u7ec4\u7c7b\u578b\u540d :: new")),(0,r.kt)("p",null,"\u793a\u4f8b\u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class TestMethodReference {\n    \n    //\u8fd9\u4e2a\u65b9\u6cd5\u662f\u6a21\u4effHashMap\u4e2d\uff0c\u628a\u4f60\u6307\u5b9a\u7684\u6570\u7ec4\u7684\u957f\u5ea6\u7ea0\u6b63\u4e3a2\u7684n\u6b21\u65b9\u7684\u4ee3\u7801\n    //createArray()\u7684\u4f5c\u7528\u662f\uff0c\u521b\u5efa\u4e00\u4e2a\u957f\u5ea6\u4e3a2\u7684n\u6b21\u65b9\u7684\u6570\u7ec4\n    public <R> R[] createArray(Function<Integer,R[]> fun,int length){\n        int n = length - 1;\n        n |= n >>> 1;\n        n |= n >>> 2;\n        n |= n >>> 4;\n        n |= n >>> 8;\n        n |= n >>> 16;\n        length = n < 0 ? 1 : n + 1;\n        return fun.apply(length);\n    }\n    \n    @Test\n    public void test6(){\n        /*\n         * Function\u662f\u4e00\u4e2a\u51fd\u6570\u5f0f\u63a5\u53e3\uff0c\u53ef\u4ee5\u7528Lambda\u8868\u8fbe\u5f0f\u8d4b\u503c\n         * Function<T,R>\u7684\u62bd\u8c61\u65b9\u6cd5   R apply(T t)\n         * \n         * createArray\u8fd9\u4e2a\u65b9\u6cd5\u4e2d\u7528\u7684\u662fFunction<Integer,R[]> fun\u3002\u8bf4\u660eT\u7c7b\u578b\u5df2\u7ecf\u6307\u5b9a\u4e3aInteger\n         * \u8bf4\u660e\n         */\n//      Function<Integer,String[]> f = (Integer len) -> new String[len];\n        \n        //\u56e0\u4e3aLambda\u4f53\u662f\u5728\u521b\u5efa\u4e00\u4e2a\u6570\u7ec4\u5bf9\u8c61\u5b8c\u6210\u7684\uff0c\u800c\u4e14Lambda\u8868\u8fbe\u5f0f\u7684\u5f62\u53c2\u6b63\u597d\u662f\u521b\u5efa\u6570\u7ec4\u7528\u7684\u957f\u5ea6\n        //\u901a\u8fc7\u6784\u9020\u5668\u5f15\u7528\u7701\u7565\n        Function<Integer,String[]> f = String[]::new;\n        String[] array = createArray(f, 10);\n        \n        System.out.println(array.length);//16\n    }\n    \n    @Test\n    public void test5(){\n//      Supplier<String> s = () -> new String();//\u901a\u8fc7\u4f9b\u7ed9\u578b\u63a5\u53e3\uff0c\u63d0\u4f9b\u4e00\u4e2a\u7a7a\u5b57\u7b26\u4e32\u5bf9\u8c61\n        \n        //\u6784\u9020\u5668\u5f15\u7528\n        Supplier<String> s = String::new;//\u901a\u8fc7\u4f9b\u7ed9\u578b\u63a5\u53e3\uff0c\u63d0\u4f9b\u4e00\u4e2a\u7a7a\u5b57\u7b26\u4e32\u5bf9\u8c61\n    }\n\n}\n")))}g.isMDXComponent=!0}}]);