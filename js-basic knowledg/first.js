//------------------- firt  day ---------
// variables and console
let fulName="Sakhavat Hossain";//stirng
let age = 20;//num
let price = 100;//num
let x = null;//null
let y = undefined;//undefind
let isfollow = true;//boolien
console.log(fulName);
ocnsole.log(age);
console.log(price);
console.log(x)
console.log(y)
console.log(isfollow)


//--------objects------------//
const student = {
    fullName: 'Sakhavat Hossain',
    age:20,
    gpa:4.3,
    isPass:true,
};
console.log(student)
console.log(student["isPass"])
console.log(student.isPass)
student["age"] = student["age"] + 1;
console.log(student["gpa"]);
////------------practice section-------
const profile = {
    fullName:"Sakhavat_hossain",
    followers: 340,
    following: 20,
    isFollow: false,
};
console.log(profile);

//------------------ 2nd day ----------

//---------------------arthematic operators-------

let a = 5;
let b = 2;
console.log("a = ", a,"& b = ",b);
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);        //reminder
console.log("a ** b =", a ** b);     //exponant


// --------------------comparision operators--------

// let a = 5;
// let b = "5";
console.log("a == b", a==b);  //equal to
console.log("a != b", a!=b);  //not equal to
console.log("a === b", a===b);  //equal to and type
console.log("a !== b", a!==b);   //not equal to and type

// ----------------------logical operators----------

// let a = 6;
// let b = 5;
// ------------And operator--------
//---only true if both two conditions are true----
let cond1 = a > b;
let cond2 = a === 6;      
// console.log("cond1 && cond2=",cond1 && cond2); //true


//----------Or operator---------
//--- true if any one of two conditions are true----
// let a = 6;
// let b = 5;

// let cond1 = a > b;
// let cond2 = a !=6;
console.log("cond1 || cond2 =",cond1 || cond2) //true

//----------Not  operator---------
//---  if true then gives false, if  false then gives true----
// let a = 6;
// let b = 5;

// let cond1 = a > b;
// let cond2 = a !=6;
console.log("!(6 >5) =", !(6 > 5)) //false


// ---------------Conditional statement------

// 1*-------If statement------------



// -----------------------example 1-----
// let age = 18;
// if(age >= 14){
//     console.log("you can vote");
// }
// if(age < 14){
//     console.log("you cannot vote");
// }

// -----------------------example 2-----

let mode = "light";
let color;


if(mode === "dark"){
    color = "black"
}
if(mode === "light"){
    color = "white"
}
console.log (color);

// 1*------------if else and else statement-------

// let age = 10;

// if (age === 18){
//     console.log("Vote");
// }
//  else if(age === 60){
//     console.log("please enter valid information");
// }
//  else{
//     console.log("Not Vote");
// }


//--------------------- pratice section----------

let num = prompt("please enter number")

if(num % 5===0){
    console.log(num,"is multiple of 5");
}
else if(num % 2===0){
    console.log(num,"is multiple of 2")
}
else if(num % 3===0){
    console.log(num,"is multiple of 3")
}
else{
    console.log(num,"is not multiple of 5");
}
console.log("hello world");

//------------------ practice 2 if and else if-------
let score = prompt("enter your score(0-100)");
let grade;

if(score >= 90 && score <= 100){
    grade = "A";
} else if(score >= 70 && score <= 89){
    grade = "B";
} else if(score >= 60 && score <= 69){
    grade = "C";
} else if(score >= 50 && score <= 59){
    grade = "D";
} else if(score >= 0 && score <= 49){
    grade = "F";
}
// console.log("your grade is",grade);

//-------------------- 3rd day 19 nov-------

//---------------------- loops--------------

//--------------- for loop--------------
for (let cont = 1; cont <= 100; cont++){
    console.log("sakhavat husssain");
}
let sum = 0;
let n = 1;
for (i = 1 ;i <=100; i++){
    n = n + i; 
}
// console.log(n);
//----------------- while loop--------------
let i = 1;
while(i <= 10){
    console.log("Apna Colledge");
    i++;
}
//-------------------- do while loop----------
// let i = 1;
// do{
//     console.log("Apna Colledge");
//     i++;
// }while(i <= 5);


//--------------------- practice portion----------
//-----------------q1--------------------------------
for (let num = 0; num <=100; num++){
    if(num % 2 == 0){
console.log("num = ", num);
    }
}
//---------------------q2---------------------------
let gamenum = 25;

let usernum = prompt("enter your number :");
while(usernum != gamenum){
   usernum = prompt("enter your number again :");
}
console.log("congratulation you enter right number.");


//---------------------- Day 3--------------
//-------------------- arrays----------
let marks = [95 ,82, 73, 62, 36];
console.log(marks);
let names = ["sakhavat", "waqar"];
console.log(names);
//-----------practice section----------
// let fulName = prompt('enter your full name without spaces');

// let username = '@' + fulName + fulName.length;
// console.log(username) ;

//----------------------------Day 4 -------------
//-----------------Arrays in Js-------------
let cities = ['lahore','islamabad','karachi','gilgit' ]

// for(let city of cities){
//     console.log(city.toUpperCase());
// }
//---------------------- pratice section-----------
// let marks = [92,84,76,69,55,36];
// let sum = 0;
// for(let val of marks){
//     sum += val;
// }
// let avg = sum/marks.length;
// console.log(avg);
// ----------------------Q2-----------
// let price = [300,480,520.678,900];
// for(let i = 0; i <price.length; i++){
// let offer = price[i]/10;
// price[i] -= offer;
// }

// console.log(price);

