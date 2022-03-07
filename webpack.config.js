const dotenv = require('dotenv')
dotenv.config()

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require("path")

module.exports = {
  experiments: {
    asyncWebAssembly: true
  },
  entry: "./src/ui/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[hash].js"
  },
  devServer: {
    proxy: {
        "/api": {
            target: `http://localhost:${process.env.API_PORT}`
        }
    },
    compress: true,
    port: process.env.UI_PORT,
    hot: true,
    static: './dist',
    historyApiFallback: true,
    open: false
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
          test: /\.less$/,
          use: [
              'style-loader',
              'css-loader',
              'less-loader'
          ]
      },
      {
        test:/\.css$/,
        use: [
            { loader: MiniCssExtractPlugin.loader },
            { loader: 'css-loader' }
        ]
      },
      {
        test:/\.scss$/,
        use: [
            { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.png$/,
        exclude: /node_modules/,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/public/index.html",
      filename: "index.html"
    }),
    new MiniCssExtractPlugin()
  ],
  mode: "development",
  devtool: 'inline-source-map',
}