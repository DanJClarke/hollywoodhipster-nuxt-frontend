<template>
    <div id="filmParent">
        <div class="row flex" v-if="films.length > 0">
            <film-card  v-for="film in films" :filmId="film.id" :key="film.id" :film="film"></film-card>
        </div>
        <div v-else  class="callout warning">
            No films in the database
        </div>
    </div>
</template>

<script>
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex';
import FilmCard from './FilmCardComponent'

export default {
    components: {
        FilmCard
    },

    computed:{
       ...mapState(['films']),
    },

    mounted() {

      //this.filmList =



       // axios.get('/film-data')
         //    .then(response => {
           //     this.filmList = response.data
             //})
    }
}
</script>
