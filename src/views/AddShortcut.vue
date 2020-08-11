<template>
  <div id="add-shortcut">
    <h2 class="title">Snelkoppeling toevoegen</h2>
    <div class="form-box">
      <form @submit.prevent="addShortcut()">
        <section class="form-section">
          <label for="name">Naam</label>
          <br />
          <input v-model="name" type="text" id="name" />
        </section>
        <section class="form-section">
          <label for="link">Link</label>
          <br />
          <input v-model="link" type="text" id="link" />
        </section>
        <section class="form-section">
          <label for="description">Beschrijving</label>
          <br />
          <textarea v-model="description" name="description" id="description" cols="40" rows="3"></textarea>
        </section>
        <section class="form-section">
          <button type="submit" class="submit">Toevoegen</button>
        </section>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddShortcut",
  data() {
    return {
      name: "",
      description: "",
      link: ""
    };
  },
  methods: {
      addShortcut() {
          const shortcuts = JSON.parse(localStorage.getItem('shortcuts')) || [];

          const id = Math.ceil(Math.random() * (shortcuts.length + 1));

          shortcuts.push({
              id,
              name: this.name,
              description: this.description,
              link: this.link
          });

          localStorage.setItem('shortcuts', JSON.stringify(shortcuts));

          this.$router.push('/');
      }
  }
};
</script>

<style lang="scss" scoped>
#add-shortcut {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 45px 0;
}

.title {
  font-family: Arial, Helvetica, sans-serif;
}

.form {
  &-box {
    padding: 25px 0;
  }

  &-section {
    margin: 15px 0;
  }
}

input,
textarea {
  width: 100%;
  padding: 10px;
  font-family: Arial, Helvetica, sans-serif;
}

label {
  font-family: Arial, Helvetica, sans-serif;
}

.submit {
  width: 100%;
  padding: 15px;
  background: $blue;
  border: none;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
}
</style>