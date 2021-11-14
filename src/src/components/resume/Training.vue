<template>
  <v-sheet>
    
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Training extends Vue {
  @Prop({ type: Array, required: true }) public trainings!: [];
}
</script>
