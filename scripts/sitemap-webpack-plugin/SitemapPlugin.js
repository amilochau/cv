// Inspired and simplified from https://github.com/schneidmaster/sitemap-webpack-plugin
/* eslint-disable @typescript-eslint/no-var-requires */

const cosmiconfig = require('cosmiconfig')
const path = require('path')
const RawSource = require('webpack-sources/lib/RawSource')
const { SitemapStream } = require('sitemap')

class SitemapPlugin {
  constructor (options = {}) {
    this.options = Object.assign(
      {
        filePath: 'sitemap.xml',
      },
      options,
    )
  }

  apply (compiler) {
    const plugin = { name: this.constructor.name }

    compiler.hooks.compilation.tap(plugin, compilation => {
      compilation.hooks.additionalAssets.tapPromise(plugin, () =>
        sitemap(this.options)
          .then(sitemap => {
            const source = new RawSource(sitemap)

            if (compilation.emitAsset) {
              compilation.emitAsset(this.options.filePath, source)
            } else {
              // Remove this after drop support for webpack@4
              compilation.assets[this.options.filePath] = source
            }

            return sitemap
          })
          .catch(error => {
            compilation.errors.push(error)
          }),
      )
    })
  }
}

function generatePathAttributes ({ url, changefreq, ...rest }, options) {
  const pathAttributes = {
    ...options,
    ...rest,
    url,
  }

  if (changefreq) {
    pathAttributes.changefreq = changefreq
  }

  return pathAttributes
}

function buildConfig (configFile = null) {
  let searchPath = process.cwd()
  let configPath = null

  if (configFile) {
    searchPath = null
    configPath = path.resolve(process.cwd(), configFile)
  }

  const configExplorer = cosmiconfig('sitemap')
  const searchForConfig = configPath
    ? configExplorer.load(configPath)
    : configExplorer.search(searchPath)

  return searchForConfig.then((result) => {
    if (!result) {
      return {}
    }

    return result
  })
}

function sitemap ({
  base,
  configFile = null,
  paths = [],
  changefreq,
} = {}) {
  let options = {
    base,
    paths,
    changefreq,
    lastmod: new Date().toISOString().split('T')[0],
  }

  return Promise.resolve()
    .then(() =>
      buildConfig(configFile).then(result => {
        // Need avoid this behaviour in next major release
        // Load config file when it is passed or options were set
        options = Object.assign({}, options, result.config)

        return options
      }),
    )
    .then(
      () =>
        new Promise(resolve => {
          const sitemap = new SitemapStream({ hostname: options.base })

          options.paths.forEach(path => {
            sitemap.write(generatePathAttributes(path, options))
          })

          sitemap.end()

          return resolve(sitemap)
        }),
    )
    .then(
      stream => {
        let str = ''
        return new Promise(resolve => {
          stream.on('data', (data) => {
            str += data.toString()
          })

          stream.on('end', () => {
            resolve(str)
          })
        })
      },
    )
}

exports.default = SitemapPlugin
