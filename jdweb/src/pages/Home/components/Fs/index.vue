<template>
  <div>
    <div class="fs_inner clearfix">
      <div class="fs_col1">
        <ul class="cate_wrap">
          <li
            v-for="category in categoryNavList"
            :key="category.id"
            class="cate_menu_item"
            @mouseenter="categoryNavMouse(1, category)"
            @mouseleave="categoryNavMouse(2, category)"
          >
            <span
              v-for="(categoryItem, index) in category.s"
              :key="index"
              class="cate_menu_lk"
            >
              {{ categoryItem.n.split("|")[1] }}
              <span v-show="index < categoryItem.s.length - 1">/</span>
            </span>

            <div class="cate_pop">
              <ul class="cate2_wrap">
                <li
                  v-for="cate2 in rightCategoryList"
                  :key="cate2.id"
                  class="cate2_item clearfix"
                >
                  <span class="header">{{ cate2.n.split("|")[1] }}</span>
                  <div class="content">
                    <span
                      v-for="cate3 in cate2.s"
                      :key="cate3.id"
                      class="cate3_item"
                    >
                      {{ cate3.n.split("|")[1] }}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div class="test"></div>
      </div>
      <div class="fs_col2 clearfix">
        <!--banner轮播-->
        <div class="sliderBannerWrapper">
          <div class="swiper-container" id="mySwiper">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="carouser in bannerList"
                :key="carouser.id"
              >
                <div class="my-swiper-item">
                  <img :src="'https://' + carouser[0].src" />
                </div>
              </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>

            <!-- 如果需要导航按钮 -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
        </div>
        <div class="sliderRecommendWrapper">
          <!--banner轮播-->
          <div class="swiper-container" id="myRecommendSwiper">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="carouser in bannerList"
                :key="carouser.id"
              >
                <div class="my-swiper-item">
                  <img :src="'https://' + carouser[0].src" />
                  <img :src="'https://' + carouser[0].src" />
                  <img :src="'https://' + carouser[0].src" />
                </div>
              </div>
            </div>

            <!-- 如果需要导航按钮 -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
        </div>
      </div>
      <div class="fs_col3">
        <div class="J_user"></div>
        <div class="J_news">
          <div class="header">
            <span>京东快报</span>
            <span>更多</span>
          </div>
          <ul>
            <li v-for="item in news" :key="item.id">
              <span class="news_tag">{{ "热门" }}</span>
              {{ item.title }}
            </li>
          </ul>
        </div>
        <div class="J_service"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";

export default {
  name: "Fs",
  data() {
    return {
      categoryNavList: [],
      category: {},
      showCategoryPop: false,
      bannerList: [],
      sliderRecommend: [],
      news: [],
      service: [],
    };
  },
  mounted() {
    this.getBannerListData();
    this.getCategoryListData();
    this.getNewsListData();
    this.getServiceListData();
  },
  methods: {
    async getBannerListData() {
      let result = await this.$API.reqGetBannerList();
      if (result.code == 0) {
        this.bannerList = result.data;
        this.sliderRecommend = result.data;
      }
    },
    async getCategoryListData() {
      let result = await this.$API.reqGetCategoryList();
      this.categoryNavList = result.data || [];
    },
    async getNewsListData() {
      let result = await this.$API.reqGetNewsList();
      this.news = result.data || [];
    },
    async getServiceListData() {
      let result = await this.$API.reqGetServiceList();
      this.service = result.data || [];
    },

    categoryNavMouse(type, category) {
      this.category = category;
      if (type == 1) {
        this.showCategoryPop = true;
      } else if (type == 2) {
        this.showCategoryPop = false;
      }
    },
  },
  computed: {
    rightCategoryList() {
      let totalList = [];
      if (this.category.s) {
        for (let index = 0; index < this.category.s.length; index++) {
          const cate1 = this.category.s[index];
          for (let index = 0; index < cate1.s.length; index++) {
            const cate2 = cate1.s[index];
            totalList.push(cate2);
          }
        }
      }
      return totalList;
    },
  },
  watch: {
    bannerList: {
      handler() {
        this.$nextTick(() => {
          new Swiper(document.querySelector("#mySwiper"), {
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
    sliderRecommend: {
      handler() {
        this.$nextTick(() => {
          new Swiper(document.querySelector("#myRecommendSwiper"), {
            loop: true, // 循环模式选项
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
.fs_inner {
  margin-top: 15px;
  height: 470px;

  .fs_col1 {
    position: relative;
    float: left;
    width: 190px;
    height: 100%;
    margin-right: 10px;
    box-sizing: border-box;
    background-color: white;

    .cate_wrap {
      overflow: hidden;
      padding: 15px 0;
      height: 450px;
      color: #636363;

      .cate_menu_item {
        padding: 0 12px;
        height: 25px;
        line-height: 25px;
        box-sizing: border-box;

        //二级分类弹出层
        .cate_pop {
          position: absolute;
          z-index: 20;
          display: none;
          top: 0;
          left: 190px;
          width: 998px;
          min-height: 468px;
          height: 470px;
          box-sizing: border-box;
          border: 1px solid #f7f7f7;
          background-color: #fff;
          -webkit-box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
          box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
          -webkit-transition: top 0.25s ease;
          transition: top 0.25s ease;

          .cate2_wrap {
            padding: 12px 12px;
            box-sizing: border-box;
            overflow: hidden;

            .cate2_item {
              .header {
                float: left;
                box-sizing: border-box;
                width: 70px;
                color: black;
                font-weight: bold;
              }

              .content {
                float: left;
                box-sizing: border-box;
                max-width: calc(100% - 70px);

                span {
                  cursor: pointer;

                  &:hover {
                    color: red;
                  }
                }
              }
            }
          }
        }

        .cate_menu_lk {
          span {
            color: #636363;
          }

          &:hover {
            color: red;
          }
        }

        &:hover {
          background-color: #d7d7d7;

          .cate_pop {
            display: block;
          }
        }
      }
    }
  }

  .fs_col2 {
    float: left;
    width: 790px;
    height: 470px;
    box-sizing: border-box;
    .sliderBannerWrapper {
      float: left;
      width: 590px;
      height: 100%;
      box-sizing: border-box;
      border: 1px red solid;
      .swiper-container {
        width: 100%;
        height: 100%;
        .my-swiper-item {
          box-sizing: border-box;
          width: 100%;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
    .sliderRecommendWrapper {
      float: left;
      margin-left: 15px;
      width: 185px;
      height: 100%;
      overflow: hidden;
      box-sizing: border-box;
      .swiper-container {
        width: 100%;
        height: 100%;
        .my-swiper-item {
          width: 100%;
          height: 100%;
          img {
            width: 100%;
            height: 150px;
            margin-bottom: 10px;
            object-fit: cover;
            box-sizing: border-box;
            border: 1px red solid;
          }
        }
      }
      .swiper-button-prev,
      .swiper-button-next {
        display: none;
      }

      &:hover {
        .swiper-button-prev,
        .swiper-button-next {
          display: block;
        }
      }
    }
  }

  .fs_col3 {
    float: right;
    width: 190px;
    height: 470px;
    background-color: #fff;
    .J_user {
      height: 102px;
      border-bottom: 1px solid #eee;
    }
    .J_news {
      height: 130px;
      padding: 0 12px;
      border-bottom: 1px solid #eee;
      .header {
        width: 100%;
        height: 30px;
        line-height: 30px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid red;
      }
      ul {
        li {
          width: 100%;
          height: 25px;
          line-height: 25px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          color: #999;
          .news_tag {
            display: inline-block;
            position: relative;
            font-size: 12px;
            height: 16px;
            width: 35px;
            line-height: 16px;
            text-align: center;
            vertical-align: 0;
            color: #e1251b;
            background-color: rgba(225, 37, 27, 0.08);
            margin-right: 6px;
          }
        }
      }
    }
    .J_service {
      height: 238px;
    }
  }
}
</style>
