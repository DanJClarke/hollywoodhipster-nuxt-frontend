<template>
  <div class="container medium-10 medium-offset-1 large-8 large-offset-2 columns">
    <div class="row">
           <div class="large-12 columns">
              <h1>Add a new Film</h1>
          </div>
      </div>
      <form @submit.prevent="create">
        <div class="row">
              <div class="large-12 columns">
                <label>Film Title
                    <input v-model="form.title" type="text" name="title" placeholder="Add a title"/>
                </label>
                <span v-if="errors.title" class="invalid-feedback" role="alert">
                  <strong>{{ errors.title[0] }}</strong>
                </span>
            </div>
        </div>
        <div class="row">
              <div class="large-12 columns">
                <label>Director
                    <select name="director_id" v-model="form.director_id">
                        <option v-for="director in directors" :value="director.id">{{ director.name }}</option>
                    </select>
                </label>
                <span v-if="errors.director" class="invalid-feedback" role="alert">
                  <strong>{{ errors.director[0] }}</strong>
                </span>
            </div>
        </div>

        <div class="row">
            <div class="large-3 columns">
                <label>Film image
                  <input type="text" name="imgsrc" v-model="form.imgsrc" />
                </label>
                <span v-if="errors.imgsrc" class="invalid-feedback" role="alert">
                  <strong>{{ errors.imgsrc[0] }}</strong>
                </span>
            </div>
            <div class="large-3 columns">
                <label>Running time (mins)
                    <input type="text"  v-model="form.running_time" name="running_time" placeholder="please add a running time" />
                </label>
                <span v-if="errors.running_time" class="invalid-feedback" role="alert">
                  <strong>{{ errors.running_time[0] }}</strong>
                </span>
            </div>
            <div class="large-3 columns">
                <label>Release date
                    <input type="date" v-model="form.release_date" />
                </label>
                <span v-if="errors.date" class="invalid-feedback" role="alert">
                  <strong>{{ errors.date[0] }}</strong>
                </span>
            </div>
            <div class="large-3 columns">
                <label>Budget
                    <input type="text" name="budget" placeholder="please add a budget in numbers" v-model="form.budget" />
                </label>
                <span v-if="errors.budget" class="invalid-feedback" role="alert">
                  <strong>{{ errors.budget[0] }}</strong>
                </span>
            </div>

        </div>
        <div class="row">
            <div class="large-12 columns">
                <label>Film Plot
                    <textarea name="plot" rows="10" v-model="form.plot" placeholder="Please keep the plot synopsis brief"  /></textarea>
                </label>
                <span v-if="errors.plot" class="invalid-feedback" role="alert">
                  <strong>{{ errors.plot[0] }}</strong>
                </span>
            </div>
        </div>
        <div class="row">
            <div class="large-6 columns">
              <label>Film Genres</label>
              <span class="genre" v-for="genre in genres">
                <input :id="`genre${ genre.id }`" name="genres[]" type="checkbox" :value="genre.id" v-model="form.genres"><label :for="`genre${ genre.id }`">{{ genre.name }}</label>
              </span>
            </div>
        </div>
        <div class="row">
            <div class="large-12 columns">
                <button class="button" name="submit" type="submit">Add Film</button>
            </div>
        </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'
export default {
  middleware: ['auth'],

  data(){
    return{
      genres: [],
      form: {
        title:'',
        director_id:'',
        imgsrc:'',
        running_time:'',
        release_date:'',
        budget: '',
        plot: '',
        genres:[]
      }
    }
  },

  computed:{
    directors(){
        return this.$store.state.directors;
    }
  },

  head(){
    return{
      title:'Add a Film'
    }
  },

  mounted(){
    axios.get('http://hollywoodhipster-api.test/api/genres').then(response => this.genres = response.data);
  },

  methods:{
    async create(){
      await this.$axios.$post('http://hollywoodhipster-api.test/api/films', this.form)
      .then(data => {
        this.$store.dispatch('addFilm', data.data);
        this.$router.push('/manage-films');
      })
      .catch(err => {
          console.log(err);
      });
    }
  }
}
</script>

<style>

</style>


