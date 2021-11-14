<template>
  <v-list
    class="py-0"
    dense>
    <template v-for="(item, i) in items.filter(x => display(x))">
      <v-list-group
        v-if="item.items"
        :key="i"
        :prepend-icon="item.icon"
        no-action>
        <template #activator>
          <v-list-item-content>
            <v-list-item-title>{{ item.disableTranslation ? item.title :  $t(item.title) }}</v-list-item-title>
          </v-list-item-content>
        </template>
        <template v-for="(subItem, j) in item.items.filter(x => display(x))">
          <v-subheader
            v-if="subItem.header"
            :key="j"
            class="grey--text px-4">
            {{ $t(subItem.header) }}
          </v-subheader>
          <v-divider
            v-else-if="subItem.divider"
            :key="j"
            :class="dividerClass"/>
          <v-list-item
            v-else
            :key="j"
            :to="subItem.to"
            :href="subItem.href"
            :disabled="subItem.disabled"
            :inactive="subItem.inactive"
            :target="subItem.target"
            exact
            class="pl-4"
            rel="noopener"
            @click="item.event ? $emit(item.event, item.eventArg) : null">
            <v-list-item-action v-if="subItem.action">
              <v-icon :class="[subItem.actionClass || 'success--text']">
                {{ subItem.action }}
              </v-icon>
            </v-list-item-action>
            <v-list-item-action v-if="subItem.icon">
              <v-icon>{{ subItem.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-avatar
              v-else-if="subItem.avatar"
              tile
              size="24px">
              <img
                :alt="$t('components.listItems.avatar')"
                :src="`${baseUrl}${subItem.avatar}`"
                width="24px">
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>
                <span>{{ subItem.disableTranslation ? subItem.title : $t(subItem.title) }}</span>
              </v-list-item-title>
            </v-list-item-content>
            <v-chip
              v-if="subItem.badge"
              :color="subItem.color || 'primary'"
              class="white--text pa-0 v-chip--x-small">
              {{ $t(subItem.badge) }}
            </v-chip>
          </v-list-item>
        </template>
      </v-list-group>
      <v-subheader
        v-else-if="item.header"
        :key="i"
        class="grey--text px-4">
        {{ $t(item.header) }}
      </v-subheader>
      <v-divider
        v-else-if="item.divider"
        :key="i"
        :class="dividerClass"/>
      <v-list-item
        v-else
        :key="i"
        :to="item.to"
        :href="item.href"
        :disabled="item.disabled"
        :inactive="item.inactive"
        :target="item.target"
        exact
        rel="noopener"
        @click="item.event ? $emit(item.event, item.eventArg) : null">
        <v-list-item-action v-if="item.icon">
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-avatar
          v-else-if="item.avatar"
          tile
          size="24px">
          <img
            :alt="$t('components.listItems.avatar')"
            :src="`${baseUrl}${item.avatar}`"
            width="24px">
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ item.disableTranslation ? item.title : $t(item.title) }}</v-list-item-title>
        </v-list-item-content>
        <v-chip
          v-if="item.badge"
          :color="item.color || 'primary'"
          class="white--text pa-0 v-chip--x-small">
          {{ $t(item.badge) }}
        </v-chip>
      </v-list-item>
    </template>
    <slot/>
  </v-list>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IListItem } from '../models/definitions';

@Component
export default class ListItems extends Vue {
  @Prop({ type: Array, required: true }) public items!: IListItem[];
  @Prop({ type: Boolean, default: false }) public dense!: boolean;

  public baseUrl: string = process.env.BASE_URL;

  get dividerClass() {
    if (!this.dense) { return 'my-2'; } else { return undefined; }
  }

  public display(item: IListItem) {
    // If no policy is needed: always display
    if (!item.policies || !item.policies.length) { return true; }
    // The current store state must have at least one policy
    return item.policies.some((r) => this.$store.getters[r]);
  }
}
</script>
