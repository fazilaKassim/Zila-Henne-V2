import Vue from "vue";
import VueRouter from "vue-router";
import Accueil from "../views/Accueil.vue";
import Boutique from "../views/Boutique.vue";
import Galerie from "../views/Galerie.vue";
import Tarifs from "../views/Tarifs.vue";
import RendezVous from "../views/RendezVous.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Accueil",
    component: Accueil,
  },

  {
    path: "/boutique",
    name: "Boutique",
    component: Boutique,
  },

  {
    path: "/galerie",
    name: "Galerie",
    component: Galerie,
  },

  {
    path: "/tarifs",
    name: "Tarifs",
    component: Tarifs,
  },

  {
    path: "/rendezVous",
    name: "RendezVous",
    component: RendezVous,
  },

];

const router = new VueRouter({
  mode: "history",
  routes,
});
export default router;
