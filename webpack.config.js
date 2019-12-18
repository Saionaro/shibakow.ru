const Webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const NODE_ENV = process.env.NODE_ENV || "development";
const isDev = NODE_ENV === "development";
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const Path = require("path");

module.exports = {
  mode: isDev ? "development" : "production",
  optimization: {
    namedModules: true,
    minimize: false,
    noEmitOnErrors: true,
    concatenateModules: true
  },
  entry: {
    app: isDev ? "./src/index.dev.js" : "./src/index.js"
  },
  target: "web",
  output: {
    path: Path.resolve(__dirname, "dist"),
    libraryTarget: isDev ? "umd" : "commonjs2",
    filename: "[name].bundle.js"
  },
  devServer: {
    contentBase: "dist",
    compress: true,
    port: 9000
  },
  resolve: {
    extensions: [".js", ".jsx", ".less"]
  },
  watch: isDev,
  devtool: false,
  plugins: [
    isDev && new HtmlWebpackPlugin(),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        "!manifest.json",
        "!keybase.txt",
        "!icons",
        "!img"
      ]
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css"
    }),
    new Webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(NODE_ENV)
      }
    })
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css|\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "less-loader"
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader"
          }
        ]
      }
    ]
  }
};
