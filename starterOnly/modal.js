function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



// DOM Elements

/* Le background de la page */
const modalbg = document.querySelector(".bground");
console.log (modalbg)

/* Bouton "je m'inscris" */
const modalBtn = document.querySelectorAll(".modal-btn");
console.log (modalBtn)

/* L'endroit où l'utilisateur renseigne ses données */
const formData = document.querySelectorAll(".formData");
console.log (formData)

/* Le body du formulaire */
const modalBody = document.querySelectorAll(".modal-body");
console.log (modalBody)

/* Bouton "Close" X */
const closeFormulaire = document.querySelectorAll(".close");

/* Les éléments du formulaire */

/* Le type de formulaire */
const form = document.querySelectorAll(".reserve");
console.log (form)

/* L'endroit où l'on renseigne le prénom */
const firstName = document.getElementById("first");
console.log (firstName)
/* L'endroit où l'on renseigne le message d'erreur du prénom érroné */
const firstNameX = document.getElementById("first_error");
console.log (firstNameX)

/* L'endroit où l'on renseigne le nom */
const lastName = document.getElementById("last");
console.log (lastName)
/* L'endroit où l'on renseigne le message d'erreur du nom érroné */
const lastNameX = document.getElementById("last_error");
console.log (lastNameX)

/* L'endroit où l'on renseigne l'email */
const email = document.getElementById("email");
console.log (email)
/* L'endroit où l'on renseigne le message d'erreur de l'email érroné */
const emailX = document.getElementById("email_error");
console.log (emailX)

/* L'endroit où l'on renseigne la date de naissance */
const birthdate = document.getElementById("birthdate");
console.log (birthdate)
/* L'endroit où l'on renseigne le message d'erreur de la date érronée */
const birthdateX = document.getElementById("birthdate_error");
console.log (birthdateX)

/* L'endroit où l'on renseigne le nombre de tournois */
const quantity = document.getElementById("quantity"); 
console.log (quantity)
/* L'endroit où l'on renseigne le message d'erreur du nombre de tournois */
const quantityX = document.getElementById("quantity_error");
console.log (quantityX)

/* L'endroit où l'on renseigne la ville */
const city = document.getElementsByName("location");
for (let i = 0 ; i<city.length ; i++){
  console.log (city [i]);
}

/* L'endroit où l'on renseigne le message "location manquante" */
const cityX = document.getElementById("location_manquant");
console.log (cityX)


/* L'endroit où l'on valide les conditions*/
const checkbox1 = document.getElementById("checkbox1");
console.log (checkbox1)
/* L'endroit où l'on renseigne si on veut être prévenu */
const checkbox2 = document.getElementById("checkbox2");
console.log (checkbox2)
/* L'endroit où le message d'erreur des conditions manquantes */
const conditionX = document.getElementById("condition_error");
console.log (conditionX)

/* Bouton de validation */
const validation = document.getElementById("btn-envoie");
console.log (validation)
/* Endroit où le message de validation apparait quand OK */
const validation_ok = document.getElementById("validation-ok");
console.log (validation_ok)

/* Fermer le formulaire */
const fermer = document.getElementById("fermer");

/* Bouton input "envoyer"*/
const submitBtn = document.querySelector(".btn-submit");
console.log (submitBtn)
/* L'endroit où apparait le message de confirmation de l'envoie */
const confirmation = document.getElementById("confirmation");
console.log (confirmation)



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}



