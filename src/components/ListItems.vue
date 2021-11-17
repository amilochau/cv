<template>
  <v-list
    class="py-0"
    dense
    :three-line="list.threeLine">
    <template v-for="(item, i) in list.items">
      <v-list-group
        v-if="item.items"
        :key="i"
        :prepend-icon="item.icon"
        :value="list.expandGroups"
        no-action>
        <template #activator>
          <v-list-item-content>
            <v-list-item-title class="multi-line">{{ list.disableTranslation ? item.title.text :  $t(item.title.text) }}</v-list-item-title>
            <v-list-item-subtitle v-if="item.subtitle" class="multi-line">{{ list.disableTranslation ? item.subtitle.text :  $t(item.subtitle.text) }}</v-list-item-subtitle>
          </v-list-item-content>
        </template>
        <template v-for="(subItem, j) in item.items">
          <v-subheader
            v-if="subItem.header"
            :key="j"
            class="grey--text px-4">
            {{ list.disableTranslation ? item.header.text : $t(subItem.header.text) }}
          </v-subheader>
          <v-divider
            v-else-if="subItem.divider"
            :key="j"
            :class="dividerClass"/>
          <v-list-item
            v-else
            :key="j"
            :to="subItem.action ? subItem.action.to : undefined"
            :href="subItem.action ? subItem.action.href : undefined"
            :disabled="subItem.disabled"
            :inactive="subItem.inactive"
            :target="subItem.action && subItem.action.href ? '_blank' : undefined"
            exact
            class="pl-4"
            rel="noopener"
            @click="item.action && item.action.event ? $emit(item.action.event, item.action.eventArg) : null">
            <v-list-item-action v-if="subItem.icon">
              <v-icon>{{ subItem.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-avatar
              v-else-if="subItem.avatar"
              :size="item.avatar.size ? item.avatar.size : '24px'"
              :color="subItem.avatar.color"
              :rounded="subItem.avatar.label">
              <img
                v-if="subItem.avatar.src"
                :alt="$t('components.listItems.avatar')"
                :src="`${baseUrl}${subItem.avatar.src}`"
                :width="item.avatar.size ? item.avatar.size : '24px'">
              <span
                v-else-if="subItem.avatar.title">
                {{ list.disableTranslation ? subItem.avatar.title.text : $t(subItem.avatar.title.text) }}
              </span>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{ list.disableTranslation ? subItem.title.text : $t(subItem.title.text) }}</v-list-item-title>
              <v-list-item-subtitle v-if="subItem.subtitle">{{ list.disableTranslation ? subItem.subtitle.text : $t(subItem.subtitle.text) }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-chip
              v-if="subItem.badge"
              :color="subItem.badge.color"
              :label="subItem.badge.label"
              :outlined="subItem.badge.outlined"
              :small="subItem.badge.small">
              <v-icon v-if="subItem.badge.icon" left>{{ subItem.badge.icon }}</v-icon>
              {{ list.disableTranslation ? subItem.badge.text : $t(subItem.badge.text) }}
            </v-chip>
          </v-list-item>
        </template>
      </v-list-group>
      <v-subheader
        v-else-if="item.header"
        :key="i"
        class="grey--text px-4">
        {{ list.disableTranslation ? item.header.text : $t(item.header.text) }}
      </v-subheader>
      <v-divider
        v-else-if="item.divider"
        :key="i"
        :class="dividerClass"/>
      <v-list-item
        v-else
        :key="i"
        :to="item.action ? item.action.to : undefined"
        :href="item.action ? item.action.href : undefined"
        :disabled="item.disabled"
        :inactive="item.inactive"
        :target="item.action && item.action.href ? '_blank' : undefined"
        exact
        rel="noopener"
        @click="item.action && item.action.event ? $emit(item.action.event, item.action.eventArg) : null">
        <v-list-item-action v-if="item.icon">
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-avatar
          v-else-if="item.avatar"
          :size="item.avatar.size ? item.avatar.size : '24px'"
          :color="item.avatar.color"
          :rounded="item.avatar.label">
          <img
            v-if="item.avatar.src"
            :alt="$t('components.listItems.avatar')"
            :src="`${baseUrl}${item.avatar.src}`"
            :width="item.avatar.size ? item.avatar.size : '24px'">
          <span
            v-else-if="item.avatar.title">
            {{ list.disableTranslation ? item.avatar.title.text : $t(item.avatar.title.text) }}
          </span>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="multi-line">{{ list.disableTranslation ? item.title.text : $t(item.title.text) }}</v-list-item-title>
          <v-list-item-subtitle v-if="item.subtitle" class="multi-line">{{ list.disableTranslation ? item.subtitle.text : $t(item.subtitle.text) }}</v-list-item-subtitle>
        </v-list-item-content>
        <v-chip
          v-if="item.badge"
          :color="item.badge.color"
          :label="item.badge.label"
          :outlined="item.badge.outlined"
          :small="item.badge.small">
          <v-icon v-if="item.badge.icon" left>{{ item.badge.icon }}</v-icon>
          {{ list.disableTranslation ? item.badge.text : $t(item.badge.text) }}
        </v-chip>
      </v-list-item>
    </template>
    <slot/>
  </v-list>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { IList } from '../models/definitions'

@Component
export default class ListItems extends Vue {
  @Prop({ type: Object, required: true }) public list!: IList;

  @Prop({ type: Boolean, default: false }) public dense!: boolean;

  public baseUrl: string = process.env.BASE_URL;

  get dividerClass () {
    if (!this.dense) { return 'my-2' } else { return undefined }
  }
}
</script>
