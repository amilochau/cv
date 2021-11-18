<template>
  <v-footer
    app
    absolute
    padless
    class="text--secondary">
    <v-container>
      <v-divider/>
      <v-row
        justify="center"
        class="mt-2"
        no-gutters>
        <v-btn
          v-for="(page, i) in pages"
          :key="i"
          :to="page.name ? { name: page.name } : undefined"
          :href="page.href"
          :target="page.href ? '_blank' : undefined"
          rel="noopener"
          exact
          small
          text
          rounded
          class="text--secondary">
          {{ $t(page.title) }}
        </v-btn>
      </v-row>
      <v-row
        justify="center"
        no-gutters>
        <p class="overline my-0">{{ new Date().getFullYear() }} — <strong>Antoine Milochau</strong></p>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Footer extends Vue {
  public pages = [
    {
      title: 'app.footer.home',
      name: 'Home',
    },
    {
      title: 'app.footer.privacy',
      name: 'Privacy',
    },
    {
      title: 'app.footer.sourceCode',
      href: 'https://github.com/amilochau/cv',
    },
  ]
}
</script>
