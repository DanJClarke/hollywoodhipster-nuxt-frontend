<template>
  <div class="container">
    <div class="row">
        <div class="large-6 columns">
            <h1>Manage Films</h1>
            <ul class="films-list">
               <li v-for="film in films">
                    <nuxt-link :to="{name: 'manage-films-id', params: {id: film.id}}" :key="film.id">
                      {{ film.title }}
                    </nuxt-link>
                </li>
            </ul>
            <nuxt-link :to="`/manage-films/create`">Add a Film &raquo;</nuxt-link>
            <br/>
        </div>

      <div class="large-6 columns">
          <h1>Manage Directors</h1>
          <nuxt-link :to="`/manage-directors`">Manage Directors &raquo;</nuxt-link>
          <br/>
      </div>
    </div>
  </div>
</template>

<script>

export default {
computed:{
    films(){
        return this.$store.state.films;
    }
  },

  head(){
    return{
      title:'All Films'
    }
  }
}
</script>

<style>

</style>
