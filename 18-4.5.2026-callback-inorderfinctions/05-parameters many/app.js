function add(a, b){
    return a + b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function subtract(a, b){
    return a - b;
}
function f(a, b, callback1, callback2){
    return callback1(a, b) + callback2(a, b);
}
function calculate(a, b, callback1, callback2){
    return callback1(a, b) + callback2(a, b);
}

console.log(calculate(10, 5, add, multiply));
console.log(calculate(10, 5, multiply, divide));
console.log(calculate(10, 5, divide, subtract));
console.log(calculate(10, 5, subtract, add));