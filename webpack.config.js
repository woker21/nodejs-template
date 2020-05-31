const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const TerserPlugin = require('terser-webpack-plugin');

const development = process.env.NODE_ENV === 'development';

// Constant with our paths
const paths = {
  OUTPUT: path.resolve(__dirname, 'build'),
};

module.exports = {
  entry: {
    bundle: './src/index.js',
  },
  target: 'node',
  node: {
    __filename: true,
    __dirname: true,
  },
  output: {
    path: paths.OUTPUT,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    port: 3005,
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        sourceMap: development,
        cache: true,
        parallel: true,
        terserOptions: {
          compress: true,
          ecma: 6,
          mangle: true,
        },
      }),
    ],
  },
  externals: [webpackNodeExternals()],
  mode: process.env.NODE_ENV,
  devtool: development && 'source-map',
};