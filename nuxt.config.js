
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/style.scss'
  ],

  router:{
    middleware: ["clearValidationErrors"]
  },

 /*
  ** aPge Transitions
  */
 pageTransition: {
    name: "fade",
    mode: "out-in"
  },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [ "./plugins/mixins/user.js", "./plugins/axios.js", "./plugins/mixins/validation.js" ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: "http://hollywoodhipster-api.test/api"
  },

  auth:{
    strategies:{
      local: {
        endpoints:{
          login:{
            url: "login",
            method: "post",
            propertyName: "meta.token"
          },
          user:{
            url: "user",
            method: "get",
            propertyName: "data"
          },
          logout:{
            url: "logout",
            method: "post"
          }
        }
      }
    }
  },

  /*
  ** Build configuration
  */
 build: {
  extend(config) {
    for (const rule of config.module.rules) {
      if (rule.use) {
        for (const use of rule.use) {
          if (use.loader === 'sass-loader') {
            use.options = use.options || {};
            use.options.includePaths = ['node_modules/foundation-sites/scss'];
          }
        }
      }
    }
  },
},
}
