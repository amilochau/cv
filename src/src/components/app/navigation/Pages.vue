<template>
  <span>
    <v-list class="py-0">
      <v-list-item @click="toggleDrawer()" class="app-navigation-close">
        <v-list-item-action>
          <v-icon>mdi-close</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>
            {{ $t("app.navigation.close") }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider class="pb-2"/>
    <list-items :items="navigationDrawerItems"/>
  </span>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapActions } from 'vuex';
import navigationDrawerItems from '../../../data/layout/navigation/drawer';
import { IListItem } from '../../../models/definitions';

@Component({
  methods: {
    ...mapActions('app', ['toggleDrawer']),
  },
})
export default class NavigationPages extends Vue {
  public navigationDrawerItems: IListItem[] = navigationDrawerItems;

  public toggleDrawer!: () => Promise<void>;
}
</script>