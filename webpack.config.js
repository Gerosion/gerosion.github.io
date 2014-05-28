var path = require("path");
module.exports = {
  cache: true,
  context: __dirname,
  entry: "./browser/main.js",
  output: {
    path: path.join(__dirname, "assets"),
    publicPath: "assets/",
    filename: "main.js"
  },
  module: {
    loaders: [
      { test: /\.less/,     loader: "style-loader!css-loader!autoprefixer-loader!less-loader" },
      { test: /\.css/,      loader: "style-loader!css-loader!autoprefixer-loader" },
      { test: /\.html/,     loader: "raw-loader" },
      { test: /\.gif/,      loader: "url-loader?limit=10000&minetype=image/gif" },
      { test: /\.jpg/,      loader: "url-loader?limit=10000&minetype=image/jpg" },
      { test: /\.png/,      loader: "url-loader?limit=10000&minetype=image/png" },
      { test: /\.woff$/,    loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.ttf$/,     loader: "file-loader" },
      { test: /\.eot$/,     loader: "file-loader" },
      { test: /\.svg$/,     loader: "url-loader?limit=10000&minetype=image/svg+xml" },
      { test: /\.json$/,    loader: "json-loader" }
    ]
  }
};
