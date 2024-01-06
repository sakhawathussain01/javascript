//--------------- Array Defination-------------//
//Arrays are variables which can hold more than one value.
//arrays can be created by using paranthesis [].
//Format = [    value here    ].
//type of array is object.
let  fruits = [ "banana", "graps", "apple"];
// index     =     0,         1,        2   
let names = ["wakar", "sakhavat","ali"];
let languages = ["css", "html", "js", "php", "python"];
// index     =     0,         1,        2   
console.log(fruits);
// console.log(fruits[2]);


// arrays are muttable

// console.log(fruits [0] = "orange");
// console.log(fruits);

//--------------arrays properties and methods---//


//*length =
// gives the length of array.
// console.log(fruits.length);

//*tostring  method =
//converts array into string.
// console.log(fruits.toString());

//*join method =
// console.log(fruits.join(" and "));

//*push method =
//add an element to end of array.
// console.log(fruits.push("lemon"));
// console.log(fruits);

//-----------------------------//array push method------------------------
// names.push(...languages);   //(languages)
// console.log(names);



//*pop method =
//remove an element from end of array.
// console.log(fruits.pop());
// console.log(fruits);

//*unshift method =
//add an element in the start of array.
// console.log(fruits.unshift("peach"));
// console.log(fruits);

//*shift method =
//remove an element from the start of array.
// console.log(fruits.shift());
// console.log(fruits);

//*delete method =
//array element can be deleted by using delete method.
// delete fruits[1];
// console.log(fruits);

//------------concat method-----------------//
// concat () use to join arrys.
//returns a new array does not change existing array.
// console.log(fruits.concat(names, languages));

// *Slice = 
// The slice() method extracts a section of array and returns it as a new string, without modifying the original string.
// console.log(languages.slice(2,4));
// console.log(names.slice()) 


// *Splice = 
// The splice() method of array is used to add new item to array and it make changes in the original array.
// console.log(fruits.splice(1));
// console.log(languages.splice(2, 2, "react", "node"));
// console.log(languages);
