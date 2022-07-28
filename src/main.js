import App from "./App.vue";
import { createApp } from "vue";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import router from "./router";
import VueApexCharts from "vue3-apexcharts";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAaJexKSu1iNWOom5dNdytVAygITSdQFGk",
    authDomain: "kdusms-876be.firebaseapp.com",
    projectId: "kdusms-876be",
    storageBucket: "kdusms-876be.appspot.com",
    messagingSenderId: "907043762767",
    appId: "1:907043762767:web:801978c076cbf4572bf03a",
    measurementId: "G-PE1RZVY590"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createApp(App).use(router).use(VueApexCharts).mount("#app");
