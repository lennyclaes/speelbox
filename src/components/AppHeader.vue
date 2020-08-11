<template>
  <div class="header">
    <div class="container">
      <router-link to="/">
        <h1 class="title">Speelbox</h1>
      </router-link>
      <p class="sub">Van zoekbalk tot speelidee</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style lang="scss" scoped>
.header {
  box-shadow: 0 3px 8px 0 #c9c9c9;
  background: #ffffff;
}

.container {
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
}

a {
    color: #000000;
    text-decoration: none;
}

.title, .sub {
    font-family: Arial, Helvetica, sans-serif;
}
</style>