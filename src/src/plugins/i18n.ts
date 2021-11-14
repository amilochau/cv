import en from '@/data/lang/en.json';
import fr from '@/data/lang/fr.json';
import moment from 'moment';
import 'numeral/locales/fr';
import Vue from 'vue';
import VueI18n from 'vue-i18n';

// Use vue-i18n
Vue.use(VueI18n);

const messages = {
  en,
  fr,
};

const locale = navigator.language.slice(0, 2) === 'fr' ? 'fr' : 'en';

const i18n = new VueI18n({
  locale,
  fallbackLocale: 'en',
  messages,
});

const formatExperienceDate = (value: string) => moment(value).format('MMM YYYY');

Vue.filter('formatExperienceDate', formatExperienceDate);

export default i18n;

export {
  formatExperienceDate,
};
