// tslint:disable:interface-name

import Component from 'vue-class-component';
import 'vue-class-component/hooks';
import { RawLocation, Route } from 'vue-router';

// Register the router hooks with their names
Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate',
]);

declare module 'vue/types/vue' {
  // Augment component instance type
  interface Vue {
    // Maps
    $gmapApiPromiseLazy: any;
    $autocomplete: any;

    // Vue router
    beforeRouteEnter?(
      to: Route,
      from: Route,
      next: (to?: RawLocation | false | ((vm: Vue) => void)) => void,
    ): void;

    beforeRouteLeave?(
      to: Route,
      from: Route,
      next: (to?: RawLocation | false | ((vm: Vue) => void)) => void,
    ): void;

    beforeRouteUpdate?(
      to: Route,
      from: Route,
      next: (to?: RawLocation | false | ((vm: Vue) => void)) => void,
    ): void;
  }
  // Augment component global type
  interface VueConstructor {
    // Vue router
    navigationHistory: { path: string, position: { x: number, y: number } }[];
  }
}
