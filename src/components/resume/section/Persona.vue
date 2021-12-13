<template>
  <v-card
    id="persona"
    elevation="1"
    class="mb-2 p-avoid-break-inside">
    <v-card-title class="d-print-none">
      <v-list-item>
        <v-list-item-avatar v-if="persona.thumbnail">
          <v-img
            :alt="$t('resume.persona.image')"
            :src="!persona.thumbnail ? persona.image : persona.thumbnail"
            class="cursor-pointer"
            @click="pictureDialog = true"/>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>
            {{ persona.name }}
          </v-list-item-title>
          <v-list-item-subtitle v-if="persona.job">
            {{ persona.job }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card-title>
    <v-card-title class="d-none d-print-block text-center">
      <h1 class="text-h6">{{ persona.name }}</h1>
      <h2 v-if="persona.job" class="text-subtitle-1">{{ persona.job }}</h2>
    </v-card-title>
    <v-card-text
      v-if="persona.description"
      class="text-center">
      {{ persona.description }}
    </v-card-text>
    <v-card-text class="d-print-none pt-0">
      <list-items :list="persona.actions"/>
    </v-card-text>
    <v-card-text
      v-if="persona.actions"
      class="d-none d-print-block text-center pt-0">
      <v-chip
        v-for="(item, i) in persona.actions.items"
        :key="i"
        label
        outlined
        small
        class="mr-2 mb-1">
        <v-icon left small>
          {{ item.icon.mdi }}
        </v-icon>
        {{ item.title.replacement ? item.title.replacement : item.title.text }}
      </v-chip>
    </v-card-text>
    <v-dialog v-model="pictureDialog" width="600px">
      <resume-dialog-picture
        :persona="persona"
        @close="pictureDialog = false"/>
    </v-dialog>
  </v-card>
</template>

<script lang="ts">
import { IResumePersona } from '@/models/business/Resume'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Persona extends Vue {
  @Prop({ type: Object, required: true }) public persona!: IResumePersona;

  public pictureDialog = false
}
</script>
