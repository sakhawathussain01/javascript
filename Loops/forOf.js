// --------------------for of loop in Map

const map = new Map()

map.set('pk', "pakistan")
map.set('usa', "united state america")
map.set('fr', "france")
// map.set("pk", "pakistan")


// for (const [key, value] of map) {
//     console.log(key, ":", value)
// }


// -------------Map methods--------
// console.log(console.log(map.get("pk")))
// console.log(console.log(map.delete("fr")))
// // console.log(map);


// -------------------------------------In Array------------


let myarr = [1, 2, 3 ,4, 5]

for (const numbers of myarr) {
    console.log(numbers)
    
}

// --------------------------------------In String--------------

const myname = "sakhavat"

for (const char of myname) {
console.log(char)
    
}