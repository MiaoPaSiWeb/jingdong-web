// 该文件专门用于创建整个应用的路由器
import Vue from "vue";
// 引入vue路由
import VueRouter from "vue-router";
// 使用插件
Vue.use(VueRouter);
//  引入路由组件
import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import RegisterPerson from "@/pages/RegisterPerson";
import MyCenter from "@/pages/MyCenter";
import MyTest from "@/pages/MyTest";
// 配置路由
export default new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/home", //一上来就展示首页
      // redirect: "/my-center", //一上来就展示
      // redirect: "/my-test", //一上来就展示
    },
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/search",
      name: "soso",
      component: Search,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/register-person",
      component: RegisterPerson,
    },
    {
      path: "/my-center",
      component: MyCenter,
    },
    {
      path: "/my-test",
      component: MyTest,
    },
  ],
});
