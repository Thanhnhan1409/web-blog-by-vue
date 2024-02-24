<template>
    <section class="bg-gray-50 dark:bg-gray-900 h-[fit]">
        <div class="content flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" class="flex items-center mb-6 text-2xl font-semibold dark:text-white">
                <img
                    class="w-8 h-8 mr-2"
                    src="../../assets//images/cat-logo.png"
                    alt="logo"
                />
                <p class=" text-[#6a4e4e]">LensCo</p> 
            </a>
            <div
                class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
            >
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1
                        class="text-xl text-center font-bold leading-tight tracking-tight text-[6a4e4e] md:text-2xl dark:text-white"
                    >
                        Create an account
                    </h1>
                    <div class="space-y-4 md:space-y-3">
                        <div>
                            <label for="email" class="text-[#6a4e4e] block mb-2 text-sm font-medium dark:text-white"
                                >Your email</label
                            >
                            <input
                                v-model="user.email"
                                type="email"
                                class="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Enter your email"
                                required=""
                            />
                        </div>
                        <div class="space-y-4 md:space-y-3">
                            <div>
                                <label for="email" class="text-[#6a4e4e] block mb-2 text-sm font-medium dark:text-white"
                                    >Your name</label
                                >
                                <input
                                    v-model="user.name"
                                    type="text"
                                    class="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Enter your name"
                                    required=""
                                />
                            </div>
                            <div>
                                <label for="email" class="text-[#6a4e4e] block mb-2 text-sm font-medium dark:text-white"
                                    >Your phone</label
                                >
                                <input
                                    v-model="user.phone"
                                    type="number"
                                    class="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Enter your phone"
                                    required=""
                                />
                            </div>
                        </div>
                        <div>
                            <label for="password" class="text-[#6a4e4e] block mb-2 text-sm font-medium dark:text-white"
                                >Password</label
                            >
                            <input
                                v-model="user.password"
                                type="password"
                                placeholder="Enter your password"
                                class="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required=""
                            />
                        </div>
                        <div>
                            <label
                                for="confirm-password"
                                class="block mb-2 text-sm font-medium dark:text-white"
                                >Confirm password</label
                            >
                            <input
                                v-model="user.confirm_password"
                                type="password"
                                placeholder="Confirm your password"
                                @change="isMatch"
                                class="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required=""
                            />
                        </div>
                        <span v-if="isShowError" class="text-[red] text-xs">Passwords do not match</span>
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input
                                    id="terms"
                                    aria-describedby="terms"
                                    type="checkbox"
                                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                    required=""
                                />
                            </div>
                            <div class="ml-3 text-sm">
                                <label for="terms" class="font-light text-gray-500 dark:text-gray-300"
                                    >I accept the
                                    <a
                                        class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                        href="#"
                                        >Terms and Conditions</a
                                    ></label
                                >
                            </div>
                        </div>
                        <button
                            type="submit"
                            class="text-[#ffff] w-full text-white flex flex-row items-center justify-center w-full px-2 py-2 mb-4 text-sm font-bold bg-[#6a4e4e] leading-6 capitalize duration-100 transform rounded-lg shadow cursor-pointer focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:mr-4 md:pl-8 md:pr-6 xl:pl-12 xl:pr-10 hover:shadow-lg hover:-translate-y-1"
                            @click="submit"
                        >
                            Create an account
                        </button>
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account?
                            <router-link
                                to="login"
                                class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >Login here</router-link
                            >
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const isShowError = ref(false)
const confirmPassword = ref('')
const user = ref({})
// const submit = async () => {
//     try {
//         await registerApi(user.value)
//         router.push('/login')
//         notification.notify({
//             type: 'success',
//             title: 'Đăng kí thành công',
//         })
//     } catch (error) {
//         notification.notify({
//             type: 'error',
//             title: 'Đăng kí thất bại',
//         })
//         console.error(error)
//     }
// }
const isMatch = () => {
    if (user.value.password !== user.value.confirm_password) {
        isShowError.value = true
    } else {
        isShowError.value = false
    }
}
</script>

<style   scoped>
section {
    padding: 150p auto;
}
.content {
    padding: 200px auto;
}
</style>