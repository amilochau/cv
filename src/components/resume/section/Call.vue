<template>
  <v-alert
    :color="call.color"
    :icon="call.icon"
    colored-border
    border="bottom"
    class="d-print-none mb-0 pr-16">
    <h3 class="text-h6">
      {{ call.message }}
    </h3>
    <div class="text-body text--secondary font-weight-light">
      {{ call.lastUpdate | formatUpdateDate | formatText('resume.call.lastUpdate') }}
    </div>
    <resume-menu-navigation
      :expanded="expanded"
      @reduce="$emit('reduce')"
      @expand="$emit('expand')"/>
  </v-alert>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class KeyWords extends Vue {
  @Prop({ type: Object, required: true }) public call!: any;

  @Prop({ type: Boolean, required: true }) public expanded!: boolean;
}
</script>
