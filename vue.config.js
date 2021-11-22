/* eslint-disable @typescript-eslint/no-var-requires */

const webpack = require('webpack')

module.exports = {
  assetsDir: 'assets',
  transpileDependencies: [
    'vuetify',
    'vuex-persist',
  ],
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en|fr/),
    ],
  },
  chainWebpack: config => {
    config.plugins.delete('prefetch')
  },
}
