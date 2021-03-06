// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const Webpack = require("webpack");
const dotenv = require("dotenv");

const isProduction = process.env.NODE_ENV == "production";

const config = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "docs"),
  },
  devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "template.html",
    }),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
    },
  },
  optimization: {
    usedExports: true,
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
    // const loadEnv = dotenv.config();
    config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
  } else {
    config.mode = "development";
    const loadEnv = dotenv.config();
    if (loadEnv.error) {
      throw new Error("config load fail");
    }
  }
  console.info(
    "=====BASE64_ACCESS_TOKEN=======",
    process.env.BASE64_ACCESS_TOKEN
  );
  config.plugins.push(
    new Webpack.DefinePlugin({
      BASE64_ACCESS_TOKEN: JSON.stringify(process.env.BASE64_ACCESS_TOKEN),
    })
  );

  return config;
};
