"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[580],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,v=d["".concat(p,".").concat(f)]||d[f]||c[f]||a;return n?r.createElement(v,i(i({ref:t},s),{},{components:n})):r.createElement(v,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84302:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],l={sidebar_position:3},p=void 0,u={unversionedId:"Hadoop/Hive/Hive\u5e38\u7528\u4ea4\u4e92\u547d\u4ee4",id:"Hadoop/Hive/Hive\u5e38\u7528\u4ea4\u4e92\u547d\u4ee4",title:"Hive\u5e38\u7528\u4ea4\u4e92\u547d\u4ee4",description:"1. help\uff1a",source:"@site/docs\\8-Hadoop\\9-Hive\\Hive\u5e38\u7528\u4ea4\u4e92\u547d\u4ee4.md",sourceDirName:"8-Hadoop/9-Hive",slug:"/Hadoop/Hive/Hive\u5e38\u7528\u4ea4\u4e92\u547d\u4ee4",permalink:"/learn/Hadoop/Hive/Hive\u5e38\u7528\u4ea4\u4e92\u547d\u4ee4",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Hive\u5b89\u88c5",permalink:"/learn/Hadoop/Hive/Hive\u5b89\u88c5"},next:{title:"Hive\u6570\u636e\u7c7b\u578b",permalink:"/learn/Hadoop/Hive/Hive\u6570\u636e\u7c7b\u578b"}},s={},c=[{value:"1. help\uff1a",id:"1-help",level:2},{value:"2. e\uff1a",id:"2-e",level:2},{value:"3. f\uff1a",id:"3-f",level:2}],d={toc:c};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-help"},"1. help\uff1a"),(0,a.kt)("p",null,"\u67e5\u770b\u5e2e\u52a9\u6587\u6863"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[jellyrain@hadoop101 ~]$ hive -help\nwhich: no hbase in (/usr/local/bin:/usr/bin:/usr/local/sbin:/usr/sbin:/opt/module/jdk1.8.0_212/bin:/opt/module/hadoop-3.1.3/bin:/opt/module/hadoop-3.1.3/sbin:/opt/module/hive/bin:/home/jellyrain/.local/bin:/home/jellyrain/bin)\nHive Session ID = 3c6c80b5-4378-4bbd-b0d2-fda4f1056b2e\nusage: hive\n -d,--define <key=value>          Variable substitution to apply to Hive\n                                  commands. e.g. -d A=B or --define A=B\n    --database <databasename>     Specify the database to use\n -e <quoted-query-string>         SQL from command line\n -f <filename>                    SQL from files\n -H,--help                        Print help information\n    --hiveconf <property=value>   Use value for given property\n    --hivevar <key=value>         Variable substitution to apply to Hive\n                                  commands. e.g. --hivevar A=B\n -i <filename>                    Initialization SQL file\n -S,--silent                      Silent mode in interactive shell\n -v,--verbose                     Verbose mode (echo executed SQL to the\n                                  console)\n")),(0,a.kt)("h2",{id:"2-e"},"2. e\uff1a"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4e0d\u8fdb\u5165hive\u7684\u4ea4\u4e92\u7a97\u53e3\u6267\u884csql\u8bed\u53e5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'hive -e "select id from student;"\n')),(0,a.kt)("h2",{id:"3-f"},"3. f\uff1a"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6267\u884c sql\u6587\u4ef6 \u4e2d sql\u8bed\u53e5")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6267\u884c\u6587\u4ef6\u4e2d\u7684sql\u8bed\u53e5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"hive -f /opt/module/hive/datas/xxx.sql\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u6267\u884c\u6587\u4ef6\u4e2d\u7684sql\u8bed\u53e5\u5e76\u5c06\u7ed3\u679c\u5199\u5165\u6587\u4ef6\u4e2d")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"hive -f /opt/module/hive/datas/xxx.sql  > /opt/module/datas/xxx.txt\n")))}f.isMDXComponent=!0}}]);