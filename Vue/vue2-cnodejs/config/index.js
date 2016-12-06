module.exports = {
	devTest: {//发布到测试服务器
		remotePath: '/app/',//服务器路径
		host: '111.11.111.111',//ip地址
		user: '',//账号
		pass: '',//密码
		port: 22//端口
	},
	devDist: {//发布生产
		remotePath: '/app/',//服务器路径
		host: '111.11.111.111',//ip地址
		user: '',//账号
		pass: '',//密码
		port: 22//端口
	},
	publicPath: '/app/',//程序服务器的根地址
	target: 'https://cnodejs.org/'//连接服务器地址 数据接口
}