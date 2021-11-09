<template>
  <v-container>
    <home-welcome/>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapActions } from 'vuex';

@Component({
  methods: {
    ...mapActions('app', ['refresh']),
  },
})
export default class HomePage extends Vue {
  public refresh!: (cultureParam: string) => Promise<void>;

  public beforeRouteEnter(to: any, from: any, next: any) {
    next(async (vm: HomePage) => {
      await vm.refresh(to.params.lang);
    });
  }
  public async beforeRouteUpdate(to: any, from: any, next: any) {
    next();
    await this.refresh(to.params.lang);
  }

}
</script>
