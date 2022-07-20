"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[262],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=l.createContext({}),s=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return l.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),h=a,k=d["".concat(o,".").concat(h)]||d[h]||u[h]||i;return n?l.createElement(k,r(r({ref:t},c),{},{components:n})):l.createElement(k,r({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,r[1]=p;for(var s=2;s<i;s++)r[s]=n[s];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92600:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var l=n(83117),a=n(80102),i=(n(67294),n(3905)),r=["components"],p={sidebar_position:2},o=void 0,s={unversionedId:"XPath/XPath\uff08\u9ad8\u7ea7\uff09",id:"XPath/XPath\uff08\u9ad8\u7ea7\uff09",title:"XPath\uff08\u9ad8\u7ea7\uff09",description:"\u5148\u770b\u5b8c XPath\uff08\u57fa\u7840\uff09\u518d\u8fc7\u6765\uff01\uff01\uff01",source:"@site/docs\\10-XPath\\XPath\uff08\u9ad8\u7ea7\uff09.md",sourceDirName:"10-XPath",slug:"/XPath/XPath\uff08\u9ad8\u7ea7\uff09",permalink:"/learn/XPath/XPath\uff08\u9ad8\u7ea7\uff09",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"XPath\uff08\u57fa\u7840\uff09",permalink:"/learn/XPath/XPath\uff08\u57fa\u7840\uff09"},next:{title:"\u8f6f\u4ef6\u7ed3\u6784",permalink:"/learn/\u8ba1\u7b97\u673a\u7f51\u7edc/\u8f6f\u4ef6\u7ed3\u6784"}},c={},u=[{value:"1.\u5e38\u7528\u89c4\u5219",id:"1\u5e38\u7528\u89c4\u5219",level:2},{value:"2. \u5339\u914d\u67d0\u8282\u70b9\u4e0b\u6240\u6709\u7b26\u5408\u6761\u4ef6\u7684\u5143\u7d20 .//",id:"2-\u5339\u914d\u67d0\u8282\u70b9\u4e0b\u6240\u6709\u7b26\u5408\u6761\u4ef6\u7684\u5143\u7d20-",level:2},{value:"3. \u540c\u65f6\u5339\u914d\u591a\u4e2axpath\u8868\u8fbe\u5f0f",id:"3-\u540c\u65f6\u5339\u914d\u591a\u4e2axpath\u8868\u8fbe\u5f0f",level:2},{value:"4. child\uff1a\u9009\u53d6\u5f53\u524d\u8282\u70b9\u7684\u5b50\u5143\u7d20",id:"4-child\u9009\u53d6\u5f53\u524d\u8282\u70b9\u7684\u5b50\u5143\u7d20",level:2},{value:"5. parent\uff1a\u9009\u53d6\u5f53\u524d\u8282\u70b9\u7684\u7236\u8282\u70b9",id:"5-parent\u9009\u53d6\u5f53\u524d\u8282\u70b9\u7684\u7236\u8282\u70b9",level:2},{value:"6. attribute\uff1a\u9009\u53d6\u5f53\u524d\u8282\u70b9\u7684\u5c5e\u6027",id:"6-attribute\u9009\u53d6\u5f53\u524d\u8282\u70b9\u7684\u5c5e\u6027",level:2},{value:"7. ancestor\uff1a\u7236\u8f88\u5143\u7d20 / ancestor-or-self\uff1a\u7236\u8f88\u5143\u7d20\u53ca\u5f53\u524d\u5143\u7d20",id:"7-ancestor\u7236\u8f88\u5143\u7d20--ancestor-or-self\u7236\u8f88\u5143\u7d20\u53ca\u5f53\u524d\u5143\u7d20",level:2},{value:"8. descendant\uff1a\u540e\u4ee3 / descendant-or-self\uff1a\u540e\u4ee3\u53ca\u5f53\u524d\u8282\u70b9\u672c\u8eab",id:"8-descendant\u540e\u4ee3--descendant-or-self\u540e\u4ee3\u53ca\u5f53\u524d\u8282\u70b9\u672c\u8eab",level:2},{value:"9. following :\u9009\u53d6\u5f53\u524d\u8282\u70b9\u7684\u7ed3\u675f\u6807\u7b7e\u4e4b\u540e\u7684\u6240\u6709\u8282\u70b9\uff0c\u5305\u62ec\u8282\u70b9\u7684\u5b50\u5b59\u8282\u70b9",id:"9-following-\u9009\u53d6\u5f53\u524d\u8282\u70b9\u7684\u7ed3\u675f\u6807\u7b7e\u4e4b\u540e\u7684\u6240\u6709\u8282\u70b9\u5305\u62ec\u8282\u70b9\u7684\u5b50\u5b59\u8282\u70b9",level:2},{value:"10. preceding\uff1a\u9009\u53d6\u5f53\u524d\u8282\u70b9\u7684\u5f00\u59cb\u6807\u7b7e\u4e4b\u524d\u7684\u6240\u6709\u8282\u70b9\uff0c\u5305\u62ec\u8282\u70b9\u7684\u5b50\u5b59\u8282\u70b9",id:"10-preceding\u9009\u53d6\u5f53\u524d\u8282\u70b9\u7684\u5f00\u59cb\u6807\u7b7e\u4e4b\u524d\u7684\u6240\u6709\u8282\u70b9\u5305\u62ec\u8282\u70b9\u7684\u5b50\u5b59\u8282\u70b9",level:2},{value:"11. following-sibling\uff1a\u9009\u53d6\u5f53\u524d\u8282\u70b9\u4e4b\u540e\u7684\u6240\u6709\u540c\u7ea7\u8282\u70b9",id:"11-following-sibling\u9009\u53d6\u5f53\u524d\u8282\u70b9\u4e4b\u540e\u7684\u6240\u6709\u540c\u7ea7\u8282\u70b9",level:2},{value:"12. preceding-sibling\uff1a\u9009\u53d6\u5f53\u524d\u8282\u70b9\u4e4b\u524d\u7684\u6240\u6709\u540c\u7ea7\u8282\u70b9",id:"12-preceding-sibling\u9009\u53d6\u5f53\u524d\u8282\u70b9\u4e4b\u524d\u7684\u6240\u6709\u540c\u7ea7\u8282\u70b9",level:2},{value:"13. position\uff1a\u5b9a\u4f4d",id:"13-position\u5b9a\u4f4d",level:2},{value:"14. contains\uff1a\u5305\u542b",id:"14-contains\u5305\u542b",level:2},{value:"15. starts-with\uff1a\u4ee5...\u5f00\u59cb",id:"15-starts-with\u4ee5\u5f00\u59cb",level:2},{value:"16. count\uff1a\u7edf\u8ba1\u8282\u70b9\u4e0b\u7684\u67d0\u4e2a\u5b50\u8282\u70b9\u6570\u91cf",id:"16-count\u7edf\u8ba1\u8282\u70b9\u4e0b\u7684\u67d0\u4e2a\u5b50\u8282\u70b9\u6570\u91cf",level:2},{value:"17. not\uff1a\u975e",id:"17-not\u975e",level:2},{value:"18. \u591a\u6761\u4ef6\u5339\u914dor/and",id:"18-\u591a\u6761\u4ef6\u5339\u914dorand",level:2},{value:"19.\u83b7\u53d6\u6587\u672c",id:"19\u83b7\u53d6\u6587\u672c",level:2},{value:"20. \u83b7\u53d6\u5c5e\u6027\u503c",id:"20-\u83b7\u53d6\u5c5e\u6027\u503c",level:2}],d={toc:u};function h(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5148\u770b\u5b8c ",(0,i.kt)("strong",{parentName:"p"},"XPath\uff08\u57fa\u7840\uff09"),"\u518d\u8fc7\u6765\uff01\uff01\uff01"),(0,i.kt)("h2",{id:"1\u5e38\u7528\u89c4\u5219"},"1.\u5e38\u7528\u89c4\u5219"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"nodename \u9009\u53d6\u6b64\u8282\u70b9\u7684\u6240\u6709\u5b50\u8282\u70b9"),(0,i.kt)("li",{parentName:"ul"},"/ \u4ece\u5f53\u524d\u8282\u70b9\u9009\u53d6\u76f4\u63a5\u5b50\u8282\u70b9"),(0,i.kt)("li",{parentName:"ul"},"// \u4ece\u5f53\u524d\u8282\u70b9\u9009\u53d6\u5b50\u5b59\u8282\u70b9"),(0,i.kt)("li",{parentName:"ul"},". \u9009\u53d6\u5f53\u524d\u8282\u70b9"),(0,i.kt)("li",{parentName:"ul"},".. \u9009\u53d6\u5f53\u524d\u8282\u70b9\u7684\u7236\u8282\u70b9"),(0,i.kt)("li",{parentName:"ul"},"@ \u9009\u53d6\u5c5e\u6027"),(0,i.kt)("li",{parentName:"ul"},"*"," \u5339\u914d\u6240\u6709\u8282\u70b9")),(0,i.kt)("h2",{id:"2-\u5339\u914d\u67d0\u8282\u70b9\u4e0b\u6240\u6709\u7b26\u5408\u6761\u4ef6\u7684\u5143\u7d20-"},"2. \u5339\u914d\u67d0\u8282\u70b9\u4e0b\u6240\u6709\u7b26\u5408\u6761\u4ef6\u7684\u5143\u7d20 .//"),(0,i.kt)("p",null,"\u6211\u4eec\u5148\u6765\u5bf9\u6bd4\u4e00\u4e0b\uff1a"),(0,i.kt)("p",null,"/ \u8868\u793a\u4ece\u5f53\u524d\u8282\u70b9\u5339\u914d\u6240\u6709\u7684\u5b50\u8282\u70b9"),(0,i.kt)("p",null,"// \u8868\u793a\u4ece\u5f53\u524d\u8282\u70b9\u5339\u914d\u6240\u6709\u7684\u5b50\u5b59\u8282\u70b9"),(0,i.kt)("p",null,"//* \u8868\u793a\u4ece\u4efb\u610f\u8282\u70b9\u5339\u914d\u6240\u6709\u7684\u5b50\u5b59\u8282\u70b9"),(0,i.kt)("p",null,". \u8868\u793a\u9009\u53d6\u5f53\u524d\u8282\u70b9"),(0,i.kt)("p",null,".// \u5219\u662f\u8868\u793a\u4ece\u5f53\u524d\u8282\u70b9\u4e0b\u5339\u914d\u6240\u6709\u8be5\u8282\u70b9\u7684\u5b50\u5b59\u8282\u70b9"),(0,i.kt)("h2",{id:"3-\u540c\u65f6\u5339\u914d\u591a\u4e2axpath\u8868\u8fbe\u5f0f"},"3. \u540c\u65f6\u5339\u914d\u591a\u4e2axpath\u8868\u8fbe\u5f0f"),(0,i.kt)("p",null,"\u8fd9\u4e2a\u7b26\u53f7\u7528\u4e8e\u5728\u4e00\u4e2axpath\u4e2d\u5199\u591a\u4e2a\u8868\u8fbe\u5f0f\u7528\uff0c\u7528 | \u5206\u5f00\uff0c\u6bcf\u4e2a\u8868\u8fbe\u5f0f\u4e92\u4e0d\u5e72\u6270\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"print(ele.xpath('//ul//a/text() | //li/@class'))\n")),(0,i.kt)("h2",{id:"4-child\u9009\u53d6\u5f53\u524d\u8282\u70b9\u7684\u5b50\u5143\u7d20"},"4. child\uff1a\u9009\u53d6\u5f53\u524d\u8282\u70b9\u7684\u5b50\u5143\u7d20"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"print(ele.xpath('//ul/child::*'))  # \u83b7\u53d6ul\u6240\u6709\u7684\u5b50\u5143\u7d20\nprint(ele.xpath('//ul/child::li'))  # \u83b7\u53d6ul\u6240\u6709\u5b50\u5143\u7d20\u4e2d\u7684li\n")),(0,i.kt)("h2",{id:"5-parent\u9009\u53d6\u5f53\u524d\u8282\u70b9\u7684\u7236\u8282\u70b9"},"5. parent\uff1a\u9009\u53d6\u5f53\u524d\u8282\u70b9\u7684\u7236\u8282\u70b9"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"print(ele.xpath('//li/parent::*'))  # \u83b7\u53d6li\u6240\u6709\u7684\u7236\u5143\u7d20\nprint(ele.xpath('//li/parent::ul'))  # \u83b7\u53d6li\u6240\u6709\u7236\u5143\u7d20\u4e2d\u7684ul\n")),(0,i.kt)("h2",{id:"6-attribute\u9009\u53d6\u5f53\u524d\u8282\u70b9\u7684\u5c5e\u6027"},"6. attribute\uff1a\u9009\u53d6\u5f53\u524d\u8282\u70b9\u7684\u5c5e\u6027"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"print(ele.xpath('//ul/li/attribute::*'))  # \u83b7\u53d6li\u7684\u6240\u6709\u5c5e\u6027\nprint(ele.xpath('//ul/li/attribute::class'))  # \u83b7\u53d6li\u6240\u6709\u5c5e\u6027\u4e2d\u7684class\u5c5e\u6027\n")),(0,i.kt)("h2",{id:"7-ancestor\u7236\u8f88\u5143\u7d20--ancestor-or-self\u7236\u8f88\u5143\u7d20\u53ca\u5f53\u524d\u5143\u7d20"},"7. ancestor\uff1a\u7236\u8f88\u5143\u7d20 / ancestor-or-self\uff1a\u7236\u8f88\u5143\u7d20\u53ca\u5f53\u524d\u5143\u7d20"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"print(ele.xpath('//div[@id=\"testid\"]/ancestor::*'))  # \u83b7\u53d6div\u6240\u6709\u7236\u5143\u7d20\nprint(ele.xpath('//div[@id=\"testid\"]/ancestor::div'))  # \u83b7\u53d6div\u6240\u6709\u7236\u5143\u7d20\u4e2d\u7684div\n\nprint(ele.xpath('//div[@id=\"testid\"]/ancestor-or-self::*'))  # \u83b7\u53d6div\u6240\u6709\u7236\u5143\u7d20\u53ca\u5f53\u524d\u5143\u7d20\nprint(ele.xpath('//div[@id=\"testid\"]/ancestor-or-self::div'))  # \u83b7\u53d6div\u6240\u6709\u7236\u5143\u7d20\u53ca\u5f53\u524d\u5143\u7d20\u4e2d\u7684div\n")),(0,i.kt)("h2",{id:"8-descendant\u540e\u4ee3--descendant-or-self\u540e\u4ee3\u53ca\u5f53\u524d\u8282\u70b9\u672c\u8eab"},"8. descendant\uff1a\u540e\u4ee3 / descendant-or-self\uff1a\u540e\u4ee3\u53ca\u5f53\u524d\u8282\u70b9\u672c\u8eab"),(0,i.kt)("p",null,"\u65b9\u6cd5\u540c\u4e0a"),(0,i.kt)("h2",{id:"9-following-\u9009\u53d6\u5f53\u524d\u8282\u70b9\u7684\u7ed3\u675f\u6807\u7b7e\u4e4b\u540e\u7684\u6240\u6709\u8282\u70b9\u5305\u62ec\u8282\u70b9\u7684\u5b50\u5b59\u8282\u70b9"},"9. following :\u9009\u53d6\u5f53\u524d\u8282\u70b9\u7684\u7ed3\u675f\u6807\u7b7e\u4e4b\u540e\u7684\u6240\u6709\u8282\u70b9\uff0c\u5305\u62ec\u8282\u70b9\u7684\u5b50\u5b59\u8282\u70b9"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"print(ele.xpath('//li[@class=\"item-0\"]/following::li'))  # \u83b7\u53d6li\u540e\u9762\u7684\u6240\u6709\u8282\u70b9\u4e2d\u7684li\nfor e in ele.xpath('//li[@class=\"item-0\"]/following::li'):\n    print(etree.tostring(e))  # \u5c06\u5143\u7d20\u5bf9\u8c61\u8f6c\u6362\u4e3a\u5b57\u7b26\u4e32\uff0c\u65b9\u4fbf\u67e5\u770b\u83b7\u53d6\u5230\u4e86\u4ec0\u4e48\n")),(0,i.kt)("h2",{id:"10-preceding\u9009\u53d6\u5f53\u524d\u8282\u70b9\u7684\u5f00\u59cb\u6807\u7b7e\u4e4b\u524d\u7684\u6240\u6709\u8282\u70b9\u5305\u62ec\u8282\u70b9\u7684\u5b50\u5b59\u8282\u70b9"},"10. preceding\uff1a\u9009\u53d6\u5f53\u524d\u8282\u70b9\u7684\u5f00\u59cb\u6807\u7b7e\u4e4b\u524d\u7684\u6240\u6709\u8282\u70b9\uff0c\u5305\u62ec\u8282\u70b9\u7684\u5b50\u5b59\u8282\u70b9"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"print(ele.xpath('//li[@class=\"item-0\"]/preceding::li'))  # \u83b7\u53d6li\u524d\u9762\u7684\u6240\u6709\u8282\u70b9\u4e2d\u7684li\nfor e in ele.xpath('//li[@class=\"item-0\"]/preceding::li'):\n    print(etree.tostring(e))  # \u5c06\u5143\u7d20\u5bf9\u8c61\u8f6c\u6362\u4e3a\u5b57\u7b26\u4e32\uff0c\u65b9\u4fbf\u67e5\u770b\u83b7\u53d6\u5230\u4e86\u4ec0\u4e48\n")),(0,i.kt)("h2",{id:"11-following-sibling\u9009\u53d6\u5f53\u524d\u8282\u70b9\u4e4b\u540e\u7684\u6240\u6709\u540c\u7ea7\u8282\u70b9"},"11. following-sibling\uff1a\u9009\u53d6\u5f53\u524d\u8282\u70b9\u4e4b\u540e\u7684\u6240\u6709\u540c\u7ea7\u8282\u70b9"),(0,i.kt)("p",null,"\u6ce8\u610f\u8ddffollowing\u7684\u533a\u522b\u662f\uff1afollowing-sibling\u53ea\u80fd\u5339\u914d\u540c\u7ea7\u8282\u70b9"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"print(ele.xpath('//li[@class=\"item-0\"]/following-sibling::li'))  # \u83b7\u53d6li\u540e\u9762\u6240\u6709\u540c\u7ea7\u8282\u70b9\u4e2d\u7684li\n")),(0,i.kt)("h2",{id:"12-preceding-sibling\u9009\u53d6\u5f53\u524d\u8282\u70b9\u4e4b\u524d\u7684\u6240\u6709\u540c\u7ea7\u8282\u70b9"},"12. preceding-sibling\uff1a\u9009\u53d6\u5f53\u524d\u8282\u70b9\u4e4b\u524d\u7684\u6240\u6709\u540c\u7ea7\u8282\u70b9"),(0,i.kt)("p",null,"\u6ce8\u610f\u8ddfpreceding\u7684\u533a\u522b\u662f\uff1apreceding-sibling\u53ea\u80fd\u5339\u914d\u540c\u7ea7\u8282\u70b9"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"print(ele.xpath('//li[@class=\"item-0\"]/preceding-sibling::li'))  # \u83b7\u53d6li\u524d\u9762\u6240\u6709\u540c\u7ea7\u8282\u70b9\u4e2d\u7684li\n")),(0,i.kt)("h2",{id:"13-position\u5b9a\u4f4d"},"13. position\uff1a\u5b9a\u4f4d"),(0,i.kt)("p",null,"\u9009\u62e9\u5076\u6570\u9879\uff1a","[position()=(position() mod 2 = 0)]"),(0,i.kt)("p",null,"\u9009\u62e9\u5947\u6570\u9879\uff1a","[position()=(position() mod 2 != 0)]"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"ele.xpath('//li[1]') # \u9009\u62e9\u7b2c\u4e00\u4e2ali\nele.xpath('//li[position()<3]') # \u9009\u62e9\u5b9a\u4f4d\u5c0f\u4e8e3\u7684li\nele.xpath('//li[position()<6 and position()>3]') # \u9009\u62e9\u5b9a\u4f4d\u5927\u4e8e3\u5c0f\u4e8e6\u7684li\nele.xpath('//li[last()]') # \u9009\u62e9\u6700\u540e\u4e00\u4e2ali\nele.xpath('//li[last()-2]') # \u9009\u62e9\u5012\u6570\u7b2c\u4e09\u4e2ali\n# \u91cd\u70b9\uff1a\u5339\u914d\u5947\u6570\u9879\u548c\u5076\u6570\u9879\nele.xpath('//tr/td[position()=(position() mod 2 = 0)]') # \u5339\u914dtr\u4e0b\u9762\u6240\u6709\u7684\u5076\u6570\u4e2atd\nele.xpath('//tr/td[position()=(position() mod 2 != 0)]') # \u5339\u914dtr\u4e0b\u9762\u6240\u6709\u7684\u5947\u6570\u4e2atd\n")),(0,i.kt)("h2",{id:"14-contains\u5305\u542b"},"14. contains\uff1a\u5305\u542b"),(0,i.kt)("p",null,"\u9009\u62e9\u6587\u672c\u4e2d\u6216\u5c5e\u6027\u4e2d\u5305\u542b\u67d0\u4e9b\u5185\u5bb9\u7684\u5143\u7d20"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"ele.xpath('//*[contains(text(),\"123\")]') # \u9009\u62e9\u6240\u6709\u6587\u672c\u4e2d\u5305\u542b123\u7684\u8282\u70b9\nele.xpath('//*[contains(@href, \"test\")]')  # \u9009\u62e9\u6240\u6709\u5c5e\u6027href\u4e2d\u5305\u542btest\u7684\u8282\u70b9\n")),(0,i.kt)("h2",{id:"15-starts-with\u4ee5\u5f00\u59cb"},"15. starts-with\uff1a\u4ee5...\u5f00\u59cb"),(0,i.kt)("p",null,"\u9009\u62e9\u6587\u672c\u4e2d\u6216\u5c5e\u6027\u4e2d\u4ee5\u67d0\u4e9b\u5185\n\u5bb9\u5f00\u59cb\u7684\u5143\u7d20"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"ele.xpath('//li[starts-with(@class,\"test\")]')  # \u5339\u914d\u7c7b\u540d\u4ee5test\u5f00\u5934\u7684li\n")),(0,i.kt)("h2",{id:"16-count\u7edf\u8ba1\u8282\u70b9\u4e0b\u7684\u67d0\u4e2a\u5b50\u8282\u70b9\u6570\u91cf"},"16. count\uff1a\u7edf\u8ba1\u8282\u70b9\u4e0b\u7684\u67d0\u4e2a\u5b50\u8282\u70b9\u6570\u91cf"),(0,i.kt)("p",null,"\u9009\u62e9\u5f53\u524d\u8282\u70b9\u4e0b\u67d0\u4e2a\u5b50\u8282\u70b9\u6570\u91cf\u4e3a\u591a\u5c11\u7684\u5143\u7d20"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"ele.xpath('//ul[count(li)>10]')  # \u83b7\u53d6\u5b50\u8282\u70b9li\u6570\u91cf\u8d85\u8fc710\u4e2a\u7684ul\n")),(0,i.kt)("h2",{id:"17-not\u975e"},"17. not\uff1a\u975e"),(0,i.kt)("p",null,"\u9009\u62e9\u6ca1\u6709\u67d0\u4e2a\u5c5e\u6027\u503c\u7684\u5143\u7d20"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"ele.xpath('//li[not(@data)]')  # \u83b7\u53d6\u6240\u6709\u6ca1\u6709data\u5c5e\u6027\u7684li\n")),(0,i.kt)("h2",{id:"18-\u591a\u6761\u4ef6\u5339\u914dorand"},"18. \u591a\u6761\u4ef6\u5339\u914dor/and"),(0,i.kt)("p",null,"\u5f53\u4f60\u7684\u5e72\u6270\u56e0\u7d20\u8f83\u591a\u65f6\uff0c\u4f60\u9700\u8981\u591a\u6761\u4ef6\u7cbe\u786e\u5339\u914d\u60f3\u8981\u7684\u5143\u7d20"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'ele.xpath(\'//li[@data="24" or @code="55"]\')  # \u5339\u914d\u6ee1\u8db3\u81f3\u5c11\u4e00\u4e2a\u6761\u4ef6\u7684\u8282\u70b9\nele.xpath(\'//li[@data="24"]/text() | //li[@code="55"]/text()\')  # \u6216\u8005\u662f\u5339\u914d\u591a\u4e2a\u6761\u4ef6\n\nele.xpath(\'//li[@data="24" and @code="55"]\')  # \u5339\u914d\u540c\u65f6\u6ee1\u8db3\u6761\u4ef6\u7684\u8282\u70b9\n')),(0,i.kt)("h2",{id:"19\u83b7\u53d6\u6587\u672c"},"19.\u83b7\u53d6\u6587\u672c"),(0,i.kt)("p",null,"/text() \u83b7\u53d6\u5f53\u524d\u8282\u70b9\u6587\u672c\uff0c\u4e0d\u5305\u62ec\u5b50\u5b59\u8282\u70b9\uff1b"),(0,i.kt)("p",null,"//text() \u83b7\u53d6\u5f53\u524d\u8282\u70b9\u548c\u5b50\u5b59\u8282\u70b9\u7684\u6587\u672c\uff0c\u82e5\u6709\u591a\u4e2a\uff0c\u8fd4\u56de\u591a\u4e2a\u5b57\u7b26\u4e32\u7684\u5217\u8868\uff1b"),(0,i.kt)("p",null,"string() \u83b7\u53d6\u5339\u914d\u7b2c\u4e00\u4e2a\u8282\u70b9\u7684\u6240\u6709\u6587\u672c\uff08\u5305\u62ec\u5b50\u5b59\u8282\u70b9\uff09"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python3"},"ele.xpath('//li[@class=\"item-0\"]/a/text()')\nele.xpath('//li[@class=\"item-0\"]//text()')\nele.xpath('string(//li[@class=\"item-0\"])')\n")),(0,i.kt)("h2",{id:"20-\u83b7\u53d6\u5c5e\u6027\u503c"},"20. \u83b7\u53d6\u5c5e\u6027\u503c"),(0,i.kt)("p",null,"/@\u5c5e\u6027\u540d \u83b7\u53d6\u5f53\u524d\u5c5e\u6027\u7684\u5c5e\u6027\u503c\uff0c\u4e0d\u5305\u62ec\u5b50\u5b59\u8282\u70b9\uff1b"),(0,i.kt)("p",null,"//@\u5c5e\u6027\u540d \u83b7\u53d6\u5f53\u524d\u5c5e\u6027\u548c\u5b50\u5b59\u5c5e\u6027\u7684\u5c5e\u6027\u503c\uff0c\u82e5\u6709\u591a\u4e2a\uff0c\u8fd4\u56de\u591a\u4e2a\u5b57\u7b26\u4e32\u7684\u5217\u8868\uff1b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ele.xpath('//li[@class=\"item-0\"]/a/@id')\nele.xpath('//li[@class=\"item-0\"]//@id')\n")))}h.isMDXComponent=!0}}]);