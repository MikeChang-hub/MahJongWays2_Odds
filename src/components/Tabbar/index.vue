<template>
  <van-tabbar v-model="tabbarStore.activePath" class="common-nav">
    <van-tabbar-item icon="home-o" name="/home" url="/#/home">首页</van-tabbar-item>
    <van-tabbar-item
      icon="shopping-cart-o"
      name="/cart"
      url="/#/cart"
      :badge="carStore.cartCount"
      :badge-props="{ showZero: false }"
    >购物车</van-tabbar-item>
    <van-tabbar-item icon="manager-o" name="/mine" url="/#/mine" :dot="!token">{{token ? '我的' : '未登录'}}</van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useCartStore, useTabbarStore } from '@/stores'
import { getToken } from '@/utils'

export default defineComponent({
  setup() {
    const active = ref()
    const carStore = useCartStore()
    const tabbarStore = useTabbarStore()

    onMounted(() => {
      getToken() && tabbarStore.show && carStore.updateCartCount()
    })

    return {
      active,
      carStore,
      tabbarStore,
      token: getToken()
    }
  }
})
</script>
<style lang="less" scoped>
.common-nav {
  box-shadow: 0 0 10px 0 hsl(0deg 6% 58% / 60%);
}
</style>
