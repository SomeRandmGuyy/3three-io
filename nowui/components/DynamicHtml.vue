<template>
    <div v-html="htmlContent" class="dynamic-html"></div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        htmlContent: ''
      };
    },
    props: {
      htmlFilePath: {
        type: String,
        required: true
      }
    },
    mounted() {
      this.loadHtmlContent(this.htmlFilePath);
    },
    methods: {
      async loadHtmlContent(filePath) {
        try {
          const response = await axios.get(filePath);
          this.htmlContent = response.data;
        } catch (error) {
          console.error('Error loading HTML content:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .dynamic-html {
    /* Add your styles here if needed */
  }
  </style>
  