let tag = document.createElement('div');

console.log(tag);


tag.className = 'main';

tag.id = 'one';

tag.innerText = 'hello world';

tag.style.backgroundColor = 'green';

tag.style.padding = '10px';

tag.style.color = 'white';


document.body.appendChild (tag);

let text = document.createTextNode(' hello there')


tag.appendChild(text)