import { createApp } from "vue";
import "./assets/css/style.css";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import Header from "./components/layouts/Header.vue";
import Sidebar from "./components/layouts/Sidebar.vue";
import PostDetail from "./components/posts/PostDetail.vue";
import CommentDetail from "./components/posts/comments/commentDetail.vue";
import authLayout from './layouts/authLayout.vue'
import emptyLayout from './layouts/emptyLayout.vue'
import App from "./App.vue";

const initApp = async () => {
    const app = createApp(App);
    app.use(router);
    app.component('auth-layout', authLayout)
    app.component('empty-layout', emptyLayout)
    app.component("header-component", Header);
    app.component("sidebar-component", Sidebar);
    app.component("post-detail", PostDetail);
    app.component("comment-detail", CommentDetail);
    router.isReady().then(() => {
        app.mount("#app");
    });
};
initApp();
