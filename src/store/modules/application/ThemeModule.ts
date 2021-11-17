import { Module } from 'vuex';

interface IThemeModuleState {
  darkTheme: boolean;
}

const ThemeModule: Module<IThemeModuleState, {}> = {
  namespaced: true,
  state: {
    darkTheme: false,
  },
  getters: {
    darkTheme: (state) => state.darkTheme,
  },
  actions: {
    changeTheme({ commit }, darkTheme) {
      commit('THEME', darkTheme);
    },
  },
  mutations: {
    THEME(state, payload) {
      state.darkTheme = payload;
    },
  },
};

export default ThemeModule;
