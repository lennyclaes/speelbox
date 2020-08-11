<template>
  <a :href="link" target="_blank">
    <div class="shortcut">
      <!-- <div class="shortcut__icon">
        <img class="icon" src="@/assets/logo.png" />
      </div>-->
      <div class="shortcut__description">
        <h3 class="shortcut__name">{{name}}</h3>
        <p class="description">{{description}}</p>
        <button class="del" @click.prevent="removeShortcut()"><trashcon-icon class="del-icon" /></button>
      </div>
    </div>
  </a>
</template>

<script>
import TrashconIcon from './TrashconIcon.vue';

export default {
  name: "Shortcut",
  components: {
      TrashconIcon
  },
  props: {
    name: {
      default: "Nieuwe snelkoppeling",
    },
    description: {
        default: "Dit is een snelkoppeling"
    },
    link: {
        default: '/'
    },
    id: {
        default: ''
    }
  },
  methods: {
    removeShortcut() {
        const shortcuts = JSON.parse(localStorage.getItem('shortcuts'));

        for (let i = 0; i < shortcuts.length; i++) {
            if(shortcuts[i].id == this.$props.id) {
                shortcuts.splice(i, 1);
                break;
            }
        }

        localStorage.setItem('shortcuts', JSON.stringify(shortcuts));
        this.$destroy();
        this.$el.parentNode.removeChild(this.$el);
    }
  }
};
</script>

<style lang="scss" scoped>
.shortcut {
  padding: 10px;
  background: #ffffff;
  box-shadow: 2px 2px 8px 0 #c9c9c9;
  display: flex;
  align-items: flex-start;
  position: relative;

  &__description {
    padding-left: 25px;
    font-family: Arial, Helvetica, sans-serif;
  }
}

.icon {
  width: 75px;
  height: 75px;
}

a {
  text-decoration: none;
  color: #000000;
  transition: 0.1s ease-in-out;

  &:hover {
    transform: scale(1.06);
  }
}

.del {
    position: absolute;
    z-index: 20;
    cursor: pointer;
    top: 10px;
    right: 10px;
    border: none;
    background: none;
    transition: color 0.1s linear;

    &:hover {

        &-del {
            fill: $red;
        }
    }
}
</style>