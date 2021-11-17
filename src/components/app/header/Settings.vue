<template>
  <v-menu
    :close-on-content-click="false"
    bottom
    offset-y
    left
    attach>
    <template #activator="menu">
      <v-tooltip
        bottom>
        <template #activator="tooltip">
          <v-btn
            v-on="{ ...menu.on, ...tooltip.on }"
            :aria-label="$t('app.header.settings.title')"
            icon>
            <v-icon>mdi-cog</v-icon>
          </v-btn>
        </template>
        <span>{{ $t('app.header.settings.title') }}</span>
      </v-tooltip>
    </template>
    <v-card class="pb-1">
      <list-items
        :list="languages"
        dense
        @to="setLanguage"/>
      <v-divider/>
      <v-list
        class="py-0"
        dense>
        <v-subheader class="grey--text">
          {{ $t('app.header.settings.display.title') }}
        </v-subheader>
        <v-list-item>
          <v-list-item-action>
            <v-switch :input-value="darkTheme" @change="setTheme($event)"/>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ $t('app.header.settings.display.darkMode') }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapActions, mapGetters } from 'vuex'
import languages from '../../../data/layout/toolbar/languages.json'
import { IList } from '../../../models/definitions'

@Component({
  computed: {
    ...mapGetters('theme', ['darkTheme']),
  },
  methods: {
    ...mapActions('theme', ['changeTheme']),
  },
})
export default class Settings extends Vue {
  public languages: IList = languages;

  public darkTheme!: boolean;

  public changeTheme!: (darkTheme: boolean) => Promise<void>;

  public setTheme (theme: boolean) {
    this.$vuetify.theme.dark = theme
    this.changeTheme(theme)
  }

  public setLanguage (lang: string) {
    this.$router.replace({ params: { lang } })
  }
}
</script>
