<template>
    <div id="header">
        <div class="w">
            <div class="header-wrap clearfix">
                <div class="logo">
                    <img src="./images/logo.png" alt="">
                </div>
                <div class="search">
                    <div class="search-wrap">
                        <div class="form clearfix">
                            <div class="form-left fl">
                                <input class="text" type="text" value="拍拍严选笔记本"/>
                                <span class="photo-search-btn"></span>
                            </div>
                             <button class="button fl" @click="searchHandleClick">搜索</button>
                        </div>
                    </div>
                </div>
                <div class="hotwords">
                    <ul class="hotwords-wrap clearfix">
                        <li v-for="(word,index) in hotwords" :key="index" class="fl">
                            <a href="#">{{word}}</a>
                        </li>
                    </ul>
                </div>
                <div class="navitems">
                    <ul class="clearfix">
                        <li>111</li>
                        <li>111</li>
                        <li>111</li>
                        <li>111</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'JdHeader',
        data(){
            return {
                rightNavDatas:['你好，请登录','我的订单','我的京东','企业采购','商家服务','网站导航','手机京东','网站无障碍'],
                hotwords:['港荣蒸蛋糕','iPhone14','vivo']
            };
        },
        methods: {
            searchHandleClick(){
                alert("去搜索")
            }
        }
    }
</script>

<style lang="less" scoped>
#header {
	background: #fff;
	border-bottom: 1px solid #ddd;
    .header-wrap {
        height: 140px;
        position: relative;
        .logo {
            position: absolute;
            display: block;
            top: 10px;
            width: 190px;
            height: 120px;
            img {
                display: block;
                width: 100%;
                height: 120px;
                margin: 0 auto;
            }
        }
        .search-wrap {
            position: relative;
            left: 220px;
            height: 60px;
            .form {
                position: absolute;
                top: 25px;
                width: 486px;
                height: 32px;
                border: 2px solid #e2231a;
                background: #fff;
                .form-left {
                    position: relative;
                    width: 428px;
                    height: 32px;
                    line-height: 32px;
                    font-size: 12px;
                    .text {
                        border: 1px transparent solid;
                        width: 323px;
                        height: 30px;
                        line-height: 30px;
                        padding: 0 75px 0 30px;
                    }
                    .photo-search-btn {
                        position: absolute;
                        right: 27.5px;
                        top: 10px;
                        width: 20px;
                        height: 15px;
                        overflow: hidden;
                        background-color: gray;
                    }
                }
                .button {
                    border-radius: 0;
                    width: 58px;
                    height: 32px;
                    line-height: 32px;
                    border: none;
                    background-color: #e1251b;
                    font-size: 15px;
                    font-weight: 700;
                    color: #fff;
                }
                
            }
        }
        .hotwords-wrap {
            position: relative;
            top: 0px;
            left: 220px;
            width: 450px;
            height: 25px;
            line-height: 25px;
            li {
                margin-right: 10px;
                white-space: nowrap;
                color: #999;
                &:hover a {
                    color: #e1251b;
                    text-decoration-line: none;
                }
            }
        }
        .navitems {
            overflow: hidden;
            position: absolute;
            left: 203px;
            right: 0;
            bottom: 0;
            height: 40px;
            padding-top: 20px;
            border: 1px red solid;
            ul {
                li {
                    float: left;
                    position: relative;
                    display: block;
                    height: 40px;
                    line-height: 40px;
                    font-size: 15px;
                    color: #333;
                    margin: 0 11px;
                    border: 1px red solid;

                }
            }
        }
    }
}
</style>