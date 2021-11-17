<template>
  <v-card
    class="mt-2">
    <v-card-title>
      <v-icon left>mdi-link</v-icon>
      {{ $t('resume.links.title') }}
    </v-card-title>
    <v-card-text>
      <list-items :list="links"/>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { IList } from '@/models/definitions'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Links extends Vue {
  @Prop({ type: Object, required: true }) public links!: IList;
}
</script>
