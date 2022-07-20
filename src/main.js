import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Carousel3d from 'vue-carousel-3d';
import headerBanner from './components/heder-banner.vue'
import sectionTitle from './components/section-title.vue'
import Vue2Editor from "vue2-editor";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAHVZGYfbkFehV5rL3g3qu2dED6BYbSPUM",
    authDomain: "art-gallery-a5d15.firebaseapp.com",
    databaseURL: "https://art-gallery-a5d15-default-rtdb.firebaseio.com",
    projectId: "art-gallery-a5d15",
    storageBucket: "art-gallery-a5d15.appspot.com",
    messagingSenderId: "323710135155",
    appId: "1:323710135155:web:439e26f5273f7177417306",
    measurementId: "G-VN2BW53DMP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

Vue.component('HeaderBanner', headerBanner)
Vue.component('sectionTitle', sectionTitle)
Vue.config.productionTip = false
Vue.use(Vue2Editor);
Vue.use(Carousel3d);
new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')