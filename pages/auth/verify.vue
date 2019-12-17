<template>
  <div class="container">
    <div class="row">
      <div class="large-12 columns">
        <h1>Register</h1>
      </div>
    </div>
    <div class="row">
      <div class="medium-8 columns">
        <!-- @if (session('resent'))
        <div class="alert alert-success" role="alert">
          A fresh verification link has been sent to your email address.
        </div>
        @endif -->
        Before proceeding, please check your email for a verification link.
        If you did not receive the email,
        <!--<form class="d-inline" method="POST" action="{{ route('verification.resend') }}">
          @csrf -->
          <button type="submit" class="button">>click here to request another</button>
        <!--</form>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  }
}
</script>

<style>

</style>
