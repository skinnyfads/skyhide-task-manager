import { createRouter, createWebHistory } from "vue-router";
import { storeToRefs } from "pinia";
import LoginPageVue from "../pages/LoginPage.vue";
import HomePageVue from "../pages/HomePage.vue";
import RegisterPageVue from "../pages/RegisterPage.vue";
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
  { path: "/register", name: "register-page", component: RegisterPageVue },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const { isLogin } = storeToRefs(useAuthStore());
  const path = to.path;

  if (isLogin.value) {
    if (path === "/login" || path === "/register") {
      next({ name: "home-page" });
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isLogin.value) {
      next({ name: "login-page" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
