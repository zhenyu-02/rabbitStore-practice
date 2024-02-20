import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/home/index.vue'
import Category from '@/views/category/index.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component: Layout,
      children:[
        {
          // 默认二级路由, 路径保存为空， 自动渲染
          path:'',
          component: Home
        },
        {
          path:'category',
          component:Category
        }
      ]
    },
    {
      path:'/login',
      component:Login
  }
  ]
})

export default router
