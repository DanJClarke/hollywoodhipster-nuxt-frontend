<template>
  <div class="container medium-8 medium-offset-2 large-6 large-offset-3 columns">
    <div class="row">
      <div class="large-12 columns">
        <h1>{{ director.name }}</h1>
        <nuxt-link :to="`/manage-directors/${ directors.id }/edit`">edit &raquo;</nuxt-link>
        <br/>
        <br/>
        <p>Bio: <br/>{{ director.bio }}</p>
        <p>Films:</p>
        <ul class="films-list">
          <li v-for="film in director.films">
            <nuxt-link :to="{name: 'manage-films-id', params: {id: film.id}}" :key="film.id">
              {{ film.title }}
            </nuxt-link>
          </li>
        </ul>
        <p>Genres they are known for:</p>
        <ul>
          <li v-for="genre in director.genres">{{ genre }}</li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="large-12 columns">
         <nuxt-link :to="`/manage-directors`">&laquo; Back to all directors</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  head(){
    return{
      title: `Directors Details`
    }
  },

  data(){
    return{
        id: this.$route.params.id,
        directors: '',
        films: ''
    }
  },

  computed:{
    director(){
        return this.$store.state.directors.find(director=> director.id === this.id)
    }
  }
}
</script>

<style>

</style>
