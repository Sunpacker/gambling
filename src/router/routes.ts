import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/game',
    name: 'home',
    component: () => import('@/components/Layout/Default/index.vue'),
    redirect: { name: 'game-crash' },
    children: [
      {
        name: 'game-crash',
        path: 'crash',
        meta: {
          title: 'Crash',
        },
        component: () => import('@/views/CrashView.vue'),
      },
      {
        name: 'game-dice',
        path: 'dice',
        redirect: { name: 'game-crash' },
      },
      {
        name: 'game-plinko',
        path: 'plinko',
        redirect: { name: 'game-crash' },
      },
      {
        name: 'game-roulette',
        path: 'roulette',
        redirect: { name: 'game-crash' },
      },
      {
        name: 'game-tower',
        path: 'tower',
        redirect: { name: 'game-crash' },
      },
      {
        name: 'game-wheel',
        path: 'wheel',
        redirect: { name: 'game-crash' },
      },
      {
        name: 'game-slots',
        path: 'slots',
        redirect: { name: 'game-crash' },
      },
      {
        name: 'game-hilo',
        path: 'hilo',
        redirect: { name: 'game-crash' },
      },
      {
        name: 'game-mines',
        path: 'mines',
        redirect: { name: 'game-crash' },
      },
      {
        name: 'game-keno',
        path: 'keno',
        redirect: { name: 'game-crash' },
      },
    ],
  },

  {
    name: 'not-found',
    path: '/:pathMatch(.*)*',
    redirect: { name: 'game-crash' },
  },
]
