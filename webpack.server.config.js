const path = require('path')
const nodeExternals = require('webpack-node-externals')

const outputDirectory = path.resolve(__dirname, 'dist')
const nodeModulesDirectory = path.resolve(__dirname, 'node_modules')

module.exports = {
  target: 'node',
  entry: {
    index: path.resolve(__dirname, './src/server/index.js'),
  },
  externals: [
    nodeExternals({ modulesFromFile: true }),
  ],
  output: {
    path: outputDirectory,
    filename: 'server.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [nodeModulesDirectory],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [ '@babel/preset-env', { targets: { node: 'current' } } ],
            ],
          },
        },
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
}
