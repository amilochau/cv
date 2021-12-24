<template>
  <div>
    <v-row v-if="currentResume.call" class="d-print-none">
      <v-col>
        <resume-section-call
          :call="currentResume.call"
          :expanded="expanded"
          @expand="expanded = true"
          @reduce="expanded = false" />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        md="4"
        class="p-col-4">
        <resume-section-persona
          v-if="currentResume.persona"
          :persona="currentResume.persona" />
        <resume-section-key-words
          v-if="currentResume.topics"
          :topics="currentResume.topics"
          :expanded="expanded"
          @change="$event ? selectedTopic = $event : selectedTopic = ''"
          @expand="expanded = true" />
        <resume-section-training
          v-if="currentResume.trainings"
          :trainings="currentResume.trainings" />
        <resume-section-metrics
          v-if="currentResume.metrics"
          :metrics="currentResume.metrics" />
        <resume-section-projects
          v-if="currentResume.projects"
          :projects="currentResume.projects"
          :expanded="expanded" />
      </v-col>
      <v-col
        cols="12"
        md="8"
        class="p-col-8">
        <resume-section-experiences
          v-if="currentResume.experiences"
          :experiences="currentResume.experiences"
          :change="currentResume.change"
          :expanded="expanded"
          :selected-topic="selectedTopic" />
      </v-col>
    </v-row>
  </div>
</template>

<script lang='ts'>
import resume from '@/data/resume'
import { CultureType } from '@/models/business'
import { IResume } from '@/models/business/Resume'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class HomePage extends Vue {
  public resume = resume;

  public expanded = true

  public selectedTopic = ''

  public currentResume: IResume = {}

  public beforeRouteEnter (to: any, from: any, next: any) {
    next(async (vm: HomePage) => {
      await vm.refresh(to.params.lang)
    })
  }

  public async beforeRouteUpdate (to: any, from: any, next: any) {
    next()
    await this.refresh(to.params.lang)
  }

  public async refresh (lang: string) {
    let cultureType = CultureType.English
    if (!lang.localeCompare('fr', undefined, { sensitivity: 'base' })) {
      cultureType = CultureType.French
    }

    await new Promise(() => {
      this.currentResume = this.resume[cultureType]
      this.setStructuredData()
    })
  }

  public getStructuredData (): any {
    const structuredData: any = {
      '@context': 'https://schema.org/',
      '@type': 'Person',
    }

    // Persona
    if (this.currentResume.persona) {
      structuredData.name = this.currentResume.persona.name

      if (this.currentResume.persona.firstName) {
        structuredData.givenName = this.currentResume.persona.firstName
      }

      if (this.currentResume.persona.lastName) {
        structuredData.familyName = this.currentResume.persona.lastName
      }

      if (this.currentResume.persona.job) {
        structuredData.jobTitle = this.currentResume.persona.job
      }

      if (this.currentResume.persona.nationality) {
        structuredData.nationality = {
          '@type': 'Country',
          name: this.currentResume.persona.nationality,
        }
      }

      if (this.currentResume.persona.contact) {
        structuredData.contactPoint = {
          '@type': 'ContactPoint',
          name: this.currentResume.persona?.contact?.text,
          url: this.currentResume.persona?.contact?.url,
        }
      }

      if (this.currentResume.persona.location) {
        structuredData.homeLocation = {
          '@type': 'Place',
          name: this.currentResume.persona.location,
        }
      }
    }

    // Trainings
    if (this.currentResume.trainings) {
      if (this.currentResume.trainings.alumni) {
        structuredData.alumniOf = {
          '@type': 'EducationalOrganization',
          name: this.currentResume.trainings.alumni,
        }
      }

      if (this.currentResume.trainings.languages?.length) {
        structuredData.knowsLanguage = this.currentResume.trainings.languages
      }
    }

    // Experiences
    if (this.currentResume.experiences?.items?.length) {
      structuredData.worksFor = {
        '@type': 'Corporation',
        name: this.currentResume.experiences.items[0].company,
      }

      structuredData.hasOccupation = []
      this.currentResume.experiences.items.forEach(experience => {
        const occupation: any = {
          '@type': 'Role',
          roleName: experience.job,
          startDate: experience.startDate,
        }

        if (experience.endDate) {
          occupation.endDate = experience.endDate
        }

        structuredData.hasOccupation.push(occupation)
      })
    }

    return structuredData
  }

  public setStructuredData () {
    const structuredData = JSON.stringify(this.getStructuredData())
    const structureDataScripts = Array.prototype.slice.call(document.scripts).filter(x => x.type === 'application/ld+json')

    if (!structureDataScripts.length) {
      const script = document.createElement('script')
      script.setAttribute('type', 'application/ld+json')
      script.textContent = structuredData
      document.head.appendChild(script)
    } else {
      const script = structureDataScripts[0]
      script.textContent = structuredData
    }
  }
}
</script>
