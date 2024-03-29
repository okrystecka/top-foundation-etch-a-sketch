const container = document.querySelector("#container");
console.log(container)

const newP = document.createElement("p");
newP.style.color = "red";
newP.textContent = "Hey I’m red!";
container.appendChild(newP);


const newH3 = document.createElement("h3");
newH3.textContent = "Hi im green h3!";
newH3.setAttribute('style', 'color: green;');
container.appendChild(newH3); 

const newDiv = document.createElement('div');
newDiv.textContent = 'Im new div!';
newDiv.style.border = '2px solid black';
newDiv.style.backgroundColor = 'pink';


const subH1 = document.createElement('h1');
subH1.textContent = 'I’m in a div'
newDiv.appendChild(subH1);

const subP = document.createElement('p');
subP.textContent = 'ME TOO!';
newDiv.appendChild(subP);

container.appendChild(newDiv);