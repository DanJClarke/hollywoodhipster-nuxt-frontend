<template>
  <div class="container">
      <div class="row">
        <div class="large-12 columns">
        <h1>Register</h1>
        </div>
    </div>

    <div id="Register-form">

        <!--<form method="POST" action="{{ route('register') }}">
            @csrf -->
            <div class="row">
                <div class="large-6 columns">
                    <label>Name
                        <input id="name" type="text" class="form-control" name="name" v-model="name" required autocomplete="name" autofocus>
                    </label>
                    <!--
                    @error('name')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror

                    -->
                </div>
            </div>

            <div class="row">
                <div class="large-6 columns">
                    <label>Email
                        <input id="email" type="email" class="form-control" name="email" v-model="email" required autocomplete="email" autofocus>
                    </label>
                    <!--
                    @error('email')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror

                    -->
                </div>
            </div>

            <div class="row">
                <div class="large-6 columns">
                    <label>Password
                        <input id="password" type="password" class="form-control" name="password" v-model="password" required autocomplete="new-password" autofocus>
                    </label>
                    <!--
                    @error('password')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror

                    -->
                </div>
            </div>

             <div class="row">
                <div class="large-6 columns">
                    <label>Confirm Password
                        <input id="password-confirm" type="password" class="form-control" name="password_confirm" v-model="passwordConfirmation" required autocomplete="new-password" autofocus>
                    </label>
                </div>
            </div>

            <div class="row">
                <div class="large-6 columns">
                    <button type="submit" class="button">
                        Register
                    </button>

                  <!--
                    @if (Route::has('password.request'))
                        <a class="btn btn-link" href="{{ route('password.request') }}">
                            Forgot Your Password
                        </a>
                    @endif
                    -->
                </div>
            </div>
        <!--</form>-->
    </div>
  </div>
</template>

<script>

export default {
  head(){
    return{
      title: `User administration`
    }
  },

  data(){
    return{
      name:'',
      email: '',
      password: '',
      passwordConfirmation: false,
    }
  }
}
</script>

<style>

</style>
