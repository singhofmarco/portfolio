export default {
    buildModules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode'
    ],
    components: true,
    colorMode: {
        classSuffix: ''
    },
    router: {
        middleware: [
            'fathom'
        ]
    },
    head: {
        script: [
            // Fathom Analytics
            {
                // Use your Fathom custom domain if you have one
                src: 'https://cdn.usefathom.com/script.js',
                'data-site': 'MSVSXYRV',
                'defer': true
            }
        ],
    },
    target: 'static'
}