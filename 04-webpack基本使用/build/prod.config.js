const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const WebpackMerge = require('webpack-merge');
const BaseConfig = require('./base.config');

module.exports = WebpackMerge(BaseConfig, {
	plugins: [
		new UglifyjsWebpackPlugin()
	],
});