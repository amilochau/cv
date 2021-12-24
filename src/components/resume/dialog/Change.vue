<template>
  <v-card>
    <v-app-bar
      flat
      dense>
      <v-icon left>
        mdi-run-fast
      </v-icon>
      <v-toolbar-title>
        {{ $t('resume.change.title') }}
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        icon
        @click="$emit('close')">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-app-bar>
    <v-card-text class="pt-5 text-center">
      <div>{{ $t('resume.change.status') }}</div>
      <p class="text-h4 text--primary">
        {{ change.busy ? $t('resume.change.busy') : $t('resume.change.free') }}
      </p>
      <div v-if="change.busy">
        <v-chip
          label
          outlined
          class="mb-1 mr-2"
          :color="change.isTrialPeriod ? 'info' : 'grey darken-1'">
          <v-icon left>
            {{ change.isTrialPeriod ? 'mdi-flask' : 'mdi-calendar-check' }}
          </v-icon>
          {{ change.isTrialPeriod ? $t('resume.change.ongoingTrial') : $t('resume.change.trialDone') }}
        </v-chip>
        <v-chip
          label
          outlined
          class="mb-1"
          :color="change.isDepartureNotice ? 'info' : 'grey darken-1'">
          <v-icon left>
            {{ change.isDepartureNotice ? 'mdi-lock-open' : 'mdi-lock' }}
          </v-icon>
          {{ change.isDepartureNotice ? $t('resume.change.departureNoticed') : $t('resume.change.noNotice') }}
        </v-chip>
        <section v-if="change.changeLikelihoodInPercent !== undefined">
          <v-divider class="my-4" />
          <div>{{ $t('resume.change.changeLikelihood') }}</div>
          <p class="text-h4 text--primary">
            {{ change.changeLikelihoodInPercent | formatPercents }}
          </p>
          <v-chip
            label
            outlined
            class="mb-1"
            :color="change.ongoingProcess ? 'info' : 'grey darken-1'">
            <v-icon left>
              {{ change.ongoingProcess ? 'mdi-briefcase-search' : 'mdi-progress-close' }}
            </v-icon>
            {{ change.ongoingProcess ? $t('resume.change.ongoingProcess') : $t('resume.change.noProcess') }}
          </v-chip>
        </section>
        <section v-if="change.noticePeriodInDays !== undefined">
          <v-divider class="my-4" />
          <div>{{ $t('resume.change.noticePeriod') }}</div>
          <p class="text-h4 text--primary">
            {{ change.noticePeriodInDays | formatDays }}
          </p>
          <div>{{ $t('resume.change.startFrom') }}</div>
          <p class="text-h4 text--primary">
            {{ change.noticePeriodBufferInDays ? change.noticePeriodInDays + change.noticePeriodBufferInDays : change.noticePeriodInDays | formatDateFrom(change.isDepartureEndOfMonth) }}
          </p>
        </section>
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Change extends Vue {
  @Prop({ type: Object, required: true }) public change!: any;
}
</script>
