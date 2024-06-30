export default {
  // Enabling SPA mode
  mode: 'spa',

  // Enabling Static Site Generation
  target: 'static',

  // Headers of the page
  router: {
    base: "/",
    linkExactActiveClass: "active",
    extendRoutes(routes, resolve) {
      routes.push(
        { name: 'about', path: '/about', component: resolve(__dirname, 'pages/about.vue') },
        { name: 'about-us', path: '/about-us', component: resolve(__dirname, 'pages/about-us.vue') },
        { name: 'blog', path: '/blog', component: resolve(__dirname, 'pages/blog.vue') },
        { name: 'blog-post', path: '/blog-post', component: resolve(__dirname, 'pages/blog-post.vue') },
        { name: 'blog-posts', path: '/blog-posts', component: resolve(__dirname, 'pages/blog-posts.vue') },
        { name: 'components', path: '/components', component: resolve(__dirname, 'pages/components.vue') },
        { name: 'contact', path: '/contact', component: resolve(__dirname, 'pages/contact.vue') },
        { name: 'contact-us', path: '/contact-us', component: resolve(__dirname, 'pages/contact-us.vue') },
        { name: 'demo', path: '/demo', component: resolve(__dirname, 'pages/demo.vue') },
        { name: 'ecommerce', path: '/ecommerce', component: resolve(__dirname, 'pages/ecommerce.vue') },
        { name: 'index', path: '/', component: resolve(__dirname, 'pages/index.vue') },
        { name: 'landing', path: '/landing', component: resolve(__dirname, 'pages/landing.vue') },
        { name: 'login', path: '/login', component: resolve(__dirname, 'pages/login.vue') },
        { name: 'pricing', path: '/pricing', component: resolve(__dirname, 'pages/pricing.vue') },
        { name: 'product', path: '/product', component: resolve(__dirname, 'pages/product.vue') },
        { name: 'profile', path: '/profile', component: resolve(__dirname, 'pages/profile.vue') },
        { name: 'sections', path: '/sections', component: resolve(__dirname, 'pages/sections.vue') },
        { name: 'signup', path: '/signup', component: resolve(__dirname, 'pages/signup.vue') },
        { name: 'starter', path: '/starter', component: resolve(__dirname, 'pages/starter.vue') },
        { name: 'shop', path: '/shop', component: resolve(__dirname, 'pages/shop.vue') },
        { name: 'products', path: '/products', component: resolve(__dirname, 'pages/products.vue') },
        { name: 'services', path: '/services', component: resolve(__dirname, 'pages/services.vue') },
        { name: 'vps-pricing', path: '/vps-pricing', component: resolve(__dirname, 'pages/vps-pricing.vue') },
        { name: 'vps-hosting', path: '/vps-hosting', component: resolve(__dirname, 'pages/vps-hosting.vue') },
        { name: 'website-pricing', path: '/website-pricing', component: resolve(__dirname, 'pages/website-pricing.vue') },
        { name: 'website-hosting', path: '/website-hosting', component: resolve(__dirname, 'pages/website-hosting.vue') },
        { name: 'wordpress-pricing', path: '/wordpress-pricing', component: resolve(__dirname, 'pages/wordpress-pricing.vue') },
        { name: 'wordpress-hosting', path: '/wordpress-hosting', component: resolve(__dirname, 'pages/wordpress-hosting.vue') },
        { name: 'virtual-assistant', path: '/virtual-assistant', component: resolve(__dirname, 'pages/virtual-assistant.vue') },
        { name: 'virtual-assistant-wordpress', path: '/virtual-assistant-wordpress', component: resolve(__dirname, 'pages/virtual-assistant-wordpress.vue') },
        { name: 'virtual-assistant-buy', path: '/virtual-assistant-buy', component: resolve(__dirname, 'pages/virtual-assistant-buy.vue') },
        { name: 'virtual-assistant-wordpress-buy', path: '/virtual-assistant-wordpress-buy', component: resolve(__dirname, 'pages/virtual-assistant-wordpress-buy.vue') },
        { name: 'nextcloud', path: '/nextcloud', component: resolve(__dirname, 'pages/nextcloud.vue') },
        { name: 'wireguard', path: '/wireguard', component: resolve(__dirname, 'pages/wireguard.vue') },
        { name: 'ticketing-system', path: '/ticketing-system', component: resolve(__dirname, 'pages/ticketing-system.vue') },
        { name: 'web-design', path: '/web-design', component: resolve(__dirname, 'pages/web-design.vue') },
        { name: 'web-development', path: '/web-development', component: resolve(__dirname, 'pages/web-development.vue') },
        { name: 'basic-web-hosting', path: '/basic-web-hosting', component: resolve(__dirname, 'pages/basic-web-hosting.vue') },
        { name: 'premium-web-hosting', path: '/premium-web-hosting', component: resolve(__dirname, 'pages/premium-web-hosting.vue') },
        { name: 'basic-web-hosting-buy', path: '/basic-web-hosting-buy', component: resolve(__dirname, 'pages/basic-web-hosting-buy.vue') },
        { name: 'premium-web-hosting-buy', path: '/premium-web-hosting-buy', component: resolve(__dirname, 'pages/premium-web-hosting-buy.vue') },
        { name: 'digital-marketing', path: '/digital-marketing', component: resolve(__dirname, 'pages/digital-marketing.vue') },
        { name: 'content-creation', path: '/content-creation', component: resolve(__dirname, 'pages/content-creation.vue') },
        { name: 'prompt-engineering', path: '/prompt-engineering', component: resolve(__dirname, 'pages/prompt-engineering.vue') }
      );
    }
  },
  head: {
    title: "Nuxt Now UI Kit PRO by Creative Tim",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1.0, maximum-scale=1.5, user-scalable=1, shrink-to-fit=no",
      },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Montserrat:400,700,200|Open+Sans+Condensed:700",
      },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.0.6/css/all.css",
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css",
        crossorigin: "anonymous",
      },
    ],
  },
  // Customize the progress-bar color
  loading: { color: "#fff" },
  // Global CSS
  css: ["~/assets/sass/now-ui-kit.scss", "~/assets/sass/demo.scss"],
  // Plugins to load before mounting the App
  plugins: [
    { src: "~/plugins/globalDirectives.js", ssr: false },
    { src: "~/plugins/element-ui.js" },
    { src: "~/plugins/now-ui-kit" },
  ],
  // Nuxt.js modules
  modules: ["@nuxtjs/pwa"],
  // Build configuration
  build: {
    extractCSS: process.env.NODE_ENV === "production",
    babel: {
      plugins: [
        [
          "component",
          {
            libraryName: "element-ui",
            styleLibraryName: "theme-chalk",
          },
        ],
      ],
    },
    // You can extend webpack config here
    extend(config, ctx) {}
  },
  // Server configuration to enforce port 3003
  server: {
    port: 3003, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  // Environment variables
  env: {
    API_BASE_URL: 'http://13.237.139.178:8000/v2',
    PROXY_API_URL: 'http://13.237.139.178:3004'
  }
};
