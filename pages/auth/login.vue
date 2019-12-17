<template>
  <div class="container">
      <div class="row">
        <div class="large-12 columns">
        <h1>Login</h1>
        </div>
    </div>

    <div id="Login-form">

        <!--<form method="POST" action="{{ route('login') }}">
            @csrf -->
            <div class="row">
                <div class="large-6 columns">
                    <label>Email Address
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
                        <input id="password" type="password" class="form-control" name="password"  v-model="password" required autocomplete="current-password">
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
                    <input class="form-check-input" type="checkbox" name="remember" id="remember" v-model="remember">

                    <label class="form-check-label" for="remember">
                        Remember Me
                    </label>
                </div>
            </div>

            <div class="row">
                <div class="large-6 columns">
                    <button type="submit" class="button">
                        Login
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
      email: '',
      password: '',
      remember: false,
    }
  }
}
</script>

<style>

</style>
