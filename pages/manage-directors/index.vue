<template>
  <div class="container">
    <div class="row">
      <div class="large-6 columns">
          <h1>Manage Directors</h1>
          <ul class="directors-list">
              <li v-for="(director, index) in directors" :key="index">
                <nuxt-link :to="{name: 'manage-directors-edit', params: {id: director.id}}">
                  {{ director.name }}
                </nuxt-link>
              </li>
          </ul>
          <nuxt-link :to="`/manage-directors/create`">Add a Director &raquo;</nuxt-link>
          <br/>
      </div>
      <div class="large-6 columns">
        <h1>Manage Films</h1>
        <nuxt-link :to="`/manage-films`">manage Films &raquo;</nuxt-link>
        <br/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed:{
    directors(){
      return this.$store.state.directors;
    }
  },

  head(){
    return{
      title:'All Directors'
    }
  }
}
</script>

<style>

</style>
