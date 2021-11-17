<template>
  <div>
    <v-card-title>
      <v-icon left>mdi-briefcase</v-icon>
      {{ $t('resume.experiences.title') }}
    </v-card-title>
    <v-timeline
      dense>
      <v-timeline-item
        v-for="(experience, i) in experiences"
        :key="i"
        small>
        <v-card>
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
                class="experience-date">
                <v-icon left>
                  mdi-calendar-range-outline
                </v-icon>
                {{ job.startDate | formatExperienceDate }}
                <span v-if="job.endDate">&nbsp;— {{ job.endDate | formatExperienceDate }}</span>
              </v-chip>
              <v-chip
                label
                outlined
                class="ml-2"
                v-if="job.isCurrent">
                <v-icon left>
                  mdi-fire
                </v-icon>
                {{ $t('resume.experiences.current') }}
                <span v-if="job.endDate">&nbsp;— {{ job.endDate | formatExperienceDate }}</span>
              </v-chip>
              <v-chip
                label
                outlined
                class="ml-2"
                :href="job.placeUri"
                target="_blank"
                rel="noopener">
                <v-icon left>
                  mdi-map-marker-outline
                </v-icon>
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
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Experiences extends Vue {
  @Prop({ type: Array, required: true }) public experiences!: [];
}
</script>

<style lang="sass">
  .experience-date
    text-transform: capitalize
</style>
