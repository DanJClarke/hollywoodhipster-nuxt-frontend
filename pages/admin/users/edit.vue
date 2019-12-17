<template>
  <div class="row container">
        <div class="large-12 columns">
            <h1>Edit User {{ user.name }}</h1>
            <!--<form action="{{ route('admin.users.update', $user) }}" method="POST">
                @csrf
                @method('PATCH') -->
                <div class="row">

                    <div class="large-6 columns">
                        <label for="email">Name</label>
                        <input id="name" type="text" class="form-control" name="name" v-model="username" required autofocus>
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
                        <label for="email">Email</label>
                        <input id="email" type="email" class="form-control" name="email" v-model="email" required autocomplete="email" autofocus>

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
                       <label for="roles">Roles</label>
                            <span v-for="role in roles" class="role">
                                <!-- <input :id="`role ${ role.id }`" name="roles[]" type="checkbox" :value="role.id"
                                    @if ($user->roles->pluck('id')->contains($role->id)) checked @endif
                                > -->
                                <label :for="`role${ role.id }`">{{ role.name }}</label>
                            </span>
                    </div>
                </div>
                <div class="row">
                    <div class="large-12 columns">
                        <button class="button" name="submit" type="submit">Update</button>
                    </div>
                </div>
            <!-- </form> -->
        </div>
    </div>
</template>

<script>

export default {
  head(){
    return{
      title: `Edit User role`
    }
  },

  data(){
    return{
      username:'',
      email: ''
    }
  }
}
</script>

<style>

</style>
