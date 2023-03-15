import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

// 导入本地mock
import '@/mock'

import 'normalize.css'
import '@/assets/styles/index.scss'
import 'lib-flexible/flexible'

createApp(App).use(store).use(router).mount('#app')
