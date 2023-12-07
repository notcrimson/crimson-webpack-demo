import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
  const isDev = options.mode === 'development';

  const cssLoader = {
    // css loader
    test: /\.css$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      "css-loader"
    ],
    exclude: /node_modules/,
  }
  const tsLoader = {
    // ts-loader умеет работать с JSX
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  }

  const babelLoader = {
    test: /\.m?tsx$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
    },
  }

  return [
    cssLoader,
    // tsLoader,
    babelLoader
  ]
}