const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function getPlugins(isDevMode) {
  const plugins = [
    new HtmlWebpackPlugin({
      template: './src/public/index.html',
    }),
  ];

  if (!isDevMode) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: 'style.css',
      }),
    );
  }

  return plugins;
}

module.exports = (env, options) => {
  const isDevMode = options.mode !== 'production';

  return {
    entry: './src/index.jsx',
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
        {
          test: /\.(css|scss)$/,
          use: [
            isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        },
      ],
    },
    devServer: {
      hot: true,
      open: true,
      watchFiles: path.join(__dirname, 'dist/*'),
    },
    plugins: getPlugins(isDevMode),
  };
};
