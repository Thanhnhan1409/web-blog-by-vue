<script setup>
</script>

<template>
  <div class="main-container">
    <header-component/>
    <sidebar-component/>
    <div class="content">
      <router-view />
      <post-detail/>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  background-color: #f7f7f7;
}
.content {
  padding: 16px;
  /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
  margin: 20px 20px auto 240px;
  border-radius: 18px;
  min-height: 87vh;
  /* max-height: 100vh; */
}
</style>
