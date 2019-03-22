const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const webpack = require('webpack');
let HtmlWebpackPlugin = require("html-webpack-plugin");
let CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
	devServer: {
		contentBase: './build',
		hot: true,
		historyApiFallback: true
	},
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "build"),
		publicPath: "/"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html"
    }),
		new CopyWebpackPlugin([
			{
				from: 'src/assets',
				to: 'assets'
			}
		]),
		new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
					"style-loader",
					"css-loader",
          "sass-loader" //1. Turns sass into css
        ]
      }
    ]
  }
});
