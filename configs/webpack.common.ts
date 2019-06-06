import DotEnv from 'dotenv';
import DotEnvPlugin from 'dotenv-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import * as path from 'path';
import tsImportPluginFactory from 'ts-import-plugin';
import webpack from 'webpack';

const root = path.join(__dirname, '..');
DotEnv.config({ path: path.join(root, '.env') });

// use BUST_CACHE if it's explicitly define; otherwise, check if production build
const cacheBust = process.env.BUST_CACHE === undefined
  ? process.env.NODE_ENV === 'production'
  : process.env.BUST_CACHE;

const config: webpack.Configuration = {
  cache: true,
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: {
      '@src': path.join(root, 'src')
    }
  },
  stats: { assetsSort: '!chunks', colors: true },
  entry: {
    bundle: [
      'core-js/stable',
      'regenerator-runtime/runtime',
      path.join(root, 'src', 'index.tsx')
    ]
  },
  output: {
    path: path.join(root, 'out'),
    filename: path.join('static', 'js', `[name].${cacheBust ? '[chunkhash]' : 'lackluster'}.js`),
    publicPath: '/'
  },
  performance: {
    maxAssetSize: 5 * 1024 * 1024,
    maxEntrypointSize: 5 * 1024 * 1024
  },
  plugins: [
    new DotEnvPlugin({ path: path.join(root, '.env') }),
    new HtmlWebpackPlugin({
      cache: true,
      inject: true,
      template: path.join(root, 'public', 'index.html'),
      title: process.env.APP_TITLE
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) })
  ],
  optimization: {
    noEmitOnErrors: true,
    splitChunks: { chunks: 'all' }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        options: {
          configFileName: path.join(root, 'src', 'tsconfig.json'),
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory([
                {
                  libraryName: '@material-ui/core',
                  libraryDirectory: '',
                  camel2DashComponentName: false
                },
                {
                  libraryName: '@material-ui/styles',
                  libraryDirectory: '',
                  camel2DashComponentName: false
                }
              ])
            ]
          })
        }
      }
    ]
  }
};

export default config;
