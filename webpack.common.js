const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/index.js'],

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['src', 'node_modules'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        use: [
          {
            options: {
              eslintPath: require.resolve('eslint'),
            },
            loader: require.resolve('eslint-loader'),
          },
        ],
        include: path.resolve('src'),
      },
    ],
  },

  performance: {
    hints: false,
  },

  plugins: [
    new HtmlWebpackPlugin({
      favicon: 'favicon.ico',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
      template: './src/index.html',
    }),
  ],
};
