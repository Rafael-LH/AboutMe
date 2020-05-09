const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {

  let mod = env.NODE_ENV;
  let plugins = []

  plugins.push(
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    })
  );

  if (mod === 'production') {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: 'css/[name].css'
      })
    )
  }

  return {
    mode: mod,
    entry: {
      index: path.resolve(__dirname, './src/index.js')
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/'
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    devServer: {
      port: 9000
    },
    module: {
      rules: [
        // Js Loader
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-transform-runtime']
            }
          }
        },
        //sass loader
        {
          test: /\.scss$/,
          use: [
            mod == 'development' ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
          ]
        },
        //url loader
        {
          test: /\.(jpg|jpeg|gif|png)$/,
          use: {
            loader: 'url-loader'
          }
        },
        // html-loader
        {
          test: /\.html$/,
          use: {
            loader: 'html-loader'
          }
        }
      ]
    },
    plugins
  }
}