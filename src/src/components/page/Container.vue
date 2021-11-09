<template>
  <span>
    <page-menu
      :page-menu="page.menu"
      :active-filters="activeFilters"
      @toggle="$emit('toggle')">
      <template #actions>
        <slot name="actions"/>
      </template>
    </page-menu>
    <v-container
      :fluid="page.fluid"
      :class="containerClass">
      <alert-offline/>
      <slot/>
    </v-container>
  </span>
</template>

<script lang="ts">
import { IPage } from '@/models/definitions';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Container extends Vue {
  @Prop({ type: Object, required: true }) public page!: IPage;
  @Prop({ type: Boolean, default: false }) public activeFilters!: boolean;

  get containerClass() {
    return {
      'container-page': true,
      'container-condensed': this.page.condensed,
      'fill-height': this.page.fillHeight,
      'container-map': this.page.map,
    };
  }
}
</script>
