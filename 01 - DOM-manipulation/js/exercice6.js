/**## Exercice 6 : Supprimer un Élément du DOM
**Objectif :** Supprimez un élément HTML du DOM.
1. Créez une liste (`<ul>`) dans votre document HTML avec plusieurs éléments de liste (`<li>`).
2. Utilisez JavaScript pour sélectionner l'un des éléments de liste.
3. Supprimez cet élément du DOM.  */
let ulEx5 = document.querySelector("#listEx6");
let liEx5 = ulEx5.getElementsByTagName("li");
let liIndex5 = liEx5[5];
liIndex5.remove();
