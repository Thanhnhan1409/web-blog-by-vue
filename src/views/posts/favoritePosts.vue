<template>
    <div class="posts-container">
        <post-detail v-for="item in data" :key="item.id" :user="item.user" :comments="item.comments" />
    </div>
</template>
<script setup>
import { ref } from 'vue';

const data = ref([
    {
        user :{
            avatar: "heheh",
            name: 'nananan'
        },
        comments: [
            {
                avatarUser: "https://scontent.fdad3-3.fna.fbcdn.net/v/t39.30808-6/427980948_1428978027696477_777415906751007243_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeHSYWrJVb9B0-eIExnECfTL91nLuPcs8Dn3Wcu49yzwOUNhOJXAU61mMvUNgKHkt-I57YblYr0BV_iAFza--Omy&_nc_ohc=vZ7jhwqH_-kAX8rhm3A&_nc_zt=23&_nc_ht=scontent.fdad3-3.fna&oh=00_AfAgu7DNlDAPwIb4dRT7r80PZLJZHuUeb7hxXwf_pbk8IQ&oe=65DBFD99",
                userName: "heheeh",
                content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa officiis temporibus, nostrum sit eaque animi laudantium a qui iure impedit veritatis neque ullam laborum! Quae unde tempore architecto sed dolorem"
            },
            {
                avatarUser: "https://scontent.fdad3-3.fna.fbcdn.net/v/t39.30808-6/427980948_1428978027696477_777415906751007243_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeHSYWrJVb9B0-eIExnECfTL91nLuPcs8Dn3Wcu49yzwOUNhOJXAU61mMvUNgKHkt-I57YblYr0BV_iAFza--Omy&_nc_ohc=vZ7jhwqH_-kAX8rhm3A&_nc_zt=23&_nc_ht=scontent.fdad3-3.fna&oh=00_AfAgu7DNlDAPwIb4dRT7r80PZLJZHuUeb7hxXwf_pbk8IQ&oe=65DBFD99",
                userName: "heheeh",
                content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa officiis temporibus, nostrum sit eaque animi laudantium a qui iure impedit veritatis neque ullam laborum! Quae unde tempore architecto sed dolorem"
            }
        ] 
    }, 
    {
        user :{
            avatar: "heheh",
            name: 'nananan'
        },
        comments: [
            {
                avatarUser: "https://scontent.fdad3-3.fna.fbcdn.net/v/t39.30808-6/427980948_1428978027696477_777415906751007243_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeHSYWrJVb9B0-eIExnECfTL91nLuPcs8Dn3Wcu49yzwOUNhOJXAU61mMvUNgKHkt-I57YblYr0BV_iAFza--Omy&_nc_ohc=vZ7jhwqH_-kAX8rhm3A&_nc_zt=23&_nc_ht=scontent.fdad3-3.fna&oh=00_AfAgu7DNlDAPwIb4dRT7r80PZLJZHuUeb7hxXwf_pbk8IQ&oe=65DBFD99",
                userName: "heheeh",
                content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa officiis temporibus, nostrum sit eaque animi laudantium a qui iure impedit veritatis neque ullam laborum! Quae unde tempore architecto sed dolorem"
            },
            {
                avatarUser: "https://scontent.fdad3-3.fna.fbcdn.net/v/t39.30808-6/427980948_1428978027696477_777415906751007243_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeHSYWrJVb9B0-eIExnECfTL91nLuPcs8Dn3Wcu49yzwOUNhOJXAU61mMvUNgKHkt-I57YblYr0BV_iAFza--Omy&_nc_ohc=vZ7jhwqH_-kAX8rhm3A&_nc_zt=23&_nc_ht=scontent.fdad3-3.fna&oh=00_AfAgu7DNlDAPwIb4dRT7r80PZLJZHuUeb7hxXwf_pbk8IQ&oe=65DBFD99",
                userName: "heheeh",
                content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa officiis temporibus, nostrum sit eaque animi laudantium a qui iure impedit veritatis neque ullam laborum! Quae unde tempore architecto sed dolorem"
            }
        ] 
    }
])
</script>