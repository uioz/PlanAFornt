<template>
  <div class="index-layout">
    <div class="navbar-area">
      <slot name="navbar-area"></slot>
    </div>
    <div class="content-area">
      <slot name="content-area"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "index-layout"
};
</script>
<style>
.index-layout > .content-area {
  margin-top: 1rem;
}
</style>


