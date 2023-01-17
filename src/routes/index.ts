import { createRouter, createWebHistory } from "vue-router";
import LoginPageVue from "../pages/LoginPage.vue";

const routes = [{ path: "/login", component: LoginPageVue }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
