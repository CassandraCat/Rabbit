<script setup lang="ts">
import CustomNavBar from '@/components/CustomNavBar.vue'
import { getHomeBannerData } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import type { BannerItem } from 'home'
import { ref } from 'vue'

const bannerList = ref<BannerItem[]>([])

const getBannerList = () => {
  getHomeBannerData().then((res) => {
    bannerList.value = res.result
  })
}

onLoad(() => {
  getBannerList()
})
</script>

<template>
  <CustomNavBar />
  <XtxSwiper :list="bannerList" />
  <view class="index">111122222111</view>
</template>

<style lang="scss">
//
</style>
