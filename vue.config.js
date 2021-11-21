/* eslint-disable @typescript-eslint/no-var-requires */

const webpack = require('webpack')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

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
      new VuetifyLoaderPlugin(),
    ],
  },
  chainWebpack: config => {
    config.plugins.delete('prefetch')
  },
}
