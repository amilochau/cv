<template>
  <v-app-bar
    class="app-toolbar elevation-1"
    app
    dense
    absolute
    clipped-left>
    <v-app-bar-nav-icon
      :aria-label="$t('app.header.bar.toggle')"
      @click="toggleDrawer"/>
    <span class="text-h6 mx-4 nowrap-with-ellipsis">{{ $t('app.header.bar.title') }}</span>
    <v-spacer/>
    <app-header-settings/>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapActions } from 'vuex'

@Component({
  methods: {
    ...mapActions('app', ['toggleDrawer']),
  },
})
export default class Toolbar extends Vue {
  public toggleDrawer!: () => Promise<void>;
}
</script>
