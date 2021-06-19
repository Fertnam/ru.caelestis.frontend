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
            extensions: ['.module.scss'],
            alias: {
                '@': path.resolve('src'),
                '@plugins': path.resolve('src/plugins'),
                '@classes': path.resolve('src/classes'),
                '@models': path.resolve('src/classes/models'),
                '@services': path.resolve('src/classes/services'),
                '@store': path.resolve('src/store'),
                '@layouts': path.resolve('src/layouts'),
                '@default-views': path.resolve('src/views/default'),
                '@admin-views': path.resolve('src/views/admin'),
                '@default-components': path.resolve('src/components/default'),
                '@admin-components': path.resolve('src/components/admin'),
                '@global-components': path.resolve('src/components/global'),
                '@default-data': path.resolve('src/data/default'),
                '@admin-data': path.resolve('src/data/admin'),
                '@global-data': path.resolve('src/data/global'),
                '@scss': path.resolve('src/assets/scss'),
                '@scss-utils': path.resolve('src/assets/scss/utils'),
                '@default-scss-modules': path.resolve(
                    'src/assets/scss/modules/default'
                ),
                '@admin-scss-modules': path.resolve(
                    'src/assets/scss/modules/admin'
                ),
                '@global-scss-modules': path.resolve(
                    'src/assets/scss/modules/global'
                ),
            },
        },
    },
    css: {
        requireModuleExtension: true,
        loaderOptions: {
            sass: {
                prependData: '@import "@scss-utils";',
            },
            css: {
                localsConvention: 'camelCase',
                importLoaders: 3,
                modules: {
                    localIdentName: '[hash:base64:8]',
                    auto: (file) => {
                        return (
                            file.endsWith('.vue') ||
                            file.endsWith('.module.scss')
                        )
                    },
                },
            },
        },
    },
}
