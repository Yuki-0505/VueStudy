const WebpackMerge = require('webpack-merge');
const BaseConfig = require('./base.config');

module.exports = WebpackMerge(BaseConfig, {
	devServer: {
		// 本地服务器
		// 为哪一个文件夹提供本地服务
		contentBase: './dist',
		// 实时刷新
		inline: true,
	}
});