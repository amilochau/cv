<template>
  <v-subheader
    class="grey--text px-4 d-print-none">
    {{ disableTranslation ? header.text : $t(header.text) }}
  </v-subheader>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { IText } from '../../../models/definitions'

@Component
export default class ListDetailsSubheader extends Vue {
  @Prop({ type: Object, required: true }) public header!: IText;

  @Prop({ type: Boolean, default: false }) public disableTranslation!: boolean;
}
</script>
