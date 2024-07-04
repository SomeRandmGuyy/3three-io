<!-- components/LoadingSpinner.vue -->
<template>
    <div class="loading-overlay" v-if="loading">
      <PulseLoader :loading="loading" color="#7CB342" />
    </div>
  </template>
  
  <script>
  import { PulseLoader } from 'vue-spinner/dist/vue-spinner.min.js';
  
  export default {
    components: { PulseLoader },
    data() {
      return {
        loading: false
      };
    }
  }
  </script>
  
  <style>
  .loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 9999;
  }
  </style>
  