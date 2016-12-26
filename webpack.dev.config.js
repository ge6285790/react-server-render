var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var flexibility = require('postcss-flexibility');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    'babel-polyfill',
    `${path.resolve(__dirname, 'common')}/main`,
  ],
  output: {
    path: '/asset/js/bundle/',
    filename: 'bundle.js',
    publicPath: '/asset/js/bundle/',
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
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015,presets[]=stage-0'], //stage-0 use for class static needsApi
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
