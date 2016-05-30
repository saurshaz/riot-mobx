var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack/webpack.config')

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(7777, 'localhost', function (err, result) {
  if (err) {
    console.log(err)
  }

  console.log('Listening at localhost:7777')
})
