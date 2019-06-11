<template>
  <index-layout class="done">
    <template #navbar-area>
      <i-navbar></i-navbar>
    </template>
    <template #content-area>
      <mu-container>
        <mu-row>
          <mu-col span="12">
            <mu-alert color="success">
              <font-awesome-icon icon="check-circle"></font-awesome-icon>
              <div>专业选择完成!</div>
            </mu-alert>
            <div style="clear:both;"></div>
            <div class="button-container pull-right">
              <mu-button to="/">返回首页</mu-button>
            </div>
          </mu-col>
        </mu-row>
      </mu-container>
    </template>
  </index-layout>
</template>
<script>
import iNavbar from "@/components/i-navbar";
import indexLayout from "../index/index-layout";

export default {
  name: "done",
  components: {
    iNavbar,
    indexLayout
  }
};
</script>
<style>
.done .result-panel {
  padding: 0.5rem 1rem;
}

.done .button-container{
  margin-top: 1rem;
}
</style>


