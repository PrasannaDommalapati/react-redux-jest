const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },

  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },

  devServer: {
    host: 'localhost',
    port: 5000,
    inline: true,
    https: true,
    contentBase: './build',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|jpg|gif|ico)$/,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]'
        }
      },
    ],
  },

  plugins: [
    // new CleanWebpackPlugin(['build']),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
    }),
  ],
};
