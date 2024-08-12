<template>
  <div class="header-title" style="display: flex; flex-direction: row; justify-content: space-between; align-items: center; padding: 10px 11px; height: 43px; background-color: rgb(40, 40, 52); color: rgb(245, 172, 88);">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {


    return {}
  }
})
</script>

<style scoped lang="less">
.pxx-card{
  padding: 12px;
  background-color: #fff;
  border-radius: var(--van-border-radius-lg);
}

</style>
