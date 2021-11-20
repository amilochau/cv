<template>
  <v-card elevation="1" class="mb-2">
    <v-card-title>
      <v-icon left>mdi-school</v-icon>
      {{ $t('resume.training.title') }}
    </v-card-title>
    <v-card-text>
      <list-items :list="trainings"/>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { IList } from '@/models/definitions'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Training extends Vue {
  @Prop({ type: Object, required: true }) public trainings!: IList;
}
</script>
