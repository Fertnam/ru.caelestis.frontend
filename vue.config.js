const path = require('path')

module.exports = {
    configureWebpack: {
        optimization: {
            splitChunks: {
                chunks: 'all',
                maxInitialRequests: Infinity,
                minSize: 0,
            },
        },
        resolve: {
            alias: {
                '@': path.resolve('src'),
                '@scss': path.resolve('src/assets/scss'),
            },
        },
    },
    css: {
        requireModuleExtension: true,
        loaderOptions: {
            sass: {
                prependData: '@import "@scss/utils";',
            },
            css: {
                localsConvention: 'camelCase',
                importLoaders: 3,
                modules: {
                    localIdentName: '[hash:base64:8]',
                },
            },
        },
    },
}
