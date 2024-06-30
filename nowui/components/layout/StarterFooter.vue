<template>
    <footer class="footer"
            :class="{[`footer-${type}`]: type}"
            :data-background-color="backgroundColor">
      <div class="container">
        <nav>
          <ul>
            <li>
              <a href="/">
                3three.io
              </a>
            </li>
            <li>
              <a href="/about-us">
                About Us
              </a>
            </li>
            <li>
              <a href="/blog">
                Blog
              </a>
            </li>
            <li>
              <a href="/contact-us">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
        <div class="copyright">
          &copy; {{year}}, Designed by
          <a href="https://3three.me" target="_blank" class="highlighted">3three</a>. Coded by
          <a href="https://github.com/SomeRandmGuyy" target="_blank" class="highlighted">Ove Govender</a> and
          <a href="https://nuxt.3three.io/" target="_blank" class="highlighted">3three.io</a>.
        </div>
      </div>
    </footer>
  </template>
  
  <script>
    export default {
      props: {
        backgroundColor: String,
        type: String
      },
      data(){
        return {
          year: new Date().getFullYear()
        }
      }
    }
  </script>
  
  <style scoped>
  .footer a.highlighted {
    color: #32CD32; /* Light green color same as the Buy Now button */
  }
  </style>
  