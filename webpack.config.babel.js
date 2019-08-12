import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

export default {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle_[hash].min.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "ts-loader"
          },
          {
            loader: "eslint-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "@api": path.resolve(__dirname, "src/api"),
      "@features": path.resolve(__dirname, "src/features"),
      "@lib": path.resolve(__dirname, "src/lib"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@ui": path.resolve(__dirname, "src/ui")
    }
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new CleanWebpackPlugin()
  ]
};
