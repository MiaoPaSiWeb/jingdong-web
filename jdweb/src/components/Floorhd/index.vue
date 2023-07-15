<template>
  <div class="floorhd">
    <h3 class="floorhd_tit">{{ hdtit }}</h3>
  </div>
</template>

<script>
export default {
  name: "Floorhd",
  props: {
    hdtit: {
      type: String,
      default: "这是默认标题",
    },
  },
};
</script>

<style lang="less" scoped>
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
</style>
