import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddShortcut from '../views/AddShortcut.vue';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Speelbox',
    component: Home
  },
  {
    path: '/add-shortcut',
    name: 'Snelkoppeling toevoegen',
    component: AddShortcut
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});

export default router
