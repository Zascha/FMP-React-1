const Webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
const isProduction = require('webpack-mode').isProduction;

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, isProduction ? './app' : './bin'),
    filename: isProduction ? 'index.[chunkhash].js' : 'index.js',
    publicPath: '/'
  },
  devServer: {
    contentBase: path.join(__dirname, isProduction ? './app' : './bin'),
    port: 9000,
    compress: true,
    open: true,
    openPage: 'films',
    hot: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: { loader: "babel-loader" }
      },
      {
        test: /\.s[ac]ss$/i,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                url: false,
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new ExtractTextPlugin({
      filename: isProduction ? 'style.[chunkhash].css' : "style.css"
    }),
    new CopyPlugin([
      { from: './src/sources/*', to: './sources', flatten: true, },
      { from: './src/sources/fonts/*', to: './sources/fonts', flatten: true, },
    ])
  ]
};