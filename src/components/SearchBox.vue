<template>
  <div id="search-box">
    <form ref="searchForm" @submit.prevent="searchQuery()">
      <input
        type="text"
        class="search"
        v-model="query"
        autofocus
        placeholder="Wat gaan we eens opzoeken?"
      />
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchBox",
  data() {
    return {
      query: "",
    };
  },
  methods: {
      searchQuery() {
          open(`https://google.com/search?q=${this.query}`, '_blank');
          this.$refs.searchForm.reset();
      }
  }
};
</script>

<style lang="scss" scoped>
#search-box {
  width: 100%;
}

.search {
  width: 100%;
  border: none;
  border-bottom: 3px solid transparentize($color: $blue, $amount: 0.4);
  font-size: 48px;
  background: transparent;
  outline: none;
  color: $blue;

  &::placeholder {
    color: transparentize($color: $blue, $amount: 0.4);
  }

  &:focus {
    border-bottom: 3px solid $blue;

    &::placeholder {
      color: $blue;
    }
  }
}
</style>