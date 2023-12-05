import { Configuration, webpack } from "webpack";
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BuildOptions } from "./types/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ESLintPlugin from "eslint-webpack-plugin";

export function buildPlugins({ mode, paths }: BuildOptions): Configuration['plugins'] {
  const isDev = mode === 'development';
  const isProd = mode === 'production';

  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({ template: paths.html }),
    new ESLintPlugin({ extensions: ['ts'] })
  ]

  if (isDev) {
    //plugins.push(new webpack.ProgressPlugin())
  }

  if (isProd) {
    plugins.push(new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }))
  }

  return plugins
}