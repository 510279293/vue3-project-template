import './assets/css/index.less'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useVant } from './plugins'

const app = createApp(App)

app.use(createPinia())
app.use(router)
useVant(app)

app.mount('#app')
