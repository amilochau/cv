<template>
  <v-card
    elevation="1"
    class="mb-2">
    <v-card-title>
      <v-icon left>mdi-projector</v-icon>
      {{ $t('resume.projects.title') }}
    </v-card-title>
    <v-card-text>
      <list-items :list="projects"/>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { IList } from '@/models/definitions'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Projects extends Vue {
  @Prop({ type: Object, required: true }) public projects!: IList;
}
</script>
