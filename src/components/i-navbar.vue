<template>
  <mu-appbar class="i-navbar">
    <template #left>
      <mu-button icon>
        <font-awesome-icon icon="bars"></font-awesome-icon>
      </mu-button>
      <!-- <img v-if="ClientLogoIfHave" style="height:40px;" :src="ClientLogoIfHave" alt=""> -->
      {{ClientNameIfHave}}
    </template>
    <template #right>
      <mu-button flat>
        <font-awesome-icon icon="ellipsis-v"></font-awesome-icon>
      </mu-button>
    </template>
  </mu-appbar>
</template>
<script>
import { store } from "../store/store.js";

export default {
  name: "i-navbar",
  mixins: [store],
  computed:{
    ClientNameIfHave(){
      return this.serverInfo && this.serverInfo.clientName;
    },
    ClientLogoIfHave(){
      return this.serverInfo && this.serverInfo.logo;
    }
  }
};
</script>
<style>
</style>