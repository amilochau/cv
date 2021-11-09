<template>
  <v-menu
    bottom
    offset-y
    left
    attach>
    <template #activator="menu">
      <v-tooltip
        bottom>
        <template #activator="tooltip">
          <v-btn
            v-on="{ ...menu.on, ...tooltip.on }"
            :aria-label="$t('app.header.help.title')"
            icon>
            <v-icon>mdi-help</v-icon>
          </v-btn>
        </template>
        <span>{{ $t('app.header.help.title') }}</span>
      </v-tooltip>
    </template>
    <v-card>
      <list-items
        :items="toolbarHelpItems"
        dense/>
    </v-card>
  </v-menu>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import toolbarHelpItems from '../../../data/layout/toolbar/help';
import { IListItem } from '../../../models/definitions';

@Component
export default class Help extends Vue {
  public toolbarHelpItems: IListItem[] = toolbarHelpItems;
}
</script>
