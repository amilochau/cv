<template>
  <v-toolbar
    :class="toolbarClass"
    :absolute="pageMenu.absolute"
    dense>
    <template v-if="pageMenu.back">
      <v-tooltip right>
        <template #activator="tooltip">
          <v-btn
            v-on="tooltip.on"
            :aria-label="pageMenu.back.title || $t('pages.menu.backToList')"
            :to="pageMenu.back.to"
            exact
            icon>
            <v-icon>{{ pageMenu.back.icon || 'mdi-arrow-left' }}</v-icon>
          </v-btn>
        </template>
        <span>{{ $t(pageMenu.back.title) || $t('pages.menu.backToList')}}</span>
      </v-tooltip>
    </template>
    <v-menu
      v-if="pageMenu.pages.length"
      bottom
      offset-y
      right>
      <template #activator="menu">
        <v-btn
          v-on="menu.on"
          :class="menuClass"
          :aria-label="$t('pages.menu.related')"
          icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <list-items
        :items="pageMenu.pages"
        dense/>
    </v-menu>
    <template>
      <v-toolbar-title
        v-if="pageMenu.title"
        class="mx-2 nowrap-with-ellipsis">
        {{ $t(pageMenu.title) }}
      </v-toolbar-title>
      <v-toolbar-title
        v-else
        class="mx-2 nowrap-with-ellipsis">
        {{ title }}
      </v-toolbar-title>
    </template>
    <v-spacer/>
    <v-btn
      v-if="$slots.actions && !activeFilters"
      :aria-label="$t('pages.menu.more')"
      color="primary"
      icon
      @click="extension = !extension">
      <v-icon>{{ extension ? 'mdi-unfold-less-horizontal' : 'mdi-filter' }}</v-icon>
    </v-btn>
    <template
      v-if="extension"
      #extension>
      <slot name="actions"/>
    </template>
  </v-toolbar>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import { IPageMenu } from '../../models/definitions';

@Component({
  computed: {
  ...mapGetters('app', ['title']),
  },
})
export default class Menu extends Vue {
  @Prop({ type: Object, required: true }) public pageMenu!: IPageMenu;
  @Prop({ type: Boolean, default: false }) public activeFilters!: boolean;

  public toggle: boolean = false;
  public extension: boolean = false;
  public title!: string;

  get toolbarClass() {
    return {
      'app-toolbar': true,
      'elevation-1': true,
      'sticky-toolbar': true,
    };
  }
  get menuClass() {
    return {
      'first-toolbar-item': this.pageMenu.pages.length && !this.pageMenu.back,
    };
  }

  public created() {
    this.extension = this.activeFilters ?? false;
  }

  @Watch('activeFilters') public onActiveFiltersChange() {
    if (this.activeFilters) {
      this.extension = this.activeFilters;
    }
  }
}
</script>
