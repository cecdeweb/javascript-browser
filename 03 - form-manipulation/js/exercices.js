// Solution simple
//let selectDiv = document.querySelector("#button");
//selectDiv.innerHTML = "<button>Mon bouton</button>";
// Solution avc createElement()
let createButton = document.createElement('button');
document.querySelector('#button').appendChild(createButton);
createButton.innerHTML('Mon button');
//let selectDiv = document.querySelector('#button');
//selectDiv.appendChild(elementButton);
//document.querySelector('button').innerHTML('Mon button');
