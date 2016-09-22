var path = require('path')
module.exports = {
  global: {
    entry: {
      app: path.resolve(__dirname, '../src-mobile/main.js')
    },
    assetsRoot: path.resolve(__dirname, '../website/mobile'),
    index: path.resolve(__dirname, '../src-mobile/index.html'),
  },
  build: {
    env: '"production"',
    assetsSubDirectory: '',
    assetsPublicPath: '',
    productionSourceMap: true,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: '"development"',
    port: 3000,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    cssSourceMap: false
  }
}