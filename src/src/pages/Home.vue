<template>
  <v-container>
    <v-row>
      <v-col cols='12' md='4'>
        <resume-persona
          :image='currentResume.image'
          :name='currentResume.name'
          :job='currentResume.job'
          :description='currentResume.description'
          :actions='currentResume.actions'/>
        <resume-key-words
          :topics='currentResume.topics'/>
        <resume-links
          :links='currentResume.links'/>
      </v-col>
      <v-col cols='12' md='8'>
        <resume-experiences
          :experiences='currentResume.experiences'/>
        <resume-training
          :trainings='currentResume.trainings'/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang='ts'>
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
        {
          company: 'SPVIE Technology',
          jobs: [
            {
              title: 'Software Architect',
              place: 'Suresnes, France',
              startDate: '2020-05-04',
            },
          ],
        },
        {
          company: 'MONOPRIX ONLINE',
          jobs: [
            {
              title: 'Lead Developer',
              place: 'Clichy, France',
              startDate: '2019-07-01',
              endDate: '2020-04-30',
            },
          ],
        },
        {
          company: 'TOTAL Refining & Chemicals',
          jobs: [
            {
              title: 'Advanced Process Control Engineer',
              place: 'Courbevoie, France',
              startDate: '2018-04-01',
              endDate: '2019-06-20',
            },
          ],
        },
        {
          company: 'Infeeny',
          client: 'SeLoger',
          jobs: [
            {
              title: '.NET Engineer',
              place: 'Paris, France',
              startDate: '2017-11-06',
              endDate: '2018-03-23',
            },
          ],
        },
        {
          company: 'TOTAL Refining & Chemicals',
          jobs: [
            {
              title: 'Advanced Process Control Engineer',
              place: 'Feyzin, France',
              startDate: '2011-12-05',
              endDate: '2017-11-03',
            },
          ],
        },
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
        {
          company: 'SPVIE Technology',
          jobs: [
            {
              title: 'Architecte applicatif',
              place: 'Suresnes, France',
              startDate: '2020-05-04',
            },
          ],
        },
        {
          company: 'MONOPRIX ONLINE',
          jobs: [
            {
              title: 'Lead Developer',
              place: 'Clichy, France',
              startDate: '2019-07-01',
              endDate: '2020-04-30',
            },
          ],
        },
        {
          company: 'TOTAL Raffinage Chimie',
          jobs: [
            {
              title: 'Ingénieur Contrôle Avancé',
              place: 'Courbevoie, France',
              startDate: '2018-04-01',
              endDate: '2019-06-20',
              context: 'Division \'Supply, Sales & Optimization\', spécialisé dans l\'optimisation des mélanges de carburant',
              description: 'Des outils (notamment des applications) et des méthodes (notamment des guides et formations aux techniciens) permettent aux raffineries d\'optimiser leur production.',
              missions: [
                {
                  title: 'Management de projets',
                  description: 'Gestion des projets d\'applications (existantes et futures) : priorisation des besoins, coordination des travaux, architecture IT, reporting.'
                },
                {
                  title: 'Lead technique',
                  desccription: 'Définition des architectures et technologies cibles, lien avec les développeurs (internes et externes, prestations au forfait et en régie). Participation au développement d\'applications Web et Desktop. Technlologies utilisées en développement : ASP.NET Core, vue.js. Environ 20 projets, 35 applications suivis (dont 10 applications en tant que propriétaire).',
                },
                {
                  title: 'Scrum Master',
                  description: 'Mise en place d\'une organisation agile (Scrum): sprints, rituels, dashboards, conduite du changement.'
                },
                {
                  title: 'DevOps',
                  description: 'Mise en place d\'Azure DevOps, depuis le ticketing au déploiement continu. Configuration des agents privés, introduction de code review, déploiement on premise et dans Azure. Gestion de la transformation des process et accompagnement des utilisateurs.'
                },
              ],
              results: [
                {
                  title: 'Applications du département migrées dans Azure DevOps (environ 20 projects)',
                },
                {
                  title: 'Application business réécrite from scratch (rôle de PO & Architecte) dans les temps'
                },
                {
                  title: 'Mise en place progressive d\'une architecture en microservices'
                },
              ],
            },
          ],
        },
        {
          company: 'Infeeny',
          client: 'SeLoger',
          jobs: [
            {
              title: 'Ingénieur d\'études .NET',
              place: 'Paris, France',
              startDate: '2017-11-06',
              endDate: '2018-03-23',
            },
          ],
        },
        {
          company: 'TOTAL Raffinage Chimie',
          jobs: [
            {
              title: 'Ingénieur Contrôle Avancé',
              place: 'Feyzin, France',
              startDate: '2014-09-12',
              endDate: '2017-11-03',
            },
            {
              title: 'Apprenti Ingénieur',
              place: 'Feyzin, France',
              startDate: '2011-12-05',
              endDate: '2014-09-11',
            },
            {
              title: 'Apprenti Ingénieur',
              place: 'Leuna, Allemagne',
              startDate: '2013-05-06',
              endDate: '2013-08-30',
            },
          ],
        },
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
