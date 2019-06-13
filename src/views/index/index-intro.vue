<template>
  <mu-paper class="index-intro" :z-depth="2">
    <img v-if="GetImageSrcIfHave" class="auto-img" :src="GetImageSrcIfHave">
  </mu-paper>
</template>
<script>
import { store } from "../../store/store.js";

export default {
  name: "index-intro",
  mixins: [store],
  computed: {
    GetImageSrcIfHave() {
      return this.serverInfo && this.serverInfo.logo || '';
    },
    GetClientName() {
      return this.serverInfo && this.serverInfo.clientName || '';
    }
  }
};
</script>
<style>
.index-intro {
  margin: 0 auto;
  margin-bottom: 1rem;
  width: 80%;
}
</style>


