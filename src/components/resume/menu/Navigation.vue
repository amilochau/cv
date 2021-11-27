<template>
  <v-speed-dial
    v-model="fab"
    direction="bottom"
    top
    right
    transition="slide-y-transition"
    fixed>
    <template v-slot:activator>
      <v-btn
        :aria-label="$t('resume.call.navigation')"
        color="info"
        fab
        small>
        <v-icon>{{ fab ? 'mdi-close' : 'mdi-dots-vertical' }}</v-icon>
      </v-btn>
    </template>
    <v-btn
      v-if="expanded"
      :aria-label="$t('resume.call.reduce')"
      color="primary"
      fab
      small
      @click="$emit('reduce')">
      <v-icon>mdi-unfold-less-horizontal</v-icon>
    </v-btn>
    <v-btn
      v-else
      :aria-label="$t('resume.call.expand')"
      color="primary"
      fab
      small
      @click="$emit('expand')">
      <v-icon>mdi-unfold-more-horizontal</v-icon>
    </v-btn>
    <v-btn
      :aria-label="$t('resume.call.print')"
      color="primary"
      fab
      small
      @click="print">
      <v-icon>mdi-printer</v-icon>
    </v-btn>
    <v-btn
      v-for="(page, i) in pages"
      :key="i"
      :aria-label="$t(page.title)"
      color="secondary"
      fab
      small
      @click="scroll(page.hash)">
      <v-icon>{{ page.icon }}</v-icon>
    </v-btn>
  </v-speed-dial>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class ResumeMenuNavigation extends Vue {
  @Prop({ type: Boolean, required: true }) public expanded!: boolean;

  public fab = false;

  public pages = [
    {
      title: 'resume.persona.title',
      icon: 'mdi-account-box-outline',
      hash: '#persona',
    },
    {
      title: 'resume.keyWords.title',
      icon: 'mdi-filter',
      hash: '#keywords',
    },
    {
      title: 'resume.training.title',
      icon: 'mdi-school',
      hash: '#training',
    },
    {
      title: 'resume.metrics.title',
      icon: 'mdi-ticket-confirmation',
      hash: '#metrics',
    },
    {
      title: 'resume.projects.title',
      icon: 'mdi-projector',
      hash: '#projects',
    },
    {
      title: 'resume.experiences.title',
      icon: 'mdi-briefcase',
      hash: '#experiences',
    },
  ]

  public print () {
    window.print()
  }

  public scroll (hash: string) {
    this.$router.push({ hash })
  }
}
</script>
