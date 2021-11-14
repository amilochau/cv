<template>
  <v-container>
    <v-row class="cookies-bar-margin">
      <v-col cols="12">
        <section>
          <app-section-header>{{ $t('pages.privacy.header11') }}</app-section-header>
          <app-section-text>{{ $t('pages.privacy.text11', { name: applicationName }) }}</app-section-text>
        </section>
        <section>
          <app-section-header>{{ $t('pages.privacy.header21') }}</app-section-header>
          <app-section-text>{{ $t('pages.privacy.text21', { name: applicationName }) }}</app-section-text>
          <app-section-sub-header>{{ $t('pages.privacy.header22') }}</app-section-sub-header>
          <app-section-text>{{ $t('pages.privacy.text22', { name: applicationName }) }}</app-section-text>
          <app-section-sub-header>{{ $t('pages.privacy.header23') }}</app-section-sub-header>
          <app-section-text>{{ $t('pages.privacy.text23', { name: applicationName }) }}</app-section-text>
          <app-section-sub-header>{{ $t('pages.privacy.header24') }}</app-section-sub-header>
          <app-section-text>{{ $t('pages.privacy.text24') }}</app-section-text>
          <app-section-sub-header>{{ $t('pages.privacy.header25') }}</app-section-sub-header>
          <app-section-text>{{ $t('pages.privacy.text25', { name: applicationName, contact: 'Antoine Milochau' }) }}</app-section-text>
          <app-section-sub-header>{{ $t('pages.privacy.header26') }}</app-section-sub-header>
          <app-section-text>{{ $t('pages.privacy.text26', { name: applicationName }) }}</app-section-text>
          <app-section-sub-header>{{ $t('pages.privacy.header27') }}</app-section-sub-header>
          <app-section-text>{{ $t('pages.privacy.text27', { name: applicationName }) }}</app-section-text>
          <app-section-sub-header>{{ $t('pages.privacy.header28') }}</app-section-sub-header>
          <app-section-text>{{ $t('pages.privacy.text28', { name: applicationName }) }}</app-section-text>
        </section>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { IPage } from '@/models/definitions';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class PrivacyPage extends Vue {
  public applicationName: string = 'CV';
}
</script>

<style lang="sass" scoped>
.cookies-bar-margin
  margin-bottom: 120px
</style>
