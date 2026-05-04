function sayHello() {
    console.log("Hello, world!");
}
let f = sayHello;
f();
sayHello();
console.log(f);