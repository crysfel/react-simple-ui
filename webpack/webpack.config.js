var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'react-simple-ui.js',
    library: 'react-simple-ui',
    libraryTarget: 'umd',
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'classnames': 'classnames',
    'prop-types': 'prop-types',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: { loader: 'babel-loader' },
    }, {
      test: /\.scss$/,
      use: [
        { loader: 'style-loader' },
        {
          loader: 'css-loader',
          options: {
            modules: true,
            importLoaders: 1,
            localIdentName: '[hash:base64:5]',
            sourceMap: true,
            minimize: true,
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
            includePaths: ['src'],
          },
        }
      ],
    }]
  },
  resolve: {
    modules: [
      'node_modules',
      'src'
    ],
  },
};
