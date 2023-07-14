<template>
  <div class="wraper">
    <div class="seckill-countdown"></div>
    <div class="seckill-list">
      <!--banner轮播-->
      <div class="swiper-container" id="mySwiper-seckill">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="section in bannerList"
            :key="section.id"
          >
            <ul class="my-swiper-item">
              <li v-for="(carouser, index) in section" :key="index">
                <img :src="'https://' + carouser.imageurl" />
                <div class="seckill-item__name">
                  <span class="title">
                    {{ carouser.wname }}
                  </span>
                </div>
                <div class="seckill-item__price">
                  <span class="price">￥{{ carouser.miaoShaPrice }}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
    <div class="seckill_entry">
      <div class="bg">
        <img
          v-if="brandInfo.goodsInfo"
          :src="brandInfo.goodsInfo.imageurl"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";

export default {
  name: "MiaoSha",
  data() {
    return {
      bannerList: [],
      brandInfo: {},
    };
  },
  mounted() {
    this.getBannerListData();
  },
  methods: {
    async getBannerListData() {
      let result = await this.$API.reqGetSeckillList();
      if (result.code == 0) {
        if (result.indexMiaoSha) {
          this.bannerList = this.sliceArray(result.indexMiaoSha, 4);
        }
        this.brandInfo = result.brandInfo;
      }
    },
    sliceArray(array, size) {
      var result = [];
      for (var x = 0; x < Math.ceil(array.length / size); x++) {
        var start = x * size;
        var end = start + size;
        result.push(array.slice(start, end));
      }
      return result;
    },
  },
  watch: {
    bannerList: {
      handler() {
        this.$nextTick(() => {
          new Swiper(document.querySelector("#mySwiper-seckill"), {
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
              clickable: true, //点击小球的时候也切换图片
            },
            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
    },
  },
};
</script>

<style lang="less" scoped>
.wraper {
  height: 260px;
  .seckill-countdown {
    float: left;
    width: 190px;
    height: 100%;
    color: #fff;
    background-color: #e83632;
    background-image: url(https://storage.360buyimg.com/channel2022/jd_home/0.0.18/assets/img/4a15d8883775742e3efbb850ae14def7.png);
    background-size: contain;
    background-position: 50%;
    background-repeat: no-repeat;
  }
  .seckill-list {
    position: relative;
    float: left;
    width: 800px;
    height: 100%;
    overflow: hidden;
    background-color: #fff;
    .swiper-container {
      width: 100%;
      height: 100%;
      .my-swiper-item {
        width: 100%;
        height: 100%;
        display: flex;
        li {
          width: 200px;
          height: 100%;
          box-sizing: border-box;
          border-right: 1px solid #eee;
          img {
            width: 140px;
            height: 140px;
            margin-top: 15px;
            margin-left: 30px;
          }
          .seckill-item__name {
            box-sizing: border-box;
            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 160px;
            height: 24px;
            line-height: 24px;
            margin-left: auto;
            margin-right: auto;
            margin-top: 13px;
            span {
              text-align: center;
              box-sizing: border-box;
            }
          }
          .seckill-item__price {
            box-sizing: border-box;
            text-align: center;
            width: 160px;
            height: 24px;
            line-height: 24px;
            margin-left: auto;
            margin-right: auto;
            margin-top: 13px;
            color: #e83632;
            span {
              text-align: center;
              box-sizing: border-box;
            }
          }
        }
      }
    }
  }
  .seckill_entry {
    position: relative;
    float: left;
    width: 200px;
    height: 260px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background-color: #fff;
    .bg {
      position: absolute;
      top: 10px;
      left: 10px;
      right: 10px;
      bottom: 10px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
