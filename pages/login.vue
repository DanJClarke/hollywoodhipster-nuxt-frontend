<template>
  <div class="container medium-8 medium-offset-2 large-6 large-offset-3 columns">
    <div class="row">
        <div class="large-12 columns">
          <h1>Login</h1>
        </div>
    </div>
    <div id="Login-form">
      <form @submit.prevent="submit">
        <div class="row">
          <div class="large-12 form-col columns">
            <label>Email Address
              <input id="email" type="email" class="form-control" name="email" v-model.trim="form.email"  autocomplete="email" autofocus>
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
              Login
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
        email: '',
        password: '',
      }
    }
  },

  methods: {
		submit() {
			this.$auth.loginWith("local", {
					data: {
						email: this.form.email,
						password: this.form.password
					}
				})
				.then(data => {
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
