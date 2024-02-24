<template>
    <div class="user-profile">
        <div class="action">
            <img src="../../assets/images/padlock.png" title="Change your password" alt="change password">
            <img src="../../assets/icons/edit-icon.svg" title="Edit your profle" alt="edit">
        </div>
        <div class="profile">
            <img class="image-avt" :src="user.avatar" alt="avatar" width="300" height="600">
            <div class="content">
                <ul class="user-information">
                    <li>
                        <b>User name:</b>  <span>{{ user.name }}</span>
                    </li>
                    <li>
                        <b>Email:</b> <span>{{ user.email }}</span>
                    </li>
                    <li>
                        <b>Phone: </b> <span>{{ user.phone }}</span>
                    </li>
                    <li>
                        <b>Total post:</b>  <span>{{ user.total }}</span>
                    </li>
                    <li>
                        <b>Information:</b>  <span>{{ user.information }}</span>
                    </li>
                </ul>
                <button 
                    class="text-white flex flex-row items-center justify-center w-2/12 px-2 py-2 text-sm font-bold bg-[#6a4e4e] leading-6 capitalize duration-100 transform rounded-lg shadow cursor-pointer focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 md:pl-8 md:pr-6 xl:pl-12 xl:pr-10 hover:shadow-lg hover:-translate-y-1 m-auto "
                >
                    Edit
                </button>
            </div>
            
        </div>
    </div>
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
.user-profile {
    background-color: #fff;
    padding: 30px 40px;
    background-color: #fff;
    border-radius: 18px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    min-height: 80vh;
}
.image-avt {
    width: 30%;
    height: 70vh;
    border-radius: 18px;
}
.profile {
    display: flex;
    align-items: start;
    gap: 30px;
}
.content {
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.user-information {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}
.action {
    display: flex;
    gap: 10px;
    justify-content: end;
}
.action img {
    width: 18px;
    cursor: pointer;
}
</style>