<template>
    <div v-html="htmlContent"></div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    name: 'PortfolioPage',
    data() {
      return {
        htmlContent: ''
      }
    },
    async mounted() {
      try {
        const response = await axios.get('http://localhost:8000/services-html')
        this.htmlContent = response.data
      } catch (error) {
        console.error('Failed to load HTML content:', error)
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  