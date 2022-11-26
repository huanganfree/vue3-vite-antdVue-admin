import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/components/Layout/index.vue'
import ConstantRoutes from './constantRoutes'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      meta: {
        title: '登录'
      }
    },
    {
      path: '/',
      name: 'layout',
      component: Layout,
      redirect: '/home',
      children: ConstantRoutes // 动态路由填充，这里用写死的静态模拟
    },
    {
      path: '/:catchAll(.*)',
      name: 'notFound',
      component: () => import('@/views/ErrorPage/errorPage.vue'),
      meta: {
        title: '404'
      }
    }
  ]
})


generatorNamePath(ConstantRoutes)

function generatorNamePath(routes, namePath) {
  routes.forEach(item => {
    if (item.meta) {
      item.meta.namePath = Array.isArray(namePath) ? namePath.concat({path: item.name, name: item.meta.title}) : [{path: item.name, name: item.meta.title}]
    }
    if (item.children) {
      generatorNamePath(item.children, item.meta.namePath)
    }
  })
}



sessionStorage.setItem('const_routes', JSON.stringify(ConstantRoutes))

router.beforeEach((to, from, next) => {
  next()
})

export default router
