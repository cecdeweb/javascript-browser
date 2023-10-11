/**## Exercice 5 : Créer une Liste Dynamique
**Objectif :** Ajoutez des éléments à une liste HTML à partir d'un tableau de données.
1. Créez une liste (`<ul>`) vide dans votre document HTML avec un identifiant unique.
2. Définissez un tableau de noms (par exemple, ["Alice", "Bob", "Charlie"]).
3. Utilisez JavaScript pour sélectionner la liste.
4. Utilisez une boucle pour ajouter chaque nom du tableau en tant qu'élément de liste (`<li>`) dans la liste.
*/
let createUl = document.querySelector("#listEx5");
let tblPerson = ["Alice", "Bob", "Charlie"];

for(let i=0; i<tblPerson.length; i++){
    let createLi = document.createElement("li");
    createUl.appendChild(createLi);
    createLi.innerText = tblPerson[i];
}
