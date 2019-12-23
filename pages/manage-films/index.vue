<template>
  <div class="container">
    <div class="row">
        <div class="large-6 columns">
            <h1>Films</h1>
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
          <h1>Directors</h1>
          <ul class="directors-list">
              <li v-for="director in directors">
                  <nuxt-link :to="{name: 'manage-directors', params: {id: director.id}}" :key="director.id">
                    {{ director.name }}
                  </nuxt-link>
              </li>
          </ul>
          <nuxt-link :to="`/manage-directors/create`">Add a Director &raquo;</nuxt-link>
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
    },

    directors(){
        return this.$store.state.directors;
    }
  },

  head(){
    return{
      title:'All films and Directors'
    }
  }
}
</script>

<style>

</style>
