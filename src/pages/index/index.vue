<script setup lang="ts">
import CustomNavBar from './components/CustomNavBar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import { getHomeBannerData, getHomeCategoryData, getHomeHotData } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import type { BannerItem, CategoryItem, HotItem } from 'home'
import { ref } from 'vue'

const bannerList = ref<BannerItem[]>([])

const categoryList = ref<CategoryItem[]>([])

const hotList = ref<HotItem[]>([])

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

const getHomeHot = () => {
  getHomeHotData().then((res) => {
    hotList.value = res.result
  })
}

onLoad(() => {
  getBannerList()
  getCategory()
  getHomeHot()
})
</script>

<template>
  <CustomNavBar />
  <XtxSwiper :list="bannerList" />
  <CategoryPanel :list="categoryList" />
  <HotPanel :list="hotList" />
</template>

<style lang="scss">
//
page {
  background-color: #fafafa;
}
</style>
