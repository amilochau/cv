<template>
  <v-container>
    <v-row>
      <v-col cols='12' md='4'>
        <resume-persona
          :image='currentResume.image'
          :name='currentResume.name'
          :job='currentResume.job'
          :description='currentResume.description'
          :actions='currentResume.actions'/>
        <resume-key-words
          :topics='currentResume.topics'/>
        <resume-training
          :trainings='currentResume.trainings'/>
        <resume-metrics
          :metrics='currentResume.metrics'/>
        <resume-links
          :links='currentResume.links'/>
      </v-col>
      <v-col cols='12' md='8'>
        <resume-experiences
          :experiences='currentResume.experiences'/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang='ts'>
import resume from '@/data/resume';
import { CultureType } from '@/models/business/application';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class HomePage extends Vue {
  public resume = resume;

  get currentCulture() {
    if (!this.$route.params.lang.localeCompare('fr', undefined, { sensitivity: 'base' })) {
      return CultureType.French;
    } else {
      return CultureType.English;
    }
  }

  get currentResume() {
    return this.resume[this.currentCulture];
  }
}
</script>
