import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Store from '@/store/index'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

const app = createApp(App);
  app.use(router)
  app.use(Store)
  app.use(vuetify)
  app.mount('#app')

  app.config.globalProperties.$store = Store;
  app.config.globalProperties.setHeader = (type) => {
    Store.dispatch('setHeaderType', type)
  };
  app.config.globalProperties.setFooter = (type) => {
    Store.dispatch('setFooterType', type)
  }
  
