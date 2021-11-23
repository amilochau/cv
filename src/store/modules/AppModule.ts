import { Module } from 'vuex'

interface IAppModuleState {
  drawer: boolean;
  appTitle?: string;
}

const AppModule: Module<IAppModuleState, {}> = {
  namespaced: true,
  state: {
    drawer: false,
    appTitle: undefined,
  },
  getters: {
    drawer: (state) => state.drawer,
    title: (state) => state.appTitle,
  },
  actions: {
    changeDrawer ({ commit }, drawer) {
      commit('DRAWER', drawer)
    },
    toggleDrawer ({ commit }) {
      commit('DRAWER_TOGGLE')
    },
    changeTitle ({ commit }, title) {
      commit('TITLE', title)
    },
  },
  mutations: {
    DRAWER (state, payload: boolean) {
      state.drawer = payload
    },
    DRAWER_TOGGLE (state) {
      state.drawer = !state.drawer
    },
    TITLE (state, payload: string) {
      state.appTitle = payload
    },
  },
}

export default AppModule
