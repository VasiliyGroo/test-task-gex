import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import swal from "sweetalert";

createApp(App).use(router).use(VueAxios, axios).mount("#app");
