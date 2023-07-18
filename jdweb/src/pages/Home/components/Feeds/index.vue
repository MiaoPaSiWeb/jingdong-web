<template>
  <div class="w">
    <Floorhd hdtit="为你推荐"></Floorhd>
    <div class="wrapper">
      <div class="feed-tab">
        <div
          v-for="(tab, index) in feedTabs"
          :key="tab.title"
          :class="[
            'feed-tab__item',
            index == feedTabIndex ? 'feed-tab__item--active' : '',
          ]"
          @click="feedTabHandleClick(index)"
        >
          <div class="title">
            <span>{{ tab.title }}</span>
          </div>
          <div class="desc">
            <span>{{ tab.desc }}</span>
          </div>
        </div>
      </div>
      <div class="content clearfix">
        <div
          class="feed-item"
          v-for="(carouser, index) in testArr"
          :key="index"
        >
          <img :src="'https://img10.360buyimg.com/img/' + carouser.img" />
          <p class="jd-common-title name">
            <span class="more2_info_self"> 自营 </span>
            {{ carouser.t }}
          </p>
          <p class="jd-common-title price">
            <i>￥</i>
            <span class="more2_info_price_txt">{{ carouser.jp }}</span>
          </p>
          <div>{{ index }}</div>
        </div>
      </div>
      <div ref="loading">加载中</div>
    </div>
  </div>
</template>

<script>
import Floorhd from "@/components/Floorhd";
//引入debounce函数
import debounce from "@/utils/debounce";
export default {
  name: "Feeds",
  components: { Floorhd },
  data() {
    return {
      feedTabIndex: 0,
      feedTabs: [
        { title: "精选", desc: "猜你喜欢" },
        { title: "智能先锋", desc: "大电器械" },
        { title: "居家优品", desc: "品质生活" },
        { title: "超市百货", desc: "百货生鲜" },
        { title: "时尚达人", desc: "美妆穿搭" },
        { title: "进口好物", desc: "京东国际" },
      ],
      io: null,
      testArr: [],
      isLoading: false,
      page: 0,
    };
  },

  // 页面加载完
  mounted() {
    // 初始化观察对象
    this.io = new IntersectionObserver(this.handleScroll, {});
    // 获取被监听元素
    let viewList = this.$refs.loading;
    // 绑定
    this.io.observe(viewList);
  },
  // 页面离开 destroyed deactivated
  destroyed() {
    console.log("---关闭观察器---");
    // 关闭观察器
    this.io.disconnect();
  },
  methods: {
    feedTabHandleClick(index) {
      this.feedTabIndex = index;
    },
    handleScroll(entries) {
      // entries数组：重叠的元素；
      let entry = entries[0];
      debounce(this.sayDebounce(entry), 800);
    },
    // 触发监听回调
    sayDebounce(entry) {
      let isShow = entry.isIntersecting;
      if (isShow && !this.isLoading) {
        this.page++;
        this.getFeedListData();
      }
    },
    async getFeedListData() {
      this.isLoading = true;
      console.log("加载中 ---- ", this.page);
      try {
        let result = await this.$API.reqGetHomeFeed(this.page);
        console.log(result);
        let test = [...this.testArr, ...(result.data || [])];
        this.testArr = test;

        console.log("加载结束 ---- ");
        this.isLoading = false;
      } catch (error) {
        console.log("加载失败 ---- ", error);
        this.page--;
        if (this.page < 0) {
          this.page = 0;
        }
        this.isLoading = false;
      }
    },
  },
};
</script>

<style lang="less" scoped>
div {
  box-sizing: border-box;
}
.wrapper {
  background: #fff;
  .feed-tab {
    margin: 0 auto;
    height: 60px;
    width: 1080px;
    display: flex;
    flex-direction: row;
    .feed-tab__item {
      position: relative;
      width: 180px;
      height: 60px;
      text-align: center;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-right: 1px solid #eeeeee;
      color: #000;

      .title {
        border-radius: 50px;
        padding: 5px 15px;
        font-size: 16px;
        font-weight: bold;
      }
      .desc {
        font-size: 15px;
      }

      &:hover {
        color: red;
      }

      &:last-child {
        border-right: none;
      }
    }

    .feed-tab__item--active {
      .title {
        background: #e1251b;
        color: #fff;
      }
      .desc {
        color: #e1251b;
      }
    }
  }

  .content {
    border: 1px solid red;

    .feed-item {
      border: 1px solid red;
      position: relative;
      float: left;
      width: 19.32%;
      height: 322px;
      margin-right: 10px;
      margin-bottom: 10px;

      img {
        width: 80%;
        aspect-ratio: 1;
        margin-top: 15px;
        margin-left: 10%;
        border: 1px solid green;
      }
      .name {
        box-sizing: border-box;
        border: 1px solid red;
        text-align: center;
        width: 80%;
        height: 48px;
        line-height: 24px;
        margin: 0 auto;
        .more2_info_self {
          background-color: #e1251b;
          border-radius: 2px;
          color: #fff;
          padding: 0 5px;
          margin-right: 4px;
          line-height: 16px;
          height: 16px;
          font-size: 12px;
          display: inline-block;
          font-family: Helvetica Neue, Hiragino Sans GB, SimSun, serif;
        }
      }
      .price {
        box-sizing: border-box;
        text-align: left;
        width: 80%;
        height: 24px;
        line-height: 24px;
        margin: 0 auto;
        color: #e83632;
        i {
          vertical-align: middle;
          font-size: 12px;
          font-weight: 700;
          font-family: MicrosoftYahei-regular, Arial, Helvetica, sans-serif;
        }
        .more2_info_price_txt {
          font-size: 20px;
          font-weight: 700;
          font-family: arial, sans-serif;
        }
      }

      &:nth-child(5n) {
        margin-right: 0;
      }
    }
  }
}
</style>
