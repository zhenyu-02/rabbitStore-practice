import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/home/index.vue'
import Category from '@/views/category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'
import CartList from '@/views/CartList/index.vue'
import Checkout from '@/views/Checkout/index.vue'
import Pay from '@/views/Pay/index.vue'
import Member from '@/views/Member/index.vue'
import UserInfo from '@/views/Member/components/Userinfo.vue'
import UserOrder from '@/views/Member/components/Userorder.vue'

const router = createRouter({
  history: createWebHistory(),
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
          path:'category/:id',
          component:Category
        },
        {
          path:'category/sub/:id',
          component:SubCategory
        },
        {
          path:'detail/:id',
          component:Detail
        },
        {
          path:'cartlist',
          component:CartList
        },
        {
          path:'checkout',
          component:Checkout
        },
        {
          path:'pay',
          component:Pay
        },{
          path:'member',
          component:Member,
          children:[
            {
              path:'',
              component:UserInfo
            },
            {
              path:'order',
              component:UserOrder
            }
          ]
        }
      ]
    },
    {
      path:'/login',
      component:Login
  }
  ],
  scrollBehavior(){
    return {
      top:0
    }
  }
})
router.beforeEach((to,from) => {
  console.log(to);
  console.log(from);
})

export default router
