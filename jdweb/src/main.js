import Vue from 'vue'
import App from './App.vue'

//引入VueRouter
import VueRouter from "vue-router";
//引入路由器
import router from "./router";

//统一接口api文件夹里面全部请求函数
//统一引入
import * as API from "@/api";

Vue.config.productionTip = false

// 使用路由插件
Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  // 注册全局事件总线
  beforeCreate() {
    // Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  // 配置路由
  router: router,
}).$mount('#app')
