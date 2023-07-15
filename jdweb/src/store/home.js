// home模块的小仓库
import { reqGetCategoryList, reqGetBannerList, reqGetNewsList, reqGetServiceList, reqGetjsonpMarket } from '@/api/index'
const state = {
    categoryNavList: [],
    bannerList: [],
    sliderRecommend: [],
    news: [],
    service: [],
    jsonpMarket: []
}
const mutations = {
    MU_CATEGORYYLIST(state, list) {
        state.categoryNavList = list
    },
    MU_BANNERLIST(state, list) {
        state.bannerList = list;
        state.sliderRecommend = list;
    },
    MU_NEWSLIST(state, list) {
        state.news = list
    },
    MU_SERVICELIST(state, list) {
        state.service = list
    },
    MU_JSONMARKKETLIST(state, list) {
        state.jsonpMarket = list
    }


}
const actions = {
    //左侧分类
    async getCategoryListData({ commit }) {
        //reqgetCategoryList返回的是一个Promise对象
        //需要用await接受成功返回的结果，await必须要结合async一起使用（CP）
        let result = await reqGetCategoryList();
        // console.log(result);
        commit("MU_CATEGORYYLIST", result.data || []);

    },
    // 获取首页轮播图的数据
    async getBannerListData({ commit }) {
        // console.log('在向服务器发送请求获取轮播图的数据');
        let result = await reqGetBannerList();
        // console.log(result)
        if (result.code == 0) {
            commit("MU_BANNERLIST", result.data || []);
        }
    },
    // 新闻
    async getNewsListData({ commit }) {
        let result = await reqGetNewsList();
        if (result.code == 0) {
            commit("MU_NEWSLIST", result.data || []);
        }
    },
    // 服务
    async getServiceListData({ commit }) {
        let result = await reqGetServiceList();
        if (result.code == 0) {
            commit("MU_SERVICELIST", result.data || []);
        }
    },
    // 频道广场
    async getjsonpMarketData({ commit }) {
        let result = await reqGetjsonpMarket();
        if (result.code == 0) {
            commit("MU_JSONMARKKETLIST", result.data || []);
        }
    },

}

const getters = {}
export default {
    state,
    mutations,
    actions,
    getters,
}