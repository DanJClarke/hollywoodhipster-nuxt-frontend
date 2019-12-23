<template>
  <nav class="top-bar topbar-responsive">
    <div class="row">
      <div class="top-bar-title">
        <span>
          <button class="menu-icon" @click="toggleMobileMenu()" type="button" ></button>
        </span>
        <nuxt-link to="/" class="topbar-responsive-logo"><img src="/img/logos/hollywood-hipster-logo.svg" alt="Hollywood hipster" title="Hollywood hipster"/></nuxt-link>
      </div>
      <div id="topbar-responsive" :class="['topbar-responsive-links', {'hide-menu': mobileHidden}]">
        <div class="top-bar-right">
          <template v-if="!authenticated">
            <ul class="menu simple vertical medium-horizontal">
              <li>
                <nuxt-link to="/register"> Register </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/login"> Login </nuxt-link>
              </li>
            </ul>
          </template>
          <template v-if="authenticated">
            <ul class="menu simple vertical medium-horizontal">
              <li>
                <a href="#"> Welcome {{ user.name }}</a>
              </li>
              <li>
                <a @click.prevent="logout"> Logout </a>
              </li>
            </ul>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data(){
    return{
      mobileHidden: true,
      navSmall: false,
      yOffset: ''
    }
  },

  created() {
    if (process.browser) {
      window.addEventListener('scroll', this.handleScroll);
    }
  },

  destroyed() {
    if (process.browser) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  },

  mounted(){
      this.handleScroll();
  },

  methods:{

    logout(){
        this.$auth.logout();
    },

    toggleMobileMenu(){
      this.mobileHidden =  !this.mobileHidden;
    },

    handleScroll(){
      if (process.browser) {
        console.log(this.yOffset);
      }
    }
  }
}
</script>


<style lang="scss" scoped>
@import "node_modules/foundation-sites/scss/util/unit";
@import "node_modules/foundation-sites/scss/util/breakpoint";
@import "../assets/css/utilities/variables";

$topbar-responsive-bg: #eee;
$topbar-responsive-animation-type: fade-in;

.topbar-responsive {
  background: $topbar-responsive-bg;
  padding: 0rem 1.5rem;
  position: fixed;
  z-index:10;
  top:10px;
  width: 100%;
  height: 5.3rem;
  color: #444;

  .top-bar-right, .top-bar-left{
    height: 5.3rem;
    position: relative;
  }


  .topbar-responsive-logo {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);

    img{
      height: 110px;
      margin-top: 0px;
      transition: .35s transform cubic-bezier(.29,.72,.51,1.52);

      &:hover{
        transform: scale(1.15);
      }
    }

  }

   .top-bar-title span {
      display: none;
    }

  .menu-icon {
      cursor: pointer;
    }



.menu {
    background: $topbar-responsive-bg;

    @media screen and (min-width: 39.9376em) {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
    }

    li:last-of-type {
      margin-right: 0;
    }

    a {
      color: #444;
      transition: color 0.15s ease-in;

      &:hover {
        color: $secondary-brand-color;
      }

      @media screen and (max-width: 39.9375em) {
        padding: 0.875rem 0;
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
        border: 1px solid #444;
        border-radius: 5px;
        padding: 0.25rem 0.45rem;
        top: 50%;
        transform: translateY(-50%);

        .menu-icon {
          margin-bottom: 4px;

          &:after {
              background: #444;
              box-shadow: 0 7px 0 #444, 0 14px 0 #444;
          }
        }
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
