//-----------------Object defenition-------------------//
// In JavaScript, an object is a data type that represents a collection of properties and methods. A property is a named value, and a method is a function that is associated with an object.


//     methods of creating object  //
// *1  //object literas method      //

const person = {
    firstName: "sakhavat",
    lastName: "hussain",
    age: 20,
    eyeColor: "black"
};
//   console.log(person);


//--------------objects properties and methods---//

//------------two methods to get key in object---//
//-----------------------1------------------//

// console.log(person.age);

//---------------------2-------------------//

// console.log(person["age"]);



// objects are muttable

// person.eyeColor = "blue";
// console.log(person);

//we can add function in object.
// person.user = function() {
// console.log ("hello js user");
// }

// person.user1 = function() {
// console.log (`hello js user, ${this.firstName}`);
// }
// console.log(person.user());
// console.log(person.user1());
// console.log(person)



//---------------freez method-----------//
//the  object is frozen using the Object.freeze() method. This means that the properties of the person object cannot be modified.

// Object.freeze(person);
// person.eyeColor = "brown";
// console.log(person);


//-----------symbol------//
// Symbols are often used to add unique property keys to an object that won’t collide with keys any other code might add to the object.
// const mySymbol = Symbol("mySymbol");
// const myObject = {
//     [mySymbol]: "Hello, world!"
//   };

//   console.log(myObject[mySymbol]);

const user = {}
user.name = "ali"
user.age = "24"
user.isloggin = "false"

// console.log(user);

const firstUser = {
    email: "abc@email.com",
    username: {
        userfullname: {
            firstName: "aly",
            lastName: "khan"
        }

    }
}
// console.log(firstUser.username.userfullname.lastName);


const address = {
    street: "123 Main St",
    city: "Seattle",
    state: "WA",
    zip: "98101"
}
const hobbies = {
    1: "reading",
    2: "writing",
    3: "driving",
}


//   const addplushobb = { address, hobbies }
// const addplushobb = { ...address, ...hobbies }
//   console.log(addplushobb)

// const addplushobb = Object.assign({}, address, hobbies)
// console.log(addplushobb)



const jsuser = [
    {
        id :"1",
        gmail:"xyz@gmail.com",
    },
    {
        gender:"male",
        issdtudent:"true"
    }
]
console.log(jsuser[0].id)




 console.log(Object.keys(user));

 console.log(Object.values(user));

 console.log(Object.entries(user));

 console.log(user.hasOwnProperty('isLoggedIn'));
 