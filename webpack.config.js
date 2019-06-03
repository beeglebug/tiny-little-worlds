const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const { StatsWriterPlugin } = require('webpack-stats-plugin')
const packageJson = require('./package.json')

const outputDirectory = path.resolve(__dirname, 'dist')
const nodeModulesDirectory = path.resolve(__dirname, 'node_modules')

module.exports = (env, argv) => {
  const DEV = argv.mode === 'development'
  return {
    entry: {
      editor: path.resolve(__dirname, './src/editor/index.js'),
      player: path.resolve(__dirname, './src/engine/index.js'),
      user: path.resolve(__dirname, './src/client/pages/user/index.js'),
    },
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
            'isomorphic-style-loader',
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
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        __VERSION: JSON.stringify(packageJson.version),
        __ENVIRONMENT: JSON.stringify(argv.mode || 'development'),
      }),
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        template: 'src/assets/index.html',
      }),
      new ScriptExtHtmlWebpackPlugin({ defaultAttribute: 'defer' }),
      new CopyPlugin([
        { from: './src/assets', to: '' },
        { from: './src/output', to: '' },
      ]),
      new webpack.HashedModuleIdsPlugin(),
      new StatsWriterPlugin({
        filename: 'stats.json',
      }),
    ],
    devtool: DEV ? 'cheap-module-eval-source-map' : 'none',
    devServer: {
      contentBase: outputDirectory,
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
  }
}
