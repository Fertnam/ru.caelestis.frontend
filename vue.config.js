let path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.vue', '.js', 'json', '.scss', '.module.scss'],
      alias: {
        '@': path.resolve('src'),
        '@plugins': path.resolve('src/plugins'),
        '@layouts': path.resolve('src/layouts'),
        '@default-views': path.resolve('src/views/default'),
        '@admin-views': path.resolve('src/views/admin'),
        '@default-components': path.resolve('src/components/default'),
        '@admin-components': path.resolve('src/admin'),
        '@global-components': path.resolve('src/global'),
        '@scss': path.resolve('src/assets/scss'),
        '@scss-utils': path.resolve('src/assets/scss/utils'),
        '@default-scss-modules': path.resolve(
          'src/assets/scss/modules/default'
        ),
        '@admin-scss-modules': path.resolve('src/assets/scss/modules/admin'),
        '@global-scss-modules': path.resolve('src/assets/scss/modules/global'),
        '@default-data': path.resolve('src/assets/data/default'),
        '@admin-data': path.resolve('src/assets/data/admin'),
        '@global-data': path.resolve('src/assets/data/global'),
      },
    },
  },
  css: {
    requireModuleExtension: true,
    loaderOptions: {
      sass: {
        additionalData: '@import "@scss-utils";',
      },
      css: {
        modules: {
          localIdentName: '[hash:base64:8]',
          auto: (file) => {
            return file.endsWith('.vue') || file.endsWith('.module.scss')
          },
        },
      },
    },
  },
}
