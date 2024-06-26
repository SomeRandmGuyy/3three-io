import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      title: 'Nuxt Argon Dashboard 2 PRO Laravel by Creative Tim & UPDIVISION',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css' },
        { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.6/css/all.css' },
        { rel: 'stylesheet', href: 'css/nucleo-icons.css' },
        { rel: 'stylesheet', href: 'css/nucleo-svg.css' },
        { rel: 'stylesheet', href: 'css/creativetim/creativetim.min.css' }
      ],
      script: [
        { type: 'text/javascript', src: 'https://kit.fontawesome.com/42d5adcbca.js', async: true },
        { type: 'text/javascript', src: 'https://buttons.github.io/buttons.js', async: true },
        { type: 'text/javascript', src: 'js/core/jquery.min.js' },
        { type: 'text/javascript', src: 'js/core/popper.min.js' },
        { type: 'text/javascript', src: 'js/core/bootstrap.min.js' },
        { type: 'text/javascript', src: 'js/plugins/perfect-scrollbar.jquery.min.js' },
        { type: 'text/javascript', src: 'js/plugins/bootstrap-switch.js' },
        { type: 'text/javascript', src: 'js/plugins/nouislider.min.js' },
        { type: 'text/javascript', src: 'js/plugins/glide.js' },
        { type: 'text/javascript', src: 'js/plugins/moment.min.js' },
        { type: 'text/javascript', src: 'js/plugins/choices.min.js' },
        { type: 'text/javascript', src: 'js/plugins/datetimepicker.js' },
        { type: 'text/javascript', src: 'js/plugins/jasny-bootstrap.min.js' },
        { type: 'text/javascript', src: 'js/plugins/headroom.min.js' },
        { type: 'text/javascript', src: 'https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE' },
        { type: 'text/javascript', src: 'js/argon-design-system.min.js?v=1.0.2' },
        {
          type: 'text/javascript',
          innerHTML: `
            function argonScripts() {
              if (document.querySelectorAll('.glide').length) {
                new Glide('.glide', {
                  type: 'carousel',
                  startAt: 0,
                  focusAt: 2,
                  perTouch: 1,
                  perView: 4
                }).mount();
              }

              if (document.querySelectorAll('.testimonial-glide').length) {
                new Glide('.testimonial-glide', {
                  type: 'carousel',
                  startAt: 0,
                  focusAt: 2,
                  perTouch: 1,
                  perView: 4
                }).mount();
              }

              if (document.querySelectorAll('.map').length) {
                ArgonKit.initGoogleMaps();
                ArgonKit.initGoogleMaps2();
              }
            }
            argonScripts();
          `
        }
      ],
      __dangerouslyDisableSanitizers: ['script']
    }
  },
  components: {
    global: true,
    dirs: ['~/components/icons', '~/components']
  },
  imports: {
    autoImport: true
  },
  css: [
    '@/assets/css/nucleo-svg.css',
    '@/assets/css/nucleo-icons.css',
    '@/assets/scss/argon-dashboard.scss'
  ],
  modules: ['@pinia/nuxt'],
  plugins: [
    '~/plugins/axios.js'
  ],
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL,
      isDemo: false
    }
  },
  vite: {
    build: {
      target: 'esnext'
    },
    server: {
      port: 3001
    }
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push(
        { name: 'about', path: '/about', component: resolve(__dirname, 'pages/about.vue') },
        { name: 'checkers', path: '/checkers', component: resolve(__dirname, 'pages/checkers.vue') },
        { name: 'contact', path: '/contact', component: resolve(__dirname, 'pages/contact.vue') },
        { name: 'home', path: '/home', component: resolve(__dirname, 'pages/home.vue') },
        { name: 'portfolio', path: '/portfolio', component: resolve(__dirname, 'pages/portfolio.vue') },
        { name: 'pricing', path: '/pricing', component: resolve(__dirname, 'pages/pricing.vue') },
        { name: 'products', path: '/products', component: resolve(__dirname, 'pages/products.vue') },
        { name: 'services', path: '/services', component: resolve(__dirname, 'pages/services.vue') },
        { name: 'support', path: '/support', component: resolve(__dirname, 'pages/support.vue') },
        { name: 'vm-pricing', path: '/vm-pricing', component: resolve(__dirname, 'pages/vm-pricing.vue') },
        { name: 'web-pricing', path: '/web-pricing', component: resolve(__dirname, 'pages/web-pricing.vue') },
        { name: 'wp-pricing', path: '/wp-pricing', component: resolve(__dirname, 'pages/wp-pricing.vue') }
      );
    }
  }
});
