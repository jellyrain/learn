"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4274],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,l=t.originalType,s=t.parentName,c=a(t,["components","mdxType","originalType","parentName"]),d=u(n),f=i,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||l;return n?r.createElement(m,o(o({ref:e},c),{},{components:n})):r.createElement(m,o({ref:e},c))}));function f(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var l=n.length,o=new Array(l);o[0]=d;var a={};for(var s in e)hasOwnProperty.call(e,s)&&(a[s]=e[s]);a.originalType=t,a.mdxType="string"==typeof t?t:i,o[1]=a;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58340:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var r=n(83117),i=n(80102),l=(n(67294),n(3905)),o=["components"],a={sidebar_position:1},s=void 0,u={unversionedId:"Git/Git \u4ecb\u7ecd",id:"Git/Git \u4ecb\u7ecd",title:"Git \u4ecb\u7ecd",description:"1. \u7248\u672c\u63a7\u5236\uff1a",source:"@site/docs\\4-Git\\Git \u4ecb\u7ecd.md",sourceDirName:"4-Git",slug:"/Git/Git \u4ecb\u7ecd",permalink:"/learn/Git/Git \u4ecb\u7ecd",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u5305\u88c5\u7c7b",permalink:"/learn/Java/\u57fa\u7840/\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b/\u5305\u88c5\u7c7b"},next:{title:"Git \u914d\u7f6e",permalink:"/learn/Git/Git \u914d\u7f6e"}},c={},p=[{value:"1. \u7248\u672c\u63a7\u5236\uff1a",id:"1-\u7248\u672c\u63a7\u5236",level:2},{value:"1. \u672c\u5730\u7248\u672c\u63a7\u5236\u7cfb\u7edf\uff08Version Control Systems\uff0c\u7b80\u79f0 VCS\uff09\uff1a",id:"1-\u672c\u5730\u7248\u672c\u63a7\u5236\u7cfb\u7edfversion-control-systems\u7b80\u79f0-vcs",level:3},{value:"2. \u96c6\u4e2d\u5316\u7684\u7248\u672c\u63a7\u5236\u7cfb\u7edf\uff08Centralized Version Control Systems\uff0c\u7b80\u79f0 CVCS\uff09\uff1a",id:"2-\u96c6\u4e2d\u5316\u7684\u7248\u672c\u63a7\u5236\u7cfb\u7edfcentralized-version-control-systems\u7b80\u79f0-cvcs",level:3},{value:"3. \u5206\u5e03\u5f0f\u7248\u672c\u63a7\u5236\u7cfb\u7edf\uff08Distributed Version Control System\uff0c\u7b80\u79f0 DVCS\uff09\uff1a",id:"3-\u5206\u5e03\u5f0f\u7248\u672c\u63a7\u5236\u7cfb\u7edfdistributed-version-control-system\u7b80\u79f0-dvcs",level:3},{value:"2. Git\uff1a",id:"2-git",level:2},{value:"1. \u76f4\u63a5\u8bb0\u5f55\u5feb\u7167\uff0c\u800c\u975e\u5dee\u5f02\u6bd4\u8f83\uff1a",id:"1-\u76f4\u63a5\u8bb0\u5f55\u5feb\u7167\u800c\u975e\u5dee\u5f02\u6bd4\u8f83",level:3},{value:"2. \u8fd1\u4e4e\u6240\u6709\u64cd\u4f5c\u90fd\u662f\u672c\u5730\u6267\u884c\uff1a",id:"2-\u8fd1\u4e4e\u6240\u6709\u64cd\u4f5c\u90fd\u662f\u672c\u5730\u6267\u884c",level:3},{value:"3. \u5b8c\u6574\u6027\uff1a",id:"3-\u5b8c\u6574\u6027",level:3},{value:"4. \u4e00\u822c\u53ea\u6dfb\u52a0\u6570\u636e\uff1a",id:"4-\u4e00\u822c\u53ea\u6dfb\u52a0\u6570\u636e",level:3},{value:"5. \u4e09\u79cd\u72b6\u6001\uff1a",id:"5-\u4e09\u79cd\u72b6\u6001",level:3}],d={toc:p};function f(t){var e=t.components,a=(0,i.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1-\u7248\u672c\u63a7\u5236"},"1. \u7248\u672c\u63a7\u5236\uff1a"),(0,l.kt)("p",null,"\u7248\u672c\u63a7\u5236\u662f\u4e00\u79cd\u8bb0\u5f55\u4e00\u4e2a\u6216\u82e5\u5e72\u6587\u4ef6\u5185\u5bb9\u53d8\u5316\uff0c\u4ee5\u4fbf\u5c06\u6765\u67e5\u9605\u7279\u5b9a\u7248\u672c\u4fee\u8ba2\u60c5\u51b5\u7684\u7cfb\u7edf"),(0,l.kt)("h3",{id:"1-\u672c\u5730\u7248\u672c\u63a7\u5236\u7cfb\u7edfversion-control-systems\u7b80\u79f0-vcs"},"1. \u672c\u5730\u7248\u672c\u63a7\u5236\u7cfb\u7edf\uff08Version Control Systems\uff0c\u7b80\u79f0 VCS\uff09\uff1a"),(0,l.kt)("p",null,"RCS \u662f\u4e00\u4e2a\u5e38\u7528\u7684 VCS \u5de5\u5177"),(0,l.kt)("p",null,"RCS \u7684\u5de5\u4f5c\u539f\u7406\u662f\u5728\u786c\u76d8\u4e0a\u4fdd\u5b58\u8865\u4e01\u96c6\uff08\u8865\u4e01\u662f\u6307\u6587\u4ef6\u4fee\u8ba2\u524d\u540e\u7684\u53d8\u5316\uff09\uff1b\u901a\u8fc7\u5e94\u7528\u6240\u6709\u7684\u8865\u4e01\uff0c\u53ef\u4ee5\u91cd\u65b0\u8ba1\u7b97\u51fa\u5404\u4e2a\u7248\u672c\u7684\u6587\u4ef6\u5185\u5bb9"),(0,l.kt)("h3",{id:"2-\u96c6\u4e2d\u5316\u7684\u7248\u672c\u63a7\u5236\u7cfb\u7edfcentralized-version-control-systems\u7b80\u79f0-cvcs"},"2. \u96c6\u4e2d\u5316\u7684\u7248\u672c\u63a7\u5236\u7cfb\u7edf\uff08Centralized Version Control Systems\uff0c\u7b80\u79f0 CVCS\uff09\uff1a"),(0,l.kt)("p",null,"\u8bf8\u5982 CVS\u3001Subversion \u4ee5\u53ca Perforce \u7b49\uff0c\u90fd\u6709\u4e00\u4e2a\u5355\u4e00\u7684\u96c6\u4e2d\u7ba1\u7406\u7684\u670d\u52a1\u5668\uff0c\u4fdd\u5b58\u6240\u6709\u6587\u4ef6\u7684\u4fee\u8ba2\u7248\u672c\uff0c\u800c\u534f\u540c\u5de5\u4f5c\u7684\u4eba\u4eec\u90fd\u901a\u8fc7\u5ba2\u6237\u7aef\u8fde\u5230\u8fd9\u53f0\u670d\u52a1\u5668\uff0c\u53d6\u51fa\u6700\u65b0\u7684\u6587\u4ef6\u6216\u8005\u63d0\u4ea4\u66f4\u65b0"),(0,l.kt)("h3",{id:"3-\u5206\u5e03\u5f0f\u7248\u672c\u63a7\u5236\u7cfb\u7edfdistributed-version-control-system\u7b80\u79f0-dvcs"},"3. \u5206\u5e03\u5f0f\u7248\u672c\u63a7\u5236\u7cfb\u7edf\uff08Distributed Version Control System\uff0c\u7b80\u79f0 DVCS\uff09\uff1a"),(0,l.kt)("p",null,"\u50cf Git\u3001Mercurial\u3001Bazaar \u4ee5\u53ca Darcs \u7b49\uff0c\u5ba2\u6237\u7aef\u5e76\u4e0d\u53ea\u63d0\u53d6\u6700\u65b0\u7248\u672c\u7684\u6587\u4ef6\u5feb\u7167\uff0c \u800c\u662f\u628a\u4ee3\u7801\u4ed3\u5e93\u5b8c\u6574\u5730\u955c\u50cf\u4e0b\u6765\uff0c\u5305\u62ec\u5b8c\u6574\u7684\u5386\u53f2\u8bb0\u5f55\u3002 \u8fd9\u4e48\u4e00\u6765\uff0c\u4efb\u4f55\u4e00\u5904\u534f\u540c\u5de5\u4f5c\u7528\u7684\u670d\u52a1\u5668\u53d1\u751f\u6545\u969c\uff0c\u4e8b\u540e\u90fd\u53ef\u4ee5\u7528\u4efb\u4f55\u4e00\u4e2a\u955c\u50cf\u51fa\u6765\u7684\u672c\u5730\u4ed3\u5e93\u6062\u590d"),(0,l.kt)("h2",{id:"2-git"},"2. Git\uff1a"),(0,l.kt)("h3",{id:"1-\u76f4\u63a5\u8bb0\u5f55\u5feb\u7167\u800c\u975e\u5dee\u5f02\u6bd4\u8f83"},"1. \u76f4\u63a5\u8bb0\u5f55\u5feb\u7167\uff0c\u800c\u975e\u5dee\u5f02\u6bd4\u8f83\uff1a"),(0,l.kt)("p",null,"Git \u548c\u5176\u5b83\u7248\u672c\u63a7\u5236\u7cfb\u7edf\uff08\u5305\u62ec Subversion \u548c\u8fd1\u4f3c\u5de5\u5177\uff09\u7684\u4e3b\u8981\u5dee\u522b\u5728\u4e8e Git \u5bf9\u5f85\u6570\u636e\u7684\u65b9\u5f0f"),(0,l.kt)("p",null,"\u4ece\u6982\u5ff5\u4e0a\u6765\u8bf4\uff0c\u5176\u5b83\u5927\u90e8\u5206\u7cfb\u7edf\u4ee5\u6587\u4ef6\u53d8\u66f4\u5217\u8868\u7684\u65b9\u5f0f\u5b58\u50a8\u4fe1\u606f\uff0c\u8fd9\u7c7b\u7cfb\u7edf\uff08CVS\u3001Subversion\u3001Perforce\u3001Bazaar \u7b49\u7b49\uff09 \u5c06\u5b83\u4eec\u5b58\u50a8\u7684\u4fe1\u606f\u770b\u4f5c\u662f\u4e00\u7ec4\u57fa\u672c\u6587\u4ef6\u548c\u6bcf\u4e2a\u6587\u4ef6\u968f\u65f6\u95f4\u9010\u6b65\u7d2f\u79ef\u7684\u5dee\u5f02 \uff08\u5b83\u4eec\u901a\u5e38\u79f0\u4f5c \u57fa\u4e8e\u5dee\u5f02\uff08delta-based\uff09 \u7684\u7248\u672c\u63a7\u5236\uff09"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(29296).Z,width:"672",height:"259"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5b58\u50a8\u6bcf\u4e2a\u6587\u4ef6\u4e0e\u521d\u59cb\u7248\u672c\u7684\u5dee\u5f02")),(0,l.kt)("p",null,"Git \u4e0d\u6309\u7167\u4ee5\u4e0a\u65b9\u5f0f\u5bf9\u5f85\u6216\u4fdd\u5b58\u6570\u636e\u3002\u53cd\u4e4b\uff0cGit \u66f4\u50cf\u662f\u628a\u6570\u636e\u770b\u4f5c\u662f\u5bf9\u5c0f\u578b\u6587\u4ef6\u7cfb\u7edf\u7684\u4e00\u7cfb\u5217\u5feb\u7167\u3002 \u5728 Git \u4e2d\uff0c\u6bcf\u5f53\u4f60\u63d0\u4ea4\u66f4\u65b0\u6216\u4fdd\u5b58\u9879\u76ee\u72b6\u6001\u65f6\uff0c\u5b83\u57fa\u672c\u4e0a\u5c31\u4f1a\u5bf9\u5f53\u65f6\u7684\u5168\u90e8\u6587\u4ef6\u521b\u5efa\u4e00\u4e2a\u5feb\u7167\u5e76\u4fdd\u5b58\u8fd9\u4e2a\u5feb\u7167\u7684\u7d22\u5f15"),(0,l.kt)("p",null,"\u4e3a\u4e86\u6548\u7387\uff0c\u5982\u679c\u6587\u4ef6\u6ca1\u6709\u4fee\u6539\uff0cGit \u4e0d\u518d\u91cd\u65b0\u5b58\u50a8\u8be5\u6587\u4ef6\uff0c\u800c\u662f\u53ea\u4fdd\u7559\u4e00\u4e2a\u94fe\u63a5\u6307\u5411\u4e4b\u524d\u5b58\u50a8\u7684\u6587\u4ef6\u3002 Git \u5bf9\u5f85\u6570\u636e\u66f4\u50cf\u662f\u4e00\u4e2a \u5feb\u7167\u6d41"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(7797).Z,width:"677",height:"268"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5b58\u50a8\u9879\u76ee\u968f\u65f6\u95f4\u6539\u53d8\u7684\u5feb\u7167")),(0,l.kt)("h3",{id:"2-\u8fd1\u4e4e\u6240\u6709\u64cd\u4f5c\u90fd\u662f\u672c\u5730\u6267\u884c"},"2. \u8fd1\u4e4e\u6240\u6709\u64cd\u4f5c\u90fd\u662f\u672c\u5730\u6267\u884c\uff1a"),(0,l.kt)("p",null,"\u5728 Git \u4e2d\u7684\u7edd\u5927\u591a\u6570\u64cd\u4f5c\u90fd\u53ea\u9700\u8981\u8bbf\u95ee\u672c\u5730\u6587\u4ef6\u548c\u8d44\u6e90\uff0c\u4e00\u822c\u4e0d\u9700\u8981\u6765\u81ea\u7f51\u7edc\u4e0a\u5176\u5b83\u8ba1\u7b97\u673a\u7684\u4fe1\u606f"),(0,l.kt)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u8981\u6d4f\u89c8\u9879\u76ee\u7684\u5386\u53f2\uff0cGit \u4e0d\u9700\u5916\u8fde\u5230\u670d\u52a1\u5668\u53bb\u83b7\u53d6\u5386\u53f2\uff0c\u7136\u540e\u518d\u663e\u793a\u51fa\u6765\u2014\u2014\u5b83\u53ea\u9700\u76f4\u63a5\u4ece\u672c\u5730\u6570\u636e\u5e93\u4e2d\u8bfb\u53d6\u3002 \u4f60\u80fd\u7acb\u5373\u770b\u5230\u9879\u76ee\u5386\u53f2\u3002\u5982\u679c\u4f60\u60f3\u67e5\u770b\u5f53\u524d\u7248\u672c\u4e0e\u4e00\u4e2a\u6708\u524d\u7684\u7248\u672c\u4e4b\u95f4\u5f15\u5165\u7684\u4fee\u6539\uff0c Git \u4f1a\u67e5\u627e\u5230\u4e00\u4e2a\u6708\u524d\u7684\u6587\u4ef6\u505a\u4e00\u6b21\u672c\u5730\u7684\u5dee\u5f02\u8ba1\u7b97\uff0c\u800c\u4e0d\u662f\u7531\u8fdc\u7a0b\u670d\u52a1\u5668\u5904\u7406\u6216\u4ece\u8fdc\u7a0b\u670d\u52a1\u5668\u62c9\u56de\u65e7\u7248\u672c\u6587\u4ef6\u518d\u6765\u672c\u5730\u5904\u7406"),(0,l.kt)("h3",{id:"3-\u5b8c\u6574\u6027"},"3. \u5b8c\u6574\u6027\uff1a"),(0,l.kt)("p",null,"Git \u4e2d\u6240\u6709\u7684\u6570\u636e\u5728\u5b58\u50a8\u524d\u90fd\u8ba1\u7b97\u6821\u9a8c\u548c\uff0c\u7136\u540e\u4ee5\u6821\u9a8c\u548c\u6765\u5f15\u7528\u3002 \u8fd9\u610f\u5473\u7740\u4e0d\u53ef\u80fd\u5728 Git \u4e0d\u77e5\u60c5\u65f6\u66f4\u6539\u4efb\u4f55\u6587\u4ef6\u5185\u5bb9\u6216\u76ee\u5f55\u5185\u5bb9\u3002 \u8fd9\u4e2a\u529f\u80fd\u5efa\u6784\u5728 Git \u5e95\u5c42\uff0c\u662f\u6784\u6210 Git \u54f2\u5b66\u4e0d\u53ef\u6216\u7f3a\u7684\u90e8\u5206"),(0,l.kt)("p",null,"Git \u7528\u4ee5\u8ba1\u7b97\u6821\u9a8c\u548c\u7684\u673a\u5236\u53eb\u505a SHA-1 \u6563\u5217\uff08hash\uff0c\u54c8\u5e0c\uff09\u3002 \u8fd9\u662f\u4e00\u4e2a\u7531 40 \u4e2a\u5341\u516d\u8fdb\u5236\u5b57\u7b26\uff080-9 \u548c a-f\uff09\u7ec4\u6210\u7684\u5b57\u7b26\u4e32\uff0c\u57fa\u4e8e Git \u4e2d\u6587\u4ef6\u7684\u5185\u5bb9\u6216\u76ee\u5f55\u7ed3\u6784\u8ba1\u7b97\u51fa\u6765\u3002 SHA-1 \u54c8\u5e0c\u770b\u8d77\u6765\u662f\u8fd9\u6837\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hash"},"24b9da6552252987aa493b52f8696cd6d3b00373\n")),(0,l.kt)("p",null,"Git \u4e2d\u4f7f\u7528\u8fd9\u79cd\u54c8\u5e0c\u503c\u7684\u60c5\u51b5\u5f88\u591a\uff0c\u4f60\u5c06\u7ecf\u5e38\u770b\u5230\u8fd9\u79cd\u54c8\u5e0c\u503c\u3002 \u5b9e\u9645\u4e0a\uff0cGit \u6570\u636e\u5e93\u4e2d\u4fdd\u5b58\u7684\u4fe1\u606f\u90fd\u662f\u4ee5\u6587\u4ef6\u5185\u5bb9\u7684\u54c8\u5e0c\u503c\u6765\u7d22\u5f15\uff0c\u800c\u4e0d\u662f\u6587\u4ef6\u540d"),(0,l.kt)("h3",{id:"4-\u4e00\u822c\u53ea\u6dfb\u52a0\u6570\u636e"},"4. \u4e00\u822c\u53ea\u6dfb\u52a0\u6570\u636e\uff1a"),(0,l.kt)("p",null,"\u4f60\u6267\u884c\u7684 Git \u64cd\u4f5c\uff0c\u51e0\u4e4e\u53ea\u5f80 Git \u6570\u636e\u5e93\u4e2d \u6dfb\u52a0 \u6570\u636e\u3002 \u4f60\u5f88\u96be\u4f7f\u7528 Git \u4ece\u6570\u636e\u5e93\u4e2d\u5220\u9664\u6570\u636e\uff0c\u4e5f\u5c31\u662f\u8bf4 Git \u51e0\u4e4e\u4e0d\u4f1a\u6267\u884c\u4efb\u4f55\u53ef\u80fd\u5bfc\u81f4\u6587\u4ef6\u4e0d\u53ef\u6062\u590d\u7684\u64cd\u4f5c"),(0,l.kt)("h3",{id:"5-\u4e09\u79cd\u72b6\u6001"},"5. \u4e09\u79cd\u72b6\u6001\uff1a"),(0,l.kt)("p",null,"Git \u6709\u4e09\u79cd\u72b6\u6001\uff0c\u4f60\u7684\u6587\u4ef6\u53ef\u80fd\u5904\u4e8e\u5176\u4e2d\u4e4b\u4e00\uff1a ",(0,l.kt)("strong",{parentName:"p"},"\u5df2\u63d0\u4ea4\uff08committed\uff09\u3001\u5df2\u4fee\u6539\uff08modified\uff09 \u548c \u5df2\u6682\u5b58\uff08staged\uff09"),"\n\u8fd9\u4f1a\u8ba9\u6211\u4eec\u7684 Git \u9879\u76ee\u62e5\u6709\u4e09\u4e2a\u9636\u6bb5\uff1a\u5de5\u4f5c\u533a\u3001\u6682\u5b58\u533a \u4ee5\u53ca Git \u76ee\u5f55"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(19536).Z,width:"692",height:"367"})),(0,l.kt)("p",null,"\u57fa\u672c\u7684 Git \u5de5\u4f5c\u6d41\u7a0b\u5982\u4e0b\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5728\u5de5\u4f5c\u533a\u4e2d\u4fee\u6539\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ol"},"\u5c06\u4f60\u60f3\u8981\u4e0b\u6b21\u63d0\u4ea4\u7684\u66f4\u6539\u9009\u62e9\u6027\u5730\u6682\u5b58\uff0c\u8fd9\u6837\u53ea\u4f1a\u5c06\u66f4\u6539\u7684\u90e8\u5206\u6dfb\u52a0\u5230\u6682\u5b58\u533a"),(0,l.kt)("li",{parentName:"ol"},"\u63d0\u4ea4\u66f4\u65b0\uff0c\u627e\u5230\u6682\u5b58\u533a\u7684\u6587\u4ef6\uff0c\u5c06\u5feb\u7167\u6c38\u4e45\u6027\u5b58\u50a8\u5230 Git \u76ee\u5f55")))}f.isMDXComponent=!0},29296:function(t,e,n){e.Z=n.p+"assets/images/Snipaste_2022-07-20_15-02-50-c58c350a430be1e1f0ba0e970446b6d2.png"},7797:function(t,e,n){e.Z=n.p+"assets/images/Snipaste_2022-07-20_15-15-27-a1f9e558951e03e77d2b645dc669aa9e.png"},19536:function(t,e,n){e.Z=n.p+"assets/images/Snipaste_2022-07-20_15-31-09-d4736ad67bcc542ae41e5936fb182793.png"}}]);