
export default [
  {
    path: 'about',
    name: 'about',
    component: () => import('@/components/PageView/PageView.vue'),
    meta: {
      icon: 'icon-guanyu',
      title: '关于'
    },
    redirect: { name: 'directions' },
    children: [
      {
        path: 'details',
        name: 'details',
        component: () => import('@/components/PageView/PageView.vue'),
        meta: {
          icon: 'icon-xiangqing',
          title: '详情'
        },
        redirect: { name: 'directions' },
        children: [
          {
            path: 'directions',
            name: 'directions',
            component: () => import('../views/about/Directions.vue'),
            meta: {
              icon: 'icon-xinshouyindao',
              title: '引导'
            }
          },
          {
            path: 'document',
            name: 'document',
            component: () => import('../views/about/document.vue'),
            meta: {
              icon: 'icon-shiyongwendang',
              title: '文档'
            }
          }
        ]
      }
    ]
  },
  {
    path: 'charts',
    name: 'charts',
    component: () => import('@/components/PageView/PageView.vue'),
    meta: {
      icon: 'icon-xitongguanli',
      title: '图表'
    },
    redirect: {name: 'map'},
    children: [
      {
        path: 'map',
        name: 'map',
        component: () => import('../views/charts/index.vue'),
        meta: {
          icon: 'icon-caidanguanli',
          title: '省地图'
        }
      }
    ]
  },
  {
    path: 'system',
    name: 'system',
    component: () => import('@/components/PageView/PageView.vue'),
    meta: {
      icon: 'icon-xitongguanli',
      title: '系统管理'
    },
    redirect: {name: 'menu'},
    children: [
      {
        path: 'menu',
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