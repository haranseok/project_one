import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Store from '@/store/index'
import API from '@/api/index'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

const app = createApp(App);
  app.use(router)
  app.use(Store)
  app.use(vuetify)
  app.mount('#app')

  app.config.globalProperties.$store = Store;
  app.config.globalProperties.$axios = API;
