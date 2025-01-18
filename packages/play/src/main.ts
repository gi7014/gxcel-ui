import { createApp } from 'vue'
import App from './App.vue'
import GxcelUI from 'gxcel-ui'

const app = createApp(App)

app.use(GxcelUI)

app.mount('#app')
