// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    modules: ['nuxt-icons'],
    css: ['normalize.css', '~/assets/css/main.scss'],
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1.0',
        },
    },
})
