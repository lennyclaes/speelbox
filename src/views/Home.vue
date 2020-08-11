<template>
  <div class="home">
    <div class="search">
      <search-box />
    </div>
    <div class="shortcuts-section">
      <h2 class="title">
        Snelkoppelingen
        <add-shortcut-button />
      </h2>
      <div class="shortcuts">
        <shortcut
          v-for="shortcut in getShortcuts"
          :key="shortcut.id"
          :name="shortcut.name"
          :link="shortcut.link"
          :description="shortcut.description"
          :id="shortcut.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SearchBox from "../components/SearchBox.vue";
import Shortcut from "../components/Shortcut.vue";
import AddShortcutButton from "../components/AddShortcutButton.vue";

export default {
  name: "Home",
  components: {
    SearchBox,
    Shortcut,
    AddShortcutButton,
  },
  computed: {
    getShortcuts() {
      const shortcuts = JSON.parse(localStorage.getItem("shortcuts")) || [];

      return shortcuts;
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.title {
  font-family: Arial, Helvetica, sans-serif;
}

.shortcuts {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px 15px;
  padding: 10px 0;
}
</style>
