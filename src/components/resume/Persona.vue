<template>
  <v-card elevation="1" class="mb-2">
    <v-card-title>
      <v-list-item>
        <v-list-item-avatar>
          <v-img
            :alt="$t('resume.persona.image')"
            :src="persona.thumbnail"
            class="cursor-pointer"
            @click="dialog = true"/>
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
    <v-card-text>
      {{ persona.description }}
    </v-card-text>
    <v-card-text class="pt-0">
      <list-items :list="persona.actions"/>
    </v-card-text>
    <v-dialog v-model="dialog" width="600px">
      <v-card class="mx-auto">
        <v-app-bar
          flat
          dense>
          <v-icon left>mdi-account-box-outline</v-icon>
          <v-toolbar-title>
            {{ persona.name }}
          </v-toolbar-title>
          <v-spacer/>
          <v-btn
            icon
            @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-app-bar>
        <loadable-image :src="persona.image"/>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Persona extends Vue {
  @Prop({ type: Object, required: true }) public persona!: any;

  public dialog = false
}
</script>
