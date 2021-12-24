<template>
  <v-card class="mx-auto">
    <v-app-bar
      flat
      dense>
      <v-icon left>
        mdi-account-box-outline
      </v-icon>
      <v-toolbar-title>
        {{ persona.name }}
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        icon
        @click="dialog = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-app-bar>
    <loadable-image :src="persona.image" />
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Change extends Vue {
  @Prop({ type: Object, required: true }) public persona!: any;
}
</script>
