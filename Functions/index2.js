// ---------------------------------Function 2nd Class---------------------------------



// -----------------rest opreator------------------
function myfunction(value1, value3, ...number) {

    return number
}

// console.log(myfunction(100,200,300,400,500));
// -------------------------------------------------------------------

let userName = {
    fullName: "sakhavat",
    age: 20
}


function anyfunt(myfunct1) {
    console.log(`fullname is ${myfunct1.fullName} and age is ${myfunct1.age}`)
}

// anyfunt(userName)
// -------------------------------------------------------------
// console.log(
//     {
//         fullName: "sakhavat",
//         age: 30
//     }
// )

let languages = ["html", "css", "js", "react"]


function funName(myfunct2) {
    console.log(` ${myfunct2[2]} is programing language.`)
}
// funName(languages)