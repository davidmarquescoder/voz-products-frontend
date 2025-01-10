// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Toastfy
import 'vue3-toastify/dist/index.css';

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
