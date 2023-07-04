import Vue from 'vue'
import App from './App.vue'

//引入VueRouter
import VueRouter from "vue-router";
//引入路由器
import router from "./router";


Vue.config.productionTip = false

// 使用路由插件
Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  // 配置路由
  router: router,
}).$mount('#app')
