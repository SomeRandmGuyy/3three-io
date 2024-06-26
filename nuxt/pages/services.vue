<template>
    <div>
      <div v-html="content"></div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  const content = ref('');
  
  onMounted(async () => {
    try {
      const response = await axios.get('/services.html');
      content.value = response.data;
    } catch (error) {
      console.error('Failed to load HTML content:', error);
    }
  });
  
  definePageMeta({
    layout: 'customer',
    public: true // Mark this page as public
  });
  </script>
  