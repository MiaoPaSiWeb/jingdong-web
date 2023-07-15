<template>
  <div>
    <div class="w">
      <Fs />
      <MiaoSha />
      <Channel />
      <Feeds />
    </div>
  </div>
</template>

<script>
import Fs from "@/pages/Home/components/Fs";
import MiaoSha from "@/pages/Home/components/MiaoSha";
import Channel from "@/pages/Home/components/Channel";
import Feeds from "@/pages/Home/components/Feeds";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    Fs,
    MiaoSha,
    Channel,
    Feeds,
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
