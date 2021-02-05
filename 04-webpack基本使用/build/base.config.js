const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: './src/main.js',
	output: {
		// 通过node获取绝对路径
		// path: path.resolve(__dirname, 'dist'),
		path: path.resolve(__dirname, '../dist'),
		filename: 'bundle.js',
		// 保证index.html与该文件同级时能够找到该文件夹下的文件
		// publicPath: 'dist/'
	},
	module: {
		rules: [{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.less$/,
				use: [{
					loader: "style-loader"
				}, {
					loader: "css-loader"
				}, {
					loader: "less-loader"
				}]
			},
			{
				// css中通过url使用图片
				test: /\.(png|jpg|gif|jpeg)$/,
				use: [{
					loader: "url-loader",
					options: {
						// 图片大于8k时会使用file-loader
						limit: 8192,
						// 图片名
						name: 'img/[name].[hash:8].[ext]'
					}
				}]
			},
			// {
			// 	// ES6==>ES5
			// 	// 现在大多数浏览器已经支持ES6
			// 	test: /\.js$/,
			// 	// exclude 排除 include 包含
			// 	exclude: /(node_modules|bower_components)/,
			// 	use: [{
			// 		loader: "babel-loader",
			// 		options: {
			// 			presets: ['es2015']
			// 		}
			// 	}]
			// },
			{
				test: /\.vue$/,
				use: ['vue-loader']
			},
		]
	},
	resolve: {
		// 别名
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		},
		// import Cpn from './Cpn.vue';时忽略后缀
		extensions: ['.js', '.css', '.vue']
	},
	plugins: [
		// 版权声明
		new webpack.BannerPlugin('最终版权归Yuki-0505所有'),
		new HtmlWebpackPlugin({
			template: 'index.html'
		}),
		// new UglifyjsWebpackPlugin(),
	],
	// devServer: {
	// 	// 本地服务器
	// 	// 为哪一个文件夹提供本地服务
	// 	contentBase: './dist',
	// 	// 实时刷新
	// 	inline: true,
	// },
}
