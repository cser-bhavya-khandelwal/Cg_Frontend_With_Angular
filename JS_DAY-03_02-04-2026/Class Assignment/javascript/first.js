//! only declaration

var a;
let b;
// const c; // its not possible

//! initialization
a=20;
b= 'qwer'

//!redeclaration

var a= 12345;
//let b ='hhh'

//! initialization + declaration

let v1 = 123455423;
var v2 = 2392;
const v3 = 324324;

//! reiniatialization

v1 = 'qwerty'
v2 = 'poiuyt'
// v3 = 'qwerty' //!Typeform:Attempeted to assign to readonly property

console.log(v1);
console.log(v2);

// console.log(v3);

console.log(window); // global object in browser RTE
