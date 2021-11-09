import { CultureType } from '@/models/business/application';
import { Module } from 'vuex';

interface IAppModuleState {
  drawer: boolean;
  appTitle?: string;
  culture: CultureType;
}

const AppModule: Module<IAppModuleState, {}> = {
  namespaced: true,
  state: {
    drawer: false,
    appTitle: undefined,
    culture: CultureType.English,
  },
  getters: {
    drawer: (state) => state.drawer,
    title: (state) => state.appTitle,
    culture: (state) => state.culture,
  },
  actions: {
    changeDrawer({ commit }, drawer) {
      commit('DRAWER', drawer);
    },
    toggleDrawer({ commit }) {
      commit('DRAWER_TOGGLE');
    },
    changeTitle({ commit }, title) {
      commit('TITLE', title);
    },
    refresh({ commit }, cultureParam: string) {
      if (!cultureParam.localeCompare('fr', undefined, { sensitivity: 'base' })) {
        commit('CULTURE', CultureType.French);
      } else {
        commit('CULTURE', CultureType.English);
      }
    },
  },
  mutations: {
    DRAWER(state, payload: boolean) {
      state.drawer = payload;
    },
    DRAWER_TOGGLE(state) {
      state.drawer = !state.drawer;
    },
    TITLE(state, payload: string) {
      state.appTitle = payload;
    },
    CULTURE(state, payload: CultureType) {
      state.culture = payload;
    },
  },
};

export default AppModule;
