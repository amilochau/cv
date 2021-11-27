<template>
  <v-list-item
    :to="item.action ? item.action.to : undefined"
    :href="item.action ? item.action.href : undefined"
    :disabled="item.disabled"
    :inactive="!item.action"
    :target="item.action && item.action.href ? '_blank' : undefined"
    :ripple="!!item.action"
    exact
    rel="noopener"
    :class="itemClass"
    @click="item.action && item.action.event ? $emit('custom', { name: item.action.event, args: item.action.eventArg }) : null">
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
        {{ disableTranslation ? item.avatar.title.text : $t(item.avatar.title.text) }}
      </span>
    </v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-title
        :class="contentClass">
        {{ disableTranslation ? item.title.text : $t(item.title.text) }}
      </v-list-item-title>
      <v-list-item-subtitle
        v-if="item.subtitle"
        :class="contentClass">
        {{ disableTranslation ? item.subtitle.text : $t(item.subtitle.text) }}
      </v-list-item-subtitle>
    </v-list-item-content>
    <v-list-item-action
      v-if="item.badge"
      class="ml-2">
      <v-icon
        v-if="!item.badge.text"
        class="d-print-none">
        {{ item.badge.icon }}
      </v-icon>
      <v-chip
        v-else
        :color="item.badge.color"
        :label="item.badge.label"
        :outlined="item.badge.outlined"
        :small="item.badge.small">
        <v-icon
          v-if="item.badge.icon"
          :small="item.badge.small"
          left
          class="d-print-none">
          {{ item.badge.icon }}
        </v-icon>
        {{ disableTranslation ? item.badge.text : $t(item.badge.text) }}
      </v-chip>
    </v-list-item-action>
  </v-list-item>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { IListItem } from '../../../models/definitions'

@Component
export default class ListDetailsItem extends Vue {
  @Prop({ type: Object, required: true }) public item!: IListItem;

  @Prop({ type: Boolean, default: false }) public disableTranslation!: boolean;

  @Prop({ type: Boolean, default: false }) public subItem!: boolean;

  @Prop({ type: Boolean, default: false }) public thin!: boolean;

  public baseUrl: string = process.env.BASE_URL;

  get itemClass () {
    return {
      'pl-4': true,
      'p-avoid-break-inside': true,
      'thin-list-item': this.thin,
    }
  }

  get contentClass () {
    return {
      'multi-line': true,
      'font-weight-regular': this.thin,
    }
  }
}
</script>

<style lang="scss" scoped>
.thin-list-item {
  min-height: 32px;
}
</style>
