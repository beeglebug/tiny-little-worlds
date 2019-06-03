const path = require('path')
const webpack = require('webpack')
const packageJson = require('./package.json')

const outputDirectory = path.resolve(__dirname, 'dist')
const nodeModulesDirectory = path.resolve(__dirname, 'node_modules')

module.exports = (env, argv) => {
  const DEV = argv.mode === 'development'
  return {
    entry: {
      player: path.resolve(__dirname, './src/engine/index.js'),
    },
    output: {
      path: outputDirectory,
      filename: `[name].${packageJson.version}.js`,
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
      ],
    },
    plugins: [
      new webpack.HashedModuleIdsPlugin(),
    ],
    devtool: DEV ? 'cheap-module-eval-source-map' : 'none',
  }
}
