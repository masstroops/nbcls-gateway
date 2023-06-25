import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routers'
import { createPinia } from 'pinia'
import 'virtual:svg-icons-register'
import SvgIcon from '@/components/SvgIcon.vue'

const app = createApp(App)

app.component('SvgIcon', SvgIcon)

app.use(router)
.use(createPinia())
.mount('#app')
