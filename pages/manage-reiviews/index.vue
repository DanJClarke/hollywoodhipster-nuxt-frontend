<template>
  <div class="container">
    <div class="row">
      <div class="large-12 columns">
          <h1>Directors</h1>
          <ul>
              <li v-for="director in directors">
                  <nuxt-link :to="{name: 'director-id', params: {id: director.id}}" :key="director.id">
                    {{ director.name }}
                  </nuxt-link>
              </li>
          </ul>
          <nuxt-link :to="`/manage-directors/create`">Add a Director &raquo;</nuxt-link>
          <br/>
      </div>
    </div>

    <div class="row" v-for="review in reviews">
        <div class="large-12 columns">
          <h2> {{ review.film.title }} </h2>
          <div v-for="rating in ratings" v-if="review.user_id == rating.user_id && review.film_id == rating.film_id">
              {{ rating.rating }}
         </div>
        <p>{{ review.content }}</p>
       <!-- <a href="/manage-my-reviews/{{ $review->id }}/edit" class="success button">Edit</a>

            <form action="/manage-reviews/{{ $review->id }}" method="POST" class="inline-block">
                @csrf
                @method('DELETE')
                <button type="submit" class="alert button">Delete</button>
            </form>
        -->
        </div>
    </div>
</div>

</template>

<script>

export default {
computed:{
    reviews(){
        return this.$store.state.reviews.all;
    },

    ratings(){
        return this.$store.state.ratings.all;
    }
  },

  head(){
    return{
      title:'My Reviews'
    }
  }
}
</script>

<style>

</style>
