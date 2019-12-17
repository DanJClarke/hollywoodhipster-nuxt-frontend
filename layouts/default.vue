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

export default {
  components: {
    TopBar
  }
}
</script>

<style>
 main{
    margin-top: 70px;
  }
</style>
