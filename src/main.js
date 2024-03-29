import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/styles/footer.scss'
import '@/assets/styles/navbar.scss'
import '@/assets/styles/main.scss'
import '@/assets/styles/variables.scss'
import Navbar from '@/components/Navbar.vue'
createApp(App).component('Navbar', Navbar).use(store).use(router).mount('#app')