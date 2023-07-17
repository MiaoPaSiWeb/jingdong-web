<template>
  <div class="w">
    <div class="add" @click="addPerson">添加一条数据</div>
    <ul>
      <li v-for="person in persons" :key="person.id">
        {{ person }}
        <span @click="deletePerson(person)">DELETE</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { jsonDb } from "@/utils/IndexDB";
import { nanoid } from "nanoid";

export default {
  name: "MyTest",
  data() {
    return {
      persons: [],
    };
  },
  mounted() {
    this.getAllPerson();
  },
  methods: {
    async getAllPerson() {
      var data = await jsonDb.selectAll();
      console.log("getAllPerson:", data);
      this.persons = data;
    },

    async addPerson() {
      const persion = {
        id: nanoid(), // 必须且值唯一
        json: "helloWord",
      };

      try {
        var result = await jsonDb.insert(persion);
        console.log(result);
        this.getAllPerson();
      } catch (error) {
        console.log("新增数据失败：", error);
      }
    },
    async deletePerson(person) {
      try {
        var result = await jsonDb.delete(person.id);
        console.log(result);
        this.getAllPerson();
      } catch (error) {
        console.log("删除数据失败：", error);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.add {
  display: inline-block;
  border: 1px solid red;
  padding: 12px;
}
ul {
  border: 1px solid red;
}
</style>
