<template>
  <v-card
    id="keywords"
    elevation="1"
    class="d-print-none mb-2 p-avoid-break-inside">
    <v-card-title>
      <v-icon left>mdi-filter</v-icon>
      {{ $t('resume.keyWords.title') }}
    </v-card-title>
    <v-card-subtitle class="text--disabled font-italic">
      {{ $t('resume.keyWords.select') }}
    </v-card-subtitle>
    <v-card-text class="text-center">
      <v-chip-group
        @change="$emit('change', $event)"
        column
        active-class="primary--text">
        <v-chip
          v-for="(topic, i) in topics"
          :key="i"
          :value="topic.key"
          outlined
          small
          class="mr-2 mb-1 v-chip--tile">
          {{ topic.title }}
        </v-chip>
      </v-chip-group>
    </v-card-text>
    <v-card-actions v-if="!expanded">
      <v-btn
        text
        @click="$emit('expand')">
        <v-icon left>mdi-unfold-more-horizontal</v-icon>
        {{ $t('resume.keyWords.expand') }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class KeyWords extends Vue {
  @Prop({ type: Array, required: true }) public topics!: [];

  @Prop({ type: Boolean, required: true }) public expanded!: boolean;
}
</script>
