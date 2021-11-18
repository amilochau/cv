<template>
  <v-app>
    <router-view class="grey lighten-4"/>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapActions, mapGetters } from 'vuex'

@Component({
  computed: {
    ...mapGetters('theme', ['darkTheme']),
  },
  methods: {
    ...mapActions('load', ['setOnline', 'setOffline']),
  },
})
export default class AppPage extends Vue {
  public setOnline!: () => Promise<void>;

  public setOffline!: () => Promise<void>;

  public darkTheme!: boolean;

  public created () {
    this.$vuetify.theme.dark = this.darkTheme
  }

  public async mounted () {
    if (typeof window !== 'undefined') {
      if (navigator.onLine) {
        await this.setOnline()
      } else {
        await this.setOffline()
      }

      const onlineHandler = () => {
        this.setOnline()
      }

      const offlineHandler = () => {
        this.setOffline()
      }

      window.addEventListener('online', onlineHandler)
      window.addEventListener('offline', offlineHandler)

      this.$once('hook:beforeDestroy', () => {
        window.removeEventListener('online', onlineHandler)
        window.removeEventListener('offline', offlineHandler)
      })
    }
  }
}
</script>
