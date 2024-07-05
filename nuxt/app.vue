<template>
  <div>
    <Head>
      <Title itemprop="name">
        3three.io - Web Hosting, Design & Development Made Easy
      </Title>
    </Head>
    <div id="app-layout" :class="[isCollapsed && 'g-sidenav-hidden']">
      <div class="min-height-300 position-absolute w-100 bg-success" />
      <Sidenav v-if="isAuthenticated" />
      <main class="main-content position-relative max-height-vh-100 h-100">
        <Navbar v-if="isAuthenticated" />
        <slot />
        <Footer v-if="isAuthenticated" />
        <Configurator v-if="isAuthenticated" />
      </main>
    </div>
  </div>
</template>

<script setup>
import Sidenav from "~~/examples/Sidenav";
import Navbar from "~~/examples/Navbar";
import Footer from "~~/examples/Footer";
import Configurator from "~~/examples/Configurator";

import { useNavStore } from "~~/stores/NavStore";
import setTooltip from "~~/assets/js/tooltip";
import { useAuthStore } from "~~/stores/AuthStore";

const { $isDemo } = useNuxtApp();
const navStore = useNavStore();
const authStore = useAuthStore();
const isAuthenticated = computed(() => authStore.isAuthenticated);
const isCollapsed = computed(() => navStore.isSidenavCollapsed);

onMounted(() => {
  setTooltip(navStore.bootstrap);
  if (process.client) {
    if (window.innerWidth < 768) {
      document.getElementById("app-layout").classList.add("g-sidenav-show");
    }
  }
});
useHead({
  bodyAttrs: {
    class: "bg-gray-100",
  },
});
</script>
