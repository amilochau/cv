<template>
  <v-alert
    :color="call.color"
    :icon="call.icon"
    colored-border
    border="bottom"
    class="d-print-none mb-0">
    <v-row class="no-gutters">
      <v-col>
        <h3 class="text-h6">
          {{ call.message }}
        </h3>
        <div class="text-body text--secondary font-weight-light">
          {{ call.lastUpdate | formatUpdateDate | formatText('resume.call.lastUpdate') }}
        </div>
      </v-col>
      <v-col class="d-flex align-end pt-2">
        <v-spacer/>
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
      </v-col>
    </v-row>
  </v-alert>
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
