<template>
    <div class="post-detail">
        <UserCard :user="user"/>
        <div class="content">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, dolorum ducimus, at, hic rem saepe culpa corrupti unde sed cumque iste possimus. Enim nam harum distinctio ea culpa, natus quasi!
        </div>
        <div class="images-post">
            <img src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/427910036_1428978071029806_2409051309991035273_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=J8LXOYj3GwgAX_6pRSS&_nc_ht=scontent.fhan2-4.fna&oh=00_AfC_EM9MHVZIrfZoGlD6L76IHkuSM-Neq8ND2ATHB5eCQQ&oe=65D2D1B0" alt="" height="100%" >
            <img src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/427910036_1428978071029806_2409051309991035273_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=J8LXOYj3GwgAX_6pRSS&_nc_ht=scontent.fhan2-4.fna&oh=00_AfC_EM9MHVZIrfZoGlD6L76IHkuSM-Neq8ND2ATHB5eCQQ&oe=65D2D1B0" alt="" height="100%" >

            <img src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/427910036_1428978071029806_2409051309991035273_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=J8LXOYj3GwgAX_6pRSS&_nc_ht=scontent.fhan2-4.fna&oh=00_AfC_EM9MHVZIrfZoGlD6L76IHkuSM-Neq8ND2ATHB5eCQQ&oe=65D2D1B0" alt="" height="100%" >
        </div>
        <div class="reactions-post">
            <img src="../../assets/icons/heart-icon.svg" alt="">
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
import { ref } from 'vue';
const user = ref({
    avatar: "heheh",
    name: 'nananan'
})
const comments = [
    {
        avatarUser: "https://scontent.fdad3-3.fna.fbcdn.net/v/t39.30808-6/427980948_1428978027696477_777415906751007243_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeHSYWrJVb9B0-eIExnECfTL91nLuPcs8Dn3Wcu49yzwOUNhOJXAU61mMvUNgKHkt-I57YblYr0BV_iAFza--Omy&_nc_ohc=vZ7jhwqH_-kAX8rhm3A&_nc_zt=23&_nc_ht=scontent.fdad3-3.fna&oh=00_AfAgu7DNlDAPwIb4dRT7r80PZLJZHuUeb7hxXwf_pbk8IQ&oe=65DBFD99",
        userName: "heheeh",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa officiis temporibus, nostrum sit eaque animi laudantium a qui iure impedit veritatis neque ullam laborum! Quae unde tempore architecto sed dolorem"
    }
]
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
</style>