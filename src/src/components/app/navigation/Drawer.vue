<template>
  <v-navigation-drawer
    :value="drawer"
    app
    temporary
    @input="changeDrawer($event)">
    <app-navigation-pages/>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapActions, mapGetters } from 'vuex';

@Component({
  computed: {
    ...mapGetters('app', ['drawer']),
  },
  methods: {
    ...mapActions('app', ['changeDrawer']),
  },
})
export default class NavigationDrawer extends Vue {
  public drawer!: boolean;

  public changeDrawer!: (drawer: boolean) => Promise<void>;
}
</script>
