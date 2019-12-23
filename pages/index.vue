<template>
  <div>
      <div id="hero">
          <parallax-parent></parallax-parent>
      </div>
      <div class="row">
          <div class="large-12 columns">
              <h1>Movies</h1>
          </div>
      </div>
      <div class="row">
         <film-parent></film-parent>
      </div>
  </div>
</template>

<script>
import FilmParent from '~/components/FilmParentComponent.vue'
import ParallaxParent from '~/components/ParallaxParentComponent.vue'

export default {
  components: {
    FilmParent, ParallaxParent
  }
}
</script>

<style>

</style>
