<template>
  <div class="wraper">
    <div class="floorhd">
      <h3 class="floorhd_tit">频道广场</h3>
    </div>
    <div class="masonry" v-if="jsonpMarket.length == 10">
      <div
        class="item"
        v-for="(market, index) in jsonpMarket"
        :key="market.name"
      >
        <div v-if="index < 2">
          <img :src="'https://' + market.bigImg" />
        </div>
        <div v-else>
          <img :src="'https://img10.360buyimg.com/img/' + market.item[0].img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Channel",
  data() {
    return {
      jsonpMarket: [],
    };
  },
  mounted() {
    this.getjsonpMarketData();
  },
  methods: {
    async getjsonpMarketData() {
      let result = await this.$API.reqGetjsonpMarket();
      if (result.code == 0) {
        this.jsonpMarket = result.data;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.wraper {
  margin-bottom: 20px;
  box-sizing: border-box;
  .floorhd {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 65px;
    box-sizing: border-box;
    .floorhd_tit {
      position: relative;
      box-sizing: border-box;
      height: 45px;
      font-size: 28px;
      font-weight: 700;
      line-height: 45px;
      padding: 0 30px;
      overflow: hidden;
      color: #333;

      &::before,
      &::after {
        background-image: url(https://storage.360buyimg.com/channel2022/jd_home/0.0.18/assets/sprite/floor_hd/sprite.png);
        width: 25px;
        height: 20px;
        box-sizing: border-box;
        content: "";
        position: absolute;
        top: 50%;
        margin-top: -10px;
      }

      &::before {
        background-position: 0 0;
        left: 0;
      }
      &::after {
        background-position: -25px 0;
        right: 0;
      }
    }
  }

  .masonry {
    display: grid;
    grid-template-rows: repeat(3, 1fr); // 分为3行
    grid-template-columns: repeat(4, 1fr); // 分为4列
    row-gap: 10px; // 行间距5px
    column-gap: 10px; // 列间距5px
    height: 560px;
    .item {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 3px;
      font-size: 40px;
      background-color: #fff;
      height: 180px;
      div {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
          object-fit: fill;
          box-sizing: border-box;
          transition: all 0.3s ease-in;
          &:hover {
            transform: scale(1.05);
          }
        }
      }
      &:nth-child(1),
      &:nth-child(2) {
        grid-row-start: 1;
        grid-row-end: 3;
        height: 370px;
        div > img {
          height: 100%;
          object-fit: fill;
          box-sizing: border-box;
        }
      }
    }
  }
}
</style>
