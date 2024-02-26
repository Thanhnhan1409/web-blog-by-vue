<template>
    <div class="post-detail">
        <div class="post-header">
            <UserCard :user="user"/>
            <div class="icon-box">
                <img v-if="!islike" @click="toggleLike" src="../../assets/icons/heart-icon.svg" width="18" alt="">
                <img v-else @click="toggleLike"  src="../../assets/icons/full-heart-icon.svg" width="18" alt="">
                <div class="actions">
                    <img src="../../assets/icons/ellipsis-icn.svg" width="4" alt="">
                    <div class="actions-detail">
                    </div>
                </div>
            </div>
        </div>
        
        <div class="content">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, dolorum ducimus, at, hic rem saepe culpa corrupti unde sed cumque iste possimus. Enim nam harum distinctio ea culpa, natus quasi!
        </div>
        <div class="images-post">
            <img src="https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/426587256_1430509044210042_7946706195478323343_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGJAwy2cy3ozNO6_7jEhyDyXu52TFDhi9Ve7nZMUOGL1VpuR-3ErXuUitueR_3NPEQEtrYu0xsOzygnsODxm_yg&_nc_ohc=JDFmHhPfyb0AX_MAjeR&_nc_ht=scontent.fdad3-6.fna&oh=00_AfAwSOVCaz-_o3hdopszFG25X691JSKK4F5rry3blKGwXg&oe=65DF24D0" width="390" alt="" >
            <img src="https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/426587256_1430509044210042_7946706195478323343_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGJAwy2cy3ozNO6_7jEhyDyXu52TFDhi9Ve7nZMUOGL1VpuR-3ErXuUitueR_3NPEQEtrYu0xsOzygnsODxm_yg&_nc_ohc=JDFmHhPfyb0AX_MAjeR&_nc_ht=scontent.fdad3-6.fna&oh=00_AfAwSOVCaz-_o3hdopszFG25X691JSKK4F5rry3blKGwXg&oe=65DF24D0" width="390" alt="" >
        </div>
        <div class="reactions-post">
            <img v-if="!islike" @click="toggleLike" src="../../assets/icons/heart-icon.svg" width="18" alt="">
            <img v-else @click="toggleLike"  src="../../assets/icons/full-heart-icon.svg" width="18" alt="">
            <img src="../../assets/icons/comment-icon.svg" alt="">
        </div>
        <div class="comment-container">
            <!-- <slot name="comment-content"></slot> -->
            <div class="comment-content">
                <comment-detail v-for="(item, index ) in comments" :comment="item" :key="item.id"/>
            </div>
            <input type="text" placeholder="Write a comment..." name="" id="" class="comment-input">
        </div>
    </div>
</template>
<script setup>
import UserCard from '../user/UserCard.vue';
import { ref, defineProps } from 'vue';
defineProps(['user', 'comments'])
const islike = ref(false)
const toggleLike = () => {
    console.log('heheehh');
    islike.value = !islike.value
}
</script>
<style scoped>
.post-detail {
    padding: 30px 40px;
    background-color: #fff;
    border-radius: 18px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 25px;
}
.post-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.images-post {
    width: 100%;
    height: 400px;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
}
.images-post img {
    border-radius: 16px;
}
.reactions-post {
    display: flex;
    align-items: center;
    gap: 15px;
}
.reactions-post img {
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
}
.comment-input {
    padding: 12px 20px;
    border: 1px solid #ccbcbc;
    border-radius: 16px;
    width: 100%;
}
.icon-box {
    display: flex;
    align-items: center;
    gap: 10px;
}
.icon-box img {
    cursor: pointer;
}
</style>