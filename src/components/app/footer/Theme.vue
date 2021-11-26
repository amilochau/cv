<template>
  <v-btn
    :aria-label="$t('app.footer.theme')"
    class="ma-2"
    icon
    @click="toggleTheme">
    <v-icon>mdi-brightness-6</v-icon>
  </v-btn>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapActions, mapGetters } from 'vuex'

@Component({
  computed: {
    ...mapGetters('theme', ['darkTheme']),
  },
  methods: {
    ...mapActions('theme', ['changeTheme']),
  },
})
export default class FooterTheme extends Vue {
  public darkTheme!: boolean;

  public changeTheme!: (darkTheme: boolean) => Promise<void>;

  public toggleTheme () {
    const theme = !this.darkTheme
    this.$vuetify.theme.dark = theme
    this.changeTheme(theme)
  }
}
</script>
