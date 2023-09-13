// ## Exercice 1 : Modifier le Texte d'un Élément
document.querySelector("#hello").innerText = "Bonjour, DOM !";

// ## Exercice 2 : Modifier l'Attribut SRC d'une Image
document.querySelector("#img-base").src = "https://st.depositphotos.com/1146092/2514/i/450/depositphotos_25143517-stock-photo-cool-dog.jpg";

// ## Exercice 3 : Ajouter un Élément au DOM
//---------------- Solution simple
//let selectDiv = document.querySelector("#button");
//selectDiv.innerHTML = "<button>Mon bouton</button>";
//---------------- Solution avc createElement()
let createButton = document.createElement("button");
createButton.innerText = 'Mon button';
document.querySelector('#button').appendChild(createButton);

// ## Exercice 4 : Modifier les Classes d'un Élément
let selectP = document.querySelector(".style1");
selectP.classList.toggle("style2");
//.remove(".style2");

// ## Exercice 5 : Créer une Liste Dynamique
let createUl = document.querySelector("#listUlLi1").appendChild(document.createElement("ul"));
let tblPerson = ["Alice", "Bob", "Charlie"];

for(let i=0; i<tblPerson.length; i++){
    let createLi = document.createElement("li");
    createUl.appendChild(createLi);
    createLi.innerText = tblPerson[i];
}

//## Exercice 6 : Supprimer un Élément du DOM
/*
**Objectif :** Supprimez un élément HTML du DOM.

1. Créez une liste (`<ul>`) dans votre document HTML avec plusieurs éléments de liste (`<li>`).
2. Utilisez JavaScript pour sélectionner l'un des éléments de liste.
3. Supprimez cet élément du DOM.
*/
