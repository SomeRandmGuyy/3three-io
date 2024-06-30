import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _fed94472 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _3c47fa25 = () => interopDefault(import('../pages/blog-post.vue' /* webpackChunkName: "pages/blog-post" */))
const _5062eb9e = () => interopDefault(import('../pages/blog-posts.vue' /* webpackChunkName: "pages/blog-posts" */))
const _34e7ac68 = () => interopDefault(import('../pages/components.vue' /* webpackChunkName: "pages/components" */))
const _a8a0474c = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _2933a499 = () => interopDefault(import('../pages/demo.vue' /* webpackChunkName: "pages/demo" */))
const _cd69040c = () => interopDefault(import('../pages/ecommerce.vue' /* webpackChunkName: "pages/ecommerce" */))
const _7239c25e = () => interopDefault(import('../pages/landing.vue' /* webpackChunkName: "pages/landing" */))
const _69f2dba3 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _061f1500 = () => interopDefault(import('../pages/pricing.vue' /* webpackChunkName: "pages/pricing" */))
const _505785a9 = () => interopDefault(import('../pages/product.vue' /* webpackChunkName: "pages/product" */))
const _9851553a = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _aedc2f38 = () => interopDefault(import('../pages/sections.vue' /* webpackChunkName: "pages/sections" */))
const _20c285ce = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _bf698ee8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _fed94472,
    name: "about"
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
    path: "/demo",
    component: _2933a499,
    name: "demo"
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
    path: "/",
    component: _bf698ee8,
    name: "index"
  }, {
    path: "/about",
    component: _fed94472,
    name: "about"
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
    path: "/ecommerce",
    component: _cd69040c,
    name: "ecommerce"
  }, {
    path: "/",
    component: _bf698ee8,
    name: "index"
  }, {
    path: "/demo",
    component: _2933a499,
    name: "demo"
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
