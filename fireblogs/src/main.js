import {createApp} from 'vue'
import App from './App.vue'
import store from "@/store";
import router from './router'
import '@/firebase'
import "firebase/compat/auth"
import firebase from 'firebase/compat/app'

firebase.auth().onAuthStateChanged(() => {
    createApp(App).use(router).use(store).mount('#app')
})



