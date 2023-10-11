/**## Exercice 3 : Ajouter un Élément au DOM
**Objectif :** Insérez un nouvel élément HTML dans le DOM.
1. Créez un bouton (`<button>`) avec le texte "Cliquez ici".
2. Utilisez JavaScript pour sélectionner un élément existant (par exemple, un `<div>`) dans votre document HTML.
3. Ajoutez le bouton en tant qu'enfant de cet élément.
*/
//---------------- Solution simple
let divButton3 = document.querySelector("#button3");
divButton3.innerHTML = "<button>Cliquez ici</button>";
//---------------- Solution avc createElement()
let createButton3 = document.createElement("button");
createButton3.innerText = "Mon button";
document.querySelector("#button33").appendChild(createButton3);
