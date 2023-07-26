<template>
  <div id="J_selector" class="selector">
    <!-- 【筛选项】品牌 -->
    <JSelectorLine slTitle="品牌" :slList="selectors.brands" showType="0" />
    <!-- 其他筛选项 -->
    <div
      class="J_selectorLine"
      v-for="(cate, index) in selectors.extCates"
      :key="cate.id"
      v-show="index < 3"
    >
      <div class="sl-wrap">
        <div class="sl-key">{{ cate.name }}</div>
        <div class="sl-value">
          <div class="sl-v-list">
            <ul class="J_valueList">
              <li v-for="attr in cate.extAttrs" :key="attr.id">
                <div class="ext">
                  <span>{{ attr.name }}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="sl-ext"></div>
      </div>
    </div>
    <!-- 高级筛选项 -->
    <div
      class="J_selectorLine"
      @mouseenter="selectorMouse($event, 0)"
      @mouseleave="selectorMouse($event, 1)"
    >
      <!-- 弹出框 -->
      <div
        v-show="hightSelectorPop && hightSelectorPopIndex != -1"
        class="hight-selector-pop"
      >
        {{ hightSelectorPopData }}
      </div>
      <!-- 内容 -->
      <div class="sl-wrap">
        <div class="sl-key">{{ "高级选项" }}</div>
        <div class="sl-value">
          <div class="sl-v-list">
            <ul class="J_valueList">
              <li
                v-for="(cate, index) in selectors.extCates"
                :key="cate.id"
                v-show="index >= 3 && index < 12"
                @mouseenter="selectorItemMouseenter($event, index, cate)"
              >
                <div
                  class="heightExt"
                  :class="{
                    'heightExt-active':
                      index == hightSelectorPopIndex ? true : false,
                  }"
                >
                  <span>{{ cate.name }}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="sl-ext">???</div>
      </div>
    </div>
  </div>
</template>

<script>
import JSelectorLine from "./components/JSelectorLine";
export default {
  name: "JDSelector",
  components: { JSelectorLine },
  props: {
    selectors: Object,
  },
  data() {
    return {
      imagePrefix: this.$mConfig.imagePrefix,
      hightSelectorPopIndex: -1,
      hightSelectorPop: false,
      hightSelectorPopData: {},
    };
  },
  methods: {
    selectorItemMouseenter(e, index, cate) {
      console.log(e, cate.name);
      this.hightSelectorPopIndex = index;
      this.hightSelectorPopData = cate;
    },
    selectorMouse(e, type) {
      console.log(e);
      if (type == 0) {
        this.hightSelectorPop = true;
      } else {
        this.hightSelectorPopIndex = -1;
        this.hightSelectorPop = false;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.selector {
  border-top: 1px solid #ddd;
  background: #fff;
  margin-bottom: 10px;
}
.J_selectorLine {
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
        .J_valueList {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          li {
            .brand {
              border: 1px solid #eee;
              img {
                width: 120px;
                height: 48px;
                object-fit: cover;
                transition: all 0.5s;
              }
              &:hover {
                border: 1px solid red;
                img {
                  transform: scale(0.9);
                }
              }
            }
            .ext {
              padding: 10px 15px;
              span {
                cursor: pointer;
              }
            }

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
}
// 高级筛选项弹出框
.hight-selector-pop {
  position: absolute;
  top: calc(100% - 7px);
  left: 0;
  width: 100%;
  border: 1px solid red;
  background-color: #fff;
}
</style>
