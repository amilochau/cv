import en from '@/data/lang/en.json';
import fr from '@/data/lang/fr.json';
import { CultureType, SiteType } from '@/models/business/application';
import moment from 'moment';
import numeral from 'numeral';
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

const greyColor: string = 'grey';

const formatPos = (value: any) => value ? numeral(value).format('0.####') : undefined;
const formatBalanceDate = (value: any) => value ? moment(value).format('MMMM YYYY') : undefined;
const formatDate = (value: any) => value ? moment(value).format('L') : undefined;
const formatTime = (value: any) => value ? moment(value).format('LT') : undefined;
const formatDateTime = (value: any) => value ? moment(value).format('L LT') : undefined;
const formatInt = (value: any) => value !== null && value !== undefined ? numeral(value).format('0') : undefined;
const formatPrecisePrice = (value: any) => value !== null && value !== undefined ? `${numeral(value).format('0,0.00[00]')} €` : undefined;
const formatPrice = (value: any) => value !== null && value !== undefined ? `${numeral(value).format('0,0.##')} €` : undefined;
const formatPercent = (value: any) => value !== null && value !== undefined ? `${numeral(value).format('0.##')} %` : undefined;
const formatPosition = (value: any) => value !== null && value !== undefined ? numeral(value).format('0.######') : undefined;
const formatVariation = (value: any) => value !== null && value !== undefined ? `${numeral(value).format('+0,0.##')} €` : undefined;
const formatVariationPercent = (value: any) => value !== null && value !== undefined ? `${numeral(value).format('+0.##')} %` : undefined;
const formatDateWithTime = (value: any, time?: string) => {
  if (!value) {
    return undefined;
  }
  if (!time) {
    return moment(value).format('L');
  } else {
    const timeMoment = moment(time, 'hh:mm:ss');
    const timeHours = timeMoment.hours();
    const timeMinutes = timeMoment.minutes();
    return moment(value).set({
      hour: timeHours,
      minute: timeMinutes,
    }).format('L LT');
  }
};
const formatBoolean = (title: string, value: boolean) => {
  const key = i18n.t(title);
  let valueText = '';
  if (!!value) {
    valueText = 'enums.boolean.yes';
  } else {
    valueText = 'enums.boolean.no';
  }
  return i18n.t('format.keyValue', { key, value: i18n.t(valueText) });
};
const colorBoolean = (value: boolean, grey?: boolean): string => {
  if (grey) {
    return greyColor;
  }

  return value ? 'success' : 'error';
};
const formatUndefinedBoolean = (title: string, value: boolean | undefined | null) => {
  const key = i18n.t(title);
  let valueText = '';
  if (value === undefined || value === null) {
    valueText = 'enums.boolean.maybe';
  } else if (!!value) {
    valueText = 'enums.boolean.yes';
  } else {
    valueText = 'enums.boolean.no';
  }
  return i18n.t('format.keyValue', { key, value: i18n.t(valueText) });
};
const colorUndefinedBoolean = (value: boolean | undefined | null): string => {
  if (value === undefined || value === null) {
    return 'warning';
  } else if (!!value) {
    return 'success';
  } else {
    return 'error';
  }
};
const formatDays = (value: any) => {
  if (value !== null && value !== undefined) {
    let key = '';
    if (value > 1) {
      key = 'format.days.p';
    } else {
      key = 'format.days.s';
    }
    return i18n.t(key, { days: value });
  }
  return '';
};
const formatOccurrences = (value: any) => {
  if (value !== null && value !== undefined) {
    let key = '';
    if (value > 1) {
      key = 'format.occurrences.p';
    } else {
      key = 'format.occurrences.s';
    }
    return i18n.t(key, { occurrences: value });
  }
  return undefined;
};
const formatCultureType = (value?: CultureType) => {
  switch (value) {
    case CultureType.English:
      return i18n.t('enums.cultureTypes.english');
    case CultureType.French:
      return i18n.t('enums.cultureTypes.french');
  }
};

const formatLastPasswordChange = (value: any) => {
  const date = formatDate(value);
  if (date) {
    return i18n.t('pages.account.edit.lastChangePasswordExplain', { date });
  }
};
const iconEmailConfirmed = (value: any) => {
  return value ? 'mdi-check' : 'mdi-close';
};
const iconNotifications = (value: any) => {
  return value ? 'mdi-bell' : 'mdi-bell-off';
};
const formatLastRefresh = (value: number | undefined) => {
  const date = value ? moment(value).format('L') : undefined;
  return i18n.t('components.table.lastRefresh', { date });
};
const formatI18n = (textEn?: string, textFr?: string) => {
  return i18n.locale === 'fr' && !!textFr ? textFr : textEn;
};

Vue.filter('formatPos', formatPos);
Vue.filter('formatBalanceDate', formatBalanceDate);
Vue.filter('formatDate', formatDate);
Vue.filter('formatTime', formatTime);
Vue.filter('formatDateTime', formatDateTime);
Vue.filter('formatPrecisePrice', formatPrecisePrice);
Vue.filter('formatPrice', formatPrice);
Vue.filter('formatPercent', formatPercent);
Vue.filter('formatPosition', formatPosition);
Vue.filter('formatVariation', formatVariation);
Vue.filter('formatVariationPercent', formatVariationPercent);
Vue.filter('formatDateWithTime', formatDateWithTime);
Vue.filter('formatBoolean', formatBoolean);
Vue.filter('colorBoolean', colorBoolean);
Vue.filter('formatUndefinedBoolean', formatBoolean);
Vue.filter('colorUndefinedBoolean', colorBoolean);
Vue.filter('formatDays', formatDays);
Vue.filter('formatOccurrences', formatOccurrences);
Vue.filter('formatCultureType', formatCultureType);
Vue.filter('formatLastPasswordChange', formatLastPasswordChange);
Vue.filter('iconEmailConfirmed', iconEmailConfirmed);
Vue.filter('iconNotifications', iconNotifications);
Vue.filter('formatLastRefresh', formatLastRefresh);
Vue.filter('formatI18n', formatI18n);

export default i18n;

export {
  formatPos,
  formatBalanceDate,
  formatDate,
  formatTime,
  formatDateTime,
  formatInt,
  formatPrecisePrice,
  formatPrice,
  formatPercent,
  formatPosition,
  formatVariation,
  formatVariationPercent,
  formatDateWithTime,
  formatBoolean,
  colorBoolean,
  formatUndefinedBoolean,
  colorUndefinedBoolean,
  formatDays,
  formatOccurrences,
  formatCultureType,

  formatLastPasswordChange,
  iconEmailConfirmed,
  iconNotifications,
  formatLastRefresh,
  formatI18n,
};
