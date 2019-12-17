<template>
  <div class="container">
     <div class="row">
        <div class="large-12 columns">
            <h1>User Dashboard</h1>
        </div>
    </div>
    <div class="row">
        <div class="large-12 columns">
            <p>Hi {{ user.name }} , welcome to your movie dashboard!</p>
            <!--@if (session('status'))
                <div class="alert alert-success" role="alert">
                    {{ session('status') }}
                </div>
            @endif -->

            <ul>
              <!--@can('edit-users')
                    <li>
                     <nuxt-link to="admin/users"> User management </nuxt-link>
                    </li>
                @endcan -->

                <!--@can('edit-users')
                    <li>
                      <nuxt-link to="manage-films"> Manage Films </nuxt-link>
                    </li>
                @endcan -->

                <!--@can('add-reviews')
                    <li>
                        <nuxt-link to="manage-my-reviews/{{ user.id }}"> Manage my Reviews</nuxt-link>
                        <a  href="/manage-my-reviews/{{ Auth::user()->id }}">
                            Manage my Reviews
                        </a>
                    </li>
                @endcan -->
            </ul>
        </div>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style>

</style>
