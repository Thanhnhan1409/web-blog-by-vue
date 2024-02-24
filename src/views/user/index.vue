<template>
    <user-information/>
</template>
<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const id = parseInt(route.params.id)
const user = ref({
    name: 'nhan',
    avatar: 'https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/426587256_1430509044210042_7946706195478323343_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGJAwy2cy3ozNO6_7jEhyDyXu52TFDhi9Ve7nZMUOGL1VpuR-3ErXuUitueR_3NPEQEtrYu0xsOzygnsODxm_yg&_nc_ohc=JDFmHhPfyb0AX_MAjeR&_nc_ht=scontent.fdad3-6.fna&oh=00_AfAwSOVCaz-_o3hdopszFG25X691JSKK4F5rry3blKGwXg&oe=65DF24D0',
    email: 'nhan14092gmail.com',
    phone: 68686868,
    total: 12,
    information: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse tempore, temporibus facilis ipsam tenetur libero. Facilis blanditiis, quis aliquid dicta ratione iusto, quia magni praesentium doloribus cumque magnam consequuntur fugit!'
})
</script>
<style scoped>
.user-information {
    background-color: #fff;
}
.content {
    display: flex;
    align-items: start;
}
</style>