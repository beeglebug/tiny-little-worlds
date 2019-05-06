const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const outputDirectory = path.resolve(__dirname, 'dist')
const nodeModulesDirectory = path.resolve(__dirname, 'node_modules')
const nodeEnv = process.env.NODE_ENV

module.exports = {
  mode: nodeEnv || 'development',
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: outputDirectory,
    filename: '[name].[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [nodeModulesDirectory],
        loader: 'babel-loader',
      },
      {
        test: /\.(glsl|frag|vert)$/,
        exclude: [nodeModulesDirectory],
        loader: 'webpack-glsl-loader',
      },
      {
        // fonts
        test: /\.(woff(2)?|ttf|eot)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/fonts',
          },
        }],
      },
      {
        // images
        test: /\.(png|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/images',
          },
        }],
      },
      {
        // 3d assets
        test: /\.obj$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/models',
          },
        }],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true,
              localIdentName: '[name]__[local]',
            },
          },
        ],
      },
    ]
  },
  plugins: [
    // new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Tiny First Person',
      meta: { viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      filename: 'index.html',
    }),
    new webpack.HashedModuleIdsPlugin(),
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
  performance: { hints: false }, // we know its big, ok?
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: outputDirectory,
  },
}

