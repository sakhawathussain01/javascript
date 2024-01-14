//-------------------loops----------------------
// In JavaScript, loops are used to execute a block of code repeatedly.

// Example
for (let i = 0; i < 10; i++) {
    const element = i;
}


// Table Using For Loop

for (let xyz = 1; xyz <= 10; xyz++) {
    console.log("table for ",xyz);
    for(let abc =  1; abc <= 10; abc++){
    console.log(`${xyz} * ${abc} = ${abc*xyz}`) 
    }
}



let myArr = ["value1", "value2", "value3", "value4"]

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element)
}