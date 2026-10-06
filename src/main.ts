import './assets/css/fonts.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import ToastPlugin from 'vue-toast-notification'
// Import one of the available themes
import 'vue-toast-notification/dist/theme-default.css'
//import 'vue-toast-notification/dist/theme-sugar.css'
//import 'vue-toast-notification/dist/theme-bootstrap.css';

const app = createApp(App)

app.use(createPinia())
app.use(ToastPlugin, { queue: false })

const toast = app.config.globalProperties.$toast
const openToast = toast.open.bind(toast)

toast.open = (options: string | { message: string; type?: string; duration?: number }) => {
	toast.clear()

	if (typeof options === 'string') return openToast(options)

	return openToast({
		...options,
		...(options.type === 'error' ? { duration: 0 } : {})
	})
}

app.mount('#app')
