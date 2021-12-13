/* eslint-disable @typescript-eslint/no-var-requires */

const webpack = require('webpack')
const RobotstxtPlugin = require('./scripts/robotstxt-webpack-plugin/cjs')

module.exports = {
  transpileDependencies: [
    'vuetify',
    'vuex-persist',
  ],
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en|fr/),
      new RobotstxtPlugin(),
    ],
  },
  chainWebpack: config => {
    config.plugins.delete('prefetch')
    return config
  },
}
