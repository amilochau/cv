import en from '@/data/lang/en.json'
import fr from '@/data/lang/fr.json'
import moment from 'moment'
import numeral from 'numeral'
import 'numeral/locales/fr'
import Vue from 'vue'
import VueI18n from 'vue-i18n'

// Use vue-i18n
Vue.use(VueI18n)

const messages = {
  en,
  fr,
}

const locale = navigator.language.slice(0, 2) === 'fr' ? 'fr' : 'en'

const i18n = new VueI18n({
  locale,
  fallbackLocale: 'en',
  messages,
})

const formatUpdateDate = (value: string) => moment(value).format('L')
const formatExperienceDate = (value: string) => moment(value).format('MMM YYYY')
const formatTrainingDate = (value: string) => moment(value).format('YYYY')
const formatDifference = (startDate: string, endDate: string) => {
  if (endDate) {
    return moment.duration(moment(endDate).diff(startDate)).humanize()
  } else {
    return moment.duration(moment().diff(startDate)).humanize()
  }
}
const formatDays = (days: number) => {
  return moment.duration(days, 'days').humanize()
}
const formatDateFrom = (days: number, nextMonth: boolean) => {
  const date = moment().add(days, 'days')
  if (nextMonth) {
    return date.add(1, 'months').startOf('month').format('LL')
  } else {
    return date.format('LL')
  }
}
const formatPercents = (percent: number) => numeral(percent).format('0 %')

Vue.filter('formatUpdateDate', formatUpdateDate)
Vue.filter('formatExperienceDate', formatExperienceDate)
Vue.filter('formatTrainingDate', formatTrainingDate)
Vue.filter('formatDifference', formatDifference)
Vue.filter('formatDays', formatDays)
Vue.filter('formatDateFrom', formatDateFrom)
Vue.filter('formatPercents', formatPercents)

export default i18n

export {
  formatUpdateDate,
  formatExperienceDate,
  formatTrainingDate,
  formatDifference,
  formatDays,
  formatDateFrom,
  formatPercents,
}
