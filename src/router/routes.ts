import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/game',
    name: 'home',
    component: () => import('@/components/Layout/Default/index.vue'),
    children: [
      {
        name: 'game-crash',
        path: 'crash',
        meta: {
          title: 'Crash',
        },
        component: () => import('@/views/HomeView.vue'),
      },
    ],
  },

  {
    name: 'not-found',
    path: '/:pathMatch(.*)*',
    redirect: { name: 'game-crash' },
  },
]
