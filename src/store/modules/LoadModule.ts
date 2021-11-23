import { Module } from 'vuex'

interface ILoadModuleState {
  progress: {
    loading: boolean;
    indeterminate: boolean;
  };
  offline: boolean;
}

const LoadModule: Module<ILoadModuleState, {}> = {
  namespaced: true,
  state: {
    progress: {
      loading: false,
      indeterminate: true,
    },
    offline: false,
  },
  getters: {
    progress: (state) => state.progress,
    loading: (state) => state.progress.loading,
    offline: (state) => state.offline,
  },
  actions: {
    startLoading ({ commit }) {
      commit('LOAD_START')
    },
    stopLoading ({ commit }) {
      commit('LOAD_STOP')
    },
    setOnline ({ commit }) {
      commit('ONLINE')
    },
    setOffline ({ commit }) {
      commit('OFFLINE')
    },
  },
  mutations: {
    LOAD_START (state) {
      state.progress.loading = true
    },
    LOAD_STOP (state) {
      state.progress.loading = false
    },
    ONLINE (state) {
      state.offline = false
    },
    OFFLINE (state) {
      state.offline = true
    },
  },
}

export default LoadModule
