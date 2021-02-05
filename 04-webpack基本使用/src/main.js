const {
	sub,
	sum
} = require('./js/mathUtils.js');

console.log(sub(2, 3));
console.log(sum(2, 3));

require('./css/normal.css');

require('./css/special.less');

// 方式一
// import Vue from 'vue';
// const app = new Vue({
// 	el: '#app',
// 	// template将会替换整个#app
// 	template: `
//     <div>
//     	<h2>{{message}}</h2>
// 		</div>
// 	`,
// 	data: {
// 		message: "hello world!",
// 	}
// });

// 方式二
// import Vue from 'vue';
// import App from './vue/app'
// new Vue({
// 	el: "#app",
// 	template: '<App/>',
// 	components: {
// 		App
// 	}
// });

// 方式三
import Vue from 'vue';
import App from './vue/App.vue'
new Vue({
	el: "#app",
	template: '<App/>',
	components: {
		App
	}
});