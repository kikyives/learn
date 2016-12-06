const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('./config/')
const IS_ENV = process.env.NODE_ENV == 'production'

var plugins = [];
if (IS_ENV){//生产环境
	plugins.push(new webpack.DefinePlugin({
		'process.env': {//设置成生产环境
			NODE_ENV: 'production'
		}
	}))
	plugins.push(new webpack.optimize.UglifyJsPlugin({//压缩代码
		compress: {
			warings:false
		}
	}))
}

plugins.push(new HtmlWebpackPlugin({//根据模板插入js、css生成最终HTML
		filename: './index.html'//生成html模板的存放路径，相当于path
		template: './src/template/index.html'//html模板路径
	})
)

module.exports = {
	entry: ['./src/main.js'],//入口文件
	output: {
		publicPath: config.publicPath,//服务器的路径
		path: path.resolve(__dirname + config.publicPath),//编译到app目录
		filename: '[main].js?[hash]'//编译后的文件名加上hash值
	},
	module: {
		loaders: [
			{
				test: /\.js(x)*$/,
				exclude: /^node_modules$/,
				loader: 'babel'
			},
			{
				test: /\.vue$/,
				loader: 'vue'
			},
			{
				test: /\.css$/,
				exclude: /^node_modules$/,
                loader: `style-loader!css-loader!autoprefixer-loader?{ browsers: ['last 100 versions'] }!`
			},
			{
				test: /\.less/,
                exclude: /^node_modules$/,
                loader: `style-loader!css-loader!autoprefixer-loader?{ browsers: ['last 100 versions'] }!less-loader`
			},
			{
				test: /\.(png|jpg)$/,
				exclude: /^node_modules$/,
				loader: 'url?limit=2000&name=[name].[test]'//注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
			},
			{
				test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
                exclude: /^node_modules$/,
                loader: 'file-loader?name=[name].[ext]'
			}
		]
	},
	plugins,
	resolve: {
		extensions: ['', '.jsx', '.js', '.vue']//后缀名自动补齐
		alias: {
			vue: 'vue/dist/vue.js',//webpack打包时，需要设置别名
			store: path.resolve('src/stroe/'),//常用工具方法
		}
	},
	vue: {
		postcss: [
			require('autoprefixer')({
				browsers: ['last 100 versions']
			})
		]
	}
}
