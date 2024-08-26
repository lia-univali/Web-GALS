import './assets/css/fonts.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import ToastPlugin from 'vue-toast-notification';
// Import one of the available themes
import 'vue-toast-notification/dist/theme-default.css';
//import 'vue-toast-notification/dist/theme-sugar.css'
//import 'vue-toast-notification/dist/theme-bootstrap.css';

const app = createApp(App)

app.use(createPinia())
app.use(ToastPlugin)

app.mount('#app')
