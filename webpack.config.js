const path = require('path');
const webpack = require('webpack');

const env = {
  'process.env.NODE_ENV': JSON.stringify('development')
};

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './app.js',
    vendor: ['react', 'react-dom', 'karet', 'karet.util', 'partial.lenses', 'kefir', 'kefir.atom']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  },
  devServer: {
    overlay: true,
    contentBase: path.resolve(__dirname, './src'),
    hot: true
  },
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{ loader: 'babel-loader' }]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin(env),
    new webpack.HotModuleReplacementPlugin()
  ]
};
