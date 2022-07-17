import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../pages/Login.vue";
import User from "../pages/HomeUser.vue";
import Admin from "../pages/HomeAdmin.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/",
    name: "User",
    component: User,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
