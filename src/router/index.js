import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/components/Layout/index.vue'
import ConstantRoutes from './constantRoutes'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/login.vue'),
      meta: {
        title: '登录'
      }
    },
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children: addHomeRouter() // 动态路由填充，这里用写死的静态模拟
    },
    {
      path: '/:catchAll(.*)',
      name: 'notFound',
      component: () => import('@/views/errorPage/errorPage.vue'),
      meta: {
        title: '404'
      }
    }
  ]
})


function addHomeRouter(params) {
  const homeRouter = {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/home.vue'),
    meta: {
      icon: 'icon-zhuye',
      title: '视频封面'
    }
  }

  ConstantRoutes.unshift(homeRouter)
  return ConstantRoutes
}

generatorNamePath(ConstantRoutes)
function generatorNamePath(routes, namePath) {
  routes.forEach(item => {
    if (item.meta) {
      item.meta.namePath = Array.isArray(namePath) ? namePath.concat({ path: item.name, name: item.meta.title }) : [{ path: item.name, name: item.meta.title }]
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
