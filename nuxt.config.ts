// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    nitro: {
        prerender: {
            crawlLinks: true,
            routes: ['/', '/404.html'],
        },
    },
    modules: ['nuxt-icons', 'nuxt-gtag'],
    css: ['normalize.css', '~/assets/css/main.scss'],
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1.0',
            link: [{ rel: 'icon', type: 'image/png', href: '/img/favicon/favicon.png' }],
            meta: [
                { name: 'robots', content: 'index, follow' },
                { name: 'author', content: 'Raphael Beekmann' },
                { property: 'og:type', content: 'website' },
                { property: 'og:site_name', content: 'Raphael Beekmann' },
                { property: 'og:locale', content: 'fr_FR' },
                {
                    property: 'og:image',
                    content: 'https://www.raphael-beekmann.com/img/build.svg',
                },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:site', content: '@Asiberus' },
                { name: 'twitter:creator', content: '@Asiberus' },
            ],
        },
    },
    gtag: {
        id: 'G-5RPFG82W9X',
    },
})
