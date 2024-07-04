<template>
    <div>
      <LoadingSpinner v-if="loading" />
      <main-navbar :color-on-scroll="0"></main-navbar>
      <transition name="fade" mode="out-in">
        <nuxt :key="$route.fullPath" @trigger-scroll="handleScroll"/>
      </transition>
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
    },
    data() {
      return {
        loading: true,
      };
    },
    watch: {
      '$route' (to, from) {
        this.loading = true;
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.loading = false;
      });
    },
    methods: {
      handleScroll() {
        this.loading = false;
      }
    }
  }
  </script>
  
  <style>
  /* Fade transition for route changes */
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  
  /* Loading spinner overlay */
  .loading-spinner {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.8);
    z-index: 9999;
  }
  </style>
  