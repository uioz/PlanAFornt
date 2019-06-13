<template>
  <index-layout>
    <template #navbar-area>
      <i-navbar></i-navbar>
    </template>
    <template #content-area>
      <!-- only loaded data then create component -->
      <choice-detail v-if="model" :source="model"></choice-detail>
    </template>
  </index-layout>
</template>
<script>
import indexLayout from "../index/index-layout";
import iNavbar from "@/components/i-navbar";
import choiceDetail from "./choice-detail";
import { store } from "../../store/store.js";
import { axios } from "../../plugins/axios.js";
import { Networking, BeforeFetch, AfterFetch } from "../../utils/interface.js";

export default {
  name: "choice",
  mixins: [store, Networking, BeforeFetch, AfterFetch],
  components: {
    indexLayout,
    iNavbar,
    choiceDetail
  },
  data() {
    return {
      model: undefined
    };
  },
  methods: {
    fetch() {
      if (this.networking) {
        return;
      }

      this.beforeFetch();

      axios
        .get("/student/info", {
          params: this.userData
        })
        .then(response => {
          if (response) {
            this.model = response.data.data;
          } else {
            this.$router.replace("/");
          }
        })
        .finally(() => this.afterFetch());

    }
  },
  created() {
    if (this.userData.name.length <= 0 || this.userData.number.length <= 0) {
      // 没有填写内容重定向到首页
      return this.$router.replace("/");
    }

    this.fetch();
  }
};
</script>
<style>
</style>


