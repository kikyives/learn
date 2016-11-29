var path = require('path');

module.exports = {
	entry: './src/main',

	output: {
		path: path.join(__dirname, './build'),
		filename: '[name].js',
		publicPath: './build/'
	},
    //服务器配置相关，自动刷新
	 devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
    },

    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: 'style!css!postcss'
        }, {
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.less$/,
            loader: 'style!css!postcss!less'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192'
        }, {
            test: /\.html$/,
            loader: 'html-loader'
        }]
    },
    //.vue的配置，需要单独配置
    vue: {
        loaders: {
            css: 'style!css!postcss!less',
            html:'html-loader'
        }
    },

    //转化es5的方法
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },

    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue'],
         // 别名，可以直接使用别名来代表设定的路径以及其他
        alias: {
            //filter: path.join(__dirname, './src/filters'),
            components: path.join(__dirname, './src/views')
        }
    },
    // 开启source-map，webpack有多种source-map，在官网文档可以查到
    devtool: '#source-map',
    watch: true
}