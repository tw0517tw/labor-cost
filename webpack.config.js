var webpack = require("webpack");
var env = process.env.WEBPACK_ENV || "dev";
var entry;

if (env === "dev") {
  entry = {
    Index: [
      "webpack-dev-server/client?http://localhost:3000",
      "webpack/hot/dev-server",
      "./src/Index.jsx"
    ]
  };
} else {
  entry = {
    Index: [
      "./src/Index.jsx"
    ]
  };
}

var config = {

  entry: entry,

  // The resolve.alias object takes require expressions
  // (require('react')) as keys and filepath to actual
  // module as values
  resolve: {
    modulesDirectories: ["node_modules"],
    alias: {},
    extensions: ["", ".js", ".jsx"]
  },

  output: {
    path: "./build/",
    filename: "[name].bundle.js"
  },

  module: {
    noParse: [],
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" }, // use ! to chain loaders
      { test: /\.less$/, loader: "style-loader!css-loader!less-loader" }, // use ! to chain loaders
      { test: /\.(ttf|eot|png|jpg|woff2|woff|svg)($|\?)/, loader: "url-loader?limit=100000" },
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ["react-hot", "babel-loader?stage=0&optional=runtime"] },
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      ENV: JSON.stringify(env)
    })
  ]
};

module.exports = config;
