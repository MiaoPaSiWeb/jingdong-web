<template>
  <div
    class="outer"
    @mouseenter="outerMouse($event, 0)"
    @mouseleave="outerMouse($event, 1)"
  >
    <!-- 弹出框 -->
    <div v-show="popShow && popShowIndex != -1" class="hight-selector-pop">
      <ul>
        <li v-for="item in popShowData.extAttrs" :key="item.id">
          {{ item.name }}
        </li>
      </ul>
    </div>
    <!-- 内容 -->
    <div class="sl-wrap">
      <div class="sl-key">{{ "高级选项" }}</div>
      <div class="sl-value">
        <ul class="sl-v-list">
          <li
            v-for="(cate, index) in slList"
            :key="cate.id"
            v-show="index >= 3 && index < 12"
            @mouseenter="itemMouse($event, index, cate)"
          >
            <div
              class="heightExt"
              :class="{
                'heightExt-active': index == popShowIndex ? true : false,
              }"
            >
              <span>{{ cate.name }}</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="sl-ext">???</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JSelectorHight",
  props: ["slList"],
  data() {
    return {
      popShow: false,
      popShowIndex: -1,
      popShowData: {},
    };
  },
  methods: {
    itemMouse(e, index, cate) {
      console.log(e, cate.name);
      this.popShowIndex = index;
      this.popShowData = cate;
    },
    outerMouse(e, type) {
      console.log(e);
      if (type == 0) {
        this.popShow = true;
      } else {
        this.popShowIndex = -1;
        this.popShow = false;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.outer {
  position: relative;

  .sl-wrap {
    display: flex;
    flex-direction: row;
    width: 100%;
    background: #f3f3f3;
    border-bottom: 1px solid #ddd;
    .sl-key {
      width: 100px;
      padding-left: 10px;
      white-space: nowrap;
    }
    .sl-value {
      margin-left: 110px;
      padding: 5px 130px 5px 10px;
      zoom: 1;
      background: #fff;
      flex: 1;

      .sl-v-list {
        zoom: 1;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        li {
          .heightExt {
            padding: 5px 15px;
            margin-right: 10px;
            border: 1px solid #eee;
          }
          .heightExt-active {
            position: relative;
            color: red;
            border-top: 1px solid red;
            border-left: 1px solid red;
            border-right: 1px solid red;
            border-bottom: 1px solid transparent;
            background-color: #fff;
          }

          &:hover {
            color: red;
          }
        }
      }
    }
  }
}
// 高级筛选项弹出框
.hight-selector-pop {
  position: absolute;
  top: calc(100% - 7px);
  left: 0;
  width: 100%;
  border: 1px solid red;
  background-color: #fff;
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    li {
      padding: 5px 15px;
      margin-right: 10px;
      border: 1px solid #eee;
      cursor: pointer;

      &:hover {
        color: red;
      }
    }
  }
}
</style>
