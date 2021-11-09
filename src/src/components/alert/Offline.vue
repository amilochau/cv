<template>
  <v-row>
    <v-expand-transition>
      <v-col
        v-if="offline"
        class="pb-0"
        cols="12">
        <v-alert
          class="elevation-1 warning--text my-0"
          border="left">
          <v-layout align-center>
            <span class="px-4">
              {{ $t('components.offline.title') }}
            </span>
          </v-layout>
        </v-alert>
      </v-col>
    </v-expand-transition>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

@Component({
  computed: {
    ...mapGetters('load', ['offline']),
  },
})
export default class Offline extends Vue {
  public offline!: boolean;
}
</script>
