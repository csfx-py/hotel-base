const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Any directories you will be adding code/files into, need to be added to this array so webpack will pick them up
const defaultInclude = path.resolve(__dirname, "src");

module.exports = [
  {
    entry: "./src/react/index.js",
    devtool: "inline-source-map",
    target: "electron-renderer",
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: {
                      esmodules: true,
                    },
                  },
                ],
                "@babel/preset-react",
              ],
            },
          },
          include: defaultInclude,
          exclude: /node_modules/,
        },
        {
          test: /\.(jpe?g|png|gif)$/,
          use: [
            { loader: "file-loader?name=img/[name]__[hash:base64:5].[ext]" },
          ],
          include: defaultInclude,
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          use: [
            { loader: "file-loader?name=font/[name]__[hash:base64:5].[ext]" },
          ],
          include: defaultInclude,
        },
      ],
    },
    plugins: [new HtmlWebpackPlugin()],
    resolve: {
      extensions: [".js"],
    },
  },
  {
    entry: "./src/main.js",
    target: "electron-main",
    output: {
      path: path.join(__dirname, "src", "dist"),
      filename: "index.bundled.js",
    },
    node: {
      __dirname: false,
    },
  },
  {
    entry: "./src/preload.js",
    target: "electron-preload",
    output: {
      path: path.join(__dirname, "src", "dist"),
      filename: "preload.bundled.js",
    },
  },
];
