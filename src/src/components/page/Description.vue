<template>
  <section>
    <section-header v-if="title.length">{{ title }}</section-header>
    <section-text v-if="description.length" class="multi-line">{{ description }}</section-text>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Description extends Vue {
  @Prop({ type: String, default: '' }) public title!: string;
  @Prop({ type: String, default: '' }) public description!: string;
}
</script>
