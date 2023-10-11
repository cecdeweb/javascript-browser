/**## Exercice 2 : Survoler un Élément
**Objectif** : Modifier le comportement d'un élément lorsqu'il est survolé.
1. Créez un élément HTML de votre choix (par exemple, un ```<div>```) avec un identifiant unique.
2. Utilisez JavaScript pour sélectionner cet élément par son identifiant.
3. Ajoutez un écouteur d'événements pour le survol de l'élément.
4. En réponse au survol, modifiez le style ou le contenu de l'élément.
 */
let div2 = document.querySelector("#div2");
div2.addEventListener("mouseover", function(e){
    div2.classList.toggle("style2");
});