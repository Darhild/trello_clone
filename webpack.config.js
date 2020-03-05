const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",

    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
          }
        ]
    },

    plugins: [
      new HTMLWebpackPlugin({
        template: "public/index.html"
      })
    ],

    devServer: {
      open: true,
      historyApiFallback: true
    }
};
