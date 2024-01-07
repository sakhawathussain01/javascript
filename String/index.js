
//---------String Defination---------//
//strings are used to store taxtual data.
//strings can be created by using both single and double quotes.
//format = "text here" or 'text here'.
let fullName = "sakhvat hussain";
console.log(fullName);

// template literal = 
//template literal use backtics insted of quotes to define a String.
//we can use quotes inside backtics.
let name = `Sakhavat "hussain"`
console.log(name);


//concatination = 
//we can add variable, strings  etc . //--(+ operator)
let name1 = "sakhavat";
let name2 = "waqar";
let name3 = "irfan";
console.log(name1 + " " + name2 +" " + name3);

//string interpolation = 
//we can insert variable directly in template.This is called string interpolation.
let myName = "Sakhavat";
console.log( ` my name is ${myName}.` );


//--------------string properties and methods---//

//*length =
// gives the length of string.
console.log(fullName.length);

//*touppercase = 
//the toUpperCase() method of String change string to capital letters and give new string.
console.log(fullName.toUpperCase());

//*tolowercase = 
//the toLowerCase() method of String change string to small letters and give new string.
console.log(fullName.toLowerCase());

// *Slice = 
// The slice() method of String values extracts a section of string and returns it as a new string, without modifying the original string.
console.log(fullName.slice(2,4));
console.log(fullName.slice(4)) // print vat ,4 to end

//*Replace = 
//The replace() method of String replace the part of string.
console.log(fullName.replace("hussain",'hossain'))

//*Concat = 
//The concat() method of String is  used to add or combine two or more strings.
let firstName = "Sakhavat";
let lastName ="Hossain";
console.log(firstName. concat(lastName , "19" ));    //even we can used + operator.

//*Trim = 
//The trim() method of String is used remove white spaces.
let course = "     web development    ";
console.log(course);
console.log(course.trim());

//*charat = 
//The charat() method of String gives the charat a given index no in the string.
let language = "javascript";
console.log(language.charAt(2));
console.log(name[3]);


//*indexof = 
//The indexof() method of String gives the index no of charat in the string.
// let language = "javascript";
console.log(language.indexOf("v"));

const gameName =  new String('SAKHAVAT hussain')
 const newString =  gameName.substring(0, 4)

 console.log(gameName.slice(2,4));
 console.log(newString );
 console.log('slice', gameName);
 console.log(gameName.split("-"));
 console.log(gameName.includes('hussain'));
 
