<template>
  <v-menu
    :close-on-content-click="false"
    top
    offset-y
    attach>
    <template #activator="menu">
      <v-btn
        v-on="menu.on"
        :aria-label="$t('app.footer.languages.title')"
        class="ma-2"
        icon>
        <v-icon>mdi-earth</v-icon>
      </v-btn>
    </template>
    <v-card class="pb-1">
      <list-items
        :list="languages"
        dense
        @to="setLanguage"/>
    </v-card>
  </v-menu>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import languages from '../../../data/layout/languages.json'
import { IList } from '../../../models/definitions'

@Component
export default class Settings extends Vue {
  public languages: IList = languages;

  public setLanguage (lang: string) {
    this.$router.replace({ params: { lang } })
  }
}
</script>
