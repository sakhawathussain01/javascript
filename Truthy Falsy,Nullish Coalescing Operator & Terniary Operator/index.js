// ==============================Truthy and Falsy Values=============

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values

// "0", 'false', " ", [], {}, function(){}


// ----------------------------------------------------------------------
// Nullish Coalescing Operator (??): null undefined

let name = "sakhavat" ?? null;
console.log(name)

let userName =  "enter your fullName";

let abc = null ??  userName
console.log(abc);

// ===========================================
// Terniary Operator


const marks = 0;

const result  = marks >= 45 ? "passed" :"failed"

console.log(`you ${result} the exams.`)
