<template>
  <div class="container">
     <div class="row">
        <div class="large-12 columns">
            <h1>User Dashboard</h1>
        </div>
    </div>
    <div class="row">
        <div class="large-12 columns">
          <p>Hi {{ user.name }}, welcome to your movie dashboard!</p>

          <ul>
           <!--

            <li>
                <a  href="{{ route('admin.users.index') }}">
                    User management
                </a>
            </li>

            -->
            <li>
                <a href="manage-films/">
                    Manage Films
                </a>
            </li>
            <li>
                <a href="manage-directors/">
                    Manage Directors
                </a>
            </li>
          </ul>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  middleware: ['auth']
}
</script>

<style>

</style>
