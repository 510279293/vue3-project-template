import { createRouter, createWebHistory } from 'vue-router'

// 路由懒加载
const HomeView = () => import('@/views/HomeView.vue')
const About = () => import('@/views/AboutView.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
