<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'

import {onMounted} from 'vue'
import { usecategoryStore } from '@/stores/category'
const categoryStore = usecategoryStore()

onMounted(() => {
  categoryStore.getCategory()
})
</script>

<template>
  <LayoutNav />
  <LayoutHeader />
  <!-- <RouterView :key="$route.fullPath" /> -->
  <RouterView />

  <LayoutFooter />
  <LayoutFixed/>
</template>