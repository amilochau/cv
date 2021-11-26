<template>
  <v-footer
    app
    absolute
    padless
    class="text--secondary d-print-none grey lighten-5">
    <v-container>
      <v-divider/>
      <app-footer-navigation/>
      <v-row
        justify="center"
        no-gutters>
        <app-footer-theme/>
        <app-footer-language/>
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
export default class FooterBar extends Vue {
}
</script>
