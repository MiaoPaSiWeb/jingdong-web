<template>
  <div id="header">
    <div class="w">
      <div class="container clearfix">
        <div class="logo">
          <img src="./images/logo.png" alt="" />
        </div>
        <div class="search">
          <div class="search-wrap">
            <div class="form clearfix">
              <div class="form-left fl">
                <input class="input" type="text" value="拍拍严选笔记本" />
              </div>
              <span class="photo-search-btn"></span>
              <button class="button fl" @click="searchHandleClick">搜索</button>
            </div>
            <div class="shopcartt" @click="shopcarttHandleClick">
              <span>我的购物车</span>
            </div>
          </div>
        </div>
        <div class="hotwords">
          <ul class="hotwords-wrap clearfix">
            <li
              v-for="(word, index) in hotwords"
              v-show="index <= 6"
              :key="index"
              class="fl"
            >
              <a href="#">{{ word.n }}</a>
            </li>
          </ul>
        </div>
        <div class="navitems">
          <ul class="clearfix">
            <li v-for="item in navitems" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JdHeader",
  data() {
    return {
      rightNavDatas: [
        "你好，请登录",
        "我的订单",
        "我的京东",
        "企业采购",
        "商家服务",
        "网站导航",
        "手机京东",
        "网站无障碍",
      ],
      hotwords: [],
      navitems: [
        "京东超市",
        "京东家电",
        "秒杀",
        "拍卖",
        "京东生鲜",
        "PLUS会员",
        "电脑数码",
        "进口好物",
        "便宜包邮",
        "京东五金城",
      ],
    };
  },
  mounted() {
    this.reqHotWords();
  },
  methods: {
    async reqHotWords() {
      let result = await this.$API.reqGetHotWords();
      if (result.code == 0) {
        this.hotwords = result["data"];
      }
    },
    searchHandleClick() {
      let location = { name: "soso" };
      this.$router.push(location);
    },
    shopcarttHandleClick() {
      alert("去购物车");
    },
  },
};
</script>

<style lang="less" scoped>
#header {
  background: #fff;
  border-bottom: 1px solid #ddd;
  .container {
    height: 140px;
    position: relative;
    .logo {
      position: absolute;
      display: block;
      top: 10px;
      width: 190px;
      height: 120px;
      img {
        display: block;
        width: 100%;
        height: 120px;
        margin: 0 auto;
      }
    }
    .search-wrap {
      box-sizing: border-box;
      padding-left: 260px;
      padding-top: 25px;
      height: 60px;
      position: relative;
      .form {
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-content: center;
        width: 550px;
        height: 36px;
        border: 2px solid #e2231a;
        .form-left {
          flex: 1;
          font-size: 12px;
          padding: 0 12px;
          .input {
            height: 100%;
            width: 100%;
            border: none;
            outline: none;
          }
        }
        .photo-search-btn {
          width: 20px;
          background-color: gray;
        }
        .button {
          border-radius: 0;
          width: 58px;
          border: none;
          background-color: #e1251b;
          font-size: 15px;
          font-weight: 700;
          color: #fff;
        }
      }
      .shopcartt {
        cursor: pointer;
        border: 1px solid #e3e4e5;
        position: absolute;
        right: 230px;
        top: 25px;
        z-index: 21;

        span {
          width: 130px;
          height: 34px;
          line-height: 34px;
          background-color: #fff;
          text-align: center;
          padding: 0 15px;
          color: red;
        }
        &:hover {
          border: 1px solid red;
        }
      }
    }

    .hotwords-wrap {
      position: relative;
      top: 0px;
      padding-left: 260px;
      width: 550px;
      height: 20px;
      line-height: 20px;
      li {
        margin-right: 10px;
        white-space: nowrap;
        color: #999;
        &:hover a {
          color: #e1251b;
          text-decoration-line: none;
        }
      }
    }
    .navitems {
      overflow: hidden;
      position: absolute;
      left: 260px;
      right: 0;
      bottom: 0;
      height: 40px;
      padding-top: 20px;
      ul {
        li {
          float: left;
          position: relative;
          display: block;
          height: 40px;
          line-height: 40px;
          font-size: 15px;
          color: #333;
          margin-right: 15px;
        }
        &:last-child {
          margin-right: 0px;
        }
      }
    }
  }
}
</style>
