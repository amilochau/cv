import Routes from '@/data/routes';
import store from '@/plugins/vuex';
import Vue from 'vue';
import Router, { RawLocation, Route, RouteConfig } from 'vue-router';
import scrollBehavior from './scroll-behavior';

import RootPage from '@/pages/Root.vue';
import i18n from '../i18n';

Vue.use(Router);

const route = (path: any, name: any, component: any, requiresAuth: any, props: any, children: any) => {
  const hasChildren = Array.isArray(children);

  return {
    path,
    meta: { requiresAuth },
    name: hasChildren ? undefined : name,
    props,
    component,
    children: hasChildren
      ? children.map((r: any) => route(
        r.path,
        r.name,
        r.component,
        r.requiresAuth,
        r.props,
        r.children,
      ))
      : [],
  };
};

const routes = Routes
  .map((r: any) => route(
    r.path,
    r.name,
    r.component,
    r.requiresAuth,
    r.props,
    r.children,
  ));

const routesWithRedirection: RouteConfig[] = [
  {
    path: '/:lang([a-z]{2})',
    component: RootPage,
    props: (x) => ({ lang: x.params.lang }),
    children: routes,
  },
  {
    path: '*',
    redirect: (to) => {
      const lang = i18n.locale;
      return `/${lang}${to.path}`;
    },
  },
];

const router = new Router({
  mode: 'history',
  scrollBehavior,
  routes: routesWithRedirection,
});

router.beforeEach((to: Route, from: Route, next: (to?: RawLocation | false | ((vm: Vue) => any) | void) => void) => {
  // Abort previous loading indicator
  store.dispatch('load/stopLoading');

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters['user/logged']) {
      next({
        name: 'account/Login', params: { lang: to.params.lang }, query: { returnUrl: to.fullPath },
      });
    }
  }
  next(); // make sure to always call next()!
});

// Keep navigation
Vue.navigationHistory = [];

router.beforeEach((to: Route, from: Route, next: (to?: RawLocation | false | ((vm: Vue) => any) | void) => void) => {
  // TODO Ignore routes here

  const navigationHistory = Vue.navigationHistory;
  const position = { x: window.pageXOffset, y: window.pageYOffset };

  // Avoid storing too long history
  if (navigationHistory.length >= 10) {
    navigationHistory.splice(0, navigationHistory.length / 2);
  }

  // Find last position
  const currentPathIndex = navigationHistory.findIndex((x: any) => x.path === from.fullPath);
  if (currentPathIndex !== -1) {
    navigationHistory[currentPathIndex].position = position;
  } else {
    navigationHistory.push({ path: from.fullPath, position });
  }

  next();
});

export default router;
