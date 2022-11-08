const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: './js/main.js',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: [/node_modules/, require.resolve('./index.html')],
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './index.html',
      filename: './index.html',
    }),
  ],
};
