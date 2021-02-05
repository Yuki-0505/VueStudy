var flag = true;
var sum = function (a, b) {
    return a + b;
}

// 方式一
export {
    flag,
    sum
}

// 方式二
export var name = "yuki";
export function inc(n) {
    return n + 1;
}
export class Person {
    run() {
        console.log("running");
    }
}

// 方式三
// export default 仅可使用一次,导入时可重命名
// const address = "localhost";
// export default address;

export default function(a, b) {
    return a + b;
}