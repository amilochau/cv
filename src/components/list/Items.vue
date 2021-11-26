<template>
  <v-list
    class="py-0"
    dense
    expand>
    <slot name="before"/>
    <list-item
      v-for="(item, i) in list.items"
      :key="i"
      :item="item"
      :disable-translation="list.disableTranslation"
      :expanded="expanded"
      @custom="$emit($event.name, $event.args)"/>
    <slot name="after"/>
  </v-list>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { IList } from '../../models/definitions'

@Component
export default class ListItems extends Vue {
  @Prop({ type: Object, required: true }) public list!: IList;

  @Prop({ type: Boolean, default: false }) public expanded!: boolean;

  public emitCustomEvent (args: any) {
    console.log(args)
  }
}
</script>
