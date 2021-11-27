<template>
  <v-card
    id="projects"
    elevation="1"
    class="mb-2">
    <v-card-title class="p-avoid-break-inside">
      <v-icon left>mdi-projector</v-icon>
      {{ $t('resume.projects.title') }}
    </v-card-title>
    <v-card-text>
      <list-items :list="projects" :expanded="expanded"/>
      <div
        v-if="expanded && projects.tags"
        class="mt-3 p-avoid-break-inside">
        <v-chip
          v-for="(tag, i) in projects.tags"
          :key="i"
          outlined
          small
          class="mr-1 mb-1 v-chip--tile">
          {{ tag.label }}
        </v-chip>
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { IList } from '@/models/definitions'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Projects extends Vue {
  @Prop({ type: Object, required: true }) public projects!: IList;

  @Prop({ type: Boolean, required: true }) public expanded!: boolean;
}
</script>
