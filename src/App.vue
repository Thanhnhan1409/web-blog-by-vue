<script setup>
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
const route = useRoute()
const layout = computed(() => {
    console.log('route', route)
    console.log((route.meta.layout || 'empty') + '-layout');
    return (route.meta.layout || 'empty') + '-layout'
})
</script>

<template>
  <div class="main-container">
    <component :is="layout" class="content">
      <router-view />
      <!-- <post-detail/> -->
    </component>
  </div>
</template>

<style scoped>
.main-container {
  background-color: #f7f7f7;
}
.content {
  /* padding: 16px; */
  /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
  /* margin: 20px 20px auto 240px; */
  border-radius: 18px;
  min-height: 87vh;
  /* max-height: 100vh; */
}
</style>
