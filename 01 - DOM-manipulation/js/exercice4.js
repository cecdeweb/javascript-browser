/**## Exercice 4 : Modifier les Classes d'un Élément
**Objectif :** Changez les classes CSS d'un élément HTML.
1. Créez un paragraphe (`<p>`) dans votre document HTML avec une classe CSS.
2. Utilisez JavaScript pour sélectionner cet élément par sa classe.
3. Ajoutez une nouvelle classe à l'élément et supprimez l'ancienne classe.
*/
let ParagEx4 = document.querySelector(".styleEx4");
ParagEx4.classList.toggle("Style2Ex4");
ParagEx4.classList.remove(".styleEx4");
