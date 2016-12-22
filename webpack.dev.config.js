var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var flexibility = require('postcss-flexibility');

module.exports = {
  entry: [
    // app: [
    'webpack-dev-server/client?http://localhost:8080',
      // 'webpack/hot/dev-server',
      // 'webpack-hot-middleware/client',
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    `${path.resolve(__dirname, 'common')}/app`,
    // ],
  ],
  output: {
    path: '/js/bundle/',
    filename: 'bundle.js',
    publicPath: '/js/bundle/',
    chunkFilename: 'chunk.[name].js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel',
        include: path.resolve(__dirname, 'common'),
        exclude: /node_modules/,
        // query: {
        //   presets: ['react-hmre', "es2015", "stage-0", "react"],
        //   plugins: ["transform-decorators-legacy"],
        // }
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.css|\.scss$/,
        loaders: [
          'style',
          'css',
          'sass?outputStyle=compressed',
          'postcss',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'url-loader?limit=8192&name=../public/img/[name].[ext]',
      },
      {
        test: /\.js?$/,
        loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=react'],
        include: path.resolve(__dirname, 'common'),
        // include: path.join(__dirname, 'common'),
      },
    ],
  },
  postcss: [
    autoprefixer,
    flexibility,
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
    }),
  ],
};


// babelrc
// "plugins": ["babel-plugin-transform-decorators-legacy"],
// "env": {
//     "production": {
//         "sourceMaps": false
//     }
// }
