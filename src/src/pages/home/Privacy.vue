<template>
  <page-container :page="page">
    <v-row class="cookies-bar-margin">
      <v-col cols="12">
        <section>
          <section-header>{{ $t('pages.home.privacy.header11') }}</section-header>
          <section-text>{{ $t('pages.home.privacy.text11', { name: applicationName }) }}</section-text>
        </section>
        <section>
          <section-header>{{ $t('pages.home.privacy.header21') }}</section-header>
          <section-text>{{ $t('pages.home.privacy.text21', { name: applicationName }) }}</section-text>
          <section-sub-header>{{ $t('pages.home.privacy.header22') }}</section-sub-header>
          <section-text>{{ $t('pages.home.privacy.text22', { name: applicationName }) }}</section-text>
          <section-sub-header>{{ $t('pages.home.privacy.header23') }}</section-sub-header>
          <section-text>{{ $t('pages.home.privacy.text23', { name: applicationName }) }}</section-text>
          <section-sub-header>{{ $t('pages.home.privacy.header24') }}</section-sub-header>
          <section-text>{{ $t('pages.home.privacy.text24') }}</section-text>
          <section-sub-header>{{ $t('pages.home.privacy.header25') }}</section-sub-header>
          <section-text>{{ $t('pages.home.privacy.text25', { name: applicationName, contact: 'Antoine Milochau' }) }}</section-text>
          <section-sub-header>{{ $t('pages.home.privacy.header26') }}</section-sub-header>
          <section-text>{{ $t('pages.home.privacy.text26', { name: applicationName }) }}</section-text>
          <section-sub-header>{{ $t('pages.home.privacy.header27') }}</section-sub-header>
          <section-text>{{ $t('pages.home.privacy.text27', { name: applicationName }) }}</section-text>
          <section-sub-header>{{ $t('pages.home.privacy.header28') }}</section-sub-header>
          <section-text>{{ $t('pages.home.privacy.text28', { name: applicationName }) }}</section-text>
        </section>
      </v-col>
    </v-row>
  </page-container>
</template>

<script lang="ts">
import homePages from '@/data/pages/home';
import { IPage } from '@/models/definitions';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class PrivacyPage extends Vue {
  public page: IPage = {
    menu: {
      pages: homePages,
    },
  };

  public applicationName: string = 'CV';
}
</script>

<style lang="sass" scoped>
.cookies-bar-margin
  margin-bottom: 120px
</style>
