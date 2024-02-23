<template>
    <div>
        <section class="bg-gray-50 text-[#6a4e4e] overflow-hidden">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <router-link to="/" class="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                    <img class="w-10 h-8" src="../../assets/images/cat-logo.png" alt="logo" />
                    <p>LensChill</p> 
                </router-link>
                <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-[#6a4e4e] text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Sign in to your account
                        </h1>
                        <form class="space-y-4 md:space-y-6" @submit.prevent="onLogin">
                            <div>
                                <label for="email" class="text-[#6a4e4e] block mb-2 text-sm font-medium text-gray-900"
                                    >Your email</label
                                >
                                <input
                                    v-model="email"
                                    type="email"
                                    id="email"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    placeholder="name@company.com"
                                    required
                                />
                            </div>
                            <div>
                                <label for="password" class="text-[#6a4e4e] block mb-2 text-sm font-medium text-gray-900"
                                    >Password</label
                                >
                                <input
                                    v-model="password"
                                    type="password"
                                    id="password"
                                    placeholder="••••••••"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    required
                                />
                            </div>
                            <input type="hidden" name="formType" value="login" />
                            <button
                                type="submit"
                                class="text-[#ffff] w-full text-white flex flex-row items-center justify-center w-full px-2 py-2 mb-4 text-sm font-bold bg-[#6a4e4e] leading-6 capitalize duration-100 transform rounded-lg shadow cursor-pointer focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:mr-4 md:pl-8 md:pr-6 xl:pl-12 xl:pr-10 hover:shadow-lg hover:-translate-y-1"
                            >
                                Sign in
                            </button>
                            <p class="text-sm font-light text-[#6a4e4e]">
                                Don’t have an account yet?
                                <router-link
                                    to="/register_candidate"
                                    class="font-medium text-primary-600 hover:underline"
                                    >Sign up</router-link
                                >
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
// const notification = useNotification()
const router = useRouter()
const email = ref('')
const password = ref('')
// const auth = authStore()
// const onLogin = async () => {
//     try {
//         let data;
//         await loginApi({ email: email.value, password: password.value }).then((res) => {
//             data = res.data
//             console.log('data', data)
//             localStorage.setItem('access_token', data.access_token)
//             localStorage.setItem('entity_id', data.entity_id)
//             localStorage.setItem('role', data.account.role)
//             console.log('dhdha', data.account)
//             localStorage.setItem('email', data.account.email)
//         })
//         await auth.initAuthStore()
//         if(data.account.role == 'candidate') {
//                 router.push('/')
//             } else {
//                 router.push('/list-jobs')
//             }
//     } catch (error) {
//         notification.notify({
//             type: 'error',
//             title: 'Đăng nhập thất bại, vui lòng kiểm tra lại thông tin đăng nhập',
//         })
//         console.log(error)
//     }
// }
</script>
<style lang="scss" scoped></style>