const Webpack = require("webpack")
const WebpackDevServer = require('webpack-dev-server')
const webpackConfig = require('./webpack.config')
const config = require('./config/')

var server = new WebpackDevServer(compiler,{
	publicPath: config.publicPath,
	stats: { color: true }//显示不同的文件来区分打包文件
	proxy: {
		'*': {//代理服务器
			target: config.target,
			changeOrigin: true
		}
	}
})

server.license(3000, (err) => {
	if (err) {
		console(err);
		return
	}
	console.log('http://localhost:3000' + config.publicPath)
})