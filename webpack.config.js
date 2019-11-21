var path = require('path');
module.exports = {
  entry: ["babel-polyfill", path.join(__dirname, "src", "index.js")],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2' // THIS IS THE MOST IMPORTANT LINE! :mindblow: I wasted more than 2 days until realize this was the line most important in all this guide.
  },
  mode: "production",
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            include: path.resolve(__dirname, "src"),
            use: ["babel-loader?cacheDirectory"]
          },
          {
            test: /\.(css|scss)$/,
            use: ["style-loader", "css-loader", "sass-loader"]
          },
    ]
  },
  externals: {
    'react': 'commonjs react' // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
  }
};
