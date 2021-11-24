<template>
  <v-banner
    single-line
    class="d-print-none">
    <v-icon
      slot="icon"
      :color="call.color">
      {{ call.icon }}
    </v-icon>
    <p class="text-h6 mb-0">{{ call.message }}</p>
    <p
      v-if="call.lastUpdate"
      class="text-body-2 text--secondary font-weight-light mb-0">
      {{ $t('resume.call.lastUpdate', { lastUpdate }) }}
    </p>
  </v-banner>
</template>

<script lang="ts">
import { formatUpdateDate } from '@/plugins/i18n'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class KeyWords extends Vue {
  @Prop({ type: Object, required: true }) public call!: any;

  get lastUpdate () {
    return formatUpdateDate(this.call.lastUpdate)
  }
}
</script>
