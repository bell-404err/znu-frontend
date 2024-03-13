const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/pages/index.html',
    schedule: './src/pages/schedule.html',
    photo: './src/pages/photo.html',
    news: './src/pages/news.html'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/pages/index.html',
      filename: 'index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/schedule.html',
      filename: 'schedule.html',
      chunks: ['schedule']
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/photo.html',
      filename: 'photo.html',
      chunks: ['photo']
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/news.html',
      filename: 'news.html',
      chunks: ['news']
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/assets/img',
          to: 'assets/img'
        }
      ]
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          }
        ]
      }
    ]
  }
};
