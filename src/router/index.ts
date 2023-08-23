import { createRouter, createWebHistory } from 'vue-router'

// 路由懒加载
const Home = () => import('@/views/HomeView.vue')
const Mine = () => import('@/views/MineView.vue')
const Order = () => import('@/views/OrderView.vue')
const NotFond = () => import('@/views/404.vue')

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/order',
    name: 'order',
    component: Order
  },
  {
    path: '/mine',
    name: 'mine',
    component: Mine
  },
  {
    path: '/404',
    name: '404',
    component: NotFond
  },
  {
    path: '/:catchALL(.*)',
    redirect: '/404',
    hidden: true
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
