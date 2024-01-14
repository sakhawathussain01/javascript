

// ForIn loop In Object

const myobj = {
    1: "html",
    2: "css",
    3: "js"
}
for (const key in myobj) {
    const element = key;
    console.log(`${key} value is ${myobj[key]}`)
}


// ForIn loop In Array

let programing = ["js", "php", "python"]


for (const key in programing) {
     {
        // console.log(key)
        console.log(programing[key])
        
    }
}

// -------------------------------------------
// const map = new Map()
// map.set('PK', "Pakistan")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// // map.set('PK', "Pakistan")

// for (const key in map) {
//     console.log(key);
// }
// console.log(map["Fr"])