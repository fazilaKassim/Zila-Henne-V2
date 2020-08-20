import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Accueil.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
  name: "Accueil",
    component: Home
  },
  {
    path: "/galerie",
    name: "Galerie",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function() {
      return import(/* webpackChunkName: "about" */ "../views/Galerie.vue");
    }
  },
  {
    path: "/boutique",
  name: "Boutique",
    component: Home
  },
  {
    path: "/tarifs",
  name: "Tarifs",
    component: Home
  },
  {
    path: "/contact",
  name: "Contact",
    component: Home
  }

];

const router = new VueRouter({
  routes
});

export default router;