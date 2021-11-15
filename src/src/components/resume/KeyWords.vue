<template>
  <v-card
    class="mt-2">
    <v-card-title>
      <v-icon left>mdi-filter</v-icon>
      {{ $t('resume.keyWords.title') }}
    </v-card-title>
    <v-card-text>
      <v-chip-group
        column
        multiple
        active-class="primary--text">
        <v-chip
          v-for="(topic, i) in topics"
          :key="i">
          {{ topic.title }}
        </v-chip>
      </v-chip-group>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class KeyWords extends Vue {
  @Prop({ type: Array, required: true }) public topics!: [];
}
</script>
