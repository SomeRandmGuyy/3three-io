<template>
    <div v-html="htmlContent"></div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    name: 'HomePage',
    data() {
      return {
        htmlContent: ''
      }
    },
    async fetch() {
      try {
        const response = await axios.get('http://localhost:8000/pricing-html')
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
  