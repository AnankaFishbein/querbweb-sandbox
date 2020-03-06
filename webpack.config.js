module.exports = {
  entry: './querbweb-proto/js/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
    test: /\.(ttf|woff2|woff|eot)$/gi,
    use: [
      {
        loader: 'css-loader',
        options: {
          sourceMap: true
        }
      },
      {
        loader: 'resolve-url-loader'
      },
      {
        loader: 'sass-loader'
      }
    ]
  },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  }
}
