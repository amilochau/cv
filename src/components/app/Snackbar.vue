<template>
  <v-snackbar
    :timeout="errorMessages.timeout"
    :color="errorMessages.color"
    v-model="enabled"
    top
    right
    class="d-print-none">
    <v-row align="center">
      <v-col
        v-if="errorMessages.icon"
        class="mr-4 py-0 shrink">
        <v-icon>{{ errorMessages.icon }}</v-icon>
      </v-col>
      <v-col class="grow py-0">
        <span style="white-space: pre-wrap">{{ errorMessages.message }}</span>
      </v-col>
      <v-col class="shrink py-0 d-flex">
        <v-btn
          v-if="errorMessages.details"
          icon
          class="ml-2"
          @click.native="expanded = !expanded">
          <v-icon v-if="expanded">mdi-chevron-up</v-icon>
          <v-icon v-else>mdi-chevron-down</v-icon>
        </v-btn>
        <v-btn
          text
          class="ml-2"
          @click.native="enabled = false">
          {{ $t('app.snackbar.close') }}
        </v-btn>
      </v-col>
      <v-col v-if="expanded && errorMessages.details" cols="12" class="mt-4 mb-2">
        <span style="white-space: pre-wrap">{{ errorMessages.details }}</span>
      </v-col>
    </v-row>
  </v-snackbar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import EventBus from '../../event-bus'
import { IErrorMessages } from '../../models/http'

@Component
export default class SnackbarEvent extends Vue {
  public errorMessages: IErrorMessages = {
    message: '',
  };

  public expanded = false;

  public enabled = false;

  public created () {
    EventBus.$on('info', (errorMessages: IErrorMessages) => {
      this.enableSnackbar(errorMessages, 'info', 'mdi-information')
    })
    EventBus.$on('success', (errorMessages: IErrorMessages) => {
      this.enableSnackbar(errorMessages, 'success', 'mdi-checkbox-marked-circle')
    })
    EventBus.$on('warning', (errorMessages: IErrorMessages) => {
      this.enableSnackbar(errorMessages, 'warning', 'mdi-alert-octagon')
    })
    EventBus.$on('error', (errorMessages: IErrorMessages) => {
      this.enableSnackbar(errorMessages, 'error', 'mdi-alert')
    })
  }

  public enableSnackbar (errorMessages: IErrorMessages, color: string, icon: string) {
    this.errorMessages.message = errorMessages.message
    this.errorMessages.details = errorMessages.details
    this.errorMessages.color = errorMessages.color || color
    this.errorMessages.icon = errorMessages.icon || icon
    this.errorMessages.timeout = errorMessages.timeout || 10000
    this.enabled = true
  }
}
</script>
