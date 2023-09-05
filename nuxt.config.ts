// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [
    {
      path: '~/components', // will get any components nested in let's say /components/test too
      pathPrefix: false,
      extensions: ['.vue'],
    },
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image'
  ],
  css: [
    '@/assets/css/tailwind.css',
  ],
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    },
  },
  devtools: {
    enabled: true
  }
})
