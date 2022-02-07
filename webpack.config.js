const webpack = require('webpack');
const path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  entry: ['./src/js/index.js', './src/css/main.scss'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: false
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin()],
  
  devServer: {
    static: {
        directory: path.resolve(__dirname)
    }
}
};

module.exports = config;