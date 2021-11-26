<template>
  <v-card
    id="persona"
    elevation="1"
    class="mb-2">
    <v-card-title class="d-print-none">
      <v-list-item>
        <v-list-item-avatar>
          <v-img
            :alt="$t('resume.persona.image')"
            :src="persona.thumbnail"
            class="cursor-pointer"
            @click="pictureDialog = true"/>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>
            {{ persona.name }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ persona.job }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card-title>
    <v-card-title class="d-none d-print-block text-center">
      <h1 class="text-h6">{{ persona.name }}</h1>
      <h2 class="text-subtitle-1">{{ persona.job }}</h2>
    </v-card-title>
    <v-card-text class="text-center">
      {{ persona.description }}
    </v-card-text>
    <v-card-text class="d-print-none pt-0">
      <list-items :list="persona.actions"/>
    </v-card-text>
    <v-card-text class="d-none d-print-block text-center pt-0">
      <v-chip
        v-for="(action, i) in persona.actions.items"
        :key="i"
        label
        outlined
        small
        class="mr-2 mb-1">
        <v-icon left>
          {{ action.icon}}
        </v-icon>
        {{ action.title.replacement ? action.title.replacement : action.title.text }}
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
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Persona extends Vue {
  @Prop({ type: Object, required: true }) public persona!: any;

  public pictureDialog = false
}
</script>
