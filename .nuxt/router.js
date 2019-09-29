import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _8b4f5ca4 = () => interopDefault(import('../pages/albums/_id.vue' /* webpackChunkName: "pages/albums/_id" */))
const _0285d883 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/albums/:id?",
      component: _8b4f5ca4,
      name: "albums-id"
    }, {
      path: "/",
      component: _0285d883,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
