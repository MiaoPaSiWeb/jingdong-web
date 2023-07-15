<template>
  <div class="wraper">
    <Floorhd hdtit="频道广场"></Floorhd>
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
import Floorhd from "@/components/Floorhd";
import { mapState } from "vuex";

export default {
  name: "Channel",
  components: { Floorhd },
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getjsonpMarketData");
  },
  methods: {},
  computed: {
    ...mapState({
      jsonpMarket: (state) => state.home.jsonpMarket,
    }),
  },
};
</script>

<style lang="less" scoped>
.wraper {
  margin-bottom: 20px;
  box-sizing: border-box;
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
