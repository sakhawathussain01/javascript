// let myarr = [2,3,4,5,6,7,8,9]


// let mynums = myarr.reduce((acc, cv) => {
//     console.log(`acc${acc} and cv${cv}`)
//     return acc+cv
// },0)

// console.log(mynums)

let cars = [
    { make: "Toyota", model: "Camry", year: 2015, price: 15000 },
    { make: "Honda", model: "Civic", year: 2018, price: 18000 },
    { make: "Ford", model: "Mustang", year: 2020, price: 30000 }
  ];

let total = cars.reduce((acc,item) => acc + item.price,0 )

console.log(total)
