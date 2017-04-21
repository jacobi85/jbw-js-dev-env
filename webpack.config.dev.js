import path from 'path';

export default {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false, //adds quite a lot of noice to the debugger - turn off for production
  entry: [
     path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname + 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
 /* devServer: {
    contentBase: path.resolve(__dirname, 'src')
  },*/
  plugins: [],
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      {test: /(\.css)$/, loaders: ['style', 'css']},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  }
};
