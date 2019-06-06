import CleanWebpackPlugin from 'clean-webpack-plugin';
import merge from 'webpack-merge';
import common from './webpack.common';

process.env.NODE_ENV = 'production';
process.env.BABEL_ENV = 'production';

export default merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['!.gitkeep']
    })
  ]
});
