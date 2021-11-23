<template>
  <v-tooltip bottom>
    <template #activator="tooltip">
      <v-btn
        v-on="tooltip.on"
        icon
        class="btn-print d-print-none"
        @click="print">
        <v-icon>mdi-printer</v-icon>
      </v-btn>
    </template>
    <span class="d-print-none">{{ $t('resume.print') }}</span>
  </v-tooltip>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Print extends Vue {
  print () {
    window.print()
  }
}
</script>

<style lang="sass" scoped>
.btn-print
  position: absolute
  top: 12px
  right: 48px
  z-index: 2
</style>
