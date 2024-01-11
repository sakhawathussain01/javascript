// ---------------Control Flow-------------------
// if (condition) {
// code to execute if condition is true
//   } else {
// code to execute if condition is false
//   }

//   Example

let number = 200;
if (number > 0) {
    // console.log("The number is positive");
} else {
    // console.log("The number is negative or zero");
}


// ------------------------------------------------
const userLoggedIn = true
const debitCard = false
const loggedInFromGoogle = false
const loggedInFromEmail = true

// and
if (userLoggedIn && loggedInFromEmail) {
    // console.log("if both conditions are true then code run.")
} else {
    // console.log("if one condition is false then code not run.")
}

// or
if (userLoggedIn || debitCard) {
    // console.log("if one of both condition is true then code run.")
} else {
    // console.log("if both condition are false then code not run.")
}

// ---------------------------------if else if-------------------------------

let age = 20;
if (age < 15) {
    // console.log("you can drive.");
}else if(age >15){
    // console.log("you cant drive.");
}
else {
    // console.log("please enter valid information.")
}

// -------------------------------Switch ------------------

let a = 2;
switch (a) {
  case 1:
    a = 'one';
    break;
  case 2:
    a = 'two';
    break;
  default:
    a = 'not found';
    break;
}
console.log(`The value is ${a}`);
