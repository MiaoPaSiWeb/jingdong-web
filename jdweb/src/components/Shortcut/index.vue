<template>
  <div class="shortcut">
    <div class="w">
      <div class="container clearfix">
        <div class="location fl">上海</div>
        <ul class="right-nav fr clearfix">
          <li
            v-for="(val, index) in rightNavDatas"
            :key="index"
            class="shortcut_btn"
          >
            {{ val }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JdShortcut",
  data() {
    return {
      rightNavDatas: [
        "你好，请登录",
        "我的订单",
        "我的京东",
        "企业采购",
        "商家服务",
        "网站导航",
        "手机京东",
        "网站无障碍",
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.shortcut {
  border-bottom: 1px solid #ddd;
  background-color: #e3e4e5;

  .container {
    height: 30px;
    line-height: 30px;

    .right-nav {
      li {
        float: left;
        position: relative;

        &::after {
          content: "";
          position: absolute;
          top: 12.5px;
          right: 0px;
          width: 1px;
          height: 5px;
          border-right: 1px black solid;
        }
      }

      li:last-child {
        &::after {
          content: "";
          position: absolute;
          top: 12.5px;
          right: 0px;
          width: 1px;
          height: 5px;
          border-right: 1px red solid;
        }
      }
    }
  }

  .shortcut_btn {
    padding: 0 12px;
    &:hover {
      background-color: white;
    }
  }
}
</style>
