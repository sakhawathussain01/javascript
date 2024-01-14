


function addlanguage(lname) {
    const li = document.createElement('li')
    li.innerHTML = `${lname}`
    document.querySelector('.list').appendChild(li)
    
}
addlanguage("python")
addlanguage("PHP")


// function addoptlanguage(lname) {
//     const li = document.createElement('li')
//     li.createTextNode = `${lname}`
//     document.querySelector('.list').appendChild(li)
    
// }
// addoptlanguage("java")

// --------------edit 

// let edit = document.querySelector('li:nth-child(3)');
// console.log(edit);

// edit.innerHTML = "HTML";

// const newli = document.createElement("li");

// newli.innerText = "c++";

// document.querySelector(".list").appendChild('newli')



let asf = document.querySelector('li:nth-child(2)')
asf.outerHTML = "<h2>python</h2>"
let asdf = document.querySelector('li:nth-child()')

asdf.remove()