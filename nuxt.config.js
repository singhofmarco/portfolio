export default {
    buildModules: ['@nuxtjs/tailwindcss'],
    head: {
        title: 'Marco Singhof | Full-stack developer',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {
                hid: 'description',
                name: 'description',
                content: 'Hey, I\'m a full-stack developer creating for the modern web with Laravel, Vue.js and various other state of the art technologies.'
            }
        ],
        link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}]
    }
}