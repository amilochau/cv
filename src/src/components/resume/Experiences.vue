<template>
  <v-sheet>
    
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Experiences extends Vue {
  @Prop({ type: Array, required: true }) public experiences!: [];
}
</script>
