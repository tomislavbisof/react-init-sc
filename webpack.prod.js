const merge = require('webpack-merge');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',

  module: {
    rules: [
      {
        oneOf: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'assets/[name].[hash:8].[ext]',
            },
          },
          {
            test: /\.(js|jsx)$/,
            include: path.resolve('src'),
            loader: require.resolve('babel-loader'),
          },
          {
            exclude: [/\.js$/, /\.html$/, /\.ejs$/, /\.json$/],
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },

  output: {
    filename: 'bundle.[hash:8].js',
    path: path.resolve('dist'),
    publicPath: '',
  },

  plugins: [new CleanWebpackPlugin(['dist'])],
});
