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
      <v-col class="d-flex shrink align-end flex-column">
        <v-spacer/>
        <v-btn
          v-if="expanded"
          :icon="$vuetify.breakpoint.smAndDown"
          text
          @click="$emit('reduce')">
          <v-icon :left="!$vuetify.breakpoint.smAndDown">
            mdi-unfold-less-horizontal
          </v-icon>
          <span v-if="!$vuetify.breakpoint.smAndDown">
            {{ $t('resume.call.reduce') }}
          </span>
        </v-btn>
        <v-btn
          v-else
          :icon="$vuetify.breakpoint.smAndDown"
          text
          @click="$emit('expand')">
          <v-icon :left="!$vuetify.breakpoint.smAndDown">
            mdi-unfold-more-horizontal
          </v-icon>
          <span v-if="!$vuetify.breakpoint.smAndDown">
            {{ $t('resume.call.expand') }}
          </span>
        </v-btn>
        <v-btn
          :icon="$vuetify.breakpoint.smAndDown"
          text
          @click="print">
          <v-icon :left="!$vuetify.breakpoint.smAndDown">
            mdi-printer
          </v-icon>
          <span v-if="!$vuetify.breakpoint.smAndDown">
            {{ $t('resume.call.print') }}
          </span>
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
