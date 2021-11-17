<template>
  <v-toolbar
    v-if="showCookiesBar"
    dense
    class="cookies-menu primary white--text"
    height="72px">
    <v-icon color="white">mdi-cookie</v-icon>
    <span class="mx-4 nowrap cookies-title">{{ $t('app.cookies.title') }}</span>
    <template #extension>
      <v-spacer/>
      <v-btn
        class="info"
        text
        :to="{ name: 'Privacy' }">{{ $t('app.cookies.read') }}</v-btn>
      <v-btn
        class="success"
        text
        @click="acceptCookies">{{ $t('app.cookies.accept') }}</v-btn>
      <v-btn
        class="error"
        text
        @click="refuseCookies">{{ $t('app.cookies.refuse') }}</v-btn>
    </template>
  </v-toolbar>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Cookies extends Vue {
  @Prop({ type: String, default: '.AspNet.Consent' }) public cookieName!: string;

  public showCookiesBar = false;

  public created () {
    let cookieFound = false
    const name = `${this.cookieName}=`
    const decodedCookie = decodeURIComponent(document.cookie)
    const ca = decodedCookie.split(';')
    for (const value of ca) {
      let c = value
      while (c.charAt(0) === ' ') {
        c = c.substring(1)
      }
      if (c.indexOf(name) === 0) {
        cookieFound = true
      }
    }
    this.showCookiesBar = !cookieFound
  }

  public acceptCookies () {
    const d = new Date()
    d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000))
    document.cookie = `${this.cookieName}=yes; expires=${d.toUTCString()}; path=/; samesite=lax`
    this.showCookiesBar = false
  }

  public refuseCookies () {
    const d = new Date()
    d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000))
    document.cookie = `${this.cookieName}=no; expires=${d.toUTCString()}; path=/; samesite=lax`
    this.showCookiesBar = false
  }
}
</script>

<style lang="sass" scoped>
.cookies-title
  line-height: 1.2
</style>
