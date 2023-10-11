/**## Exercice 1 : Modifier le Texte d'un Élément
**Objectif :** Remplacez le texte d'un élément HTML par un autre texte.
1. Créez un paragraphe (`<p>`) vide dans votre document HTML avec un identifiant unique.
2. Utilisez JavaScript pour sélectionner cet élément par son identifiant.
3. Modifiez le texte de ce paragraphe pour y afficher "Bonjour, DOM !".
 */
document.querySelector("#hello").innerText = "Bonjour, DOM !";

