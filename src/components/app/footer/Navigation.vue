<template>
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
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class FooterNavigation extends Vue {
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
