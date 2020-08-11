<template>
  <div id="app">
    <app-header />
    <div class="app-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  components: {
    AppHeader,
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background: $bg-gray;
  height: 100vh;
}

.app-container {
  width: 80%;
  margin: auto;
  height: 100%;
}
</style>
