<template>
  <v-card
    id="training"
    elevation="1"
    class="mb-2 p-avoid-break-inside">
    <v-card-title>
      <v-icon left>
        mdi-school
      </v-icon>
      {{ $t('resume.training.title') }}
    </v-card-title>
    <v-card-text>
      <list-items :list="trainings" />
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { IResumeTraining } from '@/models/business/Resume'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Training extends Vue {
  @Prop({ type: Object, required: true }) public trainings!: IResumeTraining;
}
</script>
