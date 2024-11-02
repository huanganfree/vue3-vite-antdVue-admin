
export default [
  {
    path: 'about',
    name: 'about',
    component: () => import('@/components/PageView/PageView.vue'),
    meta: {
      icon: 'icon-guanyu',
      title: '关于'
    },
    redirect: { name: 'directions' }, // 这里redirect属性的目的是，用于在面包屑路径中，点击“关于”（重定向）跳转到该路径
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
    path: 'miniProgram',
    name: 'miniProgram',
    component: () => import('@/components/PageView/PageView.vue'),
    meta: {
      icon: 'icon-xiaochengxu',
      title: '小程序'
    },
    redirect: {name: 'h5'},
    children: [
      {
        path: 'h5',
        name: 'h5',
        component: () => import('../views/miniProgram/h5ToMiniProgram.vue'),
        meta: {
          icon: 'icon-H',
          title: 'h5返回小程序'
        }
      }
    ]
  },
  {
    path: 'charts',
    name: 'charts',
    component: () => import('@/components/PageView/PageView.vue'),
    meta: {
      icon: 'icon-tubiao-bingtu',
      title: '图表'
    },
    redirect: {name: 'map'},
    children: [
      {
        path: 'map',
        name: 'map',
        component: () => import('../views/charts/index.vue'),
        meta: {
          icon: 'icon-tubiao-bingtu',
          title: '图表系列'
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