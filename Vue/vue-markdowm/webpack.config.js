var path = require('path')
var webpack = require('webpakc')  

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: 'dist/',
		filename: 'build.js'
	},
	resolveLoder: {
		root: path.join(__dirname, 'node_modules'),
	},
	module: {
		loaders: [
			{
				test: /\.vue$/,
				loader: 'vue'
			},
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file',
				query: {
					name: '[name].[ext]'
				}
			}
		]
	},
	devServer: {
		historyApiFallback: true,
		noInfo: true
	},
	devtool: '#eval-source-map'
}

if (process.env.NODE_ENV == 'production') {
	module.exports.devtool = '#source-map'

	module.exports.plugins = (module.exports.plugins || []).concat([
			new webpack.EnvironmentPlugin({
				'process.env': {
					NODE_ENV: '"production"'
				}
			}),
			new webpack.optimize.UglifyJsPlugin({
				compress: {
					warnings: false
				}
			})
		])
}

