<template>
  <v-card
    class="mt-2">
    <v-card-title>
      <v-icon left>mdi-ticket-confirmation</v-icon>
      {{ $t('resume.metrics.title') }}
    </v-card-title>
    <v-card-text>
      <list-items :list="metrics"/>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { IList } from '@/models/definitions'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Metrics extends Vue {
  @Prop({ type: Object, required: true }) public metrics!: IList;
}
</script>
