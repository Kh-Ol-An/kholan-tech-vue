import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MainPage",
    component: () => import("@/views/MainPage.vue")
  },
  // {
  //   path: "/game",
  //   name: "GamePage",
  //   component: () => import("@/views/GamePage.vue")
  // },
  {
    path: "/cv",
    name: "CVPage",
    component: () => import("@/views/CVPage.vue")
  },
  {
    path: "/contacts",
    name: "ContactsPage",
    component: () => import("@/views/ContactsPage.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
