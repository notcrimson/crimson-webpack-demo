import webpack from 'webpack';
import { buildWebpack } from './config/build/buildWebpack';
import { BuildMode, BuildPaths } from './config/build/types/types';
import path from 'path';




interface EnvVariables {
  mode: BuildMode;
  port: number;
}


export default (env: EnvVariables) => {
  const paths: BuildPaths = {
    output: path.resolve(__dirname, 'dist'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  }
  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 8080,
    mode: env.mode ?? 'development',
    paths
  })
  return config
};
