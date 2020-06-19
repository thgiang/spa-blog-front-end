export default {
  router: {
    middleware: ['auth', 'get_categories'],
    linkActiveClass: 'active-link'
  },
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', 'href': 'https://fonts.googleapis.com/css2?family=Roboto+Condensed'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {color: 'green', height: '5px'},
  /*
  ** Global CSS
  */
  css: [
    'assets/css/style.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vue-notifications.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
  ],
  axios: {
    // proxyHeaders: false
    baseURL: 'http://127.0.0.1:8000/',
    'Access-Control-Allow-Origin': '*',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/api/auth/login', method: 'post', propertyName: 'user_info.api_token' },
          logout: { url: '/api/auth/logout', method: 'get' },
          user: { url: '/api/auth/user', method: 'get', propertyName: 'user_info' }
        },
        tokenRequired: true,
        tokenType: 'bearer',
        globalToken: true,
        autoFetchUser: true
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
