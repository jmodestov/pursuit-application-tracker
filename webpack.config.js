const path = require('path');

module.exports = {
  // Webpack will use built-in optimization accordingly
  mode: process.env.NODE_ENV,

  // Webpack starts bundlinng at index.js. Recursively builds dependancy graph.
  entry: './client/index.js',

  output: {
    // bundling results will be emitted to this path
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },

  // configuration regarding modules
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.s?css/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },

  // devServer configuration
  devServer: {
    publicPath: '/build/',
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
};

/*
Depencies: "express": "^4.17.1",    "fs-extra": "^9.0.1",    "path": "^0.12.7",    "react": "^16.13.1",    "react-dom": "^16.13.1"
*/
