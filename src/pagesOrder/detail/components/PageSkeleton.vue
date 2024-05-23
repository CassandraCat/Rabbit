<template name="skeleton">
  <view class="sk-container">
    <view class="navbar" style="padding-top: 54px">
      <view class="wrap">
        <navigator
          class="back icon-left sk-pseudo sk-pseudo-circle"
          open-type="navigateBack"
        ></navigator>
        <view class="title sk-transparent sk-text-14-2857-962 sk-text">订单详情</view>
      </view>
    </view>
    <scroll-view :enable-back-to-top="true" :scroll-y="true" class="viewport" id="scroller">
      <view class="overview sk-image" style="padding-top: 74px">
        <view
          class="status icon-clock sk-transparent sk-text-0-0000-553 sk-text sk-pseudo sk-pseudo-circle"
          >等待付款</view
        >
        <view class="tips">
          <text class="money sk-transparent sk-text-0-0000-826 sk-text">应付金额: ¥ 649</text>
          <text class="time sk-transparent sk-text-0-0000-935 sk-text">支付剩余</text>
          <view is="node-modules/@dcloudio/uni-ui/lib/uni-countdown/uni-countdown">
            <view
              class="uni-countdown countdown--uni-countdown data-v-342c352a countdown--data-v-342c352a"
            >
              <text
                class="uni-countdown__number countdown--uni-countdown__number data-v-342c352a countdown--data-v-342c352a sk-transparent sk-text-15-0000-30 sk-text"
                style="
                  color: rgb(255, 255, 255);
                  font-size: 14px;
                  width: 22px;
                  line-height: 20px;
                  border-radius: 3px;
                  background-position-x: 50%;
                "
                >00</text
              >
              <text
                class="uni-countdown__splitor countdown--uni-countdown__splitor data-v-342c352a countdown--data-v-342c352a sk-transparent sk-opacity"
                style="color: #fff; font-size: 12px; margin: "
                >:</text
              >
              <text
                class="uni-countdown__number countdown--uni-countdown__number data-v-342c352a countdown--data-v-342c352a sk-transparent sk-text-15-0000-512 sk-text"
                style="
                  color: rgb(255, 255, 255);
                  font-size: 14px;
                  width: 22px;
                  line-height: 20px;
                  border-radius: 3px;
                  background-position-x: 50%;
                "
                >29</text
              >
              <text
                class="uni-countdown__splitor countdown--uni-countdown__splitor data-v-342c352a countdown--data-v-342c352a sk-transparent sk-opacity"
                style="color: #fff; font-size: 12px; margin: "
                >:</text
              >
              <text
                class="uni-countdown__number countdown--uni-countdown__number data-v-342c352a countdown--data-v-342c352a sk-transparent sk-text-15-0000-727 sk-text"
                style="
                  color: rgb(255, 255, 255);
                  font-size: 14px;
                  width: 22px;
                  line-height: 20px;
                  border-radius: 3px;
                  background-position-x: 50%;
                "
                >32</text
              >
            </view>
          </view>
        </view>
        <view
          class="button sk-transparent sk-text-27-7778-431 sk-text"
          style="background-position-x: 50%"
          >去支付</view
        >
      </view>
      <view class="shipment">
        <view class="item sk-image">
          <view class="message sk-transparent sk-text-14-2857-26 sk-text">
            您已在广州市天河区黑马程序员完成取件，感谢使用菜鸟驿站，期待再次为您服务。
          </view>
          <view class="date sk-transparent sk-text-14-2857-253 sk-text"> 2023-04-14 13:14:20 </view>
        </view>
        <view class="locate sk-image">
          <view class="user sk-transparent sk-text-14-2857-552 sk-text">CatZhang 13101226888</view>
          <view class="address sk-transparent sk-text-14-2857-113 sk-text"
            >北京市 北京市 东城区test11111</view
          >
        </view>
      </view>
      <view class="goods">
        <view class="item">
          <navigator class="navigator" hover-class="none">
            <image class="cover sk-image"></image>
            <view class="meta">
              <view class="name ellipsis sk-transparent sk-text-14-2857-761 sk-text"
                >平步青云财神家居摆件</view
              >
              <view class="type sk-transparent sk-text-22-2222-596 sk-text">小桃仙</view>
              <view class="price">
                <view class="actual">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="sk-transparent sk-text-14-2857-434 sk-text">646</text>
                </view>
              </view>
              <view class="quantity sk-transparent sk-opacity">x1</view>
            </view>
          </navigator>
        </view>
        <view class="total">
          <view class="row">
            <view class="text sk-transparent sk-text-0-0000-435 sk-text">商品总价: </view>
            <view
              class="symbol sk-transparent sk-text-0-0000-937 sk-text sk-pseudo sk-pseudo-circle"
              >646</view
            >
          </view>
          <view class="row">
            <view class="text sk-transparent sk-text-0-0000-499 sk-text">运费: </view>
            <view
              class="symbol sk-transparent sk-text-0-0000-469 sk-text sk-pseudo sk-pseudo-circle"
              >3</view
            >
          </view>
          <view class="row">
            <view class="text sk-transparent sk-text-0-0000-871 sk-text">应付金额: </view>
            <view
              class="symbol primary sk-transparent sk-text-0-0000-360 sk-text sk-pseudo sk-pseudo-circle"
              >649</view
            >
          </view>
        </view>
      </view>
      <view class="detail">
        <view class="title sk-transparent sk-text-0-0000-822 sk-text">订单信息</view>
        <view class="row">
          <view class="item sk-transparent">
            订单编号: 1793675215830519809
            <text class="copy sk-transparent sk-text-0-0000-727 sk-text">复制</text>
          </view>
          <view class="item sk-transparent sk-text-0-0000-20 sk-text"
            >下单时间: 2024-05-24 00:07:51</view
          >
        </view>
      </view>
      <view is="components/XtxGuess" class="r">
        <view class="caption XtxGuess--caption">
          <text
            class="text XtxGuess--text sk-transparent sk-text-0-0000-188 sk-text sk-pseudo sk-pseudo-circle"
            >猜你喜欢</text
          >
        </view>
        <view class="guess XtxGuess--guess"></view>
        <view
          class="loading-text XtxGuess--loading-text sk-transparent sk-text-14-2857-4 sk-text"
          style="background-position-x: 50%"
          >没有更多数据~</view
        >
      </view>
      <view class="toolbar-height" style="padding-bottom: 34px"></view>
      <view class="toolbar" style="padding-bottom: 34px">
        <view class="button primary sk-transparent sk-text-14-2857-453 sk-text"> 去支付 </view>
        <view class="button sk-transparent sk-text-14-2857-598 sk-text"> 取消订单 </view>
      </view>
    </scroll-view>
  </view>
</template>
<style lang="scss">
.sk-transparent {
  color: transparent !important;
}
.sk-text-14-2857-962 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.9535rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-0-0000-553 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 34.8837rpx;
  position: relative !important;
}
.sk-text-0-0000-826 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 24.4186rpx;
  position: relative !important;
}
.sk-text-0-0000-935 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 24.4186rpx;
  position: relative !important;
}
.sk-text-15-0000-30 {
  background-image: linear-gradient(
    transparent 15%,
    #eeeeee 0%,
    #eeeeee 85%,
    transparent 0%
  ) !important;
  background-size: 100% 34.8837rpx;
  position: relative !important;
}
.sk-opacity {
  opacity: 0 !important;
}
.sk-text-15-0000-512 {
  background-image: linear-gradient(
    transparent 15%,
    #eeeeee 0%,
    #eeeeee 85%,
    transparent 0%
  ) !important;
  background-size: 100% 34.8837rpx;
  position: relative !important;
}
.sk-text-15-0000-727 {
  background-image: linear-gradient(
    transparent 15%,
    #eeeeee 0%,
    #eeeeee 85%,
    transparent 0%
  ) !important;
  background-size: 100% 34.8837rpx;
  position: relative !important;
}
.sk-text-27-7778-431 {
  background-image: linear-gradient(
    transparent 27.7778%,
    #eeeeee 0%,
    #eeeeee 72.2222%,
    transparent 0%
  ) !important;
  background-size: 100% 62.7907rpx;
  position: relative !important;
}
.sk-text-14-2857-26 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-253 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 31.7442rpx;
  position: relative !important;
}
.sk-text-14-2857-552 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-113 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 31.7442rpx;
  position: relative !important;
}
.sk-text-14-2857-761 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-22-2222-596 {
  background-image: linear-gradient(
    transparent 22.2222%,
    #eeeeee 0%,
    #eeeeee 77.7778%,
    transparent 0%
  ) !important;
  background-size: 100% 40.814rpx;
  position: relative !important;
}
.sk-text-14-2857-434 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 31.7442rpx;
  position: relative !important;
}
.sk-text-0-0000-435 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 24.4186rpx;
  position: relative !important;
}
.sk-text-0-0000-937 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 24.4186rpx;
  position: relative !important;
}
.sk-text-0-0000-499 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 24.4186rpx;
  position: relative !important;
}
.sk-text-0-0000-469 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 24.4186rpx;
  position: relative !important;
}
.sk-text-0-0000-871 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 24.4186rpx;
  position: relative !important;
}
.sk-text-0-0000-360 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 34.8837rpx;
  position: relative !important;
}
.sk-text-0-0000-822 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 29.6512rpx;
  position: relative !important;
}
.sk-text-0-0000-727 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 19.186rpx;
  position: relative !important;
}
.sk-text-0-0000-20 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 24.4186rpx;
  position: relative !important;
}
.sk-text-0-0000-188 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 31.3953rpx;
  position: relative !important;
}
.sk-text-14-2857-4 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.0698rpx;
  position: relative !important;
}
.sk-text-14-2857-453 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-598 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
