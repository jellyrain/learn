"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2118],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),k=s(n),m=a,d=k["".concat(i,".").concat(m)]||k[m]||u[m]||o;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=k;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},22400:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),l=["components"],p={sidebar_position:5},i=void 0,s={unversionedId:"web/JavaScript/\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b/\u7c7b",id:"web/JavaScript/\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b/\u7c7b",title:"\u7c7b",description:"ES6 \u5f15\u5165\u7684 class \u8ba9 JavaScript \u5177\u6709\u4e86\u5b9a\u4e49\u7c7b\u7684\u80fd\u529b \u4f46\u662f\u5176\u5b9e\u80cc\u540e\u8fd8\u662f ES5 \u539f\u578b \u548c \u6784\u9020\u51fd\u6570",source:"@site/docs\\1-web\\3-JavaScript\\12-\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\\\u7c7b.md",sourceDirName:"1-web/3-JavaScript/12-\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b",slug:"/web/JavaScript/\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b/\u7c7b",permalink:"/learn/web/JavaScript/\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b/\u7c7b",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u7ee7\u627f",permalink:"/learn/web/JavaScript/\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b/\u7ee7\u627f"},next:{title:"Proxy",permalink:"/learn/web/JavaScript/\u4ee3\u7406\u548c\u53cd\u5c04/Proxy"}},c={},u=[{value:"1. \u5b9a\u4e49\u7c7b\uff1a",id:"1-\u5b9a\u4e49\u7c7b",level:2},{value:"2. \u6784\u9020\u51fd\u6570\uff1a",id:"2-\u6784\u9020\u51fd\u6570",level:2},{value:"3. \u7c7b\u7684\u5b9e\u4f8b\uff1a",id:"3-\u7c7b\u7684\u5b9e\u4f8b",level:2},{value:"4. \u53d6\u503c\u51fd\u6570\uff08getter\uff09\u548c\u5b58\u503c\u51fd\u6570\uff08setter\uff09\uff1a",id:"4-\u53d6\u503c\u51fd\u6570getter\u548c\u5b58\u503c\u51fd\u6570setter",level:2},{value:"5. \u5c5e\u6027\u8868\u8fbe\u5f0f\uff1a",id:"5-\u5c5e\u6027\u8868\u8fbe\u5f0f",level:2},{value:"6. \u9759\u6001\u5c5e\u6027\uff1a",id:"6-\u9759\u6001\u5c5e\u6027",level:2},{value:"7. \u9759\u6001\u65b9\u6cd5\uff1a",id:"7-\u9759\u6001\u65b9\u6cd5",level:2},{value:"7. \u79c1\u6709\u5c5e\u6027\uff1a",id:"7-\u79c1\u6709\u5c5e\u6027",level:2},{value:"8. \u79c1\u6709\u65b9\u6cd5\uff1a",id:"8-\u79c1\u6709\u65b9\u6cd5",level:2},{value:"9. <code>in</code> \u8fd0\u7b97\u7b26\uff1a",id:"9-in-\u8fd0\u7b97\u7b26",level:2},{value:"10. \u9759\u6001\u5757\uff1a",id:"10-\u9759\u6001\u5757",level:2},{value:"11. \u8fed\u4ee3\u5668 \u548c \u751f\u6210\u5668\uff1a",id:"11-\u8fed\u4ee3\u5668-\u548c-\u751f\u6210\u5668",level:2},{value:"12. <code>new.target</code> \u5c5e\u6027\uff1a",id:"12-newtarget-\u5c5e\u6027",level:2},{value:"13. \u7c7b\u7684\u7ee7\u627f\uff1a",id:"13-\u7c7b\u7684\u7ee7\u627f",level:2},{value:"1. super \u5173\u952e\u5b57\uff1a",id:"1-super-\u5173\u952e\u5b57",level:3},{value:"2. \u7c7b\u7684 prototype \u5c5e\u6027\u548c <code>__proto__</code> \u5c5e\u6027\uff1a",id:"2-\u7c7b\u7684-prototype-\u5c5e\u6027\u548c-__proto__-\u5c5e\u6027",level:3},{value:"3. \u5b9e\u4f8b\u7684 <code>__proto__</code> \u5c5e\u6027\uff1a",id:"3-\u5b9e\u4f8b\u7684-__proto__-\u5c5e\u6027",level:3}],k={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"ES6 \u5f15\u5165\u7684 class \u8ba9 JavaScript \u5177\u6709\u4e86\u5b9a\u4e49\u7c7b\u7684\u80fd\u529b \u4f46\u662f\u5176\u5b9e\u80cc\u540e\u8fd8\u662f ES5 \u539f\u578b \u548c \u6784\u9020\u51fd\u6570"),(0,o.kt)("h2",{id:"1-\u5b9a\u4e49\u7c7b"},"1. \u5b9a\u4e49\u7c7b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u7c7b\u5b9a\u4e49\nclass Person {}\n\n// \u7c7b\u8868\u8fbe\u5f0f\nconst Person = class {}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u4e0e \u51fd\u6570\u5b9a\u4e49 \u4e0d\u540c \u7c7b\u5b9a\u4e49 ",(0,o.kt)("strong",{parentName:"li"},"\u4e0d\u80fd\u58f0\u660e\u63d0\u5347")),(0,o.kt)("li",{parentName:"ol"},"\u4e0d\u5141\u8bb8\u91cd\u590d\u5b9a\u4e49\u4e00\u4e2a\u7c7b"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"typeof")," \u4e00\u4e2a\u7c7b \u7ed3\u679c\u662f ",(0,o.kt)("inlineCode",{parentName:"li"},"function")),(0,o.kt)("li",{parentName:"ol"},"\u8c03\u7528\u5fc5\u987b\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"new")," \u5173\u952e\u5b57")),(0,o.kt)("h2",{id:"2-\u6784\u9020\u51fd\u6570"},"2. \u6784\u9020\u51fd\u6570\uff1a"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"constructor()")," \u65b9\u6cd5\u662f\u7c7b\u7684\u9ed8\u8ba4\u65b9\u6cd5\uff0c\u901a\u8fc7 new \u547d\u4ee4\u751f\u6210\u5bf9\u8c61\u5b9e\u4f8b\u65f6\uff0c\u81ea\u52a8\u8c03\u7528\u8be5\u65b9\u6cd5"),(0,o.kt)("p",null,"\u4e00\u4e2a\u7c7b\u5fc5\u987b\u6709 ",(0,o.kt)("inlineCode",{parentName:"p"},"constructor()")," \u65b9\u6cd5\uff0c\u5982\u679c\u6ca1\u6709\u663e\u5f0f\u5b9a\u4e49\uff0c\u4e00\u4e2a\u7a7a\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"constructor()")," \u65b9\u6cd5\u4f1a\u88ab\u9ed8\u8ba4\u6dfb\u52a0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"class Point {}\n\n// \u7b49\u540c\u4e8e\nclass Point {\n  constructor() {}\n}\n")),(0,o.kt)("h2",{id:"3-\u7c7b\u7684\u5b9e\u4f8b"},"3. \u7c7b\u7684\u5b9e\u4f8b\uff1a"),(0,o.kt)("p",null,"\u4e0e ES5 \u5b8c\u5168\u4e00\u6837\uff0c\u4e5f\u662f\u4f7f\u7528 new \u547d\u4ee4\u3002\u524d\u9762\u8bf4\u8fc7\uff0c\u5982\u679c\u5fd8\u8bb0\u52a0\u4e0a new\uff0c\u50cf\u51fd\u6570\u90a3\u6837\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"Class()"),"\uff0c\u5c06\u4f1a\u62a5\u9519"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u7c7b\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\uff0c\u9664\u975e\u663e\u5f0f\u5b9a\u4e49\u5728\u5176\u672c\u8eab\uff08\u5373\u5b9a\u4e49\u5728 this \u5bf9\u8c61\u4e0a\uff09\uff0c\u5426\u5219\u90fd\u662f\u5b9a\u4e49\u5728\u539f\u578b\u4e0a\uff08\u5373\u5b9a\u4e49\u5728 class \u4e0a\uff09")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"class Point {\n  constructor(x, y) {\n    this.x = x\n    this.y = y\n  }\n\n  toString() {\n    return '(' + this.x + ', ' + this.y + ')'\n  }\n}\n\nvar point = new Point(2, 3)\n\npoint.toString() // (2, 3)\n\npoint.hasOwnProperty('x') // true\npoint.hasOwnProperty('y') // true\npoint.hasOwnProperty('toString') // false\npoint.__proto__.hasOwnProperty('toString') // true\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u4e0e ES5 \u4e00\u6837\uff0c\u7c7b\u7684\u6240\u6709\u5b9e\u4f8b\u5171\u4eab\u4e00\u4e2a\u539f\u578b\u5bf9\u8c61")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"var p1 = new Point(2, 3)\nvar p2 = new Point(3, 2)\n\np1.__proto__ === p2.__proto__ //true\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"ES2022 \u4e3a\u7c7b\u7684\u5b9e\u4f8b\u5c5e\u6027\uff0c\u53c8\u89c4\u5b9a\u4e86\u4e00\u79cd\u65b0\u5199\u6cd5\u3002\u5b9e\u4f8b\u5c5e\u6027\u73b0\u5728\u9664\u4e86\u53ef\u4ee5\u5b9a\u4e49\u5728 ",(0,o.kt)("inlineCode",{parentName:"li"},"constructor()")," \u65b9\u6cd5\u91cc\u9762\u7684 this \u4e0a\u9762\uff0c\u4e5f\u53ef\u4ee5\u5b9a\u4e49\u5728\u7c7b\u5185\u90e8\u7684\u6700\u9876\u5c42")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"class IncreasingCounter {\n  _count = 0\n  get value() {\n    console.log('Getting the current value!')\n    return this._count\n  }\n  increment() {\n    this._count++\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u65b0\u5199\u6cd5\u5b9a\u4e49\u7684\u5c5e\u6027\u662f",(0,o.kt)("strong",{parentName:"p"},"\u5b9e\u4f8b\u5bf9\u8c61\u81ea\u8eab\u7684\u5c5e\u6027"),"\uff0c\u800c\u4e0d\u662f\u5b9a\u4e49\u5728\u5b9e\u4f8b\u5bf9\u8c61\u7684\u539f\u578b\u4e0a\u9762"),(0,o.kt)("h2",{id:"4-\u53d6\u503c\u51fd\u6570getter\u548c\u5b58\u503c\u51fd\u6570setter"},"4. \u53d6\u503c\u51fd\u6570\uff08getter\uff09\u548c\u5b58\u503c\u51fd\u6570\uff08setter\uff09\uff1a"),(0,o.kt)("p",null,"\u4e0e ES5 \u4e00\u6837\uff0c\u5728\u201c\u7c7b\u201d\u7684\u5185\u90e8\u53ef\u4ee5\u4f7f\u7528 get \u548c set \u5173\u952e\u5b57\uff0c\u5bf9\u67d0\u4e2a\u5c5e\u6027\u8bbe\u7f6e\u5b58\u503c\u51fd\u6570\u548c\u53d6\u503c\u51fd\u6570\uff0c\u62e6\u622a\u8be5\u5c5e\u6027\u7684\u5b58\u53d6\u884c\u4e3a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"class MyClass {\n  constructor() {\n    // ...\n  }\n  get prop() {\n    return 'getter'\n  }\n  set prop(value) {\n    console.log('setter: ' + value)\n  }\n}\n\nlet inst = new MyClass()\n\ninst.prop = 123\n// setter: 123\n\ninst.prop\n// 'getter'\n")),(0,o.kt)("h2",{id:"5-\u5c5e\u6027\u8868\u8fbe\u5f0f"},"5. \u5c5e\u6027\u8868\u8fbe\u5f0f\uff1a"),(0,o.kt)("p",null,"\u7c7b\u7684\u5c5e\u6027\u540d\uff0c\u53ef\u4ee5\u91c7\u7528\u8868\u8fbe\u5f0f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"let methodName = 'getArea'\n\nclass Square {\n  constructor(length) {\n    // ...\n  }\n\n  [methodName]() {\n    // ...\n  }\n}\n")),(0,o.kt)("p",null,"Square \u7c7b\u7684\u65b9\u6cd5\u540d getArea\uff0c\u662f\u4ece\u8868\u8fbe\u5f0f\u5f97\u5230\u7684"),(0,o.kt)("h2",{id:"6-\u9759\u6001\u5c5e\u6027"},"6. \u9759\u6001\u5c5e\u6027\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"class MyClass {\n  static myStaticProp = 42\n\n  constructor() {\n    console.log(MyClass.myStaticProp) // 42\n  }\n}\n")),(0,o.kt)("p",null,"\u7236\u7c7b\u7684\u9759\u6001\u5c5e\u6027\uff0c\u53ef\u4ee5\u88ab\u5b50\u7c7b\u7ee7\u627f"),(0,o.kt)("h2",{id:"7-\u9759\u6001\u65b9\u6cd5"},"7. \u9759\u6001\u65b9\u6cd5\uff1a"),(0,o.kt)("p",null,"\u7c7b\u76f8\u5f53\u4e8e\u5b9e\u4f8b\u7684\u539f\u578b\uff0c\u6240\u6709\u5728\u7c7b\u4e2d\u5b9a\u4e49\u7684\u65b9\u6cd5\uff0c\u90fd\u4f1a\u88ab\u5b9e\u4f8b\u7ee7\u627f\u3002\u5982\u679c\u5728\u4e00\u4e2a\u65b9\u6cd5\u524d\uff0c\u52a0\u4e0a static \u5173\u952e\u5b57\uff0c\u5c31\u8868\u793a\u8be5\u65b9\u6cd5\u4e0d\u4f1a\u88ab\u5b9e\u4f8b\u7ee7\u627f\uff0c\u800c\u662f\u76f4\u63a5\u901a\u8fc7\u7c7b\u6765\u8c03\u7528\uff0c\u8fd9\u5c31\u79f0\u4e3a\u201c\u9759\u6001\u65b9\u6cd5\u201d"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"class Foo {\n  static classMethod() {\n    return 'hello'\n  }\n}\n\nFoo.classMethod() // 'hello'\n\nvar foo = new Foo()\nfoo.classMethod() // TypeError: foo.classMethod is not a function\n")),(0,o.kt)("p",null,"\u7236\u7c7b\u7684\u9759\u6001\u65b9\u6cd5\uff0c\u53ef\u4ee5\u88ab\u5b50\u7c7b\u7ee7\u627f"),(0,o.kt)("h2",{id:"7-\u79c1\u6709\u5c5e\u6027"},"7. \u79c1\u6709\u5c5e\u6027\uff1a"),(0,o.kt)("p",null,"ES2022\uff0c\u6709\u4e00\u4e2a\u63d0\u6848\uff0c\u4e3a class \u52a0\u4e86\u79c1\u6709\u5c5e\u6027\u3002\u65b9\u6cd5\u662f\u5728\u5c5e\u6027\u540d\u4e4b\u524d\uff0c\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"#")," \u8868\u793a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"class IncreasingCounter {\n  #count = 0\n  get value() {\n    console.log('Getting the current value!')\n    return this.#count\n  }\n  set value(value) {\n    this.#count = value\n  }\n  increment() {\n    this.#count++\n  }\n}\n\nconst counter = new IncreasingCounter()\ncounter.#count // \u62a5\u9519\ncounter.#count = 42 // \u62a5\u9519\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u79c1\u6709\u5c5e\u6027\u4e5f\u53ef\u4ee5\u8bbe\u7f6e getter \u548c setter \u65b9\u6cd5"),(0,o.kt)("h2",{id:"8-\u79c1\u6709\u65b9\u6cd5"},"8. \u79c1\u6709\u65b9\u6cd5\uff1a"),(0,o.kt)("p",null,"\u8fd9\u79cd\u5199\u6cd5\u4e0d\u4ec5\u53ef\u4ee5\u5199\u79c1\u6709\u5c5e\u6027\uff0c\u8fd8\u53ef\u4ee5\u7528\u6765\u5199\u79c1\u6709\u65b9\u6cd5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"class Foo {\n  #a\n  #b\n  constructor(a, b) {\n    this.#a = a\n    this.#b = b\n  }\n  #sum() {\n    return this.#a + this.#b\n  }\n  printSum() {\n    console.log(this.#sum())\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u79c1\u6709\u5c5e\u6027\u548c\u79c1\u6709\u65b9\u6cd5\u524d\u9762\uff0c\u4e5f\u53ef\u4ee5\u52a0\u4e0a static \u5173\u952e\u5b57\uff0c\u8868\u793a\u8fd9\u662f\u4e00\u4e2a\u9759\u6001\u7684\u79c1\u6709\u5c5e\u6027\u6216\u79c1\u6709\u65b9\u6cd5"),(0,o.kt)("h2",{id:"9-in-\u8fd0\u7b97\u7b26"},"9. ",(0,o.kt)("inlineCode",{parentName:"h2"},"in")," \u8fd0\u7b97\u7b26\uff1a"),(0,o.kt)("p",null,"\u76f4\u63a5\u8bbf\u95ee\u67d0\u4e2a\u7c7b\u4e0d\u5b58\u5728\u7684\u79c1\u6709\u5c5e\u6027\u4f1a\u62a5\u9519\uff0c\u4f46\u662f\u8bbf\u95ee\u4e0d\u5b58\u5728\u7684\u516c\u5f00\u5c5e\u6027\u4e0d\u4f1a\u62a5\u9519\u3002\u8fd9\u4e2a\u7279\u6027\u53ef\u4ee5\u7528\u6765\u5224\u65ad\uff0c\u67d0\u4e2a\u5bf9\u8c61\u662f\u5426\u4e3a\u7c7b\u7684\u5b9e\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"class C {\n  #brand\n\n  static isC(obj) {\n    if (#brand in obj) {\n      // \u79c1\u6709\u5c5e\u6027 #brand \u5b58\u5728\n      return true\n    } else {\n      // \u79c1\u6709\u5c5e\u6027 #foo \u4e0d\u5b58\u5728\n      return false\n    }\n  }\n}\n")),(0,o.kt)("p",null,"in \u8fd0\u7b97\u7b26\u5224\u65ad\u67d0\u4e2a\u5bf9\u8c61\u662f\u5426\u6709\u79c1\u6709\u5c5e\u6027#foo\u3002\u5b83\u4e0d\u4f1a\u62a5\u9519\uff0c\u800c\u662f\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1ain \u8fd0\u7b97\u7b26\u5bf9\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"Object.create()"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"Object.setPrototypeOf")," \u5f62\u6210\u7684\u7ee7\u627f\uff0c\u662f\u65e0\u6548\u7684\uff0c\u56e0\u4e3a\u8fd9\u79cd\u7ee7\u627f\u4e0d\u4f1a\u4f20\u9012\u79c1\u6709\u5c5e\u6027"),(0,o.kt)("h2",{id:"10-\u9759\u6001\u5757"},"10. \u9759\u6001\u5757\uff1a"),(0,o.kt)("p",null,"\u9759\u6001\u5c5e\u6027\u7684\u4e00\u4e2a\u95ee\u9898\u662f\uff0c\u5b83\u7684\u521d\u59cb\u5316\u8981\u4e48\u5199\u5728\u7c7b\u7684\u5916\u90e8\uff0c\u8981\u4e48\u5199\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"constructor()")," \u65b9\u6cd5\u91cc\u9762"),(0,o.kt)("p",null,"\u5b83\u4eec\u7684\u521d\u59cb\u5316\u5199\u5728\u7c7b\u7684\u5916\u90e8\uff08\u4e0a\u4f8b\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"}," try...catch")," \u4ee3\u7801\u5757\uff09\u3002\u53e6\u4e00\u79cd\u65b9\u6cd5\u662f\u5199\u5230\u7c7b\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"constructor()")," \u65b9\u6cd5\u91cc\u9762"),(0,o.kt)("p",null,"\u8fd9\u4e24\u79cd\u65b9\u6cd5\u90fd\u4e0d\u662f\u5f88\u7406\u60f3\uff0c\u524d\u8005\u662f\u5c06\u7c7b\u7684\u5185\u90e8\u903b\u8f91\u5199\u5230\u4e86\u5916\u90e8\uff0c\u540e\u8005\u5219\u662f\u6bcf\u6b21\u65b0\u5efa\u5b9e\u4f8b\u90fd\u4f1a\u8fd0\u884c\u4e00\u6b21"),(0,o.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0cES2022 \u5f15\u5165\u4e86\u9759\u6001\u5757\uff08static block\uff09\uff0c\u5141\u8bb8\u5728\u7c7b\u7684\u5185\u90e8\u8bbe\u7f6e\u4e00\u4e2a\u4ee3\u7801\u5757\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u5728\u7c7b\u751f\u6210\u65f6\u8fd0\u884c\u4e00\u6b21"),"\uff0c\u4e3b\u8981\u4f5c\u7528\u662f\u5bf9\u9759\u6001\u5c5e\u6027\u8fdb\u884c\u521d\u59cb\u5316"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"class C {\n  static x = ...;\n  static y;\n  static z;\n\n  // \u9759\u6001\u5feb\n  static {\n    try {\n      const obj = doSomethingWith(this.x);\n      this.y = obj.y;\n      this.z = obj.z;\n    }\n    catch {\n      this.y = ...;\n      this.z = ...;\n    }\n  }\n}\n")),(0,o.kt)("p",null,"\u9759\u6001\u5757\u5185\u90e8\u53ef\u4ee5\u4f7f\u7528 \u7c7b\u540d \u6216 this\uff0c\u6307\u4ee3\u5f53\u524d\u7c7b"),(0,o.kt)("h2",{id:"11-\u8fed\u4ee3\u5668-\u548c-\u751f\u6210\u5668"},"11. \u8fed\u4ee3\u5668 \u548c \u751f\u6210\u5668\uff1a"),(0,o.kt)("p",null,"\u67d0\u4e2a\u65b9\u6cd5\u4e4b\u524d\u52a0\u4e0a\u661f\u53f7\uff08","*","\uff09\uff0c\u5c31\u8868\u793a\u8be5\u65b9\u6cd5\u662f\u4e00\u4e2a \u751f\u6210\u5668 \u51fd\u6570"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"class Foo {\n  constructor(...args) {\n    this.args = args\n  }\n  *[Symbol.iterator]() {\n    for (let arg of this.args) {\n      yield arg\n    }\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Symbol.iterator")," \u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a Foo \u7c7b\u7684\u9ed8\u8ba4\u8fed\u4ee3\u5668"),(0,o.kt)("h2",{id:"12-newtarget-\u5c5e\u6027"},"12. ",(0,o.kt)("inlineCode",{parentName:"h2"},"new.target")," \u5c5e\u6027\uff1a"),(0,o.kt)("p",null,"ES6 \u4e3a new \u547d\u4ee4\u5f15\u5165\u4e86\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"new.target")," \u5c5e\u6027\uff0c\u8be5\u5c5e\u6027\u4e00\u822c\u7528\u5728\u6784\u9020\u51fd\u6570\u4e4b\u4e2d\uff0c\u8fd4\u56de new \u547d\u4ee4\u4f5c\u7528\u4e8e\u7684\u90a3\u4e2a\u6784\u9020\u51fd\u6570"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function Person(name) {\n  if (new.target === Person) {\n    this.name = name\n  } else {\n    throw new Error('\u5fc5\u987b\u4f7f\u7528 new \u547d\u4ee4\u751f\u6210\u5b9e\u4f8b')\n  }\n}\n")),(0,o.kt)("h2",{id:"13-\u7c7b\u7684\u7ee7\u627f"},"13. \u7c7b\u7684\u7ee7\u627f\uff1a"),(0,o.kt)("p",null,"Class \u53ef\u4ee5\u901a\u8fc7 extends \u5173\u952e\u5b57\u5b9e\u73b0\u7ee7\u627f\uff08",(0,o.kt)("strong",{parentName:"p"},"\u5355\u7ee7\u627f"),"\uff09\uff0c\u8ba9\u5b50\u7c7b\u7ee7\u627f\u7236\u7c7b\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\u3002extends \u7684\u5199\u6cd5\u6bd4 ES5 \u7684\u539f\u578b\u94fe\u7ee7\u627f\uff0c\u8981\u6e05\u6670\u548c\u65b9\u4fbf\u5f88\u591a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"class Point {}\n\nclass ColorPoint extends Point {}\n")),(0,o.kt)("h3",{id:"1-super-\u5173\u952e\u5b57"},"1. super \u5173\u952e\u5b57\uff1a"),(0,o.kt)("p",null,"super \u8fd9\u4e2a\u5173\u952e\u5b57\uff0c\u65e2\u53ef\u4ee5\u5f53\u4f5c\u51fd\u6570\u4f7f\u7528\uff0c\u4e5f\u53ef\u4ee5\u5f53\u4f5c\u5bf9\u8c61\u4f7f\u7528\u3002\u5728\u8fd9\u4e24\u79cd\u60c5\u51b5\u4e0b\uff0c\u5b83\u7684\u7528\u6cd5\u5b8c\u5168\u4e0d\u540c"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7b2c\u4e00\u79cd\u60c5\u51b5"),"\uff0csuper \u4f5c\u4e3a\u51fd\u6570\u8c03\u7528\u65f6\uff0c\u4ee3\u8868\u7236\u7c7b\u7684\u6784\u9020\u51fd\u6570"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"ES6 \u8981\u6c42\uff0c\u5b50\u7c7b\u7684\u6784\u9020\u51fd\u6570\u5fc5\u987b\u6267\u884c\u4e00\u6b21 super \u51fd\u6570"),(0,o.kt)("li",{parentName:"ol"},"ES6 \u89c4\u5b9a\uff0c\u5b50\u7c7b\u5fc5\u987b\u5728 ",(0,o.kt)("inlineCode",{parentName:"li"},"constructor()")," \u65b9\u6cd5\u4e2d\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"super()"),"\uff0c\u5426\u5219\u5c31\u4f1a\u62a5\u9519"),(0,o.kt)("li",{parentName:"ol"},"\u4f5c\u4e3a\u51fd\u6570\u65f6\uff0c",(0,o.kt)("inlineCode",{parentName:"li"},"super()")," \u53ea\u80fd\u7528\u5728\u5b50\u7c7b\u7684\u6784\u9020\u51fd\u6570\u4e4b\u4e2d\uff0c\u7528\u5728\u5176\u4ed6\u5730\u65b9\u5c31\u4f1a\u62a5\u9519")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"class A {}\n\nclass B extends A {\n  constructor() {\n    super()\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7b2c\u4e8c\u79cd\u60c5\u51b5"),"\uff0csuper \u4f5c\u4e3a\u5bf9\u8c61\u65f6\uff0c\u5728\u666e\u901a\u65b9\u6cd5\u4e2d\uff0c\u6307\u5411\u7236\u7c7b\u7684\u539f\u578b\u5bf9\u8c61\uff1b\u5728\u9759\u6001\u65b9\u6cd5\u4e2d\uff0c\u6307\u5411\u7236\u7c7b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"class A {\n  p() {\n    return 2\n  }\n}\n\nclass B extends A {\n  constructor() {\n    super()\n    console.log(super.p()) // 2\n  }\n}\n\nlet b = new B()\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"super")," \u7b49\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"A.prototype"),"\uff0c\u4f46\u662f this \u8fd8\u662f b \u5bf9\u8c61"),(0,o.kt)("h3",{id:"2-\u7c7b\u7684-prototype-\u5c5e\u6027\u548c-__proto__-\u5c5e\u6027"},"2. \u7c7b\u7684 prototype \u5c5e\u6027\u548c ",(0,o.kt)("inlineCode",{parentName:"h3"},"__proto__")," \u5c5e\u6027\uff1a"),(0,o.kt)("p",null,"Class \u4f5c\u4e3a\u6784\u9020\u51fd\u6570\u7684\u8bed\u6cd5\u7cd6\uff0c\u540c\u65f6\u6709 prototype \u5c5e\u6027\u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"__proto__")," \u5c5e\u6027\uff0c\u56e0\u6b64\u540c\u65f6\u5b58\u5728\u4e24\u6761\u7ee7\u627f\u94fe"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5b50\u7c7b\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"__proto__")," \u5c5e\u6027\uff0c\u8868\u793a\u6784\u9020\u51fd\u6570\u7684\u7ee7\u627f\uff0c\u603b\u662f\u6307\u5411\u7236\u7c7b"),(0,o.kt)("li",{parentName:"ol"},"\u5b50\u7c7b prototype \u5c5e\u6027\u7684",(0,o.kt)("inlineCode",{parentName:"li"},"__proto__"),"\u5c5e\u6027\uff0c\u8868\u793a\u65b9\u6cd5\u7684\u7ee7\u627f\uff0c\u603b\u662f\u6307\u5411\u7236\u7c7b\u7684 prototype \u5c5e\u6027")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"class A {}\n\nclass B extends A {}\n\nB.__proto__ === A // true\nB.prototype.__proto__ === A.prototype // true\n")),(0,o.kt)("p",null,"\u5b50\u7c7b B \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"__proto__")," \u5c5e\u6027\u6307\u5411\u7236\u7c7b A\uff0c\u5b50\u7c7b B \u7684 prototype \u5c5e\u6027\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"__proto__")," \u5c5e\u6027\u6307\u5411\u7236\u7c7b A \u7684 prototype \u5c5e\u6027\u3002"),(0,o.kt)("p",null,"\u8fd9\u6837\u7684\u7ed3\u679c\u662f\u56e0\u4e3a\uff0c\u7c7b\u7684\u7ee7\u627f\u662f\u6309\u7167\u4e0b\u9762\u7684\u6a21\u5f0f\u5b9e\u73b0\u7684"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"Object.setPrototypeOf(B.prototype, A.prototype)\n// \u7b49\u540c\u4e8e\nB.prototype.__proto__ = A.prototype\n\nObject.setPrototypeOf(B, A)\n// \u7b49\u540c\u4e8e\nB.__proto__ = A\n")),(0,o.kt)("h3",{id:"3-\u5b9e\u4f8b\u7684-__proto__-\u5c5e\u6027"},"3. \u5b9e\u4f8b\u7684 ",(0,o.kt)("inlineCode",{parentName:"h3"},"__proto__")," \u5c5e\u6027\uff1a"),(0,o.kt)("p",null,"\u5b50\u7c7b\u5b9e\u4f8b\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"__proto__")," \u5c5e\u6027\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"__proto__")," \u5c5e\u6027\uff0c\u6307\u5411\u7236\u7c7b\u5b9e\u4f8b\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"__proto__")," \u5c5e\u6027"),(0,o.kt)("p",null,"\u4e5f\u5c31\u662f\u8bf4\uff0c\u5b50\u7c7b\u7684\u539f\u578b\u7684\u539f\u578b\uff0c\u662f\u7236\u7c7b\u7684\u539f\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const p1 = new Point(2, 3)\nconst p2 = new ColorPoint(2, 3, 'red')\n\np2.__proto__ === p1.__proto__ // false\np2.__proto__.__proto__ === p1.__proto__ // true\n")))}m.isMDXComponent=!0}}]);