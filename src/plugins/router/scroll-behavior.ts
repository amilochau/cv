import Vue from 'vue';
import { Route } from 'vue-router';
import { PositionResult } from 'vue-router/types/router';
import goTo from 'vuetify/lib/services/goto';

const waitForReadystate = async () => {
  if (
    typeof document !== 'undefined' &&
    document.readyState !== 'complete'
  ) {
    await new Promise((resolve) => {
      const cb = () => {
        window.requestAnimationFrame(resolve);
        window.removeEventListener('load', cb);
      };
      window.addEventListener('load', cb);
    });
  }
};

export default async (to: Route, from: Route, savedPosition: void | { x: number, y: number }): Promise<PositionResult> => {
  await waitForReadystate();

  let scrollTo: number | string = 0;
  const options = {
    duration: 0,
  };

  if (to.hash) {
    scrollTo = to.hash;
    options.duration = 500;
  } else if (savedPosition) {
    scrollTo = savedPosition.y;
  } else {
    const navigation = Vue.navigationHistory.find((x) => x.path === to.fullPath);
    if (navigation) {
      scrollTo = navigation.position.y;
    }
  }

  return new Promise((resolve, reject) => {
    window.requestAnimationFrame(async () => {
      // tslint:disable-next-line:no-console
      await goTo(scrollTo, options)
        .catch(reject)
        .finally(resolve);
    });
  });
};
