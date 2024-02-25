import {defineStore} from 'pinia'
import {computed, ref} from 'vue'
import{useUserStore} from './userStore.js'
import {insertCartAPI, findNewCartList, delCartAPI} from '@/apis/cart.js'


export const useCartStore = defineStore('cart', () => {

  const userStore = useUserStore()
  const isLogin = computed(() => userStore.userInfo.token)

  const cartList = ref([])

  const updataNewList = async () => {
    const res = await findNewCartList()
    cartList.value = res.result
  }

  const addCart = async (goods) => {
    const {skuId, count} = goods
    if (isLogin.value) {
      await insertCartAPI({skuId, count})
      updataNewList()

    }else {
      const item = cartList.value.find((item) => goods.skuId === item.skuId)
      if (item) {
        item.count+=goods.count
      } else {
        cartList.value.push(goods)
      }
    }


  }
  const delCart = async (skuId) => {
    if (isLogin.value) {
      await delCartAPI([skuId])
      updataNewList()

    } else {
    const idx = cartList.value.findIndex((item) => skuId===item.skuId)
    cartList.value.splice(idx,1)
    }
  }

  const clearCart = () => {
    cartList.value = []
  }



  const singleCheck = (skuId, selected) => {
    const item = cartList.value.find((item) => skuId===item.skuId)
    item.selected = selected
  }

  const allCheck = (selected) => {
    cartList.value.forEach(item => item.selected = selected)
  }

  const allCount = computed(()=> cartList.value.reduce((e,c)=>e+c.count,0))
  const allPrice = computed(()=> cartList.value.reduce((e,c)=>e+c.count*c.price,0))
  const isAll = computed(() => cartList.value.every((item) => item.selected))

  const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((e,c)=>e+c.count,0))
  const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((e,c)=>e+c.count*c.price,0))

  return {
    cartList,
    allCount,
    allPrice,
    isAll,
    selectedCount,
    selectedPrice,
    addCart,
    delCart,
    singleCheck,
    allCheck,
    clearCart,
    updataNewList
  }

}, {persist:true})
