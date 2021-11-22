import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import fr from 'vuetify/src/locale/fr'

Vue.use(Vuetify)

const createVuetify = () => {
  const vuetify = new Vuetify({
    lang: {
      locales: { fr },
    },
  })

  return vuetify
}

export { createVuetify }
