import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/productos',
    name:'productos',
    component: () => import(/* webpackChunkName: "producto" */ '../views/ProductoView.vue')
  },
  {
    path:'/productos/:id',
    name:'verProducto',
    component: () => import(/* webpackChunkName: "verProducto" */ '../views/VerProductoView.vue')
  }
  ,
  {
    path:'/productos/:id/editar',
    name:'verProducto',
    component: () => import(/* webpackChunkName: "editarProducto" */ '../views/EditarProductoView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
