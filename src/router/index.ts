import { useTabbarStore } from '@/stores'
import { getToken, isEmpty } from '@/utils'
import { createRouter, createWebHashHistory, RouteRecordRaw, createWebHistory } from 'vue-router'
import { NO_TOKEN_PATH } from '@/config/constants'
// import { Toast } from 'vant'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/paytable',
    name: 'paytable',
    meta: {
      title: 'paytable'
    },
    component: () => import('@/views/paytable.vue')
  },
  {
    path: '/rules',
    name: 'rules',
    meta: {
      title: 'rules'
    },
    component: () => import('@/views/rules.vue')
  },
  {
    path: '',
    redirect: '/paytable'
  }
]

const router = createRouter({
  history: createWebHistory('/Info/Slot_MahJongWays2'),
  routes
})


export default router
