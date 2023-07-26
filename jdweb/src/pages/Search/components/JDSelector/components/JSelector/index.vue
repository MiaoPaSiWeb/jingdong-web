<template>
  <div>
    <div class="J_selectorLine">
      <div class="sl-wrap">
        <div class="sl-key">{{ slTitle || "??" }}</div>
        <div class="sl-value">
          <div class="sl-v-list">
            <ul class="J_valueList">
              <li v-for="attr in slList" :key="attr.id">
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
  </div>
</template>

<script>
export default {
  name: "JSelector",
  props: ["slTitle", "slList"],
};
</script>

<style lang="less" scoped>
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
</style>
