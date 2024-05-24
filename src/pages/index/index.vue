<script setup lang="ts">
import CustomNavBar from './components/CustomNavBar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import type { BannerItem, CategoryItem, HotItem } from 'home'
import { ref } from 'vue'
import PageSkeleton from './components/PageSkeleton.vue'
import { useGuessList } from '@/composables/useGuess'

const bannerList = ref<BannerItem[]>([])
const getBannerList = () => {
  getHomeBannerAPI().then((res) => {
    bannerList.value = res.result
  })
}

const categoryList = ref<CategoryItem[]>([])
const getCategory = () => {
  getHomeCategoryAPI().then((res) => {
    categoryList.value = res.result
  })
}

const hotList = ref<HotItem[]>([])
const getHomeHot = () => {
  getHomeHotAPI().then((res) => {
    hotList.value = res.result
  })
}

const { guessRef, onScrollToLower } = useGuessList()

const isTriggered = ref(false)
const onRefresherRefresh = () => {
  isTriggered.value = true
  guessRef.value?.resetData()
  Promise.all([getBannerList(), getCategory(), getHomeHot(), guessRef.value?.getMore()]).then(
    () => {
      isTriggered.value = false
    },
  )
}

const isLoading = ref(true)

onLoad(() => {
  isLoading.value = true
  Promise.all([getBannerList(), getCategory(), getHomeHot()]).then(() => {
    isLoading.value = false
  })
})
</script>

<template>
  <view class="viewport">
    <CustomNavBar />
    <scroll-view
      scroll-y
      @refresherrefresh="onRefresherRefresh"
      :refresher-triggered="isTriggered"
      class="scroll-view"
      @scrolltolower="onScrollToLower"
      refresher-enabled
    >
      <PageSkeleton v-if="isLoading" />
      <template v-else>
        <XtxSwiper :list="bannerList" />
        <CategoryPanel :list="categoryList" />
        <HotPanel :list="hotList" />
        <XtxGuess ref="guessRef" />
      </template>
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
