<template>
    <h1>{{ authStore.isLoggedIn? 'heeeeeeeeehh' : 'huuuuuuuuuuuuuuuu'}} </h1>
    <div v-if="authStore.isLoggedIn" class="flex min-h-screen">
        
        <div class="flex flex-col flex-grow bg-[#f4f6f9]">
            <header-component/>
            <sidebar-component/>
            <div class="mb-auto flex">
                hihiiiiiiiiiiiii
                <div class="w-full mt-[60px] rounded-3xl ml-[240px]">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { authStore } from '../stores/auth.store'
</script>