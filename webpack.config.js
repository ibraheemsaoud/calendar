const path = require('path');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {

  // Use env.<YOUR VARIABLE> here:
  // console.log('NODE_ENV: ', env.NODE_ENV); // 'local'
  // console.log('Production: ', env.production); // true

  return {
    entry: './src/index.ts',
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
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            'file-loader',
          ],
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
        title: 'Output Management',
      }),
    ],
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
  };
};