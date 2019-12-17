<template>
  <div class="container">
    <div class="row">
      <div class="large-12 columns">
        <h1>{{ director.name }}</h1>
        <nuxt-link :to="`/manage-directors/${ directors.id }/edit`">edit</nuxt-link>
        <br/>
        <br/>
        <p>Bio: <br/>{{ director.bio }}</p>
        <p>Films:</p>
        <ul>
          <li v-for="film in director.films">
            <nuxt-link :to="{name: 'film-id', params: {id: film.id}}" :key="film.id">
              {{ film.title }}
            </nuxt-link>
          </li>
        </ul>
        <p>Genres they are known for:</p>
        <ul>
          <li v-for="genre in directorsGenres">{{ genre.name }}</li>
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
      title: `${ this.director.name } Details`
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
