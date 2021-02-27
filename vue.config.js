module.exports = {
  css: {
    requireModuleExtension: false,
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/utils";`,
      },
      css: {
        modules: {
          localIdentName: '[hash:base64:8]',
        },
      },
    },
  },
}
