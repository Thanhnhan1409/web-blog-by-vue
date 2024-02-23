<template>
    <div class="comment-detail">
        <el-avatar
            :src="comment.avatarUser"
        />
        <div class="content">
            <p class="user-name">{{ comment.userName }}</p>
            {{ comment.content }}
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps(['comment'])
</script>
<style scoped>
.comment-detail {
    display: flex;
    align-items: flex-start;
    gap: 10px; 
    padding-bottom: 8px;
    /* border: 1px solid #ccbcbc; */
    border-radius: 16px;
    margin-bottom: 10px;
}

.content {
    width: 90%;
    padding: 8px 16px 16px 20px;
    border-radius: 16px;
    background-color: #FAFAFA;
}

.user-name {
    font-weight: 600;
    padding-bottom: 6px;
}
</style>