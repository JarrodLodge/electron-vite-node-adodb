import AppVue from "@/App.vue";
import {
    createRouter,
    createWebHashHistory,
    RouteRecordRaw,
  } from "vue-router";
  
  const routes: Array<RouteRecordRaw> = [
    {
      path: "/",
      name: "app",
      component: AppVue,
    },
  ];
  
  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });
  
  router.beforeEach(async (to, from, next) => {
    next();
  });
  
  export default router;
  