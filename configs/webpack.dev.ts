import merge from 'webpack-merge';
import { WebpackPluginServe } from 'webpack-plugin-serve';
import common from './webpack.common';

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

if (!(common.output && common.output.path)) {
  throw new Error('output.path not set!');
}

export default merge(common, {
  entry: { bundle: ['webpack-plugin-serve/client'] },
  mode: 'development',
  plugins: [
    new WebpackPluginServe({
      port: 3335,
      historyFallback: true,
      static: [
        common.output.path
      ],
      host: 'localhost'
    })
  ],
  devtool: 'eval-source-map',
  watch: true
});
