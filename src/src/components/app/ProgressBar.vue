<template>
  <v-progress-linear
    :active="lazyProgress"
    :indeterminate="progress.indeterminate"
    class="progress-bar mt-0 mb-0"/>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

let lazyProgressTimeout: number = 0;

@Component({
  computed: {
    ...mapGetters('load', ['progress']),
  },
})
export default class ProgressBar extends Vue {
  @Prop({ type: Number, default: 0 }) public lazyDelay!: number;
  public lazyProgress: boolean = false;
  public progress!: {
    loading: boolean,
  }; // TODO Create proper model here

  @Watch('progress', { deep: true }) public onProgressChanged() {
    if (this.progress.loading) {
      lazyProgressTimeout = setTimeout(() => {
        this.lazyProgress = true;
      }, this.lazyDelay);
    } else {
      clearTimeout(lazyProgressTimeout);
      this.lazyProgress = false;
    }
  }
}
</script>
