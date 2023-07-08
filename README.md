# jingdong-web

京东 Web

                <!-- banner轮播-->
                <div class="swiper" id="mySwiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(carouser) in bannerList" :key="carouser.id">
                            <img :src="'https://' + carouser[0].src" />
                        </div>
                    </div>
                    <!-- 如果需要分页器 -->
                    <div class="swiper-pagination"></div>

                    <!-- 如果需要导航按钮 -->
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>

                <!-- 如果需要导航按钮 -->





                <swiper :modules="modules" navigation :pagination="{ clickable: true }" :scrollbar="{ draggable: true }"
                    @swiper="onSwiper" @slideChange="onSlideChange">
                    <swiper-slide class="my-swiper-item" v-for="(carouser) in bannerList" :key="carouser.id">
                        <!-- <div class="my-swiper-item">
                            <img :src="'https://' + carouser[0].src" />
                        </div> -->
                        Slide {{ carouser[0].src }}
                    </swiper-slide>

                </swiper>
