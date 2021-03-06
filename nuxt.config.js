export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'babalolajnr',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Abdulquduus Babalola (babalolajnr) \'s portfolio. I am a fullstack developer and software engineer. ' },
      { hid: 'keywords', name: 'keywords', content: 'babalolajnr, Babalola, Abdulqudduus, Babalola Abdulqudduus, Web developer, developer, mobile developer, software engineer' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/black_yellow_logo.png' },
      { href: 'https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap', rel: 'stylesheet' }
    ]
  },

  target: 'static',

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~assets/css/font-awesome/css/all.min.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxt/content',
    'vue-sweetalert2/nuxt',
    '@nuxtjs/moment'
  ],

  content: {

  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
