<template>
  <mu-container>
    <mu-row gutter>
      <mu-col span="12">
        <mu-form ref="form" :model="FormData">
          <mu-form-item label="姓名" prop="name" :rules="FormRules.name">
            <mu-text-field v-model="FormData.name" prop="name"></mu-text-field>
          </mu-form-item>
          <mu-form-item label="学号" prop="number" :rules="FormRules.number">
            <mu-text-field type="number" v-model="FormData.number" prop="number"></mu-text-field>
          </mu-form-item>
          <mu-form-item>
            <mu-button color="primary" >填写专业</mu-button>
            <mu-button color="secondary">查询结果</mu-button>
          </mu-form-item>
        </mu-form>
      </mu-col>
    </mu-row>
  </mu-container>
</template>
<script>
export default {
  name: "index-form",
  data() {
    return {
      FormData: {
        name: "",
        number: ""
      },
      FormRules: {
        // TODO 等待添加表单校验 
        // see https://muse-ui.org/#/zh-CN/form
        name: [],
        number: []
      }
    };
  },
  methods: {

  }
};
</script>
<style>
</style>


