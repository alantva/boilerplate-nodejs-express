const path = require('path')
const Dotenv = require('dotenv-webpack')
const NodeExternals = require('webpack-node-externals')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
	devtool: 'eval',
	entry: {
		server: path.join(__dirname, 'src', 'app.js'),
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	target: 'node',
	node: {
		__dirname: false,
		__filename: false,
	},
	externals: [NodeExternals()],
	plugins: [new Dotenv()],
	optimization: {
		minimizer: [new UglifyJsPlugin()],
	},
	module: {
		rules: [
			{
				exclude: /node_modules/,
			},
		],
	},
}
