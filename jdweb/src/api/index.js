/* eslint-disable no-unused-vars */
/*
广告组件
    mock/home/jsonpBackground.json

Shortcut组件
    网站导航弹出框数据：mock/home/jsonpshortcutSitenav.json
    企业采购弹出狂数据：mock/home/jsonpshortcutCompanyConfig.json
Header组件

    热搜词：mock/home/jsonpHotWords.json


首页路由组件
    轮播 mock/home/jsonpFocus.json
    左侧分类 mock/home/getCategoryCallback.json
    秒杀数据   mock/h5st/source/pc_seckill.json
    频道广场 mock/home/jsonpMarket.json
    京东快报 mock/home/jsonpNews.json
    京东服务 mock/home/jsonpService.json
    为你推荐 mock/home/pc_home_feed/result_{$page}.json   page 从 1 开始
*/

// 当前这个模块：API进行统一管理
// 引入封装的axios
import requests from "./request";
import { jsonDb } from "@/utils/IndexDB";

function getDalaFromLocal(config) {
  const { url } = config;
  return new Promise((resolve, reject) => {
    jsonDb.select(url).then(
      (data) => {
        console.log("获取本地数据SUCCESS:", url);
        resolve(JSON.parse(data.json));
      },
      (error) => {
        console.log("获取本地数据FAILED:", url, error.message);
        reject(error);
      }
    );
  });
}

function getDalaFromServer(config) {
  const { url } = config;
  return new Promise((resolve, reject) => {
    requests(config).then(
      (data) => {
        console.log("获取网络数据SUCCESS:", url);
        resolve(data);

        const persion = { id: url, json: JSON.stringify(data) };
        jsonDb.update(persion);
      },
      (error) => {
        console.log("获取网络数据FAILED:", url, error.message);
        reject(error);
      }
    );
  });
}

async function mock_requests(config) {
  return new Promise((resolve, reject) => {
    getDalaFromLocal(config).then(
      (data) => {
        resolve(data);
      },
      (error) => {
        getDalaFromServer(config).then(
          (data) => {
            resolve(data);
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  });
}

//获取热搜词
export const reqGetHotWords = () =>
  mock_requests({ url: `/home/jsonpHotWords.json`, method: "get" });
//获取banner（Home首页轮播图接口）
export const reqGetBannerList = () =>
  mock_requests({ url: `/home/jsonpFocus.json`, method: "get" });
//获取分类（Home首页分类接口）
export const reqGetCategoryList = () =>
  mock_requests({ url: `/home/getCategoryCallback.json`, method: "get" });
//获取新闻（Home首页新闻接口）
export const reqGetNewsList = () =>
  mock_requests({ url: `/home/jsonpNews.json`, method: "get" });
//获取服务（Home首页服务接口）
export const reqGetServiceList = () =>
  mock_requests({ url: `/home/jsonpService.json`, method: "get" });
//获取秒杀（Home首页秒杀接口）
export const reqGetSeckillList = () =>
  mock_requests({ url: `/h5st/source/pc_seckill.json`, method: "get" });
//获取频道广场（Home首页频道广场接口）
export const reqGetjsonpMarket = () =>
  mock_requests({ url: `/home/jsonpMarket.json`, method: "get" });
