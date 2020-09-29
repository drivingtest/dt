import Vue from 'vue'
import VueRouter from 'vue-router'
import Over from '@/views/Over.vue'
import WelCome from '@/views/WelCome.vue'
import DaTi from '@/views/DaTi.vue'
import CuoTI from '@/views/CuoTI.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component:WelCome
  },
    {
      path:'/over',
      component:Over
    },
    {
      path:'/dati',
      component:DaTi
    },
    {
      path:'/cuoti',
      component:CuoTI
    }
    
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router