<template>
  <div class="outer">
    <div class="inner">
      <div id="J_crumbsBar" class="crumbs-bar">全部结果》》》</div>
      <div id="J_container" class="container">
        <JDSelector :selectors="selectors" />
        <div id="J_main" class="g-main2">2222</div>
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
      selectors: {},
      recommond: {},
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
        this.recommond = result.result;
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
</style>
