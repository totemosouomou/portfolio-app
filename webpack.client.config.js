// webpack.client.config.js
const path = require('path')

module.exports = {
  mode: 'development', // または 'production'
  entry: './src/main.tsx', // クライアントコードのエントリーポイント
  output: {
    path: path.resolve(__dirname, 'server'),
    filename: 'bundle-client.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  ignoreWarnings: [
    {
      module: /express/,
      message:
        /Critical dependency: the request of a dependency is an expression/,
    },
  ],
}
