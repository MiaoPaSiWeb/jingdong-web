const CONFIG = {
  // 开发环境配置
  development: {
    assetsPath: "/assets", // 静态资源路径
    baseUrl: "http://demo.rageframe.com/api", // 后台接口请求地址
    hostUrl: "http://h5.tinyshop.rageframe.com", // H5地址(前端运行地址)
    imagePrefix: "https://img10.360buyimg.com/img/",
    websocketUrl: "", // websocket服务端地址
    weixinAppId: "", // 微信公众号appid
  },
  // 生产环境配置
  production: {
    assetsPath: "/assets", // 静态资源路径
    baseUrl: "http://demo.rageframe.com/api", // 后台接口请求地址
    hostUrl: "http://h5.tinyshop.rageframe.com", // H5地址(前端运行地址)
    imagePrefix: "https://img10.360buyimg.com/img/",
    websocketUrl: "", // websocket服务端地址
    weixinAppId: "", // 微信公众号appid
  },
};

const NODE_ENV = "development";

// export default CONFIG[process.env.NODE_ENV];
export default CONFIG[NODE_ENV];
