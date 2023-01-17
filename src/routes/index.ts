import { createRouter, createWebHistory } from "vue-router";
import { storeToRefs } from "pinia";
import LoginPageVue from "../pages/LoginPage.vue";
import HomePageVue from "../pages/HomePage.vue";
import useAuthStore from "../stores/auth";

const routes = [
  {
    path: "/",
    name: "home-page",
    component: HomePageVue,
    meta: {
      requiresAuth: true,
    },
  },
  { path: "/login", name: "login-page", component: LoginPageVue },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const { login } = storeToRefs(useAuthStore());

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!login.value) {
      next({ name: "login-page" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
