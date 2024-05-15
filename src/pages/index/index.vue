<script setup lang="ts">
import CustomNavBar from './components/CustomNavBar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import { getHomeBannerData, getHomeCategoryData } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import type { BannerItem, CategoryItem } from 'home'
import { ref } from 'vue'

const bannerList = ref<BannerItem[]>([])

const categoryList = ref<CategoryItem[]>([])

const getBannerList = () => {
  getHomeBannerData().then((res) => {
    bannerList.value = res.result
  })
}

const getCategory = () => {
  getHomeCategoryData().then((res) => {
    categoryList.value = res.result
  })
}

onLoad(() => {
  getBannerList()
  getCategory()
})
</script>

<template>
  <CustomNavBar />
  <XtxSwiper :list="bannerList" />
  <CategoryPanel :list="categoryList" />
</template>

<style lang="scss">
//
</style>
