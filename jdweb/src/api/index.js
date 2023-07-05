/*
广告组件
    mock/home/jsonpBackground.json

Shortcut组件
    网站导航弹出框数据：mock/home/jsonpshortcutSitenav.json
    企业采购弹出狂数据：mock/home/jsonpshortcutCompanyConfig.json
Header组件
    mock/home/jsonpHotWords.json


首页路由组件
    轮播 mock/home/jsonpFocus.json
    左侧分类 mock/home/getCategoryCallback.json
    秒杀数据   mock/home/pc_seckill.json
    频道广场 mock/home/jsonpMarket.json
    京东快报 mock/home/jsonpNews.json
    为你推荐 mock/home/pc_home_feed/result_{$page}.json   page 从 1 开始
*/


// 当前这个模块：API进行统一管理
// 引入封装的axios
import requests from "./request";
//获取banner（Home首页轮播图接口）
export const reqGetBannerList = () => requests({ url: `/home/jsonpFocus.json`, method: 'get' });
//获取热搜词
export const reqGetHotWords = () => requests({ url: `/home/jsonpHotWords.json`, method: 'get' });


