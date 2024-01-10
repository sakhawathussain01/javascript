// --------------------Arrow Function And This Key Word---------------------


// this key word---------------------
// let user = {
//     fullName: "aly",
//     class: 12,
//     message: function () {
//         console.log(`welcome to website ${this.fullName}`)
//     }
// }
// user.message()
// user.fullName = "sakhavat"
// user.message()

// -----------------------------Arrow Function


// let simplearrowfunct = (color) => {
//     color = "black"
    // return color
    // console.log(this.color)

// }
// console.log(simplearrowfunct())

// ----Explicit Return Method =====------------

// let sum = (number1, number2) => {

//     return number1 + number2
// }

// console.log(sum(67, 57))
// ----Implicit Return Method =====------------


// let addtwonum = (number1, number2) => number1 + number2

// console.log(sum(644, 4858))

// let addtwonums = (number1, number2) => (number1 + number2)

// console.log(sum(101010, 4858))



    // ------------- Immediately Invoke Function Expression (IFFE)

    // (function abc() {
    //     console.log("hello js");
    // })();

// --------------Example

// ( (name) => {
//     console.log(`my name ${name}`);
// })("sakhavat")


