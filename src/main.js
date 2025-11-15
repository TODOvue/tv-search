import { createApp } from 'vue'
import { TvDemo } from '@todovue/tv-demo'
import TvSearch from './demo/Demo.vue'
import '@todovue/tv-demo/style.css'
import './style.scss'

const app = createApp(TvSearch)
app.component('TvDemo', TvDemo)
app.mount('#tv-search')
