<template>
  <div class="index">
    <mu-button @click="handleButtonClick">testing</mu-button>
  </div>
</template>
<script>
import iNavbar from "@/components/i-navbar";
import { axios } from "../../plugins/axios.js";
import { Networking, BeforeFetch, AfterFetch } from "../../utils/interface.js";

export default {
  name: "index",
  mixins: [Networking, BeforeFetch, AfterFetch, axios],
  components: {
    iNavbar
  },
  methods: {
    handleButtonClick() {
      if (this.networking) {
        return;
      }

      this.beforeFetch();

      axios
        .get("/assets")
        .then(response => {
          debugger;
          if (response) {
          }
        })
        .finally(() => this.afterFetch());
    }
  }
};
</script>
<style>
</style>


