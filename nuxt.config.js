import colors from 'vuetify/es5/util/colors'

export default {
  server: {
    port: 8000 // default: 3000
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-plyr', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/dotenv',
    '@nuxtjs/strapi',
    '@nuxtjs/google-analytics',
    'nuxt-build-optimisations'
  ],
  strapi: {
    url: process.env.API_STRAPI_ENDPOINT,
    key: 'authToken',
    expires: '7d',
    entities: ['tickets']
  },
  googleAnalytics: {
    id: 'G-HLP3TR31KJ'
  },

  buildOptimisations: {
    profile: 'experimental'
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    'nuxt-i18n',
    '@nuxtjs/pwa'
  ],

  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.js', dir: 'ltr' },
      { code: 'es', iso: 'es-ES', file: 'es.js', dir: 'ltr' }
    ],
    defaultLocale: 'en',
    langDir: '~/locales/'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend (config) {
      config.node = {
        fs: 'empty'
      }
    }
  }
}
