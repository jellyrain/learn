"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9444],{3905:function(e,n,a){a.d(n,{Zo:function(){return s},kt:function(){return d}});var r=a(67294);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var c=r.createContext({}),p=function(e){var n=r.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=t,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return a?r.createElement(h,i(i({ref:n},s),{},{components:a})):r.createElement(h,i({ref:n},s))}));function d(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:t,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},93528:function(e,n,a){a.r(n),a.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=a(83117),t=a(80102),o=(a(67294),a(3905)),i=["components"],l={sidebar_position:4},c=void 0,p={unversionedId:"Hadoop/Yarn/Yarn\u6848\u4f8b\u5b9e\u64cd",id:"Hadoop/Yarn/Yarn\u6848\u4f8b\u5b9e\u64cd",title:"Yarn\u6848\u4f8b\u5b9e\u64cd",description:"1. Yarn\u751f\u4ea7\u73af\u5883\u6838\u5fc3\u53c2\u6570\uff1a",source:"@site/docs\\8-Hadoop\\7-Yarn\\Yarn\u6848\u4f8b\u5b9e\u64cd.md",sourceDirName:"8-Hadoop/7-Yarn",slug:"/Hadoop/Yarn/Yarn\u6848\u4f8b\u5b9e\u64cd",permalink:"/learn/Hadoop/Yarn/Yarn\u6848\u4f8b\u5b9e\u64cd",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Yarn\u5e38\u7528\u547d\u4ee4",permalink:"/learn/Hadoop/Yarn/Yarn\u5e38\u7528\u547d\u4ee4"},next:{title:"Yarn\u7684Tool\u63a5\u53e3\u6848\u4f8b",permalink:"/learn/Hadoop/Yarn/Yarn\u7684Tool\u63a5\u53e3\u6848\u4f8b"}},s={},u=[{value:"1. Yarn\u751f\u4ea7\u73af\u5883\u6838\u5fc3\u53c2\u6570\uff1a",id:"1-yarn\u751f\u4ea7\u73af\u5883\u6838\u5fc3\u53c2\u6570",level:2},{value:"2. Yarn\u751f\u4ea7\u73af\u5883\u6838\u5fc3\u53c2\u6570\u914d\u7f6e\u6848\u4f8b\uff1a",id:"2-yarn\u751f\u4ea7\u73af\u5883\u6838\u5fc3\u53c2\u6570\u914d\u7f6e\u6848\u4f8b",level:2},{value:"\u4fee\u6539yarn-site.xml\u914d\u7f6e\u53c2\u6570\uff1a",id:"\u4fee\u6539yarn-sitexml\u914d\u7f6e\u53c2\u6570",level:3},{value:"\u5173\u95ed\u865a\u62df\u5185\u5b58\u68c0\u67e5\u539f\u56e0\uff1a",id:"\u5173\u95ed\u865a\u62df\u5185\u5b58\u68c0\u67e5\u539f\u56e0",level:3},{value:"3. \u5bb9\u91cf\u8c03\u5ea6\u5668\u591a\u961f\u5217\u63d0\u4ea4\u6848\u4f8b\uff1a",id:"3-\u5bb9\u91cf\u8c03\u5ea6\u5668\u591a\u961f\u5217\u63d0\u4ea4\u6848\u4f8b",level:2},{value:"1. \u914d\u7f6e\u591a\u961f\u5217\u7684\u5bb9\u91cf\u8c03\u5ea6\u5668\uff1a",id:"1-\u914d\u7f6e\u591a\u961f\u5217\u7684\u5bb9\u91cf\u8c03\u5ea6\u5668",level:3},{value:"1. \u5728capacity-scheduler.xml\u4e2d\u914d\u7f6e\uff1a",id:"1-\u5728capacity-schedulerxml\u4e2d\u914d\u7f6e",level:4},{value:"2. \u5206\u53d1\u914d\u7f6e\u6587\u4ef6",id:"2-\u5206\u53d1\u914d\u7f6e\u6587\u4ef6",level:4},{value:"3. \u91cd\u542f Yarn \u6216\u8005\u6267\u884c <code>yarn rmadmin -refreshQueues</code> \u5237\u65b0\u961f\u5217\uff0c\u5c31\u53ef\u4ee5\u770b\u5230\u4e24\u6761\u961f\u5217",id:"3-\u91cd\u542f-yarn-\u6216\u8005\u6267\u884c-yarn-rmadmin--refreshqueues-\u5237\u65b0\u961f\u5217\u5c31\u53ef\u4ee5\u770b\u5230\u4e24\u6761\u961f\u5217",level:4},{value:"2. \u5411Hive\u961f\u5217\u63d0\u4ea4\u4efb\u52a1\uff1a",id:"2-\u5411hive\u961f\u5217\u63d0\u4ea4\u4efb\u52a1",level:3},{value:"1. hadoop jar \u7684\u65b9\u5f0f\uff1a",id:"1-hadoop-jar-\u7684\u65b9\u5f0f",level:4},{value:"2. \u6253 jar \u5305\u7684\u65b9\u5f0f\uff1a",id:"2-\u6253-jar-\u5305\u7684\u65b9\u5f0f",level:4},{value:"3. \u4efb\u52a1\u4f18\u5148\u7ea7\uff1a",id:"3-\u4efb\u52a1\u4f18\u5148\u7ea7",level:3},{value:"1. \u4fee\u6539yarn-site.xml\u6587\u4ef6\uff0c\u589e\u52a0\u4ee5\u4e0b\u53c2\u6570\uff1a",id:"1-\u4fee\u6539yarn-sitexml\u6587\u4ef6\u589e\u52a0\u4ee5\u4e0b\u53c2\u6570",level:4},{value:"2. \u5206\u53d1\u914d\u7f6e\uff0c\u5e76\u91cd\u542f Yarn\uff1a",id:"2-\u5206\u53d1\u914d\u7f6e\u5e76\u91cd\u542f-yarn",level:4},{value:"3. \u6a21\u62df\u8d44\u6e90\u7d27\u5f20\u73af\u5883\uff0c\u53ef\u8fde\u7eed\u63d0\u4ea4\u4ee5\u4e0b\u4efb\u52a1\uff0c\u76f4\u5230\u65b0\u63d0\u4ea4\u7684\u4efb\u52a1\u7533\u8bf7\u4e0d\u5230\u8d44\u6e90\u4e3a\u6b62\uff1a",id:"3-\u6a21\u62df\u8d44\u6e90\u7d27\u5f20\u73af\u5883\u53ef\u8fde\u7eed\u63d0\u4ea4\u4ee5\u4e0b\u4efb\u52a1\u76f4\u5230\u65b0\u63d0\u4ea4\u7684\u4efb\u52a1\u7533\u8bf7\u4e0d\u5230\u8d44\u6e90\u4e3a\u6b62",level:3},{value:"pi \u5e95\u5c42\u539f\u7406\uff1a",id:"pi-\u5e95\u5c42\u539f\u7406",level:4},{value:"4. \u518d\u6b21\u91cd\u65b0\u63d0\u4ea4\u4f18\u5148\u7ea7\u9ad8\u7684\u4efb\u52a1\uff1a",id:"4-\u518d\u6b21\u91cd\u65b0\u63d0\u4ea4\u4f18\u5148\u7ea7\u9ad8\u7684\u4efb\u52a1",level:3},{value:"5. \u4e5f\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u4fee\u6539\u6b63\u5728\u6267\u884c\u7684\u4efb\u52a1\u7684\u4f18\u5148\u7ea7\uff1a",id:"5-\u4e5f\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u4fee\u6539\u6b63\u5728\u6267\u884c\u7684\u4efb\u52a1\u7684\u4f18\u5148\u7ea7",level:3},{value:"4. \u516c\u5e73\u8c03\u5ea6\u5668\u6848\u4f8b\uff1a",id:"4-\u516c\u5e73\u8c03\u5ea6\u5668\u6848\u4f8b",level:2},{value:"1. \u914d\u7f6e\u591a\u961f\u5217\u7684\u516c\u5e73\u8c03\u5ea6\u5668\uff1a",id:"1-\u914d\u7f6e\u591a\u961f\u5217\u7684\u516c\u5e73\u8c03\u5ea6\u5668",level:3},{value:"1. \u4fee\u6539yarn-site.xml\u6587\u4ef6\uff0c\u52a0\u5165\u4ee5\u4e0b\u53c2\u6570\uff1a",id:"1-\u4fee\u6539yarn-sitexml\u6587\u4ef6\u52a0\u5165\u4ee5\u4e0b\u53c2\u6570",level:4},{value:"2. \u914d\u7f6efair-scheduler.xml\uff1a",id:"2-\u914d\u7f6efair-schedulerxml",level:4},{value:"3. \u5206\u53d1\u914d\u7f6e\u5e76\u91cd\u542fYarn\uff1a",id:"3-\u5206\u53d1\u914d\u7f6e\u5e76\u91cd\u542fyarn",level:4},{value:"4. \u6d4b\u8bd5\u63d0\u4ea4\u4efb\u52a1\uff1a",id:"4-\u6d4b\u8bd5\u63d0\u4ea4\u4efb\u52a1",level:4}],m={toc:u};function d(e){var n=e.components,l=(0,t.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,l,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-yarn\u751f\u4ea7\u73af\u5883\u6838\u5fc3\u53c2\u6570"},"1. Yarn\u751f\u4ea7\u73af\u5883\u6838\u5fc3\u53c2\u6570\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(15597).Z,width:"1330",height:"679"})),(0,o.kt)("h2",{id:"2-yarn\u751f\u4ea7\u73af\u5883\u6838\u5fc3\u53c2\u6570\u914d\u7f6e\u6848\u4f8b"},"2. Yarn\u751f\u4ea7\u73af\u5883\u6838\u5fc3\u53c2\u6570\u914d\u7f6e\u6848\u4f8b\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(97578).Z,width:"1357",height:"379"})),(0,o.kt)("h3",{id:"\u4fee\u6539yarn-sitexml\u914d\u7f6e\u53c2\u6570"},"\u4fee\u6539yarn-site.xml\u914d\u7f6e\u53c2\u6570\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- \u9009\u62e9\u8c03\u5ea6\u5668\uff0c\u9ed8\u8ba4\u5bb9\u91cf --\x3e\n<property>\n    <description>The class to use as the resource scheduler.</description>\n    <name>yarn.resourcemanager.scheduler.class</name>\n    <value>org.apache.hadoop.yarn.server.resourcemanager.scheduler.capacity.CapacityScheduler</value>\n</property>\n\n\x3c!-- ResourceManager\u5904\u7406\u8c03\u5ea6\u5668\u8bf7\u6c42\u7684\u7ebf\u7a0b\u6570\u91cf,\u9ed8\u8ba450\uff1b\u5982\u679c\u63d0\u4ea4\u7684\u4efb\u52a1\u6570\u5927\u4e8e50\uff0c\u53ef\u4ee5\u589e\u52a0\u8be5\u503c\uff0c\u4f46\u662f\u4e0d\u80fd\u8d85\u8fc73\u53f0 * 4\u7ebf\u7a0b = 12\u7ebf\u7a0b\uff08\u53bb\u9664\u5176\u4ed6\u5e94\u7528\u7a0b\u5e8f\u5b9e\u9645\u4e0d\u80fd\u8d85\u8fc78\uff09 --\x3e\n<property>\n    <description>Number of threads to handle scheduler interface.</description>\n    <name>yarn.resourcemanager.scheduler.client.thread-count</name>\n    <value>8</value>\n</property>\n\n\x3c!-- \u662f\u5426\u8ba9yarn\u81ea\u52a8\u68c0\u6d4b\u786c\u4ef6\u8fdb\u884c\u914d\u7f6e\uff0c\u9ed8\u8ba4\u662ffalse\uff0c\u5982\u679c\u8be5\u8282\u70b9\u6709\u5f88\u591a\u5176\u4ed6\u5e94\u7528\u7a0b\u5e8f\uff0c\u5efa\u8bae\u624b\u52a8\u914d\u7f6e\u3002\u5982\u679c\u8be5\u8282\u70b9\u6ca1\u6709\u5176\u4ed6\u5e94\u7528\u7a0b\u5e8f\uff0c\u53ef\u4ee5\u91c7\u7528\u81ea\u52a8 --\x3e\n<property>\n    <description>Enable auto-detection of node capabilities such as\n    memory and CPU.\n    </description>\n    <name>yarn.nodemanager.resource.detect-hardware-capabilities</name>\n    <value>false</value>\n</property>\n\n\x3c!-- \u662f\u5426\u5c06\u865a\u62df\u6838\u6570\u5f53\u4f5cCPU\u6838\u6570\uff0c\u9ed8\u8ba4\u662ffalse\uff0c\u91c7\u7528\u7269\u7406CPU\u6838\u6570 --\x3e\n<property>\n    <description>Flag to determine if logical processors(such as\n    hyperthreads) should be counted as cores. Only applicable on Linux\n    when yarn.nodemanager.resource.cpu-vcores is set to -1 and\n    yarn.nodemanager.resource.detect-hardware-capabilities is true.\n    </description>\n    <name>yarn.nodemanager.resource.count-logical-processors-as-cores</name>\n    <value>false</value>\n</property>\n\n\x3c!-- \u865a\u62df\u6838\u6570\u548c\u7269\u7406\u6838\u6570\u4e58\u6570\uff0c\u9ed8\u8ba4\u662f1.0 --\x3e\n<property>\n    <description>Multiplier to determine how to convert phyiscal cores to\n    vcores. This value is used if yarn.nodemanager.resource.cpu-vcores\n    is set to -1(which implies auto-calculate vcores) and\n    yarn.nodemanager.resource.detect-hardware-capabilities is set to true. The  number of vcores will be calculated as  number of CPUs * multiplier.\n    </description>\n    <name>yarn.nodemanager.resource.pcores-vcores-multiplier</name>\n    <value>1.0</value>\n</property>\n\n\x3c!-- NodeManager\u4f7f\u7528\u5185\u5b58\u6570\uff0c\u9ed8\u8ba48G\uff0c\u4fee\u6539\u4e3a4G\u5185\u5b58 --\x3e\n<property>\n    <description>Amount of physical memory, in MB, that can be allocated \n    for containers. If set to -1 and\n    yarn.nodemanager.resource.detect-hardware-capabilities is true, it is\n    automatically calculated(in case of Windows and Linux).\n    In other cases, the default is 8192MB.\n    </description>\n    <name>yarn.nodemanager.resource.memory-mb</name>\n    <value>4096</value>\n</property>\n\n\x3c!-- nodemanager\u7684CPU\u6838\u6570\uff0c\u4e0d\u6309\u7167\u786c\u4ef6\u73af\u5883\u81ea\u52a8\u8bbe\u5b9a\u65f6\u9ed8\u8ba4\u662f8\u4e2a\uff0c\u4fee\u6539\u4e3a4\u4e2a --\x3e\n<property>\n    <description>Number of vcores that can be allocated\n    for containers. This is used by the RM scheduler when allocating\n    resources for containers. This is not used to limit the number of\n    CPUs used by YARN containers. If it is set to -1 and\n    yarn.nodemanager.resource.detect-hardware-capabilities is true, it is\n    automatically determined from the hardware in case of Windows and Linux.\n    In other cases, number of vcores is 8 by default.</description>\n    <name>yarn.nodemanager.resource.cpu-vcores</name>\n    <value>4</value>\n</property>\n\n\x3c!-- \u5bb9\u5668\u6700\u5c0f\u5185\u5b58\uff0c\u9ed8\u8ba41G --\x3e\n<property>\n    <description>The minimum allocation for every container request at the RM   in MBs. Memory requests lower than this will be set to the value of this    property. Additionally, a node manager that is configured to have less memory   than this value will be shut down by the resource manager.\n    </description>\n    <name>yarn.scheduler.minimum-allocation-mb</name>\n    <value>1024</value>\n</property>\n\n\x3c!-- \u5bb9\u5668\u6700\u5927\u5185\u5b58\uff0c\u9ed8\u8ba48G\uff0c\u4fee\u6539\u4e3a2G --\x3e\n<property>\n    <description>The maximum allocation for every container request at the RM   in MBs. Memory requests higher than this will throw an  InvalidResourceRequestException.\n    </description>\n    <name>yarn.scheduler.maximum-allocation-mb</name>\n    <value>2048</value>\n</property>\n\n\x3c!-- \u5bb9\u5668\u6700\u5c0fCPU\u6838\u6570\uff0c\u9ed8\u8ba41\u4e2a --\x3e\n<property>\n    <description>The minimum allocation for every container request at the RM   in terms of virtual CPU cores. Requests lower than this will be set to the  value of this property. Additionally, a node manager that is configured to  have fewer virtual cores than this value will be shut down by the resource  manager.\n    </description>\n    <name>yarn.scheduler.minimum-allocation-vcores</name>\n    <value>1</value>\n</property>\n\n\x3c!-- \u5bb9\u5668\u6700\u5927CPU\u6838\u6570\uff0c\u9ed8\u8ba44\u4e2a\uff0c\u4fee\u6539\u4e3a2\u4e2a --\x3e\n<property>\n    <description>The maximum allocation for every container request at the RM   in terms of virtual CPU cores. Requests higher than this will throw an\n    InvalidResourceRequestException.</description>\n    <name>yarn.scheduler.maximum-allocation-vcores</name>\n    <value>2</value>\n</property>\n\n\x3c!-- \u865a\u62df\u5185\u5b58\u68c0\u67e5\uff0c\u9ed8\u8ba4\u6253\u5f00\uff0c\u4fee\u6539\u4e3a\u5173\u95ed --\x3e\n\x3c!-- \u89e3\u51b3 CentOS7 \u548c Java8 \u865a\u62df\u5185\u5b58\u4e0d\u5171\u7528\u95ee\u9898 --\x3e\n<property>\n    <description>Whether virtual memory limits will be enforced for\n    containers.</description>\n    <name>yarn.nodemanager.vmem-check-enabled</name>\n    <value>false</value>\n</property>\n\n\x3c!-- \u865a\u62df\u5185\u5b58\u548c\u7269\u7406\u5185\u5b58\u8bbe\u7f6e\u6bd4\u4f8b,\u9ed8\u8ba42.1 --\x3e\n<property>\n    <description>Ratio between virtual memory to physical memory when   setting memory limits for containers. Container allocations are expressed in terms of physical memory, and virtual memory usage is allowed to exceed this allocation by this ratio.\n    </description>\n    <name>yarn.nodemanager.vmem-pmem-ratio</name>\n    <value>2.1</value>\n</property>\n")),(0,o.kt)("h3",{id:"\u5173\u95ed\u865a\u62df\u5185\u5b58\u68c0\u67e5\u539f\u56e0"},"\u5173\u95ed\u865a\u62df\u5185\u5b58\u68c0\u67e5\u539f\u56e0\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(64041).Z,width:"1046",height:"423"})),(0,o.kt)("h2",{id:"3-\u5bb9\u91cf\u8c03\u5ea6\u5668\u591a\u961f\u5217\u63d0\u4ea4\u6848\u4f8b"},"3. \u5bb9\u91cf\u8c03\u5ea6\u5668\u591a\u961f\u5217\u63d0\u4ea4\u6848\u4f8b\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(8865).Z,width:"1426",height:"732"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u9700\u6c42\uff1a")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(83024).Z,width:"1357",height:"260"})),(0,o.kt)("h3",{id:"1-\u914d\u7f6e\u591a\u961f\u5217\u7684\u5bb9\u91cf\u8c03\u5ea6\u5668"},"1. \u914d\u7f6e\u591a\u961f\u5217\u7684\u5bb9\u91cf\u8c03\u5ea6\u5668\uff1a"),(0,o.kt)("h4",{id:"1-\u5728capacity-schedulerxml\u4e2d\u914d\u7f6e"},"1. \u5728capacity-scheduler.xml\u4e2d\u914d\u7f6e\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u4fee\u6539\u5982\u4e0b\u914d\u7f6e\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- \u6307\u5b9a\u591a\u961f\u5217\uff0c\u589e\u52a0hive\u961f\u5217 --\x3e\n<property>\n    <name>yarn.scheduler.capacity.root.queues</name>\n    <value>default,hive</value>\n    <description>\n      The queues at the this level (root is the root queue).\n    </description>\n</property>\n\n\x3c!-- \u964d\u4f4edefault\u961f\u5217\u8d44\u6e90\u989d\u5b9a\u5bb9\u91cf\u4e3a40%\uff0c\u9ed8\u8ba4100% --\x3e\n<property>\n    <name>yarn.scheduler.capacity.root.default.capacity</name>\n    <value>40</value>\n</property>\n\n\x3c!-- \u964d\u4f4edefault\u961f\u5217\u8d44\u6e90\u6700\u5927\u5bb9\u91cf\u4e3a60%\uff0c\u9ed8\u8ba4100% --\x3e\n<property>\n    <name>yarn.scheduler.capacity.root.default.maximum-capacity</name>\n    <value>60</value>\n</property>\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u4e3a\u65b0\u52a0\u961f\u5217\u6dfb\u52a0\u5fc5\u8981\u5c5e\u6027\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- \u6307\u5b9ahive\u961f\u5217\u7684\u8d44\u6e90\u989d\u5b9a\u5bb9\u91cf --\x3e\n<property>\n    <name>yarn.scheduler.capacity.root.hive.capacity</name>\n    <value>60</value>\n</property>\n\n\x3c!-- \u7528\u6237\u6700\u591a\u53ef\u4ee5\u4f7f\u7528\u961f\u5217\u591a\u5c11\u8d44\u6e90\uff0c1\u8868\u793a --\x3e\n<property>\n    <name>yarn.scheduler.capacity.root.hive.user-limit-factor</name>\n    <value>1</value>\n</property>\n\n\x3c!-- \u6307\u5b9ahive\u961f\u5217\u7684\u8d44\u6e90\u6700\u5927\u5bb9\u91cf --\x3e\n<property>\n    <name>yarn.scheduler.capacity.root.hive.maximum-capacity</name>\n    <value>80</value>\n</property>\n\n\x3c!-- \u542f\u52a8hive\u961f\u5217 --\x3e\n<property>\n    <name>yarn.scheduler.capacity.root.hive.state</name>\n    <value>RUNNING</value>\n</property>\n\n\x3c!-- \u54ea\u4e9b\u7528\u6237\u6709\u6743\u5411\u961f\u5217\u63d0\u4ea4\u4f5c\u4e1a --\x3e\n<property>\n    <name>yarn.scheduler.capacity.root.hive.acl_submit_applications</name>\n    <value>*</value>\n</property>\n\n\x3c!-- \u54ea\u4e9b\u7528\u6237\u6709\u6743\u64cd\u4f5c\u961f\u5217\uff0c\u7ba1\u7406\u5458\u6743\u9650\uff08\u67e5\u770b/\u6740\u6b7b\uff09 --\x3e\n<property>\n    <name>yarn.scheduler.capacity.root.hive.acl_administer_queue</name>\n    <value>*</value>\n</property>\n\n\x3c!-- \u54ea\u4e9b\u7528\u6237\u6709\u6743\u914d\u7f6e\u63d0\u4ea4\u4efb\u52a1\u4f18\u5148\u7ea7 --\x3e\n<property>\n    <name>yarn.scheduler.capacity.root.hive.acl_application_max_priority</name>\n    <value>*</value>\n</property>\n\n\x3c!-- \u4efb\u52a1\u7684\u8d85\u65f6\u65f6\u95f4\u8bbe\u7f6e\uff1ayarn application -appId appId -updateLifetime Timeout\n\u53c2\u8003\u8d44\u6599\uff1ahttps://blog.cloudera.com/enforcing-application-lifetime-slas-yarn/ --\x3e\n\n\x3c!-- \u5982\u679capplication\u6307\u5b9a\u4e86\u8d85\u65f6\u65f6\u95f4\uff0c\u5219\u63d0\u4ea4\u5230\u8be5\u961f\u5217\u7684application\u80fd\u591f\u6307\u5b9a\u7684\u6700\u5927\u8d85\u65f6\u65f6\u95f4\u4e0d\u80fd\u8d85\u8fc7\u8be5\u503c\u3002 \n--\x3e\n<property>\n    <name>yarn.scheduler.capacity.root.hive.maximum-application-lifetime</name>\n    <value>-1</value>\n</property>\n\n\x3c!-- \u5982\u679capplication\u6ca1\u6307\u5b9a\u8d85\u65f6\u65f6\u95f4\uff0c\u5219\u7528default-application-lifetime\u4f5c\u4e3a\u9ed8\u8ba4\u503c --\x3e\n<property>\n    <name>yarn.scheduler.capacity.root.hive.default-application-lifetime</name>\n    <value>-1</value>\n</property>\n")),(0,o.kt)("h4",{id:"2-\u5206\u53d1\u914d\u7f6e\u6587\u4ef6"},"2. \u5206\u53d1\u914d\u7f6e\u6587\u4ef6"),(0,o.kt)("h4",{id:"3-\u91cd\u542f-yarn-\u6216\u8005\u6267\u884c-yarn-rmadmin--refreshqueues-\u5237\u65b0\u961f\u5217\u5c31\u53ef\u4ee5\u770b\u5230\u4e24\u6761\u961f\u5217"},"3. \u91cd\u542f Yarn \u6216\u8005\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"h4"},"yarn rmadmin -refreshQueues")," \u5237\u65b0\u961f\u5217\uff0c\u5c31\u53ef\u4ee5\u770b\u5230\u4e24\u6761\u961f\u5217"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn rmadmin -refreshQueues\n")),(0,o.kt)("h3",{id:"2-\u5411hive\u961f\u5217\u63d0\u4ea4\u4efb\u52a1"},"2. \u5411Hive\u961f\u5217\u63d0\u4ea4\u4efb\u52a1\uff1a"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8:  -D \u8868\u793a\u8fd0\u884c\u65f6\u6539\u53d8\u53c2\u6570\u503c")),(0,o.kt)("h4",{id:"1-hadoop-jar-\u7684\u65b9\u5f0f"},"1. hadoop jar \u7684\u65b9\u5f0f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"hadoop jar share/hadoop/mapreduce/hadoop-mapreduce-examples-3.1.3.jar wordcount -D mapreduce.job.queuename=hive /input /output\n")),(0,o.kt)("h4",{id:"2-\u6253-jar-\u5305\u7684\u65b9\u5f0f"},"2. \u6253 jar \u5305\u7684\u65b9\u5f0f\uff1a"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u7684\u4efb\u52a1\u63d0\u4ea4\u90fd\u662f\u63d0\u4ea4\u5230default\u961f\u5217\u7684\u3002\u5982\u679c\u5e0c\u671b\u5411\u5176\u4ed6\u961f\u5217\u63d0\u4ea4\u4efb\u52a1\uff0c\u9700\u8981\u5728Driver\u4e2d\u58f0\u660e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class WcDrvier {\n\n    public static void main(String[] args) throws IOException, ClassNotFoundException, InterruptedException {\n\n        Configuration conf = new Configuration();\n        \n        // \u4fee\u6539\u63d0\u4ea4\u7684\u961f\u5217\n        conf.set("mapreduce.job.queuename","hive");\n\n        //1. \u83b7\u53d6\u4e00\u4e2aJob\u5b9e\u4f8b\n        Job job = Job.getInstance(conf);\n\n        \u3002\u3002\u3002 \u3002\u3002\u3002\n\n        //6. \u63d0\u4ea4Job\n        boolean b = job.waitForCompletion(true);\n        System.exit(b ? 0 : 1);\n    }\n}\n')),(0,o.kt)("h3",{id:"3-\u4efb\u52a1\u4f18\u5148\u7ea7"},"3. \u4efb\u52a1\u4f18\u5148\u7ea7\uff1a"),(0,o.kt)("p",null,"\u5bb9\u91cf\u8c03\u5ea6\u5668\uff0c\u652f\u6301\u4efb\u52a1\u4f18\u5148\u7ea7\u7684\u914d\u7f6e\uff0c\u5728\u8d44\u6e90\u7d27\u5f20\u65f6\uff0c\u4f18\u5148\u7ea7\u9ad8\u7684\u4efb\u52a1\u5c06\u4f18\u5148\u83b7\u53d6\u8d44\u6e90\u3002\u9ed8\u8ba4\u60c5\u51b5\uff0cYarn\u5c06\u6240\u6709\u4efb\u52a1\u7684\u4f18\u5148\u7ea7\u9650\u5236\u4e3a0\uff0c\u82e5\u60f3\u4f7f\u7528\u4efb\u52a1\u7684\u4f18\u5148\u7ea7\u529f\u80fd\uff0c\u987b\u5f00\u653e\u8be5\u9650\u5236",(0,o.kt)("strong",{parentName:"p"},"\uff08\u4f18\u5148\u7ea7\u6570 \u8d8a\u9ad8 \u8d8a\u5148\uff09")),(0,o.kt)("h4",{id:"1-\u4fee\u6539yarn-sitexml\u6587\u4ef6\u589e\u52a0\u4ee5\u4e0b\u53c2\u6570"},"1. \u4fee\u6539yarn-site.xml\u6587\u4ef6\uff0c\u589e\u52a0\u4ee5\u4e0b\u53c2\u6570\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<property>\n    <name>yarn.cluster.max-application-priority</name>\n    \x3c!-- \u8bbe\u7f6e 5\u7ea7 \u4f18\u5148\u7ea7\u7b49\u7ea7 --\x3e\n    <value>5</value>\n</property>\n")),(0,o.kt)("h4",{id:"2-\u5206\u53d1\u914d\u7f6e\u5e76\u91cd\u542f-yarn"},"2. \u5206\u53d1\u914d\u7f6e\uff0c\u5e76\u91cd\u542f Yarn\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"xsync $HADOOP_HOME/etc/hadoop/yarn-site.xml\n\n$HADOOP_HOME/sbin/stop-yarn.sh\n\n$HADOOP_HOME/sbin/start-yarn.sh\n")),(0,o.kt)("h3",{id:"3-\u6a21\u62df\u8d44\u6e90\u7d27\u5f20\u73af\u5883\u53ef\u8fde\u7eed\u63d0\u4ea4\u4ee5\u4e0b\u4efb\u52a1\u76f4\u5230\u65b0\u63d0\u4ea4\u7684\u4efb\u52a1\u7533\u8bf7\u4e0d\u5230\u8d44\u6e90\u4e3a\u6b62"},"3. \u6a21\u62df\u8d44\u6e90\u7d27\u5f20\u73af\u5883\uff0c\u53ef\u8fde\u7eed\u63d0\u4ea4\u4ee5\u4e0b\u4efb\u52a1\uff0c\u76f4\u5230\u65b0\u63d0\u4ea4\u7684\u4efb\u52a1\u7533\u8bf7\u4e0d\u5230\u8d44\u6e90\u4e3a\u6b62\uff1a"),(0,o.kt)("p",null,"pi \u662f\u8ba1\u7b97\u5706\u5468\u7387\t\u6848\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"hadoop jar /opt/module/hadoop-3.1.3/share/hadoop/mapreduce/hadoop-mapreduce-examples-3.1.3.jar pi 5 2000000\n")),(0,o.kt)("p",null,"\u7b2c\u4e00\u4e2a\u53c2\u6570\uff1a\u662f\u8fd0\u884c \u591a\u5c11\u6b21 map\u4efb\u52a1"),(0,o.kt)("p",null,"\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff1a\u662f\u6bcf\u4e2amap\u4efb\u52a1\u6295\u63b7\u6b21\u6570"),(0,o.kt)("p",null,"\u4e0a\u8ff0\u6307\u4ee4 \u603b\u6295\u63b7\u6b21\u6570\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"5 * 2000000 = 10000000")),(0,o.kt)("h4",{id:"pi-\u5e95\u5c42\u539f\u7406"},"pi \u5e95\u5c42\u539f\u7406\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(41048).Z,width:"768",height:"670"})),(0,o.kt)("h3",{id:"4-\u518d\u6b21\u91cd\u65b0\u63d0\u4ea4\u4f18\u5148\u7ea7\u9ad8\u7684\u4efb\u52a1"},"4. \u518d\u6b21\u91cd\u65b0\u63d0\u4ea4\u4f18\u5148\u7ea7\u9ad8\u7684\u4efb\u52a1\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"hadoop jar /opt/module/hadoop-3.1.3/share/hadoop/mapreduce/hadoop-mapreduce-examples-3.1.3.jar pi  -D mapreduce.job.priority=5 5 2000000\n")),(0,o.kt)("h3",{id:"5-\u4e5f\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u4fee\u6539\u6b63\u5728\u6267\u884c\u7684\u4efb\u52a1\u7684\u4f18\u5148\u7ea7"},"5. \u4e5f\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u4fee\u6539\u6b63\u5728\u6267\u884c\u7684\u4efb\u52a1\u7684\u4f18\u5148\u7ea7\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn application -appID < Application Id > -updatePriority 5\n")),(0,o.kt)("h2",{id:"4-\u516c\u5e73\u8c03\u5ea6\u5668\u6848\u4f8b"},"4. \u516c\u5e73\u8c03\u5ea6\u5668\u6848\u4f8b\uff1a"),(0,o.kt)("p",null,"\u521b\u5efa\u4e24\u4e2a\u961f\u5217\uff0c\u5206\u522b\u662ftest\u548catguigu\uff08\u4ee5\u7528\u6237\u6240\u5c5e\u7ec4\u547d\u540d\uff09",(0,o.kt)("strong",{parentName:"p"},"\u671f\u671b\u5b9e\u73b0\u4ee5\u4e0b\u6548\u679c\uff1a\u82e5\u7528\u6237\u63d0\u4ea4\u4efb\u52a1\u65f6\u6307\u5b9a\u961f\u5217\uff0c\u5219\u4efb\u52a1\u63d0\u4ea4\u5230\u6307\u5b9a\u961f\u5217\u8fd0\u884c"),"\uff1b",(0,o.kt)("strong",{parentName:"p"},"\u82e5\u672a\u6307\u5b9a\u961f\u5217\uff0ctest\u7528\u6237\u63d0\u4ea4\u7684\u4efb\u52a1\u5230root.group.test\u961f\u5217\u8fd0\u884c\uff0catguigu\u63d0\u4ea4\u7684\u4efb\u52a1\u5230root.group.atguigu\u961f\u5217\u8fd0\u884c"),"\uff08\u6ce8\uff1agroup\u4e3a\u7528\u6237\u6240\u5c5e\u7ec4\uff09"),(0,o.kt)("p",null,"\u516c\u5e73\u8c03\u5ea6\u5668\u7684\u914d\u7f6e\u6d89\u53ca\u5230\u4e24\u4e2a\u6587\u4ef6\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u4e00\u4e2a\u662fyarn-site.xml\uff0c\u53e6\u4e00\u4e2a\u662f\u516c\u5e73\u8c03\u5ea6\u5668\u961f\u5217\u5206\u914d\u6587\u4ef6fair-scheduler.xml\uff08\u6587\u4ef6\u81ea\u5df1\u521b\u5efa\uff09")),(0,o.kt)("p",null,"\uff081\uff09\u914d\u7f6e\u6587\u4ef6\u53c2\u8003\u8d44\u6599\uff1a"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/r3.1.3/hadoop-yarn/hadoop-yarn-site/FairScheduler.html"},"https://hadoop.apache.org/docs/r3.1.3/hadoop-yarn/hadoop-yarn-site/FairScheduler.html")),(0,o.kt)("p",null,"\uff082\uff09\u4efb\u52a1\u961f\u5217\u653e\u7f6e\u89c4\u5219\u53c2\u8003\u8d44\u6599\uff1a"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://blog.cloudera.com/untangling-apache-hadoop-yarn-part-4-fair-scheduler-queue-basics/"},"https://blog.cloudera.com/untangling-apache-hadoop-yarn-part-4-fair-scheduler-queue-basics/")),(0,o.kt)("h3",{id:"1-\u914d\u7f6e\u591a\u961f\u5217\u7684\u516c\u5e73\u8c03\u5ea6\u5668"},"1. \u914d\u7f6e\u591a\u961f\u5217\u7684\u516c\u5e73\u8c03\u5ea6\u5668\uff1a"),(0,o.kt)("h4",{id:"1-\u4fee\u6539yarn-sitexml\u6587\u4ef6\u52a0\u5165\u4ee5\u4e0b\u53c2\u6570"},"1. \u4fee\u6539yarn-site.xml\u6587\u4ef6\uff0c\u52a0\u5165\u4ee5\u4e0b\u53c2\u6570\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<property>\n    <name>yarn.resourcemanager.scheduler.class</name>\n    <value>org.apache.hadoop.yarn.server.resourcemanager.scheduler.fair.FairScheduler</value>\n    <description>\u914d\u7f6e\u4f7f\u7528\u516c\u5e73\u8c03\u5ea6\u5668</description>\n</property>\n\n<property>\n    <name>yarn.scheduler.fair.allocation.file</name>\n    \x3c!-- \u8f93\u5165\u914d\u7f6e\u6587\u4ef6\u8def\u5f84 --\x3e\n    <value>/opt/module/hadoop-3.1.3/etc/hadoop/fair-scheduler.xml</value>\n    <description>\u6307\u660e\u516c\u5e73\u8c03\u5ea6\u5668\u961f\u5217\u5206\u914d\u914d\u7f6e\u6587\u4ef6</description>\n</property>\n\n<property>\n    <name>yarn.scheduler.fair.preemption</name>\n    <value>false</value>\n    <description>\u7981\u6b62\u961f\u5217\u95f4\u8d44\u6e90\u62a2\u5360</description>\n</property>\n")),(0,o.kt)("h4",{id:"2-\u914d\u7f6efair-schedulerxml"},"2. \u914d\u7f6efair-scheduler.xml\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0"?>\n<allocations>\n  \x3c!-- \u5355\u4e2a\u961f\u5217\u4e2dApplication Master\u5360\u7528\u8d44\u6e90\u7684\u6700\u5927\u6bd4\u4f8b,\u53d6\u503c0-1 \uff0c\u4f01\u4e1a\u4e00\u822c\u914d\u7f6e0.1 --\x3e\n  <queueMaxAMShareDefault>0.5</queueMaxAMShareDefault>\n  \x3c!-- \u5355\u4e2a\u961f\u5217\u6700\u5927\u8d44\u6e90\u7684\u9ed8\u8ba4\u503c test atguigu default --\x3e\n  <queueMaxResourcesDefault>4096mb,4vcores</queueMaxResourcesDefault>\n\n  \x3c!-- \u589e\u52a0\u4e00\u4e2a\u961f\u5217test --\x3e\n  <queue name="test">\n    \x3c!-- \u961f\u5217\u6700\u5c0f\u8d44\u6e90 --\x3e\n    <minResources>2048mb,2vcores</minResources>\n    \x3c!-- \u961f\u5217\u6700\u5927\u8d44\u6e90 --\x3e\n    <maxResources>4096mb,4vcores</maxResources>\n    \x3c!-- \u961f\u5217\u4e2d\u6700\u591a\u540c\u65f6\u8fd0\u884c\u7684\u5e94\u7528\u6570\uff0c\u9ed8\u8ba450\uff0c\u6839\u636e\u7ebf\u7a0b\u6570\u914d\u7f6e --\x3e\n    <maxRunningApps>4</maxRunningApps>\n    \x3c!-- \u961f\u5217\u4e2dApplication Master\u5360\u7528\u8d44\u6e90\u7684\u6700\u5927\u6bd4\u4f8b --\x3e\n    <maxAMShare>0.5</maxAMShare>\n    \x3c!-- \u8be5\u961f\u5217\u8d44\u6e90\u6743\u91cd,\u9ed8\u8ba4\u503c\u4e3a1.0 --\x3e\n    <weight>1.0</weight>\n    \x3c!-- \u961f\u5217\u5185\u90e8\u7684\u8d44\u6e90\u5206\u914d\u7b56\u7565 --\x3e\n    <schedulingPolicy>fair</schedulingPolicy>\n  </queue>\n  \x3c!-- \u589e\u52a0\u4e00\u4e2a\u961f\u5217atguigu --\x3e\n  <queue name="atguigu" type="parent">\n    \x3c!-- \u961f\u5217\u6700\u5c0f\u8d44\u6e90 --\x3e\n    <minResources>2048mb,2vcores</minResources>\n    \x3c!-- \u961f\u5217\u6700\u5927\u8d44\u6e90 --\x3e\n    <maxResources>4096mb,4vcores</maxResources>\n    \x3c!-- \u961f\u5217\u4e2d\u6700\u591a\u540c\u65f6\u8fd0\u884c\u7684\u5e94\u7528\u6570\uff0c\u9ed8\u8ba450\uff0c\u6839\u636e\u7ebf\u7a0b\u6570\u914d\u7f6e --\x3e\n    <maxRunningApps>4</maxRunningApps>\n    \x3c!-- \u961f\u5217\u4e2dApplication Master\u5360\u7528\u8d44\u6e90\u7684\u6700\u5927\u6bd4\u4f8b --\x3e\n    <maxAMShare>0.5</maxAMShare>\n    \x3c!-- \u8be5\u961f\u5217\u8d44\u6e90\u6743\u91cd,\u9ed8\u8ba4\u503c\u4e3a1.0 --\x3e\n    <weight>1.0</weight>\n    \x3c!-- \u961f\u5217\u5185\u90e8\u7684\u8d44\u6e90\u5206\u914d\u7b56\u7565 --\x3e\n    <schedulingPolicy>fair</schedulingPolicy>\n  </queue>\n\n  \x3c!-- \u4efb\u52a1\u961f\u5217\u5206\u914d\u7b56\u7565,\u53ef\u914d\u7f6e\u591a\u5c42\u89c4\u5219,\u4ece\u7b2c\u4e00\u4e2a\u89c4\u5219\u5f00\u59cb\u5339\u914d,\u76f4\u5230\u5339\u914d\u6210\u529f --\x3e\n  <queuePlacementPolicy>\n    \x3c!-- \u63d0\u4ea4\u4efb\u52a1\u65f6\u6307\u5b9a\u961f\u5217,\u5982\u672a\u6307\u5b9a\u63d0\u4ea4\u961f\u5217,\u5219\u7ee7\u7eed\u5339\u914d\u4e0b\u4e00\u4e2a\u89c4\u5219; false\u8868\u793a\uff1a\u5982\u679c\u6307\u5b9a\u961f\u5217\u4e0d\u5b58\u5728,\u4e0d\u5141\u8bb8\u81ea\u52a8\u521b\u5efa--\x3e\n    <rule name="specified" create="false"/>\n    \x3c!-- \u63d0\u4ea4\u5230root.group.username\u961f\u5217,\u82e5root.group\u4e0d\u5b58\u5728,\u4e0d\u5141\u8bb8\u81ea\u52a8\u521b\u5efa\uff1b\u82e5root.group.user\u4e0d\u5b58\u5728,\u5141\u8bb8\u81ea\u52a8\u521b\u5efa --\x3e\n    <rule name="nestedUserQueue" create="true">\n        <rule name="primaryGroup" create="false"/>\n    </rule>\n    \x3c!-- \u6700\u540e\u4e00\u4e2a\u89c4\u5219\u5fc5\u987b\u4e3areject\u6216\u8005default\u3002Reject\u8868\u793a\u62d2\u7edd\u521b\u5efa\u63d0\u4ea4\u5931\u8d25\uff0cdefault\u8868\u793a\u628a\u4efb\u52a1\u63d0\u4ea4\u5230default\u961f\u5217 --\x3e\n    <rule name="reject" />\n  </queuePlacementPolicy>\n</allocations>\n')),(0,o.kt)("h4",{id:"3-\u5206\u53d1\u914d\u7f6e\u5e76\u91cd\u542fyarn"},"3. \u5206\u53d1\u914d\u7f6e\u5e76\u91cd\u542fYarn\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"xsync $HADOOP_HOME/etc/hadoop/yarn-site.xml\n\nxsync $HADOOP_HOME/etc/hadoop/fair-scheduler.xml\n\n$HADOOP_HOME/sbin/stop-yarn.sh\n\n$HADOOP_HOME/sbin/start-yarn.sh\n")),(0,o.kt)("h4",{id:"4-\u6d4b\u8bd5\u63d0\u4ea4\u4efb\u52a1"},"4. \u6d4b\u8bd5\u63d0\u4ea4\u4efb\u52a1\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(80791).Z,width:"1448",height:"521"})))}d.isMDXComponent=!0},15597:function(e,n,a){n.Z=a.p+"assets/images/Snipaste_2022-04-25_15-15-50-0d54cd80120db84d71d60750e51b8098.png"},97578:function(e,n,a){n.Z=a.p+"assets/images/Snipaste_2022-04-25_15-39-17-e300a2007028930889a848cabe327369.png"},64041:function(e,n,a){n.Z=a.p+"assets/images/Snipaste_2022-04-25_15-45-09-3b253f29055d0e50a4535552edd3dd9e.png"},8865:function(e,n,a){n.Z=a.p+"assets/images/Snipaste_2022-04-25_16-17-02-4898687318691ded04cf0b8fe1b252ec.png"},83024:function(e,n,a){n.Z=a.p+"assets/images/Snipaste_2022-04-25_16-18-48-a4f41b5cae2130c4c0021ddaae113b52.png"},41048:function(e,n,a){n.Z=a.p+"assets/images/Snipaste_2022-04-25_16-36-51-376ff618553a09dc06837147b161a387.png"},80791:function(e,n,a){n.Z=a.p+"assets/images/Snipaste_2022-04-25_16-57-57-1ad607c3b444a417c43097fc13bd73c5.png"}}]);