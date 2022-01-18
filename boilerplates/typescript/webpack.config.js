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
    entry: './src/Index.tsx',
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'bundle.js',
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: 'source-map',
    resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'ts-loader',
            },
          ],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
        {
          enforce: 'pre',
          test: /\.js$/,
          loader: 'source-map-loader',
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
