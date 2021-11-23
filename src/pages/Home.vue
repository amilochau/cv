<template>
  <v-row>
    <resume-button-print/>
    <v-col cols="12" md="4" class="p-col-4">
      <resume-section-persona
        :persona="currentResume.persona"/>
      <resume-section-key-words
        :topics="currentResume.topics"/>
      <resume-section-training
        :trainings="currentResume.trainings"/>
      <resume-section-metrics
        :metrics="currentResume.metrics"/>
      <resume-section-projects
        :projects="currentResume.projects"/>
    </v-col>
    <v-col cols="12" md="8" class="p-col-8">
      <resume-section-experiences
        :experiences="currentResume.experiences"
        :change="currentResume.change"/>
    </v-col>
  </v-row>
</template>

<script lang='ts'>
import resume from '@/data/resume'
import { CultureType } from '@/models/business/application'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class HomePage extends Vue {
  public resume = resume;

  get currentCulture () {
    if (!this.$route.params.lang.localeCompare('fr', undefined, { sensitivity: 'base' })) {
      return CultureType.French
    } else {
      return CultureType.English
    }
  }

  get currentResume () {
    return this.resume[this.currentCulture]
  }
}
</script>
