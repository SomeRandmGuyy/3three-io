<template>
  <div>
    <LoadingSpinner v-if="$store.state.loading" />
    <main-navbar :color-on-scroll="0"></main-navbar>
    <nuxt />
    <main-footer></main-footer>
  </div>
</template>

<script>
import MainNavbar from "@/components/layout/StarterNavbar.vue";
import MainFooter from "@/components/layout/StarterFooter.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";

export default {
  components: {
    MainFooter,
    MainNavbar,
    LoadingSpinner
  }
}
</script>

<style>
/* Ensure the app content is not covered by the spinner */
.loading {
  pointer-events: none;
}
</style>
