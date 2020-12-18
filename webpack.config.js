const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        loader: 'ts-loader',
        include: [path.resolve(__dirname, 'src')],
        exclude: [/node_modules/]
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],

  devServer: {
    open: true,
    openPage: "index.html",
    contentBase: path.join(__dirname, "dist"),
    watchContentBase: true,
    port: 8080
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: ["node_modules"]
  }
};
