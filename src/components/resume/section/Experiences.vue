<template>
  <div id="experiences">
    <v-card-title>
      <v-icon left>mdi-briefcase</v-icon>
      {{ $t('resume.experiences.title') }}
    </v-card-title>
    <v-card
      v-for="(experience, i) in experiences"
      :key="i"
      elevation="0"
      class="mb-2">
      <v-card-title class="align-baseline p-avoid-break-inside">
        {{ experience.job }}
        <div v-if="experience.company" class="text-body-1 font-weight-light">
          <span class="px-2">{{ $t('resume.experiences.divider') }}</span>
          <span v-if="experience.client">{{ experience.client }} ({{ experience.company }})</span>
          <span v-else>{{ experience.company }}</span>
        </div>
      </v-card-title>
      <v-card-text class="text--primary">
        <p class="p-avoid-break-inside">
          <v-chip
            label
            outlined
            class="mb-1 mr-2 experience-date"
            @click="toggleDatesDisplay">
            <v-icon left>mdi-calendar-range-outline</v-icon>
            <span v-if="displayDurations">
              {{ experience.startDate | formatDifference(experience.endDate) }}
            </span>
            <span v-else-if="!experience.endDate">
              {{ experience.startDate | formatExperienceDate | formatText('resume.experiences.dateFrom') }}
            </span>
            <span v-else>
              {{ experience.startDate | formatExperienceDate }}
              <span> — {{ experience.endDate | formatExperienceDate }}</span>
            </span>
          </v-chip>
          <v-chip
            v-if="!experience.endDate"
            label
            outlined
            class="mb-1 mr-2"
            color="error"
            @click="changeDialog = true">
            <v-icon left>mdi-fire</v-icon>
            {{ $t('resume.experiences.current') }}
          </v-chip>
          <v-chip
            v-if="experience.place"
            label
            outlined
            class="mb-1"
            :href="experience.placeUri"
            target="_blank"
            rel="noopener">
            <v-icon left>mdi-map-marker-outline</v-icon>
            {{ experience.place }}
          </v-chip>
        </p>
        <p
          v-if="expanded"
          class="text--secondary font-italic p-avoid-break-inside">
          {{ experience.description }}
        </p>
        <list-items
          v-if="experience.missions"
          :list="experience.missions"
          :expanded="expanded">
        </list-items>
        <div
          v-if="expanded && experience.tags"
          class="mt-3 p-avoid-break-inside">
          <v-chip
            v-for="(tag, i) in experience.tags"
            :key="i"
            :color="selectedTopic === tag.key ? 'primary' : undefined"
             outlined
            small
            class="mr-1 mb-1 v-chip--tile">
            {{ tag.label }}
          </v-chip>
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

  @Prop({ type: Boolean, required: true }) public expanded!: boolean;

  @Prop({ type: String, required: true }) public selectedTopic!: string;

  public displayDurations = this.$vuetify.breakpoint.mobile;

  public changeDialog = false

  toggleDatesDisplay () {
    this.displayDurations = !this.displayDurations
  }
}
</script>

<style lang="scss">
.experience-date {
  text-transform: capitalize;
}
</style>
