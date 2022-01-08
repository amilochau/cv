<template>
  <div class="d-flex fill-height">
    <v-main>
      <app-progress-bar :lazy-delay="200" />
      <app-cookies />
      <v-fade-transition mode="out-in">
        <v-container class="fill-height py-0">
          <router-view />
        </v-container>
      </v-fade-transition>
    </v-main>
    <app-footer-bar />
    <app-snackbar />
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import moment from 'moment'
import numeral from 'numeral'
import { LocaleMessages } from 'vue-i18n'
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { mapActions } from 'vuex'
import EventBus from '../event-bus'

@Component({
  methods: {
    ...mapActions('app', ['changeTitle']),
  },
})
export default class RootPage extends Vue {
  @Prop({ type: String, default: 'en' }) public lang!: string;

  get title () {
    return this.meta.title
  }

  get description () {
    return this.meta.description
  }

  public meta: LocaleMessages | { title?: string, description?: string } = {
    title: undefined,
    description: undefined,
  };

  public changeTitle!: (title: string) => Promise<void>;

  @Watch('$route') public onRouteChanged () {
    this.setMeta()
  }

  @Watch('meta') public onMetaChanged () {
    if (this.title) {
      const title = this.title as string
      document.title = `${title} — CV`
      this.changeTitle(title)
    } else {
      document.title = 'CV'
      this.changeTitle('CV')
    }
  }

  public created () {
    this.setLanguage(this.lang)
    this.bootstrapMeta()
    this.bootstrapRedirections()
  }

  public beforeRouteUpdate (to: any, from: any, next: any) {
    this.setLanguage(to.params.lang)
    next()
  }

  public setLanguage (lang: string) {
    // eslint-disable-next-line no-unused-expressions
    document.querySelector('html')?.setAttribute('lang', lang)
    this.$i18n.locale = lang
    this.$vuetify.lang.current = lang
    axios.defaults.headers.common['Accept-Language'] = lang
    moment.locale(lang)
    numeral.locale(lang)
  }

  public bootstrapMeta () {
    if (typeof document === 'undefined') {
      return
    }
    this.setMeta()
  }

  public setMeta () {
    const key = `meta.${this.$route.name}`
    const meta = this.$t(key) as LocaleMessages
    this.meta = meta || this.getFallbackMeta()
  }

  public getFallbackMeta () {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`No meta defined for route ${this.$route.name}`)
    }
    return {}
  }

  public bootstrapRedirections () {
    EventBus.$on('goto-forbidden', () => {
      this.$router.push({ name: 'Forbidden' })
    })
    EventBus.$on('goto-notfound', () => {
      this.$router.push({ name: 'NotFound' })
    })
  }
}
</script>
