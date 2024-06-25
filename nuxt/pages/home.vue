<template>
    <div>
      <div v-if="isAuthenticated">
        <!-- Authenticated content, if any -->
      </div>
      <div v-else v-html="content"></div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import { useAuthStore } from '~~/stores/AuthStore';
  
  const authStore = useAuthStore();
  const isAuthenticated = authStore.isAuthenticated;
  const content = ref('');
  
  onMounted(async () => {
    if (!isAuthenticated) {
      try {
        const response = await axios.get('/index.html');
        content.value = response.data;
      } catch (error) {
        console.error('Failed to load HTML content:', error);
      }
    }
  });
  </script>
  
  <script>
  export default {
    layout: 'default', // Use the customer layout for this page
  };
  </script>
  