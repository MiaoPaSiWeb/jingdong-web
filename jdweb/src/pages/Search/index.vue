<template>
  <div class="outer">
    <div class="inner">
      <div id="J_crumbsBar" class="crumbs-bar">全部结果》》》</div>
      <div id="J_container" class="container">
        <div id="J_selector" class="selector">
          <div class="J_selectorLine s-brand">
            <div class="sl-wrap">
              <div class="sl-key">机身内存</div>
              <div class="sl-value">
                <div class="sl-v-list">
                  <ul class="J_valueList">
                    <li v-for="index in 27" :key="index">{{ index }}</li>
                  </ul>
                </div>
              </div>
              <div class="sl-ext"></div>
            </div>
          </div>
          <div class="J_selectorLine s-category">222</div>
          <div class="J_selectorLine s-line">333</div>
          <div class="J_selectorLine s-line">444</div>
          <div class="J_selectorLine s-line s-senior" id="J_selectorSenior">
            555
          </div>
        </div>
        <div id="J_main" class="g-main2">2222</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      testArr: [],
      isLoading: false,
      isNoMore: false,
      page: 1,
    };
  },
  mounted() {
    this.getSelectionetRecDivinerApi();
    this.getListData();
  },
  methods: {
    async getSelectionetRecDivinerApi() {
      try {
        let result = await this.$API.reqGetRecDivinerApi();
        console.log(result);
      } catch (error) {
        console.log("加载失败 ---- ", error.response);
      }
    },
    async getListData() {
      this.isLoading = true;
      console.log("加载中 ---- ", this.page);
      try {
        let result = await this.$API.reqGetSearchResult(this.page);
        console.log(result);
        let test = [...this.testArr, ...(result.data || [])];
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

.selector {
  border-top: 1px solid #ddd;
  background: #fff;
  margin-bottom: 10px;
}
.J_selectorLine {
  .sl-wrap {
    width: 100%;
    line-height: 34px;
    border-bottom: 1px solid #eeeeee;
    background: #f3f3f3;
    display: flex;
    flex-direction: row;

    .sl-key {
      width: 100px;
      padding-left: 10px;
      white-space: nowrap;
      overflow: hidden;
      border-bottom: 1px solid #eeeeee;
    }
    .sl-value {
      margin-left: 110px;
      padding-right: 130px;
      padding-left: 10px;
      overflow: hidden;
      zoom: 1;
      background: #fff;
      flex: 1;
      border: 1px solid red;

      .sl-v-list {
        overflow: hidden;
        zoom: 1;
        padding-top: 4px;
        .J_valueList {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          li {
            display: inline-block;
            margin-right: 50px;
            margin-bottom: 4px;
            height: 26px;
            line-height: 26px;
            border: 1px solid red;
          }
        }
      }
    }
  }
}
</style>
