// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Toastfy
import 'vue3-toastify/dist/index.css';

// Store (Pinia)
import { createPinia } from 'pinia'
import { useLoadingStore } from './store';

const pinia = createPinia();
const app = createApp(App)

// Pinia Configs
app.use(pinia);
app.config.globalProperties.$loadingStore = useLoadingStore();

registerPlugins(app)

app.mount('#app')
