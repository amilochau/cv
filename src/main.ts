// Hooks are needed before importing any components
import './hooks'

import Vue from 'vue'

import App from '@/App.vue'
import '@/components'
import { createValidate, createVuetify, i18n, router, store } from '@/plugins'
import { logInformation, LogStyle } from './plugins/logger'
import resume from '@/data/resume'

Vue.config.productionTip = false

const vuetify = createVuetify()
createValidate(i18n)

// Setup Vue
new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')

// Unregister PWA service workers
if (window.navigator && navigator.serviceWorker) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    for (const registration of registrations) {
      registration.unregister()
    }
  })
}

// Remove PWA cache
if ('caches' in window) {
  caches.keys().then((keyList) => {
    return Promise.all(keyList.map((key) => {
      return caches.delete(key)
    }))
  })
}

// Add custom messages on console
logInformation('===================', LogStyle.Header)
logInformation('Welcome to this CV!', LogStyle.Header)
logInformation('===================', LogStyle.Header)
logInformation('Don\'t hesitate to contact me:')
logInformation('  - if you want to learn more on my projects')
logInformation('  - if you want to hire me :)')
logInformation('===================', LogStyle.Header)
logInformation(`Contact me here: ${resume[0].persona.contact.url}`)
logInformation('===================', LogStyle.Header)
