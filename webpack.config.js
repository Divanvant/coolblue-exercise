const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { resolve } = require('path');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  target: 'web',
  mode: devMode ? 'development' : 'production',
  entry: ['./src/scripts/main.js', './src/styles/main.scss'],
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/assets',
    filename: 'assets/scripts/bundle.js',
    assetModuleFilename: "assets/images/[name].[ext]"
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(sa|sc)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name][ext]",
        },
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/styles/main.css'
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
          resolve('assets/images/**'),
      ],
      cleanOnceAfterEveryBuildPatterns: [
        resolve('assets/scripts/**'),
        resolve('assets/styles/**'),
    ]
     })
  ],
  devServer: {
    port: 8080,
    liveReload: false,
    hot:true,
    compress: true,
    devMiddleware: {
      index: true,
      serverSideRender: false,
      writeToDisk: true,
    }
  },
};
