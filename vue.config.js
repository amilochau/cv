/* eslint-disable @typescript-eslint/no-var-requires */

const webpack = require('webpack')
const RobotstxtPlugin = require('./scripts/robotstxt-webpack-plugin/cjs')
const SitemapPlugin = require('./scripts/sitemap-webpack-plugin/cjs')

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
      new SitemapPlugin(),
    ],
  },
  chainWebpack: config => {
    config.plugins.delete('prefetch')
    return config
  },
}
