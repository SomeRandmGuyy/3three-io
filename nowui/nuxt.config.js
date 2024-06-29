module.exports = {
  /*
   ** Disable Server-Side Rendering (SSR)
   */
  ssr: false, // Ensure SSR is turned off

  /*
   ** Headers of the page
   */
  router: {
    base: "/",
    linkExactActiveClass: "active",
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
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["~/assets/sass/now-ui-kit.scss", "~/assets/sass/demo.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~/plugins/globalDirectives.js", ssr: false },
    { src: "~/plugins/element-ui.js" },
    { src: "~/plugins/now-ui-kit" },
  ],
  /*
   ** Nuxt.js modules
   */
  // Remove the @nuxtjs/pwa module for now
  // modules: ["@nuxtjs/pwa"],
  /*
   ** Build configuration
   */
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
        ["@babel/plugin-proposal-private-property-in-object", { loose: true }],
        ["@babel/plugin-transform-class-properties", { loose: true }],
        ["@babel/plugin-transform-private-methods", { loose: true }],
      ],
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
  /*
   ** Server configuration
   */
  server: {
    port: 3003, // Default: 3000
    host: "localhost", // Default: localhost
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push(
        { name: "about", path: "/about", component: resolve(__dirname, "pages/about.vue") },
        { name: "blog-post", path: "/blog-post", component: resolve(__dirname, "pages/blog-post.vue") },
        { name: "blog-posts", path: "/blog-posts", component: resolve(__dirname, "pages/blog-posts.vue") },
        { name: "components", path: "/components", component: resolve(__dirname, "pages/components.vue") },
        { name: "contact", path: "/contact", component: resolve(__dirname, "pages/contact.vue") },
        { name: "ecommerce", path: "/ecommerce", component: resolve(__dirname, "pages/ecommerce.vue") },
        { name: "index", path: "/index", component: resolve(__dirname, "pages/index.vue") },
        { name: "landing", path: "/landing", component: resolve(__dirname, "pages/landing.vue") },
        { name: "signin", path: "/signin", component: resolve(__dirname, "pages/login.vue") },
        { name: "pricing", path: "/pricing", component: resolve(__dirname, "pages/pricing.vue") },
        { name: "product", path: "/product", component: resolve(__dirname, "pages/product.vue") },
        { name: "profile", path: "/profile", component: resolve(__dirname, "pages/profile.vue") },
        { name: "sections", path: "/sections", component: resolve(__dirname, "pages/sections.vue") },
        { name: "signup", path: "/signup", component: resolve(__dirname, "pages/signup.vue") },
        { name: "starter", path: "/starter", component: resolve(__dirname, "pages/starter.vue") }
      );
    },
  },
};
