<template>
    <div>
        <div class="fs_inner clearfix">
            <div class="fs_col1">
                <ul class="cate_wrap">
                    <li v-for="cate1 in categoryList" :key="cate1.id" class="cate_menu_item">
                        <span v-for="(ca, index) in cate1.s" :key="index" class="cate_menu_lk">
                            {{ ca.n.split("|")[1] }}
                            <span v-show="index < cate1.s.length - 1">/</span>
                        </span>
                        <div class="cate_pop">????</div>
                    </li>
                </ul>
            </div>
            <div class="fs_col2">
                <!--banner轮播-->
                <div class="swiper-container" id="mySwiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(carouser) in bannerList" :key="carouser.id">
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
            <div class="fs_col3"></div>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper";

export default {
    name: "Fs",
    data() {
        return {
            categoryList: [],
            bannerList: [],
        };
    },
    mounted() {
        this.getBannerListData();
        this.getCategoryListData();
    },
    methods: {
        async getBannerListData() {
            let result = await this.$API.reqGetBannerList();
            if (result.code == 0) {
                this.bannerList = result.data;
            }
        },
        async getCategoryListData() {
            let result = await this.$API.reqGetCategoryList();
            console.log(result);
            this.categoryList = result.data || [];
        },
    },
    watch: {
        bannerList: {
            handler() {
                this.$nextTick(() => {
                    new Swiper(
                        document.querySelector(".swiper-container"),
                        {
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
                        }
                    );
                });
            },
        },
    },
};
</script>

<style lang="less" scoped>
.fs_inner {
    margin-top: 15px;
    height: 480px;

    .fs_col1 {
        position: relative;
        float: left;
        width: 190px;
        height: 480px;
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
                border: 1px red solid;

                .cate_menu_lk {
                    span {
                        color: #636363;
                    }

                    &:hover {
                        color: red;
                    }
                }

                //二级分类弹出层
                .cate_pop {
                    position: absolute;
                    display: none;
                    z-index: 20;
                    top: 0;
                    left: 192px;
                    width: 800px;
                    min-height: 468px;
                    height: 480px;
                    box-sizing: border-box;
                    border: 1px solid #f7f7f7;
                    background-color: #fff;
                    -webkit-box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
                    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
                    -webkit-transition: top 0.25s ease;
                    transition: top 0.25s ease;
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
        width: 590px;
        height: 480px;
        box-sizing: border-box;

        .my-swiper-item {
            width: 590px;
            height: 480px;
            box-sizing: border-box;

            img {
                width: 100%;
                height: 100%;
            }
        }

    }

    .fs_col3 {
        float: right;
        width: 190px;
        height: 480px;
        box-sizing: border-box;
        border: 1px red solid;
    }
}
</style>
