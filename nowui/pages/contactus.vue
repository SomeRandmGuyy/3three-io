<template>
    <div>
      <DynamicHtml htmlFilePath="/contactus.html" />
    </div>
  </template>
  
  <script>
  import DynamicHtml from '@/components/DynamicHtml.vue';
  
  export default {
    components: {
      DynamicHtml
    }
  };
  </script>
  
  <style scoped>
  /* Add your styles here if needed */
  </style>
  