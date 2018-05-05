const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/root/index.jsx',
  },

  output: {
    filename: 'scripts/[name].js',
    path: path.resolve(__dirname, '../bundle'),
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: 'babel-loader',
      exclude: /node_modules/,
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, '../src'), 'node_modules'],
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'The Blog Pet Project',
    filename: 'index.html',
    chunks: ['index'],
    template: './src/templates/index.html',
    inject: true,
  })],
};
