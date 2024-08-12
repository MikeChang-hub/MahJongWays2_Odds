<template>
  <div class="main">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
<!--  <Tabbar v-show="tabbarStore.show" />-->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Tabbar from '@/components/Tabbar/index.vue'
import { useTabbarStore } from '@/stores'

export default defineComponent({
  components: { Tabbar },
  setup() {
    const tabbarStore = useTabbarStore()

    return {
      tabbarStore
    }
  }
})
</script>

<style lang="less" scoped>
.main {
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background: linear-gradient(0deg, rgba(37, 110, 151, 1) 0%, rgba(37, 110, 151, 1) 0%, rgba(64, 135, 222, 1) 51%, rgba(194, 239, 245, 1) 100%, rgba(194, 239, 245, 1) 100%);
}
</style>
