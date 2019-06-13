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
import Message from "../../plugins/musemessage.js";

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

      if (!this.hasServerInfo) {
        axios
          .get("/assets")
          .then(response => {
            if (response) {

              const data = response.data.data;
              // from store.js
              this.setServerInfo(data);

              if(typeof data.clientMessage === 'string' && data.clientMessage.length >= 1){
                Message.alert(data.clientMessage, "通知");
              }

            }
          })
          .finally(() => this.afterFetch());
      }
    }
  },
  created() {
    this.fetch();
  }
};
</script>