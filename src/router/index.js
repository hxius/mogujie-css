import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'
// 按需引入
// const About = () => import("../views/AboutView.vue")

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
