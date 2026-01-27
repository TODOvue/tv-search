import { createApp } from 'vue'
import TvSearch from './demo/Demo.vue'
import '@todovue/tv-demo/style.css'
import '@todovue/tv-button/style.css'
import './style.scss'

const app = createApp(TvSearch)
app.mount('#tv-search')
