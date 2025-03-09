const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // Set mode to 'development' or 'production'
  entry: './src/index.js', // Ensure this file exists
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    static: './dist',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },


  plugins: [
    new HtmlWebpackPlugin({
      filename : 'index.html',
      template: './src/index.html', 
    }),
  ],

};