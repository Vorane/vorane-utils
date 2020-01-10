const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "utils.js",
    library: "loadscriptAsync",
    libraryTarget: "umd",
    globalObject: "this",
    umdNamedDefine: true
  }
};
