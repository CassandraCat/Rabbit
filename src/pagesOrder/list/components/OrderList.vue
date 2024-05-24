<script setup lang="ts">
import { OrderState } from '@/services/constants'
import { orderStateList } from '@/services/constants'
import {
  deleteMemberOrderAPI,
  getMemberOrderAPI,
  putMemberOrderReceiptByIdAPI,
} from '@/services/order'
import { getPayMockAPI, getPayWxPayMiniPayAPI } from '@/services/pay'
import type { OrderItem, OrderListParams } from 'order'
import { onMounted, ref } from 'vue'

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()

// 定义 porps
const props = defineProps<{
  orderState: number
}>()

// 请求参数
const queryParams: Required<OrderListParams> = {
  page: 1,
  pageSize: 5,
  orderState: props.orderState,
}

// 获取订单列表
const orderList = ref<OrderItem[]>([])
const isLoading = ref(false)
const isFinished = ref(false)
const getMemberOrderData = async () => {
  if (isLoading.value) return
  if (isFinished.value) {
    return uni.showToast({
      title: '没有更多数据~',
      icon: 'none',
    })
  }
  isLoading.value = true
  const res = await getMemberOrderAPI(queryParams)
  isLoading.value = false
  orderList.value = orderList.value.concat(res.result.items)
  if (queryParams.page < res.result.pages) {
    queryParams.page++
  } else {
    isFinished.value = true
  }
}

const isDev = import.meta.env.DEV

const onOrderPay = async (id: string) => {
  if (isDev) {
    await getPayMockAPI({ orderId: id })
  } else {
    // #ifdef MP-WEIXIN
    const res = await getPayWxPayMiniPayAPI({ orderId: id })
    await wx.requestPayment(res.result)
    // #endif

    // #ifdef H5 || APP-PLUS
    await getPayMockAPI({ orderId: id })
    // #endif
  }
  const order = orderList.value.find((v) => v.id === id)
  order!.orderState = OrderState.PendingShipment
}

const onOrderReceipt = (id: string) => {
  uni.showModal({
    content: '为保障您的权益，请收到货并确认无误后，再确认收货',
    confirmColor: '#27BA9B',
    success: async (res) => {
      if (res.confirm) {
        await putMemberOrderReceiptByIdAPI(id)
        uni.showToast({ icon: 'success', title: '确认收货成功' })
        // 确认成功，更新为待评价
        const order = orderList.value.find((v) => v.id === id)
        order!.orderState = OrderState.PendingReview
      }
    },
  })
}

const onOrderDelete = (id: string) => {
  uni.showModal({
    content: '确定删除订单？',
    confirmColor: '#27BA9B',
    success: async (res) => {
      if (res.confirm) {
        // 删除订单
        await deleteMemberOrderAPI({ ids: [id] })
        const index = orderList.value.findIndex((v) => v.id === id)
        orderList.value.splice(index, 1)
        uni.showToast({ icon: 'success', title: '删除订单成功' })
      }
    },
  })
}

const isTriggered = ref(false)
const onRefresherRefresh = async () => {
  isTriggered.value = true
  queryParams.page = 1
  orderList.value = []
  isFinished.value = false
  await getMemberOrderData()
  isTriggered.value = false
}

onMounted(() => {
  getMemberOrderData()
})
</script>

<template>
  <scroll-view
    scroll-y
    class="orders"
    refresher-enabled
    :refresher-triggered="isTriggered"
    @refresherrefresh="onRefresherRefresh"
    @scrolltolower="getMemberOrderData"
  >
    <view class="card" v-for="order in orderList" :key="order.id">
      <!-- 订单信息 -->
      <view class="status">
        <text class="date">{{ order.createTime }}</text>
        <!-- 订单状态文字 -->
        <text>{{ orderStateList[order.orderState].text }}</text>
        <!-- 待评价/已完成/已取消 状态: 展示删除订单 -->
        <text
          v-if="order.orderState >= OrderState.PendingReview"
          class="icon-delete"
          @tap="onOrderDelete(order.id)"
        ></text>
      </view>
      <!-- 商品信息，点击商品跳转到订单详情，不是商品详情 -->
      <navigator
        v-for="item in order.skus"
        :key="item.id"
        class="goods"
        :url="`/pagesOrder/detail/detail?id=${order.id}`"
        hover-class="none"
      >
        <view class="cover">
          <image mode="aspectFit" :src="item.image"></image>
        </view>
        <view class="meta">
          <view class="name ellipsis">{{ item.name }}</view>
          <view class="type">{{ item.attrsText }}</view>
        </view>
      </navigator>
      <!-- 支付信息 -->
      <view class="payment">
        <text class="quantity">共{{ order.totalNum }}件商品</text>
        <text>实付</text>
        <text class="amount"> <text class="symbol">¥</text>{{ order.payMoney }}</text>
      </view>
      <!-- 订单操作按钮 -->
      <view class="action">
        <!-- 待付款状态：显示去支付按钮 -->
        <template v-if="order.orderState === OrderState.PendingPayment">
          <view class="button primary" @tap="onOrderPay(order.id)">去支付</view>
        </template>
        <template v-else>
          <navigator
            class="button secondary"
            :url="`/pagesOrder/create/create?orderId=id`"
            hover-class="none"
          >
            再次购买
          </navigator>
          <!-- 待收货状态: 展示确认收货 -->
          <view
            v-if="order.orderState === OrderState.PendingReview"
            class="button primary"
            @tap="onOrderReceipt(order.id)"
            >确认收货</view
          >
        </template>
      </view>
    </view>
    <!-- 底部提示文字 -->
    <view class="loading-text" :style="{ paddingBottom: safeAreaInsets?.bottom + 'px' }">
      {{ true ? '没有更多数据~' : '正在加载...' }}
    </view>
  </scroll-view>
</template>
