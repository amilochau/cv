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

function writePathAttributes (sitemap, { url, changefreq, lastmod, priority }, languages) {
  if (languages?.length) {
    // Manage languages
    languages.forEach(l1 => {
      const pathAttributes = {
        url: `${l1.base}${url}`.replace(/\/$/, ''),
        lastmod,
        changefreq,
        priority,
        links: [],
      }

      languages.forEach(l2 => {
        pathAttributes.links.push({
          lang: l2.lang,
          url: `${l2.base}${url}`.replace(/\/$/, ''),
        })
      })

      sitemap.write(pathAttributes)
    })
  } else {
    // No language defined
    sitemap.write({
      url,
      lastmod,
      changefreq,
      priority,
    })
  }
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
  languages = [],
} = {}) {
  let options = {
    base,
    paths,
    languages,
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
            writePathAttributes(sitemap, { url: path.url, changefreq: path.changefreq, lastmod: options.lastmod, priority: path.priority }, options.languages)
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
