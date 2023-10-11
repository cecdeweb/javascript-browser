/**## Exercice 1 : Cliquer sur un Bouton
**Objectif** : Réagir à un clic sur un bouton en affichant une alerte.
1. Créez un bouton (<button>) dans votre document HTML avec un identifiant unique.
2. Utilisez JavaScript pour sélectionner ce bouton par son identifiant.
3. Ajoutez un écouteur d'événements pour le clic sur le bouton.
4. En réponse au clic, affichez une alerte avec le message de votre choix.
 */
let myButton1 = document.getElementById('btn-ex2-1');
function myFunctionEx2() {
    alert("j'ai cliqué sur mon bouton !");
}
myButton1.addEventListener('click', myFunctionEx2);

// Ex2
let myDiv1 = document.getElementById('mouse1');
function myFunctionMouse(e) {
    e.target.style.color = "red";
}
myDiv1.addEventListener('mouseover', myFunctionMouse);

// Ex3
let myInputEx3 = document.getElementById('input-ex3');
myInputEx3.addEventListener('keydown', myFunctionTouch);
function myFunctionTouch(e) {
    const keyTouch = e.key;
    console.log("La touche est " + keyTouch);
}

//Ex4
let myDiv2 = document.getElementById('divEx4')
let newText = 'Texte dans ma boite dialogue';
myDiv2.innerHTML = newText;
// cibler le click dans la div
let recupClickDiv = myDiv2.addEventListener('click', myDiv2);
console.log(recupClickDiv);
function clickDiv(recupClickDiv) {
    if (recupClickDiv != false) {
        myDiv2.style.display = "none";
    }
}
//Ex5

let form = document.getElementById("formulaire");
let buttonSubmit = document.querySelector(('input[type="submit"]'));
let messageErreur = document.getElementById("messageError");

buttonSubmit.addEventListener("click", function (e) {
    e.preventDefault();

    let nom = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    if (!nom) {
        messageErreur.innerText = ("Merci de saisir un nom");
    }
    else if (!email) {
        messageErreur.innerText += (" \n Veuillez renseigner votre mail ");
    }
    else {
        form.submit();
        console.log(form);
    }
});

//Ex6

document.addEventListener("scroll", function (e) {
    document.querySelector("body").style.backgroundColor = "red";
});