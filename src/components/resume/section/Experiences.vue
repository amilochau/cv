<template>
  <div>
    <v-card-title>
      <v-icon left>mdi-briefcase</v-icon>
      {{ $t('resume.experiences.title') }}
    </v-card-title>
    <v-card
      v-for="(experience, i) in experiences"
      :key="i"
      elevation="0"
      class="mb-2">
      <v-card-subtitle>
        {{ experience.company }}
        <span v-if="experience.client"> / {{ experience.client }}</span>
      </v-card-subtitle>
      <v-card-text
        v-for="(job, j) in experience.jobs"
        :key="j"
        class="text--primary">
        <p class="text-h5 font-weight-medium">{{ job.title }}</p>
        <p>
          <v-chip
            label
            outlined
            class="mb-1 mr-2 experience-date"
            @click="toggleDatesDisplay">
            <v-icon left>mdi-calendar-range-outline</v-icon>
            <span v-if="displayDurations">
              {{ job.startDate | formatDifference(job.endDate) }}
            </span>
            <span v-else>
              {{ job.startDate | formatExperienceDate }}
              <span v-if="job.endDate"> — {{ job.endDate | formatExperienceDate }}</span>
            </span>
          </v-chip>
          <v-chip
            label
            outlined
            class="mb-1 mr-2"
            color="error"
            v-if="job.isCurrent"
            @click="changeDialog = true">
            <v-icon left>mdi-fire</v-icon>
            {{ $t('resume.experiences.current') }}
          </v-chip>
          <v-chip
            label
            outlined
            class="mb-1"
            :href="job.placeUri"
            target="_blank"
            rel="noopener">
            <v-icon left>mdi-map-marker-outline</v-icon>
            {{ job.place }}
          </v-chip>
        </p>
        <p class="text--secondary font-italic">{{ job.description }}</p>
        <div v-if="job.missions">
          <p>{{ $t('resume.experiences.missions') }}</p>
          <ul>
            <li
              v-for="(mission, k) in job.missions"
              :key="k">
              {{ mission.title }}
            </li>
          </ul>
        </div>
      </v-card-text>
    </v-card>
    <v-dialog v-model="changeDialog" width="400px">
      <resume-dialog-change
        :change="change"
        @close="changeDialog = false"/>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Experiences extends Vue {
  @Prop({ type: Array, required: true }) public experiences!: [];

  @Prop({ type: Object, required: true }) public change!: any;

  public displayDurations = this.$vuetify.breakpoint.mobile;

  public changeDialog = false

  toggleDatesDisplay () {
    this.displayDurations = !this.displayDurations
  }
}
</script>

<style lang="sass">
.experience-date
  text-transform: capitalize
</style>
