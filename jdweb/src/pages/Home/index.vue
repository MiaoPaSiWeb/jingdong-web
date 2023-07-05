<template>
    <div>
        这是首页组件
    </div>
</template>

<script>
    export default {
        name:'Home',
        mounted(){
            this.getBannerListData();
        },
        methods:{
            async getBannerListData(){
                let result = await this.$API.reqGetBannerList();
                console.log(result);
            }
        }
    }
</script>

<style lang="less" scoped>

</style>