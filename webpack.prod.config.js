const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
// import autoprefixer from 'autoprefixer';
// import flexibility from 'postcss-flexibility';

module.exports = {
  entry: [
    'babel-polyfill',
    `${path.resolve(__dirname, 'common')}/main`,
  ],
  output: {
    // path: '/asset/js/bundle/',
    path: path.resolve(__dirname, 'public') + '/asset/js/bundle/',
    filename: 'bundle.js',
    publicPath: '/asset/js/bundle/',
    chunkFilename: 'chunk.[name].js',
    // sourceMapFilename: '[name].map',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      common: './common/',
    },
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, 'common')],
        exclude: /node_modules/,
      },
      {
        test: /\.css|\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader?outputStyle=compressed',
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('precss'),
                  require('autoprefixer'),
                ];
              },
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'url-loader?limit=8192&name=../public/img/[name].[ext]',
      },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new ExtractTextPlugin({
      filename: './asset/css/bundle/bundle.min.css',
      allChunks: false,
    }),
  ],
};
