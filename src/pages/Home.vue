<template>
  <div>
    <v-row class="d-print-none">
      <v-col>
        <resume-section-call
          :call="currentResume.call"
          :expanded="expanded"
          @expand="expand"
          @reduce="reduce"/>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4" class="p-col-4">
        <resume-section-persona
          :persona="currentResume.persona"/>
        <resume-section-key-words
          :topics="currentResume.topics"
          :expanded="expanded"
          @change="$event ? selectedTopic = $event : selectedTopic = ''"
          @expand="expand"/>
        <resume-section-training
          :trainings="currentResume.trainings"/>
        <resume-section-metrics
          :metrics="currentResume.metrics"/>
        <resume-section-projects
          :projects="currentResume.projects"
          :expanded="expanded"/>
      </v-col>
      <v-col cols="12" md="8" class="p-col-8">
        <resume-section-experiences
          :experiences="currentResume.experiences"
          :change="currentResume.change"
          :expanded="expanded"
          :selected-topic="selectedTopic"/>
      </v-col>
    </v-row>
  </div>
</template>

<script lang='ts'>
import resume from '@/data/resume'
import { CultureType } from '@/models/business/application'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class HomePage extends Vue {
  public resume = resume;

  public expanded = !this.$vuetify.breakpoint.mobile

  public selectedTopic = ''

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

  public expand () {
    this.expanded = true
  }

  public reduce () {
    this.expanded = false
  }
}
</script>
