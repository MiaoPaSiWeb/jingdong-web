import Vue from "vue";
import App from "./App.vue";
// 引入全局存储
import store from "@/store";
// 引入全局配置
import $mAssetsPath from "@/config/assets.config.js";
import $mConfig from "@/config/index.config.js";
import $mConstDataConfig from "@/config/constData.config.js";
import $mSettingConfig from "@/config/setting.config.js";
// 引入全局方法

// 引入全局组件
// 分页器--全局组件
import Pagination from "@/components/pagnation/index.vue";
// 引入VueRouter
import VueRouter from "vue-router";
import router from "./router";

//统一接口api文件夹里面全部请求函数
//统一引入
import * as API from "@/api";

Vue.config.productionTip = false;

// 使用路由插件
Vue.use(VueRouter);

// 引入swiper
import "swiper/css/swiper.css";

// 注册全局组件
// 第一个参数组件的名字,第二个参数哪一个组件
Vue.component(Pagination.name, Pagination);

// 挂载全局自定义方法
Vue.prototype.$API = API;
Vue.prototype.$mConfig = $mConfig;
Vue.prototype.$mAssetsPath = $mAssetsPath;
Vue.prototype.$mConstDataConfig = $mConstDataConfig;
Vue.prototype.$mSettingConfig = $mSettingConfig;

new Vue({
  render: (h) => h(App),
  // 注册全局事件总线
  beforeCreate() {
    // Vue.prototype.$bus = this;
  },
  // 配置路由
  router: router,
  // 注册仓库
  store: store,
}).$mount("#app");
