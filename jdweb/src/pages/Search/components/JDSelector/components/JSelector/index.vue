<template>
  <div>
    <div class="sl-wrap">
      <div class="sl-key">{{ slTitle || "??" }}</div>
      <div class="sl-value">
        <ul class="sl-v-list">
          <li v-for="attr in slList" :key="attr.id">
            <div class="ext">
              <span>{{ attr.name }}</span>
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
  name: "JSelector",
  props: ["slTitle", "slList"],
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
        .ext {
          padding: 10px 15px;

          span {
            cursor: pointer;
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
