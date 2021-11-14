<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
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
      <v-col cols="12" md="8">
        <resume-experiences
          :experiences="currentResume.experiences"/>
        <resume-training
          :trainings="currentResume.trainings"/>
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
          href: 'https://www.linkedin.com/in/antoine-milochau/?locale=en_US',
        },
        {
          icon: 'mdi-github',
          href: 'https://github.com/amilochau',
        },
      ],
      topics: [
        {
          title: 'Develoment',
        },
        {
          title: 'DevOps',
        },
        {
          title: 'Architecture',
        },
        {
          title: 'Management',
        },
      ],
      links: [
        {
          title: 'Personal',
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
              href: 'https://github.com/amilochau/.github/blob/main/docs/roadmap.md',
            },
            {
              title: 'Architecture',
              icon: 'mdi-sitemap',
              disableTranslation: true,
              badge: 'badges.wip',
            },
          ],
        },
      ],
      experiences: [

      ],
      trainings: [

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
          href: 'https://www.linkedin.com/in/antoine-milochau/',
        },
        {
          icon: 'mdi-github',
          href: 'https://github.com/amilochau',
        },
      ],
      topics: [
        {
          title: 'Développement',
        },
        {
          title: 'DevOps',
        },
        {
          title: 'Architecture',
        },
        {
          title: 'Management',
        },
      ],
      links: [
        {
          title: 'Personnel',
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
              href: 'https://github.com/amilochau/.github/blob/main/docs/roadmap.md',
            },
            {
              title: 'Architecture',
              icon: 'mdi-sitemap',
              disableTranslation: true,
              badge: 'badges.wip',
            },
          ],
        },
      ],
      experiences: [

      ],
      trainings: [

      ],
    },
  };

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
