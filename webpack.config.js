const path = require('path');

module.exports = {
  entry: {
    popup: './src/popup.ts',
    background: './src/background.ts',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    hot: true,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  }
};
