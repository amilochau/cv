<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="4">
        <resume-persona
          :image="currentResume.image"
          :name="currentResume.name"
          :job="currentResume.job"
          :description="currentResume.description"
          :actions="currentResume.actions"/>
        <resume-key-words
          :topics="currentResume.topics"/>
        <resume-links
          :links="currentResume.links"/>
      </v-col>
      <v-col cols="12" sm="8">
        <resume-experiences/>
        <resume-training/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { CultureType } from '@/models/business/application';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class HomePage extends Vue {
  public resume = {
    [CultureType.English]: {
      image: 'https://tbivision.com/files/2020/10/Bill-Gates-headshot-1024x732.jpg',
      name: 'Antoine MILOCHAU',
      job: 'Software Architect',
      description: 'I\'m a Software Architect, exploring and implementation many of Microsoft technologies at SPVIE Assurances. Contact me to learn more on my projects.',
      actions: [
        {
          icon: 'mdi-linkedin',
        },
        {
          icon: 'mdi-github',
        },
        {
          icon: 'mdi-twitter',
        },
        {
          icon: 'mdi-email',
        },
      ],
      topics: [
        {
          icon: 'mdi-linkedin',
        },
        {
          icon: 'mdi-github',
        },
        {
          icon: 'mdi-twitter',
        },
        {
          icon: 'mdi-email',
        },
      ],
      links: [
        {
          title: 'Personal projects',
          icon: 'mdi-home-city',
          disableTranslation: true,
          items: [
            {
              title: 'Vision',
              icon: 'mdi-television-ambient-light',
              disableTranslation: true,
              badge: 'badges.wip',
            },
            {
              title: 'Roadmap',
              icon: 'mdi-chart-gantt',
              disableTranslation: true,
            },
            {
              title: 'Architecture',
              icon: 'mdi-sitemap',
              disableTranslation: true,
            },
          ],
        },
      ],
    },
    [CultureType.French]: {
      image: 'https://tbivision.com/files/2020/10/Bill-Gates-headshot-1024x732.jpg',
      name: 'Antoine MILOCHAU',
      job: 'Architecte applicatif',
      description: 'Architecte applicatif, j\'explore et j\'implémente de nombreuses technologies Microsoft chez SPVIE Assurances. Contactez-moi pour en apprendre plus sur mes projets.',
      actions: [
        {
          icon: 'mdi-linkedin',
        },
        {
          icon: 'mdi-github',
        },
        {
          icon: 'mdi-twitter',
        },
        {
          icon: 'mdi-email',
        },
      ],
      topics: [
        {
          icon: 'mdi-linkedin',
        },
        {
          icon: 'mdi-github',
        },
        {
          icon: 'mdi-twitter',
        },
        {
          icon: 'mdi-email',
        },
      ],
      links: [
        {
          title: 'Projects personnels',
          icon: 'mdi-home-city',
          disableTranslation: true,
          items: [
            {
              title: 'Vision',
              icon: 'mdi-television-ambient-light',
              disableTranslation: true,
              badge: 'badges.wip',
            },
            {
              title: 'Roadmap',
              icon: 'mdi-chart-gantt',
              disableTranslation: true,
            },
            {
              title: 'Architecture',
              icon: 'mdi-sitemap',
              disableTranslation: true,
            },
          ],
        },
      ],
    },
  }

  get currentCulture() {
    if (!this.$route.params.lang.localeCompare('fr', undefined, { sensitivity: 'base' })) {
      return CultureType.French;
    } else {
      return CultureType.English;
    }
  }

  get currentResume() {
    return this.resume[this.currentCulture];
  }
}
</script>
