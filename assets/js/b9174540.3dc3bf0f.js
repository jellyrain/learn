"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9620],{3905:function(t,e,o){o.d(e,{Zo:function(){return c},kt:function(){return d}});var r=o(67294);function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function n(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function p(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?n(Object(o),!0).forEach((function(e){a(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function u(t,e){if(null==t)return{};var o,r,a=function(t,e){if(null==t)return{};var o,r,a={},n=Object.keys(t);for(r=0;r<n.length;r++)o=n[r],e.indexOf(o)>=0||(a[o]=t[o]);return a}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)o=n[r],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(a[o]=t[o])}return a}var i=r.createContext({}),l=function(t){var e=r.useContext(i),o=e;return t&&(o="function"==typeof t?t(e):p(p({},e),t)),o},c=function(t){var e=l(t.components);return r.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var o=t.components,a=t.mdxType,n=t.originalType,i=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),m=l(o),d=a,g=m["".concat(i,".").concat(d)]||m[d]||s[d]||n;return o?r.createElement(g,p(p({ref:e},c),{},{components:o})):r.createElement(g,p({ref:e},c))}));function d(t,e){var o=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var n=o.length,p=new Array(n);p[0]=m;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u.mdxType="string"==typeof t?t:a,p[1]=u;for(var l=2;l<n;l++)p[l]=o[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},76800:function(t,e,o){o.r(e),o.d(e,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return s}});var r=o(83117),a=o(80102),n=(o(67294),o(3905)),p=["components"],u={sidebar_position:7},i=void 0,l={unversionedId:"Hadoop/MapReduce/OutputFormat\u6570\u636e\u8f93\u51fa",id:"Hadoop/MapReduce/OutputFormat\u6570\u636e\u8f93\u51fa",title:"OutputFormat\u6570\u636e\u8f93\u51fa",description:"OutputFormat \u662f MapReduce \u8f93\u51fa\u7684\u57fa\u7c7b\uff0c\u6240\u6709\u5b9e\u73b0 MapReduce\u8f93\u51fa \u90fd\u5b9e\u73b0\u4e86 OutputFormat \u63a5\u53e3",source:"@site/docs\\Hadoop\\MapReduce\\OutputFormat\u6570\u636e\u8f93\u51fa.md",sourceDirName:"Hadoop/MapReduce",slug:"/Hadoop/MapReduce/OutputFormat\u6570\u636e\u8f93\u51fa",permalink:"/learn/Hadoop/MapReduce/OutputFormat\u6570\u636e\u8f93\u51fa",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Shuffle\u673a\u5236",permalink:"/learn/Hadoop/MapReduce/Shuffle\u673a\u5236"},next:{title:"MapReduce\u5185\u6838\u89e3\u6790",permalink:"/learn/Hadoop/MapReduce/MapReduce\u5185\u6838\u89e3\u6790"}},c={},s=[{value:"1. OutputFormat\u5b9e\u73b0\u7c7b\uff1a",id:"1-outputformat\u5b9e\u73b0\u7c7b",level:3},{value:"2. \u81ea\u5b9a\u4e49 OutputFormat\uff1a",id:"2-\u81ea\u5b9a\u4e49-outputformat",level:3},{value:"1. \u9700\u6c42\uff1a",id:"1-\u9700\u6c42",level:4},{value:"2. \u5b9e\u73b0\uff1a",id:"2-\u5b9e\u73b0",level:4}],m={toc:s};function d(t){var e=t.components,u=(0,a.Z)(t,p);return(0,n.kt)("wrapper",(0,r.Z)({},m,u,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"OutputFormat \u662f MapReduce \u8f93\u51fa\u7684",(0,n.kt)("strong",{parentName:"p"},"\u57fa\u7c7b"),"\uff0c\u6240\u6709\u5b9e\u73b0 MapReduce\u8f93\u51fa \u90fd\u5b9e\u73b0\u4e86 OutputFormat \u63a5\u53e3"),(0,n.kt)("h3",{id:"1-outputformat\u5b9e\u73b0\u7c7b"},"1. OutputFormat\u5b9e\u73b0\u7c7b\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(67657).Z,width:"713",height:"321"})),(0,n.kt)("p",null,"\u9ed8\u8ba4\u8f93\u51fa\u683c\u5f0f\u4e3a TextOutputFormat\uff08\u6309\u884c\u5199\u5165\uff09"),(0,n.kt)("h3",{id:"2-\u81ea\u5b9a\u4e49-outputformat"},"2. \u81ea\u5b9a\u4e49 OutputFormat\uff1a"),(0,n.kt)("h4",{id:"1-\u9700\u6c42"},"1. \u9700\u6c42\uff1a"),(0,n.kt)("p",null,"\u8fc7\u6ee4\u8f93\u5165\u7684log\u65e5\u5fd7\uff0c\u5305\u542b jellyrain \u7684\u7f51\u7ad9\u8f93\u51fa\u5230 e:/jellyrain.log\uff0c\u4e0d\u5305\u542b jellyrain \u7684\u7f51\u7ad9\u8f93\u51fa\u5230 e:/other.log"),(0,n.kt)("h4",{id:"2-\u5b9e\u73b0"},"2. \u5b9e\u73b0\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u7f16\u5199 ",(0,n.kt)("strong",{parentName:"li"},"LogMapper")," \u7c7b\uff1a")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"package com.jellyrain.mapreduce.outputformat;\n\nimport org.apache.hadoop.io.LongWritable;\nimport org.apache.hadoop.io.NullWritable;\nimport org.apache.hadoop.io.Text;\nimport org.apache.hadoop.mapreduce.Mapper;\n\nimport java.io.IOException;\n\npublic class LogMapper extends Mapper<LongWritable, Text,Text, NullWritable> {\n    @Override\n    protected void map(LongWritable key, Text value, Context context) throws IOException, InterruptedException {\n        //\u4e0d\u505a\u4efb\u4f55\u5904\u7406,\u76f4\u63a5\u5199\u51fa\u4e00\u884clog\u6570\u636e\n        context.write(value,NullWritable.get());\n    }\n}\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"\u7f16\u5199 ",(0,n.kt)("strong",{parentName:"li"},"LogReducer")," \u7c7b\uff1a")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"package com.jellyrain.mapreduce.outputformat;\n\nimport org.apache.hadoop.io.NullWritable;\nimport org.apache.hadoop.io.Text;\nimport org.apache.hadoop.mapreduce.Reducer;\n\nimport java.io.IOException;\n\npublic class LogReducer extends Reducer<Text, NullWritable,Text, NullWritable> {\n    @Override\n    protected void reduce(Text key, Iterable<NullWritable> values, Context context) throws IOException, InterruptedException {\n        // \u9632\u6b62\u6709\u76f8\u540c\u7684\u6570\u636e,\u8fed\u4ee3\u5199\u51fa\n        for (NullWritable value : values) {\n            context.write(key,NullWritable.get());\n        }\n    }\n}\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"\u81ea\u5b9a\u4e49\u4e00\u4e2a ",(0,n.kt)("strong",{parentName:"li"},"LogOutputFormat")," \u7c7b\uff1a")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"package com.jellyrain.mapreduce.outputformat;\n\nimport org.apache.hadoop.io.NullWritable;\nimport org.apache.hadoop.io.Text;\nimport org.apache.hadoop.mapreduce.RecordWriter;\nimport org.apache.hadoop.mapreduce.TaskAttemptContext;\nimport org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;\n\nimport java.io.IOException;\n\npublic class LogOutputFormat extends FileOutputFormat<Text, NullWritable> {\n    @Override\n    public RecordWriter<Text, NullWritable> getRecordWriter(TaskAttemptContext job) throws IOException, InterruptedException {\n        //\u521b\u5efa\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684RecordWriter\u8fd4\u56de\n        LogRecordWriter logRecordWriter = new LogRecordWriter(job);\n        return logRecordWriter;\n    }\n}\n")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"\u7f16\u5199 ",(0,n.kt)("strong",{parentName:"li"},"LogRecordWriter")," \u7c7b\uff1a")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'package com.jellyrain.mapreduce.outputformat;\n\nimport org.apache.hadoop.fs.FSDataOutputStream;\nimport org.apache.hadoop.fs.FileSystem;\nimport org.apache.hadoop.fs.Path;\nimport org.apache.hadoop.io.IOUtils;\nimport org.apache.hadoop.io.NullWritable;\nimport org.apache.hadoop.io.Text;\nimport org.apache.hadoop.mapreduce.RecordWriter;\nimport org.apache.hadoop.mapreduce.TaskAttemptContext;\n\nimport java.io.IOException;\n\npublic class LogRecordWriter extends RecordWriter<Text, NullWritable> {\n\n    private FSDataOutputStream atguiguOut;\n    private FSDataOutputStream otherOut;\n\n    public LogRecordWriter(TaskAttemptContext job) { // \u6784\u9020\u65b9\u6cd5\n        try {\n            //\u83b7\u53d6\u6587\u4ef6\u7cfb\u7edf\u5bf9\u8c61\n            FileSystem fs = FileSystem.get(job.getConfiguration());\n            //\u7528\u6587\u4ef6\u7cfb\u7edf\u5bf9\u8c61\u521b\u5efa\u4e24\u4e2a\u8f93\u51fa\u6d41\u5bf9\u5e94\u4e0d\u540c\u7684\u76ee\u5f55\n            atguiguOut = fs.create(new Path("d:/hadoop/atguigu.log"));\n            otherOut = fs.create(new Path("d:/hadoop/other.log"));\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n    }\n\n    @Override // \u5199\u5165\n    public void write(Text key, NullWritable value) throws IOException, InterruptedException {\n        String log = key.toString();\n        //\u6839\u636e\u4e00\u884c\u7684log\u6570\u636e\u662f\u5426\u5305\u542batguigu,\u5224\u65ad\u4e24\u6761\u8f93\u51fa\u6d41\u8f93\u51fa\u7684\u5185\u5bb9\n        if (log.contains("atguigu")) {\n            atguiguOut.writeBytes(log + "\\n");\n        } else {\n            otherOut.writeBytes(log + "\\n");\n        }\n    }\n\n    @Override // \u5173\u95ed\n    public void close(TaskAttemptContext context) throws IOException, InterruptedException {\n        //\u5173\u6d41\n        IOUtils.closeStream(atguiguOut);\n        IOUtils.closeStream(otherOut);\n    }\n}\n')),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"\u7f16\u5199 ",(0,n.kt)("strong",{parentName:"li"},"LogDriver")," \u7c7b\uff1a")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'package com.jellyrain.mapreduce.outputformat;\n\nimport org.apache.hadoop.conf.Configuration;\nimport org.apache.hadoop.fs.Path;\nimport org.apache.hadoop.io.NullWritable;\nimport org.apache.hadoop.io.Text;\nimport org.apache.hadoop.mapreduce.Job;\nimport org.apache.hadoop.mapreduce.lib.input.FileInputFormat;\nimport org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;\n\nimport java.io.IOException;\n\npublic class LogDriver {\n    public static void main(String[] args) throws IOException, ClassNotFoundException, InterruptedException {\n\n        Configuration conf = new Configuration();\n        Job job = Job.getInstance(conf);\n\n        job.setJarByClass(LogDriver.class);\n        job.setMapperClass(LogMapper.class);\n        job.setReducerClass(LogReducer.class);\n\n        job.setMapOutputKeyClass(Text.class);\n        job.setMapOutputValueClass(NullWritable.class);\n\n        job.setOutputKeyClass(Text.class);\n        job.setOutputValueClass(NullWritable.class);\n\n        //\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u7684outputformat\n        job.setOutputFormatClass(LogOutputFormat.class);\n\n        FileInputFormat.setInputPaths(job, new Path("D:\\\\input"));\n        //\u867d\u7136\u6211\u4eec\u81ea\u5b9a\u4e49\u4e86outputformat\uff0c\u4f46\u662f\u56e0\u4e3a\u6211\u4eec\u7684outputformat\u7ee7\u627f\u81eafileoutputformat\n        //\u800cfileoutputformat\u8981\u8f93\u51fa\u4e00\u4e2a_SUCCESS\u6587\u4ef6\uff0c\u6240\u4ee5\u5728\u8fd9\u8fd8\u5f97\u6307\u5b9a\u4e00\u4e2a\u8f93\u51fa\u76ee\u5f55\n        FileOutputFormat.setOutputPath(job, new Path("D:\\\\logoutput"));\n\n        boolean b = job.waitForCompletion(true);\n        System.exit(b ? 0 : 1);\n    }\n}\n')))}d.isMDXComponent=!0},67657:function(t,e,o){e.Z=o.p+"assets/images/Snipaste_2022-04-23_14-20-02-14b973701435b7f15a87d9c4681a9a22.png"}}]);