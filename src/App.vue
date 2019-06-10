<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
:root {
  --font-small: 0.875rem; /* 14px */
  --font-middle: 16px;
  --font-large: 1.125rem; /* 18px */
}

html {
  font: var(--font-middle) Helvetica, Arial, sans-serif;
}
</style>
