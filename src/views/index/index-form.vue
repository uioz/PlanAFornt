<template>
  <mu-container class="index-form">
    <mu-row gutter>
      <mu-col span="12">
        <mu-form ref="form" :model="userData">
          <mu-form-item label="学号" prop="number" :rules="FormRules.number">
            <mu-text-field type="number" v-model="userData.number" prop="number"></mu-text-field>
          </mu-form-item>
          <mu-form-item label="姓名" prop="name" :rules="FormRules.name">
            <mu-text-field v-model="userData.name" prop="name"></mu-text-field>
          </mu-form-item>
          <mu-form-item>
            <div class="operation-area">
              <mu-button :disabled="buttonLock" to="/choice" color="primary">填报专业</mu-button>
              <mu-button :disabled="buttonLock" to="/query" color="secondary">查询结果</mu-button>
            </div>
          </mu-form-item>
        </mu-form>
      </mu-col>
    </mu-row>
  </mu-container>
</template>
<script>
import { store } from "../../store/store.js";

export default {
  name: "index-form",
  mixins: [store],
  data() {
    return {
      buttonLock: true, // 操作区域被锁住
      FormRules: {
        name: [{ validate: val => !!val, message: "请填写姓名" }],
        number: [{ validate: val => !!val, message: "请填写学号" }]
      }
    };
  },
  methods: {},
  watch: {
    // 从 store 中读取
    userData: {
      deep: true,
      immediate: true,
      handler({ name, number }) {
        if (name.length > 0 && number.length > 0) {
          this.buttonLock = false;
        } else {
          this.buttonLock = true;
        }
      }
    }
  }
};
</script>
<style>
.index-form .operation-area {
  display: flex;
  width: 100%;
  justify-content: space-around;
}
</style>


