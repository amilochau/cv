<template>
  <list-details-group
    v-if="item.items"
    :item="item"
    :disable-translation="disableTranslation"
    :expanded="expanded"/>
  <list-details-subheader
    v-else-if="item.header"
    :header="item.header"
    :disable-translation="disableTranslation"/>
  <list-details-divider
    v-else-if="item.divider"/>
  <list-details-item
    v-else
    :item="item"
    :disable-translation="disableTranslation"
    :thin="thin"
    @custom="$emit('custom', $event)"/>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { IListItem } from '../../models/definitions'

@Component
export default class ListItem extends Vue {
  @Prop({ type: Object, required: true }) public item!: IListItem;

  @Prop({ type: Boolean, default: false }) public disableTranslation!: boolean;

  @Prop({ type: Boolean, default: false }) public expanded!: boolean;

  @Prop({ type: Boolean, default: false }) public thin!: boolean;
}
</script>
