import { createApp } from "vue";
import "./assets/css/style.css";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import Header from "./components/layouts/Header.vue";
import Sidebar from "./components/layouts/Sidebar.vue";
import PostDetail from "./components/posts/PostDetail.vue";
import App from "./App.vue";

const initApp = async () => {
    const app = createApp(App);
    app.use(router);
    app.component("header-component", Header);
    app.component("sidebar-component", Sidebar);
    app.component("post-detail", PostDetail);
    router.isReady().then(() => {
        app.mount("#app");
    });
};
initApp();
