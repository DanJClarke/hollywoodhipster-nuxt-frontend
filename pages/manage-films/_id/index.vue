<template>
  <div class="container medium-8 medium-offset-2 large-6 large-offset-3 columns">
    <div class="row">
        <div class="large-12 columns">
            <h1>{{ film.title }}</h1>
            <nuxt-link :to="`/manage-films/${ film.id }/edit`">edit</nuxt-link>
            <br/>
            <br/>
            <p>Directed by: {{ film.director.name }}</p>

            <img width="150" :src="`/uploads/${ film.imgsrc }`" alt="`${ $film.title } poster`" />
            <p>Running time: {{ film.running_time }} </p>
            <p>Release date: {{ film.release_date }} </p>
            <p>Budget: {{ film.budget }} </p>
            <p>Plot: {{ film.plot }} </p>
            <p>Genre:
              <span v-for="genre in film.genres"> {{ genre.name }},  </span>
            </p>
        </div>
    </div>

    <div class="row" v-if="film.reviews.length > 0">
      <h3>Reviews</h3>
      <div>
        <form v-for="review in film.reviews" method="POST" action="`/manage-reviews/${ review.id }">
            {{ review.content }}
            <button class="button alert inline" @click="deleteReview" type="submit">Remove Review</button>
        </form>
      </div>
    </div>

    <div class="row">
        <div class="large-12 columns">
            <nuxt-link :to="`/manage-films`">&laquo; Back to all films</nuxt-link>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  head(){
    return{
      title: `Film Details`
    }
  },

  data(){
    return{
        id: this.$route.params.id,
        films: ''
    }
  },

  computed:{
    film(){
        return this.$store.state.films.find(film=> film.id === this.id)
    }
  },

  methods:{
    deleteReview(){

    }
  }
}
</script>

<style>

</style>
