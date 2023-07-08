<template>
  <div>
    <div class="w">
      <Fs />
    </div>
  </div>
</template>

<script>
import Fs from "@/pages/Home/components/Fs";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    Fs,
  },
  //   mounted() {
  //     this.getBannerListData();
  //     this.getCategoryListData();
  //   },
  //   methods: {
  //     async getBannerListData() {
  //       let result = await this.$API.reqGetBannerList();
  //       console.log(result);
  //     },
  //     async getCategoryListData() {
  //       let result = await this.$API.reqGetCategoryList();
  //       console.log(result);
  //       this.categoryList = result.data || [];
  //     },
  //   },
};
</script>

<style lang="less" scoped></style>
