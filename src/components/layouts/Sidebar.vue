<template>
    <div class="sidebar-container">
        <img class="logo" src="../../assets/images/cat-logo.png" alt="" width="70" height="60">
        <div class="item">
            <router-link
                to="/"
                class="font-medium text-primary-600"
            >
            Home
            </router-link>
        </div>
        <div class="item">
            <router-link
                to="/my-posts"
                class="font-medium text-primary-600"
            >
            My posts
            </router-link>
        </div>
        <div class="item">
            <router-link
                to="/my-favorite-posts"
                class="font-medium text-primary-600"
            >
            My favorite post
            </router-link>
        </div>
    </div>
</template>
<script setup>

</script>
<style scoped>
.sidebar-container {
    width: 220px;
    position: fixed;
    top: 0;
    bottom: 0;
    height: 100%;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}
.logo {
    margin: 20px auto;
}
.item {
    padding: 8px 8px 8px 20px;
    border-bottom: 1px solid #aeaeae;
    cursor: pointer;
}
.item:hover {
    background-color: #6a4e4e;
    color: #ffff;
}
.select {
    background-color: #6a4e4e;
    color: #ffff;
}
</style>