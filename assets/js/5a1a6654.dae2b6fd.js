"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8618],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return v}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=u(t),v=o,k=s["".concat(c,".").concat(v)]||s[v]||p[v]||a;return t?r.createElement(k,i(i({ref:n},d),{},{components:t})):r.createElement(k,i({ref:n},d))}));function v(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=s;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},9338:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=t(83117),o=t(80102),a=(t(67294),t(3905)),i=["components"],l={sidebar_position:3},c=void 0,u={unversionedId:"web/JavaScript/BOM/navigator",id:"web/JavaScript/BOM/navigator",title:"navigator",description:"\u8bf7\u6c42\u8fd0\u884c\u5f53\u524d\u4ee3\u7801\u7684\u5e94\u7528\u7a0b\u5e8f\u7684\u76f8\u5173\u4fe1\u606f\uff0c\u5305\u542b\u6709\u5173\u6d4f\u89c8\u5668\u7684\u4fe1\u606f",source:"@site/docs/2-web/3-JavaScript/16-BOM/navigator.md",sourceDirName:"2-web/3-JavaScript/16-BOM",slug:"/web/JavaScript/BOM/navigator",permalink:"/learn/web/JavaScript/BOM/navigator",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"location",permalink:"/learn/web/JavaScript/BOM/location"},next:{title:"screen",permalink:"/learn/web/JavaScript/BOM/screen"}},d={},p=[{value:"1. \u9759\u6001\u5c5e\u6027\uff1a",id:"1-\u9759\u6001\u5c5e\u6027",level:2},{value:"1. <code>connection \u53ea\u8bfb</code>\uff1a",id:"1-connection-\u53ea\u8bfb",level:3},{value:"2. <code>cookieEnabled \u53ea\u8bfb</code>\uff1a",id:"2-cookieenabled-\u53ea\u8bfb",level:3},{value:"3. <code>hardwareConcurrency \u53ea\u8bfb</code>\uff1a",id:"3-hardwareconcurrency-\u53ea\u8bfb",level:3},{value:"4. <code>language \u53ea\u8bfb</code>\uff1a",id:"4-language-\u53ea\u8bfb",level:3},{value:"5. <code>languages \u53ea\u8bfb</code>\uff1a",id:"5-languages-\u53ea\u8bfb",level:3},{value:"6. <code>userAgent \u53ea\u8bfb</code>\uff1a",id:"6-useragent-\u53ea\u8bfb",level:3},{value:"7. <code>cookieEnabled</code>\uff1a",id:"7-cookieenabled",level:3},{value:"8. <code>doNotTrack</code>\uff1a",id:"8-donottrack",level:3},{value:"2. \u9759\u6001\u65b9\u6cd5\uff1a",id:"2-\u9759\u6001\u65b9\u6cd5",level:2},{value:"1. <code>registerProtocolHandler()</code>\uff1a",id:"1-registerprotocolhandler",level:3},{value:"2. <code>sendBeacon()</code>\uff1a",id:"2-sendbeacon",level:3},{value:"3. <code>vibrate()</code>\uff1a",id:"3-vibrate",level:3}],s={toc:p};function v(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8bf7\u6c42\u8fd0\u884c\u5f53\u524d\u4ee3\u7801\u7684\u5e94\u7528\u7a0b\u5e8f\u7684\u76f8\u5173\u4fe1\u606f\uff0c\u5305\u542b\u6709\u5173\u6d4f\u89c8\u5668\u7684\u4fe1\u606f"),(0,a.kt)("h2",{id:"1-\u9759\u6001\u5c5e\u6027"},"1. \u9759\u6001\u5c5e\u6027\uff1a"),(0,a.kt)("h3",{id:"1-connection-\u53ea\u8bfb"},"1. ",(0,a.kt)("inlineCode",{parentName:"h3"},"connection \u53ea\u8bfb"),"\uff1a"),(0,a.kt)("p",null,"\u63d0\u4f9b\u4e00\u4e2a NetworkInformation \u5bf9\u8c61\u6765\u83b7\u53d6\u8bbe\u5907\u7684\u7f51\u7edc\u8fde\u63a5\u4fe1\u606f"),(0,a.kt)("h3",{id:"2-cookieenabled-\u53ea\u8bfb"},"2. ",(0,a.kt)("inlineCode",{parentName:"h3"},"cookieEnabled \u53ea\u8bfb"),"\uff1a"),(0,a.kt)("p",null,"\u5f53\u5ffd\u7565 Cookie \u65f6\u8fd4\u56de false\uff0c\u5426\u5219\u8fd4\u56de true"),(0,a.kt)("h3",{id:"3-hardwareconcurrency-\u53ea\u8bfb"},"3. ",(0,a.kt)("inlineCode",{parentName:"h3"},"hardwareConcurrency \u53ea\u8bfb"),"\uff1a"),(0,a.kt)("p",null,"\u8fd4\u56de\u53ef\u7528\u7684\u903b\u8f91\u5904\u7406\u5668\u6838\u5fc3\u6570"),(0,a.kt)("h3",{id:"4-language-\u53ea\u8bfb"},"4. ",(0,a.kt)("inlineCode",{parentName:"h3"},"language \u53ea\u8bfb"),"\uff1a"),(0,a.kt)("p",null,"\u8fd4\u56de DOMString \u8868\u793a\u7528\u6237\u7684\u9996\u5148\u8bed\u8a00\uff0c\u901a\u5e38\u662f\u6d4f\u89c8\u5668\u7528\u6237\u754c\u9762\u7684\u8bed\u8a00\u3002\u5f53\u672a\u77e5\u7684\u65f6\uff0c\u8fd4\u56de null"),(0,a.kt)("h3",{id:"5-languages-\u53ea\u8bfb"},"5. ",(0,a.kt)("inlineCode",{parentName:"h3"},"languages \u53ea\u8bfb"),"\uff1a"),(0,a.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u8868\u793a\u7528\u6237\u5df2\u77e5\u8bed\u8a00\u7684 DOMString \u6570\u7ec4\uff0c\u5e76\u6309\u4f18\u5148\u987a\u5e8f\u6392\u5217"),(0,a.kt)("h3",{id:"6-useragent-\u53ea\u8bfb"},"6. ",(0,a.kt)("inlineCode",{parentName:"h3"},"userAgent \u53ea\u8bfb"),"\uff1a"),(0,a.kt)("p",null,"\u8fd4\u56de\u5f53\u524d\u6d4f\u89c8\u5668\u7684\u7528\u6237\u4ee3\u7406"),(0,a.kt)("h3",{id:"7-cookieenabled"},"7. ",(0,a.kt)("inlineCode",{parentName:"h3"},"cookieEnabled"),"\uff1a"),(0,a.kt)("p",null,"\u8fd4\u56de\u5e03\u5c14\u503c\u4ee5\u8868\u660e Cookies \u662f\u5426\u80fd\u518d\u6d4f\u89c8\u5668\u4e2d\u542f\u7528"),(0,a.kt)("h3",{id:"8-donottrack"},"8. ",(0,a.kt)("inlineCode",{parentName:"h3"},"doNotTrack"),"\uff1a"),(0,a.kt)("p",null,"\u62a5\u544a\u7528\u6237\u7684\u4e0d\u8ffd\u8e2a\u53c2\u6570\u503c\uff0c\u5f53\u503c\u4e3a yes\uff0c\u4f60\u7684\u7f51\u5740\u6216\u5e94\u7528\u5c06\u4e0d\u8ffd\u8e2a\u7528\u6237"),(0,a.kt)("h2",{id:"2-\u9759\u6001\u65b9\u6cd5"},"2. \u9759\u6001\u65b9\u6cd5\uff1a"),(0,a.kt)("h3",{id:"1-registerprotocolhandler"},"1. ",(0,a.kt)("inlineCode",{parentName:"h3"},"registerProtocolHandler()"),"\uff1a"),(0,a.kt)("p",null,"\u8ba9 web \u7ad9\u70b9\u4e3a\u81ea\u8eab\u6ce8\u518c\u7528\u4e8e\u6253\u5f00\u6216\u5904\u7406\u7279\u5b9a URL \u65b9\u6848\uff08\u53c8\u540d\u534f\u8bae\uff09\u7684\u80fd\u529b"),(0,a.kt)("h3",{id:"2-sendbeacon"},"2. ",(0,a.kt)("inlineCode",{parentName:"h3"},"sendBeacon()"),"\uff1a"),(0,a.kt)("p",null,"\u53ef\u7528\u4e8e\u901a\u8fc7 HTTP POST \u5c06\u5c11\u91cf\u6570\u636e \u5f02\u6b65 \u4f20\u8f93\u5230 Web \u670d\u52a1\u5668\uff0c\u5b83\u4e3b\u8981\u7528\u4e8e\u5c06\u7edf\u8ba1\u6570\u636e\u53d1\u9001\u5230 Web \u670d\u52a1\u5668\uff0c\u540c\u65f6\u907f\u514d\u4e86\u7528\u4f20\u7edf\u6280\u672f\uff08\u5982\uff1aXMLHttpRequest\uff09\u53d1\u9001\u5206\u6790\u6570\u636e\u7684\u4e00\u4e9b\u95ee\u9898"),(0,a.kt)("h3",{id:"3-vibrate"},"3. ",(0,a.kt)("inlineCode",{parentName:"h3"},"vibrate()"),"\uff1a"),(0,a.kt)("p",null,"\u65b9\u6cd5\u4f7f\u8bbe\u5907\uff08\u6709\u9707\u52a8\u786c\u4ef6\uff09\u4ea7\u751f\u6709\u9891\u7387\u7684\u9707\u52a8"))}v.isMDXComponent=!0}}]);