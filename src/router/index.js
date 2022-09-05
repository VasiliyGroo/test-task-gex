import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: {
        title: "Сокращение ссылок • Сервис",
      },
    },
    {
      path: "/login",
      name: "LogIn",
      component: () => import("../views/LogIn.vue"),
      meta: {
        title: "Авторизация • Сокращение ссылок • Сервис",
      },
    },
    {
      path: "/registration",
      name: "Registration",
      component: () => import("../views/Register.vue"),
      meta: {
        title: "Регистрация • Сокращение ссылок • Сервис",
      },
    },
    {
      path: "/404",
      name: "NotFound",
      component: NotFound,
      meta: {
        title: "Страница не найдена • Сокращение ссылок • Сервис",
      },
    },
    {
      path: "/:catchAll(.*)",
      redirect: "404",
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;

  // chrome
  document.body.scrollTop = 0;
  // firefox
  document.documentElement.scrollTop = 0;
  // safari
  window.pageYOffset = 0;
  next();
});

export default router;
