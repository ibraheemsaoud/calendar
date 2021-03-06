/* eslint-disable */
const path = require('path');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AntdScssThemePlugin = require('antd-scss-theme-plugin');

module.exports = {
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    host: 'localhost',
    port: '3000',
    inline: true,
    compress: true,
    open: true
  },
  mode: 'development',
  module: {
    rules: [{
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          AntdScssThemePlugin.themify('sass-loader'),
        ],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          AntdScssThemePlugin.themify('less-loader'),
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false
    }),
    new HtmlWebpackPlugin({
      title: 'Calendar',
      template: './src/index.html'
    }),
    new AntdScssThemePlugin(path.join(__dirname, 'src', 'theme.scss')),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
        components: path.resolve('./src/components'),
        controls: path.resolve('./src/controls')
    }
  },
};