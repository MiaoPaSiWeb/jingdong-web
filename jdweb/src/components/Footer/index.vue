<template>
    <div>
        <div class="mod_service">
            <div class="w">
                <ul class="mod_service_list clearfix">

                    <li class="mod_service_item" v-for="(item,index) in modServiceList" :key="index">
                        <div class="mod_service_unit">
                            <h1 class="mod_service_tit mod_service_duo" :style=item.style>多</h1>
                            <p class="mod_service_txt">{{item.title}}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name:'JdFooter',
        data(){
            return {
                modServiceList:[
                    {title:'品类齐全，轻松购物',style:'background-position: 0 0;'},
                    {title:'多仓直发，极速配送',style:'background-position: -38.5px 0;'},
                    {title:'正品行货，精致服务',style:'background-position: -77px 0;'},
                    {title:'天天低价，畅选无忧',style:'background-position: 0 -44.5px;'},
                ]
            }
        }
    }
</script>

<style lang="less" scoped>
    .mod_service {
        padding: 30px 0;
        border-bottom: 1px solid #dedede;
        .mod_service_list {
            overflow: hidden;
            height: 42px;
            .mod_service_item {
                width: 247px;
                float: left;
                .mod_service_unit {
                    position: relative;
                    margin: 0 auto;
                    padding-left: 45px;
                    width: 180px;
                    .mod_service_tit {
                        overflow: hidden;
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 36px;
                        height: 42px;
                        text-indent: -999px;
                    }
                    .mod_service_txt {
                        overflow: hidden;
                        width: 100%;
                        height: 42px;
                        line-height: 42px;
                        font-size: 18px;
                        font-weight: 700;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        color: #444;
                    }
                    .mod_service_duo {
                        background-repeat: no-repeat;
                        background-size: 113px 86.5px;
                        background-image: url('./images/image1.png');
                    }
                }
            }
        }
    }
    
</style>