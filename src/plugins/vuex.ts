import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import modules from '@/store'

Vue.use(Vuex)

// Store user-defined state into localStorage
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: [
    'theme',
  ],
})

// Register vuex modules
const vuex = new Vuex.Store({
  modules,
  plugins: [vuexLocal.plugin],
})

export default vuex
