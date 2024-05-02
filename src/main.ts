import { createApp } from 'vue'

import { localization } from '@/plugins/localization'
import router from '@/router'
import { storage } from '@/stores'
import App from '@/App.vue'

import '@/assets/styles/tailwind.css'
import '@/assets/styles/index.scss'

const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)

const app = createApp(App)

app.use(storage)
app.use(router)
app.use(localization)

app.mount('#app')
