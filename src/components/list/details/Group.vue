<template>
  <v-list-group
    :prepend-icon="item.icon ? item.icon.mdi : undefined"
    :value="expanded"
    no-action
    eager
    color=""
    class="p-avoid-break-inside">
    <template #activator>
      <v-list-item-content>
        <v-list-item-title class="multi-line">
          {{ disableTranslation ? item.title.text : $t(item.title.text) }}
        </v-list-item-title>
        <v-list-item-subtitle v-if="item.subtitle" class="multi-line">
          {{ disableTranslation ? item.subtitle.text : $t(item.subtitle.text) }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </template>
    <list-item
      v-for="(subItem, j) in item.items"
      :key="j"
      :item="subItem"
      :disable-translation="disableTranslation"
      :expanded="expanded"
      thin />
  </v-list-group>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { IListItem } from '../../../models/definitions'

@Component
export default class ListDetailsGroup extends Vue {
  @Prop({ type: Object, required: true }) public item!: IListItem;

  @Prop({ type: Boolean, default: false }) public disableTranslation!: boolean;

  @Prop({ type: Boolean, default: false }) public expanded!: boolean;
}
</script>
