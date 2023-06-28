import { createRouter, createWebHistory } from 'vue-router'

// 路由懒加载
const HomeView = () => import('@/views/HomeView.vue')
const About = () => import('@/views/AboutView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
})

export default router
