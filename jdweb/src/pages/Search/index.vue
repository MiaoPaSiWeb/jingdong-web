<template>
  <div class="outer">
    <div class="inner">
      <div id="J_crumbsBar" class="crumbs-bar">全部结果》》》</div>
      <div id="J_container" class="container">
        <JDSelector :selectors="selectors" />
        <div id="J_main" class="clearfix">
          <div class="recommend">
            <div class="nav-title">为你推荐</div>
            <ul>
              <li v-for="good in recommend" :key="good.id">
                <div>
                  <img :src="imagePrefix + good.img" />
                </div>
                {{ good.t }}
              </li>
            </ul>
          </div>
          <div class="result">
            <div class="filter">
              <div class="top-filter">top-filter</div>
              <div class="btm-filter">btm-filter</div>
            </div>
            <ul>
              <li v-for="good in testArr" :key="good.id">
                <div class="img-wrap">
                  <img :src="'https://' + good.skuImage" />
                </div>
                <div class="price"><b>¥</b> {{ reversedMessage(good) }}</div>
                <div v-html="good.skuName"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JDSelector from "./components/JDSelector";
export default {
  name: "Search",
  components: {
    JDSelector,
  },
  data() {
    return {
      imagePrefix: this.$mConfig.imagePrefix,
      selectors: {},
      recommend: [],
      testArr: [],
      isLoading: false,
      isNoMore: false,
      page: 1,
    };
  },
  mounted() {
    this.getRecommendData();
    this.getListData();
  },
  methods: {
    async getRecommendData() {
      try {
        let result = await this.$API.reqGetRecDivinerApi();
        this.recommend = result.data;
      } catch (error) {
        console.log("加载失败 ---- ", error.response);
      }
    },
    async getListData() {
      this.isLoading = true;
      console.log("加载中 ---- ", this.page);
      try {
        let result = await this.$API.reqGetSearchResult(this.page);
        this.selectors = result.result;
        let test = [...this.testArr, ...(result.result.items || [])];
        this.testArr = test;
        console.log("加载结束 ---- ");
        this.isLoading = false;
      } catch (error) {
        console.log("加载失败 ---- ", error.response);
        this.page--;
        if (this.page < 0) {
          this.page = 0;
        }
        this.isLoading = false;
        if (error.response && error.response.status == 404) {
          this.isNoMore = true;
        }
      }
    },
    reversedMessage(good) {
      const priceInfo = this.selectors.itemPriceInfo[good.skuId];
      return priceInfo.price.jdPrice;
    },
  },
};
</script>

<style lang="less" scoped>
div {
  box-sizing: border-box;
}
.outer {
  background-color: #fff;
}

.inner {
  margin: 0 auto;
  width: 1390px;
}

#J_main {
  display: flex;
  .recommend {
    border: 1px solid #f5f5f5;
    font-family: "microsoft yahei";
    padding: 0 20px;
    width: 222px;

    .nav-title {
      border-bottom: 1px solid #f5f5f5;
      color: #000;
      font-size: 14px;
      font-weight: 700;
      height: 46px;
      line-height: 46px;
    }
    ul {
      li {
        cursor: pointer;
        img {
          height: 180px;
          margin-top: 6px;
          width: 180px;
          object-fit: cover;
          transition: all 0.5s;
        }
        &:hover {
          color: red;
        }
      }
    }
  }
  .result {
    flex: 1;
    background-color: #eee;
    ul {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 0px;
      background-color: #fff;
      li {
        border: 1px solid #eee;
        padding: 12px;
        .img-wrap {
          display: flex;
          justify-content: center;
          img {
            width: 100%;
            aspect-ratio: 1;
          }
        }
        .price {
          color: red;
          font-family: Verdana, serif;
          font-size: 20px;
          letter-spacing: -1px;
        }
        &:hover {
          border: 1px solid red;
        }
      }
    }
  }
}
</style>
