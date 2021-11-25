<template>
  <v-banner
    single-line
    class="d-print-none">
    <v-icon
      slot="icon"
      :color="call.color">
      {{ call.icon }}
    </v-icon>
    <p class="text-h6 mb-0">{{ call.message }}</p>
    <p
      v-if="call.lastUpdate"
      class="text-body-2 text--secondary font-weight-light mb-0">
      {{ call.lastUpdate | formatUpdateDate | formatText('resume.call.lastUpdate') }}
    </p>
    <template v-slot:actions>
      <v-btn
        v-if="expanded"
        text
        color="deep-purple accent-4"
        @click="$emit('reduce')">
        <v-icon left>mdi-unfold-less-horizontal</v-icon>
        {{ $t('resume.call.reduce') }}
      </v-btn>
      <v-btn
        v-else
        text
        color="deep-purple accent-4"
        @click="$emit('expand')">
        <v-icon left>mdi-unfold-more-horizontal</v-icon>
        {{ $t('resume.call.expand') }}
      </v-btn>
      <v-btn
        text
        color="deep-purple accent-4"
        @click="print">
        <v-icon left>mdi-printer</v-icon>
        {{ $t('resume.call.print') }}
      </v-btn>
    </template>
  </v-banner>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class KeyWords extends Vue {
  @Prop({ type: Object, required: true }) public call!: any;

  @Prop({ type: Boolean, required: true }) public expanded!: boolean;

  public print () {
    window.print()
  }
}
</script>
