<template>
  <v-card>
    <v-card-title>
      <v-list-item>
        <v-list-item-avatar>
          <v-img
            :alt="$t('resume.persona.image')"
            :src="image"/>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>
            {{ name }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ job }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card-title>
    <v-card-text>
      {{ description }}
    </v-card-text>
    <v-card-actions>
      <v-spacer/>
      <v-btn
        v-for="(action, i) in actions"
        :key="i"
        icon>
        <v-icon>{{ action.icon }}</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Persona extends Vue {
  @Prop({ type: String, required: true }) public image!: string
  @Prop({ type: String, required: true }) public name!: string
  @Prop({ type: String, required: true }) public job!: string
  @Prop({ type: String, required: true }) public description!: string
  @Prop({ type: Array, required: true }) public actions!: [];
}
</script>
