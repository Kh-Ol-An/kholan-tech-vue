import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MainPage",
    component: () => import("@/views/MainPage.vue")
  },
  {
    path: "/game",
    name: "GamePage",
    component: () => import("@/views/GamePage.vue")
  },
  {
    path: "/cv_1.0",
    name: "CVPage1",
    component: () => import("@/views/CVPage1.vue")
  },
  {
    path: "/cv_2.0",
    name: "CVPage2",
    component: () => import("@/views/CVPage2.vue")
  },
  {
    path: "/cv_3.0",
    name: "CVPage3",
    component: () => import("@/views/CVPage3.vue")
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
