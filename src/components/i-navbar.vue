<template>
  <mu-appbar class="i-navbar" >
    <template #left>
      <mu-button icon >
        <font-awesome-icon icon="bars"></font-awesome-icon>
      </mu-button>Title
    </template>
    <template #right>
      <mu-button flat>LOGIN</mu-button>
    </template>
  </mu-appbar>
</template>
<script>

export default {
  name: "i-navbar"
};
</script>
<style>
</style>