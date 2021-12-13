// Inspired and simplified from https://github.com/itgalaxy/robotstxt-webpack-plugin
/* eslint-disable @typescript-eslint/no-var-requires */

const cosmiconfig = require('cosmiconfig')
const path = require('path')
const RawSource = require('webpack-sources/lib/RawSource')

class RobotstxtPlugin {
  constructor (options = {}) {
    this.options = Object.assign(
      {
        filePath: 'robots.txt',
      },
      options,
    )
  }

  apply (compiler) {
    const plugin = { name: this.constructor.name }

    compiler.hooks.compilation.tap(plugin, compilation => {
      compilation.hooks.additionalAssets.tapPromise(plugin, () => {
        const robotstxtPromise = process.env.NODE_ENVIRONMENT === 'Production'
          ? robotstxt(this.options)
          : robotstxtDefault()

        return robotstxtPromise
          .then(contents => {
            const source = new RawSource(contents)

            if (compilation.emitAsset) {
              compilation.emitAsset(this.options.filePath, source)
            } else {
              // Remove this after drop support for webpack@4
              compilation.assets[this.options.filePath] = source
            }

            return contents
          })
          .catch(error => {
            compilation.errors.push(error)
          })
      })
    })
  }
}

function addLine (name, rule) {
  let contents = ''

  if (rule && Array.isArray(rule) && rule.length > 0) {
    rule.forEach((item) => {
      contents += addLine(name, item)
    })
  } else {
    contents += `${name}:${rule.length > 0 ? ` ${rule}` : ''}\n`
  }

  return contents
}

function generatePoliceItem (item, index) {
  let contents = ''

  if (index !== 0) {
    contents += '\n'
  }

  contents += addLine('User-agent', item.userAgent)

  if (item.allow) {
    contents += addLine('Allow', item.allow)
  }

  if (typeof item.disallow === 'string' || Array.isArray(item.disallow)) {
    contents += addLine('Disallow', item.disallow)
  }

  return contents
}

function buildConfig (configFile = null) {
  let searchPath = process.cwd()
  let configPath = null

  if (configFile) {
    searchPath = null
    configPath = path.resolve(process.cwd(), configFile)
  }

  const configExplorer = cosmiconfig('robots-txt')
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

function robotstxt ({
  configFile = null,
  policy = [
    {
      allow: '/',
      userAgent: '*',
    },
  ],
  sitemap = null,
} = {}) {
  let options = {
    policy,
    sitemap,
  }

  return Promise.resolve()
    .then(() =>
      buildConfig(configFile).then((result) => {
        // Need avoid this behaviour in next major release
        // Load config file when it is passed or options were set
        options = Object.assign({}, options, result.config)

        return options
      }),
    )
    .then(
      () =>
        new Promise((resolve) => {
          let contents = ''

          options.policy.forEach((item, index) => {
            contents += generatePoliceItem(item, index)
          })

          if (options.sitemap) {
            contents += addLine('Sitemap', options.sitemap)
          }

          return resolve(contents)
        }),
    )
}

function robotstxtDefault () {
  const options = {
    policy: [
      {
        disallow: '/',
        userAgent: '*',
      },
    ],
  }

  return Promise.resolve()
    .then(
      () =>
        new Promise((resolve) => {
          let contents = ''

          options.policy.forEach((item, index) => {
            contents += generatePoliceItem(item, index)
          })

          return resolve(contents)
        }),
    )
}

exports.default = RobotstxtPlugin
