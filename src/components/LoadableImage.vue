<template>
  <v-img
    :src="src"
    aspect-ratio="1">
    <template #placeholder>
      <v-row
        class="fill-height ma-0"
        align="center"
        justify="center">
        <v-progress-circular
          indeterminate
          color="primary"/>
      </v-row>
    </template>
  </v-img>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class LoadableImage extends Vue {
  @Prop({ type: String, required: true }) public src!: string;
}
</script>
