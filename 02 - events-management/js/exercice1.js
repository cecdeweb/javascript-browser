/**## Exercice 1 : Cliquer sur un Bouton
**Objectif** : Réagir à un clic sur un bouton en affichant une alerte.
1. Créez un bouton (<button>) dans votre document HTML avec un identifiant unique.
2. Utilisez JavaScript pour sélectionner ce bouton par son identifiant.
3. Ajoutez un écouteur d'événements pour le clic sur le bouton.
4. En réponse au clic, affichez une alerte avec le message de votre choix.
 */
let button1 = document.querySelector("#btn1");
button1.addEventListener("click", function(e){
    alert("entendu !")
});