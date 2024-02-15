<template>
    <div class="user-card">
        <el-avatar
            :src="user.avatar"
        />
        {{ user.name }}
    </div>
</template>
<script setup>
import { defineProps } from 'vue';
defineProps(['user'])
</script>
<style>
.user-card {
    display: flex;
    align-items: center;
    gap: 15px;
}
</style>