<template>
  <div id="J_selector" class="selector">
    <!-- 【筛选项】品牌 -->
    <JSelectorBrand :slList="selectors.brands" />
    <!-- 其他筛选项 -->
    <div
      v-for="(cate, index) in selectors.extCates"
      :key="cate.id"
      v-show="index < 3"
    >
      <JSelector :slTitle="cate.name" :slList="cate.extAttrs" showType="0" />
    </div>
    <!-- 高级筛选项 -->
    <JSelectorHight :slList="selectors.extCates" />
  </div>
</template>

<script>
import JSelectorBrand from "./components/JSelectorBrand";
import JSelector from "./components/JSelector";
import JSelectorHight from "./components/JSelectorHight";
export default {
  name: "JDSelector",
  components: { JSelectorBrand, JSelector, JSelectorHight },
  props: {
    selectors: Object,
  },
  data() {
    return {};
  },
  methods: {},
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
