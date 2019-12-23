<template>
  <div class="container medium-8 medium-offset-2 large-6 large-offset-3 columns">
      <div class="row">
        <div class="large-12 columns">
        <h1>Register</h1>
        </div>
    </div>

    <div id="Register-form">
          <form @submit.prevent="submit">
            <div class="row">
                <div class="large-12 form-col columns">
                    <label>Name
                        <input id="name" type="text" class="form-control" name="name" v-model.trim="form.name"  autocomplete="name" autofocus>
                    </label>
                    <span v-if="errors.name" class="invalid-feedback" role="alert">
                        <strong>{{ errors.name[0] }}</strong>
                    </span>
                </div>
            </div>

            <div class="row">
                <div class="large-12 form-col columns">
                    <label>Email Address
                        <input id="email" type="email" class="form-control" name="email" v-model.trim="form.email"  autocomplete="email">
                    </label>
                    <span v-if="errors.email" class="invalid-feedback" role="alert">
                        <strong>{{ errors.email[0] }}</strong>
                    </span>
                </div>
            </div>

            <div class="row">
                <div class="large-12 form-col columns">
                    <label>Password
                        <input id="password" type="password" class="form-control" name="password"  v-model.trim="form.password"  autocomplete="current-password">
                    </label>
                    <span v-if="errors.password" class="invalid-feedback" role="alert">
                        <strong>{{ errors.password[0] }}</strong>
                    </span>
                </div>
            </div>

            <div class="row">
                <div class="large-6 form-col columns">
                    <button type="submit" class="button">
                        Register
                    </button>
                </div>
            </div>
        </form>
    </div>
  </div>
</template>

<script>

export default {

  middleware: ['guest'],

  head(){
    return{
      title: `User administration`
    }
  },

  data(){
    return{
      form:{
        name:'',
        email: '',
        password: '',
      },
      passwordConfirmation: false,
    }
  },

  methods: {
    submit() {
        this.$axios.$post("register", this.form)
            .then(data => {
                // login
                this.$auth.loginWith("local", {
                    data: {
                        email: this.form.email,
                        password: this.form.password
                    }
                });
                this.$router.push({
                path: this.$route.query.redirect || "/home"
              });
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
