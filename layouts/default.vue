<template>
  <div>
    <topBar />
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
import TopBar from '~/components/topBarComponent.vue'
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'

export default {
  components: {
    TopBar
  }
}
</script>

<style lang="scss">
@import "node_modules/foundation-sites/scss/util/unit";
@import "node_modules/foundation-sites/scss/util/breakpoint";
 main{
    margin-top: 120px;
  }
</style>
