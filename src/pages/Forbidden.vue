<template>
  <v-row align="center">
    <v-col
      class="text-center"
      cols="12">
      <h1 class="text-h3 primary--text mb-4">
        {{ $t('pages.forbidden.title') }}
      </h1>
      <p>{{ $t('pages.forbidden.description') }}</p>
      <v-btn
        :disabled="loading"
        :to="{ name: 'Home' }"
        outlined
        color="primary">
        {{ $t('pages.forbidden.buttonText') }}
      </v-btn>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapGetters } from 'vuex'

@Component({
  computed: {
    ...mapGetters('load', ['loading']),
  },
})
export default class ForbiddenPage extends Vue {
  public loading!: boolean;
}
</script>
