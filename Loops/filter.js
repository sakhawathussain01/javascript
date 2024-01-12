// let myarr = ["a","s","d","f"]

// let myarr = [12,23,34,45]
// let myarry =  myarr.filter((fltr) => (fltr>2))

// console.log(myarry)

// newNums = [1,2,3,4,5,6,7,8,9,0]


// const newNums = []

// myNums.forEach( (fltr) => {
//     if (fltr > 4) {
//         newNums.push(fltr)
//     }
// } )
// console.log(newNums);



let laptops = [
    { first: "hp", gen: "7th", ssd: "256gb", ram: "8gb" },
    { second: "dell", gen: "5th", ssd: "512gb", ram: "4gb" },
    { thrid: "lenovo", gen: "3rd", ssd: "256gb", ram: "16gb" },
    { fouth: "sony", gen: "6th", ssd: "128gb", ram: "8gb" },
    { fifth: "acer", gen: "5th", ssd: "1gb", ram: "1tb" }
]

// let userlaptops = laptops.filter((fillter) => (fillter.gen === "3rd"))
// console.log(userlaptops)
let userlaptops = laptops.filter((fillter) => {
    return fillter.gen === "5th" 
})
console.log(userlaptops)