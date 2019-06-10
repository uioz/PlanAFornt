<template>
  <index-layout class="index">
    <template #navbar-area>
      <i-navbar></i-navbar>
    </template>
    <template #content-area>
      <index-intro></index-intro>
      <index-form></index-form>
    </template>
  </index-layout>
</template>
<script>
import iNavbar from "@/components/i-navbar";
import indexLayout from "./index-layout";
import indexForm from "./index-form";
import indexIntro from "./index-intro";
import { axios } from "../../plugins/axios.js";
import { Networking, BeforeFetch, AfterFetch } from "../../utils/interface.js";
import { store } from "../../store/store.js";

export default {
  name: "index",
  mixins: [Networking, BeforeFetch, AfterFetch, store],
  components: {
    iNavbar,
    indexLayout,
    indexForm,
    indexIntro
  },
  methods: {
    fetch() {
      if (this.networking) {
        return;
      }

      this.beforeFetch();

      axios
        .get("/assets")
        .then(response => {
          if (response) {
            this.setServerInfo(response.data.data);
          }
        })
        .finally(() => this.afterFetch());
    }
  },
  created() {
    this.fetch();
  }
};
</script>
<style>
</style>


