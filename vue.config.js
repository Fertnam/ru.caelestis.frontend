let path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.vue', '.js', '.scss'],
      alias: {
        '@': path.resolve('src'),
        '@layouts': path.resolve('src/layouts'),
        '@views': path.resolve('src/views'),
        '@default-views': path.resolve('src/views/default'),
        '@admin-views': path.resolve('src/views/admin'),
        '@components': path.resolve('src/components'),
        '@default-components': path.resolve('src/components/default'),
        '@admin-components': path.resolve('src/admin'),
        '@scss': path.resolve('src/assets/scss'),
        '@scss-blocks': path.resolve('src/assets/scss/blocks'),
        '@scss-utils': path.resolve('src/assets/scss/utils'),
      },
    },
  },
  css: {
    requireModuleExtension: false,
    loaderOptions: {
      sass: {
        additionalData: `@import "@scss-utils";`,
      },
      css: {
        modules: {
          localIdentName: '[hash:base64:8]',
        },
      },
    },
  },
}
