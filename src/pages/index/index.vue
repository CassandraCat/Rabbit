<script setup lang="ts">
import CustomNavBar from './components/CustomNavBar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import {
  getHomeBannerData,
  getHomeCategoryData,
  getHomeGoodsGuessLikeData,
  getHomeHotData,
} from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import type { BannerItem, CategoryItem, GuessItem, HotItem } from 'home'
import { ref } from 'vue'

const bannerList = ref<BannerItem[]>([])

const categoryList = ref<CategoryItem[]>([])

const hotList = ref<HotItem[]>([])

const guessList = ref<GuessItem[]>([])

const finish = ref(false)

const pageParams: Required<PageParams> = {
  page: 2,
  pageSize: 10,
}

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

const getHomeGuessList = () => {
  getHomeGoodsGuessLikeData().then((res) => {
    guessList.value = res.result.items
  })
}

const onScrollToLower = async () => {
  if (finish.value === true) {
    return uni.showToast({ icon: 'none', title: '没有更多数据~' })
  }
  const res = await getHomeGoodsGuessLikeData(pageParams)
  guessList.value.push(...res.result.items)
  if (pageParams.page < res.result.pages) {
    pageParams.page++
  } else {
    finish.value = true
  }
}

onLoad(() => {
  getBannerList()
  getCategory()
  getHomeHot()
  getHomeGuessList()
})
</script>

<template>
  <view class="viewport">
    <CustomNavBar />
    <scroll-view scroll-y class="scroll-view" @scrolltolower="onScrollToLower">
      <XtxSwiper :list="bannerList" />
      <CategoryPanel :list="categoryList" />
      <HotPanel :list="hotList" />
      <XtxGuess :list="guessList" :finish="finish" />
    </scroll-view>
  </view>
</template>

<style lang="scss">
//
page {
  background-color: #f7f7f7;
  height: 100%;
  overflow: hidden;
}

.viewport {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.scroll-view {
  flex: 1;
  overflow: hidden;
}
</style>
