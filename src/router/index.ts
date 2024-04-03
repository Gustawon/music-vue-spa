import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import HomeView from "../views/HomeView.vue";

import { Menu } from "../types/menu";

import { useAuthStore } from "@/stores/auth";
import { useMenuStore } from "@/stores/menu";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/discover",
    name: "discover",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/DiscoverView.vue"),
  },
  {
    path: "/library",
    name: "library",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/LibraryView.vue"),
  },
  {
    path: "/manage",
    name: "manage",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/ManageView.vue"),
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const menuItem = Menu[to.name as keyof typeof Menu];

  const menuStore = useMenuStore();

  if (!to.meta.requiresAuth) {
    menuStore.selectMenuItem(menuItem);
    next();
    return;
  }

  const store = useAuthStore();

  if (store.userLoggedIn) {
    menuStore.selectMenuItem(menuItem);
    next();
  } else {
    menuStore.selectMenuItem("home-menu");
    next({ name: "home" });
  }
});

export default router;
