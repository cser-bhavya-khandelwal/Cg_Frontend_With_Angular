function calc(op) {
    if (op == '+') {
        return (a, b)=>a + b;
    } 
    else if (op == '-') {
        return (a, b) => a - b;
    } 
    else if (op == '*') {
        return (a, b) => a * b;
    } 
    else if (op == '/') {
        return (a, b) => a / b;
    }
}

const op = calc('-');  
console.log(op(10, 20));