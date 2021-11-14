<template>
  <v-card
    class="mt-2">
    <v-card-title>
      {{ $t('resume.links.title') }}
    </v-card-title>
    <v-card-text>
      <list-items :items="links"/>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { IListItem } from '@/models/definitions';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Links extends Vue {
  @Prop({ type: Array, required: true }) public links!: IListItem[]
}
</script>
