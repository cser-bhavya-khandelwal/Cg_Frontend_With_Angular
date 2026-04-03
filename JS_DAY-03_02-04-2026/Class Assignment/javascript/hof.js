
function calculator(a, b, opn) {
    return operation(a, b);
}
function add(x, y) {
    return x + y;
}
function subtract(x, y) {
    return x - y;
}
function multiply(x, y) {
    return x * y;
}
function divide(x, y) {
    return x / y;
}
console.log(calculator(10, 5, add));       
console.log(calculator(10, 5, subtract));  
console.log(calculator(10, 5, multiply));  
console.log(calculator(10, 5, divide));  