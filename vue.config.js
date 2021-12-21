/* eslint-disable @typescript-eslint/no-var-requires */

const webpack = require('webpack')
const SeoWebpackPlugin = require('@amilochau/seo-webpack-plugin').default

module.exports = {
  transpileDependencies: [
    'vuetify',
    'vuex-persist',
  ],
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en|fr/),
      new SeoWebpackPlugin({
        disableSeoCondition: () => process.env.NODE_ENVIRONMENT !== 'Production',
      }),
    ],
  },
  chainWebpack: config => {
    config.plugins.delete('prefetch')
    return config
  },
}
