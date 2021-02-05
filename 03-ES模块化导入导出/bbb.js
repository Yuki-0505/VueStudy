// 方式一
import {flag, sum} from "./aaa.js";

console.log(flag, sum(1, 3));

// 方式二
import {name, inc, Person} from "./aaa.js";
console.log(name, inc(5));
new Person().run();

// 方式三
import addr from "./aaa.js";
// console.log(addr);
console.log(addr(1,4));

// 统一导入
import * as aaa from "./aaa.js";
console.log(aaa.flag);