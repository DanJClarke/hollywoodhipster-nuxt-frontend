<template>
  <div class="container medium-10 medium-offset-1 large-8 large-offset-2 columns">
    <div class="row">
           <div class="large-12 columns">
              <h1>Add a new Director</h1>
          </div>
      </div>
      <form @submit.prevent="create">
        <div class="row">
              <div class="large-12 columns">
                <label>Directors name
                    <input v-model="form.name" type="text" name="name" placeholder="Add a name"/>
                </label>
                <span v-if="errors.name" class="invalid-feedback" role="alert">
                  <strong>{{ errors.name[0] }}</strong>
                </span>
            </div>
        </div>
        <div class="row">
            <div class="large-12 columns">
                <label>Directors Biography
                    <textarea name="plot" rows="10" v-model="form.bio" placeholder="Please keep the directors bio brief" /></textarea>
                </label>
                <span v-if="errors.bio" class="invalid-feedback" role="alert">
                  <strong>{{ errors.bio[0] }}</strong>
                </span>
            </div>
        </div>
        <div class="row">
            <div class="large-12 columns">
                <button class="button" name="submit" type="submit">Add Director</button>
            </div>
        </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  middleware: ['auth'],

  data(){
    return{
      form: {
        name:'',
        bio:''
      }
    }
  },

  head(){
    return{
      title:'Add a Director'
    }
  },

  methods:{
    async create(){
      await this.$axios.$post('http://hollywoodhipster-api.test/api/directors', this.form)
      .then(data => {
          this.$router.push('/manage-directors');
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


