'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

var APP = path.join(__dirname, 'app');
var SERVER = path.join(__dirname, 'server', 'public');

module.exports = {
  context: APP,
  devtool: 'source-map',
  entry: {
    app: ['webpack/hot/dev-server', './index.js'],
    vendor: ['angular', 'angular-route', 'bootstrap/dist/css/bootstrap.css'],
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'ng-annotate!babel?presets[]=es2015!jshint',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream"
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file"
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml"
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.html$/,
        loader: 'raw-loader',
      },
    ],
  },
  output: {
    path: SERVER,
    filename: 'bundle-[name].js',
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
      },
    },
  },
  plugins: [

    /**
     * Separate the app bundle and the third-party bundle
     */
    new webpack.optimize.CommonsChunkPlugin(['app', 'vendor'], 'bundle-[name].js'),

    /**
     * Inject the bundles and CSS styles into the html template
     */
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'body',
    }),

    /**
     * Minify
     */
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),

    /**
     * Support hot reloading for the development server
     */
    new webpack.HotModuleReplacementPlugin(),
  ],
};
