var path = require('path')
var webpack = require('webpack')
var host = process.env.HOST || 'localhost'
var port = 8098 || parseInt(process.env.PORT, 10) // todo :: rm hardcoding
// postcss plugins
// var cssimport = require('postcss-import')
// var customProperties = require('postcss-custom-properties')
// var autoprefixer = require('autoprefixer-core')
// var csswring = require('csswring')
// var cssnested = require('postcss-nested')

module.exports = {
  target: 'web',
  devtool: 'cheap-module-eval-source-map',
  entry: {
    'main': [
      // 'webpack/hot/dev-server/app/config/main.js',
      'webpack-dev-server/client?http://' + host + ':' + port + '/main.js', // WebpackDevServer host and port
      'webpack/hot/dev-server?http://' + host + ':' + port + '/main.js', // WebpackDevServer host and port
      'webpack-hot-middleware/client?path=http://' + host + ':' + port + '/main.js',
      './client/config/main.js'

    ]
  },

  debug: true,
  output: {
    path: './dist',
    filename: 'main.js',
    publicPath: 'http://' + host + ':' + port + '/'
  },
  module: {
    preLoaders: [{
      test: /\.js|\.html$/,
      exclude: /node_modules/,
      include: /client/,
      loader: 'riotjs-loader',
      presets: ['es2015', 'stage-0']
    }],
    loaders: [{
      test: /\.js|\.html$/,
      exclude: /node_modules/,
      include: /client/,
      loader: 'riotjs-loader',
      presets: ['es2015', 'stage-0']
    }, {
      test: /\.js|\.html$/,
      exclude: /node_modules/,
      include: /client/,
      loader: 'babel-loader',
      presets: ['es2015', 'stage-0']
    // }, // Font and images
    //   { test: /\.((woff2?|svg)(\?v=[0-9]\.[0-9]\.[0-9]))|(woff2?|svg|jpe?g|png|gif|ico)$/, loader: 'url?limit=10000' },
    //   { test: /\.((ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9]))|(ttf|eot)$/, loader: 'file' }, {
    //     test: /\.css$/,
    //     loader: 'style-loader!css-loader!postcss-loader'
    }]
  },
  resolve: {
    extensions: ['', '.react.js', '.js', '.jsx', '.scss'],
    modulesDirectories: [
      'source', 'node_modules'
    ]
  },
  // postcss: [cssimport, cssnested, customProperties, autoprefixer, csswring],
  plugins: [
    // extract inline css from modules into separate files
    new webpack.HotModuleReplacementPlugin(),
    // hot reload
    new webpack.IgnorePlugin(/\.json$/),
    new webpack.DefinePlugin({
      __DEVELOPMENT__: true,
      __DEVTOOLS__: true
    }),
    new webpack.optimize.CommonsChunkPlugin('main', 'main.js'),
  // new ExtractTextPlugin("styles/main.css"),
  // new webpack.optimize.UglifyJsPlugin(),
  // new webpack.ProvidePlugin({
  //   riot: 'riot'
  // })
  ],
  progress: true,
// postcss: [
//   require('postcss-import')({ addDependencyTo: webpack }),
//   require('precss')(),
//   require('autoprefixer')({ browsers: 'last 2 versions' })
// ]
}
