### 使用 vue create xxx 创建项目工程

选择 Vue 2 模板
![Alt text](./day01/image.png)

### 运行

```ruby
$ cd jdweb

$ npm run serve
```

### 目录介绍

node_modules 文件夹：项目依赖文件夹

public 文件夹：一般放置一些静态资源（图片），需要注意，放在 public 文件夹中的静态资源，webpack 打包时会将其原封不动打包到 dist 文件夹中。

src 文件夹（程序员源代码文件夹）：

    assets 文件夹：一般也是放置静态资源（一般放置多个组件共用的静态资源），需要注意，放置在 assets 文件夹中的静态资源，在 webpack 大打包时会将其当做一个模块，打包至 JS 文件中。

    components文件夹：一般放置的是非路由组件（全局组件）

    App.vue：唯一的根组件

    main.js：程序的入口文件，整个程序中最先执行的文件

babel.config.js 文件：配置文件（bable 相关）

pack.json 文件：可认为是项目的”身份证“，记录项目的一些信息，如：项目的相关依赖、项目运行命令等

pack-lock.json：缓存文件

### 其他配置

1、项目运行后，自动打开浏览器
修改 package.json 中下述命令：
改前："serve": "vue-cli-service serve",
改后："serve": "vue-cli-service serve --open",

2、eslint 校验功能
2.1 建议开启

    为什么关闭？比如：声明变量但是没有使用，eslint 校验工具会给你报错，导致没法继续开发，如果不是强制要求使用 eslint,我们一般把它关闭。

    ---在根目录创建 vue.config.js 文件(如果没有，需要创建)：
    添加 lintOnSave: false

2.2 关闭组件命名规则

    新手在组件命名的时候不够规范，根据官方风格指南，除了根组件（App.vue）外，自定义组件名称应该由多单词组成，防止和 html 标签冲突。而最新的 vue-cli 创建的项目使用了最新的 vue/cli-plugin-eslint 插件，在 vue/cli-plugin-eslint v7.20.0 版本之后就引用了 vue/multi-word-names 规则，所以在编译的时候判定此次错误。
    "rules": {
    //关闭组件命名规则
    "vue/multi-word-component-names": "off"
    }

3、src 文件夹简写方法。配置别名：@

    使用 cli 创建项目是已经自动配置好了

4、项目路由
vue-router
安装：npm i --save vue-router@2

前端所谓路由：KV 键值对
key：URL(地址栏中的路径)
value：相应的路由组件
注意：项目上中下结构

非路由组件：
Header
Footer

路由组件：
LoginView --- 登录
RegisterPersonView --- 个人注册
RegisterReView --- 企业注册
HomeView --- 首页
SearchResultView --- 搜索结果
MyJDView --- 我的京东

    MyJdOrder --- 订单
    MyJdComments --- 评价晒单
    MyJDChanggou --- 常购商品
    MyFollow --- 关注中心

5、项目样式
项目采用 less 样式
安装：

    npm i --save less
    npm i --save less-loader

### 报错总结

Q：eslint 报错：Parsing error: No Babel config file detected 。
A：修改 package.json 文件:

```ruby
改前：
"parserOptions": {
    "parser": "@babel/eslint-parser",
},
改后：
"parserOptions": {
    "parser": "@babel/eslint-parser",
    "requireConfigFile": false
},
```
