import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { useUserStore } from '@/store'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home/index.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login/index.vue'),
    meta: { requiresAuth: false }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// 路由拦截器
router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  const isLoggedIn = userStore.isLoggedIn || !!userStore.token
  
  // 如果路由需要登录验证
  if (to.meta.requiresAuth) {
    if (isLoggedIn) {
      next() // 已登录，允许访问
    } else {
      next('/login') // 未登录，跳转到登录页
    }
  } else {
    // 如果已登录且访问登录页，重定向到首页
    if (to.path === '/login' && isLoggedIn) {
      next('/home')
    } else {
      next() // 允许访问
    }
  }
})

export default router
