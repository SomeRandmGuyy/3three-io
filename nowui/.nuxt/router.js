import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _fed94472 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _465f7f14 = () => interopDefault(import('../pages/about-us.vue' /* webpackChunkName: "pages/about-us" */))
const _7956915c = () => interopDefault(import('../pages/basic-web-hosting.vue' /* webpackChunkName: "pages/basic-web-hosting" */))
const _56093e15 = () => interopDefault(import('../pages/basic-web-hosting-buy.vue' /* webpackChunkName: "pages/basic-web-hosting-buy" */))
const _62944250 = () => interopDefault(import('../pages/blog.vue' /* webpackChunkName: "pages/blog" */))
const _3c47fa25 = () => interopDefault(import('../pages/blog-post.vue' /* webpackChunkName: "pages/blog-post" */))
const _5062eb9e = () => interopDefault(import('../pages/blog-posts.vue' /* webpackChunkName: "pages/blog-posts" */))
const _34e7ac68 = () => interopDefault(import('../pages/components.vue' /* webpackChunkName: "pages/components" */))
const _a8a0474c = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _2f4d13a1 = () => interopDefault(import('../pages/contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _3cfd112e = () => interopDefault(import('../pages/content-creation.vue' /* webpackChunkName: "pages/content-creation" */))
const _2933a499 = () => interopDefault(import('../pages/demo.vue' /* webpackChunkName: "pages/demo" */))
const _71587c2a = () => interopDefault(import('../pages/digital-marketing.vue' /* webpackChunkName: "pages/digital-marketing" */))
const _cd69040c = () => interopDefault(import('../pages/ecommerce.vue' /* webpackChunkName: "pages/ecommerce" */))
const _7239c25e = () => interopDefault(import('../pages/landing.vue' /* webpackChunkName: "pages/landing" */))
const _69f2dba3 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _fc6e8c48 = () => interopDefault(import('../pages/nextcloud.vue' /* webpackChunkName: "pages/nextcloud" */))
const _1f98d905 = () => interopDefault(import('../pages/premium-web-hosting.vue' /* webpackChunkName: "pages/premium-web-hosting" */))
const _05c4ed84 = () => interopDefault(import('../pages/premium-web-hosting-buy.vue' /* webpackChunkName: "pages/premium-web-hosting-buy" */))
const _061f1500 = () => interopDefault(import('../pages/pricing.vue' /* webpackChunkName: "pages/pricing" */))
const _505785a9 = () => interopDefault(import('../pages/product.vue' /* webpackChunkName: "pages/product" */))
const _83765ecc = () => interopDefault(import('../pages/products.vue' /* webpackChunkName: "pages/products" */))
const _9851553a = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _55ac42e0 = () => interopDefault(import('../pages/prompt-engineering.vue' /* webpackChunkName: "pages/prompt-engineering" */))
const _aedc2f38 = () => interopDefault(import('../pages/sections.vue' /* webpackChunkName: "pages/sections" */))
const _d17bfad8 = () => interopDefault(import('../pages/services.vue' /* webpackChunkName: "pages/services" */))
const _3ce07fa8 = () => interopDefault(import('../pages/shop.vue' /* webpackChunkName: "pages/shop" */))
const _20c285ce = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _58922949 = () => interopDefault(import('../pages/starter.vue' /* webpackChunkName: "pages/starter" */))
const _2b5c2ebc = () => interopDefault(import('../pages/ticketing-system.vue' /* webpackChunkName: "pages/ticketing-system" */))
const _7d774b54 = () => interopDefault(import('../pages/virtual-assistant.vue' /* webpackChunkName: "pages/virtual-assistant" */))
const _20d40be2 = () => interopDefault(import('../pages/virtual-assistant-buy.vue' /* webpackChunkName: "pages/virtual-assistant-buy" */))
const _0c6d04c2 = () => interopDefault(import('../pages/virtual-assistant-wordpress.vue' /* webpackChunkName: "pages/virtual-assistant-wordpress" */))
const _6f68e30a = () => interopDefault(import('../pages/virtual-assistant-wordpress-buy.vue' /* webpackChunkName: "pages/virtual-assistant-wordpress-buy" */))
const _0e5708a0 = () => interopDefault(import('../pages/vps-hosting.vue' /* webpackChunkName: "pages/vps-hosting" */))
const _3c8ebda8 = () => interopDefault(import('../pages/vps-pricing.vue' /* webpackChunkName: "pages/vps-pricing" */))
const _71de4ee6 = () => interopDefault(import('../pages/web-design.vue' /* webpackChunkName: "pages/web-design" */))
const _e3ff9d08 = () => interopDefault(import('../pages/web-development.vue' /* webpackChunkName: "pages/web-development" */))
const _7240c77c = () => interopDefault(import('../pages/website-hosting.vue' /* webpackChunkName: "pages/website-hosting" */))
const _cb7d9664 = () => interopDefault(import('../pages/website-pricing.vue' /* webpackChunkName: "pages/website-pricing" */))
const _43c740fa = () => interopDefault(import('../pages/wireguard.vue' /* webpackChunkName: "pages/wireguard" */))
const _4c90b1a0 = () => interopDefault(import('../pages/wordpress-hosting.vue' /* webpackChunkName: "pages/wordpress-hosting" */))
const _1ff24a2c = () => interopDefault(import('../pages/wordpress-pricing.vue' /* webpackChunkName: "pages/wordpress-pricing" */))
const _bf698ee8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _fed94472,
    name: "about"
  }, {
    path: "/about-us",
    component: _465f7f14,
    name: "about-us"
  }, {
    path: "/basic-web-hosting",
    component: _7956915c,
    name: "basic-web-hosting"
  }, {
    path: "/basic-web-hosting-buy",
    component: _56093e15,
    name: "basic-web-hosting-buy"
  }, {
    path: "/blog",
    component: _62944250,
    name: "blog"
  }, {
    path: "/blog-post",
    component: _3c47fa25,
    name: "blog-post"
  }, {
    path: "/blog-posts",
    component: _5062eb9e,
    name: "blog-posts"
  }, {
    path: "/components",
    component: _34e7ac68,
    name: "components"
  }, {
    path: "/contact",
    component: _a8a0474c,
    name: "contact"
  }, {
    path: "/contact-us",
    component: _2f4d13a1,
    name: "contact-us"
  }, {
    path: "/content-creation",
    component: _3cfd112e,
    name: "content-creation"
  }, {
    path: "/demo",
    component: _2933a499,
    name: "demo"
  }, {
    path: "/digital-marketing",
    component: _71587c2a,
    name: "digital-marketing"
  }, {
    path: "/ecommerce",
    component: _cd69040c,
    name: "ecommerce"
  }, {
    path: "/landing",
    component: _7239c25e,
    name: "landing"
  }, {
    path: "/login",
    component: _69f2dba3,
    name: "login"
  }, {
    path: "/nextcloud",
    component: _fc6e8c48,
    name: "nextcloud"
  }, {
    path: "/premium-web-hosting",
    component: _1f98d905,
    name: "premium-web-hosting"
  }, {
    path: "/premium-web-hosting-buy",
    component: _05c4ed84,
    name: "premium-web-hosting-buy"
  }, {
    path: "/pricing",
    component: _061f1500,
    name: "pricing"
  }, {
    path: "/product",
    component: _505785a9,
    name: "product"
  }, {
    path: "/products",
    component: _83765ecc,
    name: "products"
  }, {
    path: "/profile",
    component: _9851553a,
    name: "profile"
  }, {
    path: "/prompt-engineering",
    component: _55ac42e0,
    name: "prompt-engineering"
  }, {
    path: "/sections",
    component: _aedc2f38,
    name: "sections"
  }, {
    path: "/services",
    component: _d17bfad8,
    name: "services"
  }, {
    path: "/shop",
    component: _3ce07fa8,
    name: "shop"
  }, {
    path: "/signup",
    component: _20c285ce,
    name: "signup"
  }, {
    path: "/starter",
    component: _58922949,
    name: "starter"
  }, {
    path: "/ticketing-system",
    component: _2b5c2ebc,
    name: "ticketing-system"
  }, {
    path: "/virtual-assistant",
    component: _7d774b54,
    name: "virtual-assistant"
  }, {
    path: "/virtual-assistant-buy",
    component: _20d40be2,
    name: "virtual-assistant-buy"
  }, {
    path: "/virtual-assistant-wordpress",
    component: _0c6d04c2,
    name: "virtual-assistant-wordpress"
  }, {
    path: "/virtual-assistant-wordpress-buy",
    component: _6f68e30a,
    name: "virtual-assistant-wordpress-buy"
  }, {
    path: "/vps-hosting",
    component: _0e5708a0,
    name: "vps-hosting"
  }, {
    path: "/vps-pricing",
    component: _3c8ebda8,
    name: "vps-pricing"
  }, {
    path: "/web-design",
    component: _71de4ee6,
    name: "web-design"
  }, {
    path: "/web-development",
    component: _e3ff9d08,
    name: "web-development"
  }, {
    path: "/website-hosting",
    component: _7240c77c,
    name: "website-hosting"
  }, {
    path: "/website-pricing",
    component: _cb7d9664,
    name: "website-pricing"
  }, {
    path: "/wireguard",
    component: _43c740fa,
    name: "wireguard"
  }, {
    path: "/wordpress-hosting",
    component: _4c90b1a0,
    name: "wordpress-hosting"
  }, {
    path: "/wordpress-pricing",
    component: _1ff24a2c,
    name: "wordpress-pricing"
  }, {
    path: "/",
    component: _bf698ee8,
    name: "index"
  }, {
    path: "/about",
    component: _fed94472,
    name: "about"
  }, {
    path: "/about-us",
    component: _465f7f14,
    name: "about-us"
  }, {
    path: "/blog",
    component: _62944250,
    name: "blog"
  }, {
    path: "/blog-post",
    component: _3c47fa25,
    name: "blog-post"
  }, {
    path: "/blog-posts",
    component: _5062eb9e,
    name: "blog-posts"
  }, {
    path: "/components",
    component: _34e7ac68,
    name: "components"
  }, {
    path: "/contact",
    component: _a8a0474c,
    name: "contact"
  }, {
    path: "/contact-us",
    component: _2f4d13a1,
    name: "contact-us"
  }, {
    path: "/demo",
    component: _2933a499,
    name: "demo"
  }, {
    path: "/ecommerce",
    component: _cd69040c,
    name: "ecommerce"
  }, {
    path: "/",
    component: _bf698ee8,
    name: "index"
  }, {
    path: "/landing",
    component: _7239c25e,
    name: "landing"
  }, {
    path: "/login",
    component: _69f2dba3,
    name: "login"
  }, {
    path: "/pricing",
    component: _061f1500,
    name: "pricing"
  }, {
    path: "/product",
    component: _505785a9,
    name: "product"
  }, {
    path: "/profile",
    component: _9851553a,
    name: "profile"
  }, {
    path: "/sections",
    component: _aedc2f38,
    name: "sections"
  }, {
    path: "/signup",
    component: _20c285ce,
    name: "signup"
  }, {
    path: "/starter",
    component: _58922949,
    name: "starter"
  }, {
    path: "/shop",
    component: _3ce07fa8,
    name: "shop"
  }, {
    path: "/products",
    component: _83765ecc,
    name: "products"
  }, {
    path: "/services",
    component: _d17bfad8,
    name: "services"
  }, {
    path: "/vps-pricing",
    component: _3c8ebda8,
    name: "vps-pricing"
  }, {
    path: "/vps-hosting",
    component: _0e5708a0,
    name: "vps-hosting"
  }, {
    path: "/website-pricing",
    component: _cb7d9664,
    name: "website-pricing"
  }, {
    path: "/website-hosting",
    component: _7240c77c,
    name: "website-hosting"
  }, {
    path: "/wordpress-pricing",
    component: _1ff24a2c,
    name: "wordpress-pricing"
  }, {
    path: "/wordpress-hosting",
    component: _4c90b1a0,
    name: "wordpress-hosting"
  }, {
    path: "/virtual-assistant",
    component: _7d774b54,
    name: "virtual-assistant"
  }, {
    path: "/virtual-assistant-wordpress",
    component: _0c6d04c2,
    name: "virtual-assistant-wordpress"
  }, {
    path: "/virtual-assistant-buy",
    component: _20d40be2,
    name: "virtual-assistant-buy"
  }, {
    path: "/virtual-assistant-wordpress-buy",
    component: _6f68e30a,
    name: "virtual-assistant-wordpress-buy"
  }, {
    path: "/nextcloud",
    component: _fc6e8c48,
    name: "nextcloud"
  }, {
    path: "/wireguard",
    component: _43c740fa,
    name: "wireguard"
  }, {
    path: "/ticketing-system",
    component: _2b5c2ebc,
    name: "ticketing-system"
  }, {
    path: "/web-design",
    component: _71de4ee6,
    name: "web-design"
  }, {
    path: "/web-development",
    component: _e3ff9d08,
    name: "web-development"
  }, {
    path: "/basic-web-hosting",
    component: _7956915c,
    name: "basic-web-hosting"
  }, {
    path: "/premium-web-hosting",
    component: _1f98d905,
    name: "premium-web-hosting"
  }, {
    path: "/basic-web-hosting-buy",
    component: _56093e15,
    name: "basic-web-hosting-buy"
  }, {
    path: "/premium-web-hosting-buy",
    component: _05c4ed84,
    name: "premium-web-hosting-buy"
  }, {
    path: "/digital-marketing",
    component: _71587c2a,
    name: "digital-marketing"
  }, {
    path: "/content-creation",
    component: _3cfd112e,
    name: "content-creation"
  }, {
    path: "/prompt-engineering",
    component: _55ac42e0,
    name: "prompt-engineering"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
