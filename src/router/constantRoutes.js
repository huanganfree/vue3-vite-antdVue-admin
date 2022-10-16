import HomeView from '../views/HomeView.vue'
import PageView from  '@/components/PageView/PageView.vue'

export default [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: {
      icon: 'icon-zhuye',
      title: '主页'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/components/PageView/PageView.vue'),
    meta: {
      icon: 'icon-guanyu',
      title: '关于'
    },
    children: [
      {
        path: '/about/details',
        name: 'details',
        component: () => import('@/components/PageView/PageView.vue'),
        meta: {
          icon: 'icon-xiangqing',
          title: '详情'
        },
        children: [
          {
            path: '/about/details/directions',
            name: 'directions',
            component: () => import('../views/about/Directions.vue'),
            meta: {
              icon: 'icon-xinshouyindao',
              title: '引导'
            }
          }
        ]
      }
    ]
  },
  {
    path: '/system',
    name: 'system',
    component: () => import('@/components/PageView/PageView.vue'),
    meta: {
      icon: 'icon-xitongguanli',
      title: '系统管理'
    },
    children: [
      {
        path: '/system/menu',
        name: 'menu',
        component: () => import('../views/system/menu.vue'),
        meta: {
          icon: 'icon-caidanguanli',
          title: '菜单管理'
        }
      }
    ]
  }
]