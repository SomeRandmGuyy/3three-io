<template>
  <div>
    <main-navbar :color-on-scroll="0"></main-navbar>
    <nuxt />
    <main-footer></main-footer>
  </div>
</template>
<script>
  import MainNavbar from "@/components/layout/StarterNavbar.vue";
  import MainFooter from "@/components/layout/StarterFooter.vue";
  export default {
    components: {
      MainFooter,
      MainNavbar
    }
  }
</script>
<style>
</style>
