import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import GxcelUI from 'gxcel-ui'

const app = createApp(App)

app.use(GxcelUI)

app.mount('#app')
