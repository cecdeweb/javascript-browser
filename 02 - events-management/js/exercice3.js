/**## Exercice 3 : Appuyer sur une Touche
**Objectif** : Réagir à l'appui sur une touche du clavier.
1. Créez une zone de texte (<input>) dans votre document HTML avec un identifiant unique.
2. Utilisez JavaScript pour sélectionner cette zone de texte par son identifiant.
3. Ajoutez un écouteur d'événements pour l'appui sur une touche.
4. En réponse à l'appui sur une touche, affichez la touche appuyée dans la console.
 */
//input3
let input3 = document.querySelector("#input3");
input3.addEventListener("touchstart", function showKey(e){
    console.log(input3);
})