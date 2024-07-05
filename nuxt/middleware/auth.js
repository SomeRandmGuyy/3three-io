import { defineNuxtRouteMiddleware } from "#app";
import { useAuthStore } from "~~/stores/AuthStore";

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();

  if (!authStore.checkIsAuthenticated() && !to.meta.public) {
    return navigateTo('/login');
  }
});
