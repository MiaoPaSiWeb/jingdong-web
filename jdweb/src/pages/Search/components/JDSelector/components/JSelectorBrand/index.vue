<template>
  <div>
    <div class="sl-wrap">
      <div class="sl-key">{{ slTitle || "品牌" }}</div>
      <div class="sl-value">
        <ul class="sl-v-list">
          <li
            v-for="(item, index) in slList"
            :key="item.id"
            v-show="index < showMaxNUM"
          >
            <div class="brand">
              <img :src="imagePrefix + item.logoUrl" />
            </div>
          </li>
        </ul>
      </div>
      <div class="sl-ext"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JSelectorBrand",
  props: ["slTitle", "slList"],
  data() {
    return {
      imagePrefix: this.$mConfig.imagePrefix,
    };
  },
  computed: {
    showMaxNUM() {
      return 16;
    },
  },
};
</script>

<style lang="less" scoped>
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
    flex: 1;
    margin-left: 110px;
    padding: 5px 130px 5px 10px;
    background: #fff;

    .sl-v-list {
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

        &:hover {
          color: red;
        }
      }
    }
  }
}
</style>
