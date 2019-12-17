<template>
<nav class="top-bar topbar-responsive">
  <div class="top-bar-title">
    <span >
      <button class="menu-icon" @click="toggleMobileMenu()" type="button" ></button>
    </span>
    <nuxt-link to="/" class="topbar-responsive-logo"><strong>Site Title</strong></nuxt-link>
  </div>
  <div id="topbar-responsive" :class="['topbar-responsive-links', {'hide-menu': mobileHidden}]">
    <div class="top-bar-right">
      <ul class="menu simple vertical medium-horizontal">
        <li> <nuxt-link to="/"> home </nuxt-link></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Works</a></li>
        <li><a href="#">News</a></li>
        <li>
          <nuxt-link to="/auth/register"> register </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/auth/login"> Login </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</nav>

</template>

<script>
  export default {
    data(){
      return{
        mobileHidden: true
      }
    },

    methods:{
       toggleMobileMenu(){
        this.mobileHidden =  !this.mobileHidden;
        console.log(this.mobileHidden);
      }
    }
  }

</script>


<style lang="scss" scoped>
@import "node_modules/foundation-sites/scss/util/unit";
@import "node_modules/foundation-sites/scss/util/breakpoint";


$topbar-responsive-bg: #2c3840;
$topbar-responsive-animation-type: fade-in;

.topbar-responsive {
  background: $topbar-responsive-bg;
  padding: 1rem 1.5rem;
  position: fixed;
  z-index:10;
  top:0;
  width: 100%;



  .topbar-responsive-logo {
    color: white;
    vertical-align: middle;
  }

   .top-bar-title span {
          display: none;
    }

  .menu-icon {
      cursor: pointer;
    }

.menu {
    background: $topbar-responsive-bg;

    li:last-of-type {
      margin-right: 0;
    }

    a {
      color: white;
      transition: color 0.15s ease-in;

      &:hover {
        color: lighten($topbar-responsive-bg, 60%);
      }

      @media screen and (max-width: 39.9375em) {
        padding: 0.875rem 0;
      }
    }

    .topbar-responsive-button {
      color: white;
      border-color: white;
      border-radius: 5000px;
      transition: color 0.15s ease-in, border-color 0.15s ease-in;

      &:hover {
        color: lighten($topbar-responsive-bg, 60%);
        border-color: lighten($topbar-responsive-bg, 60%);
      }

      @media screen and (max-width: 39.9375em) {
        width: 100%;
        margin: 0.875rem 0;
      }
    }
  }

   @media screen and (max-width: 39.9375em) {
     padding: 0.75rem;

    .top-bar-title {
      position: relative;
      width: 100%;
      height: 50px;

      span {
        position: absolute;
        display: block;
        right: 0;
        border: 1px solid white;
        border-radius: 5px;
        padding: 0.25rem 0.45rem;
        top: 50%;
        transform: translateY(-50%);

        .menu-icon {
          margin-bottom: 4px;
        }
      }

      .topbar-responsive-logo{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
      }
    }
  }
}

@keyframes fadeIn {
  from {
    opacity:0;
  } to {
    opacity:1;
  }
}

@keyframes slideDown {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0%);
  }
}

@include breakpoint(small only) {
  .topbar-responsive-links {
    animation-fill-mode: both;
    animation-duration: 0.5s;
    width: 100%;

    &.hide-menu{
      display: none;
    }

    @if $topbar-responsive-animation-type == slide-down {
      animation: slideDown 1s ease-in;
    } @else if $topbar-responsive-animation-type == fade-in {
      animation: fadeIn 1s ease-in;
    } @else {
      animation: none;
    }
  }
}

</style>
